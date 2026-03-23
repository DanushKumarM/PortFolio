import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const font  = "'DM Sans', sans-serif";
const border = '1px solid rgba(0,0,0,0.07)';
const accent = '#4f3ef5';

const nav = [
  { label:'Dashboard',  icon:<><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>, active:true  },
  { label:'My Courses', icon:<><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></>,                active:false },
  { label:'AI Tutor',   icon:<><path d="M12 2a8 8 0 018 8c0 3-1.5 5.5-4 7l-4 3-4-3c-2.5-1.5-4-4-4-7a8 8 0 018-8z"/><circle cx="12" cy="10" r="2"/></>,               active:false },
  { label:'Progress',   icon:<><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,                                                                              active:false },
  { label:'Community',  icon:<><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>, active:false },
];

const stats = [
  { label:'Courses Enrolled', value:8,   suffix:'',  trend:'+2 this month', up:true,  color:'#edeaff', tc:accent },
  { label:'Hours Learned',    value:124,  suffix:'h', trend:'+12h this week', up:true, color:'#d1fae5', tc:'#065f46' },
  { label:'Day Streak',       value:21,   suffix:'🔥',trend:'Personal best!', up:true, color:'#fef3c7', tc:'#92400e' },
  { label:'Certificates',     value:3,    suffix:'',  trend:'1 pending',     up:false, color:'#fce7f3', tc:'#9d174d' },
];

const courses = [
  { title:'React & TypeScript Mastery', instructor:'Arjun Mehta',  progress:78, color:'#edeaff', tag:'Frontend'  },
  { title:'Node.js & Microservices',    instructor:'Priya Sharma', progress:45, color:'#d1fae5', tag:'Backend'   },
  { title:'UI/UX Fundamentals',         instructor:'Rahul Verma',  progress:92, color:'#fef3c7', tag:'Design'    },
];

const recommended = [
  { title:'GraphQL Deep Dive',    tag:'API',      rating:'4.9', students:'2.1k' },
  { title:'Docker & Kubernetes',  tag:'DevOps',   rating:'4.8', students:'3.4k' },
  { title:'Python for Data',      tag:'AI/ML',    rating:'4.7', students:'5.2k' },
];

const upcoming = [
  { title:'Live: Advanced Hooks',    time:'Today, 6:00 PM',  color:'#edeaff', tc:accent },
  { title:'Cohort: System Design',   time:'Thu, 7:30 PM',    color:'#d1fae5', tc:'#065f46' },
];

function CountUp({ target, suffix='' }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 40);
    const t = setInterval(() => {
      start = Math.min(start + step, target);
      setVal(start);
      if (start >= target) clearInterval(t);
    }, 30);
    return () => clearInterval(t);
  }, [target]);
  return <>{val}{suffix}</>;
}

function ProgressBar({ pct }) {
  const [width, setWidth] = useState(0);
  useEffect(() => { const t = setTimeout(() => setWidth(pct), 300); return () => clearTimeout(t); }, [pct]);
  return (
    <div style={{height:5,background:'#f0efe9',borderRadius:99,overflow:'hidden',marginTop:10}}>
      <div style={{height:'100%',width:`${width}%`,background:accent,borderRadius:99,transition:'width 700ms ease'}}/>
    </div>
  );
}

const Ico = ({ children, size=16, stroke='currentColor', sw=1.7 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

export default function DashboardUIDemo() {
  const [activePage, setActivePage] = useState('Dashboard');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      fontFamily: font,
      background: '#f7f6f2',
      color: '#18181a',
      overflow: 'hidden'
    }}>

      {/* Sidebar */}
      {!isMobile && (
        <div style={{width:210,background:'#fff',borderRight:border,display:'flex',flexDirection:'column',padding:'20px 0',flexShrink:0}}>
          {/* Logo */}
          <div style={{padding:'0 18px 20px',display:'flex',alignItems:'center',gap:9,borderBottom:border,marginBottom:8}}>
            <div style={{width:32,height:32,background:accent,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
              <Ico stroke="#fff" sw={2.2} size={17}><path d="M5 12h14M13 6l6 6-6 6"/></Ico>
            </div>
            <div>
              <div style={{fontSize:14,fontWeight:500,letterSpacing:'-0.02em'}}>ArrowSkills</div>
              <div style={{fontSize:11,color:'#8a8880'}}>Learning Platform</div>
            </div>
          </div>

          {/* Nav */}
          <div style={{flex:1,padding:'4px 10px',display:'flex',flexDirection:'column',gap:2}}>
            {nav.map(n=>(
              <button key={n.label} onClick={()=>setActivePage(n.label)}
                style={{display:'flex',alignItems:'center',gap:10,padding:'8px 10px',borderRadius:8,border:'none',cursor:'pointer',background:activePage===n.label?'#edeaff':'transparent',color:activePage===n.label?accent:'#64748b',fontFamily:font,fontSize:13,fontWeight:activePage===n.label?500:400,width:'100%',textAlign:'left',transition:'all 150ms'}}>
                <Ico size={15} stroke={activePage===n.label?accent:'#64748b'}>{n.icon}</Ico>
                {n.label}
              </button>
            ))}
          </div>

          {/* User */}
          <div style={{padding:'12px 16px',borderTop:border,display:'flex',alignItems:'center',gap:9}}>
            <div style={{width:32,height:32,borderRadius:'50%',background:'#e0e7ff',color:'#4338ca',fontSize:12,fontWeight:500,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>AR</div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:13,fontWeight:500,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>Arjun Ravi</div>
              <div style={{fontSize:11,color:'#8a8880'}}>Pro Plan</div>
            </div>
            <Ico size={14} stroke="#8a8880"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></Ico>
          </div>
        </div>
      )}

      {/* Main */}
      <div style={{flex:1,display:'flex',flexDirection:'column',overflow:'hidden'}}>

        {/* Topbar */}
        <div style={{padding:'14px 22px',background:'#fff',borderBottom:border,display:'flex',alignItems:'center',justifyContent:'space-between',flexShrink:0}}>
          <div>
            <div style={{fontSize:17,fontWeight:500,letterSpacing:'-0.02em'}}>Good morning, Arjun 👋</div>
            <div style={{fontSize:12,color:'#8a8880',marginTop:2}}>You have 2 live sessions today</div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{display:'flex',alignItems:'center',gap:8,background:'#f7f6f2',border,borderRadius:8,padding:'7px 12px',width:180}}>
              <Ico size={13} stroke="#8a8880"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></Ico>
              <span style={{fontSize:12,color:'#8a8880'}}>Search courses…</span>
            </div>
            <div style={{position:'relative'}}>
              <button style={{width:32,height:32,borderRadius:8,border,background:'transparent',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',color:'#64748b'}}>
                <Ico size={15}><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></Ico>
              </button>
              <div style={{position:'absolute',top:6,right:6,width:7,height:7,background:'#ef4444',borderRadius:'50%',border:'2px solid #fff'}}/>
            </div>
          </div>
        </div>

        {/* Scrollable content */}
        <div style={{flex:1,overflowY:'auto',padding:'18px 22px',display:'flex',flexDirection:'column',gap:18}}>

          {/* Stats row */}
          <div style={{display:'grid',gridTemplateColumns:isMobile ? '1fr 1fr' : 'repeat(4,1fr)',gap:12}}>
            {stats.map((st,i)=>(
              <motion.div key={st.label} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:i*0.07,duration:0.35}}
                style={{background:'#fff',borderRadius:12,border,padding:isMobile ? '10px' : '14px 16px'}}>
                <div style={{fontSize:11,color:'#8a8880',marginBottom:6,fontWeight:400}}>{st.label}</div>
                <div style={{fontSize:isMobile ? 20 : 26,fontWeight:500,color:'#18181a',letterSpacing:'-0.03em',lineHeight:1}}>
                  <CountUp target={st.value} suffix={st.suffix}/>
                </div>
                <div style={{marginTop:6,display:'flex',alignItems:'center',gap:4}}>
                  <div style={{width:5,height:5,borderRadius:'50%',background:st.up?'#10b981':'#f59e0b'}}/>
                  <span style={{fontSize:11,color:st.up?'#10b981':'#f59e0b'}}>{st.trend}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Continue learning + Upcoming */}
          <div style={{display:'grid',gridTemplateColumns:isMobile ? '1fr' : '1fr 240px',gap:14}}>

            {/* Continue learning */}
            <div style={{background:'#fff',borderRadius:12,border,padding:'16px 18px'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
                <span style={{fontSize:14,fontWeight:500}}>Continue Learning</span>
                <span style={{fontSize:12,color:accent,cursor:'pointer'}}>View all</span>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:14}}>
                {courses.map((c,i)=>(
                  <div key={c.title} style={{display:'flex',gap:12,alignItems:'flex-start'}}>
                    <div style={{width:40,height:40,borderRadius:9,background:c.color,flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <Ico size={18} stroke={accent}><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></Ico>
                    </div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <span style={{fontSize:13,fontWeight:500,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:200}}>{c.title}</span>
                        <span style={{fontSize:12,color:accent,fontWeight:500,flexShrink:0,marginLeft:8}}>{c.progress}%</span>
                      </div>
                      <div style={{fontSize:11,color:'#8a8880',marginTop:2}}>{c.instructor} · {c.tag}</div>
                      <ProgressBar pct={c.progress}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming */}
            <div style={{background:'#fff',borderRadius:12,border,padding:'16px 18px'}}>
              <div style={{fontSize:14,fontWeight:500,marginBottom:14}}>Upcoming</div>
              <div style={{display:'flex',flexDirection:'column',gap:10}}>
                {upcoming.map(u=>(
                  <div key={u.title} style={{padding:'10px 12px',borderRadius:9,background:u.color,border:`1px solid ${u.color}`}}>
                    <div style={{fontSize:12,fontWeight:500,color:u.tc}}>{u.title}</div>
                    <div style={{fontSize:11,color:u.tc,opacity:0.75,marginTop:3}}>{u.time}</div>
                    <button style={{marginTop:8,padding:'4px 10px',borderRadius:6,border:`1px solid ${u.tc}40`,background:'transparent',color:u.tc,fontSize:11,fontWeight:500,cursor:'pointer',fontFamily:font}}>Join →</button>
                  </div>
                ))}
              </div>

              {/* Streak */}
              <div style={{marginTop:14,padding:'12px',borderRadius:9,background:'#f7f6f2',border}}>
                <div style={{fontSize:12,fontWeight:500,marginBottom:6}}>This week</div>
                <div style={{display:'flex',gap:5}}>
                  {['M','T','W','T','F','S','S'].map((d,i)=>(
                    <div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
                      <div style={{width:'100%',height:28,borderRadius:5,background:i<5?accent:'#f0efe9',opacity:i===4?0.5:1}}/>
                      <span style={{fontSize:9,color:'#8a8880'}}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recommended */}
          <div style={{background:'#fff',borderRadius:12,border,padding:'16px 18px'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14}}>
              <span style={{fontSize:14,fontWeight:500}}>Recommended for you</span>
              <span style={{fontSize:12,color:accent,cursor:'pointer'}}>Browse all</span>
            </div>
            <div style={{display:'grid',gridTemplateColumns:isMobile ? '1fr' : 'repeat(3,1fr)',gap:12}}>
              {recommended.map((r,i)=>(
                <div key={r.title} style={{padding:'14px',borderRadius:10,border,background:'#f7f6f2',cursor:'pointer',transition:'all 150ms'}}>
                  <div style={{display:'inline-flex',padding:'2px 8px',borderRadius:5,background:'#edeaff',color:accent,fontSize:10,fontWeight:500,marginBottom:8}}>{r.tag}</div>
                  <div style={{fontSize:13,fontWeight:500,lineHeight:1.35,marginBottom:6}}>{r.title}</div>
                  <div style={{display:'flex',alignItems:'center',gap:8,fontSize:11,color:'#8a8880'}}>
                    <span>⭐ {r.rating}</span>
                    <span>·</span>
                    <span>{r.students} students</span>
                  </div>
                  <button style={{marginTop:10,width:'100%',padding:'6px',borderRadius:7,border:`1px solid rgba(79,62,245,0.2)`,background:'transparent',color:accent,fontSize:12,fontWeight:500,cursor:'pointer',fontFamily:font,transition:'all 150ms'}}>
                    Enroll →
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}