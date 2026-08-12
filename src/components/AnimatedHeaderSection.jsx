import React from "react";
import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);
const AnimatedHeaderSection = ({
  subTitle,
  title,
  titleId,
  titleClassName = "",
  text,
  textColor,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const shouldSplitTitle = title.includes(" ");
  const titleParts = shouldSplitTitle ? title.split(" ") : [title];
  useGSAP(() => {
    if (reduceMotion) return;

    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
            start: "top 85%",
            once: true,
          }
        : undefined,
    });
    tl.from(contextRef.current, {
      y: 72,
      duration: 0.7,
      ease: "power3.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: 48,
        duration: 0.65,
        ease: "power3.out",
      },
      "<+0.2"
    );
  }, { dependencies: [reduceMotion, withScrollTrigger], revertOnUpdate: true });
  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
        >
          <p
            className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
          >
            {subTitle}
          </p>
          <div className="px-10">
            <h2
              id={titleId}
              className={`relative mb-6 flex flex-col gap-12 uppercase banner-text-responsive sm:gap-16 md:block ${textColor} ${titleClassName}`}
            >
              {titleParts.map((part, index) => (
                <span key={index}>{part} </span>
              ))}
            </h2>
          </div>
        </div>
      </div>
      <div className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2" />
        <div className="py-12 sm:py-16 text-end">
          <AnimatedTextLines
            text={text}
            className={`font-light uppercase value-text-responsive ${textColor}`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
