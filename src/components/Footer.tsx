import { motion } from "framer-motion";
import logoGraphyra from "@/assets/logo-graphyra.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border">
      <div className="container-wide">
        {/* NAP Section - Name, Address, Phone */}
        <div className="grid md:grid-cols-3 gap-16 mb-12 pb-12 border-b border-border">
          {/* Name */}
          <div>
            <motion.a
              href="#"
              className="inline-block mb-4"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={logoGraphyra} 
                alt="Graphyra Design Agency" 
                className="h-16 w-auto"
              />
            </motion.a>
            <p className="text-muted-foreground text-sm">
              Дизайн студио за брандинг, уеб дизайн и визуални решения.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-caption text-accent mb-3">Адрес</h4>
            <address className="text-foreground not-italic leading-relaxed">
              жк. ВЪЗРАЖДАНЕ 37,<br />
              вх. 2, ет. 7, ап. 41<br />
              Варна, България
            </address>
          </div>

          {/* Phone & Email */}
          <div>
            <h4 className="text-caption text-accent mb-3">Контакти</h4>
            <div className="space-y-2">
              <a 
                href="tel:+359888123456" 
                className="block text-foreground hover:text-accent transition-colors"
              >
                +359 888 123 456
              </a>
              <a 
                href="mailto:contact@graphyra.net" 
                className="block text-foreground hover:text-accent transition-colors"
              >
                contact@graphyra.net
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Graphyra. Всички права запазени.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-accent transition-colors link-underline"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-accent transition-colors link-underline"
            >
              Behance
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-accent transition-colors link-underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
