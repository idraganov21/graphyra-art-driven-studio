import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const ProcessSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const steps = [
    {
      number: "01",
      title: "Откриване",
      description: "Разбираме вашите цели, аудитория и визия за проекта.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Дизайн",
      description: "Създаваме концепции и визуални решения с внимание към детайла.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Усъвършенстване",
      description: "Итерираме и полираме всеки елемент до съвършенство.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Реализация",
      description: "Доставяме финален продукт, готов за употреба.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="process"
      ref={containerRef}
      className="py-section bg-secondary relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          {/* Large gradient orb */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--warm-beige) / 0.3) 0%, transparent 50%)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-[10%] w-32 h-32 border border-accent/10 rounded-full"
          animate={{
            y: [0, -40, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/4 right-[15%] w-20 h-20 border border-foreground/5"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Connecting line through all steps */}
        <motion.div
          className="hidden md:block absolute top-1/2 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent 5%, hsl(var(--border)) 20%, hsl(var(--border)) 80%, transparent 95%)",
          }}
        />
      </div>

      <div ref={ref} className="container-wide relative z-10">
        {/* Header with dramatic animation */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            className="text-caption text-accent mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Процес
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2 
              className="text-display text-[10vw] sm:text-6xl md:text-7xl lg:text-8xl"
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Как работим
            </motion.h2>
          </div>

          {/* Decorative element */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="w-16 h-16 border border-accent/30 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="w-6 h-6 border border-accent/50 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Steps with enhanced cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Card with hover effect */}
              <motion.div
                className="relative p-8 bg-background/50 backdrop-blur-sm border border-transparent transition-colors duration-300"
                animate={{
                  borderColor: hoveredStep === index ? "hsl(var(--accent) / 0.3)" : "transparent",
                  y: hoveredStep === index ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredStep === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Large number background */}
                <motion.span
                  className="absolute -top-4 -left-2 text-display text-8xl lg:text-9xl text-foreground/[0.03] select-none"
                  animate={{
                    scale: hoveredStep === index ? 1.1 : 1,
                    opacity: hoveredStep === index ? 0.08 : 0.03,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step.number}
                </motion.span>

                {/* Icon with animation */}
                <motion.div
                  className="relative mb-6 text-accent/60 group-hover:text-accent transition-colors"
                  animate={{
                    scale: hoveredStep === index ? 1.1 : 1,
                    rotate: hoveredStep === index ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                </motion.div>

                {/* Step number */}
                <motion.span 
                  className="relative text-caption text-accent mb-4 block"
                  animate={{
                    x: hoveredStep === index ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Стъпка {step.number}
                </motion.span>

                {/* Title */}
                <motion.h3 
                  className="relative text-editorial text-2xl md:text-3xl mb-4 group-hover:text-accent transition-colors"
                  animate={{
                    x: hoveredStep === index ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {step.title}
                </motion.h3>

                {/* Description */}
                <p className="relative text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredStep === index ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "left", width: "100%" }}
                />

                {/* Corner accent */}
                <motion.div
                  className="absolute top-4 right-4 w-6 h-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredStep === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 right-0 w-full h-px bg-accent" />
                  <div className="absolute top-0 right-0 w-px h-full bg-accent" />
                </motion.div>
              </motion.div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-4 w-8 h-px"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                  style={{ transformOrigin: "left" }}
                >
                  <motion.div
                    className="w-full h-full bg-gradient-to-r from-border to-accent/30"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Decorative footer element */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-6 text-muted-foreground"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.span 
              className="text-caption px-4 py-2 border border-accent/20"
              whileHover={{ borderColor: "hsl(var(--accent))", color: "hsl(var(--accent))" }}
            >
              Прозрачност на всяка стъпка
            </motion.span>
            <motion.div 
              className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
