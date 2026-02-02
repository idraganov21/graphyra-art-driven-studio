import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

// Import project images
import projectNoirCafe from "@/assets/project-noir-cafe.jpg";
import projectSeaport from "@/assets/project-seaport.jpg";
import projectAurum from "@/assets/project-aurum.jpg";
import projectAtlas from "@/assets/project-atlas.jpg";
import projectVerde from "@/assets/project-verde.jpg";
import projectKinetic from "@/assets/project-kinetic.jpg";
import projectEmber from "@/assets/project-ember.jpg";
import projectLumina from "@/assets/project-lumina.jpg";

interface Project {
  title: string;
  category: string;
  categoryKey: string;
  description: string;
  image: string;
}

const ProjectsSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("Всички");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const filters = ["Всички", "Брандинг", "Уеб", "Социални", "Печат", "Motion"];

  const projects: Project[] = [
    {
      title: "Noir Café",
      category: "Бранд идентичност",
      categoryKey: "Брандинг",
      description: "Пълна визуална система за бутикова кафетерия в центъра на София",
      image: projectNoirCafe,
    },
    {
      title: "Seaport Dining",
      category: "Уеб дизайн",
      categoryKey: "Уеб",
      description: "Минималистичен уебсайт за ексклузивен ресторант на морския бряг",
      image: projectSeaport,
    },
    {
      title: "Aurum",
      category: "Социални шаблони",
      categoryKey: "Социални",
      description: "Система от шаблони за луксозна бижутерска марка",
      image: projectAurum,
    },
    {
      title: "Atlas Studio",
      category: "Външна реклама",
      categoryKey: "Печат",
      description: "Билборд кампания за творческо студио в Пловдив",
      image: projectAtlas,
    },
    {
      title: "Verde Organic",
      category: "Брандинг",
      categoryKey: "Брандинг",
      description: "Цялостна идентичност за биологичен производител",
      image: projectVerde,
    },
    {
      title: "Kinetic",
      category: "Motion дизайн",
      categoryKey: "Motion",
      description: "Анимирани елементи за технологична компания",
      image: projectKinetic,
    },
    {
      title: "Ember & Stone",
      category: "Уеб дизайн",
      categoryKey: "Уеб",
      description: "E-commerce платформа за занаятчийски мебели",
      image: projectEmber,
    },
    {
      title: "Lumina Events",
      category: "Печатни материали",
      categoryKey: "Печат",
      description: "Пълен комплект материали за агенция за събития",
      image: projectLumina,
    },
  ];

  const filteredProjects =
    activeFilter === "Всички"
      ? projects
      : projects.filter((p) => p.categoryKey === activeFilter);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-section relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large floating orb */}
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--warm-beige) / 0.2) 0%, transparent 50%)",
            y: parallaxY,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating geometric elements */}
        <motion.div
          className="absolute top-1/4 right-[5%] w-24 h-24 border border-accent/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/3 left-[8%] w-16 h-16 border border-foreground/10"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dot pattern */}
        <motion.div
          className="absolute top-1/2 right-[10%] grid grid-cols-5 gap-4"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-accent/30"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.05 }}
            />
          ))}
        </motion.div>
      </div>

      <div ref={ref} className="container-wide relative z-10">
        {/* Header with dramatic reveal */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
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
                className="text-display text-[10vw] sm:text-6xl md:text-7xl lg:text-8xl leading-none"
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                Избрани проекти
              </motion.h2>
            </div>
          </div>

          {/* Filters with animated underline */}
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            {filters.map((filter, i) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-5 py-2.5 text-sm border overflow-hidden transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-accent text-accent"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-accent/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative">{filter}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid with enhanced hover effects */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              layout
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-6">
                {/* Image with parallax effect */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: hoveredProject === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </motion.div>

                {/* Overlay gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Category tag with reveal animation */}
                <motion.div
                  className="absolute bottom-6 left-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                    y: hoveredProject === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <span className="px-4 py-2 bg-background text-foreground text-sm font-medium">
                    {project.category}
                  </span>
                </motion.div>

                {/* Arrow indicator */}
                <motion.div
                  className="absolute top-6 right-6 w-12 h-12 border border-primary-foreground/50 rounded-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                    scale: hoveredProject === index ? 1 : 0.5,
                    rotate: hoveredProject === index ? 0 : -45,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="hsl(var(--primary-foreground))"
                    strokeWidth="2"
                    animate={{
                      x: hoveredProject === index ? [0, 5, 0] : 0,
                    }}
                    transition={{ duration: 0.6, repeat: hoveredProject === index ? Infinity : 0 }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </motion.svg>
                </motion.div>

                {/* Corner accents */}
                <motion.div
                  className="absolute top-4 left-4 w-8 h-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-full h-px bg-accent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredProject === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                  <motion.div
                    className="absolute top-0 left-0 w-px h-full bg-accent"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: hoveredProject === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "top" }}
                  />
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute bottom-0 right-0 w-full h-px bg-accent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredProject === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "right" }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-px h-full bg-accent"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: hoveredProject === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "bottom" }}
                  />
                </motion.div>
              </div>

              {/* Project Info with animated reveal */}
              <div className="relative">
                <motion.div
                  className="flex items-start justify-between gap-4"
                  animate={{
                    x: hoveredProject === index ? 10 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <h3 className="text-editorial text-2xl md:text-3xl mb-2 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>
                </motion.div>

                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-4 left-0 h-px bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: hoveredProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "left", width: "100%" }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Decorative bottom element */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex items-center gap-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-20 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="w-3 h-3 border border-accent"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="w-20 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
              animate={{ scaleX: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
