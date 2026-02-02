import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PrinciplesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    "Форма преди тренд.",
    "Дизайн със структура.",
    "Визуал с цел.",
    "Детайлите имат значение.",
  ];

  return (
    <section ref={ref} className="py-section relative overflow-hidden">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-caption text-accent mb-4">Философия</p>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
              Принципи на дизайна
            </h2>
          </motion.div>

          {/* Right - Principles list */}
          <div className="space-y-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="flex items-start gap-6">
                  <span className="text-caption text-muted-foreground mt-1">
                    0{index + 1}
                  </span>
                  <p className="text-editorial text-xl md:text-2xl lg:text-3xl group-hover:text-accent transition-colors duration-300">
                    {principle}
                  </p>
                </div>
                {index < principles.length - 1 && (
                  <motion.div
                    className="h-px bg-border mt-8"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + index * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
