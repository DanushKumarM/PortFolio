import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const MinimalThree = () => {
  return (
    <div className="w-full h-[300px] bg-white/5 rounded-2xl overflow-hidden mt-8">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box>
          <meshStandardMaterial color="orange" />
        </Box>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="text-center text-[10px] text-gray-500 uppercase py-2">Minimal 3D Core Active</div>
    </div>
  );
};

export default MinimalThree;
