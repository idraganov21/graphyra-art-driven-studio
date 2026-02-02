import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Service {
  title: string;
  description: string;
  items: string[];
}

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const services: Service[] = [
    {
      title: "Социално присъствие",
      description: "Стратегия и визуална идентичност за социалните мрежи",
      items: [
        "Контент стратегия",
        "Визуален дизайн за постове",
        "Reels и видео съдържание",
        "Пълно управление с визуална последователност",
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
      description: "Изграждане на цялостен визуален език",
      items: [
        "Дизайн на лого",
        "Визитки и бранд материали",
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
      ref={ref}
      className="py-section bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/20 to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-caption text-accent mb-4">Услуги</p>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl max-w-2xl">
            Какво правим
          </h2>
        </motion.div>

        {/* Services Accordion */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="border-t border-primary-foreground/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-8">
                  <span className="text-caption text-primary-foreground/50">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-editorial text-xl md:text-2xl group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/60 text-sm mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
                <motion.span
                  className="text-2xl"
                  animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedIndex === index ? "auto" : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-8 pl-20">
                  <ul className="grid md:grid-cols-2 gap-3">
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-primary-foreground/80"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
          <div className="border-t border-primary-foreground/20" />
        </div>

        {/* Additional services */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-caption text-primary-foreground/50 mb-6">
            Допълнителни услуги
          </p>
          <div className="flex flex-wrap gap-4">
            {additionalServices.map((service, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-primary-foreground/20 text-sm hover:border-accent hover:text-accent transition-colors cursor-default"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
