import React, { useEffect, useRef } from "react";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Sachin Mewada",
        "I'm a Full Stack Developer",
        "I Build Modern Web Apps",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home container">
      <div className="left" data-aos="fade-right" data-aos-duration="1000">
        <h1 ref={typedRef}></h1>
        <p>
          Passionate developer dedicated to building high-performance,
          scalable web applications with elegant user interfaces.
        </p>
        <div className="home-buttons">
          <a href="/resume.pdf" download="Sachin_Mewada_Resume.pdf" className="btn btn-primary">
            Download CV
          </a>
          <a href="#contact" className="btn btn-outline">
            Let's Talk
          </a>
        </div>
      </div>
      <div className="right" data-aos="fade-left" data-aos-duration="1000">
        <div className="img-container">
          <img src={hero.imgSrc} alt="Sachin Mewada" />
        </div>
      </div>
    </section>
  );
};

export default Home;
