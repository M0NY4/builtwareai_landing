import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

const ParticleField = ({ count = 120, className = "" }) => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };

    const initParticles = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        pulse: Math.random() * Math.PI,
      }));
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();

    const animate = () => {
      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      ctx.clearRect(0, 0, cw, ch);

      // Smooth mouse movement
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const goldColor = theme === "dark" ? "212, 175, 55" : "184, 134, 11";
      const particles = particlesRef.current;

      // Single pass for particles and parallax
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Parallax
        const parallaxX = (mouseRef.current.x - cw / 2) * (p.z * 0.01);
        const parallaxY = (mouseRef.current.y - ch / 2) * (p.z * 0.01);

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = cw;
        if (p.x > cw) p.x = 0;
        if (p.y < 0) p.y = ch;
        if (p.y > ch) p.y = 0;

        p.pulse += 0.01;
        const currentOpacity = p.opacity * (0.8 + Math.sin(p.pulse) * 0.3);
        const drawX = p.x + parallaxX;
        const drawY = p.y + parallaxY;

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${goldColor}, ${currentOpacity})`;
        ctx.fill();

        // Draw connections (only for a limited number of particles to save O(N^2) cost)
        // Optimized: only check next 15 particles instead of all
        for (let j = i + 1; j < Math.min(i + 15, particles.length); j++) {
          const b = particles[j];
          const dx = p.x - b.x;
          const dy = p.y - b.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 6400) { // 80 * 80
            const dist = Math.sqrt(distSq);
            const parallaxXB = (mouseRef.current.x - cw / 2) * (b.z * 0.01);
            const parallaxYB = (mouseRef.current.y - ch / 2) * (b.z * 0.01);

            ctx.beginPath();
            ctx.moveTo(drawX, drawY);
            ctx.lineTo(b.x + parallaxXB, b.y + parallaxYB);
            ctx.strokeStyle = `rgba(${goldColor}, ${0.03 * (1 - dist / 80)})`;
            ctx.lineWidth = 0.2;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [count, theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{ willChange: "transform", transform: "translateZ(0)" }}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};

export default ParticleField;
