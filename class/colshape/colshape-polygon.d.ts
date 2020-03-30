/** @customConstructor ColShape.Polygon */
declare class ColShapePolygon extends ColShape {
  /**
   * This function creates a collision polygon.
   * See Wikipedia for a definition of a polygon.
   * The first set of X Y of this shape is not part of the colshape bounds, so can set anywhere in the game world, however for performance, place it as close to the centre of the polygon as you can.
   * It should be noted this shape is 2D. There should be at least 3 bound points set.
   * - Note: For this function to work correctly, get/set your bound points in an anti-clockwise fashion.
   * - Tip: To visualize a colshape when writing scripts, use the client console command "/showcol".
   * @param fCenterX The X position of the collision polygon's position - the position that will be returned from getElementPosition.
   * @param fCenterY The Y position of the collision polygon's position - the position that will be returned from getElementPosition.
   * @param fX1 The 1st X position of the collision polygon's bound point.
   * @param fY1 The 1st Y position of the collision polygon's bound point.
   * @param fX2 The 2nd X position of the collision polygon's bound point.
   * @param fY2 The 2nd Y position of the collision polygon's bound point.
   * @param fX3 The 3rd X position of the collision polygon's bound point.
   * @param fY3 The 3rd Y position of the collision polygon's bound point.
   * @param coords From the 3rd position you can have as many points as you require to create the colshape.
   * @see https://wiki.mtasa.com/wiki/CreateColPolygon
   **/
  constructor(fCenterX: number, fCenterY: number, fX1: number, fY1: number, fX2: number, fY2: number, fX3: number, fY3: number, ...coords: number[]);
}
