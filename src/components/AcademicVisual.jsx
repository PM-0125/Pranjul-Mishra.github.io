import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { UIGeometry, NeuralNetwork, BrainClusters } from './AcademicVisuals';

export default function AcademicVisual({ visualType = 'ui' }) {
    const VisualComponent = {
        ui: UIGeometry,              // Shopping Template
        neural: NeuralNetwork,        // Breast Cancer
        brain: BrainClusters,         // ART
    }[visualType] || UIGeometry;

    return (
        <div style={{
            width: '100%',
            height: '200px',
            borderRadius: '8px',
        }}>
            <Canvas camera={{ position: [0, 0, 3], fov: 50 }} gl={{ antialias: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <pointLight position={[-5, -3, -5]} intensity={0.5} color="#60a5fa" />
                <VisualComponent scale={1} />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={1}
                />
            </Canvas>
        </div>
    );
}
