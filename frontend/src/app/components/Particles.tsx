import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(undefined);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = 0;
      mouseRef.current.y = 0;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      // Reduce particle count for better performance
      const particleCount = window.innerWidth < 768 ? 40 : 60; // Responsive particle count

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2.8, // 0.7 * 4 = 2.8 (slower speed)
          vy: (Math.random() - 0.5) * 2.8, // 0.7 * 4 = 2.8 (slower speed)
          size: Math.random() * 3 + 1, // Smaller particles
          opacity: 0.5, // Opacity: 0.5 from config, random: false
        });
      }
      particlesRef.current = particles;
    };

    // Animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Mouse interaction (repulse mode from config)
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200 && mouseRef.current.x > 0) { // repulse distance: 200
          const force = (200 - distance) / 200;
          particle.vx -= (dx / distance) * force * 0.05;
          particle.vy -= (dy / distance) * force * 0.05;
        }

        // Update position (speed: 6 from config)
        particle.x += particle.vx;
        particle.y += particle.vy;

        // No damping for particles.js style
        // particle.vx *= 0.99;
        // particle.vy *= 0.99;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${particle.opacity})`; // Color: #000000 from config
        ctx.fill();

        // Draw connections (optimized - only check nearby particles)
        const startIndex = Math.max(0, particlesRef.current.indexOf(particle) + 1);
        for (let j = startIndex; j < particlesRef.current.length; j++) {
          const otherParticle = particlesRef.current[j];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) { // Reduced distance for better performance
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.3 * (1 - distance / 120)})`; // Reduced opacity
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ zIndex: 1 }}
    />
  );
};

export default Particles;
