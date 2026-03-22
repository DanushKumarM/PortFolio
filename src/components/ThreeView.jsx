import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ContactShadows, PerspectiveCamera, Loader } from '@react-three/drei';
import Mascot from './Mascot';

const ThreeView = ({ modelUrl, position = [0, 0, 0], scale = 2.5 }) => {
  return (
    <div className="w-full h-[500px] lg:h-[700px] relative">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        
        {/* Lights */}
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[5, 10, 5]} intensity={1} color="#ff8000" />
        
        {/* Environment - Cinematic */}
        <Environment preset="studio" blur={1} />
        
        <Suspense fallback={
          <mesh>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial color="blue" transparent opacity={0.5} />
          </mesh>
        }>
          <Mascot modelUrl={modelUrl} position={position} scale={scale} />
          
          {/* Subtle Ground Shadows */}
          <ContactShadows 
            position={[0, -2, 0]} 
            opacity={0.4} 
            scale={12} 
            blur={2.5} 
            far={4} 
            color="#000000"
          />
        </Suspense>

        {/* Optional Controls - Restricted */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 2.5} 
          maxPolarAngle={Math.PI / 1.5} 
        />
      </Canvas>
      <Loader />
    </div>
  );
};

export default ThreeView;
