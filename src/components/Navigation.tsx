import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logoGraphyra from "@/assets/logo-graphyra.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Начало", href: "/", isPage: true },
    { label: "Проекти", href: "/projects", isPage: true },
    { label: "Услуги", href: "/services", isPage: true },
    { label: "За нас", href: "/about", isPage: true },
    { label: "Контакт", href: "/contact", isPage: true },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: -40 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.08,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const
      }
    })
  };

  const decorVariants = {
    closed: { scaleX: 0 },
    open: (i: number) => ({
      scaleX: 1,
      transition: {
        delay: 0.2 + i * 0.08,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    })
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="container-wide flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center relative z-50">
            <img 
              src={logoGraphyra} 
              alt="Graphyra Design Agency" 
              className="h-20 w-auto mt-2 transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.isPage ? (
                  <Link
                    to={link.href}
                    className="text-sm font-body link-underline text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm font-body link-underline text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-7 h-[2px] bg-foreground block origin-center"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 4 : 0,
                width: isMobileMenuOpen ? 28 : 28,
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.span
              className="w-7 h-[2px] bg-foreground block origin-center"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -4 : 0,
                opacity: 1,
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background md:hidden overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                className="absolute top-20 right-0 w-64 h-64 rounded-full bg-accent/5"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.div 
                className="absolute bottom-20 left-0 w-48 h-48 rounded-full bg-accent/3"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <nav className="flex flex-col h-full pt-28 pb-12 px-8">
              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div 
                    key={link.href} 
                    className="overflow-hidden"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        delay: 0.1 + i * 0.08,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Index number */}
                      <span className="text-sm font-medium text-accent w-8 block">
                        0{i + 1}
                      </span>
                      
                      {link.isPage ? (
                        <Link
                          to={link.href}
                          className={`text-display text-3xl sm:text-4xl py-3 block transition-colors duration-300 ${
                            location.pathname === link.href 
                              ? 'text-accent' 
                              : 'text-foreground hover:text-accent'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-display text-3xl sm:text-4xl py-3 block text-foreground hover:text-accent transition-colors duration-300"
                        >
                          {link.label}
                        </button>
                      )}
                    </div>
                    
                    {/* Decorative line */}
                    <motion.div
                      className="h-px bg-border origin-left ml-12 mt-2"
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: 1,
                        transition: {
                          delay: 0.2 + i * 0.08,
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1]
                        }
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Footer info */}
              <motion.div 
                className="pt-8 border-t border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-caption text-muted-foreground mb-2">Свържете се с нас</p>
                    <a 
                      href="mailto:hello@graphyra.com" 
                      className="text-lg font-body text-foreground hover:text-accent transition-colors"
                    >
                      hello@graphyra.com
                    </a>
                  </div>
                  
                  <div className="flex gap-6">
                    <a 
                      href="https://instagram.com/graphyra" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-caption text-muted-foreground hover:text-accent transition-colors"
                    >
                      Instagram
                    </a>
                    <a 
                      href="https://facebook.com/graphyra" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-caption text-muted-foreground hover:text-accent transition-colors"
                    >
                      Facebook
                    </a>
                    <a 
                      href="https://linkedin.com/company/graphyra" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-caption text-muted-foreground hover:text-accent transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
