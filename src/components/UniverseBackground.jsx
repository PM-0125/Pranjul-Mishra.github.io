import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedStarfield() {
    const starsRef = useRef();

    useFrame((state) => {
        if (starsRef.current) {
            // Very slow rotation for subtle depth
            starsRef.current.rotation.y += 0.00003;
            starsRef.current.rotation.x += 0.000015;
        }
    });

    return (
        <Stars
            ref={starsRef}
            radius={300}
            depth={60}
            count={8000}
            factor={4}
            saturation={0}
            fade
            speed={0.01}
        />
    );
}

export default function UniverseBackground() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            background: 'linear-gradient(to bottom, #000000, #0a0a1a, #000000)',
        }}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.2} />
                <AnimatedStarfield />
            </Canvas>
        </div>
    );
}
