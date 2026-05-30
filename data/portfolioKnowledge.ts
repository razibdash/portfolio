import { blogs } from "@/data/blogs";
import { certificates } from "@/data/certificates";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export const portfolioKnowledge = {
  profile: {
    name: "Razib Dash",
    role: "Junior Software Developer / AI Enthusiast",
    currentPosition: {
      title: "Junior Software Developer",
      company: "AI Health Tech",
      location: "Sylhet, Bangladesh",
    },
    summary:
      "Razib Dash is a Junior Software Developer at AI Health Tech, Sylhet, Bangladesh. He is focused on full-stack development, healthcare software, AI integrations, automation, dashboards, and clean product thinking.",
    targetRoles: [
      "Junior Software Developer",
      "Full Stack Developer",
      "AI-focused Developer",
    ],
    focusAreas: [
      "Full-stack development",
      "Healthcare software",
      "AI integrations",
      "Automation",
      "Dashboards",
    ],
    availability:
      "Open to job opportunities, freelance work, collaboration, and professional conversations through the contact page.",
    family: {
      father: "Rakhal Dash",
      mother: "Nioti Rani Dash",
      sister: "Nipa Dash",
    },
  },
  skills: {
    coreStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "FastAPI",
      "TailwindCSS",
    ],
    frontend:
      skills.find((group) => group.category === "Frontend")?.items ?? [],
    backend: skills.find((group) => group.category === "Backend")?.items ?? [],
    ai: [
      "Groq API",
      "OpenAI-compatible APIs",
      "RAG",
      "Embeddings",
      "LangChain concepts",
      "Automation",
      "AI-assisted workflows",
      ...(skills.find((group) => group.category === "AI")?.items ?? []),
    ],
    tools: skills.find((group) => group.category === "Tools")?.items ?? [],
  },
  experience: [
    {
      role: "Junior Software Developer",
      company: "AI Health Tech",
      location: "Sylhet, Bangladesh",
      context:
        "Professional software development role focused on healthcare technology, full-stack development, and AI-powered product features.",
      details: [
        "Work as a Junior Software Developer at AI Health Tech in Sylhet, Bangladesh.",
        "Build and maintain responsive web interfaces with clean component architecture.",
        "Work with APIs, form validation, reusable UI patterns, and data-driven layouts.",
        "Contribute to healthcare software features, dashboards, EMR-related systems, and workflow improvements.",
        "Explore AI-assisted features, automation workflows, and practical product improvements.",
        "Focus on maintainable TypeScript, clean UI patterns, and application performance.",
      ],
    },
  ],
  projects: projects.map((project) => ({
    title: project.title,
    slug: project.slug,
    category: project.category,
    status: project.status,
    summary: project.summary,
    stack: project.stack,
    badges: project.badges,
    keyFeatures: project.caseStudy.keyFeatures,
    contribution: project.caseStudy.contribution,
    result: project.caseStudy.result,
    links: project.caseStudy.links,
  })),
  certifications: certificates.map((certificate) => ({
    title: certificate.title,
    issuer: certificate.issuer,
    year: certificate.year,
  })),
  blogTopics: blogs.map((blog) => ({
    title: blog.title,
    summary: blog.summary,
    tag: blog.tag,
  })),
  links: {
    resume: "/resume/cv.pdf",
    contact: "/contact",
    github: "https://github.com/razibdash",
    linkedin: "https://www.linkedin.com/in/razibdash/",
    email: "mailto:avrorazib@gmail.com",
  },
  preferredWorkAreas: [
    "Healthcare dashboards",
    "AI-powered EMR features",
    "RAG-based chatbot systems",
    "Browser automation tools",
    "Full-stack web applications",
  ],
};

export const portfolioKnowledgeText = JSON.stringify(
  portfolioKnowledge,
  null,
  2,
);
