/**
 * This function is used to determine whether or not a player's cursor is showing.
 * - Note: This retrieves the cursor state that has been set using showCursor, and thus doesn't take into account the cursor shown while the chatbox, menu or console are open. Also, keep in mind that while the client is aware of cursor states set from the server, the server doesn't know about cursor states set from the client.
 * @param thePlayer The player you want to get cursor state of.
 * @returns Returns true if the player's cursor is showing, false if it isn't or if invalid parameters were passed. Returns true if the player's cursor is showing, false if it isn't.
 * @see https://wiki.mtasa.com/wiki/IsCursorShowing
 **/
declare function isCursorShowing(thePlayer: Player): boolean;

/**
 * This function is used to show or hide a player's cursor.
 * - Note: Regardless of the cursor state you set using this function, the cursor will always be visible while the menu, the chatbox input line or the console are active, or if another resource has called this function.
 * @param thePlayer The player you want to show or hide the cursor of.
 * @param show A boolean value determining whether to show (true) or hide (false) the cursor.
 * @param [toggleControls=true] A boolean value determining whether to disable controls whilst the cursor is showing.true implies controls are disabled, false implies controls remain enabled.
 * @returns Returns true if the player's cursor was shown or hidden successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ShowCursor
 **/
declare function showCursor(thePlayer: Player, show: boolean, toggleControls?: boolean): boolean;
