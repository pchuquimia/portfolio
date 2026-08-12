import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion, useReducedMotion } from "motion/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useLanguage } from "../i18n/useLanguage";

const Services = () => {
  const reduceMotion = useReducedMotion();
  const [openSkill, setOpenSkill] = useState(0);
  const { content } = useLanguage();
  const { skills } = content;

  return (
    <section id="services" className="skills-section" aria-labelledby="skills-title">
      <AnimatedHeaderSection
        subTitle={skills.subtitle}
        title={skills.title}
        titleId="skills-title"
        titleClassName="editorial-section-title"
        text={skills.intro}
        textColor="text-white"
        withScrollTrigger
      />

      <div className="skills-list">
        {skills.groups.map((service, index) => (
          <motion.article
            key={service.title}
            className={`skills-card${openSkill === index ? " is-open" : ""}`}
            initial={reduceMotion ? false : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
          >
            <button
              type="button"
              className="skills-card-heading"
              onClick={() => setOpenSkill((current) => (current === index ? -1 : index))}
              aria-expanded={openSkill === index}
              aria-controls={`skill-panel-${index}`}
            >
              <p className="skills-card-index">
                {String(index + 1).padStart(2, "0")} / {String(skills.groups.length).padStart(2, "0")}
              </p>
              <div>
                <p className="skills-card-label">{service.label}</p>
                <h3>{service.title}</h3>
              </div>
              <span className="skills-card-toggle" aria-hidden="true">
                <Icon icon="lucide:plus" />
              </span>
            </button>

            <div
              id={`skill-panel-${index}`}
              className="skills-card-panel"
              aria-hidden={openSkill !== index}
            >
              <div className="skills-card-panel-inner">
                <p className="skills-card-summary">{service.description}</p>

                <ul className="skills-technologies" aria-label={`${skills.technologies} ${service.title}`}>
                  {service.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                <div className="skills-capabilities">
                  {service.items.map((item, itemIndex) => (
                    <section key={item.title} className="skills-capability">
                      <p aria-hidden="true">0{itemIndex + 1}</p>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Services;
