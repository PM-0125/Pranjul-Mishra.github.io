import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// YouTube Logo - Red rounded rectangle with white play button
export function PlayButtonVisualization({ position = [0, 0, 0], scale = 1 }) {
    const group = useRef();
    const playRef = useRef();

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
            group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
        }
        if (playRef.current) {
            const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.03;
            playRef.current.scale.setScalar(1 + pulse);
        }
    });

    // Create play triangle shape
    const playShape = new THREE.Shape();
    playShape.moveTo(0, 0.25);
    playShape.lineTo(0, -0.25);
    playShape.lineTo(0.35, 0);
    playShape.lineTo(0, 0.25);

    const extrudeSettings = {
        depth: 0.1,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.02,
        bevelSegments: 3
    };

    return (
        <group ref={group} position={position} scale={scale}>
            {/* YouTube Red Background - Rounded Rectangle */}
            <RoundedBox
                args={[1.4, 1, 0.15]}
                radius={0.15}
                smoothness={4}
            >
                <meshStandardMaterial
                    color="#FF0000"
                    emissive="#CC0000"
                    emissiveIntensity={0.3}
                    metalness={0.1}
                    roughness={0.3}
                />
            </RoundedBox>

            {/* White Play Triangle */}
            <group ref={playRef} position={[0.05, 0, 0.08]}>
                <mesh rotation={[0, 0, 0]}>
                    <extrudeGeometry args={[playShape, extrudeSettings]} />
                    <meshStandardMaterial
                        color="#FFFFFF"
                        emissive="#FFFFFF"
                        emissiveIntensity={0.2}
                        metalness={0.1}
                        roughness={0.3}
                    />
                </mesh>
            </group>

            {/* Subtle glow effect behind */}
            <RoundedBox
                args={[1.5, 1.1, 0.05]}
                radius={0.15}
                smoothness={4}
                position={[0, 0, -0.1]}
            >
                <meshBasicMaterial
                    color="#FF0000"
                    transparent
                    opacity={0.2}
                />
            </RoundedBox>
        </group>
    );
}
