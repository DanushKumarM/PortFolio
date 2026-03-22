import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import { Sparkles, Terminal, ShieldCheck, Zap } from 'lucide-react';
import Mascot from './Mascot';

// Inline 3D canvas view using the programmatic Mascot (no GLB needed)
const MascotCanvas = () => (
  <div style={{ width: '100%', height: '500px', position: 'relative' }}>
    <Canvas shadows dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[5, 10, 5]} intensity={1} color="#ff8000" />

      <Environment preset="studio" blur={1} />

      <Suspense fallback={
        <mesh>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial color="#1e40af" transparent opacity={0.4} />
        </mesh>
      }>
        {/* Programmatic 3D Mascot — no GLB required */}
        <Mascot position={[0, -0.5, 0]} scale={2.5} />

        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.5}
          scale={12}
          blur={2.5}
          far={4}
          color="#000000"
        />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.5}
        autoRotate
        autoRotateSpeed={1.2}
      />
    </Canvas>
  </div>
);

const MascotSegment = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#030712] border-y border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/5 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Interactive 3D Mascot Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative glass-card border border-white/10 overflow-hidden group shadow-[0_30px_100px_-20px_rgba(37,99,235,0.2)]"
        >
          {/* Futuristic UI dots */}
          <div className="absolute top-6 left-6 z-20 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-green-500 delay-300 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-blue-500 delay-500 animate-pulse" />
          </div>

          {/* Bottom info bar */}
          <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end border-t border-white/10 pt-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">System Mascot</span>
              <h3 className="text-xl font-black text-white uppercase italic">Nexus-Bot <span className="text-blue-500">v1.3</span></h3>
            </div>
            <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest text-right">
              Interaction: Active<br />
              Status: Ready
            </div>
          </div>

          {/* 3D Canvas */}
          <MascotCanvas />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-xl text-[10px] font-black text-white uppercase tracking-widest shadow-2xl">
              Drag to explore
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-amber-500 text-xs font-black uppercase tracking-[0.4em]">
              <Sparkles className="w-4 h-4" /> Augmented Intelligence
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] uppercase italic tracking-tighter">
              Next-Gen <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-amber-500">Core Engine</span>
            </h2>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed font-medium">
            Engineered with high-reliability <span className="text-white italic">interactive systems</span> that simplify complex backend data. This mascot is your guide through the intricacies of my architectural core.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Latency', value: '<2ms', icon: <Zap className="w-5 h-5 text-blue-400" /> },
              { label: 'Uptime', value: '99.9%', icon: <ShieldCheck className="w-5 h-5 text-green-400" /> },
              { label: 'Protocols', value: 'gRPC/WS', icon: <Terminal className="w-5 h-5 text-amber-400" /> },
              { label: 'Version', value: 'PRO-13', icon: <Sparkles className="w-5 h-5 text-purple-400" /> }
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center gap-4 hover:border-white/20 transition-all cursor-default group">
                <div className="p-2 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-600 font-bold uppercase">{stat.label}</span>
                  <span className="text-sm font-black text-white tracking-widest">{stat.value}</span>
                </div>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-white w-fit shadow-xl shadow-blue-900/40 border border-white/10"
          >
            Launch Core Systems
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MascotSegment;
