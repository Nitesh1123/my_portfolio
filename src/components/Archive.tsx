import { ArrowUpRight } from "lucide-react";
import { archive } from "@/data";
import { Section } from "@/components/Section";

export function Archive() {
  return (
    <Section id="archive" index="02" title="More projects">
      <ul className="border-b border-fg/10">
        {archive.map((project) => (
          <li key={project.title} className="reveal border-t border-fg/10">
            <a
              href={project.live ?? project.code}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-[3.5rem_1fr_auto] items-baseline gap-4 py-5 transition-colors sm:grid-cols-[4.5rem_1.1fr_1.4fr_auto] sm:gap-6"
            >
              <span className="font-mono text-xs text-muted">{project.year}</span>
              <span>
                <span className="font-medium transition-colors group-hover:text-accent">{project.title}</span>
                <span className="mt-1 block text-sm text-muted sm:hidden">{project.summary}</span>
              </span>
              <span className="hidden text-sm text-muted sm:block">
                {project.summary}
                <span className="mt-1 block font-mono text-xs opacity-70">{project.stack.join(" · ")}</span>
              </span>
              <ArrowUpRight className="size-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
