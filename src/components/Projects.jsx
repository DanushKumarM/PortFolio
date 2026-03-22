import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import arrowSkillsImg from '../assets/arrow_skills.png';
import chatAppImg from '../assets/chat_app.png';


const Projects = () => {
  const portfolioImg = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800';

  const projects = [
    {
      title: 'ArrowSkills',
      subtitle: 'Full-Stack E-Learning Platform',
      description: 'Microservices-based e-learning platform with Spring AI for auto quiz generation, Kafka event-driven notifications, and JWT-secured REST APIs.',
      image: arrowSkillsImg,
      tech: ['Spring Boot', 'Kafka', 'Docker', 'Spring AI', 'PostgreSQL', 'JWT'],
      github: 'https://github.com/Danush-Kumar-m-13/ArrowSkills',
      category: 'Microservices',
    },
    {
      title: 'ChatApp',
      subtitle: 'Real-Time Messaging Platform',
      description: 'Real-time private & group chat with WebSocket, MongoDB, and a clean responsive UI. Secured REST APIs and seamless session management.',
      image: chatAppImg,
      tech: ['Java', 'Spring Boot', 'React', 'WebSocket', 'MongoDB'],
      github: 'https://github.com/DanushKumarM/ChatApp',
      category: 'Real-Time Systems',
    },
    {
      title: 'Portfolio',
      subtitle: 'Cinematic Developer Portfolio',
      description: 'A premium, dark-teal themed developer portfolio with Framer Motion animations, glassmorphism cards, and a fully responsive layout.',
      image: portfolioImg,
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/Danush-kumar-m13/PortFolio-main',
      category: 'Frontend',
    },
  ];

  return (
    <section id="projects" style={{ padding: '6rem 0', backgroundColor: '#0d1818', position: 'relative', overflow: 'hidden' }}>
      {/* Bg glow */}
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,158,143,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2.5rem' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#e8f0ef', lineHeight: 1.1 }}>
            Selected{' '}
            <span style={{ backgroundImage: 'linear-gradient(135deg, #2d9e8f, #5ecfb0)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Work
            </span>
          </h2>
          <p style={{ marginTop: '0.75rem', color: '#6a8a88', fontSize: '1rem', maxWidth: 520, fontStyle: 'italic' }}>
            "Engineered for performance, designed for scale."
          </p>
        </motion.div>

        {/* Project cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              whileHover={{ y: -8 }}
              style={{
                backgroundColor: '#0c1515',
                border: '1px solid #1a3030',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(45,158,143,0.45)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(45,158,143,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1a3030';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {/* Overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,21,21,0.95) 0%, rgba(12,21,21,0.3) 60%, transparent 100%)' }} />
                {/* Category pill */}
                <div style={{
                  position: 'absolute', top: 12, right: 12,
                  padding: '0.25rem 0.65rem',
                  backgroundColor: 'rgba(45,158,143,0.15)',
                  border: '1px solid rgba(45,158,143,0.35)',
                  borderRadius: '999px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  color: '#2d9e8f',
                  letterSpacing: '0.08em',
                  backdropFilter: 'blur(8px)',
                }}>
                  {project.category}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '0.75rem' }}>
                <div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.2rem', fontWeight: 800, color: '#e8f0ef', letterSpacing: '-0.01em', margin: 0 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: '#2d9e8f', fontWeight: 600, marginTop: '0.2rem', letterSpacing: '0.06em' }}>
                    {project.subtitle}
                  </p>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#6a8a88', lineHeight: 1.7, margin: 0, flexGrow: 1 }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      color: '#3a5250',
                      padding: '0.2rem 0.5rem',
                      backgroundColor: 'rgba(26,48,48,0.5)',
                      border: '1px solid #1a3030',
                      borderRadius: '4px',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.75rem', borderTop: '1px solid #1a3030' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#6a8a88', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.04em' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#2d9e8f')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6a8a88')}
                  >
                    <Github size={14} />
                    Code
                  </a>
                  <a
                    href="#"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#6a8a88', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.04em' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#2d9e8f')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6a8a88')}
                  >
                    <ArrowUpRight size={14} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
