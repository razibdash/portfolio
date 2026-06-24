import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const gradients = [
  ["#6366f1", "#7c3aed"],
  ["#0ea5e9", "#10b981"],
  ["#d946ef", "#6366f1"],
  ["#f59e0b", "#e11d48"],
  ["#14b8a6", "#2563eb"],
  ["#f43f5e", "#d946ef"],
];

function gradientForSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return gradients[hash % gradients.length];
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const [from, to] = gradientForSlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: `linear-gradient(135deg, ${from}, ${to})`,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 28,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 4,
            opacity: 0.85,
          }}
        >
          {post?.tag ?? "Blog"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {post?.title ?? "Razib Dash"}
        </div>
        <div style={{ display: "flex", fontSize: 28, opacity: 0.85 }}>
          razibdash.com
        </div>
      </div>
    ),
    { ...size },
  );
}
