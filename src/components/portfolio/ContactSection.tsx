import { useState } from "react";
import { motion } from "framer-motion";

const CONTACT_LINKS = [
  {
    label: "EMAIL",
    value: "sanhit567@gmail.com",
    href: "mailto:sanhit567@gmail.com",
    prefix: "$ mail --to",
    icon: "✉",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/venkat-sanhit-pm",
    href: "https://www.linkedin.com/in/venkat-sanhit-pm/",
    prefix: "$ open --url",
    icon: "↗",
  },
  {
    label: "GITHUB",
    value: "github.com/sanhit",
    href: "https://github.com/sanhit",
    prefix: "$ git remote --view",
    icon: "⌥",
  },
];

interface ContactSectionProps {
  variant: "light" | "dark";
}

const ContactSection = ({ variant }: ContactSectionProps) => {
  const sectionClass = variant === "light" ? "section-light" : "section-dark";
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([
    "SYSTEM READY. TYPE A MESSAGE OR PRESS ENTER.",
    "────────────────────────────────────────",
  ]);

  const [sending, setSending] = useState(false);

  const handleKey = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const message = input.trim();
      if (!message || sending) return;

      setSending(true);
      setLines((l) => [...l, `> ${message}`, "SENDING..."]);
      setInput("");

      try {
        const res = await fetch("https://formsubmit.co/ajax/sanhit567@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: "Portfolio Contact — Message from Visitor",
            message,
            name: "Portfolio Visitor",
            _template: "table",
          }),
        });

        const data = await res.json();

        if (data.success) {
          setLines((l) => [
            ...l.slice(0, -1),
            "MSG SENT. I'LL GET BACK TO YOU SOON. ✓",
            "────────────────────────────────────────",
          ]);
        } else {
          throw new Error(data.message || "Failed to send");
        }
      } catch {
        setLines((l) => [
          ...l.slice(0, -1),
          "SEND FAILED. TRY: mailto:sanhit567@gmail.com",
          "────────────────────────────────────────",
        ]);
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <section id="contact" className={`py-24 md:py-32 relative overflow-hidden ${sectionClass}`}>
      <div className="absolute inset-0 dot-grid opacity-15" />
      {/* Center glow */}
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none opacity-[0.05]"
        style={{ background: "radial-gradient(ellipse, hsl(4 100% 59%), transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-label text-gray-500">// 05</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
          <h2 className="font-terminal text-5xl md:text-6xl text-gray-900 tracking-wider">CONTACT</h2>
          <div className="flex-1 h-px bg-gradient-to-l from-border to-transparent" />
        </motion.div>

        {/* Centered tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-sm text-gray-600 mb-12 max-w-md mx-auto leading-relaxed"
        >
          Open to <span className="text-gray-900 font-medium">PM roles</span>,{" "}
          <span className="text-gray-900 font-medium">advisory opportunities</span>, and{" "}
          <span className="text-gray-900 font-medium">product conversations</span>.
          Let's build something meaningful.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {CONTACT_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-4 p-5 border border-border/60 group no-underline overflow-hidden transition-all duration-400 hover:border-accent/40"
                style={{ background: "hsl(0 0% 7% / 0.5)" }}
              >
                {/* Hover fill */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "linear-gradient(90deg, hsl(4 100% 59% / 0.04), transparent)" }}
                />
                {/* Left accent bar */}
                <div className="w-0.5 h-10 bg-border group-hover:bg-accent transition-colors duration-300 flex-shrink-0 relative z-10" />

                <div className="flex-1 relative z-10">
                  <div className="font-mono text-[10px] text-gray-400 tracking-widest mb-1">
                    {link.prefix}
                  </div>
                  <div className="font-mono text-sm text-gray-100 group-hover:text-accent transition-colors duration-300">
                    {link.value}
                  </div>
                </div>

                <span className="font-terminal text-xl text-gray-500 group-hover:text-accent transition-all duration-300 relative z-10 group-hover:scale-110 transform">
                  {link.icon}
                </span>

                {/* Right corner accent */}
                <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent/0 group-hover:border-accent/60 transition-colors duration-500" />
                <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent/0 group-hover:border-accent/60 transition-colors duration-500" />
              </a>
            ))}
          </motion.div>

          {/* Right: Terminal input */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="relative border border-border/60 p-6 overflow-hidden"
              style={{ background: "linear-gradient(145deg, hsl(0 0% 8% / 0.9), hsl(0 0% 5% / 0.7))" }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

              {/* Window bar */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-accent" style={{ boxShadow: "0 0 6px hsl(4 100% 59% / 0.8)" }} />
                <div className="w-2.5 h-2.5 rounded-full bg-silver/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/15" />
                <span className="font-mono text-xs text-gray-400 ml-3 tracking-widest">message.terminal</span>
              </div>

              {/* Terminal output */}
              <div className="h-40 overflow-y-auto mb-4 space-y-1.5 scrollbar-thin">
                {lines.map((line, i) => (
                  <div
                    key={i}
                    className={`font-mono text-xs leading-relaxed ${
                      line.startsWith(">")
                        ? "text-accent"
                        : line.startsWith("──")
                        ? "text-gray-600"
                        : line === "SENDING..."
                        ? "text-accent"
                        : "text-gray-300"
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* Terminal input */}
              <div className="flex items-center gap-2 border-t border-gray-600 pt-4">
                <span className="font-mono text-xs text-accent">{">"}</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="type your message and press enter..."
                  className="flex-1 bg-transparent font-mono text-xs text-gray-100 outline-none placeholder:text-gray-500"
                />
                <span className="cursor-blink" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="status-dot active" />
            <span className="font-mono text-xs text-gray-500 tracking-widest">
              © 2025 VENKAT SANHIT SRINIVASULA
            </span>
          </div>
          <span className="font-mono text-xs text-gray-500 tracking-widest">
            BUILT WITH PRECISION // PM v6.0
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
