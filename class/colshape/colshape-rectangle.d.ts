/** @customConstructor ColShapeRectangle */
declare class ColShapeRectangle extends ColShape {
  /**
   * This function creates a collision rectangle.
   * This is a shape that has a position and a width and a depth.
   * See Rectangle for a definition of a rectangle.
   * XY marks on the south west corner of the colshape.
   * - Tip: To visualize a colshape when writing scripts, use the client console command "/showcol".
   * - Note: Attaching a rectangle colshape to another element may give unexpected results as the origin is not at the rectangle centre. Try using a collision circle for attaching instead.
   * @param fX The X position of the collision rectangle's west side.
   * @param fY The Y position of the collision rectangle's south side.
   * @param fWidth The collision rectangle's width.
   * @param fHeight The collision rectangle's height.
   * @see https://wiki.mtasa.com/wiki/CreateColRectangle
   **/
  constructor(fX: number, fY: number, fWidth: number, fHeight: number);
}
