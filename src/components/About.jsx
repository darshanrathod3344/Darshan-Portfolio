import React from 'react';
import { User, Glasses, MonitorSmartphone, Boxes, Network } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const PILLAR_ICONS = {
  Glasses,
  MonitorSmartphone,
  Boxes,
  Network,
};

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <div className="section-tag">
            <User size={15} />
            {about.tag}
          </div>
          <h2 className="section-title">
            {about.titlePrefix}{' '}
            <span className="text-gradient">{about.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{about.subtitle}</p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            {about.paragraphs.map((item, idx) => (
              <p key={idx}>
                {item.text}
                <strong>{item.strong1}</strong>
                {item.mid}
                <strong>{item.strong2}</strong>
                {item.rest}
                <strong>{item.strong3}</strong>
                {item.end}
              </p>
            ))}
          </div>

          <div className="service-pillars">
            {about.pillars.map((pillar) => {
              const Icon = PILLAR_ICONS[pillar.icon] || Boxes;
              return (
                <div key={pillar.title} className="pillar-card">
                  <div className="pillar-icon">
                    <Icon size={21} />
                  </div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
