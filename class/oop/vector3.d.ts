/** @customConstructor Vector3 */
declare class Vector3 {
  x: number;
  y: number;
  z: number;

  readonly length: number;
  readonly squaredLength: number;
  readonly normalized: Vector3;

  constructor(x: number, y: number, z: number);
  constructor(vector: Vector3);

  normalize(): Vector3;

  cross(): Vector3;

  dot(): number;

  getLength(): number;

  getSquaredLength(): number;

  getNormalized(): Vector3;

  getX(): number;

  getY(): number;

  getZ(): number;

  setX(x: number): boolean;

  setY(y: number): boolean;

  setZ(z: number): boolean;
}
