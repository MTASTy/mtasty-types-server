declare class Ban {
  admin: string | false;
  readonly IP: string | false;
  readonly serial: string | false;
  readonly time: number | false;
  unbanTime: number | false;
  reason: string | false;
  nick: string | false;

  // static getList(): Ban[];
  // static reload(): boolean;

  /**
   * This function will add a ban for the specified IP/username/serial to the server.
   * - Note: One of the three: IP, Username or Serial have to be specified.
   * @param IP The IP to be banned. If you don't want to ban by IP, set this to undefined.
   * @param Username The MTA Community username to be banned (now obsolete). If you don't want to ban by username, set this to undefined.
   * @param Serial The serial to be banned. If you don't want to ban by serial, set this to undefined.
   * @param player This can be a Player.
   * @param reason The reason the IP/username/serial will be banned from the server.
   * @param [seconds=0] The amount of seconds the player will be banned from the server for. This can be 0 for an infinite amount of time.
   * @see https://wiki.mtasa.com/wiki/AddBan
   **/
  constructor(IP: string | undefined, Username: string | undefined, Serial: string | undefined, player?: Player, reason?: string, seconds?: number);

  /**
   * This function will remove a specific ban.
   * @param [player=undefined] The player that is responsible for removing the ban element.
   * @returns Returns true if the ban was removed succesfully, false if invalid arguments are specified.
   * @see https://wiki.mtasa.com/wiki/RemoveBan
   **/
  remove(player?: Player): boolean;

  /**
   * This function will return the responsible admin (nickname of the admin) of the specified ban.
   * @returns Returns a string of the admin if everything was successful, false if there was no admin specified for the ban.
   * @see https://wiki.mtasa.com/wiki/GetBanAdmin
   **/
  getAdmin(): string | false;

  /**
   * This function will return the IP of the specified ban.
   * @returns Returns a string of the IP if everything was successful, false if there was no IP specified for the ban.
   * @see https://wiki.mtasa.com/wiki/GetBanIP
   **/
  getIP(): string | false;

  /**
   * This function will return the nickname (nickname that the player had when he was banned) of the specified ban.
   * @returns Returns a string of the nickname if everything was successfull, false if there was no nickname specified for the ban element.
   * @see https://wiki.mtasa.com/wiki/GetBanNick
   **/
  getNick(): string | false;

  /**
   * This function will return the ban reason of the specified ban.
   * @returns Returns a string of the reason if everything was successful, false if there was no reason specified for the ban.
   * @see https://wiki.mtasa.com/wiki/GetBanReason
   **/
  getReason(): string | false;

  /**
   * This function will return the serial of the specified ban.
   * @returns Returns a string of the serial if everything was successful, false if there was no serial specified for the ban.
   * @see https://wiki.mtasa.com/wiki/GetBanSerial
   **/
  getSerial(): string | false;

  /**
   * This function will return the time the specified ban was created, in seconds.
   * @returns Returns an integer of the banning time in the format of seconds from the year 1970. Use in conjunction with getRealTime in order to retrieve detailed information. Or false if there was no banning time specified for the ban.
   * @see https://wiki.mtasa.com/wiki/GetBanTime
   **/
  getTime(): number | false;

  /**
   * This function will return the unbanning time of the specified ban in seconds.
   * @returns Returns an integer of the banning time in the format of seconds from the year 1970. Use in conjunction with getRealTime in order to retrieve detailed information. Or false if there was no banning time specified for the ban.
   * @see https://wiki.mtasa.com/wiki/GetUnbanTime
   **/
  getUnbanTime(): number | false;

  /**
   * This function sets a new unban time of a given ban using unix timestamp (seconds since Jan 01 1970).
   * @param theTime the new unban time.
   * @returns Returns true if changed successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetUnbanTime
   **/
  setUnbanTime(theTime: number): boolean;

  /**
   * This function sets the reason for the specified ban.
   * @param theReason the new reason (max 60 characters).
   * @returns Returns true if the new reason was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetBanReason
   **/
  setReason(theReason: string): boolean;

  /**
   * This function sets a new nick for a ban.
   * @param theNick A string representing the nick you want to set the ban to.
   * @returns Returns true if changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetBanNick
   **/
  setNick(theNick: string): boolean;

  /**
   * This function sets a new admin for a ban.
   * @param theAdmin The new admin.
   * @returns Returns true if changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetBanAdmin
   **/
  setAdmin(theAdmin: string): boolean;
}
