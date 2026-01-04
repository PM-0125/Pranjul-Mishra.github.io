import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere, Torus } from '@react-three/drei';

// Tech Stack Visualization - floating code blocks and connections
export function TechStack({ position = [0, 0, 0], scale = 1 }) {
    const group = useRef();
    const orbitRef = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.003;
        }
        if (orbitRef.current) {
            orbitRef.current.rotation.z += 0.005;
        }
    });

    // Tech layers
    const layers = [
        { y: 0.6, size: 0.3, color: '#3b82f6', name: 'AI' },
        { y: 0.2, size: 0.35, color: '#10b981', name: 'Python' },
        { y: -0.2, size: 0.4, color: '#f59e0b', name: 'ML' },
        { y: -0.6, size: 0.35, color: '#8b5cf6', name: 'Data' },
    ];

    return (
        <group ref={group} position={position} scale={scale}>
            {/* Central core - represents skill foundation */}
            <Sphere args={[0.2, 32, 32]}>
                <meshStandardMaterial
                    color="#22d3ee"
                    emissive="#0ea5e9"
                    emissiveIntensity={0.5}
                    metalness={0.8}
                    roughness={0.2}
                />
            </Sphere>

            {/* Tech stack layers */}
            {layers.map((layer, i) => (
                <Box
                    key={i}
                    args={[layer.size, 0.1, layer.size]}
                    position={[0, layer.y, 0]}
                    rotation={[0, i * 0.3, 0]}
                >
                    <meshStandardMaterial
                        color={layer.color}
                        emissive={layer.color}
                        emissiveIntensity={0.3}
                        roughness={0.4}
                        metalness={0.4}
                        transparent
                        opacity={0.8}
                    />
                </Box>
            ))}

            {/* Connecting lines between layers */}
            {layers.slice(0, -1).map((layer, i) => {
                const nextLayer = layers[i + 1];
                const height = layer.y - nextLayer.y;
                const midY = (layer.y + nextLayer.y) / 2;

                return (
                    <Cylinder
                        key={`conn-${i}`}
                        args={[0.015, 0.015, height, 8]}
                        position={[0, midY, 0]}
                    >
                        <meshBasicMaterial color="#60a5fa" transparent opacity={0.3} />
                    </Cylinder>
                );
            })}

            {/* Orbiting skill nodes */}
            <group ref={orbitRef}>
                {[0, 1, 2, 3, 4, 5].map((i) => {
                    const angle = (i / 6) * Math.PI * 2;
                    const radius = 0.8;
                    return (
                        <Sphere
                            key={`orbit-${i}`}
                            args={[0.06, 16, 16]}
                            position={[Math.cos(angle) * radius, Math.sin(angle) * 0.3, Math.sin(angle) * radius]}
                        >
                            <meshStandardMaterial
                                color={['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4', '#ec4899'][i]}
                                emissive={['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4', '#ec4899'][i]}
                                emissiveIntensity={0.5}
                            />
                        </Sphere>
                    );
                })}
            </group>

            {/* Orbit ring */}
            <Torus args={[0.85, 0.02, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color="#60a5fa" transparent opacity={0.2} />
            </Torus>
        </group>
    );
}
