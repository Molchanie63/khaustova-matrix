
import { Particle } from './types';

// Updates and draws particles
export const updateParticles = (
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  canvasWidth: number,
  canvasHeight: number,
  deltaTime: number
) => {
  particles.forEach(particle => {
    // Update position
    particle.x += particle.speedX * deltaTime * 10;
    particle.y += particle.speedY * deltaTime * 10;
    
    // Loop around edges
    if (particle.x < 0) particle.x = canvasWidth;
    if (particle.x > canvasWidth) particle.x = 0;
    if (particle.y < 0) particle.y = canvasHeight;
    if (particle.y > canvasHeight) particle.y = 0;
    
    // Draw particle
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  });
};
