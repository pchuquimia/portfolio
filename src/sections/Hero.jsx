import React from "react";
import HeroText from "../components/HeroText.jsx";
import ParallaxBackground from "../components/ParallaxBackground.jsx";
import { Astronaut } from "../components/Astronaut.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section
      id="home"
      className="flex items-start  md:items-start md: justify-start min-h-screen overflow-hidden c-space "
    >
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute  inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Astronaut
            scale={isMobile && 0.23}
            position={isMobile && [0, -1.5, 0]}
          />
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
