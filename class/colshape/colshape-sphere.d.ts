/** @customConstructor ColShapeSphere */
declare class ColShapeSphere extends ColShape {
  /**
   * This function creates a collision sphere.
   * This is a shape that has a position and a radius.
   * See Wikipedia for a definition of a sphere.
   * - Tip: To visualize a colshape when writing scripts, use the client console command "/showcol".
   * @param fX The collision sphere's center point's X axis position.
   * @param fY The collision sphere's center point's Y axis position.
   * @param fZ The collision sphere's center point's Z axis position.
   * @param fRadius The collision sphere's radius.
   * @see https://wiki.mtasa.com/wiki/CreateColSphere
   **/
  constructor(fX: number, fY: number, fZ: number, fRadius: number);
}
