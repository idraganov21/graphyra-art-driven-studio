import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Service {
  title: string;
  description: string;
  items: string[];
}

const ServicesSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundX = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const services: Service[] = [
    {
      title: "Социално присъствие",
      description: "Стратегия и визуална идентичност за социалните мрежи",
      items: [
        "Контент стратегия",
        "Изграждане на дизайн за социални мрежи",
        "Reels и видео съдържание",
        "Управление на социални мрежи",
      ],
    },
    {
      title: "Уеб дизайн и изработка",
      description: "Модерни уебсайтове с внимание към детайла",
      items: [
        "Уеб дизайн с акцент върху потребителя",
        "Изработка на уебсайтове",
        "Адаптивни layouts",
        "Производителност и базово SEO",
      ],
    },
    {
      title: "Брандинг и идентичност",
      description: "Изграждане на цялостен брандинг",
      items: [
        "Дизайн на лого",
        "Визитки",
        "Типография и цветови системи",
        "Насоки за бранд и визуални стандарти",
      ],
    },
    {
      title: "Печат и външна реклама",
      description: "От флаери до билбордове – с прецизност",
      items: [
        "Флаери и постери",
        "Менюта за заведения",
        "Билбордове и външна реклама",
        "Брандиране на превозни средства",
        "Материали за събития",
      ],
    },
  ];

  const additionalServices = [
    "Творческа посока",
    "Шаблони за социални мрежи",
    "Презентации",
    "Опаковки и етикети",
    "Motion елементи",
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-section bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orb */}
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 60%)",
            x: backgroundX,
            y: floatY,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/3 left-[10%] w-20 h-20 border border-accent/20"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/4 right-[15%] w-32 h-32 rounded-full border border-primary-foreground/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated lines */}
        <motion.svg
          className="absolute top-1/2 left-0 w-full h-px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
        >
          <motion.line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="hsl(var(--primary-foreground))"
            strokeWidth="1"
            strokeDasharray="8 8"
            animate={{ strokeDashoffset: [0, -16] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.svg>
      </div>

      <div ref={ref} className="container-wide relative z-10">
        {/* Header with dramatic animation */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            className="text-caption text-accent mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Услуги
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2 
              className="text-display text-[10vw] sm:text-6xl md:text-7xl lg:text-8xl max-w-3xl leading-none"
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Какво правим
            </motion.h2>
          </div>

          {/* Decorative line */}
          <motion.div
            className="mt-8 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="w-16 h-16 border border-accent/30 flex items-center justify-center"
              animate={{
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="w-3 h-3 bg-accent"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <motion.div
              className="h-px flex-1 max-w-xs bg-gradient-to-r from-accent/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 1 }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>
        </motion.div>

        {/* Services Accordion with enhanced effects */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="border-t border-primary-foreground/20 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background highlight on hover */}
              <motion.div
                className="absolute inset-0 bg-accent/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="relative w-full py-8 md:py-10 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <motion.span 
                    className="text-caption text-accent/60 group-hover:text-accent transition-colors"
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    0{index + 1}
                  </motion.span>
                  <div>
                    <motion.h3 
                      className="text-editorial text-2xl md:text-3xl lg:text-4xl group-hover:text-accent transition-colors"
                      animate={{
                        x: hoveredIndex === index ? 10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p 
                      className="text-primary-foreground/50 text-sm md:text-base mt-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 1 : 0.6,
                        y: hoveredIndex === index ? 0 : 5,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </div>

                {/* Animated plus/cross icon */}
                <motion.div
                  className="relative w-10 h-10 flex items-center justify-center"
                  animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.span
                    className="absolute w-6 h-0.5 bg-primary-foreground/60 group-hover:bg-accent transition-colors"
                  />
                  <motion.span
                    className="absolute w-0.5 h-6 bg-primary-foreground/60 group-hover:bg-accent transition-colors"
                  />
                </motion.div>
              </button>

              {/* Expanded content with stagger animation */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedIndex === index ? "auto" : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-10 pl-16 md:pl-24">
                  <ul className="grid md:grid-cols-2 gap-4">
                    {service.items.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-4 text-primary-foreground/80"
                        initial={{ opacity: 0, x: -20 }}
                        animate={expandedIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                      >
                        <motion.span 
                          className="w-2 h-2 bg-accent"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                        <span className="text-base md:text-lg">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Bottom line animation on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
          <div className="border-t border-primary-foreground/20" />
        </div>

        {/* Additional services with floating animation */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-caption text-primary-foreground/50 mb-8">
            Допълнителни услуги
          </p>
          <div className="flex flex-wrap gap-4">
            {additionalServices.map((service, index) => (
              <motion.span
                key={index}
                className="px-6 py-3 border border-primary-foreground/20 text-sm md:text-base cursor-default relative overflow-hidden group"
                whileHover={{ 
                  borderColor: "hsl(var(--accent))",
                  color: "hsl(var(--accent))",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <motion.span
                  className="absolute inset-0 bg-accent/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative">{service}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
