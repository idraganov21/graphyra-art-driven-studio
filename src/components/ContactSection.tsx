import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

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
      ref={ref}
      className="py-section relative overflow-hidden"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-caption text-accent mb-4">Контакт</p>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Да създадем нещо, което остава.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Имате проект на ум? Свържете се с нас и нека обсъдим как можем да
              помогнем.
            </p>

            {/* Direct contact */}
            <div className="space-y-4">
              <div>
                <p className="text-caption text-muted-foreground mb-2">Имейл</p>
                <a
                  href="mailto:hello@graphyra.com"
                  className="text-editorial text-xl link-underline"
                >
                  hello@graphyra.com
                </a>
              </div>
              <div>
                <p className="text-caption text-muted-foreground mb-2">Локация</p>
                <p className="text-editorial">София, България</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-caption text-muted-foreground block mb-2"
                >
                  Име
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none transition-colors text-foreground"
                  placeholder="Вашето име"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-caption text-muted-foreground block mb-2"
                >
                  Имейл
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none transition-colors text-foreground"
                  placeholder="hello@example.com"
                />
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="projectType"
                  className="text-caption text-muted-foreground block mb-2"
                >
                  Тип проект
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none transition-colors text-foreground cursor-pointer"
                >
                  <option value="" disabled>
                    Изберете тип
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="text-caption text-muted-foreground block mb-2"
                >
                  Съобщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-accent outline-none transition-colors text-foreground resize-none"
                  placeholder="Разкажете ни за вашия проект..."
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="btn-primary w-full magnetic-hover mt-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Изпрати запитване</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
