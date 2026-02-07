import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const FORMSPREE_URL = "https://formspree.io/f/mreagkzn";

const Contact = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const projectTypes = [
    "Брандинг",
    "Уеб дизайн",
    "Социални мрежи",
    "Печатни материали",
    "Motion дизайн",
    "Друго",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    if (selectedType) {
      formData.append("projectType", selectedType);
    }

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast({
          title: "Съобщението е изпратено!",
          description: "Ще се свържем с вас възможно най-скоро.",
        });
        form.reset();
        setSelectedType(null);
        setFocusedField(null);
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      toast({
        title: "Грешка при изпращане",
        description: "Моля, опитайте отново или ни пишете директно на имейл.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-8">
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
                    name="name"
                    required
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
                    name="email"
                    required
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
                        className={`px-5 py-2.5 border text-sm transition-colors ${
                          selectedType === type
                            ? "border-accent text-accent bg-accent/10"
                            : "border-border hover:border-accent hover:text-accent"
                        }`}
                        onClick={() => setSelectedType(selectedType === type ? null : type)}
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
                    name="message"
                    required
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
                  disabled={isSubmitting}
                  className="group relative w-full md:w-auto px-12 py-5 bg-foreground text-background text-lg font-medium overflow-hidden disabled:opacity-60"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <motion.span
                    className="absolute inset-0 bg-accent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? "Изпращане..." : "Изпрати запитване"}
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
                  href="mailto:contact@graphyra.net" 
                  className="text-2xl md:text-3xl font-display hover:text-accent transition-colors"
                >
                  contact@graphyra.net
                </a>
              </div>

              <div>
                <h3 className="text-caption text-accent mb-4">Телефон</h3>
                <a 
                  href="tel:+359879626889" 
                  className="text-2xl md:text-3xl font-display hover:text-accent transition-colors"
                >
                  +359 879 626 889
                </a>
              </div>

              <div>
                <h3 className="text-caption text-accent mb-4">Адрес</h3>
                <address className="text-2xl md:text-3xl font-display not-italic">
                  жк. ВЪЗРАЖДАНЕ 37,<br />
                  вх. 2, ет. 7, ап. 41<br />
                  <span className="text-xl text-muted-foreground">Варна, България</span>
                </address>
              </div>

              <div>
                <h3 className="text-caption text-accent mb-4">Социални мрежи</h3>
                <div className="flex gap-6">
                  <motion.a
                    href="https://www.instagram.com/graphyra.marketing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-accent transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    Instagram
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/profile.php?id=61587596032693"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-accent transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    Facebook
                  </motion.a>
                </div>
              </div>

              {/* Google Map */}
              <div>
                <h3 className="text-caption text-accent mb-4">Намерете ни</h3>
                <div className="w-full aspect-video rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.456844!2d27.9167!3d43.2167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4538bfb9e7a7f%3A0x5a5b8e8e8e8e8e8e!2z0LbQui4g0JLQqtCX0KDQkNCW0JTQkNCd0JUgMzcsINCS0LDRgNC90LAg0JHRitC70LPQsNGA0LjRjw!5e0!3m2!1sbg!2sbg!4v1700000000000!5m2!1sbg!2sbg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Graphyra офис локация"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
