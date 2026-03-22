import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, ArrowDown } from 'lucide-react';
import heroBg from '../assets/hero-photo.png';

const HeroSection = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* ── Full-viewport background image ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      {/* ── Left dark gradient overlay for text readability ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(8,15,15,0.97) 0%, rgba(8,15,15,0.92) 30%, rgba(8,15,15,0.70) 50%, rgba(8,15,15,0.15) 70%, transparent 100%)',
          zIndex: 1,
        }}
      />

      {/* ── Top & bottom edge vignette ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(8,15,15,0.6) 0%, transparent 20%, transparent 80%, rgba(8,15,15,0.9) 100%)',
          zIndex: 1,
        }}
      />

      {/* ── Subtle teal radial glow behind person ── */}
      <div
        style={{
          position: 'absolute',
          top: '0', right: '0', bottom: '0',
          width: '60%',
          background: 'radial-gradient(ellipse 80% 90% at 85% 45%, rgba(45,158,143,0.12) 0%, transparent 65%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* ── Scan-line texture ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(45,158,143,0.015) 2px, rgba(45,158,143,0.015) 4px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* ── Content: left 45% only ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 3rem',
          paddingTop: '6rem',
          paddingBottom: '4rem',
        }}
      >
        <motion.div
          className="hero-content-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {/* Label chip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              border: '1px solid rgba(45,158,143,0.4)',
              borderRadius: '999px',
              backgroundColor: 'rgba(45,158,143,0.08)',
              width: 'fit-content',
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#2d9e8f', display: 'inline-block', boxShadow: '0 0 8px #2d9e8f' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: '#2d9e8f', letterSpacing: '0.1em', fontWeight: 600 }}>
              AVAILABLE FOR WORK
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", color: '#6a8a88', fontSize: '0.85rem', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
              / hello, I'm
            </p>
            <h1
              style={{
                margin: 0,
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                color: '#e8f0ef',
                letterSpacing: '-0.02em',
              }}
            >
              Danush{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #2d9e8f 0%, #5ecfb0 60%, #3db8a5 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Kumar
              </span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                fontWeight: 700,
                color: '#e8f0ef',
              }}
            >
              Backend Engineer
            </span>
            <span style={{ color: '#1a3030', fontSize: '1.2rem' }}>·</span>
            {['Java', 'Go', 'AWS'].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.75rem',
                  color: '#2d9e8f',
                  padding: '0.2rem 0.6rem',
                  border: '1px solid rgba(45,158,143,0.3)',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(45,158,143,0.06)',
                  fontWeight: 600,
                }}
              >
                {t}
              </span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54, duration: 0.6 }}
            style={{
              margin: 0,
              color: '#6a8a88',
              fontSize: '1rem',
              lineHeight: 1.75,
              fontFamily: "'Inter', sans-serif",
              maxWidth: '420px',
            }}
          >
            I design and build scalable backend systems — from event-driven microservices to serverless pipelines — that power real-world applications at scale.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.66, duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.7rem 1.6rem',
                background: 'linear-gradient(135deg, #2d9e8f, #3db8a5)',
                color: '#080f0f',
                fontSize: '0.85rem',
                fontWeight: 700,
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.06em',
                borderRadius: '8px',
                border: 'none',
                textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(45,158,143,0.35)',
                cursor: 'pointer',
              }}
            >
              Hire Me
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.68rem 1.6rem',
                background: 'transparent',
                color: '#e8f0ef',
                fontSize: '0.85rem',
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.06em',
                borderRadius: '8px',
                border: '1px solid rgba(26,48,48,1)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'border-color 0.25s',
              }}
            >
              View Work
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.25rem' }}
          >
            {[
              { icon: <Github size={18} />, href: 'https://github.com/DanushKumarM', label: 'GitHub' },
              { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/danushkumarm', label: 'LinkedIn' },
              { icon: <Code2 size={18} />, href: 'https://leetcode.com/u/Danush-Kumar-m-13/', label: 'LeetCode' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -2 }}
                style={{
                  color: '#6a8a88',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36,
                  height: 36,
                  border: '1px solid #1a3030',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(12,21,21,0.6)',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#2d9e8f'; e.currentTarget.style.borderColor = 'rgba(45,158,143,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#6a8a88'; e.currentTarget.style.borderColor = '#1a3030'; }}
              >
                {s.icon}
              </motion.a>
            ))}
            <div style={{ width: 1, height: 24, backgroundColor: '#1a3030', marginLeft: '0.25rem' }} />
            <a
              href="https://github.com/DanushKumarM"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: '#3a5250', textDecoration: 'none', letterSpacing: '0.04em' }}
            >
              github.com/DanushKumarM
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} color="#3a5250" />
            </motion.div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', color: '#3a5250', letterSpacing: '0.1em' }}>
              SCROLL TO EXPLORE
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Sparkle ── */}
      <motion.div
        animate={{ rotate: [0, 20, 0], scale: [1, 1.2, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '3%',
          color: 'rgba(45,158,143,0.7)',
          fontSize: '1.6rem',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        ✦
      </motion.div>

      <style>{`
        .hero-content-box { max-width: 46%; }
        @media (max-width: 768px) {
          .hero-content-box { max-width: 100%; padding-right: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
