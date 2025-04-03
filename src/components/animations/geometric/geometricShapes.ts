
import { SacredGeometryElement } from './types';

// Draws a sacred geometry shape based on the type
export const drawSacredGeometry = (
  ctx: CanvasRenderingContext2D,
  x: number, 
  y: number, 
  radius: number, 
  type: number, 
  rotation: number, 
  scale: number, 
  opacity: number
) => {
  ctx.strokeStyle = `rgba(160, 180, 200, ${opacity})`;
  ctx.fillStyle = `rgba(120, 160, 180, ${opacity * 0.2})`;
  ctx.lineWidth = 0.8;
  
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.scale(scale, scale);
  
  if (type === 0) {
    drawFlowerOfLife(ctx, radius);
  } 
  else if (type === 1) {
    drawMerkaba(ctx, radius);
  }
  else if (type === 2) {
    drawPentagram(ctx, radius);
  }
  else if (type === 3) {
    drawSriYantra(ctx, radius);
  }
  else if (type === 4) {
    drawIcosahedron(ctx, radius);
  }
  else if (type === 5) {
    drawMetatronsCube(ctx, radius);
  }
  else if (type === 6) {
    drawTorus(ctx, radius);
  }
  else if (type === 7) {
    drawVesicaPiscis(ctx, radius);
  }
  
  ctx.restore();
};

// Flower of Life pattern
const drawFlowerOfLife = (ctx: CanvasRenderingContext2D, radius: number) => {
  // Central circle
  ctx.beginPath();
  ctx.arc(0, 0, radius / 3, 0, Math.PI * 2);
  ctx.stroke();
  
  // Surrounding circles
  const petals = 6;
  for (let i = 0; i < petals; i++) {
    const angle = (i / petals) * Math.PI * 2;
    const cx = Math.cos(angle) * (radius / 3);
    const cy = Math.sin(angle) * (radius / 3);
    
    ctx.beginPath();
    ctx.arc(cx, cy, radius / 3, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  // Additional layer
  for (let i = 0; i < petals; i++) {
    const angle = ((i + 0.5) / petals) * Math.PI * 2;
    const distance = radius / 3 * 1.7;
    const cx = Math.cos(angle) * distance;
    const cy = Math.sin(angle) * distance;
    
    ctx.beginPath();
    ctx.arc(cx, cy, radius / 3, 0, Math.PI * 2);
    ctx.stroke();
  }
};

// Merkaba (star tetrahedron)
const drawMerkaba = (ctx: CanvasRenderingContext2D, radius: number) => {
  ctx.beginPath();
  // Upper triangle
  ctx.moveTo(0, -radius * 0.7);
  ctx.lineTo(-radius * 0.6, radius * 0.35);
  ctx.lineTo(radius * 0.6, radius * 0.35);
  ctx.closePath();
  ctx.stroke();
  
  // Lower triangle (inverted)
  ctx.beginPath();
  ctx.moveTo(0, radius * 0.7);
  ctx.lineTo(-radius * 0.6, -radius * 0.35);
  ctx.lineTo(radius * 0.6, -radius * 0.35);
  ctx.closePath();
  ctx.stroke();
};

// Pentagram (five-pointed star)
const drawPentagram = (ctx: CanvasRenderingContext2D, radius: number) => {
  ctx.beginPath();
  const points = 5;
  const innerRadius = radius * 0.4;
  const outerRadius = radius * 0.8;
  
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;
    
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  
  ctx.closePath();
  ctx.stroke();
};

// Sri Yantra (simplified version)
const drawSriYantra = (ctx: CanvasRenderingContext2D, radius: number) => {
  // Central triangle
  ctx.beginPath();
  ctx.moveTo(0, -radius * 0.3);
  ctx.lineTo(-radius * 0.3, radius * 0.2);
  ctx.lineTo(radius * 0.3, radius * 0.2);
  ctx.closePath();
  ctx.stroke();
  
  // Inverted triangle
  ctx.beginPath();
  ctx.moveTo(0, radius * 0.3);
  ctx.lineTo(-radius * 0.3, -radius * 0.2);
  ctx.lineTo(radius * 0.3, -radius * 0.2);
  ctx.closePath();
  ctx.stroke();
  
  // Outer triangles
  ctx.beginPath();
  ctx.moveTo(0, -radius * 0.6);
  ctx.lineTo(-radius * 0.6, radius * 0.4);
  ctx.lineTo(radius * 0.6, radius * 0.4);
  ctx.closePath();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(0, radius * 0.6);
  ctx.lineTo(-radius * 0.6, -radius * 0.4);
  ctx.lineTo(radius * 0.6, -radius * 0.4);
  ctx.closePath();
  ctx.stroke();
};

// New shape: Icosahedron (simplified 2D representation)
const drawIcosahedron = (ctx: CanvasRenderingContext2D, radius: number) => {
  const vertices = [];
  const goldenRatio = 1.618033988749895;
  
  // Calculate vertices for icosahedron
  vertices.push({x: 0, y: -radius * 0.8}); // top
  
  // Upper pentagon
  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
    vertices.push({
      x: Math.cos(angle) * radius * 0.6,
      y: Math.sin(angle) * radius * 0.6 - radius * 0.2
    });
  }
  
  // Lower pentagon
  for (let i = 0; i < 5; i++) {
    const angle = ((i + 0.5) / 5) * Math.PI * 2 - Math.PI / 2;
    vertices.push({
      x: Math.cos(angle) * radius * 0.6,
      y: Math.sin(angle) * radius * 0.6 + radius * 0.2
    });
  }
  
  vertices.push({x: 0, y: radius * 0.8}); // bottom
  
  // Connect vertices to form icosahedron
  // Top to upper pentagon
  for (let i = 1; i <= 5; i++) {
    ctx.beginPath();
    ctx.moveTo(vertices[0].x, vertices[0].y);
    ctx.lineTo(vertices[i].x, vertices[i].y);
    ctx.stroke();
  }
  
  // Upper pentagon
  for (let i = 1; i <= 5; i++) {
    ctx.beginPath();
    ctx.moveTo(vertices[i].x, vertices[i].y);
    ctx.lineTo(vertices[i % 5 + 1].x, vertices[i % 5 + 1].y);
    ctx.stroke();
  }
  
  // Upper to lower
  for (let i = 1; i <= 5; i++) {
    ctx.beginPath();
    ctx.moveTo(vertices[i].x, vertices[i].y);
    ctx.lineTo(vertices[i + 5].x, vertices[i + 5].y);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(vertices[i].x, vertices[i].y);
    ctx.lineTo(vertices[(i % 5) + 6].x, vertices[(i % 5) + 6].y);
    ctx.stroke();
  }
  
  // Lower pentagon
  for (let i = 6; i <= 10; i++) {
    ctx.beginPath();
    ctx.moveTo(vertices[i].x, vertices[i].y);
    ctx.lineTo(vertices[(i % 5) + 6].x, vertices[(i % 5) + 6].y);
    ctx.stroke();
  }
  
  // Bottom to lower pentagon
  for (let i = 6; i <= 10; i++) {
    ctx.beginPath();
    ctx.moveTo(vertices[11].x, vertices[11].y);
    ctx.lineTo(vertices[i].x, vertices[i].y);
    ctx.stroke();
  }
};

// New shape: Metatron's Cube
const drawMetatronsCube = (ctx: CanvasRenderingContext2D, radius: number) => {
  // Draw the center point and circles
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.05, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw the 13 circles (1 center + 12 around)
  const centerPoints = [];
  
  // Center point
  centerPoints.push({x: 0, y: 0});
  
  // First ring - 6 points
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    centerPoints.push({
      x: Math.cos(angle) * radius * 0.4,
      y: Math.sin(angle) * radius * 0.4
    });
  }
  
  // Second ring - 6 points
  for (let i = 0; i < 6; i++) {
    const angle = ((i + 0.5) / 6) * Math.PI * 2;
    centerPoints.push({
      x: Math.cos(angle) * radius * 0.8,
      y: Math.sin(angle) * radius * 0.8
    });
  }
  
  // Draw circles
  for (let i = 0; i < centerPoints.length; i++) {
    ctx.beginPath();
    ctx.arc(centerPoints[i].x, centerPoints[i].y, radius * 0.1, 0, Math.PI * 2);
    if (i === 0) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }
  
  // Connect all points to create the cube pattern
  for (let i = 1; i < centerPoints.length; i++) {
    for (let j = i + 1; j < centerPoints.length; j++) {
      ctx.beginPath();
      ctx.moveTo(centerPoints[i].x, centerPoints[i].y);
      ctx.lineTo(centerPoints[j].x, centerPoints[j].y);
      ctx.stroke();
    }
  }
};

// New shape: Torus (2D representation)
const drawTorus = (ctx: CanvasRenderingContext2D, radius: number) => {
  const outerRadius = radius * 0.8;
  const innerRadius = radius * 0.4;
  const steps = 36;
  
  for (let i = 0; i < steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    const nextAngle = ((i + 1) / steps) * Math.PI * 2;
    
    // Draw outer ellipse
    ctx.beginPath();
    ctx.ellipse(0, 0, outerRadius, outerRadius * 0.4, 0, angle, nextAngle);
    ctx.stroke();
    
    // Draw inner ellipse
    ctx.beginPath();
    ctx.ellipse(0, 0, innerRadius, innerRadius * 0.4, 0, angle, nextAngle);
    ctx.stroke();
    
    // Connect inner and outer at intervals
    if (i % 6 === 0) {
      ctx.beginPath();
      ctx.moveTo(Math.cos(angle) * innerRadius, Math.sin(angle) * innerRadius * 0.4);
      ctx.lineTo(Math.cos(angle) * outerRadius, Math.sin(angle) * outerRadius * 0.4);
      ctx.stroke();
    }
  }
  
  // Draw the "horizontal" ellipses for depth
  ctx.beginPath();
  ctx.ellipse(0, 0, outerRadius, outerRadius * 0.4, Math.PI/2, 0, Math.PI * 2);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.ellipse(0, 0, innerRadius, innerRadius * 0.4, Math.PI/2, 0, Math.PI * 2);
  ctx.stroke();
};

// New shape: Vesica Piscis
const drawVesicaPiscis = (ctx: CanvasRenderingContext2D, radius: number) => {
  const distance = radius * 0.5;
  const r = radius * 0.6;
  
  // Left circle
  ctx.beginPath();
  ctx.arc(-distance / 2, 0, r, 0, Math.PI * 2);
  ctx.stroke();
  
  // Right circle
  ctx.beginPath();
  ctx.arc(distance / 2, 0, r, 0, Math.PI * 2);
  ctx.stroke();
  
  // Inner lines
  ctx.beginPath();
  ctx.moveTo(-distance / 2, -Math.sqrt(r * r - (distance / 2) * (distance / 2)));
  ctx.lineTo(distance / 2, -Math.sqrt(r * r - (distance / 2) * (distance / 2)));
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(-distance / 2, Math.sqrt(r * r - (distance / 2) * (distance / 2)));
  ctx.lineTo(distance / 2, Math.sqrt(r * r - (distance / 2) * (distance / 2)));
  ctx.stroke();
};
