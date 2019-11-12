/** @customConstructor Vector4 */
declare class Vector4 {
  x: number;
  y: number;
  z: number;
  w: number;

  readonly length: number;
  readonly squaredLength: number;
  readonly normalized: Vector4;

  constructor(x: number, y: number, z: number, w: number);
  constructor(vector: Vector4);

  normalize(): Vector4;

  dot(): number;

  getLength(): number;

  getSquaredLength(): number;

  getNormalized(): Vector4;

  getX(): number;

  getY(): number;

  getZ(): number;

  getW(): number;

  setX(x: number): boolean;

  setY(y: number): boolean;

  setZ(z: number): boolean;

  setW(w: number): boolean;
}
