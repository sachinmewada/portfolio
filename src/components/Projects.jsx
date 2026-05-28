import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import projects from "./data/projects.json";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", ...new Set(projects.map(p => p.category || "Other"))];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="container">
      <h2 className="gradient-text" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '30px' }}>
        Featured Projects
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects_grid">
        {filteredProjects.map((data) => (
          <div
            key={data.id}
            onClick={() => setSelectedProject(data)}
            className="project_card glass-card"
            style={{ cursor: "pointer" }}
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <img src={data.imageSrc} alt={data.title} className="project_img" />
            <div className="project_info">
              <h3 style={{ marginBottom: '10px' }}>{data.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                {data.description}
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href={data.demo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="btn btn-primary"
                  style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}
                >
                  Live Demo
                </a>
                <a
                  href={data.source}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="btn btn-outline"
                  style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={() => setSelectedProject(null)}>
              <FaTimes />
            </button>
            <img src={selectedProject.imageSrc} alt={selectedProject.title} className="project-modal-img" />
            <div className="project-modal-body">
              <span className="project-modal-category">{selectedProject.category}</span>
              <h3 className="project-modal-title">{selectedProject.title}</h3>
              <p className="project-modal-desc">{selectedProject.description}</p>

              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="project-modal-section">
                  <h4>Key Features</h4>
                  <ul className="project-modal-features-list">
                    {selectedProject.features.map((feat, index) => (
                      <li key={index}>{feat}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                <div className="project-modal-section">
                  <h4>Technologies Used</h4>
                  <div className="project-modal-tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="project-modal-buttons">
                <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Live Demo
                </a>
                <a href={selectedProject.source} target="_blank" rel="noreferrer" className="btn btn-outline">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;