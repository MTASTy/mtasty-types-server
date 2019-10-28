declare class Account {
  readonly serial: string;
  readonly name: string;
  readonly id: number;
  readonly ip: string;
  readonly player: Player | false;
  readonly guest: boolean;
  // password: string; // Change only
  readonly data: {[key: string]: any};

  // static getAll(): Account[];
  // static getAllByData(dataName: string, value: string | number | boolean): Account[] | false;
  // static getAllBySerial(serial: string): Account[] | false;
  // static getAllByIP(ip: string): Account[] | false;
  // static getFromPlayer(thePlayer: Player): Account | false;
  // static logPlayerOut(thePlayer: Player): boolean | undefined;
  // static create(username: string, password: string, caseSensitive?: boolean): Account | false;

  /**
   * This function adds an account to the list of registered accounts of the current server.
   * @param name The name of the account you wish to make, this normally is the player's name.
   * @param pass The password to set for this account for future logins.
   * @param [allowCaseVariations=false] Whether the username is case sensitive (if this is set to true, usernames "Bob" and "bob" will refer to different accounts).
   * @see https://wiki.mtasa.com/wiki/AddAccount
   **/
  constructor(name: string, pass: string, allowCaseVariations?: boolean);

  /**
   * This function copies all of the data from one account to another.
   * @param fromAccount The account you wish to copy the data from.
   * @returns Returns a true if the accounts were valid.
   * @see https://wiki.mtasa.com/wiki/CopyAccountData
   **/
  copyDataFrom(fromAccount: Account): boolean;

  /**
   * This function is used to delete existing player accounts.
   * @returns Returns true if account was successfully removed.
   * @see https://wiki.mtasa.com/wiki/RemoveAccount
   **/
  remove(): boolean;

  /**
   * This function sets a string to be stored in an account.
   * This can then be retrieved using getAccountData.
   * Data stored as account data is persistent across user's sessions and maps, unless they are logged into a guest account.
   * Even if logged into a guest account, account data can be useful as a way to store a reference to your own account system, though it's persistence is equivalent to that of using setElementData on the player's element.
   * - Important note: You MUST use the standard module.key naming for your keys, as shown in the example below. This prevents collisions between different scripts.
   * @param key The key under which you wish to store the data.
   * @param value The value you wish to store. Set to false to remove the data. NOTE: you cannot store arrays as values, but you can use toJSON strings.
   * @returns Returns a true if the account data was set, false if an invalid argument was specified.
   * @see https://wiki.mtasa.com/wiki/SetAccountData
   **/
  setData(key: string, value: string | number | boolean): boolean;

  /**
   * This function sets the password of the specified account.
   * @param password the password.
   * @returns Returns true if the password was set correctly, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetAccountPassword
   **/
  setPassword(password: string): boolean;

  /**
   * This function sets the name of an account.
   * @param name The new name.
   * @param [allowCaseVariations=false] Whether the username is case sensitive (if this is set to true, usernames "Bob" and "bob" will refer to different accounts).
   * @returns Returns a true if the account name was set, false if an invalid argument was specified.
   * @see https://wiki.mtasa.com/wiki/SetAccountName
   **/
  setName(name: string, allowCaseVariations?: boolean): boolean;

  /**
   * This function returns the last serial that logged onto the specified account.
   * @returns Returns string containing the serial, the string is empty if the account was never used.
   * @see https://wiki.mtasa.com/wiki/GetAccountSerial
   **/
  getSerial(): string;

  /**
   * This function retrieves the IP address of an account.
   * @returns Returns a string containing the account's IP.
   * @see https://wiki.mtasa.com/wiki/GetAccountIP
   **/
  getIP(): string;

  /**
   * This function retrieves the ID of an account.
   * @returns Returns a int containing the account's ID.
   * @see https://wiki.mtasa.com/wiki/GetAccountID
   **/
  getID(): number;

  /**
   * This function retrieves a string that has been stored using setAccountData.
   * Data stored as account data is persistent across user's sessions and maps, unless they are logged into a guest account.
   * - Important note: You MUST use the standard module.key naming for your keys, as shown in the example below. This prevents collisions between different scripts.
   * @param key The key under which the data is stored.
   * @returns Returns a string containing the stored data or false if no data was stored under that key.
   * @see https://wiki.mtasa.com/wiki/GetAccountData
   **/
  getData(key: string): string | number | boolean;

  /**
   * This function returns an array containing all the user data for the account provided
   * @returns An object containing all the user data. This object might be empty.
   * @see https://wiki.mtasa.com/wiki/GetAllAccountData
   **/
  getAllData(): {[key: string]: any};

  /**
   * This function retrieves the name of an account.
   * @returns Returns a string containing the account's name.
   * @see https://wiki.mtasa.com/wiki/GetAccountName
   **/
  getName(): string;

  /**
   * This function returns the player element that is currently using a specified account, i.e. is logged into it. Only one player can use an account at a time.
   * @returns Returns a player element if the account is currently in use, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetAccountPlayer
   **/
  getPlayer(): Player | false;

  /**
   * This function checks to see if an account is a guest account.
   * A guest account is an account automatically created for a user when they join the server and deleted when they quit or login to another account.
   * Data stored in a guest account is not stored after the player has left the server.
   * As a consequence, this function will check if a player is logged in or not.
   * @returns Returns true if the account is a guest account, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsGuestAccount
   **/
  isGuest(): boolean;
}
