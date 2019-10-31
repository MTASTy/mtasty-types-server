declare class Pickup extends BaseElement {
  readonly ammo: number; // 0 if it's no weapon pickup
  readonly amount: number; // 0 if it's no health or amor pickup
  readonly spawned: boolean;
  readonly weapon: number;
  // TODO: class Element already contain variable "type"
  // type: number;
  respawnInterval: number;

  /**
   * This function creates a pickup element, which is placed in the GTA world and can be picked up to retrieve a health, armour or a weapon.
   * @param x A number representing the X coordinate on the map.
   * @param y A number representing the Y coordinate on the map.
   * @param z A number representing the Z coordinate on the map.
   * @param theType Type of pickup, representing the following types: 0 (Health Pickup), 1 (Armour Pickup), 2 (Weapon Pickup), 3 (Custom Pickup).
   * @param weaponid If the type is a Weapon pickup, then it represents the weapon ID of the weapon pickup. When used with the weapon pickup type set, the ammo parameter can be used.
   * @param [respawnTime=30000] How long before the pickup respawns in milliseconds.
   * @param [ammo=50] An integer representing the amount of ammo a pickup contains.
   * @see https://wiki.mtasa.com/wiki/CreatePickup
   **/
  constructor(x: number, y: number, z: number, theType: 2, weaponid: number, respawnTime?: number, ammo?: number);

  /**
   * This function creates a pickup element, which is placed in the GTA world and can be picked up to retrieve a health, armour or a weapon.
   * @param x A number representing the X coordinate on the map.
   * @param y A number representing the Y coordinate on the map.
   * @param z A number representing the Z coordinate on the map.
   * @param theType Type of pickup, representing the following types: 0 (Health Pickup), 1 (Armour Pickup), 2 (Weapon Pickup), 3 (Custom Pickup).
   * @param amount This is an integer representing the amount of Health points or Armour points a pickup has.
   * @param [respawnTime=30000] How long before the pickup respawns in milliseconds.
   * @see https://wiki.mtasa.com/wiki/CreatePickup
   **/
  constructor(x: number, y: number, z: number, theType: 0 | 1, amount: number, respawnTime?: number);

  /**
   * This function creates a pickup element, which is placed in the GTA world and can be picked up to retrieve a health, armour or a weapon.
   * @param x A number representing the X coordinate on the map.
   * @param y A number representing the Y coordinate on the map.
   * @param z A number representing the Z coordinate on the map.
   * @param theType Type of pickup, representing the following types: 0 (Health Pickup), 1 (Armour Pickup), 2 (Weapon Pickup), 3 (Custom Pickup).
   * @param modelid If the pickup is a custom model, this is the model id to use. Many non-pickup models can be used, though some may cause crashes.
   * @param [respawnTime=30000] How long before the pickup respawns in milliseconds.
   * @see https://wiki.mtasa.com/wiki/CreatePickup
   **/
  constructor(x: number, y: number, z: number, theType: 3, modelid: number, respawnTime?: number);

  /**
   * This function is used to simulate the player using a pickup.
   * @param thePlayer The player to use the pickup.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/UsePickup
   **/
  use(thePlayer: Player): boolean;

  /**
   * This function retrieves the amount of ammo in a weapon pickup.
   * @returns Returns an integer of the amount of ammo in the pickup, 0 if it's no weapon pickup.
   * @see https://wiki.mtasa.com/wiki/GetPickupAmmo
   **/
  getAmmo(): number;

  /**
   * This function retrieves the amount of health or armor given from a pickup.
   * @returns Returns an integer of the amount the pickup is set to, 0 if it's no health or amor pickup.
   * @see https://wiki.mtasa.com/wiki/GetPickupAmount
   **/
  getAmount(): number;

  /**
   * This function retrieves the weapon ID of a weapon pickup.
   * @returns Returns the Weapon ID of the pickup.
   * @see https://wiki.mtasa.com/wiki/GetPickupWeapon
   **/
  getWeapon(): number;

  /**
   * Returns the time it takes before a pickup respawns after a player picked it up. The time is specified in milliseconds.
   * @returns Returns the respawn time of the pickup.
   * @see https://wiki.mtasa.com/wiki/GetPickupRespawnInterval
   **/
  getRespawnInterval(): number;

  /**
   * This function retrieves the type of a pickup, either a health, armour or weapon pickup.
   * @returns Returns an integer of the type of the pickup.
   * @see https://wiki.mtasa.com/wiki/GetPickupType
   **/
  // TODO: class Element already contain method "getType"
  // getType(): number;

  /**
   * This function allows changing the type of a pickup to a Weapon, Armour or Health pickup, and allows you to set the health points or the weapon and ammo that the pickup will give.
   * @param theType An integer representing the type of pickup. You can choose from: 0 (Health Pickup), 1 (Armour Pickup), 2 (Weapon Pickup), 3 (Custom Pickup).
   * @param weapon If the type is a Weapon pickup, then it represents the weapon ID of the weapon pickup the 'ammo' field must be entered if the type is Weapon Pickup.
   * @param [ammo=50] An integer representing the amount of ammo a pickup contains.This argument is only valid when the pickup type is a Weapon Pickup, and must be specified in that case.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPickupType
   **/
  setType(theType: 2, weapon: number, ammo?: number): boolean;

  /**
   * This function allows changing the type of a pickup to a Weapon, Armour or Health pickup, and allows you to set the health points or the weapon and ammo that the pickup will give.
   * @param theType An integer representing the type of pickup. You can choose from: 0 (Health Pickup), 1 (Armour Pickup), 2 (Weapon Pickup), 3 (Custom Pickup).
   * @param amount This is an integer representing the amount of Health points or Armour points a pickup has.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPickupType
   **/
  setType(theType: 0 | 1, amount: number): boolean;

  /**
   * This function allows changing the type of a pickup to a Weapon, Armour or Health pickup, and allows you to set the health points or the weapon and ammo that the pickup will give.
   * @param theType An integer representing the type of pickup. You can choose from: 0 (Health Pickup), 1 (Armour Pickup), 2 (Weapon Pickup), 3 (Custom Pickup).
   * @param modelid If the pickup is a custom model, this is the model id to use. Many non-pickup models can be used, though some may cause crashes.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPickupType
   **/
  setType(theType: 3, modelid: number): boolean;

  /**
   * Sets the time it takes for a pickup to respawn after a player picked it up.
   * @param ms the new respawn time in ms.
   * @returns Returns true if the new respawn time was set successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPickupRespawnInterval
   **/
  setRespawnInterval(ms: number): boolean;
}
