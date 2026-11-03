'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ArrowRight, Boxes, Scale, CheckCircle2 } from 'lucide-react';
import { Reveal, Stagger, StaggerItem, MagneticButton } from '@/components/motion/Reveal';
import { easeOutExpo, viewportOnce } from '@/lib/motion';

export function IngotShowcase() {
  const ingotCanvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ingotCanvasRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf4f7fa);

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 300;
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 1.6, 4.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x2878c8, 0.6);
    fillLight.position.set(-3, -1, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.0);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    // Create 3D Ingot Shape: Tapered Trapezoidal Block
    // Ingot geometry: wider top, tapered bottom for mould release
    const ingotGroup = new THREE.Group();
    scene.add(ingotGroup);

    // Ingot body using cylinder with 4 segments or custom box
    const ingotGeo = new THREE.BoxGeometry(2.2, 0.75, 1.1, 4, 4, 4);
    // Deform box slightly to simulate cast ingot draft angle (taper)
    const pos = ingotGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      if (y < 0) {
        // Taper bottom
        pos.setX(i, pos.getX(i) * 0.88);
        pos.setZ(i, pos.getZ(i) * 0.88);
      }
    }
    ingotGeo.computeVertexNormals();

    // Metallic Cast Silver PBR Material
    const ingotMaterial = new THREE.MeshStandardMaterial({
      color: 0xd6dde5,
      metalness: 0.92,
      roughness: 0.32,
    });

    const ingotMesh = new THREE.Mesh(ingotGeo, ingotMaterial);
    ingotGroup.add(ingotMesh);

    // Initial angle
    ingotGroup.rotation.x = 0.4;
    ingotGroup.rotation.y = -0.5;

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ingotGroup.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      ingotGeo.dispose();
      ingotMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-brand-ice relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, ease: easeOutExpo }}
          >
            <motion.div
              className="relative h-64 sm:h-72 w-full rounded-2xl bg-white border border-brand-border overflow-hidden shadow-subtle"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
            >
              <div ref={ingotCanvasRef} className="w-full h-full cursor-grab" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-white/90 backdrop-blur-sm border border-slate-200 text-[11px] font-bold uppercase tracking-wider text-brand-navy shadow-subtle flex items-center gap-1.5">
                <Boxes className="w-3.5 h-3.5 text-brand-blue" />
                <span>3D Ingot Metallurgical Preview</span>
              </div>
              <div className="absolute bottom-3 right-3 text-[10px] text-brand-text-secondary bg-white/80 px-2 py-0.5 rounded">
                Cast Remelt Ingot Geometry
              </div>
            </motion.div>

            <motion.div
              className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-elevated border border-white group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35 }}
            >
              <Image
                src="/images/aluminium-ingots.jpg"
                alt="Stacked cast aluminium ingots"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                  Foundry Distribution Stock
                </span>
                <div className="text-sm font-semibold">Bundled & Strapped for Reliable Logistics</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
          >
            <Reveal direction="blur">
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-brand-navy tracking-tight leading-tight">
                STRENGTH AT <br />
                <span className="text-brand-blue">THE CORE.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-base sm:text-lg text-brand-text leading-relaxed">
                Santoshi Metal Industries manufactures and supplies aluminium remelt ingots engineered
                to serve as dependable feedstock for casting units, high-pressure die casters, and
                extrusion alloy formulation.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-sm text-brand-text-secondary leading-relaxed">
                Our casting methodology focuses on controlled melt refining, effective degassing, and
                dross minimization to deliver reliable batch-to-batch fluidity and metallurgical
                integrity for foundry partners across India.
              </p>
            </Reveal>

            <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2" fast>
              <StaggerItem>
                <motion.div
                  className="p-3.5 rounded-xl bg-white border border-brand-border/80 h-full"
                  whileHover={{ y: -3, borderColor: 'rgba(40,120,200,0.35)' }}
                >
                  <div className="text-xs font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                    Controlled Trace Chemistry
                  </div>
                  <p className="text-[11px] text-brand-text-secondary">
                    Refined melt processing to minimize inclusion defects and trapped porosity in castings.
                  </p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div
                  className="p-3.5 rounded-xl bg-white border border-brand-border/80 h-full"
                  whileHover={{ y: -3, borderColor: 'rgba(40,120,200,0.35)' }}
                >
                  <div className="text-xs font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-brand-blue" />
                    Optimised Remelt Efficiency
                  </div>
                  <p className="text-[11px] text-brand-text-secondary">
                    Tapered ingot profile facilitating fast heat absorption and lower energy consumption in crucible furnaces.
                  </p>
                </motion.div>
              </StaggerItem>
            </Stagger>

            <Reveal delay={0.2} className="pt-4 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-brand-blue text-white font-semibold text-sm shadow-metallic hover:bg-brand-blue-hover transition-all"
                >
                  <span>Request Ingot Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/capabilities/aluminium-ingots"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white text-brand-navy font-semibold text-sm border border-brand-border hover:bg-slate-50 transition-colors"
                >
                  <span>Technical Specifications</span>
                </Link>
              </MagneticButton>
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

