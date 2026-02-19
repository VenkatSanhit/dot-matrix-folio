import { useState, useEffect } from "react";

interface Section {
  id: string;
  label: string;
}

interface NavbarProps {
  sections: Section[];
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Navbar = ({ sections, activeSection, onNavigate }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };
  const scrollToContact = () => handleNav("contact");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-60" />

      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <button
          onClick={() => onNavigate("hero")}
          className="font-terminal text-xl text-foreground tracking-[0.2em] hover:text-accent transition-colors duration-300 group"
        >
          VS<span className="text-accent group-hover:opacity-70 transition-opacity">_</span>
        </button>

        <div className="hidden lg:flex items-center gap-2 overflow-x-auto max-w-[65%] scrollbar-hide">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNav(s.id)}
              className={`font-mono text-[10px] tracking-[0.2em] px-3 py-2 shrink-0 transition-all duration-300 whitespace-nowrap rounded-sm ${
                activeSection === s.id
                  ? "bg-accent text-accent-foreground shadow-[0_0_12px_hsl(4_100%_59%/0.4)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={scrollToContact}
            className="btn-retro-primary text-xs py-1.5 px-4"
          >
            CONTACT ME
          </button>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-foreground transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-4 flex flex-col gap-2 max-h-[70vh] overflow-y-auto">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNav(s.id)}
              className={`font-mono text-sm tracking-widest py-2 text-left transition-all duration-200 ${
                activeSection === s.id
                  ? "text-accent border-l-2 border-accent pl-4"
                  : "text-muted-foreground hover:text-foreground pl-4"
              }`}
            >
              {s.label}
            </button>
          ))}
          <button
            onClick={scrollToContact}
            className="btn-retro-primary text-xs py-2 px-4 mt-4 w-full"
          >
            CONTACT ME
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
