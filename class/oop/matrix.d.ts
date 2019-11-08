/** @customConstructor Matrix */
declare class Matrix {
  position: Vector3;
  rotation: Vector3;

  constructor(position: Vector3, rotation?: Vector3);

  getPosition(): Vector3;

  getRotation(): Vector3;

  setPosition(): Vector3;

  setRotation(): Vector3;
}
