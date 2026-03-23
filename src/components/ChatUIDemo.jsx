import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const chatList = [
  { id:1, name:'Sophia Carter',  init:'SC', color:'#e0e7ff', tc:'#4338ca', online:true,  time:'2m',        preview:'Hey! Are you free to call later?',  unread:3 },
  { id:2, name:'Dev Team',       init:'DT', color:'#d1fae5', tc:'#065f46', online:false, time:'10m',       preview:'Marcus: PR is ready for review',     unread:1 },
  { id:3, name:'Marcus Lee',     init:'ML', color:'#fef3c7', tc:'#92400e', online:true,  time:'1h',        preview:'Sent you the files!',                unread:0 },
  { id:4, name:'Priya Nair',     init:'PN', color:'#fce7f3', tc:'#9d174d', online:false, time:'Yesterday', preview:'Thanks so much!! 🎉',                unread:0 },
  { id:5, name:'Weekend Plans',  init:'WP', color:'#ede9fe', tc:'#5b21b6', online:false, time:'Mon',       preview:"Riya: I'll book the table!",         unread:0 },
  { id:6, name:'Alex Chen',      init:'AC', color:'#e0f2fe', tc:'#0c4a6e', online:false, time:'Sun',       preview:'Cool, see you then 👍',              unread:0 },
];

const initMessages = {
  1:[
    {id:1,side:'recv',text:'Hey! How are you doing?',time:'10:21 AM'},
    {id:2,side:'sent',text:"I'm good, just wrapped up work. You?",time:'10:22 AM'},
    {id:3,side:'recv',text:'Same! Been a long week honestly 😅',time:'10:22 AM'},
    {id:4,side:'recv',text:'Are you free to call later tonight?',time:'10:23 AM'},
    {id:5,side:'sent',text:'Yeah totally, around 8pm works?',time:'10:25 AM'},
    {id:6,side:'recv',text:"Perfect! Let's catch up then 🙌",time:'10:25 AM'},
    {id:7,side:'recv',text:'Hey! Are you free to call later?',time:'2:10 PM'},
  ],
  2:[
    {id:1,side:'recv',text:'Morning everyone! Standup in 10.',time:'9:00 AM'},
    {id:2,side:'sent',text:'On it, just finishing a fix.',time:'9:02 AM'},
    {id:3,side:'recv',text:'The staging deploy went through ✅',time:'9:45 AM'},
    {id:4,side:'recv',text:'PR is ready for review',time:'10:30 AM'},
    {id:5,side:'sent',text:"I'll review it after lunch.",time:'10:32 AM'},
  ],
  3:[
    {id:1,side:'recv',text:'Hey, do you have the design assets?',time:'Yesterday'},
    {id:2,side:'sent',text:'Yeah give me a sec to export them.',time:'Yesterday'},
    {id:3,side:'recv',text:'No rush! Take your time.',time:'Yesterday'},
    {id:4,side:'sent',text:'Done! Check your email.',time:'Yesterday'},
    {id:5,side:'recv',text:'Sent you the files!',time:'11:00 AM'},
  ],
  4:[
    {id:1,side:'sent',text:'Did the presentation go well?',time:'Yesterday'},
    {id:2,side:'recv',text:'It went amazing! They loved it.',time:'Yesterday'},
    {id:3,side:'sent',text:"That's awesome, I knew you'd nail it!",time:'Yesterday'},
    {id:4,side:'recv',text:'Thanks so much!! 🎉',time:'Yesterday'},
  ],
  5:[
    {id:1,side:'recv',text:'Anyone up for brunch on Saturday?',time:'Mon'},
    {id:2,side:'sent',text:"I'm in! Where were you thinking?",time:'Mon'},
    {id:3,side:'recv',text:'Maybe that new place in Koramangala?',time:'Mon'},
    {id:4,side:'recv',text:"I'll book the table!",time:'Mon'},
  ],
  6:[
    {id:1,side:'recv',text:'Are you going to the meetup next week?',time:'Sun'},
    {id:2,side:'sent',text:'Planning to, yeah! You?',time:'Sun'},
    {id:3,side:'recv',text:'Definitely. It starts at 6pm.',time:'Sun'},
    {id:4,side:'recv',text:'Cool, see you then 👍',time:'Sun'},
  ],
};

const Ico = ({ children, size=16, stroke='currentColor', sw=1.8 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);

export default function ChatUIDemo() {
  const [activeId, setActiveId] = useState(1);
  const [allMsgs, setAllMsgs]   = useState(initMessages);
  const [badges, setBadges]     = useState({1:3,2:1});
  const [input, setInput]       = useState('');
  const [search, setSearch]     = useState('');
  const [tab, setTab]           = useState('All');
  const endRef = useRef(null);

  useEffect(() => {
    // block: 'nearest' prevents the entire browser viewport from scrolling if the element is already visible
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [allMsgs, activeId]);

  const open = id => { setActiveId(id); setBadges(p=>({...p,[id]:0})); };

  const send = () => {
    const text = input.trim(); if(!text) return; setInput('');
    const now = new Date().toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'});
    setAllMsgs(p=>({...p,[activeId]:[...(p[activeId]||[]),{id:Date.now(),side:'sent',text,time:now}]}));
    setTimeout(()=>{
      setAllMsgs(p=>({...p,[activeId]:[...(p[activeId]||[]),{id:Date.now()+1,side:'recv',text:"Got it! Let me check and get back to you 👍",time:new Date().toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'})}]}));
    },1200);
  };

  const chat = chatList.find(c=>c.id===activeId);
  const msgs = allMsgs[activeId]||[];
  const filtered = chatList.filter(c=>c.name.toLowerCase().includes(search.toLowerCase())||c.preview.toLowerCase().includes(search.toLowerCase()));

  const font = "'DM Sans', sans-serif";
  const border = '1px solid rgba(0,0,0,0.07)';

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
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

      {/* Icon sidebar - hidden on mobile for space */}
      {!isMobile && (
        <div style={{width:62,background:'#fff',borderRight:border,display:'flex',flexDirection:'column',alignItems:'center',padding:'14px 0',gap:6,flexShrink:0}}>
          <div style={{width:34,height:34,background:'#4f3ef5',borderRadius:9,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:10}}>
            <Ico stroke="#fff" sw={2.2}><path d="M5 12h14M13 6l6 6-6 6"/></Ico>
          </div>
          {[
            {active:true,  icon:<><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></>},
            {active:false, icon:<><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.99 1.18 2 2 0 013 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></>},
            {active:false, icon:<><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></>},
            {active:false, icon:<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></>},
          ].map((b,i)=>(
            <button key={i} style={{width:36,height:36,borderRadius:9,border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',background:b.active?'#edeaff':'transparent',color:b.active?'#4f3ef5':'#8a8880',transition:'all 150ms'}}>
              <Ico size={17}>{b.icon}</Ico>
            </button>
          ))}
          <div style={{flex:1}}/>
          <div style={{width:30,height:30,borderRadius:'50%',background:'#c7d2fe',color:'#4338ca',fontSize:11,fontWeight:500,display:'flex',alignItems:'center',justifyContent:'center'}}>AR</div>
        </div>
      )}

      {/* Chat list - hidden on mobile if a chat is active, but here we'll just make it narrow or wrap */}
      <div style={{
        width: isMobile ? '100%' : 275,
        height: isMobile ? '180px' : '100%',
        background: '#fff',
        borderRight: isMobile ? 'none' : border,
        borderBottom: isMobile ? border : 'none',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0
      }}>
        <div style={{padding:'17px 15px 10px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <span style={{fontSize:17,fontWeight:500,letterSpacing:'-0.02em'}}>Messages</span>
          <button style={{width:28,height:28,borderRadius:7,border,background:'transparent',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',color:'#8a8880'}}>
            <Ico size={13}><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></Ico>
          </button>
        </div>

        <div style={{padding:'0 12px 10px',position:'relative'}}>
          <div style={{position:'absolute',left:22,top:'50%',transform:'translateY(-50%)',color:'#8a8880',display:'flex',pointerEvents:'none'}}>
            <Ico size={13}><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></Ico>
          </div>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search messages…"
            style={{width:'100%',height:33,borderRadius:8,border,background:'#f7f6f2',paddingLeft:30,paddingRight:10,fontFamily:font,fontSize:13,color:'#18181a',outline:'none',boxSizing:'border-box'}} />
        </div>

        <div style={{display:'flex',gap:3,padding:'0 12px 9px',borderBottom:border}}>
          {['All','Unread','Groups'].map(t=>(
            <button key={t} onClick={()=>setTab(t)} style={{padding:'4px 10px',fontSize:12,borderRadius:6,border:'none',fontFamily:font,cursor:'pointer',background:tab===t?'#edeaff':'transparent',color:tab===t?'#4f3ef5':'#8a8880',fontWeight:tab===t?500:400,transition:'all 150ms'}}>{t}</button>
          ))}
        </div>

        <div style={{flex:1,overflowY:'auto'}}>
          {filtered.map(c=>(
            <div key={c.id} onClick={()=>open(c.id)} style={{display:'flex',alignItems:'center',gap:9,padding:'9px 13px',cursor:'pointer',background:activeId===c.id?'#f0eeff':'transparent',borderLeft:`2.5px solid ${activeId===c.id?'#4f3ef5':'transparent'}`,transition:'all 120ms'}}>
              <div style={{width:38,height:38,borderRadius:'50%',background:c.color,color:c.tc,fontSize:12,fontWeight:500,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,position:'relative'}}>
                {c.init}
                {c.online&&<div style={{position:'absolute',bottom:1,right:1,width:8,height:8,background:'#10b981',borderRadius:'50%',border:`2px solid ${activeId===c.id?'#f0eeff':'#fff'}`}}/>}
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:13}}>
                  <span style={{fontWeight:500}}>{c.name}</span>
                  <span style={{fontSize:11,color:'#8a8880',marginLeft:4,flexShrink:0}}>{c.time}</span>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  <span style={{fontSize:12,color:'#8a8880',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',marginTop:2}}>{c.preview}</span>
                  {badges[c.id]>0&&activeId!==c.id&&<span style={{background:'#4f3ef5',color:'#fff',fontSize:10,fontWeight:500,borderRadius:10,padding:'1px 6px',flexShrink:0,marginLeft:4}}>{badges[c.id]}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat window */}
      <div style={{flex:1,display:'flex',flexDirection:'column',minWidth:0}}>
        {/* Header */}
        <div style={{padding:'12px 18px',borderBottom:border,display:'flex',alignItems:'center',gap:10,background:'#fff',flexShrink:0}}>
          <div style={{width:34,height:34,borderRadius:'50%',background:chat.color,color:chat.tc,fontSize:12,fontWeight:500,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{chat.init}</div>
          <div style={{flex:1}}>
            <div style={{fontSize:14,fontWeight:500}}>{chat.name}</div>
            <div style={{fontSize:12,color:'#8a8880',display:'flex',alignItems:'center',gap:4,marginTop:1}}>
              <div style={{width:6,height:6,borderRadius:'50%',background:'#10b981'}}/>Online
            </div>
          </div>
          <div style={{display:'flex',gap:5}}>
            {[
              <><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.99 1.18 2 2 0 013 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></>,
              <><path d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.89L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/></>,
            ].map((ico,i)=>(
              <button key={i} style={{width:31,height:31,borderRadius:8,border,background:'transparent',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',color:'#8a8880'}}>
                <Ico size={15}>{ico}</Ico>
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div style={{flex:1,overflowY:'auto',padding:'14px 16px',display:'flex',flexDirection:'column',gap:4,background:'#f7f6f2'}}>
          <div style={{textAlign:'center',fontSize:11,color:'#8a8880',margin:'6px 0 10px',display:'flex',alignItems:'center',gap:8}}>
            <div style={{flex:1,height:1,background:'rgba(0,0,0,0.07)'}}/><span>Today</span><div style={{flex:1,height:1,background:'rgba(0,0,0,0.07)'}}/>
          </div>
          <AnimatePresence initial={false}>
            {msgs.map(m=>(
              <motion.div key={m.id} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{duration:0.18}}
                style={{display:'flex',flexDirection:'column',alignItems:m.side==='sent'?'flex-end':'flex-start',marginBottom:5}}>
                <div style={{display:'flex',alignItems:'flex-end',gap:7,flexDirection:m.side==='sent'?'row-reverse':'row'}}>
                  {m.side==='recv'&&<div style={{width:25,height:25,borderRadius:'50%',background:chat.color,color:chat.tc,fontSize:10,fontWeight:500,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{chat.init}</div>}
                  <div style={{padding:'8px 12px',borderRadius:14,borderBottomRightRadius:m.side==='sent'?4:14,borderBottomLeftRadius:m.side==='sent'?14:4,fontSize:13.5,lineHeight:1.5,maxWidth:320,wordBreak:'break-word',background:m.side==='sent'?'#4f3ef5':'#fff',color:m.side==='sent'?'#fff':'#18181a',border:m.side==='sent'?'none':border}}>
                    {m.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={endRef}/>
        </div>

        {/* Input */}
        <div style={{padding:'10px 14px',borderTop:border,background:'#fff',display:'flex',alignItems:'center',gap:8,flexShrink:0}}>
          <div style={{flex:1,background:'#f7f6f2',border,borderRadius:10,display:'flex',alignItems:'center',padding:'0 8px'}}>
            <button style={{background:'transparent',border:'none',cursor:'pointer',color:'#8a8880',padding:4,display:'flex',alignItems:'center',borderRadius:6}}>
              <Ico size={15}><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></Ico>
            </button>
            <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Write a message…"
              style={{flex:1,background:'transparent',border:'none',outline:'none',padding:'8px 5px',fontFamily:font,fontSize:13.5,color:'#18181a'}}/>
            <button style={{background:'transparent',border:'none',cursor:'pointer',color:'#8a8880',padding:4,display:'flex',alignItems:'center',borderRadius:6}}>
              <Ico size={15}><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></Ico>
            </button>
          </div>
          <button onClick={send} style={{width:34,height:34,borderRadius:9,background:'#4f3ef5',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,transition:'opacity 150ms'}}
            onMouseDown={e=>e.currentTarget.style.opacity='.8'} onMouseUp={e=>e.currentTarget.style.opacity='1'}>
            <Ico size={14} stroke="#fff" sw={2}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></Ico>
          </button>
        </div>
      </div>
    </div>
  );
}