
import React, { useEffect, useRef } from 'react';

interface MatrixAnimationProps {
  className?: string;
}

export const MatrixAnimation: React.FC<MatrixAnimationProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Grid parameters
    const grid = {
      spacing: 40,
      lineWidth: 0.3,
      color: 'rgba(220, 220, 220, 0.3)',
      time: 0,
      pulseSpeed: 0.0005
    };

    // Flower of life patterns
    const flowers = [];
    const flowerCount = Math.min(5, Math.floor(canvas.width / 300)); // Responsive flower count
    
    for (let i = 0; i < flowerCount; i++) {
      flowers.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 30 + Math.random() * 40,
        circles: 6,
        color: 'rgba(150, 150, 170, 0.2)',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: 0.0001 + Math.random() * 0.0002,
        scale: 0.8 + Math.random() * 0.4,
        scaleDirection: Math.random() > 0.5 ? 1 : -1,
        scaleSpeed: 0.0001 + Math.random() * 0.0001
      });
    }

    // Wave lines
    const waves = [];
    const waveCount = Math.min(4, Math.max(2, Math.floor(canvas.width / 400))); // Responsive wave count
    
    for (let i = 0; i < waveCount; i++) {
      waves.push({
        points: [],
        segments: 15,
        amplitude: 10 + Math.random() * 10,
        frequency: 0.02 + Math.random() * 0.01,
        speed: 0.0002 + Math.random() * 0.0002,
        phase: Math.random() * Math.PI * 2,
        color: `rgba(${93 + Math.random() * 30}, ${155 + Math.random() * 20}, ${137 + Math.random() * 20}, 0.15)`,
        width: 1.5 + Math.random()
      });
      
      // Generate points for each line
      for (let j = 0; j <= waves[i].segments; j++) {
        const xPos = (canvas.width / waves[i].segments) * j;
        const yPos = canvas.height / 2 + Math.sin(j * 0.5) * 30;
        waves[i].points.push({ x: xPos, y: yPos });
      }
    }

    // Particle system for modern touch
    const particles = [];
    const particleCount = Math.min(30, Math.max(15, Math.floor(canvas.width / 60)));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 1 + Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: 0.3 + Math.random() * 0.5,
        color: `rgba(200, 200, 220, ${0.3 + Math.random() * 0.5})`
      });
    }

    // Draw grid
    const drawGrid = (time) => {
      const pulseScale = 1 + 0.02 * Math.sin(time * grid.pulseSpeed * 2);
      
      ctx.strokeStyle = grid.color;
      ctx.lineWidth = grid.lineWidth;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += grid.spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += grid.spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Draw flower of life
    const drawFlowerOfLife = (x, y, radius, circles, color, rotation, scale) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(scale, scale);
      
      // Central circle
      ctx.beginPath();
      ctx.arc(0, 0, radius / 3, 0, Math.PI * 2);
      ctx.stroke();
      
      // Surrounding circles
      for (let i = 0; i < circles; i++) {
        const angle = (i / circles) * Math.PI * 2;
        const cx = Math.cos(angle) * (radius / 3);
        const cy = Math.sin(angle) * (radius / 3);
        
        ctx.beginPath();
        ctx.arc(cx, cy, radius / 3, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      ctx.restore();
    };

    // Update and draw waves
    const updateWaves = (time) => {
      waves.forEach(wave => {
        // Update point positions for wave animation
        for (let i = 0; i <= wave.segments; i++) {
          const xPos = (canvas.width / wave.segments) * i;
          
          // Wave motion
          const phase = wave.phase + time * wave.speed;
          const yOffset = Math.sin(i * wave.frequency + phase) * wave.amplitude;
          
          // Base curve
          const baseCurve = Math.sin(i / wave.segments * Math.PI) * (canvas.height / 8);
          
          wave.points[i] = {
            x: xPos,
            y: canvas.height / 2 + baseCurve + yOffset
          };
        }
        
        // Draw curve
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.width;
        
        ctx.moveTo(wave.points[0].x, wave.points[0].y);
        
        // Smooth curve through points
        for (let i = 0; i < wave.points.length - 1; i++) {
          const currentPoint = wave.points[i];
          const nextPoint = wave.points[i + 1];
          
          const controlPoint1X = currentPoint.x + (nextPoint.x - currentPoint.x) / 2;
          const controlPoint1Y = currentPoint.y;
          
          const controlPoint2X = currentPoint.x + (nextPoint.x - currentPoint.x) / 2;
          const controlPoint2Y = nextPoint.y;
          
          ctx.bezierCurveTo(
            controlPoint1X, controlPoint1Y,
            controlPoint2X, controlPoint2Y,
            nextPoint.x, nextPoint.y
          );
        }
        
        ctx.stroke();
      });
    };

    // Update and draw particles
    const updateParticles = (deltaTime) => {
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX * deltaTime * 10;
        particle.y += particle.speedY * deltaTime * 10;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Animation
    let animationFrameId;
    let lastTime = 0;
    
    const animate = (timestamp) => {
      const time = timestamp * 0.001;
      const deltaTime = time - lastTime;
      lastTime = time;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      drawGrid(time);
      
      // Draw waves
      updateWaves(time);
      
      // Update and draw particles
      updateParticles(deltaTime);
      
      // Update and draw flowers of life
      flowers.forEach(flower => {
        flower.rotation += flower.rotationSpeed * deltaTime * 1000;
        
        // Breathing scale effect
        flower.scale += flower.scaleDirection * flower.scaleSpeed * deltaTime * 1000;
        if (flower.scale > 1.2) {
          flower.scale = 1.2;
          flower.scaleDirection = -1;
        } else if (flower.scale < 0.8) {
          flower.scale = 0.8;
          flower.scaleDirection = 1;
        }
        
        drawFlowerOfLife(
          flower.x,
          flower.y,
          flower.radius,
          flower.circles,
          flower.color,
          flower.rotation,
          flower.scale
        );
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full ${className || ''}`}
      style={{ opacity: 1 }}
    />
  );
};
