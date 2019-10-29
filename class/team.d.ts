declare class Team extends Element {
  name: string;
  readonly playerCount: number;
  friendlyFire: boolean;
  readonly players: Player[];

  // static getFromName(teamName: string): Team | false;

  /**
   * This function is for creating a new team, which can be used to group players.
   * Players will not join the team until they are respawned.
   * @param teamName A string representing the teams name.
   * @param [colorR=255] An integer representing the red color value.
   * @param [colorG=255] An integer representing the green color value.
   * @param [colorB=255] An integer representing the blue color value.
   * @see https://wiki.mtasa.com/wiki/CreateTeam
   **/
  constructor(teamName: string, colorR?: number, colorG?: number, colorB?: number);

  /**
   * This function is for returning the number of players in the specified team.
   * @returns Returns an integer containing the number of players in the team.
   * @see https://wiki.mtasa.com/wiki/CountPlayersInTeam
   **/
  countPlayers(): number;

  /**
   * This function retrieves all the players of the specified team.
   * @returns Returns an array of all the players in the team, or an empty one if there are none.
   * @see https://wiki.mtasa.com/wiki/GetPlayersInTeam
   **/
  getPlayers(): Player[];

  // TODO: need test
  /**
   * This outputs the specified text string to the chatbox.
   * It can be specified as a message to certain player(s) or all players.
   * It can optionally allow you to embed color changes into the string by setting the colorCoded boolean to true.
   * - Note: Avoid outputting text to the chatbox that isn't actually chat, as this can be annoying for players. Output information and status messages to the HUD.
   * @param text The text string that you wish to send to the chat window.If more than 256 characters it will not be showed in chat.
   * @param [r=231] The amount of red in the color of the text.
   * @param [g=217] The amount of green in the color of the text.
   * @param [b=176] The amount of blue in the color of the text.
   * @param [colorCoded=false] A boolean value determining whether or not '#RRGGBB' tags should be used.
   * @returns Returns true if the message was displayed successfully. Returns false if invalid arguments are specified.
   * @see https://wiki.mtasa.com/wiki/OutputChatBox
   **/
  outputChat(text?: string | number | boolean, r?: number, g?: number, b?: number, colorCoded?: boolean): boolean;

  /**
   * This function tells you if friendly fire is turned on for the specified team.
   * @returns Returns true if friendly fire is on for the specified team, false if it is turned off.
   * @see https://wiki.mtasa.com/wiki/GetTeamFriendlyFire
   **/
  getFriendlyFire(): boolean;

  /**
   * This function gets the team name of a team element.
   * @returns Returns a string representing the team's name.
   * @see https://wiki.mtasa.com/wiki/GetTeamName
   **/
  getName(): string;

  /**
   * This function retrieves the color of a team.
   * @returns Returns 3 numbers representing the red, green, and blue color components of the team.
   * @see https://wiki.mtasa.com/wiki/GetTeamColor
   * @tupleReturn
   **/
  getColor(): [number, number, number];

  /**
   * This function is used to set a team's name.
   * @param newName A string representing the name you want the team to be called.
   * @returns Returns true if name was changed.
   * @see https://wiki.mtasa.com/wiki/SetTeamName
   **/
  setName(newName: string): boolean;

  /**
   * This function is for setting the color of a specified team.
   * This color is shown, for example, in the team players' nametags.
   * @param colorR An integer representing the red color value, from 0 to 255.
   * @param colorG An integer representing the green color value, from 0 to 255.
   * @param colorB An integer representing the blue color value, from 0 to 255.
   * @returns Returns true if the color is valid.
   * @see https://wiki.mtasa.com/wiki/SetTeamColor
   **/
  setColor(colorR: number, colorG: number, colorB: number): boolean;

  /**
   * This function sets the friendly fire value for the specified team.
   * @param friendlyFire A boolean denoting whether the players from the same team can kill each other (true) or whether the players can't kill each other (false).
   * @returns Returns true if the friendly fire value is set for the specified team, false if the friendly fire value can't be set for the specified team.
   * @see https://wiki.mtasa.com/wiki/SetTeamFriendlyFire
   **/
  setFriendlyFire(friendlyFire: boolean): boolean;
}
