"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  glow: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface BokehOrb {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
  pulsePhase: number;
}

interface TumblingPolygon {
  x: number;
  y: number;
  size: number;
  rot: number;
  rotSpeed: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Light Theme Palette: Metallic silver, refined champagne gold, warm sunlight amber
    const emberColors = [
      "rgba(198, 146, 77, ",  // Champagne gold #C6924D
      "rgba(217, 119, 6, ",   // Amber gold #D97706
      "rgba(148, 163, 184, ", // Slate silver #94A3B8
      "rgba(245, 158, 11, ",  // Sunlight glow #F59E0B
      "rgba(100, 116, 139, ", // Deep titanium #64748B
    ];

    // High count of particles tuned for light background
    const particleCount = Math.min(130, Math.floor((width * height) / 9500));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: -Math.random() * 1.4 - 0.3,
        opacity: Math.random() * 0.65 + 0.25,
        color: emberColors[Math.floor(Math.random() * emberColors.length)],
        glow: Math.random() * 14 + 6,
        pulseSpeed: Math.random() * 0.04 + 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Soft luminous bokeh orbs drifting in the light studio environment
    const bokehOrbs: BokehOrb[] = [];
    const orbColors = [
      "rgba(245, 158, 11, ",
      "rgba(198, 146, 77, ",
      "rgba(203, 213, 225, ",
      "rgba(254, 215, 170, ",
    ];
    for (let i = 0; i < 8; i++) {
      bokehOrbs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 85 + 40,
        color: orbColors[i % orbColors.length],
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.12 + 0.05,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Floating 3D tumbling isometric prisms
    const polygons: TumblingPolygon[] = [];
    for (let i = 0; i < 6; i++) {
      polygons.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 24 + 14,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -Math.random() * 0.25 - 0.1,
        opacity: Math.random() * 0.25 + 0.1,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let lastEmitTick = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;

      if (Math.abs(e.movementX) + Math.abs(e.movementY) > 6 && tick - lastEmitTick > 2) {
        lastEmitTick = tick;
        if (particles.length < 160) {
          particles.push({
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 3.5 + 1.5,
            speedX: (Math.random() - 0.5) * 2.5 + e.movementX * 0.12,
            speedY: (Math.random() - 0.5) * 2.5 + e.movementY * 0.12,
            opacity: 0.9,
            color: emberColors[Math.floor(Math.random() * emberColors.length)],
            glow: 18,
            pulseSpeed: 0.08,
            pulsePhase: 0,
          });
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let tick = 0;

    const render = () => {
      tick++;
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // --- LAYER 1: Large Glowing Bokeh Orbs (Light Mode) ---
      for (let i = 0; i < bokehOrbs.length; i++) {
        const orb = bokehOrbs[i];
        orb.x += orb.speedX;
        orb.y += orb.speedY;
        if (orb.x < -orb.radius) orb.x = width + orb.radius;
        if (orb.x > width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = height + orb.radius;
        if (orb.y > height + orb.radius) orb.y = -orb.radius;

        const currentOpacity = orb.opacity * (1 + 0.3 * Math.sin(tick * 0.02 + orb.pulsePhase));
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, orb.color + `${currentOpacity})`);
        gradient.addColorStop(0.6, orb.color + `${currentOpacity * 0.35})`);
        gradient.addColorStop(1, orb.color + "0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- LAYER 2: Tumbling 3D Wireframe Prisms ---
      ctx.lineWidth = 1.2;
      for (let i = 0; i < polygons.length; i++) {
        const poly = polygons[i];
        poly.x += poly.speedX;
        poly.y += poly.speedY;
        poly.rot += poly.rotSpeed;

        if (poly.y < -50) poly.y = height + 50;
        if (poly.x < -50) poly.x = width + 50;
        if (poly.x > width + 50) poly.x = -50;

        ctx.save();
        ctx.translate(poly.x, poly.y);
        ctx.rotate(poly.rot);
        ctx.strokeStyle = `rgba(100, 116, 139, ${poly.opacity})`;
        ctx.beginPath();
        for (let s = 0; s < 6; s++) {
          const angle = (s * Math.PI) / 3;
          const px = Math.cos(angle) * poly.size;
          const py = Math.sin(angle) * poly.size;
          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(poly.size, 0);
        ctx.moveTo(0, 0);
        ctx.lineTo(-poly.size * 0.5, poly.size * 0.86);
        ctx.moveTo(0, 0);
        ctx.lineTo(-poly.size * 0.5, -poly.size * 0.86);
        ctx.stroke();
        ctx.restore();
      }

      // --- LAYER 3: Subtle Laser Scanline ---
      const laserY = ((tick * 1.5) % (height * 1.4)) - height * 0.2;
      const laserGrad = ctx.createLinearGradient(0, laserY, width, laserY);
      laserGrad.addColorStop(0, "rgba(217, 119, 6, 0)");
      laserGrad.addColorStop(0.3, "rgba(245, 158, 11, 0.08)");
      laserGrad.addColorStop(0.5, "rgba(198, 146, 77, 0.16)");
      laserGrad.addColorStop(0.7, "rgba(245, 158, 11, 0.08)");
      laserGrad.addColorStop(1, "rgba(217, 119, 6, 0)");

      ctx.fillStyle = laserGrad;
      ctx.fillRect(0, laserY - 12, width, 24);

      // --- LAYER 4: Constellation Golden Filaments ---
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const alpha = (1 - dist / 115) * 0.28;
            ctx.strokeStyle = `rgba(198, 146, 77, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // --- LAYER 5: Rising Particles & Interactive Mouse Gravity ---
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const mdx = mouseX - p.x;
        const mdy = mouseY - p.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < 200) {
          const force = (1 - mdist / 200) * 1.6;
          p.x -= (mdx / mdist) * force * 1.3;
          p.y -= (mdy / mdist) * force * 1.3;
          p.x += (-mdy / mdist) * force * 1.8;
        }

        p.x += p.speedX + Math.sin(tick * 0.03 + i) * 0.5;
        p.y += p.speedY;

        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        const pulse = Math.sin(tick * p.pulseSpeed + p.pulsePhase);
        const dynamicOpacity = Math.min(1, Math.max(0.18, p.opacity + pulse * 0.2));

        ctx.save();
        ctx.shadowBlur = p.glow;
        ctx.shadowColor = p.color + "0.6)";
        ctx.fillStyle = p.color + dynamicOpacity + ")";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // --- LAYER 6: Subtle Fluid Base Waves ---
      ctx.save();
      const waveY = height - 60;
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 15) {
        const y = waveY + Math.sin(x * 0.008 + tick * 0.03) * 18 + Math.cos(x * 0.015 + tick * 0.02) * 10;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();

      const waveGrad = ctx.createLinearGradient(0, waveY, 0, height);
      waveGrad.addColorStop(0, "rgba(226, 232, 240, 0.4)");
      waveGrad.addColorStop(1, "rgba(241, 245, 249, 0)");
      ctx.fillStyle = waveGrad;
      ctx.fill();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
}
