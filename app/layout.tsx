import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundEffect } from "@/components/layout/BackgroundEffect";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { ChatbotWidget } from "@/components/chatbot/ChatbotWidget";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { WhatsAppFloatingButton } from "@/components/lead/WhatsAppFloatingButton";
import { ExitIntentPopup } from "@/components/lead/ExitIntentPopup";
import {
  defaultOgImage,
  JsonLd,
  personJsonLd,
  professionalServiceJsonLd,
  siteUrl,
  websiteJsonLd,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Razib Dash | AI Web Developer & Full-Stack Developer",
    template: "%s | Razib Dash",
  },
  description:
    "Razib Dash is a Software Engineer, CSE graduate from Metropolitan University Bangladesh, AI web developer, and freelance full-stack developer in Bangladesh building ecommerce websites, travel websites, AI chatbots, clinic EMR software, dashboards, custom web apps, and automation tools.",
  keywords: [
    "Razib Dash",
    "AI web developer",
    "Full Stack Developer",
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
  ],
  authors: [{ name: "Razib Dash" }],
  creator: "Razib Dash",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Razib Dash | AI Web Developer & Full-Stack Developer",
    description:
      "Client-focused portfolio of Razib Dash, a Software Engineer and CSE graduate from Metropolitan University Bangladesh, for websites, web apps, dashboards, AI chatbots, clinic EMR software, ecommerce websites, travel websites, and automation tools.",
    siteName: "Razib Dash Portfolio",
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Razib Dash AI web developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Razib Dash | AI Web Developer & Full-Stack Developer",
    description:
      "Full-stack and AI web developer for ecommerce, travel, clinic EMR, dashboard, chatbot, custom web app, and automation projects.",
    images: [defaultOgImage],
  },
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    google: "gbGhGSWJt7rE-3seQv5vaFdHX-_LNFBIHnx-q-EjuRQ",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <BackgroundEffect />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <JsonLd data={personJsonLd} />
          <JsonLd data={[professionalServiceJsonLd, websiteJsonLd]} />
          <CommandPalette />
          <ChatbotWidget />
          <main className="relative z-10 min-h-screen pt-24">{children}</main>
          <Footer />
          <WhatsAppFloatingButton />
          <ExitIntentPopup />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
