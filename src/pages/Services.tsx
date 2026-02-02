import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Брандинг и Корпоративна Идентичност",
      subtitle: "Изграждане на цялостен брандинг",
      description: "Създаваме уникална визуална идентичност, която отличава вашия бранд от конкуренцията. От лого дизайн до пълни бранд насоки.",
      features: [
        "Лого дизайн и брандбук",
        "Визитки и бизнес материали",
        "Типографска система",
        "Цветова палитра",
        "Бранд насоки и guidelines",
        "Корпоративна идентичност",
      ],
      keywords: "брандинг, лого дизайн, корпоративна идентичност, визуална идентичност, брандбук, бизнес материали",
    },
    {
      title: "Уеб Дизайн и Разработка",
      subtitle: "Модерни уебсайтове с впечатляващ дизайн",
      description: "Проектираме и разработваме бързи, красиви и функционални уебсайтове, оптимизирани за всички устройства.",
      features: [
        "UI/UX дизайн",
        "Responsive уеб дизайн",
        "E-commerce решения",
        "Landing страници",
        "SEO оптимизация",
        "Поддръжка и хостинг",
      ],
      keywords: "уеб дизайн, изработка на сайт, responsive дизайн, UI/UX, e-commerce, SEO оптимизация, уеб разработка",
    },
    {
      title: "Социални Мрежи и Дигитален Маркетинг",
      subtitle: "Управление на социални мрежи",
      description: "Изграждаме силно онлайн присъствие с професионален визуален контент и стратегическо управление на социални платформи.",
      features: [
        "Контент стратегия",
        "Дизайн на постове и stories",
        "Шаблони за социални мрежи",
        "Reels и видео съдържание",
        "Управление на профили",
        "Анализ и отчети",
      ],
      keywords: "социални мрежи, Instagram дизайн, Facebook маркетинг, контент стратегия, дигитален маркетинг, SMM",
    },
    {
      title: "Печат и Външна Реклама",
      subtitle: "Печатни материали с висок клас дизайн",
      description: "Дизайн на всички видове печатни материали и рекламни носители за максимално въздействие.",
      features: [
        "Билбордове и банери",
        "Флаери и брошури",
        "Менюта за ресторанти",
        "Брандиране на автомобили",
        "Опаковки и етикети",
        "Материали за събития",
      ],
      keywords: "печатни материали, билборд дизайн, флаери, брошури, външна реклама, брандиране на автомобили, опаковки",
    },
    {
      title: "Motion Дизайн и Анимация",
      subtitle: "Анимирани визуални елементи",
      description: "Оживяваме вашия бранд с професионални анимации и motion graphics, които привличат вниманието.",
      features: [
        "Анимирани лога",
        "Motion graphics",
        "Видео интро/outro",
        "Социални анимации",
        "Explainer видеа",
        "Интерактивни елементи",
      ],
      keywords: "motion дизайн, анимация, motion graphics, видео продукция, анимирано лого, explainer видео",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, transparent 60%)",
              filter: "blur(80px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, hsl(var(--warm-beige) / 0.4) 0%, transparent 60%)",
              filter: "blur(60px)",
            }}
            animate={{
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container-wide relative z-10">
          <motion.p
            className="text-caption text-accent mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Какво правим
          </motion.p>
          <motion.h1
            className="text-display text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Нашите Услуги
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Пълен спектър от дизайн услуги за изграждане на силни брандове и незабравими визуални преживявания.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section ref={ref} className="py-20">
        <div className="container-wide">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="py-16 md:py-24 border-t border-border first:border-t-0"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Left side - Title and description */}
                <div>
                  <motion.span 
                    className="text-accent text-sm font-medium mb-4 block"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    0{index + 1}
                  </motion.span>
                  <h2 className="text-editorial text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-lg text-accent font-medium mb-6">
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>
                  {/* Hidden SEO keywords */}
                  <meta name="keywords" content={service.keywords} />
                </div>

                {/* Right side - Features */}
                <div className="relative">
                  <motion.div
                    className="absolute -top-4 -left-4 w-20 h-20 border border-accent/20"
                    animate={{ rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <ul className="space-y-4 relative z-10">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-4 text-lg"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                      >
                        <span className="w-2 h-2 bg-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="container-wide relative z-10 text-center">
          <motion.h2
            className="text-display text-4xl md:text-5xl lg:text-6xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Готови да започнем?
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Свържете се с нас и нека създадем нещо забележително заедно.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-primary-foreground text-lg font-medium hover:bg-accent/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Започни проект
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
