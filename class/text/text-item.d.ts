/** @customConstructor TextItem */
declare class TextItem {
  // position: [number, number]; // TODO: fix type
  text: string;
  scale: number;
  // priority: "high" | "medium" | "low"; // TODO: unknown type

  /**
   * This function creates a text item.
   * A text item represents a single area of text, much like a label does in standard GUI programming.
   * A text item can only be seen by players if it is added to a textdisplay using textDisplayAddText.
   * Each text item can be added to multiple displays, if need be.
   * @param text A string of text you want to display.
   * @param x A floating point number between 0.0 and 1.0 indicating how far across the screen the text should be shown, as a percentage of the width, from the left hand side.
   * @param y A floating point number between 0.0 and 1.0 indicating how far down the screen the text should be shown, as a percentage of the height, from the top.
   * @param priority How important it is that this text should be up to date on client's screens. Valid values are: "low", "medium", "high" which are aliases for 0, 1 and 2 respectively.
   * @param [red=255] A value between 0 and 255 indicating how red the text should be.
   * @param [green=255] A value between 0 and 255 indicating how green the text should be.
   * @param [blue=255] A value between 0 and 255 indicating how blue the text should be.
   * @param [alpha=255] A value between 0 and 255 indicating how transparent the text should be, with 0 being fully transparent, and 255 being opaque.
   * @param [scale=1] A floating point value indicating the scale of the text. The default is 1.0, which is around 12pt.
   * @param [alignX=left] A string representing the X-alignment of the text ("left", "center", "right").
   * @param [alignY=top] A string representing the Y-alignment of the text ("top", "center", "bottom").
   * @param [shadowAlpha=0] A value between 0 and 255 indicating how dark the drop shadow should be.
   * @see https://wiki.mtasa.com/wiki/TextCreateTextItem
   **/
  constructor(text: string, x: number, y: number, priority?: string, red?: number, green?: number, blue?: number, alpha?: number, scale?: number, alignX?: string, alignY?: string, shadowAlpha?: number);

  /**
   * This function destroys a textitem element.
   * @see https://wiki.mtasa.com/wiki/TextDestroyTextItem
   **/
  destroy(): void;

  /**
   * This function allows you to retrieve the color of a text item.
   * @returns Returns four numbers in RGBA format, with a maximum value of 255 for each. The values are, in order, red, green, blue, and alpha. Alpha decides transparency where 255 is opaque and 0 is transparent.
   * @see https://wiki.mtasa.com/wiki/TextItemGetColor
   * @tupleReturn
   **/
  getColor(): [number, number, number, number];

  /**
   * This function allows retrieval of the position of a text item.
   * @returns Returns two numbers of the x and y position on the screen, where the maximum value is 1.0.
   * @see https://wiki.mtasa.com/wiki/TextItemGetPosition
   * @tupleReturn
   **/
  getPosition(): [number, number];

  /**
   * This function retrieves the priority of a text item.
   * Priority defines the rate at whihc a text item is updated.
   * @returns Returns a number of the priority of a text item, 0 = low, 1 = medium, 2 = high.
   * @see https://wiki.mtasa.com/wiki/TextItemGetPriority
   **/
  getPriority(): 0 | 1 | 2;

  /**
   * This function allows retrieval of the scale or size of a text item.
   * @returns Returns a number of the scale of the text. 1.0 is around 12pt.
   * @see https://wiki.mtasa.com/wiki/TextItemGetScale
   **/
  getScale(): number;

  /**
   * This function returns the current text of the specified textitem.
   * @returns Returns a string containing the text.
   * @see https://wiki.mtasa.com/wiki/TextItemGetText
   **/
  getText(): string;

  /**
   * This function sets the color of a text item.
   * @param r The amount of red in the text item's color (0 - 255).
   * @param g The amount of green in the text item's color (0 - 255).
   * @param b The amount of blue in the text item's color (0 - 255).
   * @param a The amount of alpha in the text item's color (0 - 255). Alpha decides transparency where 255 is opaque and 0 is transparent.
   * @returns Returns true if the color was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/TextItemSetColor
   **/
  setColor(r: number, g: number, b: number, a: number): boolean;

  /**
   * This function allows the setting of the position of a text item.
   * @param x A floating point number between 0.0 and 1.0 indicating how far across the screen the text should be shown, as a percentage of the width, from the left hand side.
   * @param y A floating point number between 0.0 and 1.0 indicating how far down the screen the text should be shown, as a percentage of the height, from the top.
   * @returns Returns true if the position was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/TextItemSetPosition
   **/
  setPosition(x: number, y: number): boolean

  /**
   * This function sets the priority for a text item.
   * Priority is the importance of sending updated text to the client.
   * The system is implemented as 3 queues, with the high queue being emptied before the medium queue is processed, and with one update sent per server frame.
   * Hence, if you set all your text items to medium priority it has the same effect as if you set them all to high or low.
   * @param priority The priority you wish to set to the item, which can be "high", "medium", or "low" respective of their priority.
   * @see https://wiki.mtasa.com/wiki/TextItemSetPriority
   **/
  setPriority(priority: "high" | "medium" | "low"): void;

  /**
   * This function allows the setting of the scale of a text item.
   * @param scale A floating point value indicating the scale of the text you wish to set to. 1.0 is around 12pt.
   * @returns Returns true if the scale was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/TextItemSetScale
   **/
  setScale(scale: number): boolean;

  /**
   * Overwrites a previously created text item with the specified text.
   * @param text The new text for the text item.
   * @see https://wiki.mtasa.com/wiki/TextItemSetText
   **/
  setText(text: string): void;
}
