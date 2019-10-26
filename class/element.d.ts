/** @customConstructor Element */
declare class Element {
  id: string;
  callPropagationEnabled: boolean;
  readonly parent: Element | false;
  readonly zoneName: string;
  readonly attachedTo: Element | false;
  readonly children: Element[];
  frozen: boolean;
  readonly attachedElements: Element[];
  inWater: boolean;
  health: number;
  alpha: number;
  readonly type: string;
  dimension: number;
  doubleSided: boolean;
  model: number;
  readonly lowLOD: Element | false;
  readonly syncer: Player | false;
  readonly childrenCount: number;
  interior: number;
  readonly colShape: ColShape | false;
  collisions: boolean;
  position: Vector3;
  rotation: Vector3;
  matrix: Matrix;
  velocity: Vector3;
  angularVelocity: Vector3;
  readonly isElement: boolean;

  // static getByID(id: string): Element | false;
  // static getAllByType(type: string): Element[];
  // static getByIndex(type: string, index: number): Element | false;
  // static getWithinRange(x: number, y: number, z: number, range: number, elemType?: string): Element[] | false;
  // static create(elementType: string, elementID?: string): Element | false;

  /**
   * This function is used to create a new dummy element in the element tree which do not necessarily represent an entity within the San Andreas world.
   * A common use for this function is for creating custom elements, such as a Flag or a Base.
   * Elements created using this function are placed in the element tree with their parent as the 'dynamic' map element.
   * @param elementType The type of element being created.
   * @param [elementID=undefined] The ID of the element being created.
   * @returns Returns the element if it was successfully created. Returns false if the arguments are wrong.
   * @see https://wiki.mtasa.com/wiki/CreateElement
   **/
  constructor(elementType: string, elementID?: string);

  /**
   * This function clones (creates an exact copy of) an already existing element.
   * The root node, and player elements, cannot be cloned.
   * If a player element is a child of an element that is cloned, it will be skipped, along with the elements that exist as a child to the player element.
   * Players are not the only elements that cannot be cloned.
   * This list also includes remote clients, and console elements.
   * The cloned element will be placed on the element tree as a child of the same parent as the cloned element.
   * @param [xPos=0] A number point number representing the X coordinate on the map.
   * @param [yPos=0] A number point number representing the Y coordinate on the map.
   * @param [zPos=0] A number point number representing the Z coordinate on the map.
   * @param [cloneChildren=false] A boolean value representing whether or not the element's children will be cloned.
   * @returns Returns the handle of the new cloned element of the parent, false if invalid arguments were passed.
   * @see https://wiki.mtasa.com/wiki/CloneElement
   **/
  clone(xPos?: number, yPos?: number, zPos?: number, cloneChildren?: boolean): Element;

  /**
   * This function destroys an element and all elements within it in the hierarchy (its children, the children of those children etc).
   * Player elements cannot be destroyed using this function.
   * A player can only be removed from the hierarchy when they quit or are kicked.
   * The root element also cannot be destroyed, however, passing the root as an argument will wipe all elements from the server, except for the players and clients, which will become direct descendants of the root node, and other elements that cannot be destroyed, such as resource root elements.
   * Players are not the only elements that cannot be deleted.
   * This list also includes remote clients and console elements.
   * - Note: As element ids are eventually recycled, always make sure you undefined variables containing the element after calling this function
   * @returns Returns true if the element was destroyed successfully, false if either the element passed to it was invalid or it could not be destroyed for some other reason (for example, clientside destroyElement can't destroy serverside elements).
   * @see https://wiki.mtasa.com/wiki/DestroyElement
   **/
  destroy(): boolean;

  // TODO: Complete :)
  // clearVisibility", "clearElementVisibleTo");
  // attach", "attachElements");
  // detach", "detachElements");
  // removeData", "removeElementData");
  //
  // setParent", "setElementParent");
  // setFrozen", "setElementFrozen");
  // setHealth", "setElementHealth");
  // setModel", "setElementModel");
  // setSyncer", "setElementSyncer");
  // setAlpha", "setElementAlpha");
  // setDoubleSided", "setElementDoubleSided");
  // setCollisionsEnabled", "setElementCollisionsEnabled");
  // setData", "setElementData");
  // setPosition", "setElementPosition");
  // setRotation", "setElementRotation");
  // setVelocity", "setElementVelocity");
  // setAngularVelocity", "setElementAngularVelocity");
  // setVisibleTo", "setElementVisibleTo");
  // setMatrix", "setElementMatrix");
  // setID", "setElementID");
  // setInterior", "setElementInterior");
  // setDimension", "setElementDimension");
  // setLowLOD", "setLowLODElement");
  // setAttachedOffsets", "setElementAttachedOffsets");
  // setCallPropagationEnabled", "setElementCallPropagationEnabled");
  //
  // getAttachedOffsets", "getElementAttachedOffsets");
  // getChild", "getElementChild");
  // getChildren", "getElementChildren");
  // getParent", "getElementParent");
  // getAttachedElements", "getAttachedElements");
  // getAttachedTo", "getElementAttachedTo");
  // getVelocity", "getElementVelocity", OOP_getElementVelocity);
  // getAngularVelocity", "getElementAngularVelocity", OOP_getElementTurnVelocity);
  // getID", "getElementID");
  // getZoneName", "getElementZoneName");
  // getAlpha", "getElementAlpha");
  // getHealth", "getElementHealth");
  // getModel", "getElementModel");
  // getChildrenCount", "getElementChildrenCount");
  // getSyncer", "getElementSyncer");
  // getAllData", "getAllElementData");
  // getColShape", "getElementColShape");
  // getData", "getElementData");
  // getPosition", "getElementPosition", OOP_getElementPosition);
  // getRotation", "getElementRotation", OOP_getElementRotation);
  // getMatrix", "getElementMatrix", OOP_getElementMatrix);
  // getType", "getElementType");
  // getInterior", "getElementInterior");
  // getDimension", "getElementDimension");
  // getLowLOD", "getLowLODElement");
  //
  // getCollisionsEnabled", "getElementCollisionsEnabled");
  // isCallPropagationEnabled", "isElementCallPropagationEnabled");
  // isWithinMarker", "isElementWithinMarker");
  // isWithinColShape", "isElementWithinColShape");
  // isFrozen", "isElementFrozen");
  // isInWater", "isElementInWater");
  // isDoubleSided", "isElementDoubleSided");
  // isVisibleTo", "isElementVisibleTo");
  // isLowLOD", "isElementLowLOD");
  // isAttached", "isElementAttached");
}
