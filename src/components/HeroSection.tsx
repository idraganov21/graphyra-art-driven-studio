import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Track mouse for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating shapes data
  const floatingShapes = [
    { size: 300, x: "70%", y: "20%", delay: 0, color: "warm-beige" },
    { size: 200, x: "20%", y: "60%", delay: 0.5, color: "accent" },
    { size: 150, x: "80%", y: "70%", delay: 1, color: "secondary" },
    { size: 100, x: "10%", y: "30%", delay: 1.5, color: "warm-beige" },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic gradient background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Morphing gradient blobs */}
        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
              background: `radial-gradient(circle, hsl(var(--${shape.color}) / 0.4) 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, mousePosition.x * 30, 0],
              y: [0, mousePosition.y * 30, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              x: { duration: 0.5, ease: "easeOut" },
              y: { duration: 0.5, ease: "easeOut" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: shape.delay },
              rotate: { duration: 20, repeat: Infinity, ease: "linear", delay: shape.delay },
            }}
          />
        ))}

        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 50%, 
                hsl(var(--warm-beige) / 0.15) 0%, 
                transparent 50%
              )
            `,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Geometric floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Rotating ring */}
        <motion.div
          className="absolute top-1/4 right-[10%] w-40 h-40 border border-accent/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
          }}
        />

        {/* Floating squares */}
        <motion.div
          className="absolute bottom-1/4 left-[15%] w-20 h-20 border border-foreground/10"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            y: [0, -20, 0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            x: mousePosition.x * 15,
            y: mousePosition.y * 15,
          }}
        />

        {/* Diagonal lines */}
        <motion.svg
          className="absolute top-1/3 left-[5%] w-32 h-32 opacity-20"
          viewBox="0 0 100 100"
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.line
            x1="0" y1="100" x2="100" y2="0"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="20" y1="100" x2="100" y2="20"
            stroke="hsl(var(--foreground))"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.7 }}
          />
        </motion.svg>

        {/* Floating dots pattern */}
        <motion.div
          className="absolute top-[60%] right-[20%]"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="grid grid-cols-4 gap-3">
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-accent/40"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Morphing shape */}
        <motion.div
          className="absolute bottom-[30%] right-[8%] w-24 h-24"
          animate={{
            borderRadius: ["20%", "50%", "30%", "50%", "20%"],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "linear-gradient(135deg, hsl(var(--accent) / 0.2), transparent)",
            border: "1px solid hsl(var(--accent) / 0.3)",
          }}
        />
      </div>

      {/* Horizontal accent line */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, hsl(var(--accent) / 0.4) 50%, transparent 100%)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Content */}
      <motion.div 
        className="container-wide relative z-10 text-center"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Caption with reveal effect */}
          <motion.div className="overflow-hidden mb-6">
            <motion.p
              className="text-caption text-muted-foreground"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Дигитална Маркетинг Агенция - Варна
            </motion.p>
          </motion.div>

          {/* Main Title with stagger animation - scales instead of wrapping */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              className="text-display text-[15vw] sm:text-[12vw] md:text-[11vw] lg:text-[10vw] xl:text-[9vw] leading-none whitespace-nowrap"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {"GRAPHYRA".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  whileHover={{
                    y: -10,
                    color: "hsl(var(--accent))",
                    transition: { duration: 0.2 },
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut",
                    },
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Tagline with word animation */}
          <motion.div className="overflow-hidden mb-12">
            <motion.p
              className="text-editorial text-lg md:text-xl max-w-2xl mx-auto text-foreground/80"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Дизайн студио за бранд идентичност, уеб дизайн и социални мрежи.
            </motion.p>
          </motion.div>

          {/* CTAs with hover effects */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection("#projects")}
              className="btn-outline magnetic-hover group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-accent/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative">Проекти</span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="btn-primary magnetic-hover group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Започни проект</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated corner decorations */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-foreground/20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ transformOrigin: "left" }}
        />
        <motion.div
          className="absolute top-0 left-0 w-px h-full bg-foreground/20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="absolute bottom-0 right-0 w-full h-px bg-foreground/20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ transformOrigin: "right" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-px h-full bg-foreground/20"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ transformOrigin: "bottom" }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-caption text-muted-foreground text-xs">Скролни</span>
          <div className="w-6 h-10 rounded-full border border-foreground/30 flex justify-center pt-2">
            <motion.div 
              className="w-1 h-2 rounded-full bg-accent"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
