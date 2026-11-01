"use client";

import { useRef, useMemo, useSyncExternalStore } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

interface AnodisedProfileViewerProps {
  finishColor?: string;
  metalness?: number;
  roughness?: number;
}

// 3D Architectural Extrusion Geometry (Mullion / Aerodynamic Profile)
function AluminiumExtrusionMesh({
  finishColor = "#C8D1D9",
  metalness = 0.92,
  roughness = 0.28,
}: AnodisedProfileViewerProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Slow continuous rotation
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.35;
    }
  });

  // Construct realistic architectural aluminium extrusion cross-section
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-1.2, -1.8);
    shape.lineTo(1.2, -1.8);
    shape.lineTo(1.2, -1.5);
    shape.lineTo(0.3, -1.5);
    shape.lineTo(0.3, -0.2);
    shape.lineTo(1.0, -0.2);
    shape.lineTo(1.0, 0.2);
    shape.lineTo(0.3, 0.2);
    shape.lineTo(0.3, 1.5);
    shape.lineTo(1.2, 1.5);
    shape.lineTo(1.2, 1.8);
    shape.lineTo(-1.2, 1.8);
    shape.lineTo(-1.2, 1.5);
    shape.lineTo(-0.3, 1.5);
    shape.lineTo(-0.3, 0.2);
    shape.lineTo(-1.0, 0.2);
    shape.lineTo(-1.0, -0.2);
    shape.lineTo(-0.3, -0.2);
    shape.lineTo(-0.3, -1.5);
    shape.lineTo(-1.2, -1.5);
    shape.closePath();

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      steps: 2,
      depth: 4.5,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.04,
      bevelSegments: 4,
    };

    const geom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geom.center();
    return geom;
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          color={finishColor}
          metalness={metalness}
          roughness={roughness}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
}

const emptySubscribe = () => () => {};

export default function AnodisedProfileViewer({
  finishColor = "#C8D1D9",
  metalness = 0.92,
  roughness = 0.28,
}: AnodisedProfileViewerProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isClient) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#131E29]/60 rounded-2xl border border-white/5">
        <div className="text-xs font-mono uppercase tracking-widest text-[#A8B4C0] animate-pulse">
          Loading 3D Anodised Substrate...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 1.5, 6.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={2.2} color="#FFFFFF" />
        <directionalLight position={[-6, -4, -4]} intensity={1.5} color="#DFAC6C" />
        <pointLight position={[0, 4, 2]} intensity={1.2} color="#A8B4C0" />

        <AluminiumExtrusionMesh
          finishColor={finishColor}
          metalness={metalness}
          roughness={roughness}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
        />
      </Canvas>

      {/* Floating 3D Interaction Badge */}
      <div className="absolute bottom-4 left-4 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-mono tracking-wider text-slate-700 shadow-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C6924D] animate-ping" />
        <span>Drag to rotate • Real-time PBR metal material</span>
      </div>
    </div>
  );
}
