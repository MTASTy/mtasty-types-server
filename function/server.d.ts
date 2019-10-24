/**
 * This function retrieves the maximum FPS (Frames per second) that players on the server can run their game at.
 * @returns Returns an integer between 25 and 100 of the maximum FPS that players can run their game at.
 * @see https://wiki.mtasa.com/wiki/GetFPSLimit
 **/
declare function getFPSLimit(): number;

/**
 * This function returns the maximum number of player slots on the server.
 * @returns Returns the maximum number of players allowed on the server.
 * @see https://wiki.mtasa.com/wiki/GetMaxPlayers
 **/
declare function getMaxPlayers(): number;

/**
 * This function retrieves the server's HTTP port.
 * @returns An integer corresponding to the server's HTTP port.
 * @see https://wiki.mtasa.com/wiki/GetServerHttpPort
 **/
declare function getServerHttpPort(): number;

/**
 * This function retrieves the server's name.
 * @returns A string containing the server's name.
 * @see https://wiki.mtasa.com/wiki/GetServerName
 **/
declare function getServerName(): string;

/**
 * This function returns the current password required to join the server.
 * @returns Returns the current server password as a string if it has a password, if not it returns undefined.
 * @see https://wiki.mtasa.com/wiki/GetServerPassword
 **/
declare function getServerPassword(): string | undefined;

/**
 * This function retrieves the server's port.
 * @returns An integer corresponding to the server's port.
 * @see https://wiki.mtasa.com/wiki/GetServerPort
 **/
declare function getServerPort(): number;

interface VersionInformation {
  // The MTA server or client version (depending where the function was called) in pure numerical form, e.g. "256"
  number: number;

  // The MTA server or client version (depending where the function was called) in textual form, e.g. "1.0"
  mta: number;

  // The full MTA product name, either "MTA:SA Server" or "MTA:SA Client"
  name: "MTA:SA Server" | "MTA:SA Client";

  // The netcode version number
  netcode: number;

  // Returns the operating system on which the server or client is running
  os: string;

  /*
  The type of build. can be:
  "Nightly rX" - A nightly development build. X represents the nightly build revision
  "Custom" - A build compiled manually
  "Release" - A build that is publicly released (provisional)
   */
  type: "Nightly rX" | "Custom" | "Release";

  // The build tag (from 1.0.3 onwards). Contains infomation about the underlying version used. i.e. The final version of 1.0.3 has the build tag of "1.0.3 rc-9" (This can be confirmed by using the console command 'ver')
  tag: string;

  // A 15 character sortable version string (from 1.0.4 onwards). Format of the string is described in getPlayerVersion.
  sortable: string;
}

/**
 * This function gives you various version information about MTA and the operating system.
 * @returns Returns an object with version information.
 * @see https://wiki.mtasa.com/wiki/GetVersion
 **/
declare function getVersion(): VersionInformation;

/**
 * This function retrieves whether San Andreas game glitches are enabled or not, set by using setGlitchEnabled.
 * @param glitchName the name of the property to set. Possible values are: "quickreload", "fastmove", "fastfire", "crouchbug", "highcloserangedamage", "hitanim", "fastsprint", "baddrivebyhitbox", "quickstand".
 * @returns Returns true if if the glitch was enabled, or false if it is disabled.
 * @see https://wiki.mtasa.com/wiki/IsGlitchEnabled
 **/
declare function isGlitchEnabled(glitchName: string): boolean;

/**
 * This function sets the maximum FPS (Frames per second) that players on the server can run their game at.
 * @param fpsLimit An integer value representing the maximum FPS. This value may be between 25 and 100 FPS. You can also pass 0 or false, in which case the FPS limit will be the one set in the client settings (by default, 100 FPS).
 * @returns Returns true if successful, or false if it was not possible to set the limit or an invalid value was passed.
 * @see https://wiki.mtasa.com/wiki/SetFPSLimit
 **/
declare function setFPSLimit(fpsLimit: number | false): boolean;

/**
 * This function enables or disables glitches that are found in the original Single Player game that can be used to gain an advantage in multiplayer.
 * Users of the fastmove glitch may additionally want to install this resource to disable crouchsliding.
 * - Note: By default all these glitches are disabled - use this function to enable them.
 * @param glitchName the name of the property to set. Possible values are: "quickreload", "fastmove", "fastfire", "crouchbug", "highcloserangedamage", "hitanim", "fastsprint", "baddrivebyhitbox", "quickstand".
 * @param enable whether or not to enable the glitch.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetGlitchEnabled
 **/
declare function setGlitchEnabled(glitchName: string, enable: boolean): boolean;

/**
 * This function sets the maximum number of player slots on the server.
 * - Note: This function cannot set more than as defined in mtaserver.conf. (To find out the value, use getServerConfigSetting("maxplayers")).
 * @param slots Maximum number of player slots on the server.
 * @returns Returns true if number of player slots was successfully changed, false or undefined otherwise.
 * @see https://wiki.mtasa.com/wiki/SetMaxPlayers
 **/
declare function setMaxPlayers(slots: number): boolean | undefined;

/**
 * This function changes the password required to join the server to the given string.
 * @param thePassword The new server password you want. Pass undefined or an empty string to remove the password.
 * @returns Returns true if the password was successfully changed or removed, false or undefined otherwise.
 * @see https://wiki.mtasa.com/wiki/SetServerPassword
 **/
declare function setServerPassword(thePassword: string | undefined): boolean | undefined;

/**
 * This function shuts down the server.
 * - Note: Make sure your server ACL setup has function.shutdown object protected.
 * @param reason the reason why the server has been shut down.
 * @returns Returns false if it was not possible to shut down the server.
 * @see https://wiki.mtasa.com/wiki/Shutdown
 **/
declare function shutdown(reason: string): false;
