import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Experience from "./Experience";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "./StyledRoutes/Carousel.css";

import { logos } from "../utils/logotypes";

const techLogos = [
  { src: logos.pythonLogo, alt: "Python logo", name: "Python", isSvg: true },
  {
    src: logos.javascriptLogo,
    alt: "JavaScript logo",
    name: "JavaScript",
    isSvg: true,
  },
  { src: logos.nodeLogo, alt: "Node.js logo", name: "Node.js", isSvg: true },
  { src: logos.mysqlLogo, alt: "MySQL logo", name: "MySQL", isSvg: true },
  { src: logos.reactLogo, alt: "ReactJS logo", name: "ReactJS", isSvg: true },
  {
    src: logos.tailwindLogo,
    alt: "Tailwind CSS logo",
    name: "Tailwind CSS",
    isSvg: true,
  },
  { src: logos.htmlLogo, alt: "HTML5 logo", name: "HTML5", isSvg: true },
  { src: logos.cssLogo, alt: "CSS3 logo", name: "CSS3", isSvg: true },
  { src: logos.phpLogo, alt: "PHP logo", name: "PHP", isSvg: true },
];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section>
      <Hero />

      <div data-aos="fade-up" className="px-6 mt-[9rem]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <p className=" card-title flex items-center justify-between w-full md:w-2/3 lg:w-1/2 h-10 px-4 py-2 bg-base-500 rounded-full border-2 border-double transition-all">
            <span  className="relative z-10">Tecnologias</span>
          </p>

          <div className="carousel-container">
            <div className="max-w-3xl carousel">
              {techLogos.map((logo, index) => (
                <span key={index} className="flex flex-col items-center justify-center">
                  {logo.isSvg ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: logo.src }}
                      className="language-logo"
                    />
                  ) : (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="language-logo"
                    />
                  )}
                  <p className="text-sm py-2 text-white">{logo.name}</p>
                </span>
              ))}

              {techLogos.map((logo, index) => (
                <span key={`repeat-${index}`} className="flex flex-col items-center justify-center">
                  {logo.isSvg ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: logo.src }}
                      className="language-logo"
                    />
                  ) : (
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="language-logo"
                    />
                  )}
                  <p className="text-sm  py-2 text-white">{logo.name}</p>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <Cards />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </section>
  );
};

export default Home;
