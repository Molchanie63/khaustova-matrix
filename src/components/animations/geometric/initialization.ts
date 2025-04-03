
import { SacredGeometryElement, NumerologicalSequence, Particle } from './types';

// Initialize canvas size based on parent element
export const initializeCanvas = (
  canvas: HTMLCanvasElement,
  setCanvasSize: () => void
) => {
  setCanvasSize();
  window.addEventListener('resize', setCanvasSize);
  
  return () => {
    window.removeEventListener('resize', setCanvasSize);
  };
};

// Create sacred geometry elements
export const createSacredGeometry = (
  canvasWidth: number,
  canvasHeight: number
): SacredGeometryElement[] => {
  const sacredGeometry: SacredGeometryElement[] = [];
  const geometryCount = Math.min(15, Math.max(8, Math.floor(canvasWidth / 180)));
  
  for (let i = 0; i < geometryCount; i++) {
    sacredGeometry.push({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      radius: 40 + Math.random() * 80,
      type: Math.floor(Math.random() * 8), // Increased variety with new shapes
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: 0.0001 + Math.random() * 0.0004,
      scale: 0.7 + Math.random() * 0.5,
      scaleDirection: Math.random() > 0.5 ? 1 : -1,
      scaleSpeed: 0.0001 + Math.random() * 0.0001,
      opacity: 0.1 + Math.random() * 0.2
    });
  }
  
  return sacredGeometry;
};

// Create numerological sequences - now returns empty array
export const createNumerologicalSequences = (
  canvasWidth: number,
  canvasHeight: number
): NumerologicalSequence[] => {
  return []; // Return empty array as we're removing numerological sequences
};

// Create particles
export const createParticles = (
  canvasWidth: number,
  canvasHeight: number
): Particle[] => {
  const particles: Particle[] = [];
  const particleCount = Math.min(30, Math.max(15, Math.floor(canvasWidth / 50)));
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      size: 1 + Math.random() * 2,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      opacity: 0.3 + Math.random() * 0.4,
      color: Math.random() > 0.7 ? 
             `rgba(${93 + Math.random() * 30}, ${155 + Math.random() * 20}, ${137 + Math.random() * 20}, ${0.3 + Math.random() * 0.5})` :
             `rgba(220, 220, 240, ${0.3 + Math.random() * 0.5})`
    });
  }
  
  return particles;
};
