declare class Ped extends AbstractElement {
  readonly inVehicle: boolean;
  readonly ducked: boolean;
  readonly inWater: boolean;
  readonly onGround: boolean;
  onFire: boolean;
  choking: boolean;
  doingGangDriveby: boolean;
  frozen: boolean;
  headless: boolean;
  armor: number;
  fightingStyle: number;
  gravity: number;
  weaponSlot: number;
  readonly target: Player | Ped | Vehicle | MapObject | false;
  readonly vehicleSeat: number | false;
  readonly contactElement: Vehicle | MapObject | false;
  vehicle: Vehicle | false;
  dead: boolean;
  walkingStyle: number;
  jetpack: boolean;

  // static getValidModels(): number[];

  /**
   * Creates a Ped in the GTA world.
   * @param modelid A whole integer specifying the GTASA skin ID.
   * @param x A number representing the X coordinate on the map.
   * @param y A number representing the Y coordinate on the map.
   * @param z A number representing the Z coordinate on the map.
   * @param [rot=0] A number representing the rotation in degrees.
   * @param [synced=true] A boolean value representing whether or not the ped will be synced. Disabling the sync might be useful for frozen or static peds to increase the server performance.
   * @see https://wiki.mtasa.com/wiki/CreatePed
   **/
  constructor(modelid: number, x: number, y: number, z: number, rot?: number, synced?: boolean);

  /**
   * This function kills the specified ped.
   * Only works on client side peds.
   * @param [theKiller=undefined] The ped responsible for the kill.
   * @param [weapon=255] The ID of the weapon or Damage Types that should appear to have killed the ped (doesn't affect how they die).
   * @param [bodyPart=255] The ID of the body part that should appear to have been hit by the weapon (doesn't affect how they die).
   * @param [stealth=false] Boolean value, representing whether or not this a stealth kill.
   * @returns Returns true if the ped was killed, false if the ped specified could not be killed or is invalid.
   * @see https://wiki.mtasa.com/wiki/KillPed
   **/
  kill(theKiller?: Ped, weapon?: number, bodyPart?: number, stealth?: boolean): boolean;

  /**
   * This function is used to warp or force a ped into a vehicle.
   * There are no animations involved when this happens.
   * Attention: If you used setElementPosition to spawn the ped/player, this function will not work and returns false.
   * @param theVehicle The vehicle you wish to force the ped into.
   * @param [seat=0] An integer representing the seat ID.
   * @returns Returns true if the operation is successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/WarpPedIntoVehicle
   **/
  warpIntoVehicle(theVehicle: Vehicle, seat?: number): boolean;

  /**
   * This function is used to set the current clothes on a ped.
   * - Note: This function only works with peds using CJ skin (ID 0).
   * @param clothesTexture A string determining the clothes texture that will be added. See the clothes catalog.
   * @param clothesModel A string determining the clothes model that will be added. See the clothes catalog.
   * @param clothesType A integer representing the clothes slot/type the clothes should be added to.
   * @returns This function returns true if the clothes were successfully added to the ped, false otherwise.
   * @see https://wiki.mtasa.com/wiki/AddPedClothes
   **/
  addClothes(clothesTexture: string, clothesModel: string, clothesType: number): boolean;

  /**
   * giveWeapon gives a specified weapon to a certain player or ped.
   * There is an optional argument to specify ammunition.
   * For example, a melee weapon doesn't need an ammo argument.
   * - Note: When setting ammo for weapons in slot 0,1,10,11 or 12, the ammo max is 1. When setting ammo for weapons in slot 3,4,5, the ammo is added. When setting ammo for weapons in slot 2,6,7,8,9 and the slot weapon is changing, the ammo is replaced.
   * @param weapon A whole number that refers to a Weapon ID. Click here for a list of possible weapon IDs.
   * @param [ammo=30] A whole number serving as the ammo amount for the given weapon. For weapons that do not require ammo, such as melee, this should be at least 1.
   * @param [setAsCurrent=false] A boolean value determining whether or not the weapon will be set as the players current.
   * @returns Returns true if weapon was successfully acquired, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GiveWeapon
   **/
  giveWeapon(weapon: number, ammo?: number, setAsCurrent?: boolean): boolean;

  /**
   * This function removes a specified weapon or ammo from a certain player's inventory.
   * @param weaponId A number that refers to a weapon that you wish to remove.
   * @param ammo If used, this amount of ammo will be taken instead and the weapon will not be removed.
   * @returns Returns a true if the weapon/ammo was removed successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/TakeWeapon
   **/
  takeWeapon(weaponId: number, ammo?: number): boolean;

  /**
   * This function removes evegetFPSLimitry weapons from a specified ped, rendering it unarmed.
   * - Note: Weapons are removed when a ped dies by default. This means that it is only appropriate to use this function while a ped is alive.
   * @returns Returns true if the function succeeded, false otherwise.
   * @see https://wiki.mtasa.com/wiki/TakeAllWeapons
   **/
  takeAllWeapons(): boolean;

  /**
   * This function makes a pedestrian reload their weapon.
   * @returns Returns true if the pedestrian was made to reload.
   * @see https://wiki.mtasa.com/wiki/ReloadPedWeapon
   **/
  reloadWeapon(): boolean;

  /**
   * This function is used to remove the current clothes of a certain type on a ped.
   * It will remove them if the clothesTexture and clothesModel aren't specified, or if they match the current clothes on that slot.
   * @param clothesType the clothes slot/type to remove.
   * @param clothesTexture (Server only) A string determining the clothes texture that will be removed.
   * @param clothesModel (Server only) A string determining the clothes model that will be removed.
   * @returns This function returns true if the clothes were successfully removed from the ped, false otherwise.
   * @see https://wiki.mtasa.com/wiki/RemovePedClothes
   **/
  removeClothes(clothesType: number, clothesTexture?: string, clothesModel?: string): boolean;

  /**
   * This function removes a ped from a vehicle immediately.
   * This works for drivers and passengers.
   * Note that this removes the ped from the vehicle and puts him in the exact position where the command was initiated.
   * @returns Returns true if the operation was successful, false if it isn't in a vehicle.
   * @see https://wiki.mtasa.com/wiki/RemovePedFromVehicle
   **/
  removeFromVehicle(): boolean;

  /**
   * This function checks if the specified ped is dead or not.
   * @returns Returns true if the ped is choking, false otherwise.
   * @see https://wiki.multitheftauto.com/wiki/IsPedDead
   **/
  isDead(): boolean;

  /**
   * This function checks if the specified ped is ducked (crouched) or not.
   * @returns Returns true if the ped is ducked, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPedDucked
   **/
  isDucked(): boolean;

  /**
   * This function is used to determine whether or not a ped is on the ground.
   * This is for on-foot usage only.
   * @returns Returns true if the ped is on foot and on the ground, false otherwise, even if he is in a car that stands still or on map object outside world map.
   * @see https://wiki.mtasa.com/wiki/IsPedOnGround
   **/
  isOnGround(): boolean;

  /**
   * Checks whether or not a given ped is currently in a vehicle.
   * This also returns true if they're trying to enter a vehicle.
   * @returns Returns true if the ped is in a vehicle, false if he is on foot.
   * @see https://wiki.mtasa.com/wiki/IsPedInVehicle
   **/
  isInVehicle(): boolean;

  /**
   * This function checks if the specified ped is on fire or not.
   * @returns Returns true if the ped is on fire, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPedOnFire
   **/
  isOnFire(): boolean;

  /**
   * This function checks if the specified ped is choking (coughing) or not.
   * This happens as a result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray can.
   * @returns Returns true if the ped is choking, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPedChoking
   **/
  isChoking(): boolean;

  /**
   * This function checks if the ped is in the driveby state.
   * @returns Returns true if the driveby state is enabled, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPedDoingGangDriveby
   **/
  isDoingGangDriveby(): boolean;

  /**
   * With this function, you can check if a ped has a head or not.
   * @returns Returns true if the ped is headless, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsPedHeadless
   **/
  isHeadless(): boolean;

  /**
   * Checks whether or not a ped is currently wearing a jetpack.
   * @returns Returns true if the ped is carrying a jetpack, false if he is not.
   * @see https://wiki.mtasa.com/wiki/IsPedWearingJetpack
   **/
  isWearingJetpack(): boolean;

  /**
   * This function returns the current armor of the specified ped.
   * @returns A float with the armor, false if an invalid ped was given.
   * @see https://wiki.mtasa.com/wiki/GetPedArmor
   **/
  getArmor(): number;

  /**
   * Retrieves the fighting style a player/ped is currently using.
   * Function also added client-side.
   * @returns Returns the ped's current fighting style as an integer ID, false if it fails to retrieve a value.
   * @see https://wiki.mtasa.com/wiki/GetPedFightingStyle
   **/
  getFightingStyle(): number;

  /**
   * This function returns the current gravity for the specified ped.
   * The default gravity is 0.008.
   * @returns Returns a float indicating the ped's gravity. Default value is 0.008.
   * @see https://wiki.mtasa.com/wiki/GetPedGravity
   **/
  getGravity(): number;

  /**
   * This function returns the value of the specified statistic of a specific ped.
   * @param stat A whole number determining the stat ID.
   * @returns Returns the value of the requested statistic.
   * @see https://wiki.mtasa.com/wiki/GetPedStat
   **/
  getStat(stat: number): number | false;

  /**
   * This function gets a ped's selected weapon slot.
   * @returns Returns the selected weapon slot ID on success.
   * @see https://wiki.mtasa.com/wiki/GetPedWeaponSlot
   **/
  getWeaponSlot(): number;

  /**
   * Returns the walking style ID of a ped.
   * This ID determines the set of animations that is used for walking, running etc.
   * @returns Returns the walking style ID.
   * @see https://wiki.mtasa.com/wiki/GetPedWalkingStyle
   **/
  getWalkingStyle(): number;

  /**
   * This function returns an integer that contains the ammo in a specified ped's weapon.
   * @param [weaponSlot=current] an integer representing the weapon slot (set to the ped's currently selected slot if not specified).
   * @returns Returns an int containing the amount of ammo in the specified ped's currently selected or specified clip, or 0 if the ped specified is invalid.
   * @see https://wiki.mtasa.com/wiki/GetPedAmmoInClip
   **/
  getAmmoInClip(weaponSlot?: number): number;

  /**
   * This function gets the vehicle that the ped is currently in or is trying to enter, if any.
   * @returns Returns the vehicle that the specified ped is in, or false if the ped is not in a vehicle.
   * @see https://wiki.mtasa.com/wiki/GetPedOccupiedVehicle
   **/
  getOccupiedVehicle(): Vehicle | false;

  /**
   * This function tells you which weapon type is in a certain weapon slot of a ped.
   * @param [weaponSlot=current] an integer representing the weapon slot (set to the ped's current slot if not given).
   * @returns Returns a number indicating the type of the weapon the ped has in the specified slot. If the slot is empty, it returns 0. It should be noted that if a ped runs out of ammo for a weapon, it will still return the ID of that weapon in the slot (even if it appears as if the ped does not have a weapon at all), though getPedTotalAmmo will return 0. Therefore, getPedTotalAmmo should be used in conjunction with getPedWeapon in order to check if a ped has a weapon.
   * @see https://wiki.mtasa.com/wiki/GetPedWeapon
   **/
  getWeapon(weaponSlot?: number): number;

  /**
   * This function is used to get the element a ped is currently targeting.
   * @returns Returns the element that's being targeted, or false if there isn't one. This is only effective on physical GTA elements, namely: Players, Peds, Vehicles, Objects.
   * @see https://wiki.mtasa.com/wiki/GetPedTarget
   **/
  getTarget(): Player | Ped | Vehicle | MapObject | false;

  /**
   * This function gets the seat that a specific ped is sitting in in a vehicle.
   * @returns Returns false if the ped is on foot.
   * @see https://wiki.mtasa.com/wiki/GetPedOccupiedVehicleSeat
   **/
  getOccupiedVehicleSeat(): number | false;

  /**
   * This function is used to get the current clothes texture and model of a certain type on a ped.
   * @param clothesType The type/slot of clothing you want to get.
   * @returns This function returns 2 strings, the clothes texture and model. The first return value will be false if this player's clothes type is empty.
   * @see https://wiki.mtasa.com/wiki/GetPedClothes
   * @tupleReturn
   **/
  getClothes(clothesType: number): [string, string] | [false];

  /**
   * This function detects the element a ped is standing on. This can be a vehicle or an map object.
   * @returns Returns an map object or a vehicle if the ped is standing on one, false if he is touching none.
   * @see https://wiki.mtasa.com/wiki/GetPedContactElement
   **/
  getContactElement(): Vehicle | MapObject | false;

  /**
   * This function returns an integer that contains the total ammo in a specified ped's weapon.
   * @param [weaponSlot=current] an integer representing the weapon slot (set to the ped's current slot if not given).
   * @returns Returns a number containing the total amount of ammo for the specified ped's weapon, or 0 if the ped specified is invalid.
   * @see https://wiki.mtasa.com/wiki/GetPedTotalAmmo
   **/
  getTotalAmmo(weaponSlot?: number): number;

  /**
   * This function can be used to set a ped on fire or extinguish a fire on it.
   * @param isOnFire true to set the ped on fire, false to extinguish any fire on him.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedOnFire
   **/
  setOnFire(isOnFire: boolean): boolean;

  /**
   * This function can be used to force the ped to do the choking (coughing) animation until he respawns or toggled off using this function.
   * The animation can not be cancelled by a player it's applied to, and he will not loose health.
   * @param choking true to make the ped choke, false to no longer force his choking animation.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedChoking
   **/
  setChoking(choking: boolean): boolean;

  /**
   * This function sets the driveby state of a ped.
   * @param state A boolean value representing the drive-by state, true meaning enabled and false disabled.
   * @returns Returns true if the driveby state could be changed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedDoingGangDriveby
   **/
  setDoingGangDriveBy(state: boolean): boolean;

  /**
   * With this function, you can set if a ped has a head or not.
   * @param headState head state, use true if you want the ped be headless, use false to give back the head.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedHeadless
   **/
  setHeadless(headState: boolean): boolean;

  /**
   * This function allows you to set the armor value of a ped.
   * @param armor the amount of armor you want to set on the ped. Valid values are from 0 to 100.
   * @returns Returns true if the armor was changed succesfully. Returns false if the armor value specified is out of acceptable range.
   * @see https://wiki.mtasa.com/wiki/SetPedArmor
   **/
  setArmor(armor: number): boolean;

  /**
   * Changes a ped's fighting style.
   * Most styles only change the 'special attack' which is done using the Aim and Enter keys.
   * @param style The fighting style ID to apply.
   * @returns Returns true in case of success, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedFightingStyle
   **/
  setFightingStyle(style: number): boolean;

  /**
   * This function sets the gravity level of a ped.
   * @param gravity The level of gravity (default is 0.008).
   * @returns Returns true if the gravity was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedGravity
   **/
  setGravity(gravity: number): boolean;

  /**
   * This function allows you to set the value of a specific statistic for a ped.
   * Visual stats (FAT and BODY_MUSCLE) can only be used on the CJ skin, they have no effect on other skins.
   * When this function is used client side, it can only be used on client side created peds.
   * Needs checking: *Things like infinite run, fire proof CJ, 150 armor have special activation flags. They need a way to be triggered on/off.
   * @param stat the stat ID.
   * @param value the new value of the stat.It must be between 0 and 1000.
   * @returns Returns true if the statistic was changed succesfully. Returns false if the stat-id/value is out of acceptable range or if the FAT or BODY_MUSCLE stats are used on non-CJ players.
   * @see https://wiki.mtasa.com/wiki/SetPedStat
   **/
  setStat(stat: number, value: number): boolean;

  /**
   * This function changes the selected weapon slot of a ped.
   * @param weaponSlot the weapon slot to set.
   * @returns Returns true if successful in setting the ped's equipped weapon slot, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedWeaponSlot
   **/
  setWeaponSlot(weaponSlot: number): boolean;

  /**
   * Sets the walking style of a ped.
   * A walking style consists of a set of animations that are used for walking, running etc.
   * @param style the walking style to set.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedWalkingStyle
   **/
  setWalkingStyle(style: number): boolean;

  /**
   * Sets the current animation of a player or ped. Not specifying the type of animation will automatically cancel the current one.
   * - Note: Warning: The animation will be cancelled if you use setElementFrozen on the ped.
   * @param [block=undefined] the animation block's name.
   * @param [anim=undefined] the name of the animation within the block.
   * @param [time=-1] how long the animation will run for in milliseconds.
   * @param [loop=true] indicates whether or not the animation will loop.
   * @param [updatePosition=true] will change the actual coordinates of the ped according to the animation. Use this for e.g. walking animations.
   * @param [interruptable=true] if set to false other tasks wont be able to interupt the animation. Setting this to 'false' also gives this function more power to override other animations that are running. For example, squatting after a jump can be terminated.
   * @param [freezeLastFrame=true] if set to true after animation the last frame will be frozen, otherwise the animation will end and controls will return.
   * @param [blendTime=250] how long the animation will mixed with the previous one in milliseconds.
   * @param [retainPedState=false] will restore the task which was playing before calling this function. Useful for restoring the crouch task after animation ends. This may be extended in the future to support other states/tasks.
   * @see https://wiki.mtasa.com/wiki/SetPedAnimation
   **/
  setAnimation(block?: string, anim?: string, time?: number, loop?: boolean, updatePosition?: boolean, interruptable?: boolean, freezeLastFrame?: boolean, blendTime?: number, retainPedState?: boolean): boolean;

  /**
   * Sets the current animation progress of a player or ped.
   * @param anim the animation name currently applied to ped, if not supplied, the animation will stop.
   * @param progress current animation progress you want to apply, value from 0.0 to 1.0, if not supplied will default to 0.0.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedAnimationProgress
   **/
  setAnimationProgress(anim?: string, progress?: number): boolean;

  /**
   * Sets the speed of a currently running animation for a particular player or ped.
   * @param [anim=""] the animation name it will affect.
   * @param [speed=1] a float containing the speed between 0.0–1.0 you want to apply to the animation. This limitation may be adjusted in the future, so do not provide speeds outside this boundary.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetPedAnimationSpeed
   **/
  setAnimationSpeed(anim?: string, speed?: number): boolean;

  /**
   * This function is used to give or take a jetpack from a ped, it won't work if the ped is in a vehicle.
   * As such, you should either expect it to fail sometimes, or repeatedly try to give a jetpack every second or so until isPedWearingJetpack returns true.
   * Alternatively, you can force the ped into a 'safe' position (e.g. standing on the ground) before giving the jetpack, or use a pickup to handle it.
   * @param state A boolean representing whether to give or take the jetpack.
   * @returns Returns true if a jetpack was successfully set for the ped, false if setting it failed.
   * @see https://wiki.mtasa.com/wiki/SetPedWearingJetpack
   **/
  setWearingJetpack(state: boolean): boolean;
}
