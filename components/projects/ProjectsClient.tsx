"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

const filters: Array<"All" | ProjectCategory> = [
  "All",
  "AI",
  "Web",
  "Full Stack",
];

export function ProjectsClient() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filteredProjects = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active],
  );

  return (
    <Container className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="A portfolio grid with real product thinking behind every build."
        description="Filter by project type and open detailed pages with tech stack, screenshots, GitHub links, and live demos."
      />

      <div className="mt-9 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full border border-line px-4 py-2 text-sm font-semibold text-muted transition hover:border-brand-500 hover:text-brand-700 dark:hover:text-brand-300",
              active === filter &&
                "border-brand-500 bg-brand-500/10 text-brand-700 dark:text-brand-300",
            )}
            data-cursor="Filter"
          >
            {filter}
          </button>
        ))}
      </div>

      <StaggerGroup
        key={active}
        className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="group rounded-[2rem] backdrop-blur transition hover:-translate-y-2 hover:shadow-soft dark:bg-slate-950/50"
            data-cursor="View"
          >
            <div className="overflow-hidden rounded-2xl bg-brand-500/5">
              <Image
                src={project.image}
                alt={project.title}
                width={720}
                height={460}
                className="transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">
                  {project.category}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold tracking-tight">
                  {project.title}
                </h2>
              </div>

              <ExternalLink className="h-5 w-5 shrink-0 text-muted transition group-hover:text-brand-600 dark:group-hover:text-brand-300" />
            </div>

            <p className="mt-3 text-sm leading-6 text-muted">
              {project.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </StaggerGroup>

      {filteredProjects.length === 0 && (
        <div className="flex justify-center items-center">
          <p className="mt-10 text-sm text-muted">No projects found.</p>
        </div>
      )}
    </Container>
  );
}
