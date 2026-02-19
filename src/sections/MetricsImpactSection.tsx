import { motion } from "framer-motion";
import { IMPACT_METRICS } from "@/data/metrics";

interface MetricsImpactSectionProps {
  variant: "light" | "dark";
}

const MetricsImpactSection = ({ variant }: MetricsImpactSectionProps) => {
  const sectionClass = variant === "light" ? "section-light" : "section-dark";

  return (
    <section id="metrics" className={`py-24 md:py-32 relative overflow-hidden ${sectionClass}`}>
      <div className="absolute inset-0 dot-grid-subtle opacity-15" />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-[0.04]"
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
          <span className="section-label">// IMPACT</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          <h2 className="font-terminal text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider">
            METRICS & IMPACT
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
          Conversion improvements, performance gains, adoption metrics — outcomes from product
          decisions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {IMPACT_METRICS.map((metric, i) => (
            <motion.div
              key={`${metric.value}-${metric.label}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="stat-card group"
            >
              <div
                className="font-terminal text-4xl md:text-5xl mb-2 transition-all duration-300 group-hover:scale-105"
                style={{
                  color: "hsl(var(--accent))",
                  textShadow: "0 0 20px hsl(4 100% 59% / 0.4)",
                }}
              >
                {metric.value}
              </div>
              <div className="font-mono text-sm text-foreground font-medium mb-1">{metric.label}</div>
              <div className="font-mono text-[10px] text-muted-foreground tracking-wider">
                {metric.context}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MetricsImpactSection;
