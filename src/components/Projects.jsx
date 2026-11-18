import React, { useState, useEffect } from 'react';
import { Sparkles, Info, Send, X, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects, projectFilters } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.filter === activeFilter);

  useEffect(() => {
    if (!selectedProject) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={15} />
            Featured Work
          </div>
          <h2 className="section-title">
            VR &amp; Interactive <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Production Virtual Reality games, industrial training simulations, multiscreen installations, and 360° virtual tours.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filters" role="tablist" aria-label="Project Categories">
          {projectFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              className={`filter-btn${activeFilter === filter.id ? ' active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="studio-card project-card">
              <div className="project-img-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className="project-img"
                  loading="lazy"
                />
                <span className="project-stat-pill">{project.stat}</span>
              </div>

              <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.shortDesc}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    style={{ flex: 1 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <Info size={16} />
                    View Details
                  </button>
                  <a href="#contact" className="btn btn-secondary btn-sm">
                    <Send size={15} />
                    Inquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          id="project-modal"
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="modal-content">
            <button
              type="button"
              className="modal-close"
              aria-label="Close modal"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} />
            </button>

            <div className="section-tag" style={{ marginBottom: '0.65rem' }}>
              <CheckCircle2 size={14} />
              {selectedProject.category}
            </div>

            <h2
              id="modal-title"
              style={{ fontSize: '1.9rem', marginBottom: '1rem', paddingRight: '2.5rem' }}
            >
              {selectedProject.title}
            </h2>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              style={{
                width: '100%',
                borderRadius: '12px',
                marginBottom: '1.25rem',
                height: '265px',
                objectFit: 'cover',
              }}
            />

            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: '1.4rem' }}>
              {selectedProject.fullDesc}
            </p>

            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '1.05rem' }}>
              Key Technical Highlights
            </h4>
            <ul className="timeline-bullets" style={{ marginBottom: '1.5rem' }}>
              {selectedProject.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="project-tags" style={{ marginBottom: '1.5rem' }}>
              {selectedProject.tags.map((tag) => (
                <span key={tag} className="tech-badge">
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                className="btn btn-primary btn-sm"
                onClick={() => setSelectedProject(null)}
              >
                <Send size={15} />
                Discuss a Similar Project
              </a>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setSelectedProject(null)}
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
