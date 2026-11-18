import React from 'react';
import { Layers, Code2, Glasses, Network } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const CATEGORY_ICONS = {
  Code2,
  Glasses,
  Network,
};

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={15} />
            Expertise
          </div>
          <h2 className="section-title">
            Technical <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="section-subtitle">
            Core Unity engine expertise, VR interaction frameworks, multiscreen sync, and SDK integrations.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => {
            const Icon = CATEGORY_ICONS[category.icon] || Code2;
            return (
              <article key={category.title} className="studio-card skill-category">
                <h3 className="category-title">
                  <Icon size={22} className="category-title-icon" />
                  {category.title}
                </h3>

                <div className="skill-list">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-item-header">
                        <span>{skill.name}</span>
                        <span className="text-accent">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="skill-badges">
                  {category.badges.map((badge) => (
                    <span key={badge} className="tech-badge">
                      {badge}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
