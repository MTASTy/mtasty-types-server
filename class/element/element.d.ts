declare abstract class Element {
  /**
   * This function returns an element from the specified ID. If more than one element with the same ID exists, only the first one in the order it appears in the XML tree will be returned by this function.
   * - Note: The ID in this context is the value of the 'id' data item of the element (the attribute in the .map file), NOT the model ID, weapon ID or similiar.
   * @param id The ID of the element as it appears in the XML file or as set by setElementID.
   * @param [index=0] If there are two or more elements of the same ID it will return the element with the specified index starting at 0.
   * @returns Returns the element with the given ID, or false if no such element exists.
   * @see https://wiki.mtasa.com/wiki/GetElementByID
   **/
  static getByID(id: string, index?: number): BaseElement | false;

  /**
   * This function is used to retrieve a list of all elements of the specified type. This can be useful, as it disregards where in the element tree it is. It can be used with either the built in types (listed below) or with any custom type used in a .map file. For example, if there is an element of type "flag" (e.g. <flag />) in the .map file, the using "flag" as the type argument would find it.
   * @param theType The type of element you want a list of. This is the same as the tag name in the .map file, so this can be used with a custom element type if desired.
   * @param [startat=getRootElement()] The element the search should start at. Children of this element are searched, siblings or parents will not be found. By default, this is the root element which should suit most uses.
   * @returns Returns an array containing all the elements of the specified type. Returns an empty array if there are no elements of the specified type. Returns false if the string specified is invalid (or not a string).
   * @see https://wiki.multitheftauto.com/wiki/GetElementsByType
   **/
  static getAllByType(theType: string, startat?: BaseElement): BaseElement[] | false;

  /**
   * This function returns an element of the specified type with the specified index.
   * @param theType the type of the element to be returned. Examples include "player", "vehicle", or a custom type.
   * @param index the element's index (0 for the first element, 1 for the second, etc).
   * @returns Returns the requested element, or false if it doesn't exist.
   * @see https://wiki.mtasa.com/wiki/GetElementByIndex
   **/
  static getByIndex(theType: string, index: number): BaseElement | false;

  /**
   * This function is used to retrieve a list of all elements of specified type within a range of 3D coordinates.
   * - Note: This function doesn't verify whether elements are in the same dimension and interior, additional checks could be implemented manually if they are needed. This function checks if elements are in a box, not in a circle. Z argument isn't in use currently, but make your scripts like it is for future compatibility reasons. This function doesn't work with elements which is created by createElement.
   * @param x the x coordinate at which to retrieve elements.
   * @param y the y coordinate at which to retrieve elements.
   * @param z the z coordinate at which to retrieve elements.
   * @param range the range at the coordinates in which to retrieve elements.
   * @param [elemType=""] The type of element you want a list of.
   * @returns Returns a object containing all the elements of the specified type within range. Returns an empty object if there are no elements within range. Returns false if the arguments are invalid.
   * @see https://wiki.mtasa.com/wiki/GetElementsWithinRange
   **/
  static getWithinRange(x: number, y: number, z: number, range: number, elemType?: string): BaseElement[] | false;

  /**
   * This function is used to create a new dummy element in the element tree which do not necessarily represent an entity within the San Andreas world.
   * A common use for this function is for creating custom elements, such as a Flag or a Base.
   * Elements created using this function are placed in the element tree with their parent as the 'dynamic' map element.
   * @param elementType The type of element being created.
   * @param [elementID=undefined] The ID of the element being created.
   * @returns Returns the element if it was successfully created. Returns false if the arguments are wrong.
   * @see https://wiki.mtasa.com/wiki/CreateElement
   **/
  static create(elementType: string, elementID?: string): BaseElement | false;
}
