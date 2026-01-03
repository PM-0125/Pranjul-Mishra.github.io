import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere } from '@react-three/drei';

// Research Documents Stack - represents publications
export function DocumentStack({ position = [0, 0, 0], scale = 1 }) {
    const group = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.003;
            group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
        }
    });

    const papers = [
        { y: 0, size: 0.7, color: '#3b82f6', offset: 0 },
        { y: 0.12, size: 0.65, color: '#60a5fa', offset: 0.05 },
        { y: 0.24, size: 0.6, color: '#93c5fd', offset: 0.1 },
        { y: 0.36, size: 0.55, color: '#bfdbfe', offset: 0.15 },
    ];

    return (
        <group ref={group} position={position} scale={scale}>
            {/* Document pages/papers */}
            {papers.map((paper, i) => (
                <Box
                    key={i}
                    args={[paper.size, 0.02, paper.size * 0.7]}
                    position={[paper.offset, paper.y, 0]}
                    rotation={[0, i * 0.1, 0]}
                >
                    <meshStandardMaterial
                        color={paper.color}
                        emissive={paper.color}
                        emissiveIntensity={0.2}
                        roughness={0.5}
                        metalness={0.1}
                    />
                </Box>
            ))}

            {/* Citation markers - floating spheres */}
            {[0, 1, 2].map((i) => {
                const angle = (i / 3) * Math.PI * 2;
                return (
                    <Sphere
                        key={`cite-${i}`}
                        args={[0.06, 16, 16]}
                        position={[Math.cos(angle) * 0.6, 0.5 + i * 0.1, Math.sin(angle) * 0.6]}
                    >
                        <meshStandardMaterial
                            color="#22d3ee"
                            emissive="#0ea5e9"
                            emissiveIntensity={0.5}
                        />
                    </Sphere>
                );
            })}

            {/* DOI/Link indicator */}
            <Cylinder
                args={[0.03, 0.03, 0.5, 8]}
                position={[0.5, 0.2, 0]}
                rotation={[0, 0, Math.PI / 2]}
            >
                <meshBasicMaterial color="#60a5fa" transparent opacity={0.4} />
            </Cylinder>
        </group>
    );
}
