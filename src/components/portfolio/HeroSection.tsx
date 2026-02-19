import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TITLES = [
  "Product Manager",
  "Technical Product Owner",
  "AI Platform Builder",
  "0→1 Product Strategist",
];

interface HeroSectionProps {
  onScrollToProjects: () => void;
}

const HeroSection = ({ onScrollToProjects }: HeroSectionProps) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = TITLES[titleIndex];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
        return () => clearTimeout(t);
      } else {
        setTitleIndex((i) => (i + 1) % TITLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, titleIndex]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="section-dark relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Rich background layers */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute inset-0 grid-lines opacity-20" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, hsl(0 0% 4%) 100%)",
        }}
      />

      {/* Top-right dramatic glow */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] pointer-events-none opacity-[0.07]"
        style={{ background: "radial-gradient(circle, hsl(4 100% 59%), transparent 60%)" }}
      />
      {/* Bottom-left subtle glow */}
      <div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] pointer-events-none opacity-[0.05]"
        style={{ background: "radial-gradient(circle, hsl(4 100% 59%), transparent 60%)" }}
      />

      {/* Animated horizontal scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none animate-scan-line"
        style={{ background: "linear-gradient(90deg, transparent, hsl(4 100% 59% / 0.25), transparent)" }}
      />

      {/* Decorative corner brackets */}
      <div className="absolute top-20 left-6 md:left-12 opacity-20">
        <div className="w-8 h-8 border-t border-l border-accent" />
      </div>
      <div className="absolute top-20 right-6 md:right-12 opacity-20">
        <div className="w-8 h-8 border-t border-r border-accent" />
      </div>
      <div className="absolute bottom-16 left-6 md:left-12 opacity-20">
        <div className="w-8 h-8 border-b border-l border-accent" />
      </div>
      <div className="absolute bottom-16 right-6 md:right-12 opacity-20">
        <div className="w-8 h-8 border-b border-r border-accent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* System label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/60" />
          <span className="status-dot active" />
          <span className="font-mono text-xs text-muted-foreground tracking-[0.35em] uppercase">
            SYSTEM ONLINE // PORTFOLIO v6.0
          </span>
          <span className="status-dot active" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/60" />
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-terminal text-7xl md:text-[110px] text-foreground tracking-widest leading-none">
            VENKAT SANHIT
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-terminal text-7xl md:text-[110px] tracking-widest leading-none mb-8"
            style={{
              color: "hsl(var(--accent))",
              textShadow: "0 0 40px hsl(4 100% 59% / 0.5), 0 0 80px hsl(4 100% 59% / 0.2)",
            }}
          >
            SRINIVASULA
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md mx-auto h-px mb-6"
          style={{ background: "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.5), transparent)" }}
        />

        {/* Animated title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="h-8 flex items-center justify-center mb-4"
        >
          <span className="font-mono text-base md:text-lg tracking-widest" style={{ color: "hsl(var(--silver))" }}>
            {displayed}
            <span className="cursor-blink" />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mb-10 font-sans text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Building scalable digital products from{" "}
          <span className="text-accent font-mono font-medium">0→1</span> and{" "}
          <span className="text-accent font-mono font-medium">1→N</span> — at the intersection of
          AI, strategy, and cross-functional execution.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.88, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button onClick={onScrollToProjects} className="btn-retro-primary">
            VIEW PROJECTS
          </button>
          <button onClick={() => handleScroll("about")} className="btn-retro-outline">
            ABOUT ME
          </button>
          <a href="mailto:sanhit567@gmail.com" className="btn-retro-outline">
            CONTACT
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 border border-border/60 overflow-hidden"
          style={{ boxShadow: "0 0 40px hsl(4 100% 59% / 0.05)" }}
        >
          {[
            { value: "6+", label: "YEARS EXP" },
            { value: "0→N", label: "INITIATIVES" },
            { value: "60%", label: "REV GROWTH" },
            { value: "200%", label: "TRAFFIC ↑" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="relative py-6 px-4 text-center group cursor-default overflow-hidden"
              style={{
                borderRight: i < 3 ? "1px solid hsl(var(--border) / 0.6)" : "none",
                background: "hsl(0 0% 7% / 0.5)",
              }}
            >
              {/* Hover fill */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className="font-terminal text-4xl mb-1 transition-all duration-300 group-hover:scale-110"
                style={{
                  color: "hsl(var(--accent))",
                  textShadow: "0 0 20px hsl(4 100% 59% / 0.6)",
                }}
              >
                {stat.value}
              </div>
              <div className="font-mono text-[10px] text-muted-foreground tracking-[0.25em]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="font-mono text-[9px] text-muted-foreground/40 tracking-[0.4em]">SCROLL</div>
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-accent/60" />
        <div className="w-2 h-2 border-r border-b border-accent/60 rotate-45" />
      </div>
    </section>
  );
};

export default HeroSection;
