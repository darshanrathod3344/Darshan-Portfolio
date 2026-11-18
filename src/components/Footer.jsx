import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="site-footer">
      <div className="portfolio-container footer-content">
        <div className="footer-text">
          © {CURRENT_YEAR} <strong>{personal.fullName}</strong>. All rights reserved.
        </div>

        <a href="#home" className="btn btn-secondary btn-sm" style={{ borderRadius: '20px' }}>
          <ArrowUp size={15} />
          Back to Top
        </a>
      </div>
    </footer>
  );
}
