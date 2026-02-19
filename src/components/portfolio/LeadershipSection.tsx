import { motion } from "framer-motion";

interface LeadershipSectionProps {
  variant: "light" | "dark";
}

const LEADERSHIP = [
  {
    role: "NGO Leadership",
    org: "Dream Camp Initiative",
    period: "2017 – 2018",
    icon: "◈",
    metric: "100%",
    metricLabel: "graduation rate",
    achievements: [
      "Mentored underprivileged students achieving 100% graduation rate",
      "Raised ₹50,000+ for Dream Camp through community outreach campaigns",
      "Coordinated cross-functional volunteer teams across 3 districts",
    ],
  },
  {
    role: "Vice President",
    org: "Stevens Origins Club",
    period: "2024 – Present",
    icon: "◆",
    metric: "50%",
    metricLabel: "attendance growth",
    achievements: [
      "Increased event attendance by 50% through strategic programming",
      "Improved event satisfaction scores by 35% with structured feedback loops",
      "Built inclusive community for 200+ international students at Stevens",
    ],
  },
];

const INTERESTS = [
  { icon: "⬡", label: "Parkour", sub: "Urban Athletics" },
  { icon: "◉", label: "Wildlife", sub: "Tiger Census & Birdwatching" },
  { icon: "◈", label: "Indic History", sub: "Geopolitics" },
  { icon: "◆", label: "Automobiles", sub: "F1 & Model Collecting" },
];

const LeadershipSection = ({ variant }: LeadershipSectionProps) => {
  const sectionClass = variant === "light" ? "section-light" : "section-dark";
  return (
  <section id="leadership" className={`py-24 md:py-32 relative overflow-hidden ${sectionClass}`}>
    <div className="absolute inset-0 dot-grid-subtle opacity-15" />

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="section-label">// 04</span>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        <h2 className="font-terminal text-5xl md:text-6xl text-foreground tracking-wider">LEADERSHIP</h2>
        <div className="flex-1 h-px bg-gradient-to-l from-border to-transparent" />
      </motion.div>

      {/* Leadership cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {LEADERSHIP.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="relative group"
          >
            <div
              className={`relative border border-border p-8 overflow-hidden transition-all duration-500 group-hover:border-accent/30 ${
                variant === "light"
                  ? "bg-gray-50/90"
                  : "bg-[hsl(0_0%_6%/0.6)]"
              }`}
            >
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-5 h-5 border-t border-l border-accent/0 group-hover:border-accent/60 transition-colors duration-500" />
              <span className="absolute top-0 right-0 w-5 h-5 border-t border-r border-accent/0 group-hover:border-accent/60 transition-colors duration-500" />
              <span className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-accent/0 group-hover:border-accent/60 transition-colors duration-500" />
              <span className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-accent/0 group-hover:border-accent/60 transition-colors duration-500" />

              {/* Big metric background */}
              <div
                className="absolute right-6 bottom-4 font-terminal text-7xl text-accent/5 pointer-events-none select-none leading-none"
                style={{ lineHeight: 1 }}
              >
                {item.metric}
              </div>

              {/* Header */}
              <div className="flex items-start gap-5 mb-6 relative z-10">
                <div
                  className="font-terminal text-4xl text-accent flex-shrink-0 transition-all duration-300"
                  style={{ textShadow: "0 0 20px hsl(4 100% 59% / 0.4)" }}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-terminal text-2xl text-foreground tracking-wide mb-1">{item.role}</h3>
                  <p className="font-mono text-xs text-accent tracking-widest">{item.org}</p>
                  <p className="font-mono text-xs text-muted-foreground/60">{item.period}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-terminal text-2xl text-accent" style={{ textShadow: "0 0 15px hsl(4 100% 59% / 0.5)" }}>
                    {item.metric}
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground tracking-wider">{item.metricLabel}</div>
                </div>
              </div>

              <ul className="space-y-2.5 relative z-10">
                {item.achievements.map((ach, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-3 text-xs ${
                      variant === "light" ? "text-gray-700" : "text-foreground/80"
                    }`}
                  >
                    <span className="text-accent font-mono shrink-0 mt-0.5">▸</span>
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border" />
          <p className="section-label">INTERESTS & PURSUITS</p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INTERESTS.map((interest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative border border-border p-6 text-center group cursor-default overflow-hidden transition-all duration-400 hover:border-accent/30 ${
                variant === "light" ? "bg-white/80" : "bg-[hsl(0_0%_7%/0.5)]"
              }`}
            >
              {/* Hover bg glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: "radial-gradient(ellipse 80% 80% at 50% 100%, hsl(4 100% 59% / 0.06), transparent)" }}
              />
              <div
                className="font-terminal text-4xl mb-3 relative z-10 transition-all duration-300 group-hover:scale-110"
                style={{ color: "hsl(var(--accent))", textShadow: "0 0 0px transparent" }}
              >
                {interest.icon}
              </div>
              <div className="font-terminal text-lg text-foreground tracking-wider relative z-10 mb-1">
                {interest.label}
              </div>
              <div className="font-mono text-[10px] text-muted-foreground relative z-10">{interest.sub}</div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default LeadershipSection;
