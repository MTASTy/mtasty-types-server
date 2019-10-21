/**
 * This function will add a ban for the specified IP/username/serial to the server.
 * - Note: One of the three: IP, Username or Serial have to be specified.
 * @param IP The IP to be banned. If you don't want to ban by IP, set this to undefined.
 * @param Username The MTA Community username to be banned (now obsolete). If you don't want to ban by username, set this to undefined.
 * @param Serial The serial to be banned. If you don't want to ban by serial, set this to undefined.
 * @param player This can be a Player.
 * @param reason The reason the IP/username/serial will be banned from the server.
 * @param [seconds=0] The amount of seconds the player will be banned from the server for. This can be 0 for an infinite amount of time.
 * @returns Returns the new ban if the IP/username/serial was banned successfully, false if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/AddBan
 **/
declare function addBan(IP: string | undefined, Username: string | undefined, Serial: string | undefined, player?: Player, reason?: string, seconds?: number): Ban | false;

// TODO: has not responsibleElement
/**
 * This function will ban the specified player by either IP, serial or username
 * This function will ban the specified player from the server by IP.
 * @param bannedPlayer The player that will be banned from the server.
 * @param [IP=true] IP Will player be banned by IP?
 * @param [Username=false] Username Will player be banned by username?
 * @param [Serial=false] Serial Will player be banned by serial?
 * @param reason The reason the player will be banned from the server.
 * @param [seconds=0] The amount of seconds the player will be banned from the server for. This can be 0 for an infinite amount of time.
 * @returns Returns a ban object if banned successfully, or false if unsuccessful.
 * @see https://wiki.mtasa.com/wiki/BanPlayer
 **/
declare function banPlayer(bannedPlayer: Player, IP?: boolean, Username?: boolean, Serial?: boolean, reason?: string, seconds?: number): Ban | false;

/**
 * This function will return the responsible admin (nickname of the admin) of the specified ban.
 * @param theBan The ban you want to return the admin of.
 * @returns Returns a string of the admin if everything was successful, false if invalid arguments are specified if there was no admin specified for the ban.
 * @see https://wiki.mtasa.com/wiki/GetBanAdmin
 **/
declare function getBanAdmin(theBan: Ban): string | false;

/**
 * This function will return the IP of the specified ban.
 * @param theBan The ban in which you want to return the IP of.
 * @returns Returns a string of the IP if everything was successful, false if invalid arguments are specified if there was no IP specified for the ban.
 * @see https://wiki.mtasa.com/wiki/GetBanIP
 **/
declare function getBanIP(theBan: Ban): string | false;

/**
 * This function will return the nickname (nickname that the player had when he was banned) of the specified ban.
 * @param theBan The ban element which nickname you want to return.
 * @returns Returns a string of the nickname if everything was successfull, false if invalid arguments are specified if there was no nickname specified for the ban element.
 * @see https://wiki.mtasa.com/wiki/GetBanNick
 **/
declare function getBanNick(theBan: Ban): string | false;

/**
 * This function will return the ban reason of the specified ban.
 * @param theBan The ban in which you want to return the reason of.
 * @returns Returns a string of the reason if everything was successful, false if invalid arguments are specified if there was no reason specified for the ban.
 * @see https://wiki.mtasa.com/wiki/GetBanReason
 **/
declare function getBanReason(theBan: Ban): string | false;

/**
 * This function will return the serial of the specified ban.
 * @param theBan The ban you want to retrieve the serial of.
 * @returns Returns a string of the serial if everything was successful, false if invalid arguments are specified or if there was no serial specified for the ban.
 * @see https://wiki.mtasa.com/wiki/GetBanSerial
 **/
declare function getBanSerial(theBan: Ban): string | false;

/**
 * This function will return the time the specified ban was created, in seconds.
 * @param theBan The ban of which you wish to retrieve the time of.
 * @returns Returns an integer of the banning time in the format of seconds from the year 1970. Use in conjunction with getRealTime in order to retrieve detailed information. Or false if invalid arguments were specified or if there was no banning time specified for the ban.
 * @see https://wiki.mtasa.com/wiki/GetBanTime
 **/
declare function getBanTime(theBan: Ban): number | false;

/**
 * This function will return the username of the specified ban.
 * @param theBan The ban in which you wish to retrieve the username of.
 * @returns Returns a string of the username if everything was successful, false if invalid arguments are specified if there was no username specified for the ban.
 * @see https://wiki.mtasa.com/wiki/GetBanUsername
 **/
declare function getBanUsername(theBan: Ban): string | false;

// TODO: fix types
/**
 * This function will return a table containing all the bans present in the server's banlist.xml.
 * @returns Returns a table containing all the bans.
 * @see https://wiki.mtasa.com/wiki/GetBans
 **/
declare function getBans(): [];

/**
 * This function will return the unbanning time of the specified ban in seconds.
 * @param theBan The ban in which you wish to retrieve the unban time of.
 * @returns Returns an integer of the banning time in the format of seconds from the year 1970. Use in conjunction with getRealTime in order to retrieve detailed information. Or false if invalid arguments were specified or if there was no banning time specified for the ban.
 * @see https://wiki.mtasa.com/wiki/GetUnbanTime
 **/
declare function getUnbanTime(theBan: Ban): number | false;

/**
 * This function checks whether the passed value is valid ban or not.
 * @param theBan The value to check
 * @returns Returns true if the value is a ban, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsBan
 **/
declare function isBan(theBan: Ban): boolean;

/**
 * This function will kick the specified player from the server.
 * @param kickedPlayer The player that will be kicked from the server
 * @param responsiblePlayer The player that is responsible for the event. If left out as in the second syntax, responsible player for the kick will be "Console" (Maximum 30 characters if using a string).
 * @param [reason=""] The reason for the kick. (Maximum 64 characters)
 * @returns Returns true if the player was kicked succesfully, false if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/KickPlayer
 **/
declare function kickPlayer(kickedPlayer: Player, responsiblePlayer?: string | Player, reason?: string): boolean;

/**
 * This function sets a new admin for a ban.
 * @param theBan The ban you want to change the admin of.
 * @param theAdmin The new admin.
 * @returns Returns true if changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetBanAdmin
 **/
declare function setBanAdmin(theBan: Ban, theAdmin: string): boolean;

/**
 * This function sets a new nick for a ban.
 * @param theBan The ban you want to change the nick of.
 * @param theNick A string representing the nick you want to set the ban to.
 * @returns Returns true if changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetBanNick
 **/
declare function setBanNick(theBan: Ban, theNick: string): boolean;

/**
 * This function sets the reason for the specified ban.
 * @param theBan The ban that you wish to set the reason of.
 * @param theReason the new reason (max 60 characters).
 * @returns Returns true if the new reason was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetBanReason
 **/
declare function setBanReason(theBan: Ban, theReason: string): boolean;

/**
 * This function sets a new unban time of a given ban using unix timestamp (seconds since Jan 01 1970).
 * @param theBan The ban of which to change the unban time of
 * @param theTime the new unban time
 * @returns Returns true if changed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetUnbanTime
 **/
declare function setUnbanTime(theBan: Ban, theTime: number): boolean;

/**
 * This function will reload the server ban list file.
 * @returns Returns true if the ban list was reloaded successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ReloadBans
 **/
declare function reloadBans(): boolean;

/**
 * This function will remove a specific ban.
 * @param theBan The ban to be removed.
 * @param [player=undefined] The player that is responsible for removing the ban element.
 * @returns Returns true if the ban was removed succesfully, false if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/RemoveBan
 **/
declare function removeBan(theBan: Ban, player?: Player): boolean;