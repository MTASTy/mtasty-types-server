/**
 * This function adds an account to the list of registered accounts of the current server.
 * @param name The name of the account you wish to make, this normally is the player's name.
 * @param pass The password to set for this account for future logins.
 * @param [allowCaseVariations=false] Whether the username is case sensitive (if this is set to true, usernames "Bob" and "bob" will refer to different accounts)
 * @returns Returns an account or false if the account already exists or an error occured.
 * @see https://wiki.mtasa.com/wiki/AddAccount
 **/
declare function addAccount(name: string, pass: string, allowCaseVariations?: boolean): Account | false;

/**
 * This function copies all of the data from one account to another.
 * @param theAccount The account you wish to copy the data to.
 * @param fromAccount The account you wish to copy the data from.
 * @returns Returns a true if the accounts were valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CopyAccountData
 **/
declare function copyAccountData(theAccount: Account, fromAccount: Account): boolean;

/**
 * This function returns an account for a specific user.
 * @param username The username of the account you want to retrieve
 * @param password The password for the account.If this argument is not specified, you can get the account whatever password it is, otherwise the password must match the account's.
 * @param [caseSensitive=true] Specifies whether to ignore the case when searching for an account.
 * @returns Returns an account or false if an account matching the username specified (and password, if specified) could not be found.
 * @see https://wiki.mtasa.com/wiki/GetAccount
 **/
declare function getAccount(username: string, password: string, caseSensitive?: boolean): Account | false;

/**
 * This function retrieves a string that has been stored using setAccountData.
 * Data stored as account data is persistent across user's sessions and maps, unless they are logged into a guest account.
 * - Important note: You MUST use the standard module.key naming for your keys, as shown in the example below. This prevents collisions between different scripts.
 * @param theAccount The account you wish to retrieve the data from.
 * @param key The key under which the data is stored
 * @returns Returns a string containing the stored data or false if no data was stored under that key.
 * @see https://wiki.mtasa.com/wiki/GetAccountData
 **/
declare function getAccountData(theAccount: Account, key: string): string | number | boolean;

/**
 * This function retrieves the name of an account.
 * @param theAccount The account you wish to get the name of.
 * @returns Returns a string containing the account's name, false if the account does not exist or an invalid argument was passed to the function.
 * @see https://wiki.mtasa.com/wiki/GetAccountName
 **/
declare function getAccountName(theAccount: Account): string | false;

/**
 * This function returns the player element that is currently using a specified account, i.e. is logged into it. Only one player can use an account at a time.
 * @param theAccount The account you wish to get the player of.
 * @returns Returns a player element if the account is currently in use, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetAccountPlayer
 **/
declare function getAccountPlayer(theAccount: Account): Player | false;

/**
 * This function returns the last serial that logged onto the specified account.
 * @param theAccount The account to get serial from
 * @returns Returns string containing the serial, the string is empty if the account was never used. Returns false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/GetAccountSerial
 **/
declare function getAccountSerial(theAccount: Account): string | false;

/**
 * This function returns a table over all the accounts that exist in the server internal.db file.
 * - (Note: accounts.xml is no longer used after version 1.0.4)
 * @returns A table over the accounts that exist in the server internal.db file. This table might be empty.
 * @see https://wiki.mtasa.com/wiki/GetAccounts
 **/
declare function getAccounts(): Account[];

/**
 * This function returns a table containing all accounts that were logged onto from specified serial. If the serial is empty string, it will return all accounts that were never logged onto.
 * @param serial The serial to get accounts from
 * @returns Returns table containing the accounts associated with specified serial. Returns false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/GetAccountsBySerial
 **/
declare function getAccountsBySerial(serial: string): Account[] | false;

/**
 * This function returns a table containing all the user data for the account provided
 * @param theAccount The account you wish to retrieve all data from.
 * @returns A table containing all the user data. This table might be empty.
 * @see https://wiki.mtasa.com/wiki/GetAllAccountData
 **/
declare function getAllAccountData(theAccount: Account): {[key: string]: any};

/**
 * This function returns the specified player's account.
 * @param thePlayer The player element you want to get the account of.
 * @returns Returns the player's account or false if the player passed to the function is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPlayerAccount
 **/
declare function getPlayerAccount(thePlayer: Player): Account | false;

/**
 * This function checks to see if an account is a guest account.
 * A guest account is an account automatically created for a user when they join the server and deleted when they quit or login to another account.
 * Data stored in a guest account is not stored after the player has left the server.
 * As a consequence, this function will check if a player is logged in or not.
 * @param theAccount The account you want to check to see if it is a guest account.
 * @returns Returns true if the account is a guest account, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsGuestAccount
 **/
declare function isGuestAccount(theAccount: Account): boolean;

/**
 * This functions logs the given player in to the given account.
 * You need to provide the password needed to log into that account.
 * @param thePlayer The player to log into an account
 * @param theAccount The account to log the player into
 * @param thePassword The password needed to sign into this account
 * @returns Returns true if the player was successfully logged into the given account. Returns false or undefined if the log in failed for some reason, ie. the player was already logged in to some account (use logOut first), if the account was already in use or if it failed for some other reason.
 * @see https://wiki.mtasa.com/wiki/LogIn
 **/
declare function logIn(thePlayer: Player, theAccount: Account, thePassword: string): boolean | undefined;

/**
 * This function logs the given player out of his current account.
 * @param thePlayer The player to log out of his current account
 * @returns Returns true if the player was successfully logged out, false or undefined if it failed for some reason, ie. the player was never logged in.
 * @see https://wiki.mtasa.com/wiki/LogOut
 **/
declare function logOut(thePlayer: Player): boolean | undefined;

/**
 * This function is used to delete existing player accounts.
 * @param theAccount The account you wish to remove
 * @returns Returns true if account was successfully removed, false if the account does not exist.
 * @see https://wiki.mtasa.com/wiki/RemoveAccount
 **/
declare function removeAccount(theAccount: Account): boolean;

/**
 * This function sets a string to be stored in an account.
 * This can then be retrieved using getAccountData.
 * Data stored as account data is persistent across user's sessions and maps, unless they are logged into a guest account.
 * Even if logged into a guest account, account data can be useful as a way to store a reference to your own account system, though it's persistence is equivalent to that of using setElementData on the player's element.
 * - Important note: You MUST use the standard module.key naming for your keys, as shown in the example below. This prevents collisions between different scripts.
 * @param theAccount The account you wish to retrieve the data from.
 * @param key The key under which you wish to store the data
 * @param value The value you wish to store. Set to false to remove the data. NOTE
 * @returns Returns a true if the account data was set, false if an invalid argument was specified.
 * @see https://wiki.mtasa.com/wiki/SetAccountData
 **/
declare function setAccountData(theAccount: Account, key: string, value: string | number | boolean): boolean;

/**
 * This function sets the password of the specified account.
 * @param theAccount the account whose password you want to set
 * @param password the password
 * @returns Returns true if the password was set correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetAccountPassword
 **/
declare function setAccountPassword(theAccount: Account, password: string): boolean;

/**
 * This function returns the account with the specific ID.
 * @param id The ID to get account from
 * @returns Returns account associated with specified ID. Returns false if invalid arguments were specified or there is no account with this ID.
 * @see https://wiki.mtasa.com/wiki/GetAccountByID
 **/
declare function getAccountByID(id: number): Account | false;

/**
 * This function retrieves the ID of an account.
 * @param theAccount The account you wish to get the ID of.
 * @returns Returns a int containing the account's ID, false if the account does not exist or an invalid argument was passed to the function.
 * @see https://wiki.mtasa.com/wiki/GetAccountID
 **/
declare function getAccountID(theAccount: Account): number | false;

/**
 * This function retrieves the IP address of an account.
 * @param theAccount The account you wish to get the IP of.
 * @returns Returns a string containing the account's IP, false if the account does not exist or an invalid argument was passed to the function.
 * @see https://wiki.mtasa.com/wiki/GetAccountIP
 **/
declare function getAccountIP(theAccount: Account): string | false;

// TODO: Fix types
/**
 * This function returns a table containing all accounts with specified dataName and value (set with setAccountData).
 * @param dataName The name of the data
 * @param value The value the dataName should have
 * @returns Returns table containing the accounts associated with specified value at dataName. Returns false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/GetAccountsByData
 **/
declare function getAccountsByData(dataName: string, value: string | number | boolean): object | false;

// TODO: Fix types
/**
 * This function returns a table containing all accounts that were logged onto from specified IP-address.
 * @param ip The IP to get accounts from
 * @returns Returns table containing the accounts associated with specified IP-address. Returns false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/GetAccountsByIP
 **/
declare function getAccountsByIP(ip: string): object | false;

/**
 * This function sets the name of an account.
 * @param theAccount The account you wish to change the name.
 * @param name The new name.
 * @param [allowCaseVariations=false] Whether the username is case sensitive (if this is set to true, usernames "Bob" and "bob" will refer to different accounts)
 * @returns Returns a true if the account name was set, false if an invalid argument was specified.
 * @see https://wiki.mtasa.com/wiki/SetAccountName
 **/
declare function setAccountName(theAccount: Account, name: string, allowCaseVariations?: boolean): boolean;
