/** @customConstructor Vector3 */
declare class Vector3 {
  readonly length: number;
  readonly squaredLength: number;
  readonly normalized: Vector3;
  x: number;
  y: number;
  z: number;

  constructor(position: [number, number, number]);

  normalize(): Vector3;

  cross();

  dot(): number;

  getLength(): number;

  getSquaredLength(): number;

  getNormalized(): Vector3;

  getX(): number;

  getY(): number;

  getZ(): number;

  setX(x: number);

  setY(y: number);

  setZ(z: number);
}
