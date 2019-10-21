/** @customConstructor Object */
declare class MapObject extends Element {
  /**
   * Creates an object in the GTA world.
   * - Note: Dynamic objects do not automatically have physics applied to them. Use setElementVelocity(object, 0, 0, 0) to fix this.
   * @param modelid a whole integer specifying the GTASA object model ID.
   * @param x a floating point number representing the X coordinate on the map.
   * @param y a floating point number representing the Y coordinate on the map.
   * @param z a floating point number representing the Z coordinate on the map.
   * @param rx a floating point number representing the rotation about the X axis in degrees.
   * @param ry a floating point number representing the rotation about the Y axis in degrees.
   * @param rz a floating point number representing the rotation about the Z axis in degrees.
   * @param [isLowLOD=false] a bool value specifying if the object will be low LOD. A low LOD object has no collision and a longer draw distance.
   * @returns The object element if creation was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/CreateObject
   **/
  constructor(modelid: number, x: number, y: number, z: number, rx: number, ry: number, rz: number, isLowLOD?: boolean);
}