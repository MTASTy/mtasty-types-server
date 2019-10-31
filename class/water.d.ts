declare class Water extends BaseElement {
  // level: number; // Change only

  // static resetColor(): boolean;
  // static resetLevel(): boolean;
  // static getWaveHeight(): number;
  // static getColor(): [number, number, number, number];
  // static setWaveHeight(height: number): boolean;
  // static setColor(red: number, green: number, blue: number, alpha?: number): boolean;
  // static setLevel(level: number, includeWaterFeatures?: boolean, includeWaterElements?: boolean): boolean;

  /**
   * Creates an area of water.
   * The largest possible size of a water area is 5996×5996.
   * Also be aware that the function will change all x and y coordinates you specify into even integer numbers if necessary: this is because of a limitation of San Andreas.
   * You are able to give the water a shallow water effect, which practically changes the water invisible to the eye.
   * However, all elements still work the same way as without the shallow effect - allowing swimming, diving, vehicles to sink, etc.
   * - Note: X and Y positions will be changed to an even integer. i.e. -2, 0, 2, 4 etc.
   * - Important note: If you're working with dimensions, be sure to apply it by using setElementDimension.
   * @param x1 position of bottom left (south-west) corner.
   * @param y1 position of bottom left (south-west) corner.
   * @param z1 position of bottom left (south-west) corner.
   * @param x2 position of bottom right (south-east) corner.
   * @param y2 position of bottom right (south-east) corner.
   * @param z2 position of bottom right (south-east) corner.
   * @param x3 position of top left (north-west) corner.
   * @param y3 position of top left (north-west) corner.
   * @param z3 position of top left (north-west) corner.
   * @param x4 position of top right (north-east) corner.
   * @param y4 position of top right (north-east) corner.
   * @param z4 position of top right (north-east) corner.
   * @param [bShallow=false] gives the water a shallow water effect.
   * @see https://wiki.mtasa.com/wiki/CreateWater
   **/
  constructor(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4?: number, y4?: number, z4?: number, bShallow?: boolean);

  /**
   * Gets the world position of a vertex (i.e. corner) of a water area.
   * Each water area is either a triangle or quad (rectangle) so each has 3 or 4 corners.
   * @param vertexIndex the index of the vertex whose position to get. Values range from 1 to 4 for a water quad, or 1 to 3 for a triangle.
   * @returns Returns the x, y and z coordinates of the specified vertex if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetWaterVertexPosition
   * @tupleReturn
   **/
  getVertexPosition(vertexIndex: 1 | 2 | 3 | 4): [number, number, number] | [false];

  /**
   * Sets the world position of a corner point of a water area.
   * - Note: X and Y positions will be changed to an even integer. i.e. -2, 0, 2, 4 etc.
   * @param vertexIndex the index of the vertex to move. Values range from 1 to 4 for water quads, and 1 to 3 for triangles.
   * @param x the X coordinate to set for the vertex.
   * @param y the Y coordinate to set for the vertex.
   * @param z the Z coordinate to set for the vertex.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetWaterVertexPosition
   **/
  setVertexPosition(vertexIndex: 1 | 2 | 3 | 4, x: number, y: number, z: number): boolean;

  /**
   * Sets the height of some or all the water in the game world.
   * - Note: When the water level is 0, the standard GTA rendering is performed so that water is visible when viewed through translucent surfaces, such as vehicle windows. However, some MTA custom objects placed underwater will appear in front of the water. Setting the water level to any non-zero value (i.e. setWaterLevel(0.001)) forces alternative rendering and MTA custom objects placed underwater will be drawn correctly.
   * @param level the new Z coordinate of the water surface.
   * @returns Returns true if successful, false in case of failure.
   * @see https://wiki.mtasa.com/wiki/SetWaterLevel
   **/
  setLevel(level: number): boolean;
}
