import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Briefcase, Award, ChevronRight } from 'lucide-react';


const About = () => {
  const experiences = [
    {
      role: 'Associate Software Engineer',
      company: 'MsgKart',
      duration: 'Aug 2025 – Present',
      location: 'Bangalore, India',
      highlights: [
        'Instagram Graph API webhook ingestion, signature verification + SQS publishing; rule-based comment auto-reply engine.',
        'Multi-Tenant Billing API (Go + Lambda): billing engine mapping per-business module subscriptions with multi-tenant pricing tiers.',
        'Telecom CDR Streaming: real-time ingestion via Amazon Kinesis with shard-based partitioning for high-throughput volumes.',
        'Finance Data Pipeline: reactive WebClient parallel non-blocking API calls; 5 MB chunked CSV streaming to S3.',
        'DB Performance: read/write routing to PostgreSQL replica via Spring AOP, reducing primary DB load on read-heavy workloads.',
      ],
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'University of Mysore',
      location: 'Karnataka, India',
      duration: '2025 – 2027',
      details: 'Specializing in computer applications and advanced software engineering.',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Srinivas University',
      location: 'Mangalore, Karnataka, India',
      duration: '2021 – 2024',
      details: 'CGPA: 8.34',
    },
  ];

  const cardStyle = {
    backgroundColor: '#0c1515',
    border: '1px solid #1a3030',
    borderRadius: '16px',
    padding: '2rem',
    transition: 'border-color 0.3s',
  };

  return (
    <section
      id="about"
      style={{ padding: '6rem 0', backgroundColor: '#0d1818', position: 'relative', overflow: 'hidden' }}
    >
      {/* Bg glow */}
      <div style={{ position: 'absolute', top: '20%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,158,143,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2.5rem' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#e8f0ef', lineHeight: 1.1 }}>
            Background &{' '}
            <span style={{ backgroundImage: 'linear-gradient(135deg, #2d9e8f, #5ecfb0)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Expertise
            </span>
          </h2>
          <p style={{ marginTop: '0.75rem', color: '#6a8a88', fontSize: '1rem', maxWidth: 560 }}>
            Building clean, efficient systems that hold up under real-world pressure.
          </p>
        </motion.div>

        <div className="about-grid" style={{ display: 'grid', gap: '3rem', alignItems: 'start' }}>
          {/* ── Experience ── */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
              <Briefcase size={18} color="#2d9e8f" />
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: '#e8f0ef', fontSize: '1.1rem' }}>Professional Experience</h3>
            </div>

            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                style={cardStyle}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(45,158,143,0.5)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a3030')}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div>
                    <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: '#e8f0ef', fontSize: '1rem', marginBottom: '0.2rem' }}>{exp.role}</h4>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#2d9e8f', fontWeight: 600 }}>{exp.company}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#6a8a88', fontSize: '0.78rem' }}>
                      <Calendar size={12} />
                      <span style={{ fontFamily: "'Inter', sans-serif" }}>{exp.duration}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#3a5250', fontSize: '0.78rem', marginTop: '0.2rem' }}>
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {exp.highlights.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <ChevronRight size={13} color="#2d9e8f" style={{ flexShrink: 0, marginTop: 3 }} />
                      <span style={{ fontSize: '0.83rem', color: '#6a8a88', lineHeight: 1.65 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Separator */}
          <div className="about-divider" style={{ backgroundColor: '#1a3030', alignSelf: 'stretch' }} />

          {/* ── Education ── */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
              <GraduationCap size={18} color="#2d9e8f" />
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: '#e8f0ef', fontSize: '1.1rem' }}>Education</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  style={cardStyle}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(45,158,143,0.5)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#1a3030')}
                >
                  <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: '#e8f0ef', fontSize: '1rem', marginBottom: '0.3rem' }}>{edu.degree}</h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#2d9e8f', marginBottom: '0.75rem', fontWeight: 600 }}>{edu.institution}</p>

                  <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', color: '#6a8a88', fontSize: '0.78rem' }}>
                      <Calendar size={12} />
                      <span style={{ fontFamily: "'Inter', sans-serif" }}>{edu.duration}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', color: '#3a5250', fontSize: '0.78rem' }}>
                      <MapPin size={12} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div style={{ padding: '0.75rem 1rem', backgroundColor: 'rgba(45,158,143,0.05)', border: '1px solid rgba(45,158,143,0.12)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                      <Award size={12} color="#2d9e8f" />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', color: '#2d9e8f', letterSpacing: '0.1em', fontWeight: 700 }}>ACHIEVEMENT</span>
                    </div>
                    <p style={{ fontSize: '0.83rem', color: '#6a8a88', margin: 0, lineHeight: 1.5 }}>{edu.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-grid { grid-template-columns: 1fr 1px 1fr; }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 4rem !important; }
          .about-divider { display: none; }
        }
      `}</style>
    </section>
  );
};

export default About;
