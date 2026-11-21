import React from 'react';
import { Glasses, FolderKanban, Send, Download, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, heroStats } = portfolioData;

  return (
    <section id="home" className="hero">
      <div className="portfolio-container hero-grid">
        <div className="hero-content">
          <div className="section-tag">
            <Glasses size={15} />
            {personal.roleTag}
          </div>

          <h1 className="hero-title">
            {personal.heroTitlePrefix}{' '}
            <span className="text-gradient">{personal.heroTitleHighlight}</span>
          </h1>

          <p className="hero-subtitle">{personal.heroSubtitle}</p>

          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">
              <FolderKanban size={18} />
              View VR &amp; Unity Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Send size={17} />
              Get In Touch
            </a>
            <a href={personal.resumeUrl} download className="btn btn-secondary">
              <Download size={17} />
              Resume
            </a>
          </div>

          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-banner-wrapper">
            <div className="hero-profile-media">
              <img
                src={personal.featuredProject.image}
                alt={`${personal.featuredProject.title} — Flagship Project`}
                className="hero-img"
              />
              <div className="hero-media-fade" />
              <div className="hero-featured-tag">
                <Sparkles size={13} />
                {personal.featuredProject.category}
              </div>
            </div>

            <div className="hero-profile-caption">
              <div className="hero-profile-name">{personal.featuredProject.title}</div>
              <div className="hero-profile-role">
                {personal.roleTag} · {personal.company}
              </div>
              <div className="hero-chip-row">
                {personal.heroChips.map((chip) => (
                  <span key={chip} className="hero-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
