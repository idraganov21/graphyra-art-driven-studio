import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--warm-beige)) 0%, transparent 70%)",
            opacity: 0.6,
          }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
            opacity: 0.5,
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Accent line */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, hsl(var(--accent) / 0.3) 50%, transparent 100%)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Caption */}
          <motion.p
            className="text-caption mb-6 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Дизайн Студио
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className="text-display text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] mb-6 leading-none"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            GRAPHYRA
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-editorial text-lg md:text-xl max-w-xl mx-auto mb-12 text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Визуални системи за брандове, които ценят яснота и форма.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <button
              onClick={() => scrollToSection("#projects")}
              className="btn-outline magnetic-hover"
            >
              Проекти
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-primary magnetic-hover"
            >
              <span>Започни проект</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border border-foreground/30 flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div className="w-1 h-2 rounded-full bg-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
