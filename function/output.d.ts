/** @noSelfInFile */

/**
 * This function clears the chatbox.
 * It does not clear the console (F8).
 * @param clearFor The player whose chat is to be cleared. By default, this is set to the root element, which will affect all players.
 * @returns Returns true if the player's chat was cleared successfully, false otherwise.Returns true if the player's chat was cleared successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ClearChatBox
 **/
declare function clearChatBox(clearFor?: Player): boolean;

/**
 * This outputs the specified text string to the chatbox.
 * It can be specified as a message to certain player(s) or all players.
 * It can optionally allow you to embed color changes into the string by setting the colorCoded boolean to true.
 * - Note: Avoid outputting text to the chatbox that isn't actually chat, as this can be annoying for players. Output information and status messages to the HUD.
 * @param text The text string that you wish to send to the chat window.If more than 256 characters it will not be showed in chat.
 * @param visibleTo This specifies who the chat is visible to. Any players in this element will see the chat message.
 * @param [r=231] The amount of red in the color of the text.
 * @param [g=217] The amount of green in the color of the text.
 * @param [b=176] The amount of blue in the color of the text.
 * @param [colorCoded=false] A boolean value determining whether or not '#RRGGBB' tags should be used.
 * @returns Returns true if the message was displayed successfully. Returns false if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/OutputChatBox
 **/
declare function outputChatBox(text?: string | number | boolean, visibleTo?: Player, r?: number, g?: number, b?: number, colorCoded?: boolean): boolean;

/**
 * This outputs the specified text string to the console window (accessed with F8 or ~ key).
 * It can be specified as a message to certain player(s) or all players.
 * @param text The text string that you wish to send to the console window.
 * @param visibleTo This specifies who the chat is visible to. Any players in this element will see the chat message.
 * @returns Returns true if the message was displayed successfully. Returns false if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/OutputConsole
 **/
declare function outputConsole(text?: string | number | boolean, visibleTo?: Player): boolean;

/**
 * This function outputs scripting debug messages, which can be read by enabling the debug textbox.
 * The debug display level can then be set so that info or warning messages get filtered out.
 * @param text the text to be output to the debug box.
 * @param [level=3] the debug message level. Possible values are: 0, 1, 2, 3.
 * @param [red=255] The amount of red in the color of the text.
 * @param [green=255] The amount of green in the color of the text.
 * @param [blue=255] The amount of blue in the color of the text.
 * @returns Returns true if the debug message was successfully output, false if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/OutputDebugString
 **/
declare function outputDebugString(text?: string | number | boolean, level?: number, red?: number, green?: number, blue?: number): boolean;

/**
 * This outputs a line of text to the server's log.
 * This could be useful for debugging.
 * @param text The text to be output to the log.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/OutputServerLog
 **/
declare function outputServerLog(text?: string | number | boolean): boolean;

/**
 * This function is used to show or hide the player's chat.
 * @param thePlayer The player whose chat is to be hidden or shown.
 * @param show A boolean value determining whether to show (true) or hide (false) the chat.
 * @returns Returns true if the player's chat was shown or hidden successfully, false otherwise.Returns true if the player's chat was shown or hidden successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ShowChat
 **/
declare function showChat(thePlayer: Player, show: boolean): boolean;
