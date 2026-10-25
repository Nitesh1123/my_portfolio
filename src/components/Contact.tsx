import { useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react";
import { profile } from "@/data";
import { Section } from "@/components/Section";

const socials = [
  { label: "GitHub", href: profile.links.github },
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "LeetCode", href: profile.links.leetcode },
  { label: "Résumé", href: profile.resume },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <Section id="contact" index="03" title="Contact">
      <div className="reveal">
        <p className="max-w-3xl text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.05] tracking-[-0.03em]">
          Have a role or a project in mind? I reply to every email.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-transform active:scale-[0.98]"
          >
            {profile.email}
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-full border border-fg/15 px-4 py-3 text-sm transition-colors hover:border-fg/40"
          >
            {copied ? <Check className="size-4 text-accent" /> : <Copy className="size-4" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      <footer className="mt-32 flex flex-col gap-8 border-t border-fg/10 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-6">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
            Back to top <ArrowUp className="size-3.5" />
          </a>
        </div>
      </footer>
    </Section>
  );
}
