/** @noSelfInFile */

/**
 * Creates an area of water.
 * The largest possible size of a water area is 5996×5996.
 * Also be aware that the function will change all x and y coordinates you specify into even integer numbers if necessary: this is because of a limitation of San Andreas.
 * You are able to give the water a shallow water effect, which practically changes the water invisible to the eye.
 * However, all elements still work the same way as without the shallow effect - allowing swimming, diving, vehicles to sink, etc.
 * - Note: X and Y positions will be changed to an even integer. i.e. -2, 0, 2, 4 etc.
 * - Important note: If you're working with dimensions, be sure to apply it by using setElementDimension.
 * @param x1 position of bottom left (south-west) corner.
 * @param y1 position of bottom left (south-west) corner.
 * @param z1 position of bottom left (south-west) corner.
 * @param x2 position of bottom right (south-east) corner.
 * @param y2 position of bottom right (south-east) corner.
 * @param z2 position of bottom right (south-east) corner.
 * @param x3 position of top left (north-west) corner.
 * @param y3 position of top left (north-west) corner.
 * @param z3 position of top left (north-west) corner.
 * @param x4 position of top right (north-east) corner.
 * @param y4 position of top right (north-east) corner.
 * @param z4 position of top right (north-east) corner.
 * @param [bShallow=false] gives the water a shallow water effect.
 * @returns Returns a water element if successful, false otherwise. The water element can be repositioned with setElementPosition and destroyed with destroyElement.
 * @see https://wiki.mtasa.com/wiki/CreateWater
 **/
declare function createWater(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4?: number, y4?: number, z4?: number, bShallow?: boolean): Water | false;

/**
 * This function returns the water color of the GTA world.
 * - Note: The server can only return the water color, if it has actually been set by script.
 * @returns Returns 4 numbers, indicating the color of the water (RGBA).
 * @see https://wiki.mtasa.com/wiki/GetWaterColor
 * @tupleReturn
 **/
declare function getWaterColor(): [number, number, number, number];

/**
 * Gets the world position of a vertex (i.e. corner) of a water area.
 * Each water area is either a triangle or quad (rectangle) so each has 3 or 4 corners.
 * @param theWater the water element to get the vertex of.
 * @param vertexIndex the index of the vertex whose position to get. Values range from 1 to 4 for a water quad, or 1 to 3 for a triangle.
 * @returns Returns the x, y and z coordinates of the specified vertex if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetWaterVertexPosition
 * @tupleReturn
 **/
declare function getWaterVertexPosition(theWater: Water, vertexIndex: 1 | 2 | 3 | 4): [number, number, number] | [false];

/**
 * This function returns the current wave height.
 * @returns Returns the height as a number, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetWaveHeight
 **/
declare function getWaveHeight(): number | false;

/**
 * This function reset the water color of the GTA world to default.
 * @returns Returns true if water color was reset correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetWaterColor
 **/
declare function resetWaterColor(): boolean;

/**
 * This function resets the water of the GTA world back to its default level.
 * Water elements are not affected.
 * @returns Returns true if water level was reset correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetWaterLevel
 **/
declare function resetWaterLevel(): boolean;

/**
 * This function changes the water color of the GTA world.
 * @param red The red value of the water, from 0 to 255.
 * @param green The green value of the water, from 0 to 255.
 * @param blue The blue value of the water, from 0 to 255.
 * @param [alpha=200] The alpha (visibility) value of the water, from 0 to 255.Defaults to 200 if not declared.
 * @returns Returns true if water color was set correctly, false if invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/SetWaterColor
 **/
declare function setWaterColor(red: number, green: number, blue: number, alpha?: number): boolean;

/**
 * Sets the height of some or all the water in the game world.
 * - Note: When the water level is 0, the standard GTA rendering is performed so that water is visible when viewed through translucent surfaces, such as vehicle windows. However, some MTA custom objects placed underwater will appear in front of the water. Setting the water level to any non-zero value (i.e. setWaterLevel(0.001)) forces alternative rendering and MTA custom objects placed underwater will be drawn correctly.
 * @param level the new Z coordinate of the water surface.
 * @param [includeWaterFeatures=true] a boolean indicating whether to also set the level of water features such as ponds and pools.
 * @param [includeWaterElements=true] a boolean indicating whether to also set the level of all water elements.
 * @returns Returns true if successful, false in case of failure. Returns true if successful, false in case of failure (there is no water at the specified coordinates).
 * @see https://wiki.mtasa.com/wiki/SetWaterLevel
 **/
declare function setWaterLevel(level: number, includeWaterFeatures?: boolean, includeWaterElements?: boolean): boolean;

/**
 * Sets the height of some or all the water in the game world.
 * - Note: When the water level is 0, the standard GTA rendering is performed so that water is visible when viewed through translucent surfaces, such as vehicle windows. However, some MTA custom objects placed underwater will appear in front of the water. Setting the water level to any non-zero value (i.e. setWaterLevel(0.001)) forces alternative rendering and MTA custom objects placed underwater will be drawn correctly.
 * @param theWater the water element to change.
 * @param level the new Z coordinate of the water surface.
 * @returns Returns true if successful, false in case of failure. Returns true if successful, false in case of failure (there is no water at the specified coordinates).
 * @see https://wiki.mtasa.com/wiki/SetWaterLevel
 **/
declare function setWaterLevel(theWater: Water, level: number): boolean;

/**
 * Sets the world position of a corner point of a water area.
 * - Note: X and Y positions will be changed to an even integer. i.e. -2, 0, 2, 4 etc.
 * @param theWater the water element of which to change a vertex.
 * @param vertexIndex the index of the vertex to move. Values range from 1 to 4 for water quads, and 1 to 3 for triangles.
 * @param x the X coordinate to set for the vertex.
 * @param y the Y coordinate to set for the vertex.
 * @param z the Z coordinate to set for the vertex.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWaterVertexPosition
 **/
declare function setWaterVertexPosition(theWater: Water, vertexIndex: 1 | 2 | 3 | 4, x: number, y: number, z: number): boolean;

/**
 * This function sets the wave height to the desired value, the default is 0.
 * @param height A float between 0 and 100.
 * @returns Returns a boolean value true or false that tells you if it was successful or not.
 * @see https://wiki.mtasa.com/wiki/SetWaveHeight
 **/
declare function setWaveHeight(height: number): boolean;
