import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Server, Cloud, Database, Cpu, Shield, MessageSquare, Terminal, Zap, Lock
} from 'lucide-react';

const devicons = {
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'Go (Golang)': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  'Spring Data JPA': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  'Spring Security': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  'Apache Kafka': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'GitHub Actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  'Lambda': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'SQS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Kinesis': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'S3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'DynamoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'EC2': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'EventBridge': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Secrets Manager': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Amazon SQS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Amazon Kinesis': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
};

// Fallback colourful lucide icons for abstract concepts that lack an official brand logo
const abstractIcons = {
  'REST APIs': <Server size={14} color="#06b6d4" />,
  'JWT': <Lock size={14} color="#f43f5e" />,
  'Microservices': <Cpu size={14} color="#8b5cf6" />,
  'Event-Driven': <Zap size={14} color="#eab308" />,
  'Serverless': <Cloud size={14} color="#3b82f6" />,
  'Burp Suite': <Shield size={14} color="#f97316" />,
  'API Security Testing': <Terminal size={14} color="#10b981" />,
  'RBAC': <Lock size={14} color="#ec4899" />,
};

const skillCategories = [
  { title: 'Languages',        icon: <Code2 size={24} />,        color: '#3b82f6', skills: ['Java', 'Go (Golang)', 'Python', 'JavaScript', 'SQL'] },
  { title: 'Backend',          icon: <Server size={24} />,       color: '#10b981', skills: ['Spring Boot', 'Spring Data JPA', 'Spring Security', 'REST APIs', 'JWT'] },
  { title: 'AWS (Cloud)',      icon: <Cloud size={24} />,        color: '#f59e0b', skills: ['Lambda', 'SQS', 'Kinesis', 'S3', 'DynamoDB', 'EC2', 'EventBridge', 'Secrets Manager'] },
  { title: 'Databases',        icon: <Database size={24} />,     color: '#ec4899', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB'] },
  { title: 'Messaging',        icon: <MessageSquare size={24} />, color: '#8b5cf6', skills: ['Apache Kafka', 'Amazon SQS', 'Amazon Kinesis'] },
  { title: 'DevOps & Tools',   icon: <Terminal size={24} />,     color: '#ef4444', skills: ['Docker', 'GitHub Actions', 'Git', 'Linux'] },
  { title: 'Architecture',     icon: <Cpu size={24} />,          color: '#06b6d4', skills: ['Microservices', 'Event-Driven', 'Serverless'] },
  { title: 'Security',         icon: <Shield size={24} />,       color: '#f43f5e', skills: ['Burp Suite', 'API Security Testing', 'RBAC'] },
];

const hexToRgba = (hex, opacity) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${opacity})` : null;
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-24 relative overflow-hidden" style={{ backgroundColor: '#080f0f' }}>
      {/* Bg glow */}
      <div style={{ position: 'absolute', top: '10%', right: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,158,143,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header text-center mb-16 flex flex-col items-center"
        >
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#e8f0ef', lineHeight: 1.1 }}>
            Technical{' '}
            <span style={{ backgroundImage: 'linear-gradient(135deg, #2d9e8f, #5ecfb0)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Arsenal
            </span>
          </h2>
          <p style={{ marginTop: '0.85rem', color: '#6a8a88', fontSize: '1rem', maxWidth: 520 }}>
            A meticulously curated toolkit for building highly scalable, fault-tolerant backend architectures.
          </p>
        </motion.div>

        {/* Dynamic Grid Layout (Category Grid) */}
        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              whileHover={{ y: -6, borderColor: hexToRgba(cat.color, 0.4) }}
              style={{
                backgroundColor: '#0c1515',
                border: '1px solid #1a3030',
                borderRadius: '20px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.4rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 12px 30px -10px ${hexToRgba(cat.color, 0.15)}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Category Icon & Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: 48, height: 48,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: hexToRgba(cat.color, 0.1),
                  borderRadius: '12px',
                  border: `1px solid ${hexToRgba(cat.color, 0.2)}`,
                  boxShadow: `inset 0 0 16px ${hexToRgba(cat.color, 0.05)}`
                }}>
                  {/* Inject a gradient definition into the DOM to make the main Lucide icon colourful */}
                  <svg width="0" height="0">
                    <linearGradient id={`grad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop stopColor={cat.color} offset="0%" />
                      <stop stopColor="#ffffff" offset="100%" />
                    </linearGradient>
                  </svg>
                  {React.cloneElement(cat.icon, { style: { stroke: `url(#grad-${idx})` }, color: cat.color })}
                </div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#e8f0ef', margin: 0, letterSpacing: '0.01em' }}>
                  {cat.title}
                </h3>
              </div>

              <div style={{ width: '100%', height: 1, backgroundColor: '#1a3030' }} />

              {/* Skill Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {cat.skills.map((skill, i) => {
                  const iconSrc = devicons[skill];
                  
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.8rem',
                        fontWeight: 500,
                        color: '#e8f0ef',
                        padding: '0.4rem 0.75rem',
                        backgroundColor: 'rgba(26,48,48,0.3)',
                        border: '1px solid #1a3030',
                        borderRadius: '8px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = hexToRgba(cat.color, 0.12);
                        e.currentTarget.style.borderColor = cat.color;
                        e.currentTarget.style.color = cat.color;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = 'rgba(26,48,48,0.3)';
                        e.currentTarget.style.borderColor = '#1a3030';
                        e.currentTarget.style.color = '#e8f0ef';
                      }}
                    >
                      {/* Render Devicon if mapped, otherwise render the abstract colourful icon, or fallback to dot */}
                      {iconSrc ? (
                        <img 
                          src={iconSrc} 
                          alt={`${skill} icon`} 
                          style={{ 
                            width: '14px', 
                            height: '14px', 
                            objectFit: 'contain',
                            filter: skill === 'Apache Kafka' || skill === 'GitHub Actions' ? 'drop-shadow(0px 0px 2px rgba(255,255,255,0.4))' : 'none'
                          }} 
                        />
                      ) : abstractIcons[skill] ? (
                        abstractIcons[skill]
                      ) : (
                        <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: cat.color }} />
                      )}
                      {skill}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .section-container { max-width: 1200px; margin: 0 auto; padding: 0 2.5rem; }
        @media (max-width: 768px) {
          .section-container { padding: 0 1.25rem; }
          .skills-section { padding-top: 4rem; padding-bottom: 4rem; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
