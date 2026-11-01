'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface LiquidAluminiumWaveProps {
  className?: string;
}

export function LiquidAluminiumWave({ className = '' }: LiquidAluminiumWaveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // Camera setup
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Texture loader with the authentic uploaded silver aluminium wave image
    const textureLoader = new THREE.TextureLoader();
    const waveTexture = textureLoader.load('/images/silver-wave.jpg');
    waveTexture.wrapS = THREE.MirroredRepeatWrapping;
    waveTexture.wrapT = THREE.ClampToEdgeWrapping;
    waveTexture.minFilter = THREE.LinearMipmapLinearFilter;
    waveTexture.magFilter = THREE.LinearFilter;

    // Custom Shader Material for Liquid Silver Aluminium
    // Produces authentic flowing liquid wave deformation + metallic reflection highlights
    const customMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: waveTexture },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uScroll: { value: 0 },
        uAspect: { value: width / height },
        uReducedMotion: { value: prefersReducedMotion ? 1.0 : 0.0 },
      },
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uScroll;
        uniform float uReducedMotion;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldNormal;

        void main() {
          vUv = uv;
          vec3 pos = position;

          // Organic flowing wave deformation resembling polished liquid aluminium
          float speed = uReducedMotion > 0.5 ? 0.0 : uTime * 0.55;
          
          // Primary horizontal travelling wave
          float wave1 = sin(pos.x * 0.9 - speed * 1.2) * 0.45;
          // Secondary harmonic wave creating ribbon undulations
          float wave2 = cos(pos.x * 1.8 + pos.y * 1.2 - speed * 0.8) * 0.22;
          // Tertiary micro-ripple for liquid metal tension
          float wave3 = sin(pos.x * 3.2 - pos.y * 2.0 - speed * 1.5) * 0.08;

          // Compound z displacement
          pos.z += (wave1 + wave2 + wave3) * (1.0 - uScroll * 0.4);

          // Subtle vertical displacement
          pos.y += sin(pos.x * 0.8 + speed * 0.5) * 0.18;
          
          // Interactive mouse influence on wave depth
          float mouseDist = length(pos.xy - uMouse * 4.0);
          pos.z += exp(-mouseDist * 0.4) * 0.25;

          // Scroll reaction: sink wave subtly on scroll
          pos.y -= uScroll * 2.5;

          vPosition = pos;

          // Calculate normal perturbation from wave derivatives for realistic specular sheen
          float dx = 0.9 * cos(pos.x * 0.9 - speed * 1.2) * 0.45 
                   - 1.8 * sin(pos.x * 1.8 + pos.y * 1.2 - speed * 0.8) * 0.22;
          float dy = -1.2 * sin(pos.x * 1.8 + pos.y * 1.2 - speed * 0.8) * 0.22;
          
          vec3 modifiedNormal = normalize(vec3(-dx, -dy, 1.0));
          vNormal = normalMatrix * modifiedNormal;
          vWorldNormal = (modelMatrix * vec4(modifiedNormal, 0.0)).xyz;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uScroll;
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec3 vWorldNormal;

        void main() {
          // Flowing UV mapping with subtle liquid propagation
          vec2 uv = vUv;
          float speed = uTime * 0.04;
          
          // Gentle horizontal UV slide
          uv.x = fract(uv.x + speed * 0.25);
          
          // Micro-ripple deformation on UV texture
          uv.y += sin(uv.x * 8.0 + uTime * 0.8) * 0.015;
          uv.x += cos(uv.y * 6.0 + uTime * 0.6) * 0.012;

          vec4 texColor = texture2D(uTexture, uv);

          // Physically-based studio lighting vectors
          vec3 viewDir = normalize(vec3(0.0, 0.0, 8.5) - vPosition);
          vec3 normal = normalize(vNormal);

          // Primary key light (Top-Left cool studio light)
          vec3 lightDir1 = normalize(vec3(-1.5, 2.5, 3.0));
          float diff1 = max(dot(normal, lightDir1), 0.0);
          vec3 half1 = normalize(lightDir1 + viewDir);
          float spec1 = pow(max(dot(normal, half1), 0.0), 38.0);

          // Moving interactive specular light tracking mouse
          vec3 mouseLightDir = normalize(vec3(uMouse.x * 4.0, uMouse.y * 3.0 + 1.0, 2.5));
          vec3 halfMouse = normalize(mouseLightDir + viewDir);
          float mouseSpec = pow(max(dot(normal, halfMouse), 0.0), 45.0);

          // Soft rim light (Right-side specular glancing angle)
          vec3 lightDir2 = normalize(vec3(2.0, -1.0, 2.0));
          float rim = 1.0 - max(dot(viewDir, normal), 0.0);
          rim = pow(rim, 3.2);

          // Authentic Polished Silver Aluminium Palette
          vec3 baseSilver = vec3(0.92, 0.94, 0.97);
          vec3 deepSilver = vec3(0.68, 0.72, 0.78);
          vec3 brightHighlight = vec3(1.0, 1.0, 1.0);
          vec3 royalBlueGlint = vec3(0.16, 0.47, 0.78); // 10% premium brand blue hint
          vec3 copperGlint = vec3(0.92, 0.44, 0.12);    // Luminous copper reflection matching official logo

          // Composite metallic shading with texture
          vec3 color = mix(texColor.rgb, baseSilver, 0.35);
          color = mix(deepSilver, color, diff1 * 0.6 + 0.4);
          
          // Add specular highlights (pure white chrome glints)
          color += brightHighlight * spec1 * 0.85;
          color += brightHighlight * mouseSpec * 0.95;
          color += royalBlueGlint * mouseSpec * 0.15; // Elegant brand blue reflection
          color += copperGlint * mouseSpec * 0.09;    // Warm internal metallic copper rim
          color += brightHighlight * rim * 0.4;

          // Pure white background blend at top, bottom, and edges
          // Smoothly fades to #FFFFFF so the wave floats gracefully on white
          float edgeAlphaY = smoothstep(0.0, 0.12, vUv.y) * smoothstep(1.0, 0.88, vUv.y);
          float edgeAlphaX = smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x);
          float alpha = edgeAlphaY * edgeAlphaX;

          // Blend into pure white #ffffff
          vec3 finalColor = mix(vec3(1.0, 1.0, 1.0), color, alpha);

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
      transparent: false,
      side: THREE.DoubleSide,
    });

    // Create ribbon plane geometry with high tessellation for silky wave deformation
    // Width 15, Height 5.5, 160 x 80 segments
    const geometry = new THREE.PlaneGeometry(15, 5.5, 160, 80);
    const waveMesh = new THREE.Mesh(geometry, customMaterial);
    waveMesh.position.set(0.6, -0.65, 0); // Position wave dynamically in lower-center
    scene.add(waveMesh);

    // Additional secondary metallic layer mesh for ribbon layering effect
    const secondaryGeometry = new THREE.PlaneGeometry(14, 3.8, 120, 60);
    const secondaryMaterial = customMaterial.clone();
    secondaryMaterial.uniforms = {
      ...customMaterial.uniforms,
      uTime: { value: 0 },
    };
    const secondaryMesh = new THREE.Mesh(secondaryGeometry, secondaryMaterial);
    secondaryMesh.position.set(-0.4, -0.9, -0.35);
    scene.add(secondaryMesh);

    // Mouse coordinates tracking with smooth damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x;
      mouse.targetY = y;
    };

    // Scroll tracking
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY / (window.innerHeight || 800);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      customMaterial.uniforms.uAspect.value = newWidth / newHeight;
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Update uniforms
      customMaterial.uniforms.uTime.value = elapsedTime;
      customMaterial.uniforms.uMouse.value.set(mouse.x, mouse.y);
      customMaterial.uniforms.uScroll.value = Math.min(scrollY, 1.5);

      secondaryMaterial.uniforms.uTime.value = elapsedTime * 0.95 + 1.4;
      secondaryMaterial.uniforms.uMouse.value.set(mouse.x, mouse.y);
      secondaryMaterial.uniforms.uScroll.value = Math.min(scrollY, 1.5);

      // Subtle camera tilt for luxury depth
      camera.position.x = mouse.x * 0.45;
      camera.position.y = mouse.y * 0.35 - Math.min(scrollY, 1.0) * 0.8;
      camera.lookAt(0, -0.4, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      secondaryGeometry.dispose();
      customMaterial.dispose();
      secondaryMaterial.dispose();
      waveTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none pointer-events-auto ${className}`}
      style={{ background: '#FFFFFF' }}
    >
      {/* Fallback image if WebGL is unsupported */}
      {!webglSupported && (
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-700"
          style={{
            backgroundImage: "url('/images/silver-wave.jpg')",
            backgroundPosition: 'center 60%',
          }}
        />
      )}

      {/* Subtle radial light gradient overlay for photographic studio depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(244,247,250,0.6)_0%,transparent_70%)]" />

      {/* Soft gradient bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
    </div>
  );
}

