import { motion } from "framer-motion";
import { PRODUCT_PHILOSOPHY } from "@/data/philosophy";

interface ProductPhilosophySectionProps {
  variant: "light" | "dark";
}

const ProductPhilosophySection = ({ variant }: ProductPhilosophySectionProps) => {
  const sectionClass = variant === "light" ? "section-light" : "section-dark";

  return (
    <section id="philosophy" className={`py-24 md:py-32 relative overflow-hidden ${sectionClass}`}>
      <div className="absolute inset-0 dot-grid-subtle opacity-20" />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.03]"
        style={{ background: "radial-gradient(circle, hsl(4 100% 59%), transparent 70%)" }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">// PHILOSOPHY</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          <h2 className="font-terminal text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider">
            PRODUCT PHILOSOPHY
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-border to-transparent" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl"
        >
          How I approach building products — user-first thinking, experimentation mindset, and
          data-informed strategy.
        </motion.p>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
              Approach
            </h3>
            <ul className="space-y-4">
              {PRODUCT_PHILOSOPHY.approach.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-sm md:text-base text-foreground/90">
                  <span className="font-mono text-accent shrink-0 mt-0.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-6">
              Principles
            </h3>
            <div className="flex flex-wrap gap-3">
              {PRODUCT_PHILOSOPHY.principles.map((principle, i) => (
                <span
                  key={i}
                  className="skill-tag border-border px-4 py-2 text-sm hover:border-accent/50"
                >
                  {principle}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductPhilosophySection;
