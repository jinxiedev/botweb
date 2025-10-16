'use client';

import { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Mesh, Group, TextureLoader } from 'three';
import { RoundedBox } from '@react-three/drei';

export function RobotBot() {
  const groupRef = useRef<Group>(null);
  const headRef = useRef<Group>(null);
  const antennaRef = useRef<Mesh>(null);
  const leftArmRef = useRef<Group>(null);
  const rightArmRef = useRef<Group>(null);
  const leftLegRef = useRef<Group>(null);
  const rightLegRef = useRef<Group>(null);
  
  const [logoTexture] = useState(() => {
    const loader = new TextureLoader();
    return loader.load('https://up.lauma.icu/k3cvdh.avif');
  });

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    // Body movement - floating and gentle rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.15 + t * 0.05;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.3;
      groupRef.current.position.x = Math.cos(t * 0.2) * 0.1;
    }
    
    // Head movement - look around
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 0.8) * 0.3;
      headRef.current.rotation.z = Math.sin(t * 2) * 0.08;
    }
    
    // Antenna bobbing
    if (antennaRef.current) {
      antennaRef.current.rotation.z = Math.sin(t * 3) * 0.15;
    }
    
    // Arms swinging
    if (leftArmRef.current) {
      leftArmRef.current.rotation.x = Math.sin(t * 1.5) * 0.3;
      leftArmRef.current.rotation.z = Math.sin(t * 2) * 0.1;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.x = Math.sin(t * 1.5 + Math.PI) * 0.3;
      rightArmRef.current.rotation.z = Math.sin(t * 2) * 0.1;
    }
    
    // Legs movement - walking motion
    if (leftLegRef.current) {
      leftLegRef.current.rotation.x = Math.sin(t * 2) * 0.2;
    }
    if (rightLegRef.current) {
      rightLegRef.current.rotation.x = Math.sin(t * 2 + Math.PI) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Head */}
      <group ref={headRef} position={[0, 1.5, 0]}>
        <RoundedBox args={[1.2, 1, 1]} radius={0.1} smoothness={4}>
          <meshStandardMaterial 
            color="#a78bfa" 
            metalness={0.7} 
            roughness={0.2}
            emissive="#7c3aed"
            emissiveIntensity={0.2}
          />
        </RoundedBox>
        
        {/* Eyes */}
        <mesh position={[-0.3, 0.15, 0.52]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[0.3, 0.15, 0.52]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.8} />
        </mesh>
        
        {/* Mouth line */}
        <mesh position={[0, -0.15, 0.52]}>
          <boxGeometry args={[0.5, 0.05, 0.05]} />
          <meshStandardMaterial color="#1e1b4b" />
        </mesh>
        
        {/* Antenna */}
        <group ref={antennaRef} position={[0, 0.6, 0]}>
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.4, 8]} />
            <meshStandardMaterial color="#6366f1" />
          </mesh>
          <mesh position={[0, 0.45, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.5} />
          </mesh>
        </group>
      </group>

      {/* Body */}
      <RoundedBox args={[1.4, 1.8, 0.8]} radius={0.15} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#9333ea" 
          metalness={0.6} 
          roughness={0.3}
          emissive="#7c3aed"
          emissiveIntensity={0.15}
        />
      </RoundedBox>
      
      {/* Screen/Display */}
      <mesh position={[0, 0.2, 0.42]}>
        <boxGeometry args={[0.9, 0.7, 0.05]} />
        <meshStandardMaterial color="#1e1b4b" emissive="#4f46e5" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Logo image with texture */}
      <mesh position={[0, 0.2, 0.46]}>
        <planeGeometry args={[0.7, 0.7]} />
        <meshStandardMaterial map={logoTexture} transparent />
      </mesh>

      {/* Arms with animation refs */}
      <group ref={leftArmRef} position={[-0.95, 0.1, 0]}>
        <RoundedBox args={[0.3, 1.2, 0.3]} radius={0.05} smoothness={4}>
          <meshStandardMaterial 
            color="#818cf8" 
            metalness={0.7} 
            roughness={0.2}
            emissive="#6366f1"
            emissiveIntensity={0.1}
          />
        </RoundedBox>
      </group>
      <group ref={rightArmRef} position={[0.95, 0.1, 0]}>
        <RoundedBox args={[0.3, 1.2, 0.3]} radius={0.05} smoothness={4}>
          <meshStandardMaterial 
            color="#818cf8" 
            metalness={0.7} 
            roughness={0.2}
            emissive="#6366f1"
            emissiveIntensity={0.1}
          />
        </RoundedBox>
      </group>

      {/* Legs with animation refs */}
      <group ref={leftLegRef} position={[-0.4, -1.35, 0]}>
        <RoundedBox args={[0.35, 1.0, 0.35]} radius={0.05} smoothness={4}>
          <meshStandardMaterial 
            color="#818cf8" 
            metalness={0.7} 
            roughness={0.2}
            emissive="#6366f1"
            emissiveIntensity={0.1}
          />
        </RoundedBox>
      </group>
      <group ref={rightLegRef} position={[0.4, -1.35, 0]}>
        <RoundedBox args={[0.35, 1.0, 0.35]} radius={0.05} smoothness={4}>
          <meshStandardMaterial 
            color="#818cf8" 
            metalness={0.7} 
            roughness={0.2}
            emissive="#6366f1"
            emissiveIntensity={0.1}
          />
        </RoundedBox>
      </group>

      {/* Feet */}
      <RoundedBox args={[0.4, 0.2, 0.6]} radius={0.05} smoothness={4} position={[-0.4, -1.95, 0.1]}>
        <meshStandardMaterial 
          color="#6366f1" 
          metalness={0.8} 
          roughness={0.15}
          emissive="#4338ca"
          emissiveIntensity={0.15}
        />
      </RoundedBox>
      <RoundedBox args={[0.4, 0.2, 0.6]} radius={0.05} smoothness={4} position={[0.4, -1.95, 0.1]}>
        <meshStandardMaterial 
          color="#6366f1" 
          metalness={0.8} 
          roughness={0.15}
          emissive="#4338ca"
          emissiveIntensity={0.15}
        />
      </RoundedBox>
    </group>
  );
}

