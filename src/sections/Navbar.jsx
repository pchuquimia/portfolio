import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLanguage } from "../i18n/useLanguage";

const sectionIds = ["home", "work", "services", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const reduceMotion = useReducedMotion();
  const { language, setLanguage, content } = useLanguage();
  const { nav } = content;

  const navItems = [
    { id: "home", label: nav.home },
    { id: "work", label: nav.projects },
    { id: "services", label: nav.skills },
    { id: "contact", label: nav.contact },
  ];

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-18% 0px -62%", threshold: [0, 0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const handleNavClick = (event, target) => {
    event.preventDefault();
    setIsOpen(false);
    setActiveSection(target.slice(1));
    document.querySelector(target)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const navigation = (label) => (
    <nav aria-label={label}>
      <ul className="portfolio-nav-list">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeSection === item.id ? "is-active" : ""}
              aria-current={activeSection === item.id ? "location" : undefined}
              onClick={(event) => handleNavClick(event, `#${item.id}`)}
            >
              <span aria-hidden="true" />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <header className="portfolio-navbar">
      <div className="portfolio-navbar-shell">
        <a
          href="#home"
          className="portfolio-navbar-brand"
          onClick={(event) => handleNavClick(event, "#home")}
        >
          <span>Pablo Iván Chuquimia</span>
          <small>{content.hero.role}</small>
        </a>

        <div className="portfolio-navbar-desktop">
          {navigation(nav.mainLabel)}
        </div>

        <div className="portfolio-navbar-actions">
          <div className="portfolio-language-switch" role="group" aria-label={nav.language}>
            {(["es", "en"]).map((option) => (
              <button
                key={option}
                type="button"
                lang={option}
                className={language === option ? "is-active" : ""}
                aria-label={option === "es" ? nav.spanish : nav.english}
                aria-pressed={language === option}
                onClick={() => setLanguage(option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="portfolio-navbar-menu-button"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? nav.closeMenu : nav.openMenu}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <Icon icon={isOpen ? "lucide:x" : "lucide:menu"} aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="portfolio-navbar-mobile"
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            {navigation(nav.mobileLabel)}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
