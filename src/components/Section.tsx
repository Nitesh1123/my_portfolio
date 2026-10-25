import type { ReactNode } from "react";

type Props = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} className="border-t border-fg/10 py-24 sm:py-32">
      <header className="reveal mb-14 flex items-baseline gap-4">
        <span className="font-mono text-xs text-muted">{index}</span>
        <h2 className="text-sm font-medium uppercase tracking-[0.18em]">{title}</h2>
      </header>
      {children}
    </section>
  );
}
