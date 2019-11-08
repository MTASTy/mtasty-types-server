/** @customConstructor Vector4 */
declare class Vector4 {
  readonly length: number;
  readonly squaredLength: number;
  readonly normalized: Vector4;
  x: number;
  y: number;
  z: number;
  w: number;

  constructor(position: [number, number, number, number]);

  normalize(): Vector4;

  dot(): number;

  getLength(): number;

  getSquaredLength(): number;

  getNormalized(): Vector4;

  getX(): number;

  getY(): number;

  getZ(): number;

  getW(): number;

  setX(x: number);

  setY(y: number);

  setZ(z: number);

  setW(w: number);
}
