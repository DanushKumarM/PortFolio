import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          padding: scrolled ? '0.75rem 0' : '1.25rem 0',
          backgroundColor: scrolled ? 'rgba(8,15,15,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(26,48,48,0.8)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}
          >
            <div style={{
              width: 32, height: 32, borderRadius: '8px',
              backgroundColor: 'rgba(45,158,143,0.1)', border: '1px solid rgba(45,158,143,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#2d9e8f', fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: '1.2rem',
              flexShrink: 0
            }}>
              d.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1rem', fontWeight: 900, color: '#e8f0ef', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                DANUSH<span style={{ color: '#2d9e8f' }}>.</span>
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.45rem', fontWeight: 700, color: '#6a8a88', letterSpacing: '0.15em', marginTop: '3px', textTransform: 'uppercase' }}>
                Backend Engineer
              </span>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                style={{
                  position: 'relative',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'rgba(232, 240, 239, 0.7)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#e8f0ef';
                  e.currentTarget.querySelector('span').style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(232, 240, 239, 0.7)';
                  e.currentTarget.querySelector('span').style.width = '0';
                }}
              >
                {link.name}
                <span style={{
                  position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%)',
                  height: 1.5, width: 0, backgroundColor: '#2d9e8f', borderRadius: 2, transition: 'width 0.3s ease'
                }} />
              </motion.a>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex alignItems-center gap-4">
            <motion.a
              href="mailto:danushkumar580@gmail.com"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-block',
                padding: '0.45rem 1.4rem',
                border: '1px solid rgba(45,158,143,0.4)',
                borderRadius: '999px',
                color: '#2d9e8f',
                fontSize: '0.8rem',
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.03em',
                textDecoration: 'none',
                background: 'rgba(45,158,143,0.05)',
                transition: 'background 0.25s, border-color 0.25s, color 0.25s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2d9e8f';
                e.currentTarget.style.color = '#080f0f';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(45,158,143,0.05)';
                e.currentTarget.style.color = '#2d9e8f';
              }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center p-2 text-white bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} color="#e8f0ef" /> : <Menu size={24} color="#e8f0ef" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                top: 'calc(100% + 0.5rem)',
                left: '1rem',
                right: '1rem',
                backgroundColor: 'rgba(12,21,21,0.95)',
                border: '1px solid #1a3030',
                borderRadius: '16px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                zIndex: 200,
              }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#e8f0ef',
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#2d9e8f')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#e8f0ef')}
                >
                  {link.name}
                </motion.a>
              ))}
              <div style={{ height: 1, backgroundColor: '#1a3030', margin: '0.5rem 0' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <a href="https://github.com/DanushKumarM" style={{ color: '#6a8a88' }}><Github size={20} /></a>
                <a href="https://linkedin.com/in/danushkumarm" style={{ color: '#6a8a88' }}><Linkedin size={20} /></a>
                <a href="mailto:danushkumar580@gmail.com" style={{ color: '#6a8a88' }}><Mail size={20} /></a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Global CSS injected for hiding elements on small/large screens since CSS file is removed */}
      <style>{`
        @media (max-width: 768px) {
          .md\\:hidden { display: flex !important; }
          .md\\:flex { display: none !important; }
        }
        @media (min-width: 769px) {
          .md\\:hidden { display: none !important; }
          .md\\:flex { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
