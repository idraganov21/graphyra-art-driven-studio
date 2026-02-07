import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

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
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  size: string;
  rotation: number;
  zIndex: number;
}

const ProjectsSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  const projects: Project[] = [
    {
      title: "ПФК Добруджа",
      category: "Социални мрежи",
      categoryKey: "Социални",
      description: "Управление на социалните мрежи на футболен клуб",
      image: projectDobrudzha,
      position: { top: "0%", left: "8%" },
      size: "w-[55%] md:w-[42%]",
      rotation: -2,
      zIndex: 9,
    },
    {
      title: "Dolce Amaro",
      category: "Уеб дизайн",
      categoryKey: "Уеб",
      description: "Модерен уебсайт за италиански ресторант",
      image: projectDolce,
      position: { top: "3%", right: "2%" },
      size: "w-[55%] md:w-[42%]",
      rotation: -3,
      zIndex: 3,
    },
    {
      title: "Double44",
      category: "Бранд идентичност",
      categoryKey: "Брандинг",
      description: "Луксозен бар в центъра на Варна",
      image: projectDouble44,
      position: { top: "18%", left: "2%" },
      size: "w-[58%] md:w-[45%]",
      rotation: 4,
      zIndex: 4,
    },
    {
      title: "Elegant Moodboard",
      category: "Социални шаблони",
      categoryKey: "Социални",
      description: "Естетична визуална система",
      image: projectMoodboard,
      position: { top: "32%", left: "12%" },
      size: "w-[48%] md:w-[35%]",
      rotation: -5,
      zIndex: 5,
    },
    {
      title: "Soul Beauty",
      category: "Социални шаблони",
      categoryKey: "Социални",
      description: "Визуална идентичност за салон",
      image: projectSoul,
      position: { top: "28%", right: "8%" },
      size: "w-[45%] md:w-[32%]",
      rotation: 6,
      zIndex: 2,
    },
    {
      title: "Aurum",
      category: "Социални шаблони",
      categoryKey: "Социални",
      description: "Луксозна бижутерска марка",
      image: projectAurum,
      position: { top: "52%", left: "5%" },
      size: "w-[50%] md:w-[38%]",
      rotation: 3,
      zIndex: 6,
    },
    {
      title: "Verde Organic",
      category: "Брандинг",
      categoryKey: "Брандинг",
      description: "Биологичен производител",
      image: projectVerde,
      position: { top: "48%", right: "2%" },
      size: "w-[52%] md:w-[40%]",
      rotation: -4,
      zIndex: 1,
    },
    {
      title: "Kinetic",
      category: "Motion дизайн",
      categoryKey: "Motion",
      description: "Анимирани елементи",
      image: projectKinetic,
      position: { top: "72%", left: "18%" },
      size: "w-[45%] md:w-[34%]",
      rotation: 5,
      zIndex: 7,
    },
    {
      title: "Lumina Events",
      category: "Печатни материали",
      categoryKey: "Брандинг",
      description: "Материали за събития",
      image: projectLumina,
      position: { top: "68%", right: "12%" },
      size: "w-[48%] md:w-[36%]",
      rotation: -2,
      zIndex: 8,
    },
  ];

  const getParallax = (index: number) => {
    if (index % 3 === 0) return parallaxY1;
    if (index % 3 === 1) return parallaxY2;
    return parallaxY3;
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-section relative overflow-hidden"
    >
      {/* Epic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large morphing gradient orb */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] h-[150vw] opacity-40"
          style={{
            background: "conic-gradient(from 0deg, hsl(var(--accent) / 0.3), hsl(var(--warm-beige) / 0.2), hsl(var(--accent) / 0.1), hsl(var(--warm-beige) / 0.3), hsl(var(--accent) / 0.3))",
            rotate: bgRotate,
            scale: bgScale,
            filter: "blur(100px)",
          }}
        />

        {/* Multiple floating orbs */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.4) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-[40%] right-[5%] w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--warm-beige) / 0.5) 0%, transparent 60%)",
            filter: "blur(50px)",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-[20%] left-[20%] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--accent) / 0.25) 0%, transparent 50%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-[15%] right-[20%] w-32 h-32 border-2 border-accent/30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute top-[50%] left-[8%] w-24 h-24 border border-foreground/10 rounded-full"
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-[30%] right-[15%] w-16 h-16"
          style={{
            background: "linear-gradient(135deg, hsl(var(--accent) / 0.3), transparent)",
          }}
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px"
            style={{
              top: `${10 + i * 12}%`,
              left: 0,
              right: 0,
              background: `linear-gradient(90deg, transparent, hsl(var(--accent) / ${0.1 + i * 0.02}), transparent)`,
            }}
            animate={{
              x: i % 2 === 0 ? ["-50%", "50%"] : ["50%", "-50%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Particle dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1 h-1 rounded-full bg-accent/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glowing accent spots */}
        <motion.div
          className="absolute top-[25%] left-[40%] w-4 h-4 rounded-full bg-accent"
          style={{ filter: "blur(8px)" }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[60%] right-[30%] w-3 h-3 rounded-full bg-accent"
          style={{ filter: "blur(6px)" }}
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div ref={ref} className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24"
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
        </motion.div>

        {/* Scattered Projects Container */}
        <div className="relative h-[220vh] md:h-[280vh]">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`absolute ${project.size} cursor-pointer group`}
              style={{
                ...project.position,
                zIndex: hoveredProject === index ? 100 : project.zIndex,
                y: getParallax(index),
              }}
              initial={{ 
                opacity: 0, 
                scale: 0.8, 
                rotate: project.rotation * 2 
              }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1, 
                rotate: project.rotation 
              } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                transition: { duration: 0.4 }
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card with shadow and border */}
              <motion.div 
                className="relative bg-background overflow-hidden"
                style={{
                  boxShadow: hoveredProject === index 
                    ? "0 40px 80px -20px rgba(0,0,0,0.5), 0 0 0 2px hsl(var(--accent) / 0.5)" 
                    : "0 25px 50px -15px rgba(0,0,0,0.35)",
                }}
                animate={{
                  y: hoveredProject === index ? -15 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Image - using object-contain to show full image */}
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

                  {/* Project info overlay */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredProject === index ? 1 : 0,
                      y: hoveredProject === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-display text-primary-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm md:text-base">
                      {project.description}
                    </p>
                  </motion.div>

                  {/* Glowing border on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 30px hsl(var(--accent) / 0.3)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Bottom bar */}
                <div className="p-4 md:p-5 border-t border-border bg-background">
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base font-medium text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </span>
                    <motion.div
                      className="w-8 h-8 rounded-full border border-foreground/30 flex items-center justify-center"
                      animate={{
                        scale: hoveredProject === index ? 1.2 : 1,
                        borderColor: hoveredProject === index ? "hsl(var(--accent))" : "hsl(var(--foreground) / 0.3)",
                        backgroundColor: hoveredProject === index ? "hsl(var(--accent))" : "transparent",
                      }}
                    >
                      <motion.svg 
                        width="12" 
                        height="12" 
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
                </div>
              </motion.div>

              {/* Decorative corner elements */}
              <motion.div
                className="absolute -top-3 -left-3 w-6 h-6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: hoveredProject === index ? 1 : 0,
                  scale: hoveredProject === index ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-accent" />
                <div className="absolute top-0 left-0 w-0.5 h-full bg-accent" />
              </motion.div>
              <motion.div
                className="absolute -bottom-3 -right-3 w-6 h-6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: hoveredProject === index ? 1 : 0,
                  scale: hoveredProject === index ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-accent" />
                <div className="absolute bottom-0 right-0 w-0.5 h-full bg-accent" />
              </motion.div>
            </motion.article>
          ))}

          {/* Large floating decorative elements */}
          <motion.div
            className="absolute top-[20%] left-[45%] w-40 h-40 border-2 border-accent/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-[55%] right-[8%] w-20 h-20 border border-foreground/10"
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Accent glow spots */}
          <motion.div
            className="absolute top-[35%] left-[55%] w-8 h-8 rounded-full bg-accent/50"
            style={{ filter: "blur(15px)" }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <Link to="/projects">
            <motion.button
              className="group relative px-10 py-5 border-2 border-foreground text-foreground overflow-hidden text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-foreground"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative flex items-center gap-4 group-hover:text-accent transition-colors">
                Виж всички проекти
                <motion.svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
