/**
 * Creates an object in the GTA world.
 * - Note: Dynamic objects do not automatically have physics applied to them. Use setElementVelocity(object, 0, 0, 0) to fix this.
 * @param modelid a whole integer specifying the GTASA object model ID.
 * @param x a number representing the X coordinate on the map.
 * @param y a number representing the Y coordinate on the map.
 * @param z a number representing the Z coordinate on the map.
 * @param rx a number representing the rotation about the X axis in degrees.
 * @param ry a number representing the rotation about the Y axis in degrees.
 * @param rz a number representing the rotation about the Z axis in degrees.
 * @param [isLowLOD=false] A bool value specifying if the object will be low LOD. A low LOD object has no collision and a longer draw distance.
 * @returns The maps object element if creation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CreateObject
 **/
declare function createObject(modelid: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, isLowLOD?: boolean): MapObject | false;

/**
 * This function returns the visible size of an object.
 * @param theObject the maps object you wish to return the scale of.
 * @returns Three number indicating the scale of the object on the x, y, and z axis if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetObjectScale
 * @tupleReturn
 **/
declare function getObjectScale(theObject: MapObject): [number, number, number] | [false];

/**
 * This function will smoothly move an object from its current position to a specified rotation and position.
 * @param theObject the maps object that will be moved.
 * @param time the time in milliseconds the object will arrive at the destination.
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
 * @returns Return true if the function moved the object succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/MoveObject
 **/
declare function moveObject(theObject: MapObject, time: number, targetX: number, targetY: number, targetZ: number, moveRX?: number, moveRY?: number, moveRZ?: number, strEasingType?: string, fEasingPeriod?: number, fEasingAmplitude?: number, fEasingOvershoot?: number): boolean;

/**
 * This function changes the visible size of an object.
 * - Note: setObjectScale does not affect the collision models for the object, as such is unsuitable for use for interaction with players, vehicles or other objects.
 * @param theObject the object you wish to change the scale of.
 * @param scale a number containing the new scale. 1.0 is the standard scale, with 0.5 being half the size and 2.0 being twice the size. If the scaleY is set, this will be scaleX.
 * @param [scaleY=1] a number containing the new scale on the Y axis.
 * @param [scaleZ=1] a number containing the new scale on the Z axis.
 * @returns Return true if the scale was set properly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetObjectScale
 **/
declare function setObjectScale(theObject: MapObject, scale: number, scaleY?: number, scaleZ?: number): boolean;

/**
 * This will allow you to stop an object that is currently moving.
 * @param theObject the object whose movement you wish to stop.
 * @returns Return true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/StopObject
 **/
declare function stopObject(theObject: MapObject): boolean;
