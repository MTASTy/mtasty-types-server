/**
 * This function is used to set the current clothes on a ped.
 * - Note: This function only works with peds using CJ skin (ID 0).
 * @param thePed The ped whose clothes you want to change.
 * @param clothesTexture A string determining the clothes texture that will be added. See the clothes catalog.
 * @param clothesModel A string determining the clothes model that will be added. See the clothes catalog.
 * @param clothesType A integer representing the clothes slot/type the clothes should be added to.
 * @returns This function returns true if the clothes were successfully added to the ped, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AddPedClothes
 **/
declare function addPedClothes(thePed: Ped, clothesTexture: string, clothesModel: string, clothesType: number): boolean;

/**
 * Creates a Ped in the GTA world.
 * @param modelid A whole integer specifying the GTASA skin ID.
 * @param x A number representing the X coordinate on the map.
 * @param y A number representing the Y coordinate on the map.
 * @param z A number representing the Z coordinate on the map.
 * @param [rot=0] A number representing the rotation in degrees.
 * @param [synced=true] A boolean value representing whether or not the ped will be synced. Disabling the sync might be useful for frozen or static peds to increase the server performance.
 * @returns Returns a ped element if it was successfully created.
 * @see https://wiki.mtasa.com/wiki/CreatePed
 **/
declare function createPed(modelid: number, x: number, y: number, z: number, rot?: number, synced?: boolean): Ped | false;

/**
 * This function returns an integer that contains the ammo in a specified ped's weapon.
 * @param thePed The ped whose ammo you want to check.
 * @param [weaponSlot=current] an integer representing the weapon slot (set to the ped's currently selected slot if not specified).
 * @returns Returns an int containing the amount of ammo in the specified ped's currently selected or specified clip, or 0 if the ped specified is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPedAmmoInClip
 **/
declare function getPedAmmoInClip(thePed: Ped, weaponSlot?: number): number;

/**
 * This function returns the current armor of the specified ped.
 * @param thePed The ped whose armor you want to check.
 * @returns A float with the armor, false if an invalid ped was given.
 * @see https://wiki.mtasa.com/wiki/GetPedArmor
 **/
declare function getPedArmor(thePed: Ped): number;

/**
 * This function is used to get the current clothes texture and model of a certain type on a ped.
 * @param thePed The ped whose clothes you want to retrieve.
 * @param clothesType The type/slot of clothing you want to get.
 * @returns This function returns 2 strings, the clothes texture and model. The first return value will be false if this player's clothes type is empty or an invalid player was specified.
 * @see https://wiki.mtasa.com/wiki/GetPedClothes
 * @tupleReturn
 **/
declare function getPedClothes(thePed: Ped, clothesType: number): [string, string] | [false];

/**
 * This function detects the element a ped is standing on. This can be a vehicle or an object.
 * @param thePed The ped of which you want to get the element he is standing on.
 * @returns Returns an object or a vehicle if the ped is standing on one, false if he is touching none or an invalid element was passed.
 * @see https://wiki.mtasa.com/wiki/GetPedContactElement
 **/
declare function getPedContactElement(thePed: Ped): Vehicle | MapObject | false;

/**
 * Retrieves the fighting style a player/ped is currently using.
 * Function also added client-side.
 * @param thePed the ped whose current fighting style ID you wish to retrieve.
 * @returns Returns the ped's current fighting style as an integer ID, false if it fails to retrieve a value.
 * @see https://wiki.mtasa.com/wiki/GetPedFightingStyle
 **/
declare function getPedFightingStyle(thePed: Ped): number | false;

/**
 * This function returns the current gravity for the specified ped.
 * The default gravity is 0.008.
 * @param thePed The ped whose gravity you want to check.
 * @returns Returns a float indicating the ped's gravity, or false if the ped is invalid. Default value is 0.008.
 * @see https://wiki.mtasa.com/wiki/GetPedGravity
 **/
declare function getPedGravity(thePed: Ped): number | false;

/**
 * This function gets the vehicle that the ped is currently in or is trying to enter, if any.
 * @param thePed The ped whose vehicle you're looking up.
 * @returns Returns the vehicle that the specified ped is in, or false if the ped is not in a vehicle or is an invalid ped.
 * @see https://wiki.mtasa.com/wiki/GetPedOccupiedVehicle
 **/
declare function getPedOccupiedVehicle(thePed: Ped): Vehicle | false;

/**
 * This function gets the seat that a specific ped is sitting in in a vehicle.
 * @param thePed The ped whose vehicle seat you're looking up.
 * @returns Returns false if the ped is on foot, or the ped doesn't exist.
 * @see https://wiki.mtasa.com/wiki/GetPedOccupiedVehicleSeat
 **/
declare function getPedOccupiedVehicleSeat(thePed: Ped): number | false;

/**
 * This function returns the value of the specified statistic of a specific ped.
 * @param thePed The ped whose stat you want to retrieve.
 * @param stat A whole number determining the stat ID.
 * @returns Returns the value of the requested statistic.
 * @see https://wiki.mtasa.com/wiki/GetPedStat
 **/
declare function getPedStat(thePed: Ped, stat: number): number | false;

/**
 * This function is used to get the element a ped is currently targeting.
 * @param thePed The ped whose target you want to retrieve.
 * @returns Returns the element that's being targeted, or false if there isn't one. This is only effective on physical GTA elements, namely: Players, Peds, Vehicles, Objects.
 * @see https://wiki.mtasa.com/wiki/GetPedTarget
 **/
declare function getPedTarget(thePed: Ped): Element | false;

/**
 * This function returns an integer that contains the total ammo in a specified ped's weapon.
 * - Note: Clientside, this function will not return a correct value for remote player weapons that aren't in hand.
 * @param thePed The ped whose ammo you want to check.
 * @param [weaponSlot=current] an integer representing the weapon slot (set to the ped's current slot if not given).
 * @returns Returns a number containing the total amount of ammo for the specified ped's weapon, or 0 if the ped specified is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPedTotalAmmo
 **/
declare function getPedTotalAmmo(thePed: Ped, weaponSlot?: number): number | false;

/**
 * Returns the walking style ID of a ped.
 * This ID determines the set of animations that is used for walking, running etc.
 * @param thePed the ped whose walking style to retrieve.
 * @returns Returns the walking style ID if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetPedWalkingStyle
 **/
declare function getPedWalkingStyle(thePed: Ped): number | false;

/**
 * This function tells you which weapon type is in a certain weapon slot of a ped.
 * @param thePed the ped you want to get the weapon type from.
 * @param [weaponSlot=current] an integer representing the weapon slot (set to the ped's current slot if not given).
 * @returns Returns a number indicating the type of the weapon the ped has in the specified slot. If the slot is empty, it returns 0. It should be noted that if a ped runs out of ammo for a weapon, it will still return the ID of that weapon in the slot (even if it appears as if the ped does not have a weapon at all), though getPedTotalAmmo will return 0. Therefore, getPedTotalAmmo should be used in conjunction with getPedWeapon in order to check if a ped has a weapon.
 * @see https://wiki.mtasa.com/wiki/GetPedWeapon
 **/
declare function getPedWeapon(thePed: Ped, weaponSlot?: number): number | false;

/**
 * This function gets a ped's selected weapon slot.
 * @param thePed the ped to get the current weapon slot of.
 * @returns Returns the selected weapon slot ID on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetPedWeaponSlot
 **/
declare function getPedWeaponSlot(thePed: Ped): number | false;

// TODO: Fix types
/**
 * This function returns all valid ped models.
 * @returns Returns a table with all valid ped models.
 * @see https://wiki.mtasa.com/wiki/GetValidPedModels
 **/
declare function getValidPedModels(): object[];

/**
 * This function checks if the specified ped is choking (coughing) or not.
 * This happens as a result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray can.
 * @param thePed The ped you wish to check.
 * @returns Returns true if the ped is choking, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedChoking
 **/
declare function isPedChoking(thePed: Ped): boolean;

/**
 * This function checks if the specified ped is dead or not.
 * @param thePed: the ped you want to check up on.
 * @returns Returns true if the ped is choking, false otherwise.
 * @see https://wiki.multitheftauto.com/wiki/IsPedDead
 **/
declare function isPedDead(thePed: Ped): boolean;

/**
 * This function checks if the ped is in the driveby state.
 * @param thePed The ped element whose state is to be checked.
 * @returns Returns true if the driveby state is enabled, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedDoingGangDriveby
 **/
declare function isPedDoingGangDriveby(thePed: Ped): boolean;

/**
 * This function checks if the specified ped is ducked (crouched) or not.
 * @param thePed The ped to check.
 * @returns Returns true if the ped is ducked, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedDucked
 **/
declare function isPedDucked(thePed: Ped): boolean;

/**
 * With this function, you can check if a ped has a head or not.
 * @param thePed The ped to check.
 * @returns Returns true if the ped is headless, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedHeadless
 **/
declare function isPedHeadless(thePed: Ped): boolean;

/**
 * Checks whether or not a given ped is currently in a vehicle.
 * This also returns true if they're trying to enter a vehicle.
 * @param thePed the ped you want to check.
 * @returns Returns true if the ped is in a vehicle, false if he is on foot or an invalid element was passed.
 * @see https://wiki.mtasa.com/wiki/IsPedInVehicle
 **/
declare function isPedInVehicle(thePed: Ped): boolean;

/**
 * This function checks if the specified ped is on fire or not.
 * @param thePed The ped to check.
 * @returns Returns true if the ped is on fire, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedOnFire
 **/
declare function isPedOnFire(thePed: Ped): boolean;

/**
 * This function is used to determine whether or not a ped is on the ground.
 * This is for on-foot usage only.
 * @param thePed The ped you are checking.
 * @returns Returns true if the ped is on foot and on the ground, false otherwise, even if he is in a car that stands still or on object outside world map.
 * @see https://wiki.mtasa.com/wiki/IsPedOnGround
 **/
declare function isPedOnGround(thePed: Ped): boolean;

/**
 * Checks whether or not a ped is currently wearing a jetpack.
 * @param thePed the ped you want to check
 * @returns Returns true if the ped is carrying a jetpack, false if he is not or an invalid element was passed.
 * @see https://wiki.mtasa.com/wiki/IsPedWearingJetpack
 **/
declare function isPedWearingJetpack(thePed: Ped): boolean;

/**
 * This function kills the specified ped.
 * Only works on client side peds.
 * @param thePed The ped to kill.
 * @param [theKiller=undefined] The ped responsible for the kill.
 * @param [weapon=255] The ID of the weapon or Damage Types that should appear to have killed the ped (doesn't affect how they die).
 * @param [bodyPart=255] The ID of the body part that should appear to have been hit by the weapon (doesn't affect how they die).
 * @param [stealth=false] Boolean value, representing whether or not this a stealth kill.
 * @returns Returns true if the ped was killed, false if the ped specified could not be killed or is invalid.
 * @see https://wiki.mtasa.com/wiki/KillPed
 **/
declare function killPed(thePed: Ped, theKiller?: Ped, weapon?: number, bodyPart?: number, stealth?: boolean): boolean;

/**
 * This function makes a pedestrian reload their weapon.
 * @param thePed The ped who will reload their weapon.
 * @returns Returns true if the pedestrian was made to reload, or false if invalid arguments were passed or that pedestrian has a weapon which cannot be reloaded. Note: this will fail but return true if 1) the ped is crouched and moving 2) the ped is using a weapon without clip ammo (or minigun/flamethrower/fire extinguisher) 3) the ped is using his weapon (shooting/aiming) 4) the ped moved while crouching recently Due to these circumstances causing problems with this function.
 * @see https://wiki.mtasa.com/wiki/ReloadPedWeapon
 **/
declare function reloadPedWeapon(thePed: Ped): boolean;

/**
 * This function is used to remove the current clothes of a certain type on a ped.
 * It will remove them if the clothesTexture and clothesModel aren't specified, or if they match the current clothes on that slot.
 * @param thePed The ped you want to remove clothes from.
 * @param clothesType the clothes slot/type to remove.
 * @param clothesTexture (Server only) A string determining the clothes texture that will be removed.
 * @param clothesModel (Server only) A string determining the clothes model that will be removed.
 * @returns This function returns true if the clothes were successfully removed from the ped, false otherwise.
 * @see https://wiki.mtasa.com/wiki/RemovePedClothes
 **/
declare function removePedClothes(thePed: Ped, clothesType: number, clothesTexture?: string, clothesModel?: string): boolean;

/**
 * This function removes a ped from a vehicle immediately.
 * This works for drivers and passengers.
 * Note that this removes the ped from the vehicle and puts him in the exact position where the command was initiated.
 * @param thePed The ped you wish to remove from a vehicle.
 * @returns Returns true if the operation was successful, false if the specified ped is not valid or if it isn't in a vehicle.
 * @see https://wiki.mtasa.com/wiki/RemovePedFromVehicle
 **/
declare function removePedFromVehicle(thePed: Ped): boolean;

/**
 * Sets the current animation of a player or ped. Not specifying the type of animation will automatically cancel the current one.
 * - Note: Warning: The animation will be cancelled if you use setElementFrozen on the ped.
 * @param thePed the player or ped you want to apply an animation to.
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
declare function setPedAnimation(thePed: Ped, block?: string, anim?: string, time?: number, loop?: boolean, updatePosition?: boolean, interruptable?: boolean, freezeLastFrame?: boolean, blendTime?: number, retainPedState?: boolean): boolean;

/**
 * Sets the current animation progress of a player or ped.
 * @param thePed the player or ped you want to change animation progress.
 * @param anim the animation name currently applied to ped, if not supplied, the animation will stop.
 * @param progress current animation progress you want to apply, value from 0.0 to 1.0, if not supplied will default to 0.0.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedAnimationProgress
 **/
declare function setPedAnimationProgress(thePed: Ped, anim?: string, progress?: number): boolean;

/**
 * Sets the speed of a currently running animation for a particular player or ped.
 * @param thePed the player or ped you want to change animation speed of.
 * @param [anim=""] the animation name it will affect.
 * @param [speed=1] a float containing the speed between 0.0–1.0 you want to apply to the animation. This limitation may be adjusted in the future, so do not provide speeds outside this boundary.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedAnimationSpeed
 **/
declare function setPedAnimationSpeed(thePed: Ped, anim?: string, speed?: number): boolean;

/**
 * This function allows you to set the armor value of a ped.
 * @param thePed the ped whose armor you want to modify.
 * @param armor the amount of armor you want to set on the ped. Valid values are from 0 to 100.
 * @returns Returns true if the armor was changed succesfully. Returns false if an invalid ped was specified, or the armor value specified is out of acceptable range.
 * @see https://wiki.mtasa.com/wiki/SetPedArmor
 **/
declare function setPedArmor(thePed: Ped, armor: number): boolean;

/**
 * This function can be used to force the ped to do the choking (coughing) animation until he respawns or toggled off using this function.
 * The animation can not be cancelled by a player it's applied to, and he will not loose health.
 * @param thePed The ped whose choking status to toggle.
 * @param choking true to make the ped choke, false to no longer force his choking animation.
 * @returns Returns true if successful, false otherwise (e.g. player handle is invalid).
 * @see https://wiki.mtasa.com/wiki/SetPedChoking
 **/
declare function setPedChoking(thePed: Ped, choking: boolean): boolean;

/**
 * This function sets the driveby state of a ped.
 * @param thePed The ped element whose state is to be changed.
 * @param state A boolean value representing the drive-by state, true meaning enabled and false disabled.
 * @returns Returns true if the driveby state could be changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedDoingGangDriveby
 **/
declare function setPedDoingGangDriveby(thePed: Ped, state: boolean): boolean;

/**
 * Changes a ped's fighting style.
 * Most styles only change the 'special attack' which is done using the Aim and Enter keys.
 * @param thePed The ped whose fighting style to change.
 * @param style The fighting style ID to apply.
 * @returns Returns true in case of success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedFightingStyle
 **/
declare function setPedFightingStyle(thePed: Ped, style: number): boolean;

/**
 * This function sets the gravity level of a ped.
 * @param thePed The ped whose gravity to change.
 * @param gravity The level of gravity (default is 0.008).
 * @returns Returns true if the gravity was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedGravity
 **/
declare function setPedGravity(thePed: Ped, gravity: number): boolean;

/**
 * With this function, you can set if a ped has a head or not.
 * @param thePed The ped to check.
 * @param headState head state, use true if you want the ped be headless, use false to give back the head.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedHeadless
 **/
declare function setPedHeadless(thePed: Ped, headState: boolean): boolean;

/**
 * This function can be used to set a ped on fire or extinguish a fire on it.
 * @param thePed The ped that we want to set/unset.
 * @param isOnFire true to set the ped on fire, false to extinguish any fire on him.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedOnFire
 **/
declare function setPedOnFire(thePed: Ped, isOnFire: boolean): boolean;

/**
 * This function allows you to set the value of a specific statistic for a ped.
 * Visual stats (FAT and BODY_MUSCLE) can only be used on the CJ skin, they have no effect on other skins.
 * When this function is used client side, it can only be used on client side created peds.
 * Needs checking: *Things like infinite run, fire proof CJ, 150 armor have special activation flags. They need a way to be triggered on/off.
 * @param thePed the ped whose statistic you want to modify.
 * @param stat the stat ID.
 * @param value the new value of the stat.It must be between 0 and 1000.
 * @returns Returns true if the statistic was changed succesfully. Returns false if an invalid player is specified, if the stat-id/value is out of acceptable range or if the FAT or BODY_MUSCLE stats are used on non-CJ players.
 * @see https://wiki.mtasa.com/wiki/SetPedStat
 **/
declare function setPedStat(thePed: Ped, stat: number, value: number): boolean;

/**
 * Sets the walking style of a ped.
 * A walking style consists of a set of animations that are used for walking, running etc.
 * @param thePed the ped whose walking style to change.
 * @param style the walking style to set.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedWalkingStyle
 **/
declare function setPedWalkingStyle(thePed: Ped, style: number): boolean;

/**
 * This function changes the selected weapon slot of a ped.
 * @param thePed the ped whose weapon slot you want to set. In a clientside script, this cannot be used on remote players.
 * @param weaponSlot the weapon slot to set.
 * @returns Returns true if successful in setting the ped's equipped weapon slot, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedWeaponSlot
 **/
declare function setPedWeaponSlot(thePed: Ped, weaponSlot: number): boolean;

/**
 * This function is used to give or take a jetpack from a ped, it won't work if the ped is in a vehicle.
 * As such, you should either expect it to fail sometimes, or repeatedly try to give a jetpack every second or so until isPedWearingJetpack returns true.
 * Alternatively, you can force the ped into a 'safe' position (e.g. standing on the ground) before giving the jetpack, or use a pickup to handle it.
 * @param thePed The ped you want to give a jetpack to.
 * @param state A boolean representing whether to give or take the jetpack.
 * @returns Returns true if a jetpack was successfully set for the ped, false if setting it failed.
 * @see https://wiki.mtasa.com/wiki/SetPedWearingJetpack
 **/
declare function setPedWearingJetpack(thePed: Ped, state: boolean): boolean;

/**
 * This function is used to warp or force a ped into a vehicle.
 * There are no animations involved when this happens.
 * Attention: If you used setElementPosition to spawn the ped/player, this function will not work and returns false.
 * @param thePed The ped which you wish to force inside the vehicle.
 * @param theVehicle The vehicle you wish to force the ped into.
 * @param [seat=0] An integer representing the seat ID.
 * @returns Returns true if the operation is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/WarpPedIntoVehicle
 **/
declare function warpPedIntoVehicle(thePed: Ped, theVehicle: Vehicle, seat?: number): boolean;
