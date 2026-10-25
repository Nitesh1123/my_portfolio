import type { PointerEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { featured, type Project } from "@/data";
import { Section } from "@/components/Section";

export function Work() {
  return (
    <Section id="work" index="01" title="Selected work">
      <div className="space-y-4">
        {featured.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i + 1} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const track = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  };

  return (
    <article
      onPointerMove={track}
      className="reveal group relative grid gap-8 overflow-hidden rounded-2xl border border-fg/10 bg-surface/40 p-6 transition-colors duration-500 hover:border-fg/20 sm:p-10 md:grid-cols-12"
    >
      <div className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative md:col-span-5">
        <p className="font-mono text-xs text-muted">
          {String(index).padStart(2, "0")} — {project.year}
        </p>
        <h3 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">{project.title}</h3>
        <p className="mt-2 text-muted">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.live && <LinkPill href={project.live} label="Live" primary />}
          <LinkPill href={project.code} label="Code" />
        </div>
      </div>

      <div className="relative md:col-span-7">
        <p className="leading-relaxed">{project.description}</p>

        <ul className="mt-6 space-y-2.5 text-sm text-muted">
          {project.points?.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-[0.6em] h-px w-3 shrink-0 bg-accent" />
              {point}
            </li>
          ))}
        </ul>

        <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-muted">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function LinkPill({ href, label, primary }: { href: string; label: string; primary?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group/link inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors ${
        primary ? "bg-fg text-bg" : "border border-fg/15 hover:border-fg/40"
      }`}
    >
      {label}
      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
    </a>
  );
}
