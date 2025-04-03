
// Types for geometric animation elements
export interface SacredGeometryElement {
  x: number;
  y: number;
  radius: number;
  type: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  scaleDirection: number;
  scaleSpeed: number;
  opacity: number;
}

export interface NumerologicalSequence {
  x: number;
  y: number;
  digits: number[];
  fontSize: number;
  opacity: number;
  rotation: number;
  color: string;
}

export interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}
