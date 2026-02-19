import { motion } from "framer-motion";
import { TOOLKIT_CATEGORIES } from "@/data/toolkit";
import { Target, GitBranch, BarChart3, Palette, Brain } from "lucide-react";

interface ProductToolkitSectionProps {
  variant: "light" | "dark";
}

const categoryIcons: Record<string, React.ReactNode> = {
  strategy: <Target className="w-4 h-4 shrink-0" />,
  agile: <GitBranch className="w-4 h-4 shrink-0" />,
  data: <BarChart3 className="w-4 h-4 shrink-0" />,
  ux: <Palette className="w-4 h-4 shrink-0" />,
  ai: <Brain className="w-4 h-4 shrink-0" />,
};

const ProductToolkitSection = ({ variant }: ProductToolkitSectionProps) => {
  const sectionClass = variant === "light" ? "section-light" : "section-dark";

  return (
    <section id="toolkit" className={`py-24 md:py-32 relative overflow-hidden ${sectionClass}`}>
      <div className="absolute inset-0 dot-grid-subtle opacity-15" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label">// TOOLKIT</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          <h2 className="font-terminal text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wider">
            PRODUCT TOOLKIT
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
          Product strategy, Agile execution, data, UX tools, and AI & automation — the skills and
          tools I use to ship products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6"
        >
          {TOOLKIT_CATEGORIES.map((category, catIndex) => (
            <div key={category.id} className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-accent">
                  {categoryIcons[category.id] || <Target className="w-4 h-4" />}
                </span>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {category.label}
                </h3>
              </div>
              <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
                <div className="flex gap-3 pb-2 min-w-max">
                  {category.items.map((item, i) => (
                    <span
                      key={`${category.id}-${i}`}
                      className={`shrink-0 px-4 py-2.5 font-mono text-xs border transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_12px_hsl(4_100%_59%/0.08)] ${
                        variant === "light"
                          ? "border-gray-300 text-gray-800 bg-white/90"
                          : "border-border text-foreground/90 bg-[hsl(0_0%_6%/0.6)]"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductToolkitSection;
