import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <section id="experience" className="container">
      <h2 className="gradient-text" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px' }}>
        Experience
      </h2>
      <div className={`timeline ${experience.length === 1 ? 'single-item' : ''}`}>
        {experience.map((data) => (
          <div key={data.id} className="timeline-item" data-aos="zoom-in" data-aos-duration="1000">
            <div className="timeline-content glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '10px' }}>
                <img src={data.imageSrc} alt="" style={{ width: '50px' }} />
                <span style={{ color: 'var(--secondary)', fontWeight: '600' }}>
                  {data.startDate} - {data.endDate}
                </span>
              </div>
              <h3 style={{ marginBottom: '5px' }}>{data.role}</h3>
              <h4 style={{ color: 'var(--text-muted)', marginBottom: '15px' }}>{data.organisation}</h4>
              <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)' }}>
                {data.experiences.map((exp, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>{exp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
