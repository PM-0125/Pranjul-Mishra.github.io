import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere } from '@react-three/drei';

// Graduation Cap and Diploma - represents academic achievement
export function GraduationSymbol({ position = [0, 0, 0], scale = 1 }) {
    const group = useRef();
    const capRef = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.004;
        }
        if (capRef.current) {
            capRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
        }
    });

    return (
        <group ref={group} position={position} scale={scale}>
            {/* Graduation Cap */}
            <group ref={capRef}>
                {/* Cap top (mortarboard) */}
                <Box args={[1, 0.05, 1]} position={[0, 0.5, 0]}>
                    <meshStandardMaterial
                        color="#1e40af"
                        emissive="#1e3a8a"
                        emissiveIntensity={0.2}
                        roughness={0.3}
                        metalness={0.5}
                    />
                </Box>

                {/* Button on top */}
                <Cylinder args={[0.08, 0.08, 0.05, 16]} position={[0, 0.55, 0]}>
                    <meshStandardMaterial color="#fbbf24" metalness={0.8} />
                </Cylinder>

                {/* Tassel */}
                <Cylinder args={[0.02, 0.02, 0.3, 8]} position={[0.45, 0.4, 0]}>
                    <meshStandardMaterial color="#fbbf24" />
                </Cylinder>
                <Sphere args={[0.05, 16, 16]} position={[0.45, 0.2, 0]}>
                    <meshStandardMaterial color="#f59e0b" />
                </Sphere>

                {/* Cap base */}
                <Cylinder args={[0.35, 0.35, 0.3, 32]} position={[0, 0.3, 0]}>
                    <meshStandardMaterial color="#2563eb" roughness={0.4} />
                </Cylinder>
            </group>

            {/* Diploma scrolls stacked */}
            {[-0.5, -0.3, -0.1].map((zPos, i) => (
                <group key={i} position={[0, -0.2 - i * 0.15, zPos]} rotation={[Math.PI / 2, 0, i * 0.2]}>
                    <Cylinder args={[0.08, 0.08, 0.6, 16]}>
                        <meshStandardMaterial
                            color={i === 0 ? "#fef3c7" : i === 1 ? "#fde68a" : "#fcd34d"}
                            roughness={0.6}
                        />
                    </Cylinder>
                </group>
            ))}

            {/* Achievement stars */}
            {[0, 1, 2].map((i) => {
                const angle = (i / 3) * Math.PI * 2;
                return (
                    <Sphere
                        key={`star-${i}`}
                        args={[0.06, 16, 16]}
                        position={[Math.cos(angle) * 0.7, 0.6 + Math.sin(angle) * 0.2, Math.sin(angle) * 0.7]}
                    >
                        <meshStandardMaterial
                            color="#fbbf24"
                            emissive="#f59e0b"
                            emissiveIntensity={0.5}
                        />
                    </Sphere>
                );
            })}
        </group>
    );
}
