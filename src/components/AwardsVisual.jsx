import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Sphere, Torus } from '@react-three/drei';

// Trophy and Achievement Medals - represents awards
export function TrophyVisualization({ position = [0, 0, 0], scale = 1 }) {
    const group = useRef();
    const trophyRef = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.004;
        }
        if (trophyRef.current) {
            trophyRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
        }
    });

    return (
        <group ref={group} position={position} scale={scale}>
            {/* Main Trophy */}
            <group ref={trophyRef}>
                {/* Trophy cup */}
                <Cylinder args={[0.25, 0.15, 0.4, 32]} position={[0, 0.4, 0]}>
                    <meshStandardMaterial
                        color="#fbbf24"
                        emissive="#f59e0b"
                        emissiveIntensity={0.3}
                        metalness={0.9}
                        roughness={0.1}
                    />
                </Cylinder>

                {/* Trophy handles */}
                <Torus args={[0.2, 0.03, 8, 16]}
                    position={[-0.25, 0.4, 0]}
                    rotation={[0, 0, Math.PI / 2]}
                >
                    <meshStandardMaterial color="#fbbf24" metalness={0.8} />
                </Torus>
                <Torus args={[0.2, 0.03, 8, 16]}
                    position={[0.25, 0.4, 0]}
                    rotation={[0, 0, -Math.PI / 2]}
                >
                    <meshStandardMaterial color="#fbbf24" metalness={0.8} />
                </Torus>

                {/* Trophy base */}
                <Cylinder args={[0.3, 0.35, 0.15, 32]} position={[0, 0.08, 0]}>
                    <meshStandardMaterial color="#b45309" metalness={0.7} />
                </Cylinder>

                {/* Trophy star on top */}
                <Sphere args={[0.08, 8, 8]} position={[0, 0.65, 0]}>
                    <meshStandardMaterial
                        color="#fef3c7"
                        emissive="#fbbf24"
                        emissiveIntensity={0.8}
                    />
                </Sphere>
            </group>

            {/* Achievement medals orbiting */}
            {[0, 1, 2, 3].map((i) => {
                const angle = (i / 4) * Math.PI * 2;
                const radius = 0.7;
                const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#ec4899'];

                return (
                    <group
                        key={i}
                        position={[
                            Math.cos(angle) * radius,
                            0.3 + Math.sin(angle) * 0.2,
                            Math.sin(angle) * radius
                        ]}
                    >
                        {/* Medal circle */}
                        <Cylinder args={[0.12, 0.12, 0.05, 32]} rotation={[Math.PI / 2, 0, 0]}>
                            <meshStandardMaterial
                                color={colors[i]}
                                emissive={colors[i]}
                                emissiveIntensity={0.3}
                                metalness={0.8}
                            />
                        </Cylinder>

                        {/* Medal ribbon */}
                        <Cylinder args={[0.02, 0.02, 0.2, 8]} position={[0, 0.15, 0]}>
                            <meshStandardMaterial color={colors[i]} />
                        </Cylinder>
                    </group>
                );
            })}

            {/* Award stars floating */}
            {[0, 1, 2].map((i) => (
                <Sphere
                    key={`star-${i}`}
                    args={[0.05, 8, 8]}
                    position={[-0.6 + i * 0.6, 0.8, 0]}
                >
                    <meshStandardMaterial
                        color="#fbbf24"
                        emissive="#f59e0b"
                        emissiveIntensity={0.6}
                    />
                </Sphere>
            ))}
        </group>
    );
}
