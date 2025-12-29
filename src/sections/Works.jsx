import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useEffect, useState } from "react";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import Masonry from "react-masonry-css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectDetails from "../components/ProjectDetails";

const Works = () => {
  const overlayRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const projectMatch = useMatch("/projects/:projectId");
  const selectedProject = projectMatch?.params?.projectId
    ? projects.find(
        (project) =>
          String(project.id) === String(projectMatch.params.projectId)
      )
    : null;

  const text = `Proyectos destacados, cuidadosamente elaborados con pasion 
  para crear experiencias que inspiran e 
  impulsan resultados.`;

  useGSAP(() => {
    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setHoveredIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setHoveredIndex(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });
  };

  const openDetails = (project) => {
    navigate(`/projects/${project.id}`, { state: { background: location } });
  };
  const closeDetails = () => {
    if (location.state?.background) {
      navigate(-1);
      return;
    }
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && selectedProject) {
        closeDetails();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeDetails, selectedProject]);

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Projects"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="relative flex flex-col font-light">
        {projects.map((project, index) => {
          const previewImages = project.images?.length
            ? project.images
            : [project.image, project.bgImage].filter(Boolean);
          const uniquePreviewImages = Array.from(new Set(previewImages));
          const isHovered = hoveredIndex === index;
          const masonryBreakpoints = {
            default: 3,
            1280: 3,
            1024: 2,
            768: 1,
          };
          const masonryVariants = {
            hidden: { transition: { staggerChildren: 0.08, staggerDirection: -1 } },
            show: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
          };
          const tileVariants = {
            hidden: { opacity: 0, y: 10 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          };

          return (
            <div
              key={project.id}
              className="group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div
                id="project"
                className="relative flex flex-col gap-1 py-5 cursor-pointer md:gap-0"
              >
                {/* overlay */}
                <div
                  ref={(el) => (overlayRefs.current[index] = el)}
                  className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
                />

                {/* title + boton */}
                <div className="flex items-center justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
                  <h2
                    className="lg:text-[32px] text-[26px] leading-none"
                    onClick={() => openDetails(project)} // click titulo abre modal
                  >
                    {project.name}
                  </h2>

                  <button
                    className="hidden md:inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/0 px-3 py-1.5 text-sm text-black transition-all hover:bg-black/10 md:group-hover:border-white/40 md:group-hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      openDetails(project);
                    }}
                  >
                    Read more
                    <Icon icon="lucide:arrow-up-right" className="size-4" />
                  </button>
                </div>

                {/* divider */}
                <div className="w-full h-0.5 bg-black/80" />

                {/* frameworks */}
                <div className="flex px-10 text-xs leading-loose uppercase transtion-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
                  {project.frameworks.map((framework) => (
                    <p
                      key={framework.id}
                      className="text-black transition-colors duration-500 md:group-hover:text-white"
                    >
                      {framework.name}
                    </p>
                  ))}
                </div>

                {/* mobile preview (tap abre modal) */}
                <div
                  className="relative flex items-center justify-center px-10 md:hidden h-[400px]"
                  onClick={() => openDetails(project)}
                >
                  <img
                    src={project.bgImage}
                    alt={`${project.name}-bg-image`}
                    className="object-cover w-full h-full rounded-md brightness-50"
                  />
                  <img
                    src={project.image}
                    alt={`${project.name}-image`}
                    className="absolute bg-center px-14 rounded-xl"
                  />
                </div>
              </div>

              {/* desktop preview (sale fuera del marco y empuja abajo) */}
              <div className="hidden md:block px-10 transition-all duration-500 md:group-hover:px-12">
                <div className="overflow-hidden max-h-0 opacity-0 translate-y-2 transition-all duration-500 ease-out md:group-hover:max-h-[1200px] md:group-hover:opacity-100 md:group-hover:translate-y-0">
                  <div className="pt-4">
                    <motion.div
                      variants={masonryVariants}
                      initial="hidden"
                      animate={isHovered ? "show" : "hidden"}
                    >
                      <Masonry
                        breakpointCols={masonryBreakpoints}
                        className="flex w-auto -ml-4"
                        columnClassName="pl-4 bg-clip-padding"
                      >
                        {uniquePreviewImages.map((src, tileIndex) => (
                          <motion.div
                            key={`${project.id}-preview-${tileIndex}`}
                            variants={tileVariants}
                            className="mb-4 overflow-hidden rounded-md border border-black/10 bg-white"
                          >
                            <img
                              src={src}
                              alt={`${project.name}-preview-${tileIndex + 1}`}
                              className="h-auto w-full object-contain"
                              loading="lazy"
                            />
                          </motion.div>
                        ))}
                      </Masonry>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      <ProjectDetails
        project={selectedProject}
        open={!!selectedProject}
        onClose={closeDetails}
      />
    </section>
  );
};

export default Works;
