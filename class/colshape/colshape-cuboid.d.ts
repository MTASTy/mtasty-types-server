/** @customConstructor ColShape.Cuboid */
declare class ColShapeCuboid extends ColShape {
  /**
   * This function creates a collision cuboid.
   * This is a shape that has a position, width, depth and height.
   * The XYZ of the col starts at the southwest bottom corner of the shape.
   * - Tip: To visualize a colshape when writing scripts, use the client console command "/showcol".
   * - Note: Attaching a cuboid colshape to another element may give unexpected results as the origin is not at the cuboid centre. Try using a collision sphere for attaching instead.
   * @param fX The X position of the collision cuboid's western side.
   * @param fY The Y position of the collision cuboid's southern side.
   * @param fZ The Z position of the collision cuboid's lowest side.
   * @param fWidth The collision cuboid's width.
   * @param fDepth The collision cuboid's depth.
   * @param fHeight The collision cuboid's height.
   * @see https://wiki.mtasa.com/wiki/CreateColCuboid
   **/
  constructor(fX: number, fY: number, fZ: number, fWidth: number, fDepth: number, fHeight: number);
}
