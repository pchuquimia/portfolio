import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  function Navigation() {
    return (
      <ul className="nav-ul flex flex-col items-center gap-6 py-6 sm:flex-row sm:gap-10 sm:py-0">
        <li className="nav-li">
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
            Home
          </a>
        </li>
        <li className="nav-li">
          <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
            About
          </a>
        </li>
        <li className="nav-li">
          <a href="#work" onClick={(e) => handleNavClick(e, "#work")}>
            Projects
          </a>
        </li>
        <li className="nav-li">
          <a href="#services" onClick={(e) => handleNavClick(e, "#services")}>
            Skills
          </a>
        </li>
        <li className="nav-li">
          <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
            Contact
          </a>
        </li>
      </ul>
    );
  }

  return (
    <div className="fixed inset-x-0 top-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Pablo Chuquimia
          </a>

          {/* Botón mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt=""
            />
          </button>

          {/* Nav desktop */}
          <nav className="hidden sm:flex" aria-label="Main">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Nav mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="block overflow-hidden text-center sm:hidden border-t border-white/10 bg-black/80"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="pb-5" aria-label="Mobile">
              <Navigation />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
