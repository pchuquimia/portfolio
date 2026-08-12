import { Icon } from "@iconify/react";
import { motion, useReducedMotion } from "motion/react";
import { socials } from "../constants";
import { useLanguage } from "../i18n/useLanguage";

const resourceKeys = ["linkedin", "github", "apex", "cvEs", "cvEn"];

const resourceIcons = {
  linkedin: "lucide:linkedin",
  github: "lucide:github",
  apex: "lucide:dumbbell",
  cvEs: "lucide:file-down",
  cvEn: "lucide:file-down",
};

const Contact = () => {
  const reduceMotion = useReducedMotion();
  const { content } = useLanguage();
  const { contact } = content;
  const resources = socials.filter((social) => resourceKeys.includes(social.key));

  const reveal = (index) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: reduceMotion ? 0 : 0.45, delay: index * 0.05 },
  });

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <motion.header className="contact-header" {...reveal(0)}>
        <p>{contact.subtitle}</p>
        <div>
          <h2 id="contact-title">{contact.title}</h2>
          <p>{contact.intro}</p>
        </div>
      </motion.header>

      <div className="contact-shell">
        <motion.div className="contact-primary" {...reveal(0)}>
          <p className="contact-kicker">{contact.kicker}</p>
          <h3>{contact.headline}</h3>

          <div className="contact-direct-actions">
            <a
              className="contact-direct-link contact-direct-link--primary"
              href="mailto:pablo.ivan.chuquimia@gmail.com"
              aria-label={`${contact.emailAction}: pablo.ivan.chuquimia@gmail.com`}
            >
              <span>
                <small>{contact.email}</small>
                pablo.ivan.chuquimia@gmail.com
              </span>
              <Icon icon="lucide:arrow-up-right" aria-hidden="true" />
            </a>
            <a
              className="contact-direct-link"
              href="tel:+59179573025"
              aria-label={`${contact.phoneAction}: +591 79573025`}
            >
              <span>
                <small>{contact.phone}</small>
                +591 79573025
              </span>
              <Icon icon="lucide:message-circle" aria-hidden="true" />
            </a>
          </div>

          <p className="contact-summary">{contact.summary}</p>

          <dl className="contact-context">
            <div>
              <dt>{contact.locationLabel}</dt>
              <dd>La Paz, Bolivia</dd>
            </div>
            <div>
              <dt>{contact.availabilityLabel}</dt>
              <dd>{contact.availability}</dd>
            </div>
          </dl>
        </motion.div>

        <div className="contact-resources" aria-labelledby="contact-resources-title">
          <div className="contact-resources-heading">
            <p>{contact.resourcesEyebrow}</p>
            <h3 id="contact-resources-title">{contact.resourcesTitle}</h3>
          </div>

          <ul className="contact-resource-list">
            {resources.map((resource, index) => {
              const isExternal = resource.href.startsWith("http");
              const isDownload = resource.key === "cvEs" || resource.key === "cvEn";
              const resourceContent = contact.resources[resource.key];

              return (
                <motion.li key={resource.key} {...reveal(index + 1)}>
                  <a
                    href={resource.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    download={isDownload || undefined}
                    aria-label={`${resourceContent.name}. ${resourceContent.description}. ${isDownload ? contact.download : contact.open}`}
                  >
                    <span className="contact-resource-icon" aria-hidden="true">
                      <Icon icon={resourceIcons[resource.key]} />
                    </span>
                    <span className="contact-resource-copy">
                      <strong>{resourceContent.name}</strong>
                      <small>{resourceContent.description}</small>
                    </span>
                    <span className="contact-resource-action" aria-hidden="true">
                      {isDownload ? contact.download : contact.open}
                      <Icon icon={isDownload ? "lucide:download" : "lucide:arrow-up-right"} />
                    </span>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>

      <footer className="contact-footer">
        <p>© {new Date().getFullYear()} Pablo Iván Chuquimia Huanca</p>
        <a href="#home">
          {contact.backToTop}
          <Icon icon="lucide:arrow-up" aria-hidden="true" />
        </a>
      </footer>
    </section>
  );
};

export default Contact;
