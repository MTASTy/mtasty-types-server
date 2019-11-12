/** @customConstructor Vector2 */
declare class Vector2 {
  x: number;
  y: number;

  readonly length: number;
  readonly squaredLength: number;
  readonly normalized: Vector2;

  constructor(x: number, y: number);
  constructor(vector: Vector2);

  normalize(): Vector2;

  dot(): number;

  getLength(): number;

  getSquaredLength(): number;

  getNormalized(): Vector2;

  getX(): number;

  getY(): number;

  setX(x: number): boolean;

  setY(y: number): boolean;
}
