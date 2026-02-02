import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Import project images
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

const ProjectsSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("Всички");
  const [activeProject, setActiveProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  const filters = ["Всички", "Брандинг", "Уеб", "Социални", "Motion"];

  const projects: Project[] = [
    {
      title: "Dolce Amaro",
      category: "Уеб дизайн",
      categoryKey: "Уеб",
      description: "Модерен уебсайт за италиански ресторант с онлайн поръчки",
      image: projectDolce,
      year: "2024",
    },
    {
      title: "Double44",
      category: "Бранд идентичност",
      categoryKey: "Брандинг",
      description: "Луксозен бар в центъра на Варна",
      image: projectDouble44,
      year: "2024",
    },
    {
      title: "Elegant Moodboard",
      category: "Социални шаблони",
      categoryKey: "Социални",
      description: "Естетична визуална система за фотографско студио",
      image: projectMoodboard,
      year: "2024",
    },
    {
      title: "Soul Beauty",
      category: "Социални шаблони",
      categoryKey: "Социални",
      description: "Цялостна визуална идентичност за салон за красота",
      image: projectSoul,
      year: "2023",
    },
    {
      title: "Aurum",
      category: "Социални шаблони",
      categoryKey: "Социални",
      description: "Система от шаблони за луксозна бижутерска марка",
      image: projectAurum,
      year: "2023",
    },
    {
      title: "Verde Organic",
      category: "Брандинг",
      categoryKey: "Брандинг",
      description: "Цялостна идентичност за биологичен производител",
      image: projectVerde,
      year: "2023",
    },
    {
      title: "Kinetic",
      category: "Motion дизайн",
      categoryKey: "Motion",
      description: "Анимирани елементи за технологична компания",
      image: projectKinetic,
      year: "2023",
    },
    {
      title: "Lumina Events",
      category: "Печатни материали",
      categoryKey: "Брандинг",
      description: "Пълен комплект материали за агенция за събития",
      image: projectLumina,
      year: "2022",
    },
  ];

  const filteredProjects =
    activeFilter === "Всички"
      ? projects
      : projects.filter((p) => p.categoryKey === activeFilter);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % filteredProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredProjects.length]);

  // Reset active project when filter changes
  useEffect(() => {
    setActiveProject(0);
  }, [activeFilter]);

  const currentProject = filteredProjects[activeProject];

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-section relative overflow-hidden min-h-screen"
    >
      {/* Dramatic background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Morphing gradient orbs */}
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[1200px] h-[1200px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, transparent 50%)",
            y: parallaxY,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--warm-beige) / 0.4) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div ref={ref} className="container-wide relative z-10">
        {/* Header */}
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
            Портфолио
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2 
              className="text-display text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl leading-none whitespace-nowrap"
              initial={{ y: 100 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Избрани проекти
            </motion.h2>
          </div>

          {/* Filters */}
          <motion.div 
            className="flex flex-wrap gap-3 mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            {filters.map((filter, i) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-6 py-3 text-sm border overflow-hidden transition-all duration-500 ${
                  activeFilter === filter
                    ? "border-accent text-accent bg-accent/10"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Showcase - Cinematic Display */}
        <motion.div
          className="relative"
          style={{ perspective: "2000px" }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Project Display */}
          <motion.div
            className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-lg"
            style={{ rotateX }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject?.title}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={currentProject?.image}
                  alt={currentProject?.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-primary/50" />
                
                {/* Grain overlay */}
                <div 
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Project Info Overlay */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject?.title + "-info"}
                className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.span 
                  className="inline-block px-4 py-2 bg-accent text-primary-foreground text-xs font-medium mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentProject?.category}
                </motion.span>
                
                <motion.h3 
                  className="text-4xl md:text-6xl lg:text-7xl font-display text-primary-foreground mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {currentProject?.title}
                </motion.h3>
                
                <motion.p 
                  className="text-primary-foreground/80 text-lg md:text-xl max-w-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {currentProject?.description}
                </motion.p>

                <motion.span 
                  className="inline-block mt-4 text-primary-foreground/60 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {currentProject?.year}
                </motion.span>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <motion.button
                className="w-14 h-14 rounded-full border border-primary-foreground/30 flex items-center justify-center backdrop-blur-sm pointer-events-auto"
                whileHover={{ scale: 1.1, borderColor: "hsl(var(--accent))" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary-foreground))" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </motion.button>
              
              <motion.button
                className="w-14 h-14 rounded-full border border-primary-foreground/30 flex items-center justify-center backdrop-blur-sm pointer-events-auto"
                whileHover={{ scale: 1.1, borderColor: "hsl(var(--accent))" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveProject((prev) => (prev + 1) % filteredProjects.length)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary-foreground))" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Thumbnail Strip */}
          <motion.div 
            className="mt-8 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {filteredProjects.map((project, index) => (
                <motion.button
                  key={project.title}
                  className={`relative flex-shrink-0 w-32 md:w-40 aspect-[4/3] overflow-hidden rounded-sm transition-all duration-500 ${
                    activeProject === index 
                      ? "ring-2 ring-accent ring-offset-2 ring-offset-background" 
                      : "opacity-50 hover:opacity-100"
                  }`}
                  onClick={() => setActiveProject(index)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Active indicator */}
                  <AnimatePresence>
                    {activeProject === index && (
                      <motion.div
                        className="absolute inset-0 border-2 border-accent"
                        initial={{ opacity: 0, scale: 1.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-6 h-px bg-border relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ 
                  width: `${((activeProject + 1) / filteredProjects.length) * 100}%` 
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Counter */}
            <div className="mt-4 flex justify-between items-center text-sm">
              <span className="text-muted-foreground">
                <span className="text-foreground font-medium">{String(activeProject + 1).padStart(2, '0')}</span>
                {" / "}
                {String(filteredProjects.length).padStart(2, '0')}
              </span>
              
              <motion.button
                className="text-accent hover:text-foreground transition-colors flex items-center gap-2 group"
                whileHover={{ x: 5 }}
              >
                <span>Виж всички</span>
                <motion.svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex items-center gap-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
              animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="relative w-4 h-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 border border-accent" />
              <motion.div 
                className="absolute inset-1 bg-accent"
                animate={{ scale: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <motion.div
              className="w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
              animate={{ scaleX: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
