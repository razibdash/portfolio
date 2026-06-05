import {
  Bot,
  CheckCircle2,
  ClipboardList,
  CloudUpload,
  Code2,
  Gauge,
  LayoutDashboard,
  Lightbulb,
  Palette,
  Settings2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { Reveal } from "@/components/motion/Reveal";

const beforeItems = ["Manual work", "Slow process", "Scattered data"];
const afterItems = ["Automation", "Dashboard", "AI tools", "Faster workflow"];

const journeySteps = [
  { title: "Share your idea", icon: Lightbulb },
  { title: "Plan the solution", icon: ClipboardList },
  { title: "Design the UI", icon: Palette },
  { title: "Build the system", icon: Code2 },
  { title: "Test and deploy", icon: CloudUpload },
  { title: "Support after launch", icon: Settings2 },
];

export function ServiceVisualSections() {
  return (
    <>
      <section className="border-y border-line bg-white/45 py-20 backdrop-blur dark:bg-slate-950/30">
        <Container>
          <SectionHeading
            eyebrow="Workflow Upgrade"
            title="From manual work to smarter business systems."
            description="A simple view of how a website, dashboard, AI chatbot, or automation tool can improve daily operations."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-line bg-white/65 p-7 shadow-sm backdrop-blur dark:bg-slate-950/45">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">
                  Before
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold">
                  Repetitive and scattered
                </h3>
                <div className="mt-6 grid gap-3">
                  {beforeItems.map((item) => (
                    <div key={item} className="rounded-2xl border border-line bg-paper/70 p-4 text-muted">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="h-full rounded-3xl border border-brand-500/30 bg-brand-600 p-7 text-white shadow-glow">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-100">
                  After
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold">
                  Faster and easier to manage
                </h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {afterItems.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 text-blue-50">
                      <CheckCircle2 className="h-5 w-5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[Bot, LayoutDashboard, Gauge].map((Icon, index) => (
                    <div key={index} className="grid h-20 place-items-center rounded-2xl bg-white/10">
                      <Icon className="h-7 w-7 text-blue-100" />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Container className="py-20">
        <SectionHeading
          eyebrow="Client Journey"
          title="Your Project Journey"
          description="A clear, calm process from first idea to launch and support."
          centered
        />

        <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {journeySteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-line bg-white/65 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:bg-slate-950/45"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-700 dark:text-brand-300">
                  <step.icon className="h-6 w-6" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {step.title}
              </h3>
            </div>
          ))}
        </StaggerGroup>
      </Container>
    </>
  );
}
