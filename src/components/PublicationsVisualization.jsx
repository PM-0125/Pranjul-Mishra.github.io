import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { DocumentStack } from './PublicationVisual';

export default function PublicationsVisualization() {
    return (
        <div style={{
            width: '200px',
            height: '200px',
            margin: '0 auto 2rem',
        }}>
            <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }} gl={{ antialias: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <pointLight position={[-5, -3, -5]} intensity={0.5} color="#60a5fa" />
                <DocumentStack scale={1} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.7}
                />
            </Canvas>
        </div>
    );
}
