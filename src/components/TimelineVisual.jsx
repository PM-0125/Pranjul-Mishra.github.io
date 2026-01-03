import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

// Career Progression Path - ascending steps
export function CareerPath({ position = [0, 0, 0], scale = 1 }) {
    const group = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.004;
        }
    });

    const steps = [
        { y: -0.6, size: 0.5, color: '#60a5fa' },
        { y: -0.2, size: 0.45, color: '#3b82f6' },
        { y: 0.2, size: 0.4, color: '#2563eb' },
        { y: 0.6, size: 0.35, color: '#1d4ed8' },
    ];

    return (
        <group ref={group} position={position} scale={scale}>
            {/* Ascending steps */}
            {steps.map((step, i) => (
                <Box
                    key={i}
                    args={[step.size, 0.15, step.size]}
                    position={[0, step.y, 0]}
                >
                    <meshStandardMaterial
                        color={step.color}
                        emissive={step.color}
                        emissiveIntensity={0.3}
                        roughness={0.3}
                        metalness={0.5}
                    />
                </Box>
            ))}

            {/* Progress markers on steps */}
            {steps.map((step, i) => (
                <Sphere
                    key={`marker-${i}`}
                    args={[0.08, 16, 16]}
                    position={[step.size * 0.35, step.y + 0.1, 0]}
                >
                    <meshStandardMaterial
                        color="#22d3ee"
                        emissive="#22d3ee"
                        emissiveIntensity={0.6}
                    />
                </Sphere>
            ))}

            {/* Connecting path cylinders */}
            {steps.slice(0, -1).map((step, i) => {
                const nextStep = steps[i + 1];
                const height = nextStep.y - step.y;
                const midY = (step.y + nextStep.y) / 2;

                return (
                    <Cylinder
                        key={`path-${i}`}
                        args={[0.02, 0.02, height, 8]}
                        position={[step.size * 0.35, midY, 0]}
                    >
                        <meshBasicMaterial
                            color="#60a5fa"
                            transparent
                            opacity={0.4}
                        />
                    </Cylinder>
                );
            })}

            {/* Success indicator at top */}
            <Sphere args={[0.15, 32, 32]} position={[0, 0.85, 0]}>
                <meshStandardMaterial
                    color="#22d3ee"
                    emissive="#0ea5e9"
                    emissiveIntensity={0.5}
                    metalness={0.8}
                    roughness={0.2}
                />
            </Sphere>

            {/* Upward arrow particles */}
            {[0, 1, 2].map((i) => (
                <Box
                    key={`arrow-${i}`}
                    args={[0.05, 0.15, 0.05]}
                    position={[-0.5, -0.4 + i * 0.3, 0]}
                    rotation={[0, 0, Math.PI / 4]}
                >
                    <meshBasicMaterial
                        color="#93c5fd"
                        transparent
                        opacity={0.6}
                    />
                </Box>
            ))}
        </group>
    );
}
