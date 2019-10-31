declare class Player extends Ped {
  readonly account: Account;
  cameraInterior: number;
  cameraMatrix: Matrix;
  cameraTarget: Player | false;
  money: number;
  readonly version: string;
  wantedLevel: number;
  blurLevel: number;
  name: string;
  muted: boolean;
  readonly idleTime: number;
  readonly ping: number;
  readonly serial: string;
  readonly ip: string;
  team: Team | false;
  mapForced: boolean;
  nametagText: string;
  nametagShowing: boolean;
  scriptDebugLevel: number;

  // static getAllAlive(): Player[];
  // static getAllDead(): Player[];
  // static getRandom(): Player | false;
  // static getCount(): number;
  // static isVoiceEnabled(): boolean;

  /**
   * This function returns a player element for the player with the name passed to the function.
   * @param playerName A string containing the name of the player you want to reference
   * @returns Returns a player element for the player with the nickname provided. If there is no player with that name, false is returned.
   * @see https://wiki.mtasa.com/wiki/GetPlayerFromName
   **/
  create(playerName: string): Player | false;

  /**
   * This functions logs the given player in to the given account.
   * You need to provide the password needed to log into that account.
   * @param theAccount The account to log the player into.
   * @param thePassword The password needed to sign into this account.
   * @returns Returns true if the player was successfully logged into the given account. Returns false or undefined if the log in failed for some reason, ie. the player was already logged in to some account (use logOut first), if the account was already in use or if it failed for some other reason.
   * @see https://wiki.mtasa.com/wiki/LogIn
   **/
  logIn(theAccount: Account, thePassword: string): boolean | undefined;

  /**
   * This function will ban the specified player by either IP, serial or username
   * This function will ban the specified player from the server by IP.
   * @param [ip=true] IP Will player be banned by IP?
   * @param [username=false] Username Will player be banned by username?
   * @param [serial=false] Serial Will player be banned by serial?
   * @param [responsibleElement=undefined] The element that is responsible for banning the player. This can be a player (Maximum 30 characters if using a string).
   * @param reason The reason the player will be banned from the server.
   * @param [seconds=0] The amount of seconds the player will be banned from the server for. This can be 0 for an infinite amount of time.
   * @returns Returns a ban object if banned successfully, or false if unsuccessful.
   * @see https://wiki.mtasa.com/wiki/BanPlayer
   **/
  ban(ip?: boolean, username?: boolean, serial?: boolean, responsibleElement?: Player | string, reason?: string, seconds?: number): Ban | false;

  /**
   * This function will kick the specified player from the server.
   * @param responsiblePlayer The player that is responsible for the event. If left out as in the second syntax, responsible player for the kick will be "Console" (Maximum 30 characters if using a string).
   * @param [reason=""] The reason for the kick. (Maximum 64 characters)
   * @returns Returns true if the player was kicked succesfully, false if invalid arguments are specified.
   * @see https://wiki.mtasa.com/wiki/KickPlayer
   **/
  kick(responsiblePlayer?: string | Player, reason?: string): boolean;

  /**
   * This function redirects the player to a specified server.
   * @param [serverIP=""] The IP address (or domain name that resolves to the IP address) of the server you want to redirect the player to. Use an empty string to reconnect to the same server.
   * @param [serverPort=0] The game port of the server you want to redirect the player to, this is usually 22003. Set to zero to use the same port as the current server.
   * @param [serverPassword=""] The password for the server if it's protected.
   * @returns Returns true if the player was redirected successfully, false if bad arguments were passed.
   * @see https://wiki.mtasa.com/wiki/RedirectPlayer
   **/
  redirect(serverIP?: string, serverPort?: number, serverPassword?: string): boolean;

  /**
   * This function will force the specified player to resend their mod info, triggering the onPlayerModInfo event again.
   * @returns Returns true if the mod info will be resent, false otherwise.
   * @see https://wiki.mtasa.com/wiki/ResendPlayerModInfo
   **/
  resendModInfo(): boolean;

  /**
   * This function will force the specified player to resend their AC info, triggering the onPlayerACInfo event again.
   * @returns Returns true if the AC info will be resent, false otherwise.
   * @see https://wiki.mtasa.com/wiki/ResendPlayerACInfo
   **/
  resendACInfo(): boolean;

  /**
   * This function spawns the player at an arbitary point on the map.
   * - Note: setCameraTarget must be used to focus on the player. Also, all players have their camera initially faded out after connect. To ensure that the camera is faded in, please do a fadeCamera after.
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
  spawn(x: number, y: number, z: number, rotation?: number, skinID?: number, interior?: number, dimension?: number, theTeam?: Team): boolean;

  /**
   * This function subtracts money from a player's current money amount.
   * @param amount an integer number specifying the amount of money to take from the player.
   * @returns Returns true if the money was taken, or false if invalid parameters were passed.
   * @see https://wiki.mtasa.com/wiki/TakePlayerMoney
   **/
  takeMoney(amount: number): boolean;

  /**
   * This function forces a client to capture the current screen output and send it back to the server.
   * The image will contain the GTA HUD and the output of any dxDraw functions that are not flagged as 'post GUI'.
   * The image specifically excludes the chat box and all GUI (including the client console).
   * The result is received with the event onPlayerScreenShot.
   * @param width the width of the capture image.
   * @param height the height of the capture image.
   * @param [tag=""] A string to help identify the screen capture. The string is passed to the matching onPlayerScreenShot event for your personal convenience.
   * @param [quality=30] Quality of the final JPEG image from 0 to 100. A lower value can reduce the memory used by the image considerably which will result in faster and less intrusive uploads.
   * @param [maxBandwith=5000] The amount of client upload bandwidth to use (in bytes per second) when sending the image.
   * @param [maxPacketSize=500] The maximum size of one packet.
   * @returns Returns true if the function was successfully, false if invalid arguments are specified.
   * @see https://wiki.mtasa.com/wiki/TakePlayerScreenShot
   **/
  takeScreenShot(width: number, height: number, tag?: string, quality?: number, maxBandwith?: number, maxPacketSize?: number): boolean;

  /**
   * This function adds money to a player's current money amount.
   * To set absolute values, setPlayerMoney can be used.
   * @param amount a positive integer number specifying the amount of money to give to the player.
   * @returns Returns true if the money was added, or false if invalid parameters were passed.
   * @see https://wiki.mtasa.com/wiki/GivePlayerMoney
   **/
  giveMoney(amount: number): boolean;

  /**
   * This function returns whether or not the given object has access to perform the given action.
   * Scripts frequently wish to limit access to features to particular users.
   * The naïve way to do this would be to check if the player who is attempting to perform an action is in a particular group (usually the Admin group).
   * The main issue with doing this is that the Admin group is not guaranteed to exist.
   * It also doesn't give the server admin any flexibility.
   * He might want to allow his 'moderators' access to the function you're limiting access to, or he may want it disabled entirely.
   * This is where using the ACL properly comes in, and luckily this is very easy.
   * It all comes down to using this function.
   * This, somewhat confusingly named function lets you check if an ACL object (a player or a resource) has a particular ACL right.
   * In this case, we just care about players.
   * So, first of all, think of a name for your 'right'.
   * Let's say we want a private area only certain people can go in, we'll call our right accessPrivateArea.
   * Notice that we've named the right using resource.YourResourceName.accessPrivateArea - this is just for neatness, so that the admin knows what resource the right belongs to. It's strongly advised you follow this convention.
   * The false argument specifies the 'defaultPermission', false indicating that if the user hasn't had the right allowed or dissallowed (i.e. the admin hasn't added it to the config), that it should default to being not allowed.
   * The only downside of using this method is that the admin has to modify his config.
   * The upsides are that the admin has much more control and your script will work for any server, however the admin has configured it.
   * - Note: Only certain action names work. This function seems to return undefined and output a bad argument error when checking if an object has rights for an action which doesn't start with function., command. or resource. keywords.
   * @param theAction The action to test if the given object has access to. Ie. "function.kickPlayer".
   * @param [defaultPermission=true] The default permission if none is specified in either of the groups the given object is a member of. If this is left to true, the given object will have permissions to perform the action unless the opposite is explicitly specified in the ACL.If false, the action will be denied by default unless explicitly approved by the Access Control List.
   * @returns Returns true if the given object has permission to perform the given action, false otherwise. Returns undefined if the function failed because of bad arguments.
   * @see https://wiki.mtasa.com/wiki/HasObjectPermissionTo
   **/
  hasPermissionTo(theAction: string, defaultPermission?: boolean): boolean | undefined;

  /**
   * This function logs the given player out of his current account.
   * @returns Returns true if the player was successfully logged out, false or undefined if it failed for some reason, ie. the player was never logged in.
   * @see https://wiki.mtasa.com/wiki/LogOut
   **/
  logOut(): boolean | undefined;

  /**
   * Enables or disables the use of a GTA control for a specific player.
   * @param control The control that you want to toggle the ability of. See control names for a list of possible controls.
   * @param enabled A boolean value representing whether or not the key will be usable or not.
   * @returns This function true if the control was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/ToggleControl
   **/
  toggleControl(control: string, enabled: boolean): boolean;

  /**
   * This function triggers an event previously registered on a client.
   * This is the primary means of passing information between the server and the client.
   * Clients have a similar triggerServerEvent function that can do the reverse.
   * You can treat this function as if it was an asynchronous function call, using triggerServerEvent to pass back any returned information if necessary.
   * Almost any data types can be passed as expected, including elements and complex nested tables.
   * Non-element MTA data types like xmlNodes or resource pointers will not be able to be passed as they do not necessarily have a valid representation on the client.
   * Events are sent reliably, so clients will receive them, but there may be (but shouldn't be) a significant delay before they are received.
   * You should take this into account when using them.
   * Keep in mind the bandwidth issues when using events - don't pass a large list of arguments unless you really need to. It is marginally more efficient to pass one large event than two smaller ones.
   * - Important note: Non-element MTA data types like xmlNodes or resource pointers will not be able to be passed as they do not necessarily have a valid representation on the client.
   * - Note: It is marginally more efficient to pass one large event than two smaller ones.
   * @param name The name of the event to trigger client side. You should register this event with addEvent and add at least one event handler using addEventHandler.
   * @param sourceElement The element that is the source of the event.
   * @param args A list of arguments to trigger with the event. You can pass any lua data type (except functions). You can also pass elements.
   * @returns Returns true if the event trigger has been sent, false if invalid arguments were specified.
   * @see https://wiki.mtasa.com/wiki/TriggerClientEvent
   **/
  triggerEvent(name: string, sourceElement: BaseElement, ...args: any[]): boolean;

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
   * This function is used to forcefully show a player's radar map.
   * @param forceOn A boolean value representing whether or not the players radar map will be forced on.
   * @returns Returns true if the player's radar map was forced on, false otherwise.
   * @see https://wiki.mtasa.com/wiki/ForcePlayerMap
   **/
  forceMap(forceOn: boolean): boolean;

  /**
   * This function will fade a player's camera to a color or back to normal over a specified time period.
   * This will also affect the sound volume for the player (50% faded = 50% volume, full fade = no sound).
   * For clientside scripts you can perform 2 fade ins or fade outs in a row, but for serverside scripts you must use one then the other.
   * - Note: The speed of the effect depends directly on the current gamespeed.
   * @param fadeIn Should the camera be faded in or out? Pass true to fade the camera in, false to fade it out to a color.
   * @param [timeToFade=1] The number of seconds it should take to fade.
   * @param [red=0] The amount of red in the color that the camera fades out to (0 - 255). Not required for fading in.
   * @param [green=0] The amount of green in the color that the camera fades out to (0 - 255). Not required for fading in.
   * @param [blue=0] The amount of blue in the color that the camera fades out to (0 - 255). Not required for fading in.
   * @returns Returns true if the camera was faded successfully, false if invalid arguments were passed to the function.
   * @see https://wiki.mtasa.com/wiki/FadeCamera
   **/
  fadeCamera(fadeIn: boolean, timeToFade?: number, red?: number, green?: number, blue?: number): boolean;

  /**
   * This function adds a player to an existing team.
   * The player will automatically be removed from his current team if he's on one.
   * @param theTeam The team you want to add the player to, or undefined if you wish to unassign a player from his team.
   * @returns Returns true if the player was successfully added to the specified team or removed from his previous one, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPlayerTeam
   **/
  setTeam(theTeam: Team | undefined): boolean;

  /**
   * Use this function to mute or unmute the player.
   * @param state Use true to mute and false to unmute the player.
   * @returns Returns true if the player was successfully muted or unmuted, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPlayerMuted
   **/
  setMuted(state: boolean): boolean;

  /**
   * This function changes the specified player's name.
   * Note that any change made to a players name with this function is not saved in their settings so the name change only lasts till they disconnect.
   * @param newName the new name to set for the player.
   * @returns Returns true if the player name was changed succesfully, false if invalid arguments are specified.
   * @see https://wiki.mtasa.com/wiki/SetPlayerName
   **/
  setName(newName: string): boolean;

  /**
   * Sets the motion blur level on the clients screen.
   * Accepts a value between 0 and 255.
   * @param level The level to set the blur to (default: 36).
   * @returns
   * @see https://wiki.mtasa.com/wiki/SetPlayerBlurLevel
   **/
  setBlurLevel(level: number): boolean;

  /**
   * This function is used to set a player's wanted level.
   * The wanted level is indicated by the amount of stars a player has on the GTA HUD.
   * @param stars An integer from 0 to 6 representing the wanted level.
   * @returns Returns true if the wanted level was set successfully, false if any of the arguments were invalid.
   * @see https://wiki.mtasa.com/wiki/SetPlayerWantedLevel
   **/
  setWantedLevel(stars: 0 | 1 | 2 | 3 | 4 | 5 | 6): boolean;

  /**
   * Sets a player's money to a certain value, regardless of current player money.
   * It should be noted that setting negative values does not work and in fact gives the player large amounts of money.
   * @param amount A whole integer specifying the new amount of money the player will have.
   * @param [instant=false] If set to true money will be set instantly without counting up/down like in singleplayer.
   * @returns Returns true if the money was added, or false if invalid parameters were passed.
   * @see https://wiki.mtasa.com/wiki/SetPlayerMoney
   **/
  setMoney(amount: number, instant?: boolean): boolean;

  /**
   * This will change the text of a player's nickname in the world to something besides the nickname he chose.
   * This will not change the player's actual nickname, it only changes the visible aspect inside the world (you will see his original nickname in the scoreboard and will refer to his original name in scripts).
   * @param text The new nickname text that will be displayed.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPlayerNametagText
   **/
  setNametagText(text: string): boolean;

  /**
   * Use this to define whether the player's name tag is visible or invisible.
   * This function allows you to set whether a player's nametag visibility both clientside and serverside.
   * @param showing Use true or false to show/hide the tag.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPlayerNametagShowing
   **/
  setNametagShowing(showing: boolean): boolean;

  /**
   * This allows you to change the RGB color mixture in the name tags of players.
   * - Note: If the player is using a hexcode in front of their name, it will override this function. You must first strip the name of the hexcode using removeHex.
   * @param r The amount of red you want in the mixture of RGB (0-255 is valid).
   * @param g The amount of green you want in the mixture of RGB (0-255 is valid).
   * @param b The amount of blue you want in the mixture of RGB (0-255 is valid).
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPlayerNametagColor
   **/
  setNametagColor(r: number, g: number, b: number): boolean;

  /**
   * This allows you to change the RGB color mixture in the name tags of players.
   * - Note: If the player is using a hexcode in front of their name, it will override this function. You must first strip the name of the hexcode using removeHex.
   * @param state Use false for reset name tag color.
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPlayerNametagColor
   **/
  setNametagColor(state: false): boolean;

  /**
   * This function allows you to change ASE announce values for any player using a specified key.
   * As an example this can be used to change the "score" value which will be shown at game-state.com's server list.
   * @param key The key which the value will be stored at.
   * @param value The value you wish to store.
   * @returns Returns true if the value was set succesfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPlayerAnnounceValue
   **/
  setAnnounceValue(key: string, value: string): boolean;

  /**
   * This function allows you to change who can hear the voice of a player.
   * - Important note: This function should only be used as a low-level function for advanced users.
   * @param broadcastTo Element or array of elements who should hear the voice from this player.
   * @returns Returns true if the value was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPlayerVoiceBroadcastTo
   **/
  setVoiceBroadcastTo(broadcastTo: BaseElement | BaseElement[]): boolean;

  /**
   * This function allows you to mute voices for a player.
   * - Important note: This function should only be used as a low-level function for advanced users.
   * @param ignoreFrom Element or array of elements which the player should not hear voices from. Use undefined if no one should be ignored.
   * @returns Returns true if the value was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPlayerVoiceIgnoreFrom
   **/
  setVoiceIgnoreFrom(ignoreFrom: BaseElement | BaseElement[]): boolean;

  /**
   * This function will show or hide a part of the player's HUD.
   * - Note: This function is identical to showPlayerHudComponent.
   * @param component The component you wish to show or hide.
   * @param show Specify if the component should be shown (true) or hidden (false).
   * @returns Returns true if the component was shown or hidden succesfully, false if an invalid argument was specified.
   * @see https://wiki.mtasa.com/wiki/SetPlayerHudComponentVisible
   **/
  setHudComponentVisible(component: string, show: boolean): boolean;

  /**
   * This function sets the camera's position and direction.
   * The first three arguments are the point at which the camera lies, the last three are the point the camera faces (or the point it "looks at").
   * - Note: Calling this function takes the camera's focus away from the player and sets the camera in a fixed position and rotation. The camera's focus can be brought back to the player using the setCameraTarget function.
   * @param positionX The x coordinate of the camera's position.
   * @param positionY The y coordinate of the camera's position.
   * @param positionZ The z coordinate of the camera's position.
   * @param lookAtX The x coordinate of the point the camera faces.
   * @param lookAtY The y coordinate of the point the camera faces.
   * @param lookAtZ The z coordinate of the point the camera faces.
   * @param [roll=0] The camera roll angle, -180 to 180. A value of 0 means the camera sits straight, positive values will turn it counter-clockwise and negative values will turn it clockwise. -180 or 180 means the camera is upside down.
   * @param [fov=70] the field of view angle, 0.01 to 180. The higher this value is, the more you will be able to see what is to your sides.
   * @returns Returns true if the arguments are valid, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetCameraMatrix
   **/
  setCameraMatrix(positionX: number, positionY: number, positionZ: number, lookAtX?: number, lookAtY?: number, lookAtZ?: number, roll?: number, fov?: number): boolean;

  /**
   * Sets the interior of the local camera.
   * Only the interior of the camera is changed, the local player stays in the interior he was in.
   * @param interior the interior to place the camera in.
   * @returns Returns true if the camera's interior was changed successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetCameraInterior
   **/
  setCameraInterior(interior: number): boolean;

  /**
   * This function allows you to set a player's camera to follow other elements instead. Currently supported element type is: Player.
   * @param target The player who you want the camera to follow. If none is specified, the camera will target the player.
   * @returns Returns true if the function was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetCameraTarget
   **/
  setCameraTarget(target: Player): boolean;

  /**
   * This function checks if the specified player's radar map has been forced on or not.
   * @returns Returns true if the local player's radar map is forced on, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPlayerMapForced
   **/
  isMapForced(): boolean;

  /**
   * Use this function to check if a player has been muted.
   * @returns Returns true if the player is muted and false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPlayerMuted
   **/
  isMuted(): boolean;

  /**
   * This function will allow you to determine if a player's name tag is currently showing.
   * @returns Returns true if the player's name tag is being shown, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPlayerNametagShowing
   **/
  isNametagShowing(): boolean;

  /**
   * This will allow you to retrieve the name tag a player is currently using.
   * @returns Returns a string with the nametag text.
   * @see https://wiki.mtasa.com/wiki/GetPlayerNametagText
   **/
  getNametagText(): string;

  /**
   * This function gets the current color of a player's name tag as RGB values.
   * These are in the range 0-255.
   * @returns Returns red, green and blue values if an existent player was specified, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetPlayerNametagColor
   * @tupleReturn
   **/
  getNametagColor(): [number, number, number] | false;

  /**
   * This function returns a string containing the name of the specified player.
   * @returns Returns a string containing the requested player's name.
   * @see https://wiki.mtasa.com/wiki/GetPlayerName
   **/
  getName(): string;

  /**
   * This function gets the amount of time in milliseconds that a players position has not changed.
   * @returns Returns the amount of time in milliseconds that a player has been idle.
   * @see https://wiki.mtasa.com/wiki/GetPlayerIdleTime
   **/
  getIdleTime(): number;

  /**
   * This function returns the ping of a specified player.
   * The ping is the number of milliseconds that data takes to travel from the player's client to the server or vice versa.
   * @returns Returns the ping as a number.
   * @see https://wiki.mtasa.com/wiki/GetPlayerPing
   **/
  getPing(): number;

  /**
   * This function returns the specified player's account.
   * @returns Returns the player's account.
   * @see https://wiki.mtasa.com/wiki/GetPlayerAccount
   **/
  getAccount(): Account;

  /**
   * This function gets a player's current wanted level.
   * The wanted level is indicated by the amount of stars a player has on the GTA HUD.
   * @returns Returns an int from 0 to 6 representing the player's wanted level.
   * @see https://wiki.mtasa.com/wiki/GetPlayerWantedLevel
   **/
  getWantedLevel(): 0 | 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * This function returns the serial for a specified player.
   * @returns Returns the serial as a string if it was found.
   * @see https://wiki.mtasa.com/wiki/GetPlayerSerial
   **/
  getSerial(): string;

  /**
   * This function returns a string containing the IP address of the player.
   * @returns Returns a string containing the requested players's IP.
   * @see https://wiki.mtasa.com/wiki/GetPlayerIP
   **/
  getIP(): string;

  /**
   * This function gets the current team a player is on.
   * @returns Returns a team element representing the team the player is on, false if the player is not part of a team.
   * @see https://wiki.mtasa.com/wiki/GetPlayerTeam
   **/
  getTeam(): Team | false;

  /**
   * This function allows you to check the current blur level of a specified player.
   * @returns Returns the player's blur level if successful.
   * @see https://wiki.mtasa.com/wiki/GetPlayerBlurLevel
   **/
  getBlurLevel(): number;

  /**
   * This function gets the client version of the specified player as a sortable string.
   * Where the first three numbers represent the major/minor/maintenance version, i.e.
   * The fourth number is 9, which means it's a release build, (Development and beta builds have lower numbers here).
   * And the fifth and sixth numbers represent the build number.
   * @returns Returns a string containing the client version.
   * @see https://wiki.mtasa.com/wiki/GetPlayerVersion
   **/
  getVersion(): string;

  /**
   * Returns the amount of money a player currently has.
   * @returns Returns an integer with the amount of money the specified player has.
   * @see https://wiki.mtasa.com/wiki/GetPlayerMoney
   **/
  getMoney(): number;

  /**
   * This function retrieves a players ASE announce value under a certain key.
   * @param key The name of the key.
   * @returns This function returns a string containing the requested value if a valid key was specified or false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetPlayerAnnounceValue
   **/
  getAnnounceValue(key: string): string | false;

  /**
   * Returns the interior of the local camera (independent of the interior of the local player).
   * @returns Returns an integer indicating the camera's interior.
   * @see https://wiki.mtasa.com/wiki/GetCameraInterior
   **/
  getCameraInterior(): number;

  /**
   * This function gets the position of the camera and the position of the point it is facing.
   * Important note: Server-side this functions returns false or the latest value set via setCameraMatrix (called from server or client).
   * @returns This function returns 8 floats if the argument is valid (when applicable); the first three indicate the position of the camera, the next three indicate the position of the point it's facing, and the last two are the roll and field of view.
   * @see https://wiki.mtasa.com/wiki/GetCameraMatrix
   * @tupleReturn
   **/
  getCameraMatrix(): [number, number, number, number, number, number, number, number];

  /**
   * This function returns an element that corresponds to the current target of the specified player's camera (i.e. what it is following).
   * @returns Returns an element of the target if the function was successful. Returns false if the camera is in Fixed mode and has no target.
   * @see https://wiki.mtasa.com/wiki/GetCameraTarget
   **/
  getCameraTarget(): Player | false;
}
