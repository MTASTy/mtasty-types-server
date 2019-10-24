/**
 * This function gets the original weapon property of the specified weapons specified weapon type.
 * @param weaponID The ID of the weapon you want to get info of.
 * @param weaponSkill Either: "pro", "std" or "poor".
 * @param property The property you want to get.
 * @returns Returns number the weapon property or false if the passed arguments were invalid.
 * @see https://wiki.mtasa.com/wiki/GetOriginalWeaponProperty
 **/
declare function getOriginalWeaponProperty(weaponID: number, weaponSkill: "pro" | "std" | "poor", property: string): number | false;

/**
 * This function gets the original weapon property of the specified weapons specified weapon type.
 * @param weaponName Name of the weapon you want to get info of.
 * @param weaponSkill Either: "pro", "std" or "poor".
 * @param property The property you want to get.
 * @returns Returns number the weapon property or false if the passed arguments were invalid.
 * @see https://wiki.mtasa.com/wiki/GetOriginalWeaponProperty
 **/
declare function getOriginalWeaponProperty(weaponName: string, weaponSkill: "pro" | "std" | "poor", property: string): number | false;

/**
 * This function allows you to identify the weapon slot that a weapon belongs to.
 * @param weaponID Weapon id to find the weapon slot of.
 * @returns Returns a number representing the given weapon ID's associated weapon slot, false if the ID was invalid.
 * @see https://wiki.mtasa.com/wiki/GetSlotFromWeapon
 **/
declare function getSlotFromWeapon(weaponID: number): number | false;

/**
 * This function will obtain the ID of a particular weapon from its name.
 * @param name A string containing the name of the weapon.
 * @returns Returns a number if the name matches that of a weapon, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetWeaponIDFromName
 **/
declare function getWeaponIDFromName(name: string): number | false;

/**
 * This function allows you to retrieve the name of a weapon from an ID.
 * - Note: You can also retrieve the name of other methods of death, such as Fall and Rammed.
 * @param id The ID you wish to retrieve the name of.
 * @returns Returns a string of the name of the weapon, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetWeaponNameFromID
 **/
declare function getWeaponNameFromID(id: number): string | false;

/**
 * This function gets a weapon property of the specified custom weapon (clientside only) or specified player-held weapon (both client and server).
 * @param weaponID The ID of the weapon you want to get info of.
 * @param weaponSkill Either: "pro", "std" or "poor".
 * @param property The property you want to get.
 * @returns Returns number the weapon property or false if the passed arguments were invalid.
 * @see https://wiki.mtasa.com/wiki/GetWeaponProperty
 **/
declare function getWeaponProperty(weaponID: number, weaponSkill: "pro" | "std" | "poor", property: string): number | false;

/**
 * This function gets a weapon property of the specified custom weapon (clientside only) or specified player-held weapon (both client and server).
 * @param weaponName Name of the weapon you want to get info of.
 * @param weaponSkill Either: "pro", "std" or "poor".
 * @param property The property you want to get.
 * @returns Returns number the weapon property or false if the passed arguments were invalid.
 * @see https://wiki.mtasa.com/wiki/GetWeaponProperty
 **/
declare function getWeaponProperty(weaponName: string, weaponSkill: "pro" | "std" | "poor", property: string): number | false;

/**
 * giveWeapon gives a specified weapon to a certain player or ped.
 * There is an optional argument to specify ammunition.
 * For example, a melee weapon doesn't need an ammo argument.
 * - Note: When setting ammo for weapons in slot 0,1,10,11 or 12, the ammo max is 1. When setting ammo for weapons in slot 3,4,5, the ammo is added. When setting ammo for weapons in slot 2,6,7,8,9 and the slot weapon is changing, the ammo is replaced.
 * @param thePlayer A player or ped element referencing the specified player (or ped).
 * @param weapon A whole number that refers to a Weapon ID. Click here for a list of possible weapon IDs.
 * @param [ammo=30] A whole number serving as the ammo amount for the given weapon. For weapons that do not require ammo, such as melee, this should be at least 1.
 * @param [setAsCurrent=false] A boolean value determining whether or not the weapon will be set as the players current.
 * @returns Returns true if weapon was successfully acquired, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GiveWeapon
 **/
declare function giveWeapon(thePlayer: Ped, weapon: number, ammo?: number, setAsCurrent?: boolean): boolean;

/**
 * Sets the ammo to a certain amount for a specified weapon (if they already have it), regardless of current ammo.
 * @param thePlayer A player element referencing the specified player.
 * @param theWeapon A whole number that refers to a weapon ID.
 * @param totalAmmo A whole number serving as the total ammo amount for the given weapon (including ammo in clip).
 * @param [ammoInClip=0] The amount of ammo to set in the player's clip. This will be taken from the main ammo. If left unspecified or set to 0, the current clip will remain.
 * @returns Returns a boolean value true or false that tells you if it was successful or not.
 * @see https://wiki.mtasa.com/wiki/SetWeaponAmmo
 **/
declare function setWeaponAmmo(thePlayer: Player, theWeapon: number, totalAmmo: number, ammoInClip?: number): boolean;

/**
 * This function sets the weapon property of the specified weapons specified weapon type. See lower down the page for documentation related to weapon creation.
 * @param weaponID The ID of the weapon you want to set a property of.
 * @param weaponSkill Either: "pro", "std" or "poor". The player must have this skill level set to have the effect.
 * @param property The property you want to set.
 * @param theValue The value to set the property to.
 * @returns Returns true if the weapon property was successfully set. Returns false if the weapon property was unable to be set.
 * @see https://wiki.mtasa.com/wiki/SetWeaponProperty
 **/
declare function setWeaponProperty(weaponID: number, weaponSkill: "pro" | "std" | "poor", property: string, theValue: number): boolean;

/**
 * This function sets the weapon property of the specified weapons specified weapon type. See lower down the page for documentation related to weapon creation.
 * @param weaponName The name of the weapon you want to set a property of.
 * @param weaponSkill Either: "pro", "std" or "poor". The player must have this skill level set to have the effect.
 * @param property The property you want to set.
 * @param theValue The value to set the property to.
 * @returns Returns true if the weapon property was successfully set. Returns false if the weapon property was unable to be set.
 * @see https://wiki.mtasa.com/wiki/SetWeaponProperty
 **/
declare function setWeaponProperty(weaponName: string, weaponSkill: "pro" | "std" | "poor", property: string, theValue: number): boolean;

/**
 * This function removes evegetFPSLimitry weapons from a specified ped, rendering it unarmed.
 * - Note: Weapons are removed when a ped dies by default. This means that it is only appropriate to use this function while a ped is alive.
 * @param thePed A ped element referencing the specified ped.
 * @returns Returns true if the function succeeded, false otherwise.
 * @see https://wiki.mtasa.com/wiki/TakeAllWeapons
 **/
declare function takeAllWeapons(thePed: Ped): boolean;

/**
 * This function removes a specified weapon or ammo from a certain player's inventory.
 * @param thePlayer A player element referencing the specified player.
 * @param weaponId A number that refers to a weapon that you wish to remove.
 * @param ammo If used, this amount of ammo will be taken instead and the weapon will not be removed.
 * @returns Returns a true if the weapon/ammo was removed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/TakeWeapon
 **/
declare function takeWeapon(thePlayer: Player, weaponId: number, ammo?: number): boolean;
