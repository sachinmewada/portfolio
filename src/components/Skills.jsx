import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <section id="skills" className="container">
      <h2 className="gradient-text" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px' }}>
        Skills & Technologies
      </h2>
      <div className="skills_container">
        {skills.map((data) => (
          <div
            key={data.id}
            className="skill_item glass-card"
            style={{ "--glow-color": data.color }}
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="skill_icon_container">
              <img src={data.imageSrc} alt={data.title} />
            </div>
            <h3 style={{ fontSize: '1.1rem' }}>{data.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;