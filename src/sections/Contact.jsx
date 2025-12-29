import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `Construyamos algo que marque la diferencia.  
Tu idea, mi código.`;
  const items = [
    "just imagin, just code",
    "just imagin, just code",
    "just imagin, just code",
    "just imagin, just code",
    "just imagin, just code",
  ];
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen "
    >
      <div className="mx-auto max-w-7xl min-h-screen px-6 md:px-10">
        <AnimatedHeaderSection
          subTitle={"You Dream It, I Code it"}
          title={"Contact"}
          text={text}
          textColor={"text-black"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-black uppercase lg:text-[32px] text-[26px] leading-none mb-10 ">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>Correo</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                i.pouk.19@gmail.com
              </p>
            </div>
            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                +591 79573025
              </p>
            </div>
            <div className="social-link">
              <h2>Redes Sociales</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-black bg-transparent" />
    </section>
  );
};

export default Contact;
