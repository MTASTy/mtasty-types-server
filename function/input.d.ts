/** @noSelfInFile */

declare type CommandHandler = (thePlayer: Player, commandName: string, ...args: any[]) => void;
declare type BindHandler = (thePlayer: Player, key: string, keyState: string, ...args: any[]) => void;
declare type SimpleHandler = () => void;

/**
 * This function will attach a scripting function (handler) to a console command, so that whenever a player or administrator uses the command the function is called.
 * Multiple command handlers can be attached to a single command, and they will be called in the order that the handlers were attached.
 * Equally, multiple commands can be handled by a single function, and the commandName parameter used to decide the course of action.
 * For users, a command is in the format: commandName argument1 argument2
 * This can be triggered from the player's console or directly from the chat box by prefixing the message with a forward slash (/). For server side handlers, the server admin is also able to trigger these directly from the server's console in the same way as they are triggered from a player's console.
 * - Important note: Do NOT use the same name for your handler function as the command name, as this can lead to confusion if multiple handler functions are used. Use a name that describes your handler's purpose more specifically.
 * - Note: You cannot use "check", "list" or "test" as a command name.
 * @param commandName This is the name of the command you wish to attach a handler to. This is what must be typed into the console to trigger the function.
 * @param handlerFunction This is the function that you want the command to trigger, which has to be defined before you add the handler. This function can take two parameters, playerSource and commandName, followed by as many parameters as you expect after your command (see below). These are all optional.
 * @param [restricted=false] Specify whether or not this command should be restricted by default. Use this on commands that should be inaccessible to everyone as default except special users specified in the ACL (Access Control List). This is to make sure admin commands such as ie. 'punish' won't be available to everyone if a server administrator forgets masking it in ACL. Make sure to add the command to your ACL under the proper group for it to be usefull (i.e <right name="command.killEveryone" access="true"></right>).
 * @param [caseSensitive=true] Specifies if the command handler will ignore the case for this command name.
 * @returns Returns true if the command handler was added successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AddCommandHandler
 **/
declare function addCommandHandler(commandName: string, handlerFunction: CommandHandler, restricted?: boolean, caseSensitive?: boolean): boolean;

/**
 * Binds a player's key to a handler function or command, which will be called when the key is pressed.
 * @param thePlayer The player you wish to bind the key of.
 * @param key The key or control you wish to bind to the command. See key names for a list of possible keys: https://wiki.mtasa.com/wiki/Key_names and control names for a list of possible controls: https://wiki.mtasa.com/wiki/Control_names.
 * @param keyState A string that has one of the following values: "up", "down" or "both".
 * @param handlerFunction The function that will be triggered when the player's key is pressed.
 * @param args Any arguments you may want to pass to the function when the key is pressed by the user.Any number of arguments of can be specified, each being passed to the designated function.You may not pass functions.
 * @returns Returns true if the key was bound, false otherwise.
 * @see https://wiki.mtasa.com/wiki/BindKey
 **/
declare function bindKey(thePlayer: Player, key: string, keyState: "up" | "down" | "both", handlerFunction: BindHandler, ...args: any[]): boolean;

/**
 * Binds a player's key to a handler function or command, which will be called when the key is pressed.
 * @param thePlayer The player you wish to bind the key of.
 * @param key The key or control you wish to bind to the command. See key names for a list of possible keys: https://wiki.mtasa.com/wiki/Key_names and control names for a list of possible controls: https://wiki.mtasa.com/wiki/Control_names.
 * @param keyState A string that has one of the following values: "up", "down" or "both".
 * @param commandName The name of the command that the key should be binded to.
 * @param args Any arguments you may want to pass to the function when the key is pressed by the user.Any number of arguments of can be specified, each being passed to the designated function.You may not pass functions.
 * @returns Returns true if the key was bound, false otherwise.
 * @see https://wiki.mtasa.com/wiki/BindKey
 **/
declare function bindKey(thePlayer: Player, key: string, keyState: "up" | "down" | "both", commandName: string, ...args: any[]): boolean;

/**
 * This function will call all the attached functions of an existing console command, for a specified player.
 * - Note: You can only execute commands created with addCommandHandler. You cannot execute MTA harcoded commands due to security reasons.
 * - Note: Serverside commands can only be executed by the server. The same applies to the client side.
 * @param commandName The name of the command you wish to execute. This is what must be typed into the console to trigger the function.
 * @param thePlayer The player that will be presented as executer of the command to the handler function(s) of the command.
 * @param args Additional parameters that will be passed to the handler function(s) of the command that is called, separated by spaces.
 * @returns Returns true if the command handler was called successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ExecuteCommandHandler
 **/
declare function executeCommandHandler(commandName: string, thePlayer: Player, ...args: any[]): boolean;

/**
 * This function is used to retrieve a list of all the registered command handlers of a given resource (or of all resources).
 * @param theResource The resource from which you wish to retrieve all command handlers.Or leave it empty to retrieve command handlers of all resources.
 * @returns Returns an object containing all the commands of the given resource or an array with subobjects containing the command and theResource pointer ( { "command", theResource } ).
 * @see https://wiki.mtasa.com/wiki/GetCommandHandlers
 **/
declare function getCommandHandlers(theResource: Resource): {[key: number]: {[key: number]: {command: string, theResource: Resource}}};

/**
 * This function will check if a player is pressing a particular control.
 * Controls are those that affect GTA.
 * If you wish to get the state of another key, use bindKey and a command function.
 * - Note: Not all control states are sent to the server at all times, as such their state may be given incorrectly.
 * As a rule, keys that move or affect the player or their vehicle are most likely to be accurate.
 * For increased accuracy (and also increased bandwidth usage) use bindKey instead to bind a GTA control name to a function.
 * @param thePlayer The player you wish to get the control state of. Do not use this parameter when scripting for client.
 * @param controlName The control that you want to get the state of. See control names for a list of possible controls.
 * @returns Returns the state of the control, false if the control doesn't exist or if the player is dead.
 * @see https://wiki.mtasa.com/wiki/GetControlState
 **/
declare function getControlState(thePlayer: Player, controlName: string): boolean;

/**
 * Gets the functions bound to a key.
 * To bind a function to a key use the bindKey function
 * @param thePlayer The player to get the functions from a key.
 * @param key The key you wish to check the functions from.
 * @param keyState A string that has one of the following values
 * @returns Returns an object of the key function(s).
 * @see https://wiki.mtasa.com/wiki/GetFunctionsBoundToKey
 **/
declare function getFunctionsBoundToKey(thePlayer: Player, key: string, keyState: "up" | "down" | "both"): {[key: number]: SimpleHandler};

/**
 * getKeyBoundToFunction allows retrieval of the first key bound to a function.
 * @param thePlayer The player you are checking the function bound to a key
 * @param theFunction The function in which you would like to check the bound key
 * @returns Returns a string of the first key the function was bound to. Returns a string of the first key the function was bound to.
 * @see https://wiki.mtasa.com/wiki/GetKeyBoundToFunction
 **/
declare function getKeyBoundToFunction(thePlayer: Player, theFunction: SimpleHandler): string;

/**
 * Checks whether a GTA control is enabled or disabled for a certain player.
 * @param thePlayer The player you wish the control status of.
 * @param control The control you wish to check. See control names for a list of possible controls.
 * @returns Returns true if control is enabled, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsControlEnabled
 **/
declare function isControlEnabled(thePlayer: Player, control: string): boolean;

/**
 * This function can be used to find out if a key has already been bound.
 * If you do not specify a keyState or handler, any instances of key being bound will cause isKeyBound to return true.
 * @param thePlayer The player you're checking.
 * @param key The key you're checking. See Key names for a list of valid key names.
 * @param keyState Is the state of the key when it calls the function, Can be either
 * @param handler The function you're checking against
 * @returns Returns true if the key is bound, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsKeyBound
 **/
declare function isKeyBound(thePlayer: Player, key: string, keyState?: "up" | "down", handler?: SimpleHandler): boolean;

/**
 * This function removes a command handler, that is one that has been added using addCommandHandler.
 * This function can only remove command handlers that were added by the resource that it is called in.
 * @param commandName the name of the command you wish to remove.
 * @param handler the specific handler function to remove.If not specified, all handler functions for the command (from the calling resource) will be removed.
 * @returns Returns true if the command handler was removed successfully, false if the command doesn't exist.
 * @see https://wiki.mtasa.com/wiki/RemoveCommandHandler
 **/
declare function removeCommandHandler(commandName: string, handler?: SimpleHandler): boolean;

/**
 * Sets a state of a specified player's control, as if they pressed or released it.
 * @param thePlayer The player you wish to set the control state of.
 * @param control The control that you want to set the state of. See control names for a list of possible controls.
 * @param state A boolean value representing whether or not the key will be set to pressed or not.
 * @returns Returns true if the control state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetControlState
 **/
declare function setControlState(thePlayer: Player, control: string, state: boolean): boolean;

/**
 * Enables or disables the use of all GTA controls for a specified player.
 * @param thePlayer The player you wish to toggle the control ability of.
 * @param enabled A boolean value representing whether or not the controls will be usable.
 * @param [gtaControls=true] A boolean deciding whether the enabled parameter will affect GTA's internal controls.
 * @param [mtaControls=true] A boolean deciding whether the enabled parameter will affect MTA's own controls., e.g. chatbox.
 * @returns This function returns true if controls were toggled successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ToggleAllControls
 **/
declare function toggleAllControls(thePlayer: Player, enabled: boolean, gtaControls?: boolean, mtaControls?: boolean): boolean;

/**
 * Enables or disables the use of a GTA control for a specific player.
 * @param thePlayer The player you wish to toggle the control ability of.
 * @param control The control that you want to toggle the ability of. See control names for a list of possible controls.
 * @param enabled A boolean value representing whether or not the key will be usable or not.
 * @returns This function true if the control was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ToggleControl
 **/
declare function toggleControl(thePlayer: Player, control: string, enabled: boolean): boolean;

/**
 * Removes an existing key bind from the specified player.
 * - Note: unbindKey will only work on binds that were added by the same resource
 * - Note: unbindKey on the server may return true on failure
 * @param thePlayer The player you wish to unbind the key of.
 * @param key The key you wish to unbind. See Key names for a list of valid key names.
 * @param keyState Can be either: "up", "down", "both".
 * @param handler The function you wish to unbind.
 * @returns Returns 'true if the key was unbound, false if it was not previously bound or invalid arguments were passed to the function.Returns 'true if the key was unbound, false if it was not previously bound or invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/UnbindKey
 **/
declare function unbindKey(thePlayer: Player, key: string, keyState?: "up" | "down" | "both", handler?: BindHandler): boolean;

/**
 * Removes an existing key bind from the specified player.
 * - Note: unbindKey will only work on binds that were added by the same resource
 * - Note: unbindKey on the server may return true on failure
 * @param thePlayer The player you wish to unbind the key of.
 * @param key The key you wish to unbind. See Key names for a list of valid key names.
 * @param keyState Can be either: "up", "down", "both".
 * @param commandName The command you wish to unbind.
 * @returns Returns 'true if the key was unbound, false if it was not previously bound or invalid arguments were passed to the function.Returns 'true if the key was unbound, false if it was not previously bound or invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/UnbindKey
 **/
declare function unbindKey(thePlayer: Player, key: string, keyState: "up" | "down" | "both", commandName: string): boolean;
