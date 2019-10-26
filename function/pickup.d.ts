/** @noSelfInFile */

/**
 * This function creates a pickup element, which is placed in the GTA world and can be picked up to retrieve a health, armour or a weapon.
 * @param x A number representing the X coordinate on the map.
 * @param y A number representing the Y coordinate on the map.
 * @param z A number representing the Z coordinate on the map.
 * @param theType Type of pickup, representing the following types: 0 (Health Pickup), 1 (Armour Pickup), 2 (Weapon Pickup), 3 (Custom Pickup).
 * @param weaponid If the type is a Weapon pickup, then it represents the weapon ID of the weapon pickup. When used with the weapon pickup type set, the ammo parameter can be used.
 * @param [respawnTime=30000] How long before the pickup respawns in milliseconds.
 * @param [ammo=50] An integer representing the amount of ammo a pickup contains.
 * @returns Returns pickup element if the pickup was created succesfully, otherwise returns false.
 * @see https://wiki.mtasa.com/wiki/CreatePickup
 **/
declare function createPickup(x: number, y: number, z: number, theType: 2, weaponid: number, respawnTime?: number, ammo?: number): Pickup | false;

/**
 * This function creates a pickup element, which is placed in the GTA world and can be picked up to retrieve a health, armour or a weapon.
 * @param x A number representing the X coordinate on the map.
 * @param y A number representing the Y coordinate on the map.
 * @param z A number representing the Z coordinate on the map.
 * @param theType Type of pickup, representing the following types: 0 (Health Pickup), 1 (Armour Pickup), 2 (Weapon Pickup), 3 (Custom Pickup).
 * @param amount This is an integer representing the amount of Health points or Armour points a pickup has.
 * @param [respawnTime=30000] How long before the pickup respawns in milliseconds.
 * @returns Returns pickup element if the pickup was created succesfully, otherwise returns false.
 * @see https://wiki.mtasa.com/wiki/CreatePickup
 **/
declare function createPickup(x: number, y: number, z: number, theType: 0 | 1, amount: number, respawnTime?: number): Pickup | false;

/**
 * This function creates a pickup element, which is placed in the GTA world and can be picked up to retrieve a health, armour or a weapon.
 * @param x A number representing the X coordinate on the map.
 * @param y A number representing the Y coordinate on the map.
 * @param z A number representing the Z coordinate on the map.
 * @param theType Type of pickup, representing the following types: 0 (Health Pickup), 1 (Armour Pickup), 2 (Weapon Pickup), 3 (Custom Pickup).
 * @param modelid If the pickup is a custom model, this is the model id to use. Many non-pickup models can be used, though some may cause crashes.
 * @param [respawnTime=30000] How long before the pickup respawns in milliseconds.
 * @returns Returns pickup element if the pickup was created succesfully, otherwise returns false.
 * @see https://wiki.mtasa.com/wiki/CreatePickup
 **/
declare function createPickup(x: number, y: number, z: number, theType: 3, modelid: number, respawnTime?: number): Pickup | false;

/**
 * This function retrieves the amount of ammo in a weapon pickup.
 * @param thePickup The pickup in which you wish to retrieve the ammo of.
 * @returns Returns an integer of the amount of ammo in the pickup, false if the pickup element is invalid, 0 if it's no weapon pickup.
 * @see https://wiki.mtasa.com/wiki/GetPickupAmmo
 **/
declare function getPickupAmmo(thePickup: Pickup): number | false;

/**
 * This function retrieves the amount of health or armor given from a pickup.
 * @param thePickup The pickup you wish to retrieve the amount from.
 * @returns Returns an integer of the amount the pickup is set to, false if it's invalid, 0 if it's no health or amor pickup.
 * @see https://wiki.mtasa.com/wiki/GetPickupAmount
 **/
declare function getPickupAmount(thePickup: Pickup): number | false;

/**
 * Returns the time it takes before a pickup respawns after a player picked it up. The time is specified in milliseconds.
 * @param thePickup the pickup you want the respawn time of.
 * @returns Returns the respawn time of the pickup if successful, false in case of failure.
 * @see https://wiki.mtasa.com/wiki/GetPickupRespawnInterval
 **/
declare function getPickupRespawnInterval(thePickup: Pickup): number | false;

/**
 * This function retrieves the type of a pickup, either a health, armour or weapon pickup.
 * @param thePickup The pickup you wish to retrieve the type of.
 * @returns Returns false if the pickup is invalid, or an integer of the type of the pickup.
 * @see https://wiki.mtasa.com/wiki/GetPickupType
 **/
declare function getPickupType(thePickup: Pickup): number | false;

/**
 * This function retrieves the weapon ID of a weapon pickup.
 * @param thePickup The pickup of which you wish to retrieve the weapon.
 * @returns Returns the Weapon ID of the pickup, or false if the pickup is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPickupWeapon
 **/
declare function getPickupWeapon(thePickup: Pickup): number | false;

/**
 * This function checks if a pickup is currently spawned (is visible and can be picked up) or not (a player picked it up recently).
 * @param thePickup the pickup you want to check.
 * @returns Returns true if the pickup is spawned, false if it's not spawned or an invalid pickup was specified.
 * @see https://wiki.mtasa.com/wiki/IsPickupSpawned
 **/
declare function isPickupSpawned(thePickup: Pickup): boolean;

/**
 * Sets the time it takes for a pickup to respawn after a player picked it up.
 * @param thePickup the pickup to set the respawn time of.
 * @param ms the new respawn time in ms.
 * @returns Returns true if the new respawn time was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPickupRespawnInterval
 **/
declare function setPickupRespawnInterval(thePickup: Pickup, ms: number): boolean;

/**
 * This function allows changing the type of a pickup to a Weapon, Armour or Health pickup, and allows you to set the health points or the weapon and ammo that the pickup will give.
 * @param thePickup The pickup which you wish to change the settings of.
 * @param theType An integer representing the type of pickup. You can choose from: 0 (Health Pickup), 1 (Armour Pickup), 2 (Weapon Pickup), 3 (Custom Pickup).
 * @param weapon If the type is a Weapon pickup, then it represents the weapon ID of the weapon pickup the 'ammo' field must be entered if the type is Weapon Pickup.
 * @param [ammo=50] An integer representing the amount of ammo a pickup contains.This argument is only valid when the pickup type is a Weapon Pickup, and must be specified in that case.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPickupType
 **/
declare function setPickupType(thePickup: Pickup, theType: 2, weapon: number, ammo?: number): boolean;

/**
 * This function allows changing the type of a pickup to a Weapon, Armour or Health pickup, and allows you to set the health points or the weapon and ammo that the pickup will give.
 * @param thePickup The pickup which you wish to change the settings of.
 * @param theType An integer representing the type of pickup. You can choose from: 0 (Health Pickup), 1 (Armour Pickup), 2 (Weapon Pickup), 3 (Custom Pickup).
 * @param amount This is an integer representing the amount of Health points or Armour points a pickup has.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPickupType
 **/
declare function setPickupType(thePickup: Pickup, theType: 0 | 1, amount: number): boolean;

/**
 * This function allows changing the type of a pickup to a Weapon, Armour or Health pickup, and allows you to set the health points or the weapon and ammo that the pickup will give.
 * @param thePickup The pickup which you wish to change the settings of.
 * @param theType An integer representing the type of pickup. You can choose from: 0 (Health Pickup), 1 (Armour Pickup), 2 (Weapon Pickup), 3 (Custom Pickup).
 * @param modelid If the pickup is a custom model, this is the model id to use. Many non-pickup models can be used, though some may cause crashes.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPickupType
 **/
declare function setPickupType(thePickup: Pickup, theType: 3, modelid: number): boolean;

/**
 * This function is used to simulate the player using a pickup.
 * @param thePickup The pickup element to be picked up/used.
 * @param thePlayer The player to use the pickup.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/UsePickup
 **/
declare function usePickup(thePickup: Pickup, thePlayer: Player): boolean;
