import { motion, useReducedMotion } from "motion/react";
import { useLanguage } from "../i18n/useLanguage";

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const { content } = useLanguage();
  const { hero } = content;
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.65, delay, ease: "easeOut" },
  });

  return (
    <section id="home" className="professional-hero" aria-labelledby="hero-title">
      <div className="professional-hero-shell">
        <motion.header className="professional-hero-topline" {...reveal()}>
          <p>{hero.eyebrow}</p>
          <p>{hero.meta}</p>
        </motion.header>

        <div className="professional-hero-layout">
          <motion.div className="professional-hero-content" {...reveal(0.08)}>
            <h1 id="hero-title">
              <span className="professional-hero-name">
                {hero.name}
              </span>
              <span className="professional-hero-role">{hero.role}</span>
            </h1>

            <p className="professional-hero-focus">
              {hero.focus}
            </p>
            <p className="professional-hero-value">
              {hero.value}
            </p>

            <p className="professional-hero-availability">
              <span aria-hidden="true" />
              {hero.availability}
            </p>

            <div className="professional-hero-actions">
              <a href="#work" className="professional-hero-button professional-hero-button-primary">
                {hero.viewProjects} <span aria-hidden="true">→</span>
              </a>
              <a
                href={hero.cvPath}
                className="professional-hero-button professional-hero-button-secondary"
                download
              >
                {hero.downloadCV}
              </a>
              <a href="#contact" className="professional-hero-contact">
                {hero.contactMe} <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>

          <motion.div className="professional-hero-visual" {...reveal(0.16)}>
            <figure className="professional-portrait-frame">
              <img
                src="/assets/man.jpg"
                alt={hero.portraitAlt}
                width="640"
                height="853"
              />
              <figcaption className="professional-portrait-badge">
                <span>01</span>
                <strong>React / JavaScript</strong>
              </figcaption>
            </figure>

            <dl className="professional-hero-proof">
              <div>
                <dt>React + JavaScript</dt>
                <dd>{hero.primary}</dd>
              </div>
              <div>
                <dt>OpenAI API</dt>
                <dd>{hero.appliedIntegration}</dd>
              </div>
              <div>
                <dt>ES · EN</dt>
                <dd>{hero.bilingualProduct}</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
