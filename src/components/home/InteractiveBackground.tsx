import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  speed: number;
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initParticles = (width: number, height: number) => {
      const particleCount = Math.floor((width * height) / 12000);
      particlesRef.current = [];
      
      for (let i = 0; i < Math.min(particleCount, 150); i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particlesRef.current.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 2.5 + 1,
          speed: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const updateDimensions = () => {
      // Use window dimensions as fallback for reliable sizing
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width;
      canvas.height = height;
      initParticles(width, height);
      setIsReady(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const connectionDistance = 150;
      const mouseRadius = 200;

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Mouse interaction - particles move away from cursor
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius && distance > 0) {
          const force = (mouseRadius - distance) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          particle.x -= Math.cos(angle) * force * 4;
          particle.y -= Math.sin(angle) * force * 4;
        } else {
          // Return to base position
          particle.x += (particle.baseX - particle.x) * 0.03;
          particle.y += (particle.baseY - particle.y) * 0.03;
        }

        // Add subtle floating motion
        particle.x += Math.sin(Date.now() * 0.001 * particle.speed + i) * 0.3;
        particle.y += Math.cos(Date.now() * 0.001 * particle.speed + i) * 0.3;

        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, "rgba(0, 180, 230, 0.9)");
        gradient.addColorStop(1, "rgba(0, 180, 230, 0)");
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw solid core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 180, 230, 0.8)";
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const connDx = particle.x - other.x;
          const connDy = particle.y - other.y;
          const connDistance = Math.sqrt(connDx * connDx + connDy * connDy);

          if (connDistance < connectionDistance) {
            const opacity = (1 - connDistance / connectionDistance) * 0.4;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 180, 230, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse if close
        if (distance < connectionDistance * 1.5 && distance > 0) {
          const opacity = (1 - distance / (connectionDistance * 1.5)) * 0.6;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 180, 230, ${opacity})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Delay initialization to ensure DOM is ready
    const initTimeout = setTimeout(() => {
      updateDimensions();
      animate();
    }, 100);

    window.addEventListener("resize", updateDimensions);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener("resize", updateDimensions);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ 
        opacity: isReady ? 0.8 : 0,
        transition: "opacity 0.5s ease-in-out"
      }}
    />
  );
};

export default InteractiveBackground;
