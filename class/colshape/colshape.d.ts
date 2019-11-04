declare abstract class ColShape extends BaseElement {
  readonly shapeType: number;

  protected constructor();

  /**
   * This function is used to retrieve a list of all elements in a colshape, of the specified type.
   * - Note: For legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move.
   * * This function doesn't verify whether elements are in the same dimension and interior, additional checks could be implemented manually if they are needed.
   * @param [elemType=undefined] The type of element you want a list of. This can be any element type, the common ones being
   * @returns Returns an array containing all the elements inside the colshape, of the specified type. Returns an empty array if there are no elements inside.
   * @see https://wiki.mtasa.com/wiki/GetElementsWithinColShape
   **/
  getElementsWithin(elemType?: string): BaseElement[];

  /**
   * This function checks if a 3D position is inside a colshape or not.
   * @param posX The X coordinate of the position you're checking.
   * @param posY The Y coordinate of the position you're checking.
   * @param posZ The Z coordinate of the position you're checking.
   * @returns Returns true if the position is inside the colshape, false if it isn't or if any parameters are invalid.
   * @see https://wiki.mtasa.com/wiki/IsInsideColShape
   **/
  isInside(posX: number, posY: number, posZ: number): boolean;

  /**
   * This function is used to retrieve the type of an colshape.
   * @returns Returns a number of the type of the colshape.
   * @see https://wiki.mtasa.com/wiki/GetColShapeType
   **/
  getShapeType(): number;
}
