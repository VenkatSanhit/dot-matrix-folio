import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/experiences";

interface ExperienceSectionProps {
  variant: "light" | "dark";
}

const ExperienceSection = ({ variant }: ExperienceSectionProps) => {
  const sectionClass = variant === "light" ? "section-light" : "section-dark";

  return (
    <section id="experience" className={`py-24 md:py-32 relative overflow-hidden ${sectionClass}`}>
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(4 100% 59%), transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">// 02</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          <h2 className="font-terminal text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider">
            EXPERIENCE
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-border to-transparent" />
        </motion.div>

        <div className="relative pl-8 md:pl-14">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/20 to-transparent" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: "easeOut" }}
                className="relative group"
              >
                <div className="absolute -left-[33px] md:-left-[57px] top-4 flex flex-col items-center gap-1">
                  <div
                    className={`w-3.5 h-3.5 border rotate-45 transition-all duration-300 ${
                      exp.status === "active"
                        ? "border-accent bg-accent"
                        : variant === "light"
                        ? "border-gray-300 bg-white group-hover:border-accent group-hover:bg-accent/10"
                        : "border-silver/40 bg-background group-hover:border-accent group-hover:bg-accent/20"
                    }`}
                    style={exp.status === "active" ? { boxShadow: "0 0 12px hsl(4 100% 59% / 0.8)" } : {}}
                  />
                </div>

                <div
                  className={`relative overflow-hidden border border-border p-6 md:p-8 transition-all duration-400 group-hover:border-accent/25 ${
                    variant === "dark"
                      ? "bg-[hsl(0_0%_6%/0.6)]"
                      : "bg-[hsl(0_0%_98%/0.9)]"
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/50 transition-all duration-500" />

                  <div
                    className={`absolute right-6 top-6 font-terminal text-6xl pointer-events-none select-none leading-none ${
                      variant === "light" ? "text-gray-200/60" : "text-border/20"
                    }`}
                    style={{ lineHeight: 1 }}
                  >
                    {exp.index}
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4 relative z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {exp.status === "active" && <span className="status-dot active" />}
                        <span className="font-mono text-[10px] text-muted-foreground tracking-[0.3em] uppercase">
                          {exp.company} // {exp.location}
                        </span>
                      </div>
                      <h3 className="font-terminal text-2xl md:text-3xl text-foreground tracking-wide group-hover:text-accent/90 transition-colors duration-300">
                        {exp.role}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className="font-mono text-xs text-accent border border-accent/30 px-3 py-1"
                        style={{ background: "hsl(4 100% 59% / 0.05)" }}
                      >
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mb-5 leading-relaxed relative z-10 max-w-2xl">
                    {exp.description}
                  </p>

                  <ul className="space-y-2.5 mb-5 relative z-10">
                    {exp.achievements.map((ach, j) => (
                      <li
                        key={j}
                        className={`flex items-start gap-3 text-xs ${
                          variant === "light" ? "text-gray-800" : "text-foreground/80"
                        }`}
                      >
                        <span className="text-accent font-mono mt-0.5 shrink-0 text-xs">▸</span>
                        <span dangerouslySetInnerHTML={{ __html: ach }} />
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="skill-tag group-hover:border-accent/20 transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
