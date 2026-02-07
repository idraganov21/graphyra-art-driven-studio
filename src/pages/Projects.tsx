import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import project images
import projectDobrudzha from "@/assets/project-dobrudzha.png";
import projectDolce from "@/assets/project-dolce.png";
import projectDouble44 from "@/assets/project-double44.png";
import projectMoodboard from "@/assets/project-moodboard.png";
import projectSoul from "@/assets/project-soul.png";
import projectAurum from "@/assets/project-aurum.jpg";
import projectVerde from "@/assets/project-verde.jpg";
import projectKinetic from "@/assets/project-kinetic.jpg";
import projectLumina from "@/assets/project-lumina.jpg";

interface Project {
  title: string;
  category: string;
  categoryKey: string;
  description: string;
  image: string;
  year: string;
}

const Projects = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("Всички");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const filters = ["Всички", "Брандинг", "Уеб", "Социални", "Motion"];

  const projects: Project[] = [
    {
      title: "ПФК Добруджа",
      category: "Социални мрежи",
      categoryKey: "Социални",
      description: "Управление на социалните мрежи на футболен клуб. Публикации, сторита и цялостна визуална стратегия за онлайн присъствие.",
      image: projectDobrudzha,
      year: "2025",
    },
    {
      title: "Dolce Amaro",
      category: "Уеб дизайн",
      categoryKey: "Уеб",
      description: "Модерен уебсайт за италиански ресторант с онлайн поръчки и резервации. Елегантен дизайн, който отразява атмосферата на заведението.",
      image: projectDolce,
      year: "2024",
    },
    {
      title: "Double44",
      category: "Бранд идентичност",
      categoryKey: "Брандинг",
      description: "Луксозен бар в центъра на Варна. Пълна визуална идентичност включваща лого, менюта и брандиране на интериора.",
      image: projectDouble44,
      year: "2024",
    },
    {
      title: "Elegant Moodboard",
      category: "Социални шаблони",
      categoryKey: "Социални",
      description: "Естетична визуална система за фотографско студио. Шаблони за Instagram и Facebook с единен визуален стил.",
      image: projectMoodboard,
      year: "2024",
    },
    {
      title: "Soul Beauty",
      category: "Социални шаблони",
      categoryKey: "Социални",
      description: "Цялостна визуална идентичност за салон за красота. Модерен и женствен дизайн за социални мрежи.",
      image: projectSoul,
      year: "2023",
    },
    {
      title: "Aurum",
      category: "Социални шаблони",
      categoryKey: "Социални",
      description: "Система от шаблони за луксозна бижутерска марка. Елегантен и минималистичен подход.",
      image: projectAurum,
      year: "2023",
    },
    {
      title: "Verde Organic",
      category: "Брандинг",
      categoryKey: "Брандинг",
      description: "Цялостна идентичност за биологичен производител. Природни цветове и органични форми.",
      image: projectVerde,
      year: "2023",
    },
    {
      title: "Kinetic",
      category: "Motion дизайн",
      categoryKey: "Motion",
      description: "Анимирани елементи за технологична компания. Динамични визуализации и motion graphics.",
      image: projectKinetic,
      year: "2023",
    },
    {
      title: "Lumina Events",
      category: "Печатни материали",
      categoryKey: "Брандинг",
      description: "Пълен комплект материали за агенция за събития. Покани, банери и рекламни материали.",
      image: projectLumina,
      year: "2022",
    },
  ];

  const filteredProjects =
    activeFilter === "Всички"
      ? projects
      : projects.filter((p) => p.categoryKey === activeFilter);

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      <Navigation />

      {/* Hero Section - Cinematic */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12 relative overflow-hidden min-h-[70vh] md:min-h-[80vh] flex flex-col justify-end">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Dramatic gradient */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[200vw] opacity-40"
            style={{
              background: "conic-gradient(from 45deg, hsl(var(--accent) / 0.4), transparent 25%, hsl(var(--warm-beige) / 0.3), transparent 50%, hsl(var(--accent) / 0.2), transparent 75%, hsl(var(--warm-beige) / 0.4))",
              rotate: bgRotate,
              filter: "blur(120px)",
            }}
          />

          {/* Vertical lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`vline-${i}`}
              className="absolute top-0 bottom-0 w-px"
              style={{
                left: `${15 + i * 14}%`,
                background: `linear-gradient(180deg, transparent, hsl(var(--accent) / ${0.06 + i * 0.01}), transparent)`,
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}

          {/* Floating orbs */}
          <motion.div
            className="absolute top-[15%] right-[8%] w-[400px] h-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--accent) / 0.25) 0%, transparent 60%)",
              filter: "blur(60px)",
            }}
            animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--warm-beige) / 0.3) 0%, transparent 60%)",
              filter: "blur(50px)",
            }}
            animate={{ scale: [1.2, 1, 1.2], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Geometric accents */}
          <motion.div
            className="absolute top-[20%] right-[15%] w-40 h-40 border border-accent/15"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[25%] left-[10%] w-24 h-24 border border-foreground/5 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Particle field */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`p-${i}`}
              className="absolute w-[2px] h-[2px] rounded-full bg-accent/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="container-wide relative z-10">
          {/* Top tag */}
          <motion.div
            className="flex items-center gap-4 mb-8 md:mb-12"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div
              className="w-12 h-px bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ transformOrigin: "left" }}
            />
            <span className="text-caption text-accent">Портфолио</span>
            <motion.div
              className="px-3 py-1 border border-accent/30 text-accent text-xs tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              30+ ПРОЕКТА
            </motion.div>
          </motion.div>

          {/* Main heading - dramatic split reveal */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              className="text-display text-[16vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-tight"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Нашите
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8 md:mb-12">
            <motion.h1
              className="text-display text-[16vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-tight text-accent"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              Проекти<span className="text-foreground">.</span>
            </motion.h1>
          </div>

          {/* Subtitle + filters row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Всеки проект е уникална история за визуална трансформация и креативно партньорство.
            </motion.p>

            {/* Filters */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {filters.map((filter, i) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-5 py-2.5 text-sm tracking-wide border overflow-hidden transition-all duration-400 ${
                    activeFilter === filter
                      ? "border-accent text-accent bg-accent/10"
                      : "border-border/50 text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom marquee */}
        <div className="relative mt-12 md:mt-16 overflow-hidden border-t border-border/30 py-4">
          <motion.div
            className="flex whitespace-nowrap gap-12"
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-12 items-center">
                {["БРАНДИНГ", "✦", "УЕБ ДИЗАЙН", "✦", "СОЦИАЛНИ МРЕЖИ", "✦", "MOTION ДИЗАЙН", "✦", "ПЕЧАТ", "✦", "СТРАТЕГИЯ", "✦"].map(
                  (text, i) => (
                    <span
                      key={`${setIndex}-${i}`}
                      className={`text-sm tracking-[0.3em] ${
                        text === "✦" ? "text-accent" : "text-muted-foreground/40"
                      }`}
                    >
                      {text}
                    </span>
                  )
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={ref} className="py-16 md:py-24">
        <div className="container-wide">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                layout
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <motion.div 
                  className="relative bg-background overflow-hidden border border-border"
                  style={{
                    boxShadow: hoveredProject === index 
                      ? "0 40px 80px -20px rgba(0,0,0,0.4), 0 0 0 2px hsl(var(--accent) / 0.5)" 
                      : "0 20px 40px -15px rgba(0,0,0,0.2)",
                  }}
                  animate={{
                    y: hoveredProject === index ? -10 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-muted">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain"
                      animate={{
                        scale: hoveredProject === index ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                    
                    {/* Overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Year tag */}
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                        opacity: hoveredProject === index ? 1 : 0,
                        y: hoveredProject === index ? 0 : -10,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="px-3 py-1.5 bg-background/90 text-foreground text-xs font-medium">
                        {project.year}
                      </span>
                    </motion.div>

                    {/* Category tag */}
                    <motion.div
                      className="absolute top-4 left-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                        opacity: hoveredProject === index ? 1 : 0,
                        y: hoveredProject === index ? 0 : -10,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="px-4 py-2 bg-accent text-primary-foreground text-xs font-medium tracking-wide">
                        {project.category}
                      </span>
                    </motion.div>

                    {/* Glowing border on hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        boxShadow: "inset 0 0 40px hsl(var(--accent) / 0.3)",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h2 className="text-editorial text-2xl md:text-3xl group-hover:text-accent transition-colors">
                        {project.title}
                      </h2>
                      <motion.div
                        className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center flex-shrink-0"
                        animate={{
                          scale: hoveredProject === index ? 1.1 : 1,
                          borderColor: hoveredProject === index ? "hsl(var(--accent))" : "hsl(var(--foreground) / 0.3)",
                          backgroundColor: hoveredProject === index ? "hsl(var(--accent))" : "transparent",
                        }}
                      >
                        <motion.svg 
                          width="14" 
                          height="14" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                          animate={{
                            x: hoveredProject === index ? 2 : 0,
                            color: hoveredProject === index ? "hsl(var(--primary-foreground))" : "currentColor",
                          }}
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </motion.svg>
                      </motion.div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
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
            Имате проект?
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Нека създадем нещо забележително заедно.
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

export default Projects;
