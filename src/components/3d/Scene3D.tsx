'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { RobotBot } from './RobotBot';
import { ParticleField } from './ParticleField';
import { SpaceEnvironment } from './SpaceEnvironment';
import { Suspense } from 'react';

function SceneContent() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.8} />
      
      {/* Main lights */}
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-5, 5, 5]} intensity={1.2} color="#ffffff" />
      
      {/* Accent lights */}
      <pointLight position={[0, 8, 0]} intensity={1.5} color="#ec4899" distance={20} />
      <pointLight position={[5, 0, 5]} intensity={1} color="#8b5cf6" distance={15} />
      <pointLight position={[-5, 0, -5]} intensity={1} color="#06b6d4" distance={15} />
      
      {/* Fill light from below */}
      <hemisphereLight intensity={0.5} groundColor="#1a0f2e" color="#ffffff" />
      
      {/* Space background */}
      <color attach="background" args={['#0a0118']} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Space Environment - Sun, Moon, Asteroids */}
      <SpaceEnvironment />
      
      {/* 3D Models - floating in space */}
      <ParticleField />
      <RobotBot />
    </>
  );
}

export function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}

