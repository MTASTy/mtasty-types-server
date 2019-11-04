/** @customConstructor MapObject */
declare class MapObject extends BaseElement {
  scale: number;

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
   * @see https://wiki.mtasa.com/wiki/CreateObject
   **/
  constructor(modelid: number, x: number, y: number, z: number, rx: number, ry: number, rz: number, isLowLOD?: boolean);

  /**
   * This function returns the visible size of map object.
   * @returns Three number indicating the scale of the map object on the x, y, and z axis.
   * @see https://wiki.mtasa.com/wiki/GetObjectScale
   * @tupleReturn
   **/
  getScale(): [number, number, number];

  /**
   * This function changes the visible size of map object.
   * - Note: setObjectScale does not affect the collision models for the map object, as such is unsuitable for use for interaction with players, vehicles or other map objects.
   * @param scale a number containing the new scale. 1.0 is the standard scale, with 0.5 being half the size and 2.0 being twice the size. If the scaleY is set, this will be scaleX.
   * @param [scaleY=1] a number containing the new scale on the Y axis.
   * @param [scaleZ=1] a number containing the new scale on the Z axis.
   * @returns Return true if the scale was set properly, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetObjectScale
   **/
  setScale(scale: number, scaleY?: number, scaleZ?: number): boolean;

  /**
   * This function will smoothly move map object from its current position to a specified rotation and position.
   * @param time the time in milliseconds the map object will arrive at the destination.
   * @param targetX the X value of the target position.
   * @param targetY the Y value of the target position.
   * @param targetZ the Z value of the target position.
   * @param moveRX the rotation along the X axis relative to its current rotation, which is its starting angle.
   * @param moveRY the rotation along the Y axis relative to its current rotation, which is its starting angle.
   * @param moveRZ the rotation along the Z axis relative to its current rotation, which is its starting angle.
   * @param [strEasingType="Linear"] the easing function to use for the interpolation.
   * @param fEasingPeriod the period of the easing function (only some easing functions use this parameter).
   * @param fEasingAmplitude the amplitude of the easing function (only some easing functions use this parameter).
   * @param fEasingOvershoot the overshoot of the easing function (only some easing functions use this parameter).
   * @returns Return true if the function moved the map object succesfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/MoveObject
   **/
  move(time: number, targetX: number, targetY: number, targetZ: number, moveRX?: number, moveRY?: number, moveRZ?: number, strEasingType?: string, fEasingPeriod?: number, fEasingAmplitude?: number, fEasingOvershoot?: number): boolean;

  /**
   * This will allow you to stop map object that is currently moving.
   * @returns Return true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/StopObject
   **/
  stop(): boolean;
}
