import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TechStack } from './SkillsVisual';

export default function SkillsVisualization() {
    return (
        <div style={{
            width: '200px',
            height: '200px',
            margin: '0 auto 2rem',
        }}>
            <Canvas camera={{ position: [0, 0, 3], fov: 50 }} gl={{ antialias: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <pointLight position={[-5, -3, -5]} intensity={0.5} color="#60a5fa" />
                <TechStack scale={0.9} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.8}
                />
            </Canvas>
        </div>
    );
}
