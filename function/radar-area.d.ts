/** @noSelfInFile */

/**
 * This function can be used to create custom radar areas on the radar.
 * @param startPosX A number representing the origin 'x' position of the radar area.
 * @param startPosY A number representing the origin 'y' position of the radar area.
 * @param sizeX A number representing the width of the radar area.
 * @param sizeY A number representing the height of the radar area.
 * @param [r=255] An integer representing the amount of red in the color. Maximum value is 255.
 * @param [g=0] An integer representing the amount of green in the color. Maximum value is 255.
 * @param [b=0] An integer representing the amount of blue in the color. Maximum value is 255.
 * @param [a=255] An integer representing the amount of alpha in the color. This allows setting the transparency of the radar area.  255 is opaque and 0 is transparent.
 * @param visibleTo An player whose you wish to restrict the visibility of the radar area to.
 * @returns Return radar area element if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CreateRadarArea
 **/
declare function createRadarArea(startPosX: number, startPosY: number, sizeX: number, sizeY: number, r?: number, g?: number, b?: number, a?: number, visibleTo?: Player): RadarArea | false;

/**
 * This function can be used to retrieve the current color of a radar area.
 * @param theRadararea The radar area you wish to retrieve the colour of.
 * @returns Returns four integers in RGBA format (red, green, blue, alpha), with a maximum value of 255 for each. Alpha decides transparency where 255 is opaque and 0 is transparent. Returns false if the radararea is invalid.
 * @see https://wiki.mtasa.com/wiki/GetRadarAreaColor
 * @tupleReturn
 **/
declare function getRadarAreaColor(theRadararea: RadarArea): [number, number, number, number] | [false];

/**
 * This function is used for getting the X and Y size of an existing radar area.
 * @param theRadararea The radar area element whose size you wish to get.
 * @returns Returns two numbers indicating the X and Y length of the radar area respectively, false if the radar area is invalid.
 * @see https://wiki.mtasa.com/wiki/GetRadarAreaSize
 * @tupleReturn
 **/
declare function getRadarAreaSize(theRadararea: RadarArea): [number, number] | [false];

/**
 * This function checks if a 2D position is inside a radar area or not.
 * - Warning: Before 1.5.5 r11746, this function does not always work correctly if dimensions of the radararea (sizeX or sizeY) are negative numbers.
 * @param theArea The radar area you're checking the position against.
 * @param posX The X coordinate of the position you're checking.
 * @param posY The Y coordinate of the position you're checking.
 * @returns Returns true if the position is inside the radar area, false if it isn't or if any parameters are invalid.
 * @see https://wiki.mtasa.com/wiki/IsInsideRadarArea
 **/
declare function isInsideRadarArea(theArea: RadarArea, posX: number, posY: number): boolean;

/**
 * This function allows detection of whether a radar area is flashing or not.
 * @param theRadararea The radar area you wish to check the state of flashing
 * @returns Returns true if the radar area is flashing, false if it is not or if it doesn't exist.
 * @see https://wiki.mtasa.com/wiki/IsRadarAreaFlashing
 **/
declare function isRadarAreaFlashing(theRadararea: RadarArea): boolean;

/**
 * Sets the color of an existing radar area.
 * @param theRadarArea the radararea element whose color you wish to set.
 * @param r an integer representing the amount of red in the color (0 for no red, 255 for solid red).
 * @param g an integer representing the amount of green in the color (0 for no green, 255 for solid green).
 * @param b an integer representing the amount of blue in the color (0 for no blue, 255 for solid blue).
 * @param a an integer representing the color's alpha (0 for transparent, 255 for opaque).
 * @returns Returns true if the color was set successfully, false if the radar area doesn't exist or the color arguments are improper.
 * @see https://wiki.mtasa.com/wiki/SetRadarAreaColor
 **/
declare function setRadarAreaColor(theRadarArea: RadarArea, r: number, g: number, b: number, a: number): boolean;

/**
 * This function makes an existing radar area flash in transparency.
 * @param theRadarArea the radararea element we want to change flashing state of.
 * @param flash a bool indicating whether the radar area should flash (true to flash, false to not flash).
 * @returns Returns true if the new flash state was successfully set, false if the radar area doesn't exist or invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetRadarAreaFlashing
 **/
declare function setRadarAreaFlashing(theRadarArea: RadarArea, flash: boolean): boolean;

/**
 * This function changes the size of an existing radar area.
 * @param theRadararea the radararea element whose size is to be changed.
 * @param x the x length of the radar area.
 * @param y the y length of the radar area.
 * @returns Returns true if the size was set successfully, false if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/SetRadarAreaSize
 **/
declare function setRadarAreaSize(theRadararea: RadarArea, x: number, y: number): boolean;
