/** @noSelfInFile */

/**
 * This function will fade a player's camera to a color or back to normal over a specified time period.
 * This will also affect the sound volume for the player (50% faded = 50% volume, full fade = no sound).
 * For clientside scripts you can perform 2 fade ins or fade outs in a row, but for serverside scripts you must use one then the other.
 * - Note: The speed of the effect depends directly on the current gamespeed.
 * @param thePlayer The player whose camera you wish to fade.
 * @param fadeIn Should the camera be faded in or out? Pass true to fade the camera in, false to fade it out to a color.
 * @param [timeToFade=1] The number of seconds it should take to fade.
 * @param [red=0] The amount of red in the color that the camera fades out to (0 - 255). Not required for fading in.
 * @param [green=0] The amount of green in the color that the camera fades out to (0 - 255). Not required for fading in.
 * @param [blue=0] The amount of blue in the color that the camera fades out to (0 - 255). Not required for fading in.
 * @returns Returns true if the camera was faded successfully, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/FadeCamera
 **/
declare function fadeCamera(thePlayer: Player, fadeIn: boolean, timeToFade?: number, red?: number, green?: number, blue?: number): boolean;

/**
 * Returns the interior of the local camera (independent of the interior of the local player).
 * @param thePlayer: The player whose camera interior you want to get.
 * @returns Returns an integer indicating the camera's interior, false if the argument is invalid.
 * @see https://wiki.mtasa.com/wiki/GetCameraInterior
 **/
declare function getCameraInterior(thePlayer: Player): number | false;

/**
 * This function gets the position of the camera and the position of the point it is facing.
 * Important note: Server-side this functions returns false or the latest value set via setCameraMatrix (called from server or client).
 * @param thePlayer The player whose camera matrix is to be returned.
 * @returns This function returns 8 floats if the argument is valid (when applicable); the first three indicate the position of the camera, the next three indicate the position of the point it's facing, and the last two are the roll and field of view. Returns false if the argument is invalid.
 * @see https://wiki.mtasa.com/wiki/GetCameraMatrix
 * @tupleReturn
 **/
declare function getCameraMatrix(thePlayer: Player): [number, number, number, number, number, number, number, number] | [false];

/**
 * This function returns an element that corresponds to the current target of the specified player's camera (i.e. what it is following).
 * @param thePlayer The player whose camera you wish to receive the target of.
 * @returns Returns an element of the target if the function was successful, or false if bad arguments were specified.
 * @see https://wiki.mtasa.com/wiki/GetCameraTarget
 **/
declare function getCameraTarget(thePlayer: Player): Element | false;

/**
 * Sets the interior of the local camera.
 * Only the interior of the camera is changed, the local player stays in the interior he was in.
 * @param thePlayer the player whose camera interior will be set.
 * @param interior the interior to place the camera in.
 * @returns Returns true if the camera's interior was changed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetCameraInterior
 **/
declare function setCameraInterior(thePlayer: Player, interior: number): boolean;

/**
 * This function sets the camera's position and direction.
 * The first three arguments are the point at which the camera lies, the last three are the point the camera faces (or the point it "looks at").
 * - Note: Calling this function takes the camera's focus away from the player and sets the camera in a fixed position and rotation. The camera's focus can be brought back to the player using the setCameraTarget function.
 * @param thePlayer The player whose camera is to be changed.
 * @param positionX The x coordinate of the camera's position.
 * @param positionY The y coordinate of the camera's position.
 * @param positionZ The z coordinate of the camera's position.
 * @param lookAtX The x coordinate of the point the camera faces.
 * @param lookAtY The y coordinate of the point the camera faces.
 * @param lookAtZ The z coordinate of the point the camera faces.
 * @param [roll=0] The camera roll angle, -180 to 180. A value of 0 means the camera sits straight, positive values will turn it counter-clockwise and negative values will turn it clockwise. -180 or 180 means the camera is upside down.
 * @param [fov=70] the field of view angle, 0.01 to 180. The higher this value is, the more you will be able to see what is to your sides.
 * @returns Returns true if the arguments are valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetCameraMatrix
 **/
declare function setCameraMatrix(thePlayer: Player, positionX: number, positionY: number, positionZ: number, lookAtX?: number, lookAtY?: number, lookAtZ?: number, roll?: number, fov?: number): boolean;

/**
 * This function allows you to set a player's camera to follow other elements instead. Currently supported element type is: Player.
 * @param thePlayer The player whose camera you wish to modify.
 * @param target The player who you want the camera to follow. If none is specified, the camera will target the player.
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetCameraTarget
 **/
declare function setCameraTarget(thePlayer: Player, target: Player): boolean;
