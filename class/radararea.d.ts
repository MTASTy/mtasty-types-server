/** @customConstructor RadarArea */
declare class RadarArea extends BaseElement {
  size: Vector2;
  flashing: boolean;

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
   * @see https://wiki.mtasa.com/wiki/CreateRadarArea
   **/
  constructor(startPosX: number, startPosY: number, sizeX: number, sizeY: number, r?: number, g?: number, b?: number, a?: number, visibleTo?: Player);

  /**
   * This function checks if a 2D position is inside a radar area or not.
   * - Warning: Before 1.5.5 r11746, this function does not always work correctly if dimensions of the radararea (sizeX or sizeY) are negative numbers.
   * @param posX The X coordinate of the position you're checking.
   * @param posY The Y coordinate of the position you're checking.
   * @returns Returns true if the position is inside the radar area, false if it isn't.
   * @see https://wiki.mtasa.com/wiki/IsInsideRadarArea
   **/
  isInside(posX: number, posY: number): boolean;

  /**
   * This function allows detection of whether a radar area is flashing or not.
   * @returns Returns true if the radar area is flashing, false if it is not or if it doesn't exist.
   * @see https://wiki.mtasa.com/wiki/IsRadarAreaFlashing
   **/
  isFlashing(): boolean;

  /**
   * This function is used for getting the X and Y size of an existing radar area.
   * @returns Returns two numbers indicating the X and Y length of the radar area respectively.
   * @see https://wiki.mtasa.com/wiki/GetRadarAreaSize
   * @tupleReturn
   **/
  getSize(): [number, number];

  /**
   * This function can be used to retrieve the current color of a radar area.
   * @returns Returns four integers in RGBA format (red, green, blue, alpha), with a maximum value of 255 for each. Alpha decides transparency where 255 is opaque and 0 is transparent.
   * @see https://wiki.mtasa.com/wiki/GetRadarAreaColor
   * @tupleReturn
   **/
  getColor(): [number, number, number, number];

  /**
   * This function changes the size of an existing radar area.
   * @param x the x length of the radar area.
   * @param y the y length of the radar area.
   * @returns Returns true if the size was set successfully.
   * @see https://wiki.mtasa.com/wiki/SetRadarAreaSize
   **/
  setSize(x: number, y: number): boolean;

  /**
   * This function makes an existing radar area flash in transparency.
   * @param flash a bool indicating whether the radar area should flash (true to flash, false to not flash).
   * @returns Returns true if the new flash state was successfully set.
   * @see https://wiki.mtasa.com/wiki/SetRadarAreaFlashing
   **/
  setFlashing(flash: boolean): boolean;

  /**
   * Sets the color of an existing radar area.
   * @param r an integer representing the amount of red in the color (0 for no red, 255 for solid red).
   * @param g an integer representing the amount of green in the color (0 for no green, 255 for solid green).
   * @param b an integer representing the amount of blue in the color (0 for no blue, 255 for solid blue).
   * @param a an integer representing the color's alpha (0 for transparent, 255 for opaque).
   * @returns Returns true if the color was set successfully, false if the color arguments are improper.
   * @see https://wiki.mtasa.com/wiki/SetRadarAreaColor
   **/
  setColor(r: number, g: number, b: number, a: number): boolean;
}
