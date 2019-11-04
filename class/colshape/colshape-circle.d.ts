/** @customConstructor ColShapeCircle */
declare class ColShapeCircle extends ColShape {
  /**
   * This function creates a collision circle.
   * This is a shape that has a position and a radius and infinite height that you can use to detect a player's presence.
   * Events will be triggered when a player enters or leaves it.
   * - Tip: To visualize a colshape when writing scripts, use the client console command "/showcol".
   * @param fX The collision circle's center point's X axis position.
   * @param fY The collision circle's center point's Y axis position.
   * @param radius The radius of the collision circle.
   * @see https://wiki.mtasa.com/wiki/CreateColCircle
   **/
  constructor(fX: number, fY: number, radius: number);
}
