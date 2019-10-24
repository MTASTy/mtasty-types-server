/**
 * This function is used to save arbitrary data under a certain name on the settings registry.
 * It's important to note that set always writes to the settings.xml file, even if get read the value from a resource's meta.xml.
 * This means that the admin can specify settings in the settings.xml that override the resource's defaults, but that the defaults can still be retrieved if need be. As a general principle, resources should not be designed so that the admin is required to modify them, they should be 'black boxes'.
 * @param settingName The name of the setting you want to set. See setting names for information on settings names: https://wiki.mtasa.com/wiki/Settings_system#Setting_names
 * @param value The value to set the setting to. This can be any data type, except for functions, most userdata (only resources can't be stored) and threads.
 * @returns Returns true if the setting has been set, false if you do not have access to the setting or invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/Set
 **/
declare function set(settingName: string, value: any): boolean;

/**
 * This function gets a setting's value, or a group of settings' values, from the settings registry.
 * - Note: Your settings cannot have a period (.) in them. This character is reserved. Read below for more details.
 * @param settingName The name of the setting you want to get. See setting names for information on settings names: https://wiki.mtasa.com/wiki/Settings_system#Setting_names
 * @returns Returns the value of the setting if a single setting was specified and found, or an array (in associative-array form). It returns false if the specified setting or settings group doesn't exist, or if the settings group you are trying to retrieve doesn't have any public or protected settings.
 * @see https://wiki.mtasa.com/wiki/Get
 **/
declare function get(settingName: string): any;
