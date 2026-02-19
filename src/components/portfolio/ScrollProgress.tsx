import { useEffect, useState } from "react";

interface ScrollProgressProps {}

const ScrollProgress = ({}: ScrollProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-14 left-0 right-0 z-30 h-0.5 bg-border/50">
      <div
        className="h-full bg-accent transition-all duration-100"
        style={{ width: `${progress}%`, boxShadow: "0 0 8px hsl(4 100% 59% / 0.6)" }}
      />
    </div>
  );
};

export default ScrollProgress;
