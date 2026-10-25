import type { ReactNode } from "react";
import { certifications, education, profiles, stack } from "@/data";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" index="02" title="About">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="reveal space-y-5 text-lg leading-relaxed md:col-span-5">
          <p>
            Most of what I build sits behind an interface: message brokers, socket servers, retrieval systems and
            ETL jobs. I like problems where the hard part is making something correct under load or under
            uncertainty, not just making it render.
          </p>
          <p className="text-muted">
            I work across the stack when a project needs it, and I care about the boring parts that keep a system
            dependable: clear failure modes, honest evaluation and code someone else can pick up.
          </p>
        </div>

        <div className="space-y-14 md:col-span-6 md:col-start-7">
          <Block title="Stack">
            {stack.map((row) => (
              <Row key={row.label} left={row.label} right={row.items} />
            ))}
          </Block>

          <Block title="Education">
            {education.map((item) => (
              <Row key={item.title} left={item.period} right={`${item.title} — ${item.place}`} note={item.detail} />
            ))}
          </Block>

          <Block title="Certifications">
            {certifications.map((item) => (
              <Row key={item.title} left={item.period} right={item.title} note={item.place} href={item.url} />
            ))}
          </Block>

          <Block title="Problem solving">
            {profiles.map((item) => (
              <Row key={item.label} left={item.detail} right={item.label} href={item.url} />
            ))}
          </Block>
        </div>
      </div>
    </Section>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="reveal">
      <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">{title}</h3>
      <dl className="divide-y divide-fg/10 border-y border-fg/10">{children}</dl>
    </div>
  );
}

function Row({ left, right, note, href }: { left: string; right: string; note?: string; href?: string }) {
  const content = (
    <>
      {right}
      {note && <span className="text-muted"> · {note}</span>}
    </>
  );

  return (
    <div className="grid grid-cols-[7.5rem_1fr] gap-4 py-3 text-sm">
      <dt className="text-muted">{left}</dt>
      <dd>
        {href ? (
          <a href={href} target="_blank" rel="noreferrer" className="underline decoration-fg/20 underline-offset-4 transition-colors hover:decoration-accent">
            {content}
          </a>
        ) : (
          content
        )}
      </dd>
    </div>
  );
}
