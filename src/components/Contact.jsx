import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Briefcase,
  Send,
  Download,
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal, socials } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatusMessage(
      `Thank you, ${name}! Your message has been received. I will get back to you shortly.`
    );
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={15} />
            Get In Touch
          </div>
          <h2 className="section-title">
            Let&apos;s Discuss Your <span className="text-gradient">VR / Unity Project</span>
          </h2>
          <p className="section-subtitle">
            Looking for an experienced Unity 3D &amp; VR Developer for immersive apps, multiscreen setups, or product team roles?
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info Card */}
          <div className="studio-card contact-info-card">
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Contact Details</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Reach out directly via email or LinkedIn for Unity/VR development opportunities and project inquiries.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-text">
                    <label>Email Me</label>
                    <a href={socials.email}>{personal.email}</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-text">
                    <label>Location</label>
                    <span>{personal.location}</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Briefcase size={20} />
                  </div>
                  <div className="contact-text">
                    <label>Role Availability</label>
                    <span>{personal.roleAvailability}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  color: 'var(--text-subtle)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Connect Online
              </label>
              <div className="social-links">
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon width={18} height={18} />
                </a>

                <a
                  href={socials.email}
                  className="social-icon"
                  title="Email"
                  aria-label="Email"
                >
                  <Mail size={19} />
                </a>

                <a
                  href={personal.resumeUrl}
                  download
                  className="social-icon"
                  title="Download CV"
                  aria-label="Download Resume"
                >
                  <Download size={19} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="studio-card contact-form-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send a Message</h3>

            <form id="portfolio-contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="form-input"
                  placeholder="e.g. Alex Carter"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="form-input"
                  placeholder="e.g. alex@vrstudio.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message / Project Inquiry
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your VR/Unity project, multiscreen setup, or role opening..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={17} />
                Send Message
              </button>

              {statusMessage && (
                <div id="form-status-msg" className="form-status success" role="status">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
