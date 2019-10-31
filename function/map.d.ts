/** @noSelfInFile */

/**
 * This function is intended to load data from a loaded XML file into the element tree.
 * This could be used for loading an external map, or part of another map.
 * @param node The node that you wish to load into the element tree.
 * @param parent The node you wish to be the parent of the new map data.
 * @returns Returns an element that corresponds to the root of the new data added, i.e. an element that represents the node xmlnode passed to the function. Returns false if the arguments are invalid.
 * @see https://wiki.mtasa.com/wiki/LoadMapData
 **/
declare function loadMapData(node: XML, parent: BaseElement): BaseElement | false;

/**
 * This function is used to reset the state of a player.
 * It is intended to restore a player to his default state as if he had just joined the server, without any scripts affecting him.
 * @param thePlayer The specific player you wish to restore the state of. Not specifying this will result in all players map info being reset.
 * @returns Returns true if the map info was reset successfully, otherwise false.
 * @see https://wiki.mtasa.com/wiki/ResetMapInfo
 **/
declare function resetMapInfo(thePlayer?: Player): boolean;

/**
 * This converts a set of elements in the element tree into XML.
 * This is a format that can then be loaded as a map file.
 * Each element represents a single XML node.
 * @param node An existing node that should contain the contents of baseElement
 * @param baseElement The first element to output to the xml tree. This element and all its children (and their children, etc) will be output.
 * @param [childrenOnly=false] Defines if you want to only save children of the specified element.
 * @returns Returns true if the map was saved successfully, otherwise false.
 * @see https://wiki.mtasa.com/wiki/SaveMapData
 **/
declare function saveMapData(node: XML, baseElement: BaseElement, childrenOnly?: boolean): boolean;
