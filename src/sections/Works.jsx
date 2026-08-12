import { useCallback, useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import ProjectDetails from "../components/ProjectDetails";
import { projects } from "../constants";
import { useLanguage } from "../i18n/useLanguage";

const visibleStackLimit = 5;
const slideDuration = 5200;

const ProjectSlideshow = ({ images, projectName, priority = false, labels }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const reduceMotion = useReducedMotion();
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages || isPaused || isInteracting || reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, slideDuration);

    return () => window.clearInterval(interval);
  }, [hasMultipleImages, images.length, isInteracting, isPaused, reduceMotion]);

  useEffect(() => {
    if (!hasMultipleImages) return;
    const nextImage = new Image();
    nextImage.src = images[(activeImage + 1) % images.length];
  }, [activeImage, hasMultipleImages, images]);

  const changeImage = (nextIndex) => {
    setActiveImage((nextIndex + images.length) % images.length);
  };

  return (
    <div
      className="portfolio-project-gallery"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocus={() => setIsInteracting(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsInteracting(false);
        }
      }}
    >
      <div className="portfolio-project-viewport" aria-live="off">
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={images[activeImage]}
            src={images[activeImage]}
            alt={`${labels.screenshot} ${activeImage + 1} ${labels.of} ${projectName}`}
            loading={priority && activeImage === 0 ? "eager" : "lazy"}
            decoding="async"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: "easeOut" }}
          />
        </AnimatePresence>
      </div>

      {hasMultipleImages && (
        <div className="portfolio-project-slider-controls">
          <p aria-hidden="true">
            {String(activeImage + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>

          <div className="portfolio-project-slider-dots" aria-label={`${labels.screenshots} ${projectName}`}>
            {images.map((image, imageIndex) => (
              <button
                key={image}
                type="button"
                className={imageIndex === activeImage ? "is-active" : ""}
                onClick={() => changeImage(imageIndex)}
                aria-label={`${labels.show} ${imageIndex + 1} ${labels.of} ${projectName}`}
                aria-current={imageIndex === activeImage ? "true" : undefined}
              />
            ))}
          </div>

          <div className="portfolio-project-slider-buttons">
            <button
              type="button"
              onClick={() => changeImage(activeImage - 1)}
              aria-label={`${labels.previous} ${projectName}`}
            >
              <Icon icon="lucide:arrow-left" aria-hidden="true" />
            </button>
            {!reduceMotion && (
              <button
                type="button"
                onClick={() => setIsPaused((current) => !current)}
                aria-label={`${isPaused ? labels.resume : labels.pause} ${projectName}`}
                aria-pressed={isPaused}
              >
                <Icon icon={isPaused ? "lucide:play" : "lucide:pause"} aria-hidden="true" />
              </button>
            )}
            <button
              type="button"
              onClick={() => changeImage(activeImage + 1)}
              aria-label={`${labels.next} ${projectName}`}
            >
              <Icon icon="lucide:arrow-right" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Works = () => {
  const { content } = useLanguage();
  const projectsContent = content.projects;
  const navigate = useNavigate();
  const location = useLocation();
  const projectMatch = useMatch("/projects/:projectId");
  const localizedProjects = projects.map((project) => ({
    ...project,
    ...projectsContent.items[project.id],
  }));
  const selectedProject = projectMatch?.params?.projectId
    ? localizedProjects.find(
        (project) => String(project.id) === String(projectMatch.params.projectId),
      )
    : null;

  const openDetails = (project) => {
    navigate(`/projects/${project.id}`, { state: { background: location } });
  };

  const closeDetails = useCallback(() => {
    if (location.state?.background) {
      navigate(-1);
      return;
    }
    navigate("/", { replace: true });
  }, [location.state, navigate]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape" && selectedProject) closeDetails();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeDetails, selectedProject]);

  return (
    <section id="work" className="portfolio-projects" aria-labelledby="projects-title">
      <AnimatedHeaderSection
        subTitle={projectsContent.subtitle}
        title={projectsContent.title}
        titleId="projects-title"
        titleClassName="editorial-section-title"
        text={projectsContent.intro}
        textColor="text-black"
        withScrollTrigger
      />

      <div className="portfolio-projects-shell">
        <div className="portfolio-projects-grid">
          {localizedProjects.map((project, index) => {
            const images = Array.from(
              new Set(
                (project.images?.length
                  ? project.images
                  : [project.image, project.bgImage]
                ).filter(Boolean),
              ),
            );
            const hiddenStackCount = Math.max(
              0,
              project.frameworks.length - visibleStackLimit,
            );

            return (
              <motion.article
                className={`portfolio-project-card${index === 0 ? " portfolio-project-card--featured" : ""}`}
                key={project.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.14 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <ProjectSlideshow
                  images={images}
                  projectName={project.name}
                  priority={index === 0}
                  labels={projectsContent.carousel}
                />

                <div className="portfolio-project-content">
                  <p className="portfolio-project-status">
                    {index === 0 ? projectsContent.featured : projectsContent.live}
                  </p>
                  <h3>{project.name}</h3>
                  <p className="portfolio-project-description">{project.description}</p>

                  <ul className="portfolio-project-stack" aria-label={`${projectsContent.technologies} ${project.name}`}>
                    {project.frameworks.slice(0, visibleStackLimit).map((framework) => (
                      <li key={framework.id}>{framework.name}</li>
                    ))}
                    {hiddenStackCount > 0 && (
                      <li aria-label={`${hiddenStackCount} ${projectsContent.additionalTechnologies}`}>
                        +{hiddenStackCount}
                      </li>
                    )}
                  </ul>

                  <div className="portfolio-project-actions">
                    <button type="button" onClick={() => openDetails(project)}>
                      {projectsContent.details}
                      <Icon icon="lucide:arrow-up-right" aria-hidden="true" />
                    </button>
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      {projectsContent.demo}
                      <Icon icon="lucide:external-link" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <ProjectDetails
        project={selectedProject}
        open={!!selectedProject}
        onClose={closeDetails}
      />
    </section>
  );
};

export default Works;
