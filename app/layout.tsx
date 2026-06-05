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
  metadataBase: new URL("https://razibdash.dev"),
  title: {
    default: "Razib Dash | Software Developer & AI Enthusiast",
    template: "%s | Razib Dash",
  },
  description:
    "Premium developer portfolio of Razib Dash, Software Developer and AI Enthusiast focused on modern web apps, AI products, and full-stack systems.",
  keywords: [
    "Razib Dash",
    "Software Developer",
    "Software Engineer",
    "AI Enthusiast",
    "Generative AI",
    "Next.js Developer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Razib Dash" }],
  creator: "Razib Dash",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://razibdash.dev",
    title: "Razib Dash | Software Developer & AI Enthusiast",
    description:
      "Modern, recruiter-ready developer portfolio showcasing projects, skills, experience, certificates, and technical writing.",
    siteName: "Razib Dash Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Razib Dash Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Razib Dash | Software Developer & AI Enthusiast",
    description:
      "Software Developer focused on AI-powered and full-stack web applications.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
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
