/**
 * This function is used to forcefully show a player's radar map.
 * @param thePlayer A player element referencing the specified player.
 * @param forceOn A boolean value representing whether or not the players radar map will be forced on.
 * @returns Returns true if the player's radar map was forced on, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ForcePlayerMap
 **/
declare function forcePlayerMap(thePlayer: Player, forceOn: boolean): boolean;

/**
 * This function returns an array of all the alive players on the server.
 * Opposite function of getDeadPlayers.
 * @returns Returns an array of all the alive players.
 * @see https://wiki.mtasa.com/wiki/GetAlivePlayers
 **/
declare function getAlivePlayers(): Player[];

/**
 * This function returns an array of all currently dead players on the server.
 * @returns Returns an array of all the dead players.
 * @see https://wiki.mtasa.com/wiki/GetDeadPlayers
 **/
declare function getDeadPlayers(): Player[];

/**
 * This function retrieves a players ASE announce value under a certain key.
 * @param thePlayer This is the Player whos value you want to retrieve.
 * @param key The name of the key.
 * @returns This function returns a string containing the requested value if a valid key was specified or false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetPlayerAnnounceValue
 **/
declare function getPlayerAnnounceValue(thePlayer: Player, key: string): string | false;

/**
 * This function allows you to check the current blur level of a specified player.
 * @param thePlayer The player whose blur level you want to check.
 * @returns Returns the player's blur level if successful, false if an invalid player was given.
 * @see https://wiki.mtasa.com/wiki/GetPlayerBlurLevel
 **/
declare function getPlayerBlurLevel(thePlayer: Player): number | false;

/**
 * This function returns the number of players currently connected to the server.
 * @returns Returns the number of players connected to the server as a number.
 * @see https://wiki.mtasa.com/wiki/GetPlayerCount
 **/
declare function getPlayerCount(): number;

/**
 * This function returns a player element for the player with the name passed to the function.
 * @param playerName A string containing the name of the player you want to reference
 * @returns Returns a player element for the player with the nickname provided. If there is no player with that name, false is returned.
 * @see https://wiki.mtasa.com/wiki/GetPlayerFromName
 **/
declare function getPlayerFromName(playerName: string): Player | false;

/**
 * This function gets the amount of time in milliseconds that a players position has not changed.
 * @param thePlayer The player you wish to get the idle time of.
 * @returns Returns the amount of time in milliseconds that a player has been idle, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetPlayerIdleTime
 **/
declare function getPlayerIdleTime(thePlayer: Player): number | false;

/**
 * This function returns a string containing the IP address of the player.
 * @param thePlayer The player element you want to get the IP of.
 * @returns Returns a string containing the requested players's IP, or false if the player passed to the function is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPlayerIP
 **/
declare function getPlayerIP(thePlayer: Player): string | false;

/**
 * Returns the amount of money a player currently has.
 * @param thePlayer The player you wish the retrieve the amount of money from.
 * @returns Returns an integer with the amount of money the specified player has, false if the player is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPlayerMoney
 **/
declare function getPlayerMoney(thePlayer: Player): number | false;

/**
 * This function returns a string containing the name of the specified player.
 * @param thePlayer the player you want to get the name of.
 * @returns Returns a string containing the requested player's name, or false if the player passed to the function is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPlayerName
 **/
declare function getPlayerName(thePlayer: Player): string | false;

/**
 * This function gets the current color of a player's name tag as RGB values.
 * These are in the range 0-255.
 * @param thePlayer The player whose name tag RGB color values you wish to retrieve.
 * @returns Returns red, green and blue values if an existent player was specified, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetPlayerNametagColor
 * @tupleReturn
 **/
declare function getPlayerNametagColor(thePlayer: Player): [number, number, number] | false;

/**
 * This will allow you to retrieve the name tag a player is currently using.
 * @param thePlayer The person whose name tag you want to retrieve.
 * @returns Returns a string with the nametag text, false if the player is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPlayerNametagText
 **/
declare function getPlayerNametagText(thePlayer: Player): string | false;

/**
 * This function returns the ping of a specified player.
 * The ping is the number of milliseconds that data takes to travel from the player's client to the server or vice versa.
 * @param thePlayer The player whose ping you want to determine.
 * @returns Returns the ping as a number, or false if the player is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPlayerPing
 **/
declare function getPlayerPing(thePlayer: Player): number | false;

/**
 * - Note: MTA 1.6 and older
 * @param thePlayer The player whose debug level you want to get.
 * @return Returns the debug level as a number, or false if the player is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPlayerScriptDebugLevel
 **/
declare function getPlayerScriptDebugLevel(thePlayer: Player): number | false;

/**
 * This function returns the serial for a specified player.
 * @param thePlayer A player element referencing the specified player.
 * @returns Returns the serial as a string if it was found, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetPlayerSerial
 **/
declare function getPlayerSerial(thePlayer: Player): string | false;

/**
 * This function gets the current team a player is on.
 * @param thePlayer The player whose team you want to find out.
 * @returns Returns a team element representing the team the player is on, false if the player is not part of a team.
 * @see https://wiki.mtasa.com/wiki/GetPlayerTeam
 **/
declare function getPlayerTeam(thePlayer: Player): Team | false;

/**
 * This function gets the client version of the specified player as a sortable string.
 * Where the first three numbers represent the major/minor/maintenance version, i.e.
 * The fourth number is 9, which means it's a release build, (Development and beta builds have lower numbers here).
 * And the fifth and sixth numbers represent the build number.
 * @param thePlayer The player whose client version you wish to get.
 * @returns Returns a string containing the client version, or false if the player is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPlayerVersion
 **/
declare function getPlayerVersion(thePlayer: Player): string | false;

/**
 * This function gets a player's current wanted level.
 * The wanted level is indicated by the amount of stars a player has on the GTA HUD.
 * @param thePlayer The player whose wanted level you wish to get.
 * @returns Returns an int from 0 to 6 representing the player's wanted level, false if the player does not exist.
 * @see https://wiki.mtasa.com/wiki/GetPlayerWantedLevel
 **/
declare function getPlayerWantedLevel(thePlayer: Player): number | false;

/**
 * This function returns a random player.
 * @returns Returns a random player, false if the server is empty.
 * @see https://wiki.mtasa.com/wiki/GetRandomPlayer
 **/
declare function getRandomPlayer(): Player | false;

/**
 * This function adds money to a player's current money amount.
 * To set absolute values, setPlayerMoney can be used.
 * @param thePlayer the player you are giving the money to.
 * @param amount a positive integer number specifying the amount of money to give to the player.
 * @returns Returns true if the money was added, or false if invalid parameters were passed.
 * @see https://wiki.mtasa.com/wiki/GivePlayerMoney
 **/
declare function givePlayerMoney(thePlayer: Player, amount: number): boolean;

/**
 * This function checks if the specified player's radar map has been forced on or not.
 * @param thePlayer A player element referencing the specified player.
 * @returns Returns true if the local player's radar map is forced on, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPlayerMapForced
 **/
declare function isPlayerMapForced(thePlayer: Player): boolean;

/**
 * Use this function to check if a player has been muted.
 * @param thePlayer The player you are checking.
 * @returns Returns true if the player is muted and false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPlayerMuted
 **/
declare function isPlayerMuted(thePlayer: Player): boolean;

/**
 * This function will allow you to determine if a player's name tag is currently showing.
 * @param thePlayer The player whose current name tag condition you want to check.
 * @returns Returns true if the player's name tag is being shown, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPlayerNametagShowing
 **/
declare function isPlayerNametagShowing(thePlayer: Player): boolean;

/**
 * This function allows you to make the server reveal whether or not voice is currently enabled.
 * @returns Returns true if the voice is enabled on the server, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsVoiceEnabled
 **/
declare function isVoiceEnabled(): boolean;

/**
 * This function redirects the player to a specified server.
 * @param thePlayer The player you want to redirect.
 * @param [serverIP=""] The IP address (or domain name that resolves to the IP address) of the server you want to redirect the player to. Use an empty string to reconnect to the same server.
 * @param [serverPort=0] The game port of the server you want to redirect the player to, this is usually 22003. Set to zero to use the same port as the current server.
 * @param [serverPassword=""] The password for the server if it's protected.
 * @returns Returns true if the player was redirected successfully, false if bad arguments were passed.
 * @see https://wiki.mtasa.com/wiki/RedirectPlayer
 **/
declare function redirectPlayer(thePlayer: Player, serverIP?: string, serverPort?: number, serverPassword?: string): boolean;

/**
 * This function will force the specified player to resend their AC info, triggering the onPlayerACInfo event again.
 * @param thePlayer A player element referencing the specified player.
 * @returns Returns true if the AC info will be resent, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResendPlayerACInfo
 **/
declare function resendPlayerACInfo(thePlayer: Player): boolean;

/**
 * This function will force the specified player to resend their mod info, triggering the onPlayerModInfo event again.
 * @param thePlayer A player element referencing the specified player.
 * @returns Returns true if the mod info will be resent, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResendPlayerModInfo
 **/
declare function resendPlayerModInfo(thePlayer: Player): boolean;

/**
 * This function allows you to change ASE announce values for any player using a specified key.
 * As an example this can be used to change the "score" value which will be shown at game-state.com's server list.
 * @param thePlayer The player whos announce value you wish to change.
 * @param key The key which the value will be stored at.
 * @param value The value you wish to store.
 * @returns Returns true if the value was set succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPlayerAnnounceValue
 **/
declare function setPlayerAnnounceValue(thePlayer: Player, key: string, value: string): boolean;

/**
 * Sets the motion blur level on the clients screen.
 * Accepts a value between 0 and 255.
 * @param thePlayer The player whose blur level will be changed.
 * @param level The level to set the blur to (default: 36).
 * @returns
 * @see https://wiki.mtasa.com/wiki/SetPlayerBlurLevel
 **/
declare function setPlayerBlurLevel(thePlayer: Player, level: number): boolean;

/**
 * This function will show or hide a part of the player's HUD.
 * - Note: This function is identical to showPlayerHudComponent.
 * @param thePlayer The player element for which you wish to show/hide a HUD component.
 * @param component The component you wish to show or hide.
 * @param show Specify if the component should be shown (true) or hidden (false).
 * @returns Returns true if the component was shown or hidden succesfully, false if an invalid argument was specified.
 * @see https://wiki.mtasa.com/wiki/SetPlayerHudComponentVisible
 **/
declare function setPlayerHudComponentVisible(thePlayer: Player, component: string, show: boolean): boolean;

/**
 * Sets a player's money to a certain value, regardless of current player money.
 * It should be noted that setting negative values does not work and in fact gives the player large amounts of money.
 * @param thePlayer Which player to set the money of.
 * @param amount A whole integer specifying the new amount of money the player will have.
 * @param [instant=false] If set to true money will be set instantly without counting up/down like in singleplayer.
 * @returns Returns true if the money was added, or false if invalid parameters were passed.
 * @see https://wiki.mtasa.com/wiki/SetPlayerMoney
 **/
declare function setPlayerMoney(thePlayer: Player, amount: number, instant?: boolean): boolean;

/**
 * Use this function to mute or unmute the player.
 * @param thePlayer The player you are muting or unmuting.
 * @param state Use true to mute and false to unmute the player.
 * @returns Returns true if the player was successfully muted or unmuted, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPlayerMuted
 **/
declare function setPlayerMuted(thePlayer: Player, state: boolean): boolean;

/**
 * This function changes the specified player's name.
 * Note that any change made to a players name with this function is not saved in their settings so the name change only lasts till they disconnect.
 * @param thePlayer the player that will have its name set.
 * @param newName the new name to set for the player.
 * @returns Returns true if the player name was changed succesfully, false if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/SetPlayerName
 **/
declare function setPlayerName(thePlayer: Player, newName: string): boolean;

/**
 * This allows you to change the RGB color mixture in the name tags of players.
 * - Note: If the player is using a hexcode in front of their name, it will override this function. You must first strip the name of the hexcode using removeHex.
 * @param thePlayer The player whose name tag text you wish to change the color of.
 * @param r The amount of red you want in the mixture of RGB (0-255 is valid).
 * @param g The amount of green you want in the mixture of RGB (0-255 is valid).
 * @param b The amount of blue you want in the mixture of RGB (0-255 is valid).
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPlayerNametagColor
 **/
declare function setPlayerNametagColor(thePlayer: Player, r: number, g: number, b: number): boolean;

/**
 * This allows you to change the RGB color mixture in the name tags of players.
 * - Note: If the player is using a hexcode in front of their name, it will override this function. You must first strip the name of the hexcode using removeHex.
 * @param thePlayer The player whose name tag text you wish to change the color of.
 * @param state Use false for reset name tag color.
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPlayerNametagColor
 **/
declare function setPlayerNametagColor(thePlayer: Player, state: false): boolean;

/**
 * Use this to define whether the player's name tag is visible or invisible.
 * This function allows you to set whether a player's nametag visibility both clientside and serverside.
 * @param thePlayer Define the player whos tag visiblity status you want to change.
 * @param showing Use true or false to show/hide the tag.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPlayerNametagShowing
 **/
declare function setPlayerNametagShowing(thePlayer: Player, showing: boolean): boolean;

/**
 * This will change the text of a player's nickname in the world to something besides the nickname he chose.
 * This will not change the player's actual nickname, it only changes the visible aspect inside the world (you will see his original nickname in the scoreboard and will refer to his original name in scripts).
 * @param thePlayer The player whose nickname text you wish to change.
 * @param text The new nickname text that will be displayed.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPlayerNametagText
 **/
declare function setPlayerNametagText(thePlayer: Player, text: string): boolean;

/**
 * - Note: MTA 1.6 and older
 * @param thePlayer The player whose debug level you want to set.
 * @param level Debug script level.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPlayerScriptDebugLevel
 **/
declare function getPlayerScriptDebugLevel(thePlayer: Player, level: number): boolean;

/**
 * This function adds a player to an existing team.
 * The player will automatically be removed from his current team if he's on one.
 * @param thePlayer The player you wish to add to a team.
 * @param theTeam The team you want to add the player to, or undefined if you wish to unassign a player from his team.
 * @returns Returns true if the player was successfully added to the specified team or removed from his previous one, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPlayerTeam
 **/
declare function setPlayerTeam(thePlayer: Player, theTeam: Team | undefined): boolean;

/**
 * This function allows you to change who can hear the voice of a player.
 * - Important note: This function should only be used as a low-level function for advanced users.
 * @param thePlayer The player you wish to change.
 * @param broadcastTo Element or array of elements who should hear the voice from this player.
 * @returns Returns true if the value was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPlayerVoiceBroadcastTo
 **/
declare function setPlayerVoiceBroadcastTo(thePlayer: Player, broadcastTo: Element | Element[]): boolean;

/**
 * This function allows you to mute voices for a player.
 * - Important note: This function should only be used as a low-level function for advanced users.
 * @param thePlayer The player you wish to change.
 * @param ignoreFrom Element or array of elements which the player should not hear voices from. Use undefined if no one should be ignored.
 * @returns Returns true if the value was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPlayerVoiceIgnoreFrom
 **/
declare function setPlayerVoiceIgnoreFrom(thePlayer: Player, ignoreFrom: Element | Element[]): boolean;

/**
 * This function is used to set a player's wanted level.
 * The wanted level is indicated by the amount of stars a player has on the GTA HUD.
 * @param thePlayer The player whose wanted level is to be set.
 * @param stars An integer from 0 to 6 representing the wanted level.
 * @returns Returns true if the wanted level was set successfully, false if any of the arguments were invalid.
 * @see https://wiki.mtasa.com/wiki/SetPlayerWantedLevel
 **/
declare function setPlayerWantedLevel(thePlayer: Player, stars: 0 | 1 | 2 | 3 | 4 | 5 | 6): boolean;

/**
 * This function spawns the player at an arbitary point on the map.
 * - Note: setCameraTarget must be used to focus on the player. Also, all players have their camera initially faded out after connect. To ensure that the camera is faded in, please do a fadeCamera after.
 * @param thePlayer The player you want to spawn.
 * @param x The x co-ordinate to spawn the player at.
 * @param y The y co-ordinate to spawn the player at.
 * @param z The z co-ordinate to spawn the player at.
 * @param [rotation=0] rotation of the player on spawn.
 * @param [skinID=0] player's skin on spawn. Character Skins
 * @param [interior=0] interior the player will spawn into.
 * @param [dimension=0] The ID of the dimension that the player should be in.
 * @param [theTeam=getPlayerTeam(thePlayer)] the team the player will join.
 * @returns Returns true if the player was spawned successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SpawnPlayer
 **/
declare function spawnPlayer(thePlayer: Player, x: number, y: number, z: number, rotation?: number, skinID?: number, interior?: number, dimension?: number, theTeam?: Team): boolean;

/**
 * This function subtracts money from a player's current money amount.
 * @param thePlayer the player you are taking the money from.
 * @param amount an integer number specifying the amount of money to take from the player.
 * @returns Returns true if the money was taken, or false if invalid parameters were passed.
 * @see https://wiki.mtasa.com/wiki/TakePlayerMoney
 **/
declare function takePlayerMoney(thePlayer: Player, amount: number): boolean;

/**
 * This function forces a client to capture the current screen output and send it back to the server.
 * The image will contain the GTA HUD and the output of any dxDraw functions that are not flagged as 'post GUI'.
 * The image specifically excludes the chat box and all GUI (including the client console).
 * The result is received with the event onPlayerScreenShot.
 * @param thePlayer the player to get the screen capture from.
 * @param width the width of the capture image.
 * @param height the height of the capture image.
 * @param [tag=""] A string to help identify the screen capture. The string is passed to the matching onPlayerScreenShot event for your personal convenience.
 * @param [quality=30] Quality of the final JPEG image from 0 to 100. A lower value can reduce the memory used by the image considerably which will result in faster and less intrusive uploads.
 * @param [maxBandwith=5000] The amount of client upload bandwidth to use (in bytes per second) when sending the image.
 * @param [maxPacketSize=500] The maximum size of one packet.
 * @returns Returns true if the function was successfully, false if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/TakePlayerScreenShot
 **/
declare function takePlayerScreenShot(thePlayer: Player, width: number, height: number, tag?: string, quality?: number, maxBandwith?: number, maxPacketSize?: number): boolean;
