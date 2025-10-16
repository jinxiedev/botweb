'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function SpaceEnvironment() {
  const sunRef = useRef<THREE.Group>(null);
  const moonRef = useRef<THREE.Group>(null);
  const asteroidsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    // Sun rotation
    if (sunRef.current) {
      sunRef.current.rotation.y = t * 0.1;
    }
    
    // Moon orbit around the scene
    if (moonRef.current) {
      moonRef.current.position.x = Math.cos(t * 0.3) * 12;
      moonRef.current.position.z = Math.sin(t * 0.3) * 12;
      moonRef.current.rotation.y = t * 0.2;
    }
    
    // Asteroids rotation
    if (asteroidsRef.current) {
      asteroidsRef.current.rotation.y = t * 0.05;
    }
  });

  // Generate asteroid positions
  const asteroidPositions = Array.from({ length: 15 }, (_, i) => {
    const angle = (i / 15) * Math.PI * 2;
    const radius = 15 + Math.random() * 5;
    const height = (Math.random() - 0.5) * 10;
    return {
      x: Math.cos(angle) * radius,
      y: height,
      z: Math.sin(angle) * radius,
      scale: 0.1 + Math.random() * 0.3,
      rotationSpeed: 0.5 + Math.random() * 1,
    };
  });

  return (
    <group>
      {/* Sun - positioned to the side */}
      <group ref={sunRef} position={[15, 8, -20]}>
        <Sphere args={[3, 64, 64]}>
          <meshStandardMaterial 
            color="#FFA500" 
            emissive="#FF6600" 
            emissiveIntensity={2.5}
            roughness={0.7}
            metalness={0.2}
          />
        </Sphere>
        {/* Sun corona glow layers */}
        <Sphere args={[3.3, 32, 32]}>
          <meshBasicMaterial 
            color="#FFD700" 
            transparent 
            opacity={0.5}
            depthWrite={false}
          />
        </Sphere>
        <Sphere args={[3.8, 32, 32]}>
          <meshBasicMaterial 
            color="#FF8C00" 
            transparent 
            opacity={0.3}
            depthWrite={false}
          />
        </Sphere>
        <Sphere args={[4.3, 32, 32]}>
          <meshBasicMaterial 
            color="#FF6600" 
            transparent 
            opacity={0.15}
            depthWrite={false}
          />
        </Sphere>
        
        {/* Enhanced Sun light */}
        <pointLight 
          position={[0, 0, 0]} 
          intensity={3} 
          color="#FFB366" 
          distance={60}
          decay={2}
        />
      </group>

      {/* Moon - orbiting */}
      <group ref={moonRef} position={[12, 5, 0]}>
        <Sphere args={[1.2, 64, 64]}>
          <meshStandardMaterial 
            color="#D3D3D3" 
            roughness={0.85}
            metalness={0.1}
          />
        </Sphere>
        {/* Moon subtle glow */}
        <Sphere args={[1.35, 32, 32]}>
          <meshBasicMaterial 
            color="#FFFFFF" 
            transparent 
            opacity={0.2}
            depthWrite={false}
          />
        </Sphere>
        <pointLight 
          position={[0, 0, 0]} 
          intensity={0.8} 
          color="#E8E8E8" 
          distance={18}
          decay={2}
        />
      </group>

      {/* Asteroids ring */}
      <group ref={asteroidsRef}>
        {asteroidPositions.map((pos, i) => (
          <Asteroid 
            key={i}
            position={[pos.x, pos.y, pos.z]}
            scale={pos.scale}
            rotationSpeed={pos.rotationSpeed}
          />
        ))}
      </group>

      {/* Distant stars (small spheres with varied colors) */}
      {Array.from({ length: 150 }, (_, i) => {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const radius = 40 + Math.random() * 20;
        const size = 0.03 + Math.random() * 0.08;
        const colors = ['#FFFFFF', '#FFE4B5', '#B0E0E6', '#FFB6C1', '#E6E6FA'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <mesh
            key={i}
            position={[
              radius * Math.sin(phi) * Math.cos(theta),
              radius * Math.sin(phi) * Math.sin(theta),
              radius * Math.cos(phi),
            ]}
          >
            <sphereGeometry args={[size, 8, 8]} />
            <meshBasicMaterial 
              color={color} 
              transparent 
              opacity={0.7 + Math.random() * 0.3}
            />
          </mesh>
        );
      })}

      {/* Nebula effect - colorful background glow */}
      <mesh position={[10, 5, -35]} rotation={[0, 0.3, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshBasicMaterial 
          color="#8b5cf6"
          transparent
          opacity={0.12}
          depthWrite={false}
          side={2}
        />
      </mesh>
      <mesh position={[-15, -5, -38]} rotation={[0, -0.3, 0]}>
        <planeGeometry args={[35, 35]} />
        <meshBasicMaterial 
          color="#ec4899"
          transparent
          opacity={0.1}
          depthWrite={false}
          side={2}
        />
      </mesh>
      <mesh position={[5, -8, -40]} rotation={[0, 0.5, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshBasicMaterial 
          color="#06b6d4"
          transparent
          opacity={0.08}
          depthWrite={false}
          side={2}
        />
      </mesh>
    </group>
  );
}

// Individual Asteroid component
function Asteroid({ position, scale, rotationSpeed }: { 
  position: [number, number, number]; 
  scale: number; 
  rotationSpeed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * rotationSpeed;
      meshRef.current.rotation.y += 0.01 * rotationSpeed;
      // Gentle floating motion
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * rotationSpeed) * 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color="#6B5345" 
        roughness={0.95}
        metalness={0.05}
        emissive="#3d2817"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}


