import type { Metadata } from "next";

export const siteUrl = "https://www.razibdash.com";
export const siteName = "Razib Dash Portfolio";
export const defaultOgImage = "/og-image.png";

export const seoKeywords = [
  "AI web developer",
  "Full-stack developer",
  "Ecommerce website developer",
  "Travel website developer",
  "AI chatbot developer",
  "Clinic EMR software developer",
  "Business dashboard developer",
  "Custom web app developer",
  "AI automation developer",
  "Web developer in Bangladesh",
  "AI developer in Bangladesh",
  "Freelance full-stack developer",
  "Remote web developer for international clients",
];

type PageSeo = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = defaultOgImage,
  type = "website",
  keywords = [],
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [...seoKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Razib Dash`,
      description,
      url,
      siteName,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | Razib Dash`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Razib Dash`,
      description,
      images: [imageUrl],
    },
  };
}

export function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Razib Dash",
  url: siteUrl,
  jobTitle: "Software Engineer, AI Web Developer, Full-Stack Developer",
  description:
    "Razib Dash is an Software Engineer in Bangladesh building websites, dashboards, AI chatbots, EMR software, custom web apps, and automation tools.",
  sameAs: [
    "https://github.com/razibdash",
    "https://www.linkedin.com/in/razibdash",
    "https://www.facebook.com/avronilrajib",
    "https://www.instagram.com/razibdash",
    "https://www.youtube.com/@razib-dash",
    "https://www.tumblr.com/razibdash",
    "https://bsky.app/profile/razibdash.bsky.social",
    "https://www.threads.com/@razibdash",
    "https://dribbble.com/razibdash",
    "https://codeforces.com/profile/avronilrajib",
    "https://www.behance.net/razibdash",
  ],
};

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Razib Dash Web Development and AI Automation Services",
  url: siteUrl,
  image: absoluteUrl(defaultOgImage),
  email: "mailto:avrorazib@gmail.com",
  areaServed: ["Bangladesh", "International", "Remote"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sylhet",
    addressCountry: "BD",
  },
  serviceType: [
    "Ecommerce Website Development",
    "Travel Website Development",
    "AI Chatbot Development",
    "Clinic / EMR Software Development",
    "Business Dashboard Development",
    "Custom Web App Development",
    "AI Automation Tools",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description:
    "Portfolio and service website for Razib Dash, a Software Engineer and CSE graduate from Metropolitan University Bangladesh serving local and international clients with full-stack and AI web development.",
  publisher: {
    "@type": "Person",
    name: "Razib Dash",
  },
};
