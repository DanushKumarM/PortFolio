import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpCircle, Code2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ paddingTop: '5rem', paddingBottom: '3rem', position: 'relative', overflow: 'hidden', backgroundColor: '#080f0f', borderTop: '1px solid #1a3030' }}>
      {/* Bg glow */}
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: 500, background: 'radial-gradient(ellipse at bottom, rgba(45,158,143,0.06) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />
      
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2.5rem', position: 'relative', zIndex: 1 }}>
        <div className="footer-grid" style={{ display: 'grid', gap: '4rem', marginBottom: '4rem' }}>
          
          {/* Logo & About */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: 36, height: 36, borderRadius: '10px',
                backgroundColor: 'rgba(45,158,143,0.1)', border: '1px solid rgba(45,158,143,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#2d9e8f', fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: '1.2rem'
              }}>
                d.
              </div>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#e8f0ef' }}>
                DANUSH<span style={{ color: '#2d9e8f' }}>.</span>
              </span>
            </div>
            <p style={{ color: '#6a8a88', maxWidth: 320, lineHeight: 1.6, fontSize: '0.9rem', fontStyle: 'italic', margin: 0 }}>
              "Building the backbones of tomorrow's digital experiences with Java, Go, and the Cloud."
            </p>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#2d9e8f', margin: 0 }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {['About', 'Projects', 'Skills', 'Contact'].map(item => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    style={{
                      fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 500, color: '#6a8a88', textDecoration: 'none', transition: 'color 0.2s'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#e8f0ef')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6a8a88')}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#2d9e8f', margin: 0 }}>
              Connect
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              {[
                { icon: <Github size={16} />, href: "https://github.com/DanushKumarM" },
                { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/danushkumarm" },
                { icon: <Code2 size={16} />, href: "https://leetcode.com/u/Danush-Kumar-m-13/" },
                { icon: <Mail size={16} />, href: "mailto:danushkumar580@gmail.com" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '0.6rem',
                    borderRadius: '10px',
                    backgroundColor: '#0c1515',
                    border: '1px solid #1a3030',
                    color: '#6a8a88',
                    transition: 'border-color 0.2s, color 0.2s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(45,158,143,0.4)';
                    e.currentTarget.style.color = '#2d9e8f';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#1a3030';
                    e.currentTarget.style.color = '#6a8a88';
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <a 
              href="/DanushKumarM_Resume.pdf"
              download
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                padding: '0.6rem 1.2rem',
                backgroundColor: 'rgba(45,158,143,0.1)',
                border: '1px solid rgba(45,158,143,0.25)',
                color: '#2d9e8f',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                borderRadius: '999px',
                textDecoration: 'none',
                marginTop: '0.5rem',
                width: 'fit-content',
                transition: 'background-color 0.2s, color 0.2s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#2d9e8f';
                e.currentTarget.style.color = '#080f0f';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(45,158,143,0.1)';
                e.currentTarget.style.color = '#2d9e8f';
              }}
            >
              Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid #1a3030',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem'
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: '#3a5250', margin: 0, fontStyle: 'italic'
          }}>
            &copy; {new Date().getFullYear()} Danush Kumar M.
          </p>
          
          <motion.button
            whileHover={{ y: -3 }}
            onClick={scrollToTop}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              color: '#6a8a88', transition: 'color 0.2s'
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#2d9e8f')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6a8a88')}
          >
            Back to Top
            <ArrowUpCircle size={20} color="#2d9e8f" />
          </motion.button>
        </div>
      </div>
      <style>{`
        .footer-grid { grid-template-columns: minmax(200px, 2fr) 1fr 1fr; }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; gap: 3rem !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
