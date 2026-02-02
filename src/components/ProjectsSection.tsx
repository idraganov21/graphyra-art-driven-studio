import { motion } from "framer-motion";
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("Всички");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
      ref={ref}
      className="py-section relative overflow-hidden"
    >
      <div className="container-wide">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="text-caption text-accent mb-4">Портфолио</p>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
              Избрани проекти
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm border transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-accent text-accent"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-6">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{
                    scale: hoveredProject === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary/20"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Category tag on hover */}
                <motion.div
                  className="absolute bottom-4 left-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                    y: hoveredProject === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="px-3 py-1 bg-background text-foreground text-xs">
                    {project.category}
                  </span>
                </motion.div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-editorial text-xl md:text-2xl mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>

              {/* Hover line */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-accent"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: hoveredProject === index ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "left" }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
