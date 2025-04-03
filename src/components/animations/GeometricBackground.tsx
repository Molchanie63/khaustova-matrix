
import React, { useEffect, useRef } from 'react';
import { drawSacredGeometry } from './geometric/geometricShapes';
import { drawNumerologicalSequence } from './geometric/numerology';
import { updateParticles } from './geometric/particles';
import { 
  initializeCanvas, 
  createSacredGeometry, 
  createNumerologicalSequences, 
  createParticles 
} from './geometric/initialization';

export const GeometricBackground: React.FC = () => {
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

    // Initialize canvas and set up event listeners
    const cleanup = initializeCanvas(canvas, setCanvasSize);

    // Create animation elements
    const sacredGeometry = createSacredGeometry(canvas.width, canvas.height);
    const particles = createParticles(canvas.width, canvas.height);

    // Animation
    let animationFrameId: number;
    let lastTime = 0;
    
    const animate = (timestamp: number) => {
      const time = timestamp * 0.001;
      const deltaTime = time - lastTime;
      lastTime = time;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw sacred geometry elements
      sacredGeometry.forEach(geometry => {
        geometry.rotation += geometry.rotationSpeed * deltaTime * 1000;
        
        // Breathing effect for scaling
        geometry.scale += geometry.scaleDirection * geometry.scaleSpeed * deltaTime * 1000;
        if (geometry.scale > 1.2) {
          geometry.scale = 1.2;
          geometry.scaleDirection = -1;
        } else if (geometry.scale < 0.7) {
          geometry.scale = 0.7;
          geometry.scaleDirection = 1;
        }
        
        drawSacredGeometry(
          ctx,
          geometry.x,
          geometry.y,
          geometry.radius,
          geometry.type,
          geometry.rotation,
          geometry.scale,
          geometry.opacity
        );
      });
      
      // Update and draw particles
      updateParticles(ctx, particles, canvas.width, canvas.height, deltaTime);
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cleanup();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full opacity-80"
    />
  );
};
