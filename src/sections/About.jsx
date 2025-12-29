import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Soy Desarrollador Jr. Full-Stack. 
Transformo ideas en experiencias digitales claras, funcionales y con propósito.`;

  const aboutText = `Soy un desarrollador Jr. Full-Stack apasionado por crear experiencias digitales que realmente conecten con las personas. 
Me motiva construir soluciones útiles, intuitivas y bien pensadas, donde cada detalle tenga un propósito.

Disfruto aprender, explorar nuevas ideas y mejorar en cada proyecto. 
Creo que el código no solo resuelve problemas, sino que también puede inspirar, comunicar y generar impacto.

Fuera del trabajo, encuentro inspiración en la música 🎹, el diseño 🎨 y todo lo que me rete a ser más creativo y constante 🚀.`;

  const imgRef = useRef(null);

  useGSAP(() => {
    // Escala SOLO el contenido interno (no el fondo full-bleed)
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    // FULL-BLEED: truco de “salirse del container”
    <section
      id="about"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-black overflow-x-hidden rounded-b-4xl"
    >
      {/* Contenido centrado con ancho máximo: aquí va el scale */}
      <div className="mx-auto max-w-7xl min-h-screen px-6 md:px-10">
        <AnimatedHeaderSection
          subTitle={"Cod with purpose, Built to scale"}
          title={"About"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />

        <div className="flex flex-col items-center justify-between gap-16 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
          <img
            ref={imgRef}
            src="/assets/man.jpg" // usa ruta absoluta desde /public
            alt="man"
            className="w-md rounded-3xl"
          />
          <AnimatedTextLines text={aboutText} className={"w-full"} />
        </div>
      </div>
    </section>
  );
};

export default About;
