import React from 'react';
import { GraduationCap, Award, Languages } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education, personal } = portfolioData;

  return (
    <section id="education" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={16} />
            Qualifications
          </div>
          <h2 className="section-title">
            Education &amp; <span className="text-gradient">Degrees</span>
          </h2>
          <p className="section-subtitle">
            Academic foundation in Computer Engineering and core problem-solving principles.
          </p>
        </div>

        <div className="education-grid">
          {education.map((edu) => (
            <article key={edu.degree} className="studio-card edu-card">
              <div>
                <div className="section-tag" style={{ marginBottom: '0.65rem' }}>
                  <Award size={14} />
                  {edu.tag}
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-college">{edu.institution}</div>
                <span className="edu-year">{edu.status}</span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  {edu.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="studio-card languages-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="pillar-icon" style={{ marginBottom: 0, width: '40px', height: '40px' }}>
              <Languages size={19} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.02rem' }}>Languages Spoken</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.86rem' }}>
                Fluent technical and team communication
              </div>
            </div>
          </div>

          <div className="skill-badges" style={{ marginTop: 0 }}>
            {personal.languages.map((lang) => (
              <span key={lang} className="tech-badge" style={{ color: 'var(--text-primary)' }}>
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
