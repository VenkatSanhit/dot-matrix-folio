import { motion } from "framer-motion";
import { PROJECTS } from "@/data/projects";

interface ProjectsSectionProps {
  variant: "light" | "dark";
}

const ProjectsSection = ({ variant }: ProjectsSectionProps) => {
  const sectionClass = variant === "light" ? "section-light" : "section-dark";

  return (
    <section id="projects" className={`py-24 md:py-32 relative overflow-hidden ${sectionClass}`}>
      <div className="absolute inset-0 dot-grid-subtle opacity-15" />
      <div
        className="absolute right-0 bottom-0 w-96 h-96 pointer-events-none opacity-[0.05]"
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
          <span className="section-label">// 03</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          <h2 className="font-terminal text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider">
            PROJECTS
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-border to-transparent" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm text-muted-foreground mb-12 max-w-2xl"
        >
          Product case studies — Problem → Solution → Outcomes.
        </motion.p>

        <div className="space-y-16">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className="relative group"
            >
              <div
                className={`relative border border-border overflow-hidden transition-all duration-500 group-hover:border-accent/30 ${
                  variant === "dark" ? "bg-[hsl(0_0%_6%/0.5)]" : "bg-[hsl(0_0%_98%/0.8)]"
                }`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-500 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
                  }}
                />

                <div className="relative p-8 md:p-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                    <div>
                      <span className="font-terminal text-6xl leading-none opacity-20" style={{ color: project.accentColor }}>
                        {project.id}
                      </span>
                      {project.isFeatured && (
                        <span className="ml-4 font-mono text-[10px] px-2.5 py-1 border border-accent/50 text-accent bg-accent/10">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {project.status === "LIVE" && (
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ background: project.accentColor, boxShadow: `0 0 6px ${project.accentColor}` }}
                        />
                      )}
                      <span
                        className="font-mono text-[10px] tracking-[0.25em] px-2.5 py-1 border"
                        style={{
                          borderColor: `${project.accentColor}50`,
                          color: project.accentColor,
                          background: `${project.accentColor}15`,
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-terminal text-2xl md:text-3xl tracking-wide mb-2 text-foreground">
                    {project.name}
                  </h3>
                  <p className="font-mono text-sm mb-8" style={{ color: project.accentColor }}>
                    {project.tagline}
                  </p>

                  {/* Problem → Solution Format */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
                        Problem
                      </h4>
                      <p className="text-sm text-foreground/90 mb-4">{project.problem.statement}</p>
                      <p className="text-xs text-muted-foreground mb-4">{project.problem.businessContext}</p>
                      <ul className="space-y-2">
                        {project.problem.userPainPoints.map((p, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-foreground/80">
                            <span style={{ color: project.accentColor }}>▸</span>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
                        Solution
                      </h4>
                      <p className="text-sm text-foreground/90 mb-4">{project.solution.strategy}</p>
                      <p className="text-xs text-muted-foreground mb-4">{project.solution.execution}</p>
                      <ul className="space-y-2">
                        {project.solution.approach.map((a, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-foreground/80">
                            <span style={{ color: project.accentColor }}>▸</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Outcomes / Metrics */}
                  <div className="border-t border-border pt-6 mb-6">
                    <h4 className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-4">
                      Outcomes
                    </h4>
                    <div className="flex flex-wrap gap-6 mb-4">
                      {project.outcomes.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div
                            className="font-terminal text-2xl md:text-3xl"
                            style={{ color: project.accentColor }}
                          >
                            {m.value}
                          </div>
                          <div className="font-mono text-[10px] text-muted-foreground tracking-wider">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <ul className="space-y-2">
                      {project.outcomes.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-foreground/80">
                          <span style={{ color: project.accentColor }}>▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture */}
                  <div
                    className="border border-dashed p-4"
                    style={{ borderColor: `${project.accentColor}25` }}
                  >
                    <div className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] mb-2">
                      ARCHITECTURE
                    </div>
                    <div
                      className="font-mono text-[10px] text-center leading-relaxed"
                      style={{ color: `${project.accentColor}80` }}
                    >
                      {project.archType}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 border border-border text-muted-foreground hover:border-accent/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
