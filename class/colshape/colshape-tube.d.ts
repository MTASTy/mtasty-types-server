/** @customConstructor ColShape.Tube */
declare class ColShapeTube extends ColShape {
  /**
   * This function creates a collision tube.
   * This is a shape that has a position and a 2D (X/Y) radius and a height.
   * See Cylinder for a definition of a tube.
   * A tube is similar to a colcircle, except that it has a limited height, this means you can limit the distance above the position defined by (fX, fY, fZ) that the collision is detected.
   * - Tip: To visualize a colshape when writing scripts, use the client console command "/showcol".
   * @param fX The position of the base of the tube's center on the X axis.
   * @param fY The position of the base of the tube's center on the Y axis.
   * @param fZ The position of the base of the tube's center on the Z axis.
   * @param fRadius The collision tube's radius.
   * @param fHeight The collision tube's height.
   * @see https://wiki.mtasa.com/wiki/CreateColTube
   **/
  constructor(fX: number, fY: number, fZ: number, fRadius: number, fHeight: number);
}
