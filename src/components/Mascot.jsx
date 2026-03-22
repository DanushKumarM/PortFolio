import React, { useRef, useEffect, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, RoundedBox, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const Mascot = ({ ...props }) => {
  const group = useRef();
  const [hovered, setHovered] = useState(false);
  const visorRef = useRef();
  const eyesRef = useRef();
  const thrusterRef = useRef();

  // Create a multi-color rainbow gradient texture for the LED trim
  const rainbowTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 1;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 256, 0);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.17, 'orange');
    gradient.addColorStop(0.33, 'yellow');
    gradient.addColorStop(0.5, 'green');
    gradient.addColorStop(0.67, 'blue');
    gradient.addColorStop(0.83, 'indigo');
    gradient.addColorStop(1, 'violet');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 1);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    return texture;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      // Gentle floating and breathing
      group.current.position.y = Math.sin(t * 1.5) * 0.15;
      group.current.rotation.y = Math.sin(t * 0.4) * 0.1;
      
      // Subtle tilt
      group.current.rotation.z = Math.sin(t * 0.8) * 0.05;
    }
    
    // Flowing Rainbow LED Animation
    if (visorRef.current) {
        rainbowTexture.offset.x = (t * 0.3) % 1; // Flowing animation
    }
    
    // Blinking Eyes
    if (eyesRef.current) {
        const isBlinking = (t % 4.5) < 0.15;
        eyesRef.current.scale.y = isBlinking ? 0.05 : 1;
    }

    // Thruster Pulse
    if (thrusterRef.current) {
        thrusterRef.current.children.forEach((thruster, i) => {
            thruster.material.emissiveIntensity = 4 + Math.sin(t * 10 + i) * 2;
        });
    }
  });

  return (
    <group 
      ref={group} 
      {...props} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
    >
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
        {/* 1. THE HEAD - Dark Gunmetal with Antenna */}
        <group position={[0, 1.4, 0]}>
            <RoundedBox args={[1.7, 1.5, 1.3]} radius={0.15} smoothness={10} castShadow>
                <meshStandardMaterial color="#0f172a" roughness={0.25} metalness={0.9} />
            </RoundedBox>
            
            {/* Antenna */}
            <group position={[0, 0.75, 0]}>
                <mesh castShadow>
                    <cylinderGeometry args={[0.02, 0.04, 0.3, 16]} />
                    <meshStandardMaterial color="#374151" metalness={1} />
                </mesh>
                <mesh position={[0, 0.2, 0]}>
                    <sphereGeometry args={[0.06, 16, 16]} />
                    <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={5} />
                </mesh>
            </group>

            {/* Side Glow Button (Amber) */}
            <mesh position={[0.86, 0.1, 0]} rotation={[0, Math.PI / 2, 0]}>
                <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
                <meshStandardMaterial color="#1f2937" metalness={0.8} />
                <mesh position={[0, 0, 0.03]}>
                    <circleGeometry args={[0.1, 32]} />
                    <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={3} />
                </mesh>
            </mesh>

            {/* THE VISOR AREA */}
            <group position={[0, 0, 0.61]}>
                {/* Black Screen Background */}
                <mesh>
                    <RoundedBox args={[1.4, 1.15, 0.05]} radius={0.1} smoothness={5}>
                        <meshStandardMaterial color="#000000" roughness={0.05} metalness={1} />
                    </RoundedBox>
                </mesh>

                {/* THE RAINBOW LED FRAME (Vibrant & High-Pop Multi-color) */}
                <mesh ref={visorRef} position={[0, 0, -0.01]}>
                    <RoundedBox args={[1.55, 1.3, 0.05]} radius={0.12} smoothness={5}>
                        <meshStandardMaterial 
                            map={rainbowTexture}
                            emissiveMap={rainbowTexture}
                            emissiveIntensity={8} 
                            emissive="#ffffff"
                            toneMapped={false}
                        />
                    </RoundedBox>
                </mesh>

                {/* THE EYES (Large White Circular Glow) */}
                <group ref={eyesRef} position={[0, 0, 0.08]}>
                    <mesh position={[-0.35, 0, 0]}>
                        <circleGeometry args={[0.16, 32]} />
                        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={10} />
                    </mesh>
                    <mesh position={[0.35, 0, 0]}>
                        <circleGeometry args={[0.16, 32]} />
                        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={10} />
                    </mesh>
                </group>
            </group>
        </group>

        {/* 2. THE BODY - Chucky mechanical gunmetal */}
        <group position={[0, 0, 0]}>
            <RoundedBox args={[1.3, 1.2, 1.1]} radius={0.25} smoothness={8} castShadow>
                <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.8} />
            </RoundedBox>
            
            {/* AMBER CHEST PANEL ACCENTS */}
            <group position={[0, 0.3, 0.56]}>
                <mesh position={[-0.15, 0, 0]}>
                    <boxGeometry args={[0.15, 0.1, 0.05]} />
                    <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={4} />
                </mesh>
                <mesh position={[0.15, 0, 0]}>
                    <boxGeometry args={[0.15, 0.1, 0.05]} />
                    <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={4} />
                </mesh>
            </group>
        </group>

        {/* 3. THE ARMS - Segmented Mechanical */}
        {/* Left Arm */}
        <group position={[-0.8, 0.2, 0]} rotation={[0, 0, 0.3]}>
            <mesh castShadow>
                <cylinderGeometry args={[0.18, 0.22, 0.6, 16]} />
                <meshStandardMaterial color="#1e293b" metalness={0.8} />
            </mesh>
            {/* Claws/Hand */}
            <mesh position={[0, -0.35, 0]}>
                <sphereGeometry args={[0.22, 16, 16]} />
                <meshStandardMaterial color="#0f172a" metalness={1} />
            </mesh>
        </group>
        {/* Right Arm */}
        <group position={[0.8, 0.2, 0]} rotation={[0, 0, -0.3]}>
            <mesh castShadow>
                <cylinderGeometry args={[0.18, 0.22, 0.6, 16]} />
                <meshStandardMaterial color="#1e293b" metalness={0.8} />
            </mesh>
            {/* Claws/Hand */}
            <mesh position={[0, -0.35, 0]}>
                <sphereGeometry args={[0.22, 16, 16]} />
                <meshStandardMaterial color="#0f172a" metalness={1} />
            </mesh>
        </group>

        {/* 4. THE FEET - With Thruster Glow */}
        <group ref={thrusterRef}>
            <group position={[-0.35, -0.7, 0]}>
                <RoundedBox args={[0.45, 0.25, 0.5]} radius={0.1} smoothness={4} castShadow>
                    <meshStandardMaterial color="#1e293b" metalness={0.9} />
                </RoundedBox>
                {/* Thruster Glow Bottom */}
                <mesh position={[0, -0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <circleGeometry args={[0.22, 32]} />
                    <meshStandardMaterial 
                        color="#fbbf24" 
                        emissive="#fbbf24" 
                        emissiveIntensity={8} 
                        toneMapped={false}
                    />
                </mesh>
            </group>
            <group position={[0.35, -0.7, 0]}>
                <RoundedBox args={[0.45, 0.25, 0.5]} radius={0.1} smoothness={4} castShadow>
                    <meshStandardMaterial color="#1e293b" metalness={0.9} />
                </RoundedBox>
                {/* Thruster Glow Bottom */}
                <mesh position={[0, -0.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <circleGeometry args={[0.22, 32]} />
                    <meshStandardMaterial 
                        color="#fbbf24" 
                        emissive="#fbbf24" 
                        emissiveIntensity={8} 
                        toneMapped={false}
                    />
                </mesh>
            </group>
        </group>
      </Float>

      {/* RENDER-STYLE RIM LIGHTING (Internal Mock) */}
      <pointLight position={[0, 2, -3]} intensity={5} color="#ffffff" />
      <pointLight position={[2, 0, -2]} intensity={3} color="#fbbf24" />
    </group>
  );
};

export default Mascot;





