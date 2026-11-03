'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { finishesData, FinishOption } from '@/data/finishes';
import { Sparkles, RotateCw, Check, Info, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FinishStudio() {
  const [selectedFinish, setSelectedFinish] = useState<FinishOption>(finishesData[0]);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const directionalLightRef = useRef<THREE.DirectionalLight | null>(null);
  const isDraggingRef = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const meshGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // Camera
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.5);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(4, 5, 4);
    scene.add(dirLight1);
    directionalLightRef.current = dirLight1;

    const dirLight2 = new THREE.DirectionalLight(0xdce4ec, 0.9);
    dirLight2.position.set(-4, -2, -3);
    scene.add(dirLight2);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.2);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // Create 3D Architectural Extrusion Profile Mesh Group
    const profileGroup = new THREE.Group();
    meshGroupRef.current = profileGroup;
    scene.add(profileGroup);

    // Extrude Shape for hollow architectural profile
    const shape = new THREE.Shape();
    const outer = 1.0;
    const inner = 0.82;
    // Outer square
    shape.moveTo(-outer, -outer);
    shape.lineTo(outer, -outer);
    shape.lineTo(outer, outer);
    shape.lineTo(-outer, outer);
    shape.closePath();

    // Inner hole for architectural extrusion
    const hole = new THREE.Path();
    hole.moveTo(-inner, -inner);
    hole.lineTo(-inner, inner);
    hole.lineTo(inner, inner);
    hole.lineTo(inner, -inner);
    hole.closePath();
    shape.holes.push(hole);

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      steps: 1,
      depth: 3.2,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.04,
      bevelSegments: 4,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    // PBR Material matching initial finish
    const initialFinish = finishesData[0];
    const pbrMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(initialFinish.colorHex),
      metalness: initialFinish.metalness,
      roughness: initialFinish.roughness,
    });
    materialRef.current = pbrMaterial;

    const profileMesh = new THREE.Mesh(geometry, pbrMaterial);
    profileGroup.add(profileMesh);

    // Subtle internal structural rib to look like an authentic precision extrusion
    const ribGeo = new THREE.BoxGeometry(0.12, 1.7, 3.2);
    const ribMesh = new THREE.Mesh(ribGeo, pbrMaterial);
    profileGroup.add(ribMesh);

    // Initial slight rotation for attractive architectural presentation
    profileGroup.rotation.x = 0.35;
    profileGroup.rotation.y = -0.65;

    // Interactive Drag Controls for Rotation
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !profileGroup) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      profileGroup.rotation.y += deltaX * 0.008;
      profileGroup.rotation.x += deltaY * 0.008;

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || !profileGroup || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.current.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.current.y;

      profileGroup.rotation.y += deltaX * 0.01;
      profileGroup.rotation.x += deltaY * 0.01;

      previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onMouseUp);

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Slow gentle auto-rotation when not user-dragging
      if (!isDraggingRef.current && profileGroup) {
        profileGroup.rotation.y += 0.004;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
      geometry.dispose();
      ribGeo.dispose();
      pbrMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  // Update material whenever selectedFinish changes
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.color.set(selectedFinish.colorHex);
      materialRef.current.metalness = selectedFinish.metalness;
      materialRef.current.roughness = selectedFinish.roughness;
      materialRef.current.needsUpdate = true;
    }
  }, [selectedFinish.colorHex, selectedFinish.metalness, selectedFinish.roughness]);

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-navy tracking-tight">
            EXPLORE THE BEAUTY OF <span className="text-brand-blue">ALUMINIUM.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-text-secondary">
            Inspect our demonstration surface finishes on a realistic 3D architectural extruded profile.
            Click or touch to rotate the 3D model in real time.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-ice/60 rounded-3xl p-6 sm:p-10 border border-brand-border shadow-elevated"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="lg:col-span-7 relative h-[380px] sm:h-[480px] w-full rounded-2xl bg-white border border-brand-border overflow-hidden shadow-subtle">
            <div ref={canvasContainerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

            {/* Hint overlay */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-md border border-slate-200 text-xs font-semibold text-brand-text flex items-center gap-2 shadow-subtle pointer-events-none">
              <RotateCw className="w-3.5 h-3.5 text-brand-blue animate-spin" style={{ animationDuration: '6s' }} />
              <span>Drag to rotate 3D profile</span>
            </div>

            {/* Current Active Finish Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-brand-border shadow-subtle">
              <div className="text-[11px] font-bold uppercase tracking-wider text-brand-blue">
                {selectedFinish.category}
              </div>
              <div className="text-sm font-bold text-brand-navy">{selectedFinish.name}</div>
            </div>
          </div>

          {/* Right: Interactive Finish Options (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-1">
                Select Finish Profile
              </h3>
              <p className="text-xs text-brand-text-secondary">
                Switch between anodised and powder-coated surface demonstrations.
              </p>
            </div>

            {/* Finish Swatch Buttons */}
            <div className="space-y-2.5">
              {finishesData.map((finish) => {
                const isSelected = selectedFinish.id === finish.id;
                return (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinish(finish)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-white border-brand-blue shadow-subtle ring-2 ring-brand-blue/20'
                        : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Swatch circle */}
                      <span
                        className="w-7 h-7 rounded-full shadow-inner border border-slate-300/80 shrink-0"
                        style={{ backgroundColor: finish.colorHex }}
                      />
                      <div>
                        <div className="text-sm font-bold text-brand-navy flex items-center gap-2">
                          <span>{finish.name}</span>
                          {isSelected && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-brand-blue-light text-brand-blue">
                              Active
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-brand-text-secondary">
                          {finish.category}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isSelected ? (
                        <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <span className="text-xs text-slate-400 font-mono">
                          {finish.colorHex}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Finish Description Card */}
            <div className="p-4 rounded-xl bg-white border border-brand-border/80 text-xs text-brand-text-secondary leading-relaxed">
              <strong className="text-brand-navy block mb-1">Finish Characteristics:</strong>
              <p>{selectedFinish.description}</p>
            </div>

            {/* Illustrative Disclaimer (Required by prompt) */}
            <div className="flex items-start gap-2 text-[11px] text-slate-500 bg-slate-100/70 p-3 rounded-lg border border-slate-200">
              <Info className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
              <span>
                Demonstration finishes shown for architectural visualization. Custom formulations,
                gloss levels, and RAL color matching are coordinated upon technical review.
              </span>
            </div>

            <div>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-blue transition-colors shadow-subtle"
              >
                <span>Request Finish Samples & Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
