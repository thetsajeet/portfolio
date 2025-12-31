"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

interface SnowfallBackgroundProps {
  particleCount?: number;
}

export default function SnowfallBackground({
  particleCount = 100,
}: SnowfallBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const themeRef = useRef(theme);
  const systemThemeRef = useRef(systemTheme);

  const mousePos = useRef({ x: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      mousePos.current.x = window.innerWidth / 2;
    }
  }, []);

  useEffect(() => {
    themeRef.current = theme;
    systemThemeRef.current = systemTheme;
  }, [theme, systemTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Increased size by ~15% (was 1-3, now ~1.2-3.5)
          radius: Math.random() * 2.3 + 1.2,
          speedY: Math.random() * 1 + 0.5, // Fall speed
          speedX: Math.random() * 0.5 - 0.25, // Slight horizontal drift
          opacity: Math.random() * 0.5 + 0.3, // Opacity between 0.3 and 0.8
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Determine color based on theme
      const currentTheme =
        themeRef.current === "system"
          ? systemThemeRef.current
          : themeRef.current;
      const isDark = currentTheme === "dark";

      // White snow for dark mode, dark grey snow for light mode
      const fillStyle = isDark ? "255, 255, 255" : "100, 100, 100";

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${fillStyle}, ${p.opacity})`;
        ctx.fill();
      });
    };

    const updateParticles = () => {
      // Calculate wind based on mouse position relative to center
      // Range: -1 (left) to 1 (right)
      const wind = (mousePos.current.x / canvas.width - 0.5) * 2;

      particles.forEach((p) => {
        p.y += p.speedY;
        // Apply wind influence to horizontal movement
        p.x += p.speedX + wind * 1.5;

        // Reset particle if it goes off screen
        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width) {
          p.x = 0;
        } else if (p.x < 0) {
          p.x = canvas.width;
        }
      });
    };

    const animate = () => {
      drawParticles();
      updateParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mounted, particleCount]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
