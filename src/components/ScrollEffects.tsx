import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollEffectsProps {
  children: React.ReactNode;
}

const ScrollEffects = ({ children }: ScrollEffectsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Subtle sweep effect on scroll
  const sweepOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.2],
    [0, 0.05, 0.08, 0]
  );

  useEffect(() => {
    // Add scroll-triggered class changes for elements
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "-50px",
    });

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Scroll sweep overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[100]"
        style={{
          background: `linear-gradient(135deg, 
            hsl(var(--warm-beige) / 0.1) 0%, 
            transparent 50%, 
            hsl(var(--accent) / 0.05) 100%)`,
          opacity: sweepOpacity,
        }}
      />

      {/* Content with parallax wrapper */}
      <div className="relative">{children}</div>
    </div>
  );
};

export default ScrollEffects;
