import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardUIDemo from './DashboardUIDemo';
import ChatUIDemo from './ChatUIDemo';

const InteractiveProjects = () => {
  const [activeProject, setActiveProject] = useState('chat');
  const isChat = activeProject === 'chat';

  const tabs = [
    { key: 'chat', label: 'ChatApp' },
    { key: 'edu',  label: 'ArrowSkills' },
  ];

  return (
    <section
      id="interactive"
      style={{
        padding: '6rem 0',
        backgroundColor: '#030712',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle bg glow */}
      <div style={{
        position: 'absolute', top: '0%', left: '50%',
        transform: 'translateX(-50%)',
        width: 900, height: 400, borderRadius: '50%',
        background: isChat
          ? 'radial-gradient(circle, rgba(79,62,245,0.08) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)',
        filter: 'blur(60px)',
        transition: 'background 0.8s ease',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2.5rem', position: 'relative', zIndex: 10 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '2.5rem' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.35rem 1rem',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '999px', marginBottom: '1.2rem',
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%', display: 'block',
              backgroundColor: isChat ? '#4f3ef5' : '#f59e0b',
              boxShadow: `0 0 8px ${isChat ? '#4f3ef5' : '#f59e0b'}`,
              transition: 'all 0.4s',
            }} />
            <span style={{
              fontSize: '0.7rem', fontWeight: 500, color: '#64748b',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Live Demo
            </span>
          </div>

          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            fontWeight: 500, color: '#ffffff',
            lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0,
          }}>
            Interactive{' '}
            <span style={{
              backgroundImage: isChat
                ? 'linear-gradient(135deg, #4f3ef5, #8b5cf6)'
                : 'linear-gradient(135deg, #f59e0b, #10b981)',
              backgroundClip: 'text', WebkitBackgroundClip: 'text',
              color: 'transparent', transition: 'all 0.5s ease',
            }}>
              {isChat ? 'Chat Experience' : 'Learning Dashboard'}
            </span>
          </h2>

          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.88rem', color: '#475569',
            marginTop: '0.6rem', fontWeight: 400,
          }}>
            {isChat
              ? 'Click any conversation, search, and send messages — fully interactive.'
              : 'Explore the dashboard with live stats, courses, and navigation.'}
          </p>

          {/* Tab toggle */}
          <div style={{
            display: 'inline-flex', marginTop: '2rem',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '10px', padding: '4px', gap: '4px',
          }}>
            {tabs.map(tab => {
              const on = activeProject === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveProject(tab.key)}
                  style={{
                    padding: '0.5rem 1.6rem',
                    backgroundColor: on
                      ? tab.key === 'chat' ? '#4f3ef5' : '#f59e0b'
                      : 'transparent',
                    color: on ? '#ffffff' : '#64748b',
                    border: 'none',
                    borderRadius: '7px',
                    cursor: 'pointer',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Demo window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: `1px solid ${isChat ? 'rgba(79,62,245,0.2)' : 'rgba(245,158,11,0.15)'}`,
            boxShadow: isChat
              ? '0 0 0 1px rgba(79,62,245,0.1), 0 24px 64px -12px rgba(79,62,245,0.2)'
              : '0 0 0 1px rgba(245,158,11,0.08), 0 24px 64px -12px rgba(245,158,11,0.15)',
            transition: 'border 0.5s ease, box-shadow 0.5s ease',
            position: 'relative',
          }}
        >
          {/* Browser chrome bar */}
          <div style={{
            background: '#0d1117',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            {/* Traffic lights */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {['#ff5f57','#febc2e','#28c840'].map(c => (
                <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c, opacity: 0.8 }} />
              ))}
            </div>
            {/* URL bar */}
            <div style={{
              flex: 1, maxWidth: 340, margin: '0 auto',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '6px',
              padding: '4px 12px',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: isChat ? '#4f3ef5' : '#f59e0b', flexShrink: 0 }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px', color: '#475569',
              }}>
                {isChat ? 'chatapp.io/messages' : 'arrowskills.io/dashboard'}
              </span>
            </div>
          </div>

          {/* Demo content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              style={{
                height: isChat ? '560px' : '680px',
                overflow: 'hidden',
              }}
            >
              {isChat ? <ChatUIDemo /> : <DashboardUIDemo />}
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default InteractiveProjects;