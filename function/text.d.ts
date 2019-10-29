/** @noSelfInFile */

/**
 * A text display is like a canvas that can contain many items of text.
 * Each display can be seen by multiple observers (players) and each player can see multiple displays.
 * @returns The text display if creation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/TextCreateDisplay
 **/
declare function textCreateDisplay(): TextDisplay | false;

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
 * @returns Returns a textitem if creation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/TextCreateTextItem
 **/
declare function textCreateTextItem(text: string, x: number, y: number, priority?: string, red?: number, green?: number, blue?: number, alpha?: number, scale?: number, alignX?: string, alignY?: string, shadowAlpha?: number): TextItem | false;

/**
 * This function destroys a text display and will unlink all the textitems on it. This does not stop the textitems existing, but anyone who was observing the textitems through this display will stop seeing them.
 * @param display This is the textdisplay that you wish to have destroyed.
 * @returns Returns true if creation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/TextDestroyDisplay
 **/
declare function textDestroyDisplay(display: TextDisplay): boolean;

/**
 * This function destroys a textitem element.
 * @param theTextitem The text item you wish to destroy.
 * @returns
 * @see https://wiki.mtasa.com/wiki/TextDestroyTextItem
 **/
declare function textDestroyTextItem(theTextitem: TextItem): void;

/**
 * This function adds a player as an observer of a textdisplay.
 * This allows the player to see any textitems that the textdisplay contains.
 * @param display The textdisplay to add the player to as an observer.
 * @param playerToAdd The player that should observe the textdisplay.
 * @returns
 * @see https://wiki.mtasa.com/wiki/TextDisplayAddObserver
 **/
declare function textDisplayAddObserver(display: TextDisplay, playerToAdd: Player): void;

/**
 * This function adds a textitem to a textdisplay.
 * This allows any observers of the textdisplay to see the textitem.
 * @param displayToAddTo The textdisplay to add the textitem to.
 * @param itemToAdd The textitem to add to the display.
 * @returns
 * @see https://wiki.mtasa.com/wiki/TextDisplayAddText
 **/
declare function textDisplayAddText(displayToAddTo: TextDisplay, itemToAdd: TextItem): void;

/**
 * This function can be used to retrieve all the players currently observing a specified textdisplay.
 * @param theDisplay The textdisplay of which observers you want to get.
 * @returns Returns an array of players that are observers of the display or false if invalid textdisplay is passed.
 * @see https://wiki.mtasa.com/wiki/TextDisplayGetObservers
 **/
declare function textDisplayGetObservers(theDisplay: TextDisplay): Player[] | false;

/**
 * This function checks if a player can see the specified textdisplay.
 * @param display The textdisplay.
 * @param thePlayer The player.
 * @returns Return true if textdisplay is showing, or false if not.
 * @see https://wiki.mtasa.com/wiki/TextDisplayIsObserver
 **/
declare function textDisplayIsObserver(display: TextDisplay, thePlayer: Player): boolean;

/**
 * This function removes a player observer of a textdisplay.
 * This stops the player from being able to see textitems that the textdisplay contains.
 * @param display The textdisplay to remove the player from as an observer.
 * @param playerToRemove The player that should be removed from the textdisplay.
 * @returns
 * @see https://wiki.mtasa.com/wiki/TextDisplayRemoveObserver
 **/
declare function textDisplayRemoveObserver(display: TextDisplay, playerToRemove: Player): boolean;

/**
 * This function removes a textitem from a textdisplay.
 * This stops any observers of the textdisplay from being able to see the textitem.
 * @param displayToRemoveFrom The textdisplay to remove the textitem from.
 * @param itemToRemove The textitem to remove from the display.
 * @returns
 * @see https://wiki.mtasa.com/wiki/TextDisplayRemoveText
 **/
declare function textDisplayRemoveText(displayToRemoveFrom: TextDisplay, itemToRemove: TextItem): void;

/**
 * This function allows you to retrieve the color of a text item.
 * @param theTextItem The text item you wish to retrieve the color of.
 * @returns Returns four numbers in RGBA format, with a maximum value of 255 for each. The values are, in order, red, green, blue, and alpha. Alpha decides transparency where 255 is opaque and 0 is transparent. false is returned if the text item is invalid.
 * @see https://wiki.mtasa.com/wiki/TextItemGetColor
 * @tupleReturn
 **/
declare function textItemGetColor(theTextItem: TextItem): [number, number, number, number] | [false];

/**
 * This function allows retrieval of the position of a text item.
 * @param theTextItem The textitem you wish to retrieve the position of.
 * @returns Returns two numbers of the x and y position on the screen, where the maximum value is 1.0.
 * @see https://wiki.mtasa.com/wiki/TextItemGetPosition
 * @tupleReturn
 **/
declare function textItemGetPosition(theTextItem: TextItem): [number, number] | [false];

/**
 * This function retrieves the priority of a text item.
 * Priority defines the rate at whihc a text item is updated.
 * @param textitemToCheck The text item you wish to retrieve the priority of.
 * @returns Returns a number of the priority of a text item, 0 = low, 1 = medium, 2 = high.
 * @see https://wiki.mtasa.com/wiki/TextItemGetPriority
 **/
declare function textItemGetPriority(textitemToCheck: TextItem): 0 | 1 | 2;

/**
 * This function allows retrieval of the scale or size of a text item.
 * @param theTextitem The text item you wish to retrieve the scale of.
 * @returns Returns a number of the scale of the text. 1.0 is around 12pt.
 * @see https://wiki.mtasa.com/wiki/TextItemGetScale
 **/
declare function textItemGetScale(theTextitem: TextItem): number;

/**
 * This function returns the current text of the specified textitem.
 * @param theTextitem A valid textitem.
 * @returns Returns a string containing the text if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/TextItemGetText
 **/
declare function textItemGetText(theTextitem: TextItem): string | false;

/**
 * This function sets the color of a text item.
 * @param theTextItem The textitem you wish to set the color of.
 * @param r The amount of red in the text item's color (0 - 255).
 * @param g The amount of green in the text item's color (0 - 255).
 * @param b The amount of blue in the text item's color (0 - 255).
 * @param a The amount of alpha in the text item's color (0 - 255). Alpha decides transparency where 255 is opaque and 0 is transparent.
 * @returns Returns true if the color was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/TextItemSetColor
 **/
declare function textItemSetColor(theTextItem: TextItem, r: number, g: number, b: number, a: number): boolean;

/**
 * This function allows the setting of the position of a text item.
 * @param theTextItem The text item that you want to move.
 * @param x A floating point number between 0.0 and 1.0 indicating how far across the screen the text should be shown, as a percentage of the width, from the left hand side.
 * @param y A floating point number between 0.0 and 1.0 indicating how far down the screen the text should be shown, as a percentage of the height, from the top.
 * @returns Returns true if the position was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/TextItemSetPosition
 **/
declare function textItemSetPosition(theTextItem: TextItem, x: number, y: number): boolean;

/**
 * This function sets the priority for a text item.
 * Priority is the importance of sending updated text to the client.
 * The system is implemented as 3 queues, with the high queue being emptied before the medium queue is processed, and with one update sent per server frame.
 * Hence, if you set all your text items to medium priority it has the same effect as if you set them all to high or low.
 * @param theTextItem The text item you wish to set priority to.
 * @param priority The priority you wish to set to the item, which can be "high", "medium", or "low" respective of their priority.
 * @returns
 * @see https://wiki.mtasa.com/wiki/TextItemSetPriority
 **/
declare function textItemSetPriority(theTextItem: TextItem, priority: "high" | "medium" | "low"): void;

/**
 * This function allows the setting of the scale of a text item.
 * @param theTextitem The text item you wish to set the scale of.
 * @param scale A floating point value indicating the scale of the text you wish to set to. 1.0 is around 12pt.
 * @returns Returns true if the scale was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/TextItemSetScale
 **/
declare function textItemSetScale(theTextitem: TextItem, scale: number): boolean;

/**
 * Overwrites a previously created text item with the specified text.
 * @param theTextitem An existing text item that was previously created with textCreateTextItem.
 * @param text The new text for the text item.
 * @returns
 * @see https://wiki.mtasa.com/wiki/TextItemSetText
 **/
declare function textItemSetText(theTextitem: TextItem, text: string): void;
