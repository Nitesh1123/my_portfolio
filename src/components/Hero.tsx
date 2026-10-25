import { useEffect, useState, type CSSProperties } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const formatTime = () =>
  new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: profile.timeZone }).format(new Date());

export function Hero() {
  const [time, setTime] = useState(formatTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="flex min-h-[100svh] flex-col justify-end pb-16 pt-32 sm:pb-24">
      <p className="reveal mb-8 flex items-center gap-2.5 text-sm text-muted" style={delay(100)}>
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex size-2 rounded-full bg-accent" />
        </span>
        Open to new opportunities
      </p>

      <h1
        className="reveal max-w-4xl text-[clamp(2.4rem,6.4vw,5.25rem)] font-medium leading-[1.02] tracking-[-0.035em]"
        style={delay(200)}
      >
        I build real-time backends, AI tools and data pipelines that hold up under load.
      </h1>

      <p
        className="reveal mt-8 max-w-xl text-lg leading-relaxed text-muted"
        style={delay(350)}
      >
        I'm {profile.name}, a final-year computer science student at Lovely Professional University. Recently: a
        Kafka-backed chat platform built as microservices, and a research assistant that answers questions about
        companies with cited sources.
      </p>

      <div
        className="reveal mt-12 flex flex-wrap items-center gap-3"
        style={delay(500)}
      >
        <a
          href="#work"
          className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg transition-transform active:scale-[0.98]"
        >
          Selected work
          <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-fg/15 px-5 py-3 text-sm transition-colors hover:border-fg/40"
        >
          GitHub
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <dl
        className="reveal mt-20 grid grid-cols-2 gap-6 border-t border-fg/10 pt-6 text-sm sm:grid-cols-4"
        style={delay(650)}
      >
        <Fact label="Based in" value={profile.location} />
        <Fact label="Local time" value={`${time} IST`} />
        <Fact label="Focus" value="Backend · Data · AI" />
        <Fact label="Studying" value="B.Tech CSE, 2027" />
      </dl>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-1.5 tabular-nums">{value}</dd>
    </div>
  );
}
