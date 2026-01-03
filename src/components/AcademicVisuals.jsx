import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Shopping Template - Geometric UI Cube Stack
export function UIGeometry({ position = [0, 0, 0], scale = 1 }) {
    const group = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.005;
            group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
        }
    });

    return (
        <group ref={group} position={position} scale={scale}>
            {/* Main cube */}
            <Box args={[0.8, 0.8, 0.8]} position={[0, 0, 0]}>
                <meshStandardMaterial
                    color="#06b6d4"
                    emissive="#0891b2"
                    emissiveIntensity={0.2}
                    roughness={0.3}
                    metalness={0.5}
                />
            </Box>

            {/* Smaller cubes floating around */}
            <Box args={[0.3, 0.3, 0.3]} position={[0.6, 0.6, 0]}>
                <meshStandardMaterial color="#22d3ee" roughness={0.4} metalness={0.4} />
            </Box>
            <Box args={[0.25, 0.25, 0.25]} position={[-0.6, -0.5, 0.3]}>
                <meshStandardMaterial color="#67e8f9" roughness={0.4} metalness={0.4} />
            </Box>
            <Box args={[0.2, 0.2, 0.2]} position={[0.5, -0.6, -0.3]}>
                <meshStandardMaterial color="#0891b2" roughness={0.4} metalness={0.4} />
            </Box>

            {/* Frame lines */}
            <Torus args={[0.9, 0.03, 8, 24]} rotation={[Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color="#22d3ee" transparent opacity={0.3} />
            </Torus>
        </group>
    );
}

// Breast Cancer Analysis - Neural Network Visualization
export function NeuralNetwork({ position = [0, 0, 0], scale = 1 }) {
    const group = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.006;
        }
    });

    const layers = [
        { count: 4, x: -0.8, color: "#a855f7" },
        { count: 5, x: 0, color: "#c084fc" },
        { count: 3, x: 0.8, color: "#e9d5ff" }
    ];

    return (
        <group ref={group} position={position} scale={scale}>
            {layers.map((layer, layerIdx) => (
                <group key={layerIdx}>
                    {[...Array(layer.count)].map((_, nodeIdx) => {
                        const y = (nodeIdx - (layer.count - 1) / 2) * 0.4;
                        return (
                            <Sphere key={nodeIdx} args={[0.12, 16, 16]} position={[layer.x, y, 0]}>
                                <meshStandardMaterial
                                    color={layer.color}
                                    emissive={layer.color}
                                    emissiveIntensity={0.3}
                                />
                            </Sphere>
                        );
                    })}
                </group>
            ))}

            {/* Connection lines */}
            {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                return (
                    <mesh key={`line-${i}`} position={[0, 0, 0]}>
                        <boxGeometry args={[1.6, 0.01, 0.01]} />
                        <meshBasicMaterial color="#ec4899" transparent opacity={0.2} />
                    </mesh>
                );
            })}
        </group>
    );
}

// ART + Backprop - Brain/Clustering Structure
export function BrainClusters({ position = [0, 0, 0], scale = 1 }) {
    const group = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y += 0.004;
            group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.12;
        }
    });

    const clusters = [
        { pos: [0, 0, 0], size: 0.3, color: "#f97316" },
        { pos: [0.6, 0.4, 0], size: 0.2, color: "#fb923c" },
        { pos: [-0.6, 0.3, 0.2], size: 0.18, color: "#fdba74" },
        { pos: [0.3, -0.5, -0.3], size: 0.22, color: "#fb923c" },
        { pos: [-0.4, -0.4, 0.3], size: 0.16, color: "#fed7aa" },
    ];

    return (
        <group ref={group} position={position} scale={scale}>
            {/* Central cluster nodes */}
            {clusters.map((cluster, i) => (
                <Sphere key={i} args={[cluster.size, 16, 16]} position={cluster.pos}>
                    <meshStandardMaterial
                        color={cluster.color}
                        emissive={cluster.color}
                        emissiveIntensity={0.3}
                        roughness={0.4}
                    />
                </Sphere>
            ))}

            {/* Connecting rings */}
            <Torus args={[0.7, 0.04, 12, 32]} rotation={[Math.PI / 3, 0, 0]}>
                <meshStandardMaterial color="#ea580c" emissive="#ea580c" emissiveIntensity={0.2} />
            </Torus>
            <Torus args={[0.5, 0.03, 12, 32]} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
                <meshStandardMaterial color="#fb923c" emissive="#fb923c" emissiveIntensity={0.2} />
            </Torus>

            {/* Small orbit particles */}
            {[...Array(6)].map((_, i) => {
                const angle = (i / 6) * Math.PI * 2;
                const radius = 0.85;
                return (
                    <Sphere
                        key={`orbit-${i}`}
                        args={[0.06, 8, 8]}
                        position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
                    >
                        <meshBasicMaterial color="#fdba74" transparent opacity={0.6} />
                    </Sphere>
                );
            })}
        </group>
    );
}
