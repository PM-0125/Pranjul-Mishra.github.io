import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingParticles() {
    const particlesRef = useRef();
    const particleCount = 30;

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * 15;
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 5;
            temp.push({ x, y, z });
        }
        return temp;
    }, []);

    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        particles.forEach((particle, i) => {
            pos[i * 3] = particle.x;
            pos[i * 3 + 1] = particle.y;
            pos[i * 3 + 2] = particle.z;
        });
        return pos;
    }, [particles]);

    useFrame((state) => {
        if (particlesRef.current) {
            const time = state.clock.getElapsedTime();
            const positions = particlesRef.current.geometry.attributes.position;

            particles.forEach((particle, i) => {
                // Very slow, gentle floating motion
                positions.array[i * 3 + 1] = particle.y + Math.sin(time * 0.2 + i) * 0.3;
                positions.array[i * 3] = particle.x + Math.cos(time * 0.15 + i) * 0.2;
            });

            positions.needsUpdate = true;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                color="#22d3ee"
                transparent
                opacity={0.4}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export default function HeroParticles() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
        }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <FloatingParticles />
            </Canvas>
        </div>
    );
}
