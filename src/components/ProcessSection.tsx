import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Откриване",
      description: "Разбираме вашите цели, аудитория и визия за проекта.",
    },
    {
      number: "02",
      title: "Дизайн",
      description: "Създаваме концепции и визуални решения с внимание към детайла.",
    },
    {
      number: "03",
      title: "Усъвършенстване",
      description: "Итерираме и полираме всеки елемент до съвършенство.",
    },
    {
      number: "04",
      title: "Реализация",
      description: "Доставяме финален продукт, готов за употреба.",
    },
  ];

  return (
    <section
      id="process"
      ref={ref}
      className="py-section bg-secondary relative overflow-hidden"
    >
      <div className="container-wide">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-caption text-accent mb-4">Процес</p>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
            Как работим
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center md:text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Number */}
              <motion.span
                className="text-display text-6xl md:text-7xl lg:text-8xl text-foreground/5 absolute -top-4 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              >
                {step.number}
              </motion.span>

              {/* Content */}
              <div className="relative z-10 pt-12">
                <h3 className="text-editorial text-xl md:text-2xl mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-border"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  style={{ transformOrigin: "left" }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Decorative element */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="inline-flex items-center gap-4 text-muted-foreground">
            <div className="w-8 h-px bg-border" />
            <span className="text-caption">Прозрачност на всяка стъпка</span>
            <div className="w-8 h-px bg-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
