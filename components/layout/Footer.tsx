import Link from "next/link";
import { Github, Linkedin, Mail, Facebook } from "lucide-react";
import { Container } from "@/components/ui/Container";

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
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-paper/80 py-10 backdrop-blur-xl">
      <Container className="flex flex-col items-center justify-between gap-5 md:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Razib Dash.
        </p>
        <div className="flex items-center gap-3">
          {socials.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-1 hover:text-brand-600 dark:hover:text-brand-300"
              aria-label={item.label}
              data-cursor="Open"
            >
              <item.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
