/** @noSelfInFile */

/**
 * This function retrieves the current gametype as set by setGameType.
 * The game type is displayed in the server browser next to the server's name.
 * @returns Returns the gametype as a string. If no gametype is set it returns undefined.
 * @see https://wiki.mtasa.com/wiki/GetGameType
 **/
declare function getGameType(): string | undefined;

/**
 * This function retrieves the current mapname as set by setMapName.
 * @returns Returns the mapname as a string. If no mapname is set it returns undefined.
 * @see https://wiki.mtasa.com/wiki/GetMapName
 **/
declare function getMapName(): string | undefined;

/**
 * This function gets a rule value.
 * A rule value is a string that can be viewed by server browsers and used for filtering the server list.
 * @param key The name of the rule
 * @returns Returns a string containing the value set for the specified key, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/GetRuleValue
 **/
declare function getRuleValue(key: string): string | false;

/**
 * This function removes a set rule value that can be viewed by server browsers.
 * @param key The name of the rule you wish to remove
 * @returns Returns true if the rule value was removed, false if it failed.
 * @see https://wiki.mtasa.com/wiki/RemoveRuleValue
 **/
declare function removeRuleValue(key: string): boolean;

/**
 * This function sets a string containing a name for the game type.
 * This should be the game-mode that is active, for example "Capture The Flag" or "Deathmatch".
 * This is then displayed in the server browser and external server browsers.
 * It should be noted that mapmanager handles this automatically for gamemodes that utilise the map/gamemode system.
 * @param gameType A string containing a name for the game mode, or false to clear it.
 * @returns Returns true if the game type was set, false if an invalid argument was passed to the function.
 * @see https://wiki.mtasa.com/wiki/SetGameType
 **/
declare function setGameType(gameType: string): boolean;

/**
 * This function is used to set a map name that will be visible in the server browser.
 * In practice you should generally rely on the mapmanager to do this for you.
 * @param mapName The name you wish the server browser to show.
 * @returns Returns true if map name was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetMapName
 **/
declare function setMapName(mapName: string): boolean;

/**
 * This function sets a rule value that can be viewed by server browsers.
 * @param key The name of the rule
 * @param value The value you wish to set for the rule
 * @returns Returns true if the rule value was set, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/SetRuleValue
 **/
declare function setRuleValue(key: string, value: string): boolean;
