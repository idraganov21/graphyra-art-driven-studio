import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const letters = "GRAPHYRA".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 400);
  };

  const letterVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      rotateZ: -10,
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateZ: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
    morph: (i: number) => ({
      y: [0, -15, 5, 0],
      rotateZ: [0, -3, 2, 0],
      transition: {
        delay: 0.8 + i * 0.05,
        duration: 0.8,
        ease: "easeInOut" as const,
      },
    }),
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {/* Skip button */}
          <motion.button
            className="absolute top-8 right-8 text-primary-foreground/60 hover:text-primary-foreground text-sm font-body tracking-wider transition-colors"
            onClick={handleSkip}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Пропусни
          </motion.button>

          {/* Main text */}
          <div className="flex overflow-hidden">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate={["visible", "morph"]}
                exit="exit"
                className="text-display text-6xl sm:text-8xl md:text-9xl text-primary-foreground inline-block"
                style={{ 
                  fontFamily: "var(--font-display)",
                  willChange: "transform, opacity"
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtle grain overlay */}
          <div className="grain-overlay" />

          {/* Abstract decorative line */}
          <motion.div
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
