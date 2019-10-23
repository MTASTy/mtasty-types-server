/**
 * This function allows tracing of MTA functions and events.
 * It should only be used when debugging scripts as it may degrade script performance.
 * Debug hooks are not recursive, so functions and events triggered inside the hook callback will not be traced.
 * @param hookType The type of hook to add.
 * @param callbackFunction The function to call.
 * @param nameList loadMapDataTable of strings for restricting which functions and events the hook will be triggered on.
 * @returns Returns true if the hook was successfully added, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/AddDebugHook
 **/
declare function addDebugHook(hookType: string, callbackFunction: SimpleHandler, nameList?: string[]): boolean;

/**
 * This function returns the decrypted data from base64 representation of the encrypted block.
 * @param data The block of data you want to decrypt.
 * @returns Returns the decrypted data from base64 representation of the encrypted block if the decryption process was successfully completed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/Base64Decode
 **/
declare function base64Decode(data: string): string | false;

/**
 * This function returns the base64 representation of the encoded block of data.
 * @param data The block of data you want to encode.
 * @returns Returns the base64 representation of the encoded data if the encoding process was successfully completed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/Base64Encode
 **/
declare function base64Encode(data: string): string | false;

/**
 * This function performs a bitwise AND-conjunction on two or more (unsigned) 32-bit numbers.
 * @param args: The value you want to perform an AND-conjunction on.
 * @returns Returns the conjuncted value.
 * @see https://wiki.mtasa.com/wiki/BitAnd
 **/
declare function bitAnd(...args: number[]): number;

/**
 * This function performs a bitwise NOT on an (unsigned) 32-bit number.
 * @param arg The value you want to perform a bitwise NOT on.
 * @returns Returns the value on which the operation has been performed.
 * @see https://wiki.mtasa.com/wiki/BitNot
 **/
declare function bitNot(arg: number): number;

/**
 * This function performs a bitwise OR-conjunction on two or more (unsigned) 32-bit numbers.
 * @param args: The value you want to perform an OR-conjunction on.
 * @returns Returns the conjuncted value.
 * @see https://wiki.mtasa.com/wiki/BitOr
 **/
declare function bitOr(...args: number[]): number;

/**
 * This function performs a bitwise XOR-conjunction (exclusive OR) on two or more (unsigned) 32-bit numbers.
 * @param args The value you want to perform a XOR-conjunction on.
 * @returns Returns the conjuncted value.
 * @see https://wiki.mtasa.com/wiki/BitXor
 **/
declare function bitXor(...args: number[]): number;

/**
 * This function performs an AND-conjunction on two or more (unsigned) 32-bit numbers and checks, whether the conjuncted value is zero or not.
 * @param args The value you want to perform the operation on (see above).
 * @returns Returns true if the conjuncted value is not zero, false otherwise. If a bad argument was passed to bitTest, you'll get undefined.
 * @see https://wiki.mtasa.com/wiki/BitTest
 **/
declare function bitTest(...args: number[]): boolean | undefined;

/**
 * This functions performs a bitwise circular left-rotation on the number value by number n positions.
 * @param value The value you want to perform the rotation on.
 * @param n The amount of positions to rotate the value by.
 * @returns Returns the circular left-rotated value as number.
 * @see https://wiki.mtasa.com/wiki/BitLRotate
 **/
declare function bitLRotate(value: number, n: number): number;

/**
 * This functions performs a bitwise circular right-rotation on the number value by number n positions.
 * @param value The value you want to perform the rotation on.
 * @param n The amount of positions to rotate the value by.
 * @returns Returns the circular right-rotated value as number.
 * @see https://wiki.mtasa.com/wiki/BitRRotate
 **/
declare function bitRRotate(value: number, n: number): number;

/**
 * This functions performs a logical left shift on the number value by number n positions.
 * In a logical shift, zeros are shifted in to replace the discarded bits.
 * @param value The value you want to perform the shift on.
 * @param n The amount of positions to shift the value by.
 * @returns Returns the logical left shifted value as number.
 * @see https://wiki.mtasa.com/wiki/BitLShift
 **/
declare function bitLShift(value: number, n: number): number;

/**
 * This functions performs a logical right shift on the number value by number n positions.
 * In a logical shift, zeros are shifted in to replace the discarded bits.
 * @param value The value you want to perform the shift on.
 * @param n The amount of positions to shift the value by.
 * @returns Returns the logical right shifted value as number.
 * @see https://wiki.mtasa.com/wiki/BitRShift
 **/
declare function bitRShift(value: number, n: number): number;

/**
 * This functions performs an arithmetic shift on the number value by number n positions.
 * In an arithmetic shift, zeros are shifted in to replace the discarded bits.
 * In a right arithmetic shift, the sign bit is shifted in on the left, thus preserving the sign of the operand.
 * @param value The value you want to perform the arithmetic shift on.
 * @param n The amount of positions to shift the value by.
 * @returns Returns the arithmetic shifted value as number.
 * @see https://wiki.mtasa.com/wiki/BitArShift
 **/
declare function bitArShift(value: number, n: number): number;

/**
 * This function returns the unsigned number formed by the bits field to field + width - 1 (range: 0-31).
 * @param arg The value.
 * @param field The field number.
 * @param [width=1] Number of bits to extract.
 * @returns Returns the extracted value/bit sequence.
 * @see https://wiki.mtasa.com/wiki/BitExtract
 **/
declare function bitExtract(arg: number, field: number, width?: number): number;

/**
 * This function returns the unsigned number formed by var value with replacement specified at bits field to field + width - 1.
 * @param arg The value.
 * @param replaceValue The replaceValue.
 * @param field The field number.
 * @param [width=1] Number of bits to extract.
 * @returns Returns the replaced value/bit sequence.
 * @see https://wiki.mtasa.com/wiki/BitReplace
 **/
declare function bitReplace(arg: number, replaceValue: number, field: number, width?: number): number;

/**
 * debugSleep freezes the client/server for the specified time.
 * This means that all synchronization, rendering and script execution will stop except HTTP processing invoked by fetchRemote.
 * This function only works, if development mode is enabled by setDevelopmentMode and can be utilised to build a debugger that communicates via HTTP requests with the editor/IDE.
 * - Warning: Only use this function if you know what you are doing!
 * @param sleep a number value in milliseconds.
 * @returns Returns true if the development mode is enabled and arguments are correct, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DebugSleep
 **/
declare function debugSleep(sleep: number): boolean;

/**
 * This function decodes an encoded string using the specified algorithm.
 * The counterpart of this function is encodeString.
 * @param algorithm The algorithm to use.
 * @param input The input to decode.
 * @param options A table with options and other neccessary data for the algorithm, as detailed below.
 * @returns Returns the decoded string if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DecodeString
 **/
declare function decodeString(algorithm: string, input: string, options: any[]): string | false;

/**
 * This function encodes a string using the specified algorithm.
 * The counterpart of this function is decodeString.
 * @param algorithm The algorithm to use.
 * @param input The input to encode.
 * @param options A table with options and other neccessary data for the algorithm, as detailed below.
 * @returns Returns the encoded string if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EncodeString
 **/
declare function encodeString(algorithm: string, input: string, options: any[]): string | false;

/**
 * This function parses a JSON formatted string into variables.
 * You can use toJSON to encode variables into a JSON string that can be read by this function.
 * - Note: Indices of a JSON object such as "1": "cat" are being returned as string, not as number.
 * @param json A JSON formatted string.
 * @returns Returns variables read from the JSON string.
 * @see https://wiki.mtasa.com/wiki/FromJSON
 **/
declare function fromJSON(json: string): Object;

/**
 * This function will extract Red, Green, Blue and Alpha values from a hex string you provide it. These strings follow the same format as used in HTML, with addition of the Alpha values.
 * @param theColor A string containing a valid color code.All colors used must begin with a # sign.
 * @returns Returns four numbers in RGBA format, with a maximum value of 255 for each. Each stands for red, green, blue, and alpha. Alpha decides transparancy where 255 is opaque and 0 is transparent. false is returned if the string passed is invalid (for example, is missing the preceeding # sign).
 * @see https://wiki.mtasa.com/wiki/GetColorFromString
 * @tupleReturn
 **/
declare function getColorFromString(theColor: string): [number, number, number, number] | [false];

/**
 * This function is used to get the development mode of the client.
 * @returns Returns true if the development mode is on, false if off.
 * @see https://wiki.mtasa.com/wiki/GetDevelopmentMode
 **/
declare function getDevelopmentMode(): boolean;

/**
 * This function returns the distance between two 2 dimensional points using the pythagorean theorem.
 * - Note: This function is equivalent to the Vector2 class getLength method when used with a vector that holds the direction and distance between two points. In other words, it produces exactly the same result as substracting the points' coordinates and getting the length of the result vector.
 * @param x1 The X position of the first point.
 * @param y1 The Y position of the first point.
 * @param x2 The X position of the second point.
 * @param y2 The Y position of the second point.
 * @returns Returns a number containing the 2D distance between the two points. Returns false if invalid parameters are passed.
 * @see https://wiki.mtasa.com/wiki/GetDistanceBetweenPoints2D
 **/
declare function getDistanceBetweenPoints2D(x1: number, y1: number, x2: number, y2: number): number | false;

/**
 * This function returns the distance between two 3 dimensional points using the pythagorean theorem.
 * - Note: This function is equivalent to the Vector3 class getLength method when used with a vector that holds the direction and distance between two points. In other words, it produces exactly the same result as substracting the points' coordinates and getting the length of the result vector.
 * @param x1 The X position of the first point.
 * @param y1 The Y position of the first point.
 * @param z1 The Z position of the first point.
 * @param x2 The X position of the second point.
 * @param y2 The Y position of the second point.
 * @param z2 The Z position of the second point.
 * @returns Returns a number containing the distance between the two points as a number. Returns false if an argument passed was invalid.
 * @see https://wiki.mtasa.com/wiki/GetDistanceBetweenPoints3D
 **/
declare function getDistanceBetweenPoints3D(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number | false;

/**
 * Used for custom Lua based interpolation, returns the easing value (animation time to use in your custom interpolation) given a progress and an easing function.
 * In most cases, either moveObject or interpolateBetween can do the job.
 * getEasingValue is only provided in case you want to do your own custom interpolation based on easing.
 * @param fProgress number between 0 and 1 indicating the interpolation progress (0 at the beginning of the interpolation, 1 at the end).
 * @param strEasingType the easing function to use for the interpolation.
 * @param fEasingPeriod the period of the easing function (only some easing functions use this parameter).
 * @param fEasingAmplitude the amplitude of the easing function (only some easing functions use this parameter).
 * @param fEasingOvershoot the overshoot of the easing function (only some easing functions use this parameter).
 * @returns Returns fAnimationTime the animation time given by the easing function (can be 1 since some easing functions have overshoot or bounce/spring effects, false otherwise (error in parameters).
 * @see https://wiki.mtasa.com/wiki/GetEasingValue
 **/
declare function getEasingValue(fProgress: number, strEasingType: string, fEasingPeriod?: number, fEasingAmplitude?: number, fEasingOvershoot?: number): number | false;

interface NetworkStatsFormant {
  // Total number of bytes received since the connection was started
  bytesReceived: number;

  // Total number of bytes sent since the connection was started
  bytesSent: number;

  // Total number of packets received since the connection was started
  packetsReceived: number;

  // Total number of packets sent since the connection was started
  packetsSent: number;

  // (0-100) Total packet loss percentage of sent data, since the connection was started
  packetlossTotal: number;

  // (0-100) Packet loss percentage of sent data, during the previous second
  packetlossLastSecond: number;

  messagesInSendBuffer: number;

  // Number of packets queued to be resent (due to packet loss)
  messagesInResendBuffer: number;

  isLimitedByCongestionControl: boolean;

  isLimitedByOutgoingBandwidthLimit: boolean;

  encryptionStatus: any;
}

/**
 * This function returns network status information.
 * @param [thePlayer=undefined] The player you want to retrieve network stats from.
 * @returns Returns a table.
 * @see https://wiki.mtasa.com/wiki/GetNetworkStats
 **/
declare function getNetworkStats(thePlayer?: Element): NetworkStatsFormant | false;

/**
 * This function returns a table containing network usage information about inbound and outbound packets.
 * @returns Returns a table with two fields: "in" and "out". Each of these contain a table with two fields: "bits" and "count". Each of these contain a table with 256 numeric fields ranging from 0 to 255, containing the appropriate network usage data for such packet id.
 * @see https://wiki.mtasa.com/wiki/GetNetworkUsageData
 **/
declare function getNetworkUsageData(): {in: {bits: number[], count: number[]}, out: {bits: number[], count: number[]}};

/**
 * This function returns performance information.
 * @param category Performance statistics category. If empty string is given, list of all categories is returned. See categories for more information.
 * @param [options=""] Category specific ',' separated options. All categories supports 'h' option for help.
 * @param [filter=""] Case-sensitive filter used to select returned rows. Only 'name' column is filtered.
 * @returns Returns two tables. First contains column names. The second contains result rows. Each row is table of cells.
 * @see https://wiki.mtasa.com/wiki/GetPerformanceStats
 * @tupleReturn
 **/
declare function getPerformanceStats(category: string, options?: string, filter?: string): [any[], any[]] | [false];

interface RealTime {
  // Seconds after the minute
  seconds: number;

  // Minutes after the hour
  minute: number;

  // Hours since midnight
  hour: number;

  // Day of the month
  monthday: number;

  // Months since January
  month: number;

  // Years since 1900
  year: number;

  // Days since Sunday
  weekday: number;

  // Days since January 1
  yearday: number;

  // Daylight Saving Time flag
  isdst: number;

  // Seconds since 1970 (Ignoring set timezone)
  timestamp: number;
}

/**
 * This function gets the server or client (if used client sided it returns time as set on client's computer) real time and returns it in a table.
 * If you want to get the in-game time (shown on GTA's clock) use getTime.
 * @param [seconds=current] A count in seconds from the year 1970. Useful for storing points in time, or for retrieving time information for getBanTime. The valid range of this argument is 0 to 32,000,000,000.
 * @param [localTime=true] Set to true to adjust for the locally set timezone.
 * @returns Returns a table of substrings with different time format or false if the seconds argument is out of range. * second is generally 0-59. Extra range to accommodate for leap seconds in certain systems.
 * @see https://wiki.mtasa.com/wiki/GetRealTime
 **/
declare function getRealTime(seconds?: number, localTime?: boolean): RealTime | false;

/**
 * This function retrieves server settings which are usually stored in the mtaserver.conf file.
 * @param name The name of the setting.
 * @returns Returns a string containing the current value for the named setting, or false if the setting does not exist.
 * @see https://wiki.mtasa.com/wiki/GetServerConfigSetting
 **/
declare function getServerConfigSetting(name: string): string | false;

/**
 * This function returns amount of time that your system has been running in milliseconds.
 * By comparing two values of getTickCount, you can determine how much time has passed (in milliseconds) between two events.
 * This could be used to determine how efficient your code is, or to time how long a player takes to complete a task.
 * @returns Returns a number containing of milliseconds since the system the server is running on started. This has the potential to wrap-around.
 * @see https://wiki.mtasa.com/wiki/GetTickCount
 **/
declare function getTickCount(): number;

/**
 * This function is for getting the details of a running timer.
 * @param theTimer A timer element.
 * @returns Returns false if the timer doesn't exist or stopped running. Also, debugscript will say "Bad Argument @ 'getTimerDetails'". To prevent this, you can check if the timer exists with isTimer.
 * @see https://wiki.mtasa.com/wiki/GetTimerDetails
 * @tupleReturn
 **/
declare function getTimerDetails(theTimer: Timer): [number, number, number] | [false];

/**
 * This function returns a table of all active timers that the resource that calls it has created.
 * Alternatively, only the timers with a remaining time less than or equal to a certain value can be retrieved.
 * @param [theTime=undefined] The maximum time left (in milliseconds) on the timers you wish to retrieve.
 * @returns Returns a table of all the active timers.
 * @see https://wiki.mtasa.com/wiki/GetTimers
 **/
declare function getTimers(theTime?: number): Timer[];

/**
 * This function splits a string using the given separating character and returns one specified substring.
 * @param text the string that should be split.
 * @param tokenNumber which token should be returned (1 for the first, 2 for the second, and so on).
 * @param separatingCharacter the ASCII number representing the character you want to use to separate the tokens. You can easily retrieve this by running string.byte on a string containing the separating character.
 * @returns Returns a string containing the token if it exists, false otherwise.
 * @see https://wiki.mtasa.com/wiki/Gettok
 **/
declare function gettok(text: string, tokenNumber: number, separatingCharacter: number | string): string | false;

/**
 * This function gets the type of a userdata value, which is not always a element in the element tree.
 * @param value A userdata value to get the type of.
 * @returns Returns a string containing the specified userdata's type, or false plus an error message if the given value is not userdata.
 * @see https://wiki.mtasa.com/wiki/GetUserdataType
 **/
declare function getUserdataType(value: any): string | false;

/**
 * This function returns a hash of the specified string in the specified algorithm.
 * @param algorithm A string which must be one of these.
 * @param dataToHash A string of the data to hash.
 * @returns Returns the hash of the data, false if an invalid argument was used.
 * @see https://wiki.mtasa.com/wiki/Hash
 **/
declare function hash(algorithm:  "md5" | "sha1" | "sha224" | "sha256" | "sha384" | "sha512", dataToHash: string): string | false;

/**
 * This function returns human-readable representations of tables and MTA datatypes as a string.
 * @param arg A variable of any datatype.
 * @param options A table of options. It is not mandatory, but when it is provided, it must be a table.
 * @returns Always returns a string.
 * @see https://wiki.mtasa.com/wiki/Inspect
 **/
declare function inspect(arg: any, options: any[]): string;

/**
 * Interpolates a 3D Vector between a source value and a target value using either linear interpolation or any other easing function. It can also be used to interpolate 2D vectors or scalars by only setting some of the x, y, z values and putting 0 to the others.
 * @param x1 3D coordinates of source.
 * @param y1 3D coordinates of source.
 * @param z1 3D coordinates of source.
 * @param x2 3D coordinates of target.
 * @param y2 3D coordinates of target.
 * @param z2 3D coordinates of target.
 * @param fProgress float between 0 and 1 indicating the interpolation progress (0 at the beginning of the interpolation, 1 at the end). If it is higher than 1, it will start from the beginning.
 * @param strEasingType the easing function to use for the interpolation.
 * @param fEasingPeriod the period of the easing function (only some easing functions use this parameter).
 * @param fEasingAmplitude the amplitude of the easing function (only some easing functions use this parameter).
 * @param fEasingOvershoot the overshoot of the easing function (only some easing functions use this parameter).
 * @returns Returns x, y, z the interpolated 3D value if successful, false otherwise (error in parameters).
 * @see https://wiki.mtasa.com/wiki/InterpolateBetween
 * @tupleReturn
 **/
declare function interpolateBetween(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, fProgress: number, strEasingType: string, fEasingPeriod?: number, fEasingAmplitude?: number, fEasingOvershoot?: number): [number, number, number] | [false];

/**
 * This function intelligently outputs debug messages into the Debug Console.
 * @param args A variable of any type to print intelligent information for.
 * @returns Always returns undefined.
 * @see https://wiki.mtasa.com/wiki/Iprint
 **/
declare function iprint(...args: any[]): undefined;

/**
 * This function checks whether OOP (Object Oriented Programming) is enabled in the current resource or not.
 * @returns Returns true or false if OOP is enabled or not. Returns undefined if an error arised.
 * @see https://wiki.mtasa.com/wiki/IsOOPEnabled
 **/
declare function isOOPEnabled(): boolean | undefined;

/**
 * This function checks if a variable is a timer.
 * - Note: This function is not reliable as timer ids are eventually recycled.
 * @param theTimer The variable that we want to check.
 * @returns Returns true if the passed value is a timer, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsTimer
 **/
declare function isTimer(theTimer: Timer): boolean;

/**
 * This function allows you to kill/halt existing timers.
 * @param theTimer The timer you wish to halt.
 * @returns Returns true if the timer was successfully killed, false if no such timer existed.
 * @see https://wiki.mtasa.com/wiki/KillTimer
 **/
declare function killTimer(theTimer: Timer): boolean;

/**
 * Calculates the MD5 hash of the specified string and returns its hexadecimal representation.
 * Warning: It is strongly recommended to use passwordHash to hash passwords, md5 is easily decodeable.
 * - Note: It returns an uppercase string, so make sure you string.upper() anything else you are checking against that has been MD5'd elsewhere.
 * @param str the string to hash.
 * @returns Returns the MD5 hash of the input string if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/Md5
 **/
declare function md5(str: string): string | false;

/**
 * This function creates a new password hash using a specified hashing algorithm.
 * - Note: Using passwordHash is the recommended way of storing passwords.
 * Warning: It is strongly recommended to use the async version of the function (i.e. provide a callback function). Otherwise, you will experience short freezes due to the slow nature of the bcrypt algorithm.
 * @param password The password to hash.
 * @param algorithm The algorithm to use.
 * @param options table with options for the hashing algorithm, as detailed below.
 * @param callback providing a callback will run this function asynchronously, the arguments to the callback are the same as the returned values below.
 * @returns Returns the hash as a string if hashing was successful, false otherwise. If a callback was provided, the aforementioned values are arguments to the callback, and this function will always return true.
 * @see https://wiki.mtasa.com/wiki/PasswordHash
 **/
declare function passwordHash(password: string, algorithm: "bcrypt", options: {} | {const: number, salt: string}, callback?: SimpleHandler): string | false;

/**
 * This function verifies whether a password matches a password hash.
 * - Note: Using passwordHash is the recommended way of storing passwords.
 * - Warning: It is strongly recommended to use the async version of the function (i.e. provide a callback function). Otherwise, you will experience short freezes due to the slow nature of the bcrypt algorithm
 * @param password The password to check.
 * @param hash A supported hash (see passwordHash: https://wiki.mtasa.com/wiki/PasswordHash). Note that only the prefix $2y$ is supported for type bcrypt (older prefixes can cause security issues).
 * @param options advanced options.
 * @param callback providing a callback will run this function asynchronously, the arguments to the callback are the same as the returned values below.
 * @returns Returns true if the password matches the hash. Returns false if the password does not match, or if an unknown hash was passed. If a callback was provided, the aforementioned values are arguments to the callback, and this function will always return true.
 * @see https://wiki.mtasa.com/wiki/PasswordVerify
 **/
declare function passwordVerify(password: string, hash: string, options?: {} | {insecureBcrypt: boolean}, callback?: SimpleHandler): boolean;

/**
 * This function stops at the first occurrence of the pattern in the input string and returns the result of the search.
 * - Warning: When declaring a pattern string in quotes, the backslash character should be doubled up. e.g. "\\(" will match a single bracket.
 * - Warning: Multiline flag does not work correctly.
 * @param subject The input string.
 * @param pattern The pattern string to search for in the input string.
 * @param flags Conjuncted value that contains flags (1 - ignorecase, 2 - multiline, 4 - dotall, 8 - extended, 16 - unicode) or (i - Ignore case, m - Multiline, d - Dotall, e - Extended, u - Unicode).
 * @returns Returns true if the pattern was found in the input string, false otherwise.
 * @see https://wiki.mtasa.com/wiki/PregFind
 **/
declare function pregFind(subject: string, pattern: string, flags: number | string): boolean;

/**
 * This function returns all matches.
 * - Warning: When declaring a pattern string in quotes, the backslash character should be doubled up. e.g. "(" will match a single bracket.
 * - Warning: Multiline flag does not work correctly.
 * @param base The base string for replace.
 * @param pattern The pattern for match in base string.
 * @param [flags=0] Conjuncted value that contains flags (1 - ignorecase, 2 - multiline, 4 - dotall, 8 - extended, 16 - unicode) or (i - Ignore case, m - Multiline, d - Dotall, e - Extended, u - Unicode).
 * @param [maxResults=100000] Maximum number of results to return.
 * @returns Returns a object if one or more match is found, false otherwise.
 * @see https://wiki.mtasa.com/wiki/PregMatch
 **/
declare function pregMatch(base: string, pattern: string, flags?: number | string, maxResults?: number): string[] | false;

/**
 * This function performs a regular expression search and replace and returns the replaced string.
 * - Warning: When declaring a pattern string in quotes, the backslash character should be doubled up. e.g. "\\(" will match a single bracket. This also applies to the replacement string.
 * - Warning: Multiline flag does not work correctly.
 * @param subject The input string.
 * @param pattern The pattern string to search for in the input string.
 * @param replacement The replacement string to replace all matches within the input string.
 * @param flags Conjuncted value that contains flags (1 - ignorecase, 2 - multiline, 4 - dotall, 8 - extended, 16 - unicode) or (i - Ignore case, m - Multiline, d - Dotall, e - Extended, u - Unicode).
 * @returns Returns the replaced string, or bool false otherwise.
 * @see https://wiki.mtasa.com/wiki/PregReplace
 **/
declare function pregReplace(subject: string, pattern: string, replacement: string, flags: number | string): string | false;

/**
 * This function removes hooks added by addDebugHook.
 * @param hookType The type of hook to remove. This can be
 * @param callbackFunction The callback function to remove.
 * @returns Returns true if the hook was successfully removed, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/RemoveDebugHook
 **/
declare function removeDebugHook(hookType: "preEvent" | "postEvent" | "preFunction" | "postFunction", callbackFunction: SimpleHandler): boolean;

/**
 * This function allows you to reset the elapsed time in existing timers to zero.
 * The function does not reset the 'times to execute' count on timers which have a limited amout of repetitions.
 * @param theTimer The timer whose elapsed time you wish to reset.
 * @returns Returns true if the timer was successfully reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetTimer
 **/
declare function resetTimer(theTimer: Timer): boolean;

/**
 * This function is used to set the development mode.
 * Setting development mode allows access to special commands which can assist with script debugging.
 * @param enable A boolean to indicate whether development mode is on (true) or off (false).
 * @param [enableWeb=false] A boolean to indicate whether browser debug messages will be filtered (false) or not (true).
 * @returns Returns true if the mode was set correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetDevelopmentMode
 **/
declare function setDevelopmentMode(enable: boolean, enableWeb?: boolean): boolean;

/**
 * This function sets server settings which are stored in the mtaserver.conf file.
 * - Note: This function is protected by default and must be explicitly allowed in the servers acl before it can be used.
 * @param name The name of the setting. Only certain settings from mtaserver.conf can be changed with this function.
 * @param value The value of the setting.
 * @param [bSave=false] Set to true to make the setting permanent, or false for use only until the next server restart.
 * @returns Returns true if the setting was successfully set, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetServerConfigSetting
 **/
declare function setServerConfigSetting(name: string, value: string, bSave?: boolean): boolean;

/**
 * This function allows you to trigger a function after a number of milliseconds have elapsed.
 * You can call one of your own functions or a built-in function.
 * For example, you could set a timer to spawn a player after a number of seconds have elapsed.
 * Once a timer has finished repeating, it no longer exists.
 * The minimum accepted interval is 0ms.
 * Multi Theft Auto guarantees that the timer will be triggered after at least the interval you specify.
 * The resolution of the timer is tied to the frame rate (server side and client-side).
 * All the overdue timers are triggered at a single point each frame.
 * This means that if, for example, the player is running at 30 frames per second, then two timers specified to occur after 100ms and 110ms would more than likely occur during the same frame, as the difference in time between the two timers (10ms) is less than half the length of the frame (33ms).
 * As with most timers provided by other languages, you shouldn't rely on the timer triggering at an exact point in the future.
 * - Important note: The speed at which a client side timer runs can be completely unreliable if a client is maliciously modifying their operating system speed, timers could run much faster or slower.
 * @param theFunction The function you wish the timer to call.
 * @param timeInterval The number of milliseconds that should elapse before the function is called (the minimum is 50 (0 on 1.5.6 r16715) 1000 milliseconds = 1 second).
 * @param timesToExecute The number of times you want the timer to execute, or 0 for infinite repetitions.
 * @param arguments Any arguments you wish to pass to the function can be listed after the timesToExecute argument.Note that any tables you want to pass will get cloned, whereas metatables and functions/function references in that passed table will get lost.Also changes you make in the original table before the function gets called won't get transferred.
 * @returns Returns a timer pointer if the timer was set successfully, false if the arguments are invalid or the timer could not be set.
 * @see https://wiki.mtasa.com/wiki/SetTimer
 **/
declare function setTimer(theFunction: SimpleHandler, timeInterval: number, timesToExecute: number, ...arguments: any[]): Timer | false;

/**
 * Calculates the sha256 hash of the specified string.
 * - Tip: The sha module and this function may conflict with eachother, if you use this function uninstall the module.
 * This function returns an uppercase string, so make sure you string.upper() anything else you are checking against that has been sha256'd elsewhere.
 * @param str the string to hash.
 * @returns Returns the sha256 hash of the input string if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/Sha256
 **/
declare function sha256(str: string): string | false;

/**
 * This function splits a string into substrings.
 * You specify a character that will act as a separating character; this will determine where to split the sub-strings.
 * For example, it can split the string "Hello World" into two strings containing the two words, by spliting using a space as a separator.
 * - Note: You can use the function gettok to retrieve a single token from the string at a specific index.
 * This may be faster for one-off lookups, but considerably slower if you are going to check each token in a long string.
 * @param stringToSplit The string you wish to split into parts.
 * @param separatingChar A string of the character you want to split, or the ASCII number representing the character you want to use to split.
 * @returns Returns a table of substrings split from the original string if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/Split
 **/
declare function split(stringToSplit: string, separatingChar: string | number): string[] | false;

/**
 * This function decrypts given base64 representation of encrypted data using the Tiny Encryption Algorithm.
 * - Important Note: Use decodeString instead, because teaEncode inflates the file size by as high as ~77% (or by ~33% if the input isn't binary converted to base64 string).
 * - Important Note: teaDecode cannot handle binary data.
 * @param data The block of data you want to decrypt.
 * @param key The key that should be used for decryption (only first 16 characters are used).
 * @returns Returns string containing the decrypted data if the decryption process was successfully completed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/TeaDecode
 **/
declare function teaDecode(data: string, key: string): string | false;

/**
 *This functions performs the Tiny Encryption Algorithm on the given string and returns the base64 representation of the encrypted string.
 * - Important Note: Use encodeString instead, because teaEncode inflates the file size by as high as ~77% (or by ~33% if the input isn't binary converted to base64 string).
 * @param text The string you want to encrypt.
 * @param key The key that should be used for encryption (only first 16 characters are used).
 * @returns Returns the base64 representation of the encrypted string if the encryption process was successfully completed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/TeaEncode
 **/
declare function teaEncode(text: string, key: string): string | false;

/**
 * This function retrieves the hex number of a specified color, useful for the dx functions.
 * @param red The amount of red in the color (0-255).
 * @param green The amount of green in the color (0-255).
 * @param blue The amount of blue in the color (0-255).
 * @param [alpha=255] The amount of alpha in the color (0-255).
 * @returns Returns a single value representing the color.
 * @see https://wiki.mtasa.com/wiki/Tocolor
 **/
declare function tocolor(red: number, green: number, blue: number, alpha?: number): number;

/**
 * This function converts a single value (preferably a Lua table) into a JSON encoded string.
 * You can use this to store the data and then load it again using fromJSON.
 * @param arg An argument of any type. Arguments that are elements will be stored as element IDs that are liable to change between sessions. As such, do not save elements across sessions as you will get unpredictable results.
 * @param [compact=false] a boolean representing whether the string will contain whitespaces. To remove whitespaces from JSON string, use true.String will contain whitespaces per default.
 * @param [prettyType="none"] a type string from below.
 * @returns Returns a JSON formatted string.
 * @see https://wiki.mtasa.com/wiki/ToJSON
 **/
declare function toJSON(arg: unknown, compact?: boolean, prettyType?: string): string;

/**
 * The function returns the string of the specified UTF code.
 * @param characterCode The UTF code, to get the string of.
 * @returns Returns a string if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/UtfChar
 **/
declare function utfChar(characterCode: number): string | false;

/**
 * The function returns the UTF codes of the given string.
 * @param theString The string to get the UTF code of.
 * @returns Returns a number if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/UtfCode
 **/
declare function utfCode(theString: string): number | false;

/**
 * The function gets the real length of a string, in characters.
 * @param theString The string to get the length of.
 * @returns Returns a number if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/UtfLen
 **/
declare function utfLen(theString: string): number | false;

/**
 * The function returns the byte position at specified character position.
 * @param theString The string.
 * @param position a number with the specified charachter position.
 * @returns Returns a number if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/UtfSeek
 **/
declare function utfSeek(theString: string, position: number): number | false;

/**
 * The function returns a sub string, from the specified positions on a character.
 * @param theString The string.
 * @param Start a number with the start position.
 * @param End a number with the end position.
 * @returns Returns a string if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/UtfSub
 **/
declare function utfSub(theString: string, Start: number, End: number): string | false;
