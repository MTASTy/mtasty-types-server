/** @customConstructor Vector2 */
declare class Vector2 {
  readonly length: number;
  readonly squaredLength: number;
  readonly normalized: Vector2;
  x: number;
  y: number;

  constructor(position: [number, number]);

  normalize(): Vector2;

  dot(): number;

  getLength(): number;

  getSquaredLength(): number;

  getNormalized(): Vector2;

  getX(): number;

  getY(): number;

  setX(x: number);

  setY(y: number);
}
