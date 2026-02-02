import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const projectTypes = [
    "Брандинг",
    "Уеб дизайн",
    "Социални мрежи",
    "Печатни материали",
    "Motion дизайн",
    "Друго",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full opacity-20"
            style={{
              background: "conic-gradient(from 0deg, hsl(var(--accent) / 0.3), hsl(var(--warm-beige) / 0.2), hsl(var(--accent) / 0.1), hsl(var(--warm-beige) / 0.3), hsl(var(--accent) / 0.3))",
              filter: "blur(100px)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Floating elements */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-accent/40"
              style={{
                top: `${Math.random() * 100}%`,
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

          <motion.div
            className="absolute top-[30%] right-[10%] w-32 h-32 border border-accent/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[20%] left-[5%] w-20 h-20 border border-foreground/10 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container-wide relative z-10">
          <motion.p
            className="text-caption text-accent mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Свържете се
          </motion.p>
          <motion.h1
            className="text-display text-[10vw] sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Да създадем нещо,
            <br />
            <span className="text-accent">което остава.</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form className="space-y-8">
                {/* Name */}
                <div className="relative">
                  <motion.label
                    className={`absolute left-0 transition-all duration-300 ${
                      focusedField === "name" ? "text-accent -top-6 text-sm" : "text-muted-foreground top-4"
                    }`}
                  >
                    Вашето име
                  </motion.label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b-2 border-border py-4 text-lg focus:outline-none focus:border-accent transition-colors"
                    onFocus={() => setFocusedField("name")}
                    onBlur={(e) => !e.target.value && setFocusedField(null)}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-accent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === "name" ? 1 : 0 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <motion.label
                    className={`absolute left-0 transition-all duration-300 ${
                      focusedField === "email" ? "text-accent -top-6 text-sm" : "text-muted-foreground top-4"
                    }`}
                  >
                    Имейл адрес
                  </motion.label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b-2 border-border py-4 text-lg focus:outline-none focus:border-accent transition-colors"
                    onFocus={() => setFocusedField("email")}
                    onBlur={(e) => !e.target.value && setFocusedField(null)}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-accent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === "email" ? 1 : 0 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="text-sm text-muted-foreground mb-4 block">
                    Тип проект
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {projectTypes.map((type) => (
                      <motion.button
                        key={type}
                        type="button"
                        className="px-5 py-2.5 border border-border text-sm hover:border-accent hover:text-accent transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {type}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <motion.label
                    className={`absolute left-0 transition-all duration-300 ${
                      focusedField === "message" ? "text-accent -top-6 text-sm" : "text-muted-foreground top-4"
                    }`}
                  >
                    Разкажете ни за проекта
                  </motion.label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-border py-4 text-lg focus:outline-none focus:border-accent transition-colors resize-none"
                    onFocus={() => setFocusedField("message")}
                    onBlur={(e) => !e.target.value && setFocusedField(null)}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-accent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="group relative w-full md:w-auto px-12 py-5 bg-foreground text-background text-lg font-medium overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-accent"
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
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </motion.svg>
                  </span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div>
                <h3 className="text-caption text-accent mb-4">Имейл</h3>
                <a 
                  href="mailto:hello@graphyra.com" 
                  className="text-2xl md:text-3xl font-display hover:text-accent transition-colors"
                >
                  hello@graphyra.com
                </a>
              </div>

              <div>
                <h3 className="text-caption text-accent mb-4">Телефон</h3>
                <a 
                  href="tel:+359888123456" 
                  className="text-2xl md:text-3xl font-display hover:text-accent transition-colors"
                >
                  +359 888 123 456
                </a>
              </div>

              <div>
                <h3 className="text-caption text-accent mb-4">Локация</h3>
                <p className="text-2xl md:text-3xl font-display">
                  Варна, България
                </p>
              </div>

              <div>
                <h3 className="text-caption text-accent mb-4">Социални мрежи</h3>
                <div className="flex gap-6">
                  {["Instagram", "Behance", "LinkedIn"].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      className="text-lg hover:text-accent transition-colors"
                      whileHover={{ y: -2 }}
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative element */}
              <motion.div
                className="relative w-full aspect-square max-w-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  className="absolute inset-0 border border-accent/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 border border-foreground/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-4 h-4 bg-accent"
                    animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
