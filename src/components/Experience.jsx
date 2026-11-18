import React from 'react';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={15} />
            Work History
          </div>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Track record of building production Virtual Reality applications, interactive simulations, and multiscreen Unity systems.
          </p>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <article key={`${job.company}-${job.role}`} className="timeline-item">
              <div className="timeline-marker" />
              <div className="studio-card timeline-content">
                <h3 className="timeline-role">{job.role}</h3>
                <div className="timeline-company">{job.company}</div>
                <span className="timeline-date">{job.period}</span>

                <ul className="timeline-bullets">
                  {job.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
