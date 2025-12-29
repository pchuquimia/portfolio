import { motion, AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react";

const ProjectDetails = ({ project, open, onClose }) => {
  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-[min(96vw,1400px)] max-h-[92vh] overflow-y-auto rounded-2xl border border-white/10 bg-gradient-to-br from-midnight to-navy shadow-2xl"
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 20, opacity: 0 }}
            transition={{ type: "spring", duration: 0.45 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 grid place-items-center rounded-md bg-midnight/70 p-2 hover:bg-white/10"
              aria-label="Close"
            >
              <Icon icon="lucide:x" className="size-5 text-white/80" />
            </button>

            {/* Vista principal */}
            {project.href && project.href.trim() !== "" ? (
              <iframe
                src={project.href}
                title={`${project.name} website`}
                className="
   w-full
  max-w-[1440px]
  h-[94vh]
  min-h-[720px]
  max-h-[1024px]
  mx-auto
  rounded-2xl
  border border-white/10
  bg-white
  overflow-hidden
"
                loading="lazy"
              />
            ) : (
              <img
                src={project.image}
                alt={project.name}
                className="mx-auto block w-auto max-w-full rounded-t-2xl object-contain"
              />
            )}

            {/* Contenido */}
            <div className="px-6 py-5 text-white">
              <h3 className="text-2xl font-bold">{project.name}</h3>

              {project.description && (
                <p className="mt-2 text-neutral-300">{project.description}</p>
              )}

              {/* Chips con frameworks */}
              {project.frameworks?.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.frameworks.map((fw) => (
                    <span
                      key={fw.id}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80"
                    >
                      {fw.name}
                    </span>
                  ))}
                </div>
              )}

              {/* Acciones */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-white/50">
                  Click afuera para cerrar
                </span>
                {project.href && project.href.trim() !== "" && (
                  <a
                    href={project.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
                  >
                    View Project
                    <Icon icon="lucide:arrow-up-right" className="size-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
