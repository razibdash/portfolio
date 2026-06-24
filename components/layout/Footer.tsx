import Link from "next/link";
import {
  ArrowRight,
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Youtube,
} from "lucide-react";
import {
  SiBehance,
  SiBluesky,
  SiCodeforces,
  SiThreads,
  SiTumblr,
} from "react-icons/si";
import { Container } from "@/components/ui/Container";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  "Ecommerce Website",
  "Travel Website",
  "AI Chatbot",
  "Clinic / EMR Software",
  "Business Dashboard",
  "Custom Web App",
];

const socials = [
  { href: "https://github.com/razibdash", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/razibdash/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.facebook.com/avronilrajib",
    label: "Facebook",
    icon: Facebook,
  },
  { href: "mailto:avrorazib@gmail.com", label: "Email", icon: Mail },
  {
    href: "https://www.instagram.com/razibdash",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.youtube.com/@razib-dash",
    label: "YouTube",
    icon: Youtube,
  },
  {
    href: "https://www.tumblr.com/razibdash",
    label: "Tumblr",
    icon: SiTumblr,
  },
  {
    href: "https://bsky.app/profile/razibdash.bsky.social",
    label: "Bluesky",
    icon: SiBluesky,
  },
  {
    href: "https://www.threads.com/@razibdash",
    label: "Threads",
    icon: SiThreads,
  },
  {
    href: "https://dribbble.com/razibdash",
    label: "Dribbble",
    icon: Dribbble,
  },
  {
    href: "https://codeforces.com/profile/avronilrajib",
    label: "Codeforces",
    icon: SiCodeforces,
  },
  {
    href: "https://www.behance.net/razibdash",
    label: "Behance",
    icon: SiBehance,
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-paper/85 py-12 backdrop-blur-xl">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.9fr_0.8fr]">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">
              Razib Dash
            </p>
            <p className="mt-4 max-w-md leading-7 text-muted">
              Software Engineer and CSE graduate building AI-powered websites,
              web apps, dashboards, EMR systems, chatbots, and automation tools
              for businesses.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700"
              data-cursor="Open"
            >
              Available for freelance projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">
              Quick Links
            </h2>
            <div className="mt-5 grid gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted transition hover:text-brand-600 dark:hover:text-brand-300"
                  data-cursor="Open"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">
              Services
            </h2>
            <div className="mt-5 grid gap-3">
              {serviceLinks.map((item) => (
                <Link
                  key={item}
                  href="/services"
                  className="text-sm font-medium text-muted transition hover:text-brand-600 dark:hover:text-brand-300"
                  data-cursor="Open"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">
              Contact
            </h2>
            <Link
              href="mailto:avrorazib@gmail.com"
              className="mt-5 inline-flex break-all text-sm font-medium text-muted transition hover:text-brand-600 dark:hover:text-brand-300"
              data-cursor="Open"
            >
              avrorazib@gmail.com
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socials.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-1 hover:text-brand-600 dark:hover:text-brand-300"
                  aria-label={item.label}
                  data-cursor="Open"
                >
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-sm text-muted">
          (c) {new Date().getFullYear()} Razib Dash. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
