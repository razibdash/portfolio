import { NextResponse } from "next/server";
import { portfolioKnowledgeText } from "@/data/portfolioKnowledge";

export const runtime = "nodejs";

type ChatRole = "user" | "assistant";

type IncomingMessage = {
  role?: unknown;
  content?: unknown;
};

type GroqMessage = {
  role: "system" | ChatRole;
  content: string;
};

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const DEFAULT_MODEL = "llama-3.3-70b-versatile";
const FAST_MODEL = "llama-3.1-8b-instant";
const MODEL = process.env.GROQ_MODEL || DEFAULT_MODEL;
const MAX_INPUT_LENGTH = 900;
const MAX_HISTORY_MESSAGES = 8;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 12;

const requestBuckets = new Map<string, { count: number; resetAt: number }>();

const systemPrompt = `You are Razib AI Assistant, a professional portfolio assistant for Razib Dash. Your job is to help recruiters, clients, and visitors understand Razib's skills, projects, experience, resume, and contact options. Use only the provided portfolio knowledge base. Do not invent facts. If something is not available in the knowledge base, say so clearly and suggest contacting Razib. Keep answers concise, helpful, and professional. When relevant, mention projects such as GlobaHealth EMR, eApply, EMR Accounting System, AI QA Creator, and MU Chat Bot. Always represent Razib honestly as a growing software developer focused on full-stack development, healthcare software, AI integrations, automation, dashboards, and clean product thinking.

Portfolio knowledge base:
${portfolioKnowledgeText}`;

function getClientKey(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local"
  );
}

function isRateLimited(key: string) {
  const now = Date.now();
  const bucket = requestBuckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    requestBuckets.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX_REQUESTS;
}

function normalizeMessages(messages: IncomingMessage[]) {
  return messages
    .filter(
      (message): message is { role: ChatRole; content: string } =>
        (message.role === "user" || message.role === "assistant") &&
        typeof message.content === "string",
    )
    .map((message) => ({
      role: message.role,
      content: message.content.trim().slice(0, MAX_INPUT_LENGTH),
    }))
    .filter((message) => message.content.length > 0)
    .slice(-MAX_HISTORY_MESSAGES);
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          answer:
            "Razib AI Assistant is not configured yet. Please add GROQ_API_KEY on the server and try again.",
        },
        { status: 503 },
      );
    }

    if (isRateLimited(getClientKey(request))) {
      return NextResponse.json(
        {
          answer:
            "Too many chat requests in a short time. Please wait a moment and try again.",
        },
        { status: 429 },
      );
    }

    const body = await request.json().catch(() => null);

    if (!body || !Array.isArray(body.messages)) {
      return NextResponse.json(
        { answer: "Please send messages in the expected chat format." },
        { status: 400 },
      );
    }

    const messages = normalizeMessages(body.messages);
    const latestUserMessage = [...messages]
      .reverse()
      .find((message) => message.role === "user");

    if (!latestUserMessage) {
      return NextResponse.json(
        { answer: "Please ask a question so I can help." },
        { status: 400 },
      );
    }

    const groqMessages: GroqMessage[] = [
      { role: "system", content: systemPrompt },
      ...messages,
    ];

    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: groqMessages,
        temperature: 0.3,
        max_tokens: 450,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          answer:
            "Razib AI Assistant could not reach the AI service right now. Please try again later or contact Razib directly.",
          error: `AI service error: ${response.status} ${response.statusText}`,
        },
        { status: 502 },
      );
    }

    const data = await response.json();
    const answer =
      typeof data?.choices?.[0]?.message?.content === "string"
        ? data.choices[0].message.content.trim()
        : "";

    return NextResponse.json({
      answer:
        answer ||
        `I could not generate a helpful response right now. Please try another question or contact Razib. The model can be switched from ${DEFAULT_MODEL} to ${FAST_MODEL} on the server if a faster response is preferred.`,
    });
  } catch {
    return NextResponse.json(
      {
        answer:
          "Something went wrong with Razib AI Assistant. Please try again later or contact Razib through the contact page.",
      },
      { status: 500 },
    );
  }
}
