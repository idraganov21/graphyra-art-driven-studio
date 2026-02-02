import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      number: "01",
      title: "Форма преди тренд",
      description: "Не следваме модни вълни. Създаваме дизайн, който издържа на времето и изгражда истинска идентичност.",
    },
    {
      number: "02",
      title: "Дизайн със структура",
      description: "Всеки елемент има своето място и цел. Балансът между естетика и функционалност е в основата на работата ни.",
    },
    {
      number: "03",
      title: "Визуален образ с цел",
      description: "Дизайнът не е украшение — той комуникира, убеждава и създава връзка между бранда и аудиторията.",
    },
    {
      number: "04",
      title: "Детайлите имат значение",
      description: "От кернинга до цветовите нюанси — перфекционизмът ни е гаранция за качество във всеки пиксел.",
    },
  ];

  const stats = [
    { number: "50+", label: "Завършени проекта" },
    { number: "30+", label: "Доволни клиента" },
    { number: "3+", label: "Години опит" },
    { number: "100%", label: "Отдаденост" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full opacity-25"
            style={{
              background: "radial-gradient(circle, hsl(var(--accent) / 0.4) 0%, transparent 60%)",
              filter: "blur(80px)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, hsl(var(--warm-beige) / 0.5) 0%, transparent 60%)",
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating shapes */}
          <motion.div
            className="absolute top-[20%] right-[15%] w-24 h-24 border border-accent/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[30%] left-[10%] w-16 h-16 border border-foreground/10 rounded-full"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container-wide relative z-10">
          <motion.p
            className="text-caption text-accent mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Кои сме ние
          </motion.p>
          <motion.h1
            className="text-display text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            За Graphyra
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Ние сме дизайн студио със страст към създаването на визуални идентичности, 
            които оставят трайно впечатление. Вярваме, че добрият дизайн е повече от красота — 
            той е стратегия, комуникация и изкуство в едно.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-editorial text-3xl md:text-4xl lg:text-5xl mb-8">
                Нашата история
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Graphyra е основана с идеята да предложи премиум дизайн услуги, 
                  достъпни за бизнеси от всякакъв мащаб. Името ни идва от "графика" и "аура" — 
                  защото вярваме, че всеки бранд има уникална енергия, която заслужава да бъде 
                  визуализирана.
                </p>
                <p>
                  Работим с клиенти от различни индустрии — от стартъпи до утвърдени компании, 
                  от локални бизнеси до международни марки. Независимо от мащаба, подходът ни 
                  остава същият: внимание към детайла, креативност без компромиси и партньорство, 
                  основано на доверие.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                <motion.div
                  className="absolute inset-8 border border-accent/30"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-display text-8xl md:text-9xl text-accent/20">G</span>
                </div>
              </div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={ref} className="py-24 bg-muted/30">
        <div className="container-wide">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <p className="text-caption text-accent mb-4">Философия</p>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
              Нашите принципи
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.number}
                className="p-8 md:p-12 bg-background border border-border relative group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="text-accent text-sm font-medium">{value.number}</span>
                <h3 className="text-editorial text-2xl md:text-3xl mt-4 mb-4 group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.span
                  className="text-display text-5xl md:text-6xl lg:text-7xl text-accent block mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                >
                  {stat.number}
                </motion.span>
                <span className="text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />
        <div className="container-wide relative z-10 text-center">
          <motion.h2
            className="text-display text-4xl md:text-5xl lg:text-6xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Да работим заедно?
          </motion.h2>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-primary-foreground text-lg font-medium hover:bg-accent/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Свържи се с нас
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

export default About;
