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

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] opacity-30"
            style={{
              background: "conic-gradient(from 0deg, hsl(var(--accent) / 0.2), hsl(var(--warm-beige) / 0.15), hsl(var(--accent) / 0.1), hsl(var(--warm-beige) / 0.2), hsl(var(--accent) / 0.2))",
              rotate: bgRotate,
              filter: "blur(80px)",
            }}
          />
          
          {/* Floating shapes */}
          <motion.div
            className="absolute top-[20%] right-[10%] w-32 h-32 border border-accent/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[30%] left-[5%] w-20 h-20 border border-foreground/10 rounded-full"
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Particle dots */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-accent/40"
              style={{
                top: `${Math.random() * 60}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container-wide relative z-10">
          <motion.p
            className="text-caption text-accent mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Портфолио
          </motion.p>
          <motion.h1
            className="text-display text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Нашите Проекти
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Избрани работи от нашето портфолио. Всеки проект е уникална история за визуална трансформация.
          </motion.p>

          {/* Filters */}
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-6 py-3 text-sm border overflow-hidden transition-all duration-500 ${
                  activeFilter === filter
                    ? "border-accent text-accent bg-accent/10"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
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
