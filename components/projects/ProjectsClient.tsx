"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { ProjectBadges } from "@/components/projects/ProjectBadges";
import { projectFilters, projects, type ProjectFilter } from "@/data/projects";
import { cn } from "@/lib/utils";
import { TechStackBadges } from "@/components/ui/TechStackBadges";

export function ProjectsClient() {
  const [active, setActive] = useState<"All" | ProjectFilter>("All");

  const filteredProjects = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.filters.includes(active)),
    [active],
  );

  return (
    <Container className="py-16 md:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="A portfolio grid with real product thinking behind every build."
        description="Filter by project type and open detailed pages with tech stack, screenshots, GitHub links, and live demos."
      />

      <div
        className="mt-9 flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0"
        role="tablist"
        aria-label="Project filters"
      >
        {projectFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            role="tab"
            aria-selected={active === filter}
            className={cn(
              "shrink-0 rounded-full border border-line px-4 py-2 text-sm font-semibold text-muted transition hover:border-brand-500 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/40 dark:hover:text-brand-300",
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
          <article key={project.slug} className="h-full">
            <Link
              href={`/projects/${project.slug}`}
              className="group flex h-full flex-col rounded-[2rem] border border-transparent p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-line hover:bg-white/60 hover:shadow-soft dark:hover:bg-slate-950/50"
              data-cursor="View"
            >
              <div className="overflow-hidden rounded-2xl bg-brand-500/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={720}
                  height={460}
                  className="aspect-[1.56] object-cover transition duration-500 group-hover:scale-105"
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

              <ProjectBadges
                badges={project.badges.slice(0, 3)}
                className="mt-4"
              />

              <p className="mt-3 text-sm leading-6 text-muted">
                {project.summary}
              </p>

              <div className="mt-auto pt-5">
                <TechStackBadges items={project.stack} limit={4} />
              </div>
            </Link>
          </article>
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
