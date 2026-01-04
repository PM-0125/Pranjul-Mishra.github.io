import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TrophyVisualization } from './AwardsVisual';

export default function AwardsVisualization() {
    return (
        <div style={{
            width: '200px',
            height: '200px',
            margin: '0 auto 2rem',
        }}>
            <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }} gl={{ antialias: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />
                <pointLight position={[-5, -3, -5]} intensity={0.5} color="#fbbf24" />
                <pointLight position={[5, 3, 5]} intensity={0.3} color="#f59e0b" />
                <TrophyVisualization scale={0.9} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.6}
                />
            </Canvas>
        </div>
    );
}
