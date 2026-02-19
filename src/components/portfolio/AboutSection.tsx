import { motion } from "framer-motion";

interface AboutSectionProps {
  variant: "light" | "dark";
}

const SKILLS = [
  "Product Roadmap Planning", "PRD & User Story Creation", "MVP Design", "OKRs/KPIs",
  "Go-to-Market Strategy", "RICE / MoSCoW / Kano", "Agile / SAFe / Scrum",
  "A/B Testing", "Feature Telemetry", "Figma & Miro", "SQL & Python",
  "Power BI & Tableau", "REST & GraphQL APIs", "AI Product Strategy",
  "LLM Integration", "Prompt Engineering", "Cross-functional Leadership",
];

const CERTS = [
  { label: "CSPO", sub: "Certified Scrum Product Owner" },
  { label: "AI-CSPO", sub: "AI Certified Scrum PO" },
  { label: "Databricks", sub: "Apache Spark 3.0" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutSection = ({ variant }: AboutSectionProps) => {
  const sectionClass = variant === "light" ? "section-light" : "section-dark";
  return (
  <section id="about" className={`py-24 md:py-32 relative overflow-hidden ${sectionClass}`}>
    {/* Background */}
    <div className="absolute inset-0 dot-grid-subtle opacity-20" />
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none opacity-[0.04]"
      style={{ background: "radial-gradient(circle, hsl(4 100% 59%), transparent 70%)" }}
    />

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="section-label">// 01</span>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        <h2 className="font-terminal text-5xl md:text-6xl text-foreground tracking-wider">ABOUT</h2>
        <div className="flex-1 h-px bg-gradient-to-l from-border to-transparent" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Terminal card + certs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          {/* Profile JSON card */}
          <div className="card-terminal p-6 relative overflow-hidden">
            {/* Top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
            {/* Right glow */}
            <div
              className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none"
              style={{ background: "linear-gradient(to left, hsl(4 100% 59% / 0.03), transparent)" }}
            />

            <div className="flex items-center gap-2 mb-5">
              <div className="w-2.5 h-2.5 rounded-full bg-accent" style={{ boxShadow: "0 0 8px hsl(4 100% 59% / 0.8)" }} />
              <div className="w-2.5 h-2.5 rounded-full bg-silver/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
              <span className="font-mono text-xs text-muted-foreground/60 ml-3 tracking-widest">profile.json</span>
            </div>

            <div className="font-mono text-xs space-y-2.5 text-foreground/80 leading-relaxed">
              <div className="text-muted-foreground/40">{"{"}</div>
              {[
                { key: "name", val: '"Venkat Sanhit Srinivasula"', color: "text-silver" },
                { key: "role", val: '"Senior Product Manager"', color: "text-silver" },
                { key: "location", val: '"New York, USA"', color: "text-silver" },
                { key: "experience", val: '"6+ years"', color: "text-foreground/80" },
              ].map(({ key, val, color }) => (
                <div key={key} className="pl-4">
                  <span className="text-accent">"{key}"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className={color}>{val}</span>
                  <span className="text-muted-foreground">,</span>
                </div>
              ))}
              <div className="pl-4">
                <span className="text-accent">"education"</span>
                <span className="text-muted-foreground">: [</span>
              </div>
              <div className="pl-8 text-silver/80 text-[11px]">"M.S. MIS — Stevens Institute of Technology"<span className="text-muted-foreground">,</span></div>
              <div className="pl-8 text-silver/80 text-[11px]">"B.Tech CS — JNTUH India"</div>
              <div className="pl-4 text-muted-foreground">],</div>
              <div className="pl-4">
                <span className="text-accent">"email"</span>
                <span className="text-muted-foreground">: </span>
                <a href="mailto:sanhit567@gmail.com" className="text-accent underline decoration-accent/30 hover:decoration-accent transition-all">"sanhit567@gmail.com"</a>
              </div>
              <div className="pl-4">
                <span className="text-accent">"linkedin"</span>
                <span className="text-muted-foreground">: </span>
                <a href="https://www.linkedin.com/in/venkat-sanhit-pm/" target="_blank" rel="noopener noreferrer" className="text-accent underline decoration-accent/30 hover:decoration-accent transition-all">"linkedin.com/in/venkat-sanhit-pm"</a>
              </div>
              <div className="text-muted-foreground/40">{"}"}</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-3 gap-3">
            {CERTS.map((cert) => (
              <div
                key={cert.label}
                className="card-outline p-3 text-center group hover:border-accent/50 transition-all duration-300"
              >
                <div className="font-terminal text-base text-accent group-hover:glow-text-red mb-1 tracking-wider">
                  {cert.label}
                </div>
                <div className="font-mono text-[9px] text-muted-foreground leading-tight">{cert.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Bio + skills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Bio card */}
          <div className="relative p-6 border border-border/60 bg-card/30 backdrop-blur-sm overflow-hidden">
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent/40" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent/40" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent/40" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/40" />

            <p className="text-sm text-muted-foreground leading-loose mb-4">
              Product Manager with <span className="text-foreground font-medium">6+ years</span> building SaaS
              solutions across logistics, talent acquisition, and e-commerce. Proven expertise in{" "}
              <span className="text-accent font-mono font-medium">0→1</span> and{" "}
              <span className="text-accent font-mono font-medium">1→N</span> product initiatives.
            </p>
            <p className="text-sm text-muted-foreground leading-loose mb-4">
              Specializing in <span className="text-foreground font-medium">AI-driven platforms</span>,{" "}
              <span className="text-foreground font-medium">data analytics</span>, and{" "}
              <span className="text-foreground font-medium">cross-functional leadership</span> — turning market
              insights into modular, API-first products that drive measurable outcomes.
            </p>
            <p className="text-sm text-muted-foreground leading-loose">
              Proficient in Agile (Scrum, SAFe, Kanban) with deep command of product telemetry,
              experimentation design, and stakeholder alignment.
            </p>
          </div>

          {/* Skills */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <p className="section-label">CORE COMPETENCIES</p>
              <div className="flex-1 h-px bg-border/50" />
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {SKILLS.map((skill) => (
                <motion.span key={skill} variants={itemVariants} className="skill-tag">
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default AboutSection;
