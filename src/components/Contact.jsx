import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Code2, ExternalLink } from 'lucide-react';


const Contact = () => {
  const contactLinks = [
    { icon: <Mail size={16} color="#ea4335" />, label: 'Email', value: 'danushkumar580@gmail.com', href: 'mailto:danushkumar580@gmail.com', glow: '#ea4335' },
    { icon: <Phone size={16} color="#34a853" />, label: 'Phone', value: '+91 7012085244', href: 'tel:+917012085244', glow: '#34a853' },
    { icon: <Linkedin size={16} color="#0077b5" />, label: 'LinkedIn', value: 'danushkumarm', href: 'https://www.linkedin.com/in/danushkumarm', glow: '#0077b5' },
    { icon: <Github size={16} color="#e8f0ef" />, label: 'GitHub', value: 'DanushKumarM', href: 'https://github.com/DanushKumarM', glow: '#6a8a88' },
    { icon: <Code2 size={16} color="#f59e0b" />, label: 'LeetCode', value: 'Danush-Kumar-m-13', href: 'https://leetcode.com/u/Danush-Kumar-m-13/', glow: '#f59e0b' },
  ];

  return (
    <section id="contact" style={{ padding: '6rem 0 8rem 0', backgroundColor: '#080f0f', position: 'relative', overflow: 'hidden' }}>
      {/* Bg glow */}
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, 50%)', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,158,143,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 2.5rem', position: 'relative', zIndex: 1 }}>
        {/* Header (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 800, color: '#e8f0ef', lineHeight: 1.1 }}>
            Let's{' '}
            <span style={{ backgroundImage: 'linear-gradient(135deg, #2d9e8f, #5ecfb0)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Connect
            </span>
          </h2>
          <p style={{ marginTop: '0.85rem', color: '#6a8a88', fontSize: '1.05rem', maxWidth: 520 }}>
            Currently exploring new opportunities. I try my best to respond promptly to every inquiry.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {/* Contact links */}
          {contactLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.25rem 1.5rem',
                backgroundColor: '#0c1515',
                border: '1px solid #1a3030',
                borderRadius: '16px',
                textDecoration: 'none',
                transition: 'border-color 0.25s, box-shadow 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(45,158,143,0.45)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(45,158,143,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1a3030';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: '10px',
                backgroundColor: `${link.glow}15`,
                border: `1px solid ${link.glow}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                boxShadow: `inset 0 0 10px ${link.glow}10`,
              }}>
                {link.icon}
              </div>
              <div style={{ flexGrow: 1 }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', color: '#3a5250', letterSpacing: '0.12em', fontWeight: 700, margin: 0, textTransform: 'uppercase' }}>{link.label}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#e8f0ef', fontWeight: 500, margin: 0, marginTop: '0.2rem' }}>{link.value}</p>
              </div>
              <ExternalLink size={14} color="#3a5250" />
            </motion.a>
          ))}

          {/* Location card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: contactLinks.length * 0.08 }}
            style={{
              padding: '1.25rem 1.5rem',
              backgroundColor: '#0c1515',
              border: '1px dashed #1a3030',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              cursor: 'default',
            }}
          >
            <div style={{ width: 42, height: 42, borderRadius: '10px', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin size={18} color="#ef4444" />
            </div>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', color: '#3a5250', letterSpacing: '0.12em', margin: 0, textTransform: 'uppercase', fontWeight: 700 }}>Locality</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#6a8a88', fontWeight: 500, margin: 0, marginTop: '0.2rem' }}>Bangalore, India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
