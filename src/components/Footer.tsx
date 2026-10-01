import { personal } from "@/data/cv";

export const Footer = () => (
  <footer className="relative border-t border-white/5 py-10">
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-xl font-black gradient-text">NK</span>
      <p className="text-white/25 text-xs mono">
        {new Date().getFullYear()} Nitesh Kumar
      </p>
      <div className="flex items-center gap-2">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-60" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4ADE80]" />
        </span>
        <span className="text-white/25 text-xs mono uppercase tracking-wider">Open to work</span>
      </div>
    </div>
  </footer>
);