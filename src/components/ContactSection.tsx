import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const projectTypes = [
    "Брандинг",
    "Уеб дизайн",
    "Социално присъствие",
    "Печат",
    "Друго",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-section relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: backgroundY }}>
          {/* Large gradient orb */}
          <motion.div
            className="absolute -top-1/2 right-0 w-[1000px] h-[1000px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--warm-beige) / 0.25) 0%, transparent 50%)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Secondary orb */}
          <motion.div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--accent) / 0.1) 0%, transparent 50%)",
            }}
            animate={{
              scale: [1, 1.15, 1],
              y: [0, -30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Floating geometric elements */}
        <motion.div
          className="absolute top-1/3 right-[10%] w-24 h-24 border border-accent/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/4 left-[5%] w-16 h-16 border border-foreground/10"
          animate={{
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Dot pattern */}
        <motion.div
          className="absolute top-1/4 left-[15%] grid grid-cols-4 gap-3 opacity-30"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-accent/50"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </motion.div>
      </div>

      <div ref={ref} className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Heading with dramatic animation */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p 
              className="text-caption text-accent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Контакт
            </motion.p>
            <div className="overflow-hidden mb-8">
              <motion.h2 
                className="text-display text-[8vw] sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
                initial={{ y: 100 }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                Да създадем нещо, което остава.
              </motion.h2>
            </div>
            <motion.p 
              className="text-muted-foreground text-lg md:text-xl mb-10 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Имате проект на ум? Свържете се с нас и нека обсъдим как можем да
              помогнем.
            </motion.p>

            {/* Direct contact with enhanced styling */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div 
                className="group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-caption text-muted-foreground mb-2">Имейл</p>
                <a
                  href="mailto:hello@graphyra.com"
                  className="text-editorial text-2xl md:text-3xl relative inline-block group-hover:text-accent transition-colors"
                >
                  hello@graphyra.com
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </a>
              </motion.div>
              <motion.div
                className="group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-caption text-muted-foreground mb-2">Локация</p>
                <p className="text-editorial text-xl md:text-2xl group-hover:text-accent transition-colors">
                  София, България
                </p>
              </motion.div>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              className="mt-12 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="w-12 h-12 border border-accent/30 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="w-3 h-3 bg-accent rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <motion.div
                className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-accent/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          </motion.div>

          {/* Right - Form with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <motion.label
                  htmlFor="name"
                  className={`text-caption block mb-3 transition-colors duration-300 ${
                    focusedField === "name" ? "text-accent" : "text-muted-foreground"
                  }`}
                  animate={{ x: focusedField === "name" ? 5 : 0 }}
                >
                  Име
                </motion.label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-border focus:border-accent outline-none transition-colors text-foreground text-lg"
                  placeholder="Вашето име"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === "name" ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>

              {/* Email */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <motion.label
                  htmlFor="email"
                  className={`text-caption block mb-3 transition-colors duration-300 ${
                    focusedField === "email" ? "text-accent" : "text-muted-foreground"
                  }`}
                  animate={{ x: focusedField === "email" ? 5 : 0 }}
                >
                  Имейл
                </motion.label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-border focus:border-accent outline-none transition-colors text-foreground text-lg"
                  placeholder="hello@example.com"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === "email" ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>

              {/* Project Type */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <motion.label
                  htmlFor="projectType"
                  className={`text-caption block mb-3 transition-colors duration-300 ${
                    focusedField === "projectType" ? "text-accent" : "text-muted-foreground"
                  }`}
                  animate={{ x: focusedField === "projectType" ? 5 : 0 }}
                >
                  Тип проект
                </motion.label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("projectType")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-border focus:border-accent outline-none transition-colors text-foreground text-lg cursor-pointer appearance-none"
                  style={{ backgroundImage: "none" }}
                >
                  <option value="" disabled className="bg-background">
                    Изберете тип
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-background">
                      {type}
                    </option>
                  ))}
                </select>
                {/* Custom dropdown arrow */}
                <motion.div
                  className="absolute right-0 top-1/2 translate-y-1 pointer-events-none"
                  animate={{ rotate: focusedField === "projectType" ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </motion.div>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === "projectType" ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>

              {/* Message */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <motion.label
                  htmlFor="message"
                  className={`text-caption block mb-3 transition-colors duration-300 ${
                    focusedField === "message" ? "text-accent" : "text-muted-foreground"
                  }`}
                  animate={{ x: focusedField === "message" ? 5 : 0 }}
                >
                  Съобщение
                </motion.label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-border focus:border-accent outline-none transition-colors text-foreground text-lg resize-none"
                  placeholder="Разкажете ни за вашия проект..."
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>

              {/* Submit button with enhanced hover */}
              <motion.button
                type="submit"
                className="btn-primary w-full magnetic-hover mt-10 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative flex items-center justify-center gap-3">
                  Изпрати запитване
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </motion.svg>
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
