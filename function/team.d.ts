/**
 * This function is for returning the number of players in the specified team.
 * @param theTeam The team you wish to retrieve the player count of.
 * @returns Returns an integer containing the number of players in the team, false if it could not be retrieved.
 * @see https://wiki.mtasa.com/wiki/CountPlayersInTeam
 **/
declare function countPlayersInTeam(theTeam: Team): number | false;

/**
 * This function is for creating a new team, which can be used to group players.
 * Players will not join the team until they are respawned.
 * @param teamName A string representing the teams name.
 * @param [colorR=255] An integer representing the red color value.
 * @param [colorG=255] An integer representing the green color value.
 * @param [colorB=255] An integer representing the blue color value.
 * @returns Returns a team element if it was successfully created, false if invalid arguments are passed or a team with that name already exists.
 * @see https://wiki.mtasa.com/wiki/CreateTeam
 **/
declare function createTeam(teamName: string, colorR?: number, colorG?: number, colorB?: number): Team | false;

/**
 * This function gets the current team a player is on.
 * @param thePlayer The player whose team you want to find out.
 * @returns Returns a team element representing the team the player is on, false if the player is not part of a team.
 * @see https://wiki.mtasa.com/wiki/GetPlayerTeam
 **/
declare function getPlayerTeam(thePlayer: Player): Team | false;

/**
 * This function retrieves all the players of the specified team.
 * @param theTeam The team you wish to retrieve all the players from.
 * @returns Returns an array of all the players in the team, or an empty one if there are none else false if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/GetPlayersInTeam
 **/
declare function getPlayersInTeam(theTeam: Team): Player[] | false;

/**
 * This function retrieves the color of a team.
 * @param theTeam The team you want to get the color of.
 * @returns Returns 3 numbers representing the red, green, and blue color components of the team if it's valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetTeamColor
 * @tupleReturn
 **/
declare function getTeamColor(theTeam: Team): [number, number, number] | [false];

/**
 * This function tells you if friendly fire is turned on for the specified team.
 * @param theTeam The team element that will be checked.
 * @returns Returns true if friendly fire is on for the specified team, false if it is turned off or if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/GetTeamFriendlyFire
 **/
declare function getTeamFriendlyFire(theTeam: Team): boolean;

/**
 * This function finds a team element using the provided team name.
 * @param teamName A string determining the name of the team you wish to find.
 * @returns Returns the team element if it was found, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetTeamFromName
 **/
declare function getTeamFromName(teamName: string): Team | false;

/**
 * This function gets the team name of a team element.
 * @param theTeam The team you want to retrieve the name of.
 * @returns Returns a string representing the team's name if the team element was valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetTeamName
 **/
declare function getTeamName(theTeam: Team): string | false;

/**
 * This function adds a player to an existing team. The player will automatically be removed from his current team if he's on one.
 * @param thePlayer The player you wish to add to a team.
 * @param theTeam The team you want to add the player to, or undefined if you wish to unassign a player from his team.
 * @returns Returns true if the player was successfully added to the specified team or removed from his previous one, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPlayerTeam
 **/
declare function setPlayerTeam(thePlayer: Player, theTeam: Team | undefined): boolean;

/**
 * This function is for setting the color of a specified team.
 * This color is shown, for example, in the team players' nametags.
 * @param theTeam The team you want to change the color of.
 * @param colorR An integer representing the red color value, from 0 to 255.
 * @param colorG An integer representing the green color value, from 0 to 255.
 * @param colorB An integer representing the blue color value, from 0 to 255.
 * @returns Returns true if the team is valid and the color is different, otherwise false.
 * @see https://wiki.mtasa.com/wiki/SetTeamColor
 **/
declare function setTeamColor(theTeam: Team, colorR: number, colorG: number, colorB: number): boolean;

/**
 * This function sets the friendly fire value for the specified team.
 * @param theTeam The team that will have friendly fire set
 * @param friendlyFire A boolean denoting whether the players from the same team can kill each other (true) or whether the players can't kill each other (false).
 * @returns Returns true if the friendly fire value is set for the specified team, false if the friendly fire value can't be set for the specified team or if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/SetTeamFriendlyFire
 **/
declare function setTeamFriendlyFire(theTeam: Team, friendlyFire: boolean): boolean;

/**
 * This function is used to set a team's name.
 * @param theTeam The team you want to change the name of.
 * @param newName A string representing the name you want the team to be called.
 * @returns Returns true if the team was valid and the name was changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTeamName
 **/
declare function setTeamName(theTeam: Team, newName: string): boolean;
