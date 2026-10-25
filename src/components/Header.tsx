import { useEffect, useState, type MouseEvent } from "react";
import { Moon, Sun } from "lucide-react";
import { profile } from "@/data";

const nav = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [active, setActive] = useState("");
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > 240 && y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] ${
        hidden ? "-translate-y-full" : ""
      } ${scrolled ? "border-b border-fg/10 bg-bg/75 backdrop-blur-xl" : "border-b border-transparent"}`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-sm font-medium tracking-tight">
          {profile.name}
        </a>

        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative hidden px-2 py-1 text-sm transition-colors sm:block ${
                active === id ? "text-fg" : "text-muted hover:text-fg"
              }`}
            >
              {label}
              <span
                className={`absolute inset-x-2 -bottom-0.5 h-px origin-left bg-fg transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] ${
                  active === id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full border border-fg/15 px-3.5 py-1.5 text-sm transition-colors hover:border-fg/40"
          >
            Résumé
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const toggle = (event: MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const dark = !root.classList.contains("dark");
    const apply = () => {
      root.classList.toggle("dark", dark);
      try {
        localStorage.setItem("theme", dark ? "dark" : "light");
      } catch {
        // Storage can be unavailable in private browsing; the toggle still works for this visit.
      }
    };

    if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply();
      return;
    }

    // Expand the new theme as a circle from the button.
    const { clientX: x, clientY: y } = event;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(apply).ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 600, easing: "cubic-bezier(.2,.7,.2,1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:text-fg"
    >
      <Sun className="hidden size-4 dark:block" />
      <Moon className="size-4 dark:hidden" />
    </button>
  );
}
