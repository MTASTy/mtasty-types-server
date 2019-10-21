/**
 * This function creates a marker.
 * A marker is a 3D model in the world that can highlight a particular point or area, often used to instruct players where to go to perform actions such as entering buildings.
 * There are various limits that govern the maximum number of each type that can be visible at once.
 * These are: Coronas: 32 / Checkpoints, Rings, Cylinders and Arrows combined: 32
 * You are able to create as many markers as you wish (memory and element limit permitting), but the player will only be able to see the nearest ones up to the limit.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param [theType=checkpoint] The visual type of the marker to be created. Possible values: "checkpoint", "ring", "cylinder", "arrow", "corona".
 * @param [size=4] The diameter of the marker to be created, in meters.
 * @param [r=0] An integer number representing the amount of red to use in the colouring of the marker (0 - 255).
 * @param [g=0] An integer number representing the amount of green to use in the colouring of the marker (0 - 255).
 * @param [b=255] An integer number representing the amount of blue to use in the colouring of the marker (0 - 255).
 * @param [a=255] An integer number representing the amount of alpha to use in the colouring of the marker (0 - 255 where 0 is transparent and 255 is opaque).
 * @param visibleTo This defines which elements can see the marker. Defaults to visible to everyone.
 * @returns Returns the marker element that was created, or false if the arguments are incorrect.
 * @see https://wiki.mtasa.com/wiki/CreateMarker
 **/
declare function createMarker(x: number, y: number, z: number, theType?: "checkpoint" | "ring" | "cylinder" | "arrow" | "corona", size?: number, r?: number, g?: number, b?: number, a?: number, visibleTo?: Player): Marker | false;

/**
 * This function returns the color and transparency for a marker element.
 * Not all marker types support transparency.
 * @param theMarker The marker that you wish to retrieve the color of.
 * @returns Returns four numbers corresponding to the amount of red, green, blue and alpha (respectively) of the marker, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetMarkerColor
 * @tupleReturn
 **/
declare function getMarkerColor(theMarker: Marker): [number, number, number, number] | [false];

/**
 * Returns the number of markers that currently exist in the world.
 * @returns Returns the number of markers that currently exist.
 * @see https://wiki.mtasa.com/wiki/GetMarkerCount
 **/
declare function getMarkerCount(): number;

/**
 * This function returns the icon name for a marker.
 * @param theMarker A marker element referencing the specified marker.
 * @returns Returns false if the marker passed is invalid or a string containing one of the following: "none", "arrow", "finish".
 * @see https://wiki.mtasa.com/wiki/GetMarkerIcon
 **/
declare function getMarkerIcon(theMarker: Marker): string | false;

/**
 * This function returns a float containing the size of the specified marker.
 * @param myMarker The marker that you wish to retrieve the size of.
 * @returns Returns a number containing the size of the specified marker.
 * @see https://wiki.mtasa.com/wiki/GetMarkerSize
 **/
declare function getMarkerSize(myMarker: Marker): number;

/**
 * This function returns the position of the specified marker's target, the position it points to. This only works for checkpoint markers and ring markers.
 * For checkpoints it returns the position the arrow is pointing to, for ring markers it returns the position the ring is facing.
 * You can set this target with setMarkerTarget.
 * @param theMarker The marker you wish to retrieve the target position of.
 * @returns Returns three numbers if a target is set, or false in the first variable and undefined in the two others if the marker is invalid or no target is set.
 * @see https://wiki.mtasa.com/wiki/GetMarkerTarget
 * @tupleReturn
 **/
declare function getMarkerTarget(theMarker: Marker): [number, number, number] | [false | undefined];

/**
 * This function returns a marker's type.
 * @param theMarker A marker element referencing the specified marker.
 * @returns Returns one of the following strings: "checkpoint", "ring", "cylinder", "arrow", "corona". If an invalid marker is specified, false is returned.
 * @see https://wiki.mtasa.com/wiki/GetMarkerType
 **/
declare function getMarkerType(theMarker: Marker): string | false;

/**
 * This function sets the color of the specified marker by modifying the values for red, green and blue.
 * @param theMarker The marker that you wish to set the color of.
 * @param r The amount of red in the final color (0 to 255).
 * @param g The amount of green in the final color (0 to 255).
 * @param b The amount of blue in the final color (0 to 255).
 * @param a The amount of alpha in the final color (0 to 255).
 * @returns Returns true if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/SetMarkerColor
 **/
declare function setMarkerColor(theMarker: Marker, r: number, g: number, b: number, a: number): boolean;

/**
 * This function allows changing the icon of a checkpoint marker.
 * @param theMarker The marker to change the visual style of.
 * @param icon A string referring to the type of icon, acceptable values are: "none", "arrow", "finish".
 * @returns Returns true if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/SetMarkerIcon
 **/
declare function setMarkerIcon(theMarker: Marker, icon: "none" | "arrow" | "finish"): boolean;

/**
 * This function sets the size of the specified marker.
 * Setting negative value will "flip" the marker, do nothing or make it invisible: cylinder or arrow - upside down, ring - inside out, checkpoint - disappear, corona - bigger.
 * @param theMarker The marker that you wish to set the size of.
 * @param size A number representing new size of the marker.
 * @returns Returns true if successful, false if failed.
 * @see https://wiki.mtasa.com/wiki/SetMarkerSize
 **/
declare function setMarkerSize(theMarker: Marker, size: number): boolean;

/**
 * This function sets the 'target' for a marker.
 * Only the checkpoint and ring marker types can have a target.
 * For checkpoint markers, the target is shown as an arrow aiming at the point specified.
 * For ring markers, the target is shown by rotating the whole ring so that it faces the point specified.
 * This function is most useful for setting up markers for races, where each marker points to the next one's position (This is mostly used in races!).
 * @param theMarker The marker to set the target of.
 * @param x The x axis of the coordinate to target the marker at.
 * @param y The y axis of the coordinate to target the marker at.
 * @param z The z axis of the coordinate to target the marker at.
 * @returns Returns true if target was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetMarkerTarget
 **/
declare function setMarkerTarget(theMarker: Marker, x: number, y: number, z: number): boolean;

/**
 * This function changes a marker's type.
 * The type controls how the marker is displayed in the game.
 * It's important that you use marker types that users are used to from the single player game.
 * For example, checkpoints are used in races, rings are used for aircraft races, arrows are used for entering buildings etc.
 * @param theMarker A marker element referencing the specified marker.
 * @param markerType A string denoting the marker type. Valid values are: "checkpoint", "ring", "cylinder", "arrow", "corona".
 * @returns Returns true if the marker type was changed, false if it wasn't or marker values were invalid.
 * @see https://wiki.mtasa.com/wiki/SetMarkerType
 **/
declare function setMarkerType(theMarker: Marker, markerType: "checkpoint" | "ring" | "cylinder" | "arrow" | "corona"): boolean;

/**
 * This function is used to determine if an element is within a marker.
 * @param theElement The element you're checking.
 * @param theMarker The marker you're checking.
 * @returns Returns true if the element is within the marker, false otherwise
 * @see https://wiki.mtasa.com/wiki/IsElementWithinMarker
 **/
declare function isElementWithinMarker(theElement: Element, theMarker: Marker): boolean;
