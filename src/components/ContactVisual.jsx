import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder } from '@react-three/drei';

// Animated Envelope/Message Icon
export function ContactVisualization({ position = [0, 0, 0], scale = 1 }) {
    const group = useRef();
    const envelopeRef = useRef();
    const messageRef = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
        if (envelopeRef.current) {
            envelopeRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
        }
        if (messageRef.current) {
            messageRef.current.position.y = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.03;
        }
    });

    return (
        <group ref={group} position={position} scale={scale}>
            {/* Envelope */}
            <group ref={envelopeRef}>
                {/* Envelope body */}
                <Box args={[1.2, 0.8, 0.05]} position={[0, 0, 0]}>
                    <meshStandardMaterial
                        color="#3b82f6"
                        emissive="#2563eb"
                        emissiveIntensity={0.2}
                        roughness={0.3}
                    />
                </Box>

                {/* Envelope flap top */}
                <group position={[0, 0.4, 0.03]} rotation={[Math.PI * 0.15, 0, 0]}>
                    <mesh>
                        <boxGeometry args={[1.2, 0.8, 0.02]} />
                        <meshStandardMaterial
                            color="#60a5fa"
                            emissive="#3b82f6"
                            emissiveIntensity={0.2}
                            roughness={0.3}
                        />
                    </mesh>
                </group>

                {/* Seal */}
                <Cylinder args={[0.15, 0.15, 0.05, 32]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.15, 0.08]}>
                    <meshStandardMaterial
                        color="#fbbf24"
                        emissive="#f59e0b"
                        emissiveIntensity={0.4}
                        metalness={0.6}
                    />
                </Cylinder>
            </group>

            {/* Floating Message Lines */}
            <group ref={messageRef} position={[0, 0.3, 0]}>
                {[-0.15, 0, 0.15].map((y, i) => (
                    <Box
                        key={i}
                        args={[0.6 - i * 0.1, 0.03, 0.02]}
                        position={[0, y, 0]}
                    >
                        <meshStandardMaterial
                            color="#22d3ee"
                            emissive="#06b6d4"
                            emissiveIntensity={0.3}
                        />
                    </Box>
                ))}
            </group>

            {/* Orbiting Contact Icons */}
            {[0, 1, 2, 3].map((i) => {
                const angle = (i / 4) * Math.PI * 2;
                const radius = 0.9;
                const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b'];

                return (
                    <Sphere
                        key={i}
                        args={[0.08, 16, 16]}
                        position={[
                            Math.cos(angle + Date.now() * 0.0005) * radius,
                            Math.sin(angle) * 0.2,
                            Math.sin(angle + Date.now() * 0.0005) * radius
                        ]}
                    >
                        <meshStandardMaterial
                            color={colors[i]}
                            emissive={colors[i]}
                            emissiveIntensity={0.5}
                        />
                    </Sphere>
                );
            })}
        </group>
    );
}
