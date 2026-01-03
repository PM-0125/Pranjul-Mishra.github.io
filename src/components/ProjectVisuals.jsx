import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, Cylinder, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

// INFERMed: Multiple Pills showing drug interactions
export function DrugMolecules({ position = [0, 0, 0], scale = 1 }) {
    const group = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.005;
            group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    const pills = [
        { pos: [-0.9, 0.4, 0], rot: Math.PI / 4, color: "#3b82f6" },
        { pos: [0.9, 0.4, 0], rot: -Math.PI / 6, color: "#06b6d4" },
        { pos: [-0.5, -0.5, 0.3], rot: Math.PI / 3, color: "#8b5cf6" },
        { pos: [0.5, -0.5, -0.3], rot: -Math.PI / 4, color: "#10b981" },
        { pos: [0, 0, 0.5], rot: 0, color: "#f59e0b" },
    ];

    return (
        <group ref={group} position={position} scale={scale * 0.8}>
            {pills.map((pill, i) => (
                <group key={i} position={pill.pos} rotation={[0, 0, pill.rot]}>
                    <Cylinder args={[0.18, 0.18, 0.6, 12]}>
                        <meshStandardMaterial color={pill.color} roughness={0.3} metalness={0.4} />
                    </Cylinder>
                    <Sphere args={[0.18, 12, 12]} position={[0, 0.3, 0]}>
                        <meshStandardMaterial color={pill.color} roughness={0.3} metalness={0.4} />
                    </Sphere>
                    <Sphere args={[0.18, 12, 12]} position={[0, -0.3, 0]}>
                        <meshStandardMaterial color={pill.color} roughness={0.3} metalness={0.4} />
                    </Sphere>
                </group>
            ))}

            {/* Connection particles showing interactions */}
            {[...Array(6)].map((_, i) => {
                const angle = (i / 6) * Math.PI * 2;
                return (
                    <Sphere key={`particle-${i}`} args={[0.05, 8, 8]} position={[Math.cos(angle) * 0.6, Math.sin(angle) * 0.6, 0]}>
                        <meshBasicMaterial color="#22d3ee" transparent opacity={0.7} />
                    </Sphere>
                );
            })}
        </group>
    );
}

// SvPhaser: Chromosome with Structural Variant markers
export function StructuralVariants({ position = [0, 0, 0], scale = 1 }) {
    const group = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.007;
            group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
        }
    });

    return (
        <group ref={group} position={position} scale={scale}>
            {/* Main chromosome segments */}
            <Box args={[1.5, 0.15, 0.15]} position={[-0.4, 0, 0]}>
                <meshStandardMaterial color="#f59e0b" roughness={0.4} />
            </Box>
            <Box args={[1.2, 0.15, 0.15]} position={[0.5, 0, 0]}>
                <meshStandardMaterial color="#f59e0b" roughness={0.4} />
            </Box>

            {/* Variant markers - deletions/insertions */}
            <Sphere args={[0.15, 16, 16]} position={[0.2, 0, 0]}>
                <meshStandardMaterial color="#ef4444" emissive="#dc2626" emissiveIntensity={0.5} />
            </Sphere>
            <Sphere args={[0.12, 16, 16]} position={[-1, 0, 0]}>
                <meshStandardMaterial color="#ec4899" emissive="#be185d" emissiveIntensity={0.5} />
            </Sphere>
            <Sphere args={[0.12, 16, 16]} position={[1, 0, 0]}>
                <meshStandardMaterial color="#8b5cf6" emissive="#7c3aed" emissiveIntensity={0.5} />
            </Sphere>

            {/* Inversion arc */}
            <Torus args={[0.4, 0.04, 8, 32]} position={[-0.4, 0.4, 0]} rotation={[0, Math.PI / 2, 0]}>
                <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.3} />
            </Torus>

            {/* Duplication markers */}
            <Box args={[0.25, 0.08, 0.08]} position={[0.6, 0.3, 0]}>
                <meshStandardMaterial color="#10b981" emissive="#059669" emissiveIntensity={0.4} />
            </Box>
            <Box args={[0.25, 0.08, 0.08]} position={[0.6, -0.3, 0]}>
                <meshStandardMaterial color="#10b981" emissive="#059669" emissiveIntensity={0.4} />
            </Box>

            {/* Break points */}
            {[-0.3, 0.3].map((x, i) => (
                <Cylinder key={i} args={[0.02, 0.02, 0.4, 8]} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <meshBasicMaterial color="#fb923c" transparent opacity={0.6} />
                </Cylinder>
            ))}
        </group>
    );
}

// LOPHOS: Multiple Chromatin Loops
export function ChromatinLoops({ position = [0, 0, 0], scale = 1 }) {
    const group = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.006;
            group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
        }
    });

    return (
        <group ref={group} position={position} scale={scale}>
            {/* Loop 1 - Main large loop */}
            <Torus args={[0.65, 0.08, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial color="#ef4444" emissive="#991b1b" emissiveIntensity={0.2} />
            </Torus>

            {/* Loop 2 - Secondary loop */}
            <Torus args={[0.5, 0.07, 16, 32]} rotation={[Math.PI / 3, Math.PI / 4, 0]} position={[0.2, 0, 0.1]}>
                <meshStandardMaterial color="#f87171" emissive="#b91c1c" emissiveIntensity={0.2} />
            </Torus>

            {/* Loop 3 - Tertiary loop */}
            <Torus args={[0.35, 0.06, 16, 32]} rotation={[-Math.PI / 3, -Math.PI / 6, 0]} position={[-0.2, 0.1, -0.1]}>
                <meshStandardMaterial color="#fca5a5" emissive="#dc2626" emissiveIntensity={0.2} />
            </Torus>

            {/* Peak/binding site markers */}
            <Sphere args={[0.12, 16, 16]} position={[0.65, 0, 0]}>
                <meshStandardMaterial color="#fcd34d" emissive="#f59e0b" emissiveIntensity={0.5} />
            </Sphere>
            <Sphere args={[0.12, 16, 16]} position={[-0.65, 0, 0]}>
                <meshStandardMaterial color="#fcd34d" emissive="#f59e0b" emissiveIntensity={0.5} />
            </Sphere>
            <Sphere args={[0.12, 16, 16]} position={[0, 0, 0.65]}>
                <meshStandardMaterial color="#fcd34d" emissive="#f59e0b" emissiveIntensity={0.5} />
            </Sphere>
            <Sphere args={[0.12, 16, 16]} position={[0, 0, -0.65]}>
                <meshStandardMaterial color="#fcd34d" emissive="#f59e0b" emissiveIntensity={0.5} />
            </Sphere>
        </group>
    );
}
