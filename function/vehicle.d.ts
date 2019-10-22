/**
 * This function adds sirens to a vehicle.
 * @param theVehicle The vehicle to add sirens.
 * @param sirenCount The amount of siren points on the vehicle (8 maximum).
 * @param sirenType An number between 1 and 6 (1: invisible, 2: single, 3+: dual).
 * @param [flag=false] Visible from all directions (applies to single type only).
 * @param [checkLosFlag=true] Check line of sight between camera and light so it won't draw if blocked.
 * @param [useRandomiser=true] Randomise the light order, false for sequential.
 * @param [silentFlag=false] If you want the siren to be silent set this to true.
 * @returns Returns true if sirens were successfully added to the vehicle, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AddVehicleSirens
 **/
declare function addVehicleSirens(theVehicle: Vehicle, sirenCount: number, sirenType: 1 | 2 | 3 | 4 | 5 | 6, flag?: boolean, checkLosFlag?: boolean, useRandomiser?: boolean, silentFlag?: boolean): boolean;

/**
 * This function adds an upgrade to a vehicle, e.g. nitrous, hydraulics.
 * @param theVehicle The element representing the vehicle you wish to add the upgrade to.
 * @param upgrade The id of the upgrade you wish to add (1000 to 1193).
 * @returns Returns true if the upgrade was successfully added to the vehicle, otherwise false.
 * @see https://wiki.mtasa.com/wiki/AddVehicleUpgrade
 **/
declare function addVehicleUpgrade(theVehicle: Vehicle, upgrade: number): boolean;

/**
 * - Note: MTA 1.5.7 and older.
 * - Note: This is different to getVehicleOverrideLights because this function will return true if the lights were turned on by natural causes.
 * - Note: Unless setVehicleOverrideLights is used, vehicles always automatically disable their lights between 06:00 and 07:00 and enable them between 20:00 and 21:00.
 * This function is used to find out whether the lights of the vehicle are on.
 * @param theVehicle The vehicle you wish to retrieve the lights state of.
 * @returns Returns true if the lights are on, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AreVehicleLightsOn
 **/
declare function areVehicleLightsOn(theVehicle: Vehicle): boolean;

/**
 * This function attaches a trailer type vehicle to a trailer-towing-type vehicle.
 * @param theVehicle the vehicle you wish to attach a trailer to.
 * @param theTrailer the trailer you wish to be attached.
 * @returns Returns true if the vehicle's were successfully attached, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AttachTrailerToVehicle
 **/
declare function attachTrailerToVehicle(theVehicle: Vehicle, theTrailer: Vehicle): boolean;

/**
 * This function will blow up a vehicle.
 * This will cause an explosion and will kill the driver and any passengers inside it.
 * @param vehicleToBlow the vehicle that you wish to blow up.
 * @param [explode=true] if this argument is true then the vehicle will explode, otherwise it will just be blown up silently.
 * @returns Returns true if the vehicle was blown up, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/BlowVehicle
 **/
declare function blowVehicle(vehicleToBlow: Vehicle, explode?: boolean): boolean;

/**
 * This function creates a vehicle at the specified location.
 * Its worth nothing that the position of the vehicle is the center point of the vehicle, not its base.
 * As such, you need to ensure that the z value (vertical axis) is some height above the ground.
 * You can find the exact height using the client side function getElementDistanceFromCentreOfMassToBaseOfModel, or you can estimate it yourself and just spawn the vehicle so it drops to the ground.
 * @param model The vehicle ID of the vehicle being created.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param rx A floating point number representing the rotation about the X axis in degrees.
 * @param ry A floating point number representing the rotation about the Y axis in degrees.
 * @param rz A floating point number representing the rotation about the Z axis in degrees.
 * @param numberplate A string that will go on the number plate of the vehicle (max 8 characters).
 * @param bDirection Placeholder boolean which provides backward compatibility with some scripts. It never had any effect, but it is read by the code. It is recommended to ignore this argument, passing false or the variant1 argument in its place.
 * @param variant1 An number for the first vehicle variant.
 * @param variant2 An number for the second vehicle variant.
 * @returns Returns the vehicle element that was created. Returns false if the arguments are incorrect, or if the vehicle limit of 65535 is exceeded.
 * @see https://wiki.mtasa.com/wiki/CreateVehicle
 **/
declare function createVehicle(model: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, numberplate?: string, bDirection?: boolean, variant1?: number, variant2?: number): Vehicle | false;

/**
 * This function detaches an already attached trailer from a vehicle.
 * @param theVehicle The vehicle you wish to detach a trailer from.
 * @param [theTrailer=undefined] The trailer you wish to be detached.
 * @returns Returns 'true' if the vehicle's were successfully detached, 'false' otherwise.
 * @see https://wiki.mtasa.com/wiki/DetachTrailerFromVehicle
 **/
declare function detachTrailerFromVehicle(theVehicle: Vehicle, theTrailer?: Vehicle): boolean;

/**
 * This function will set a vehicle's health to full and fix its damage model.
 * If you wish to only change the vehicle's health, without affecting its damage model, use setElementHealth.
 * @param theVehicle the vehicle you wish to fix.
 * @returns Returns true if the vehicle was fixed, false if theVehicle is invalid.
 * @see https://wiki.mtasa.com/wiki/FixVehicle
 **/
declare function fixVehicle(theVehicle: Vehicle): boolean;

// TODO: Fix types
/**
 * This function returns a table containing the handling data of the specified vehicle model.
 * - Note: the data returned may not reflect the actual handling of a particular vehicle, since this may be overriden by the setVehicleHandling function.
 * @param modelId the vehicle model you wish to get the handling data of.
 * @returns Returns a table containing all the handling data, false if an invalid vehicle model is specified.
 * @see https://wiki.mtasa.com/wiki/GetModelHandling
 **/
declare function getModelHandling(modelId: number): object;

// TODO: Fix types
/**
 * This function returns a table of the original vehicle handling.
 * Use getVehicleHandling if you wish to get the current handling of a vehicle, or getModelHandling for a specific vehicle model.
 * @param modelID The vehicle ID you wish to get the original handling from.
 * @returns Returns a table containing all the handling data, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetOriginalHandling
 **/
declare function getOriginalHandling(modelID: number): object;

/**
 * Gets the direction in which a train is driving (clockwise or counterclockwise).
 * @param train the train of which to get the driving direction.
 * @returns Returns true if the train is driving clockwise on the train track, false if it is going counterclockwise or a failure occured.
 * @see https://wiki.mtasa.com/wiki/GetTrainDirection
 **/
declare function getTrainDirection(train: Vehicle): boolean;

/**
 * Gets the position the train is currently on the track.
 * @param train the train to get the position of.
 * @returns Returns a number that represents how along the track it is, false if there is problem with train element.
 * @see https://wiki.mtasa.com/wiki/GetTrainPosition
 **/
declare function getTrainPosition(train: Vehicle): number | false;

/**
 * Gets the speed at which a train is traveling on the rails.
 * @param train the train of which to retrieve the speed.
 * @returns Returns the train's speed if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetTrainSpeed
 **/
declare function getTrainSpeed(train: Vehicle): number | false;

/**
 * - Note: MTA 1.6 and older.
 * - Warning: Function has been disabled.
 * @param train the train of which to get the track.
 * @returns Returns an number that represents the train track, false if there is problem with train element.
 * @see https://wiki.mtasa.com/wiki/GetTrainTrack
 **/
declare function getTrainTrack(train: Vehicle): number | false;

/**
 * This function returns the color of the specified vehicle.
 * A vehicle can have up to four colors.
 * @param theVehicle The vehicle that you wish to get the color of.
 * @param bRGB A boolean specifying whether to return RGB values. A setting of false will result in the function returning color ids instead.
 * @returns Returns 12 numbers (if bRGB is true) indicating the red, green and blue components of each of the 4 vehicle colors. Returns 4 numbers (if bRGB is false) indicating the color ids of each of the 4 vehicle colors. Returns false if the vehicle doesn't exist.
 * @see https://wiki.mtasa.com/wiki/GetVehicleColor
 * @tupleReturn
 **/
declare function getVehicleColor(theVehicle: Vehicle, bRGB: boolean): [number, number, number, number, number, number, number, number, number, number, number, number] | [false];

/**
 * This function returns a table of all the compatible upgrades (or all for a specified slot, optionally) for a specified vehicle.
 * @param theVehicle the vehicle you wish to retrieve the list of compatible upgrades of.
 * @param slot the upgrade slot number for which you're getting the list (from 0 to 16). Compatible upgrades for all slots are listed if this is not specified.
 * @returns Returns a object with all the compatible upgrades, or false if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/GetVehicleCompatibleUpgrades
 **/
declare function getVehicleCompatibleUpgrades(theVehicle: Vehicle, slot?: number): number[] | false;

/**
 * This function is used to get the player in control of the specified vehicle which includes somebody who is trying to enter the drivers seat.
 * @param theVehicle the vehicle you want to get the 'controller' of.
 * @returns Returns a player element, if there isn't a driver, it will search the 'trailer chain' for the front driver, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleController
 **/
declare function getVehicleController(theVehicle: Vehicle): Player | false;

/**
 * This function tells you how open a door is (the 'open ratio').
 * Doors include boots/trunks and bonnets on vehicles that have them.
 * @param theVehicle The vehicle that you wish to get the door open ratio of.
 * @param door A whole number, 0 (hood), 1 (trunk), 2 (front left), 3 (front right), 4 (rear left), 5 (rear right).
 * @returns Returns a number between 0 and 1 that indicates how open the door is. 0 is closed, and 1 is fully open. Returns false if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/GetVehicleDoorOpenRatio
 **/
declare function getVehicleDoorOpenRatio(theVehicle: Vehicle, door: 0 | 1 | 2 | 3 | 4 | 5): number | false;

/**
 * This function returns the current state of the specifed door on the vehicle.
 * @param theVehicle the vehicle you want to get the door status of.
 * @param door a whole number representing which door to get the status of. Valid values are: 0 (hood), 1 (trunk), 2 (front left), 3 (front right), 4 (rear left), 5 (rear right).
 * @returns If successful, one of the following numbers will be returned: 0, 1, 2, 3, 4.
 * @see https://wiki.mtasa.com/wiki/GetVehicleDoorState
 **/
declare function getVehicleDoorState(theVehicle: Vehicle, door: 0 | 1 | 2 | 3 | 4 | 5): number | false;

/**
 * This function returns a vehicle's engine state (on or off).
 * @param theVehicle the vehicle you wish to get the engine state of.
 * @returns Returns true if the vehicle's engine is started, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleEngineState
 **/
declare function getVehicleEngineState(theVehicle: Vehicle): boolean;

// TODO: Fix types
/**
 * This function returns a table of the current vehicle handling data.
 * @param theVehicle the vehicle you wish to get the handling data of.
 * @returns Returns a object containing all the handling data, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleHandling
 **/
declare function getVehicleHandling(theVehicle: Vehicle): object | false;

/**
 * This function will get the headlight color of a vehicle.
 * @param theVehicle The vehicle that you wish to set the headlight color of.
 * @returns Returns three numbers for the red, green and blue of the headlight color for the specified vehicle, false if an invalid vehicle was specified.
 * @see https://wiki.mtasa.com/wiki/GetVehicleHeadLightColor
 * @tupleReturn
 **/
declare function getVehicleHeadLightColor(theVehicle: Vehicle): [number, number, number] | [false];

/**
 * This function is used to check whether a vehicle's landing gear is down or not.
 * - Note: Only planes can be used with this function.
 * @param theVehicle the vehicle of which you wish to check the landing gear state.
 * @returns Returns true if landing gear is down, false if the landing gear is up. Returns undefined if the vehicle has no landing gear, or is invalid.
 * @see https://wiki.mtasa.com/wiki/GetVehicleLandingGearDown
 **/
declare function getVehicleLandingGearDown(theVehicle: Vehicle): boolean | undefined;

/**
 * This function returns the current state of the specified light on the vehicle.
 * @param theVehicle the vehicle that you wish to know the light state of.
 * @param light A whole number determining the individual light.
 * @returns Returns 0 (working) or 1 (broken), false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleLightState
 **/
declare function getVehicleLightState(theVehicle: Vehicle, light: number): number | false;

/**
 * This function returns the maximum number of passengers that a specified vehicle can hold.
 * Only passenger seats are counted, the driver seat is excluded.
 * - Important note: Only passenger seats are counted, the driver seat is excluded.
 * @param theVehicleOrModelid the vehicle that you wish to know the maximum capacity of. OR the model id that you wish to know the maximum capacity of.
 * @returns Returns an numberindicating the maximum number of passengers that can enter a vehicle.
 * @see https://wiki.mtasa.com/wiki/GetVehicleMaxPassengers
 **/
declare function getVehicleMaxPassengers(theVehicleOrModelid: Vehicle | number): number;

/**
 * This function retrieves the model ID of a vehicle as an number value from its name.
 * @param name A string containing the name of the vehicle.
 * @returns Returns an number if the name exists, false otherwise. If you use this function on vehicles with shared names, such as "police", it will return the earliest occurrence of that vehicle's ID.
 * @see https://wiki.mtasa.com/wiki/GetVehicleModelFromName
 **/
declare function getVehicleModelFromName(name: string): number | false;

/**
 * This function returns a string containing the name of the vehicle
 * @param theVehicle the vehicle you want to get the name of.
 * @returns Returns a string containing the requested vehicle's name, or false if the vehicle passed to the function is invalid.
 * @see https://wiki.mtasa.com/wiki/GetVehicleName
 **/
declare function getVehicleName(theVehicle: Vehicle): string | false;

/**
 * Gets the name of a vehicle by its model ID.
 * @param model This is the vehicle model ID.
 * @returns Returns the name of the vehicle if the model ID was valid, empty string otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleNameFromModel
 **/
declare function getVehicleNameFromModel(model: number): string | false;

/**
 * This function gets the player sitting/trying to enter the specified vehicle.
 * @param theVehicle the vehicle of which you wish to retrieve the driver or a passenger.
 * @param [seat=0] the seat where the player is sitting (0 for driver, 1+ for passengers).
 * @returns Returns the player sitting in the vehicle, or false if the seat is unoccupied or doesn't exist.
 * @see https://wiki.mtasa.com/wiki/GetVehicleOccupant
 **/
declare function getVehicleOccupant(theVehicle: Vehicle, seat?: number): Player | false;

/**
 * This function gets all peds sitting in the specified vehicle.
 * @param theVehicle the vehicle of which you wish to retrieve the occupants.
 * @returns Returns a object with seat ID as an index and the occupant as an element. Returns false if an invalid vehicle was passed or if the vehicle has no seats (like a trailer).
 * @see https://wiki.mtasa.com/wiki/GetVehicleOccupants
 **/
declare function getVehicleOccupants(theVehicle: Vehicle): {[seat: number]: Ped} | false;

/**
 * This function is used to find out the current state of the override-lights setting of a vehicle.
 * @param theVehicle the vehicle you wish to retrieve the override lights setting of.
 * @returns Returns an number value: 0 (No override), 1 (Force off) or 2 (Force on).
 * @see https://wiki.mtasa.com/wiki/GetVehicleOverrideLights
 **/
declare function getVehicleOverrideLights(theVehicle: Vehicle): number | false;

/**
 * This function gets the current paintjob on the specified vehicle.
 * @param theVehicle the vehicle you wish to get the paintjob of.
 * @returns Returns an number representing the current paintjob on the vehicle.
 * @see https://wiki.mtasa.com/wiki/GetVehiclePaintjob
 **/
declare function getVehiclePaintjob(theVehicle: Vehicle): number | false;

/**
 * This function returns the current state of a specifed panel on the vehicle.
 * A vehicle can have up to 7 panels.
 * @param theVehicle the vehicle that you wish to know the panel state of.
 * @param panel an number specifying the panel you want to know the state of. Not every vehicle has every panel. Possible values from 0 to 6.
 * @returns Returns an number indicating the state of the specified the panel. This is a value between 0 and 3, with 0 indicating the panel is undamaged and 3 indicating it is very damaged.
 * @see https://wiki.mtasa.com/wiki/GetVehiclePanelState
 **/
declare function getVehiclePanelState(theVehicle: Vehicle, panel: number): number | false;

/**
 * This function is used to retrieve the text on the number plate of a specified vehicle.
 * @param theVehicle the vehicle that you wish to retrieve the plate text from.
 * @returns Returns a string that corresponds to the plate on the text, false if a bad argument was passed or if it is not a vehicle. Every vehicle (including planes, boats, etc.) has a numberplate, even if it's not visible.
 * @see https://wiki.mtasa.com/wiki/GetVehiclePlateText
 **/
declare function getVehiclePlateText(theVehicle: Vehicle): string | false;

/**
 * This function retrieves the respawn coordinates of a vehicle.
 * @param theVehicle The vehicle which you'd like to retrieve the respawn coordinates of.
 * @returns Returns three floats indicating the respawn coordinates of the vehicle, x, y and z respectively.
 * @see https://wiki.mtasa.com/wiki/GetVehicleRespawnPosition
 * @tupleReturn
 **/
declare function getVehicleRespawnPosition(theVehicle: Vehicle): [number, number, number] | [false];

/**
 * This function retrieves the respawn rotation of a vehicle.
 * @param theVehicle The vehicle which you'd like to retrieve the respawn rotation of.
 * @returns Returns three floats indicating the respawn rotation of the vehicle, x, y and z respectively.
 * @see https://wiki.mtasa.com/wiki/GetVehicleRespawnRotation
 * @tupleReturn
 **/
declare function getVehicleRespawnRotation(theVehicle: Vehicle): [number, number, number] | [false];

declare interface SirenParams {
  SirenCount: number
  SirenType: number;
  Flags: {
    ["360"]: boolean;
    DoLOSCheck: boolean;
    UseRandomiser: boolean;
    Silent: boolean;
  }
}

/**
 * This function get the parameters of a vehicles siren.
 * @param theVehicle The vehicle to get the siren parameters of.
 * @returns Returns a object with the siren count, siren type and a sub table for the four flags. False otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleSirenParams
 **/
declare function getVehicleSirenParams(theVehicle: Vehicle): SirenParams | false;

declare interface SirenData {
  [sirentPoint: number]: {
    x: number;
    y: number;
    z: number;

    Red: number;
    Green: number;
    Blue: number;
    Alpha: number;
    Min_Alpha: number;
  };
}

/**
 * This function gets the properties of a vehicle's sirens.
 * @param theVehicle The vehicle to get siren information of.
 * @returns If the vehicle is invalid, it returns false. Otherwise, returns a object with sub tables.
 * @see https://wiki.mtasa.com/wiki/GetVehicleSirens
 **/
declare function getVehicleSirens(theVehicle: Vehicle): SirenData | false;

/**
 * This function returns whether the sirens are turned on for the specified vehicle.
 * @param theVehicle The vehicle that will be checked.
 * @returns Returns true if the sirens are turned on for the specified vehicle, false if the sirens are turned off for the specified vehicle, if the vehicle doesn't have sirens or if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/GetVehicleSirensOn
 **/
declare function getVehicleSirensOn(theVehicle: Vehicle): boolean;

/**
 * This function is used to get the vehicle being towed by another.
 * @param theVehicle The vehicle you wish to get the towed vehicle from.
 * @returns Returns the vehicle that theVehicle is towing, false if it isn't towing a vehicle.
 * @see https://wiki.mtasa.com/wiki/GetVehicleTowedByVehicle
 **/
declare function getVehicleTowedByVehicle(theVehicle: Vehicle): Vehicle | false;

/**
 * This function is used to get the vehicle that is towing another.
 * @param theVehicle the vehicle being towed.
 * @returns The vehicle that theVehicle is being towed by, false if it isn't being towed.
 * @see https://wiki.mtasa.com/wiki/GetVehicleTowingVehicle
 **/
declare function getVehicleTowingVehicle(theVehicle: Vehicle): Vehicle | false;

/**
 * This function gets the position of a vehicle's turret, if it has one.
 * Vehicles with turrets include firetrucks and tanks.
 * @param turretVehicle The vehicle whose turret position you want to retrieve.This should be a vehicle with a turret.
 * @returns Returns two floats for the X (horizontal) and Y (vertical) axis rotation respectively. These values are in radians. The function will return 0, 0 if the vehicle is not a vehicle with a turret.
 * @see https://wiki.mtasa.com/wiki/GetVehicleTurretPosition
 * @tupleReturn
 **/
declare function getVehicleTurretPosition(turretVehicle: Vehicle): [number, number] | [false];

/**
 * This function retrieves the type of a vehicle (such as if it is a car or a boat).
 * @param theVehicle The vehicle element to get the type of.
 * @returns Returns a string with vehicle type or false if an invalid modelID has been supplied, or an empty string if the vehicle is blocked internally (some trailers).
 * @see https://wiki.mtasa.com/wiki/GetVehicleType
 **/
declare function getVehicleType(theVehicle: Vehicle): string | false;

/**
 * This function retrieves the type of a vehicle (such as if it is a car or a boat).
 * @param modelID A vehicle model ID.
 * @returns Returns a string with vehicle type or false if an invalid modelID has been supplied, or an empty string if the vehicle is blocked internally (some trailers).
 * @see https://wiki.mtasa.com/wiki/GetVehicleType
 **/
declare function getVehicleType(modelID: number): string | false;

/**
 * This function returns the current upgrade id on the specified vehicle's 'upgrade slot'.
 * An upgrade slot is a certain type of upgrade (eg: exhaust, spoiler), there are 17 slots (0 to 16).
 * @param theVehicle The vehicle whose upgrade you want to retrieve.
 * @param slot The slot id of the upgrade.
 * @returns Returns a number with the upgrade on the slot if correct arguments were passed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleUpgradeOnSlot
 **/
declare function getVehicleUpgradeOnSlot(theVehicle: Vehicle, slot: number): number | false;

/**
 * This function returns the name of an upgrade slot name (e.g. roof, spoiler).
 * @param slotOrUpgrade the slot ID or corresponding upgrade ID of which you want the name.
 * @returns Returns a string with the slot name if a valid slot or upgrade ID was given, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleUpgradeSlotName
 **/
declare function getVehicleUpgradeSlotName(slotOrUpgrade: number): string | false;

/**
 * This function returns a table of all the upgrades on a specifed vehicle.
 * @param theVehicle The vehicle you wish to retrieve the upgrades of.
 * @returns Returns a object of all the upgrades on each slot of a vehicle, which may be empty, or false if a valid vehicle is not passed.
 * @see https://wiki.mtasa.com/wiki/GetVehicleUpgrades
 **/
declare function getVehicleUpgrades(theVehicle: Vehicle): number[] | false;

/**
 * This function gets the variant of a specified vehicle.
 * In GTA SA some vehicles are different for example the labelling on trucks or the contents of a pick-up truck and the varying types of a motor bike.
 * Variants list: https://wiki.mtasa.com/wiki/Vehicle_variants
 * @param theVehicle A handle to the vehicle that you want to get the variant of.
 * @returns Two numbers of vehicle variant or false because the specified vehicle didn't exist.
 * @see https://wiki.mtasa.com/wiki/GetVehicleVariant
 * @tupleReturn
 **/
declare function getVehicleVariant(theVehicle: Vehicle): [number, number] | [false];

/**
 * This function returns the current states of all the wheels on the vehicle.
 * No vehicles have more than 4 wheels, if they appear to they will be duplicating other wheels.
 * @param theVehicle A handle to the vehicle that you wish to know the wheel states of.
 * @returns Returns 4 numbers indicating the states of the wheels (front left, rear left, front right, rear right).
 * @see https://wiki.mtasa.com/wiki/GetVehicleWheelStates
 * @tupleReturn
 **/
declare function getVehicleWheelStates(theVehicle: Vehicle): [number, number, number, number] | [false];

/**
 * This function scans through all the current vehicles and returns the ones matching the given model.
 * @param model The model of vehicles you want.
 * @returns Returns a table of existing vehicles matching the specified model.
 * @see https://wiki.mtasa.com/wiki/GetVehiclesOfType
 **/
declare function getVehiclesOfType(model: number): Vehicle[];

/**
 * This function will check if a train or tram is derailable.
 * @param vehicleToCheck The vehicle you wish to check.
 * @returns Returns true if the train is derailable, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsTrainDerailable
 **/
declare function isTrainDerailable(vehicleToCheck: Vehicle): boolean;

/**
 * This function will check if a train or tram is derailed.
 * @param vehicleToCheck the vehicle that you wish to check is derailed.
 * @returns Returns true if the train is derailed, false if the train is still on the rails.
 * @see https://wiki.mtasa.com/wiki/IsTrainDerailed
 **/
declare function isTrainDerailed(vehicleToCheck: Vehicle): boolean;

/**
 * This function allows you to determine whether a vehicle is blown or still intact.
 * @param theVehicle The vehicle that you want to obtain the blown status of.
 * @returns Returns true if the vehicle specified has blown up, false if it is still intact or the vehicle specified is invalid.
 * @see https://wiki.mtasa.com/wiki/IsVehicleBlown
 **/
declare function isVehicleBlown(theVehicle: Vehicle): boolean;

/**
 * This function checks if a vehicle is damage proof (set with setVehicleDamageProof).
 * @param theVehicle the vehicle whose invincibility status we want to check.
 * @returns Returns true if the vehicle is damage proof, false if it isn't or if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/IsVehicleDamageProof
 **/
declare function isVehicleDamageProof(theVehicle: Vehicle): boolean;

/**
 * This will tell you if a vehicle's petrol tank is explodable.
 * @param theVehicle The vehicle that you want to obtain the fuel tank status of.
 * @returns Returns true if the specified vehicle is valid and its fuel tank is explodable, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsVehicleFuelTankExplodable
 **/
declare function isVehicleFuelTankExplodable(theVehicle: Vehicle): boolean;

/**
 * This will tell you if a vehicle is locked.
 * @param theVehicle The vehicle that you want to obtain the locked status of.
 * @returns Returns true if the vehicle specified is locked, false if is unlocked or the vehicle specified is invalid.
 * @see https://wiki.mtasa.com/wiki/IsVehicleLocked
 **/
declare function isVehicleLocked(theVehicle: Vehicle): boolean;

/**
 * Checks to see if a vehicle has contact with the ground.
 * @param theVehicle The vehicle you wish to check.
 * @returns Returns true if vehicle is on the ground, false if it is not.
 * @see https://wiki.mtasa.com/wiki/IsVehicleOnGround
 **/
declare function isVehicleOnGround(theVehicle: Vehicle): boolean;

/**
 * This function will get the taxi light state of a taxi (vehicle IDs 420 and 438).
 * @param taxi The vehicle element of the taxi that you wish to get the light state of.
 * @returns Returns true if the light is on, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsVehicleTaxiLightOn
 **/
declare function isVehicleTaxiLightOn(taxi: Vehicle): boolean;

/**
 * This function removes sirens from a vehicle.
 * @param theVehicle The vehicle to remove the sirens of.
 * @returns Returns true if sirens were successfully removed from the vehicle, false otherwise.
 * @see https://wiki.mtasa.com/wiki/RemoveVehicleSirens
 **/
declare function removeVehicleSirens(theVehicle: Vehicle): boolean;

/**
 * This function removes an already existing upgrade from the specified vehicle, eg: nos, hydraulics. Defined in San Andreas\data\maps\veh_mods\veh_mods.ide.
 * @param theVehicle The element representing the vehicle you wish to remove the upgrade from.
 * @param upgrade The ID of the upgrade you wish to remove.
 * @returns Returns true if the upgrade was successfully removed from the vehicle, otherwise false.
 * @see https://wiki.mtasa.com/wiki/RemoveVehicleUpgrade
 **/
declare function removeVehicleUpgrade(theVehicle: Vehicle, upgrade: number): boolean;

/**
 * Resets the vehicle explosion time.
 * This is the point in time at which the vehicle last exploded: at this time plus the vehicle's respawn delay, the vehicle is respawned.
 * You can use this function to prevent the vehicle from respawning.
 * @param theVehicle The vehicle you wish to reset the explosion time from.
 * @returns Returns true if the vehicle explosion time has been reset, false if it failed to reset the explosion time.
 * @see https://wiki.mtasa.com/wiki/ResetVehicleExplosionTime
 **/
declare function resetVehicleExplosionTime(theVehicle: Vehicle): boolean;

/**
 * Resets the vehicle idle time.
 * @param theVehicle The vehicle you wish to reset the idle time from.
 * @returns Returns true if the vehicle idle time has been reset, false if it failed to reset the idle time.
 * @see https://wiki.mtasa.com/wiki/ResetVehicleIdleTime
 **/
declare function resetVehicleIdleTime(theVehicle: Vehicle): boolean;

/**
 * This function respawns a vehicle according to its set respawn position, set by setVehicleRespawnPosition or the position and rotation it was created on. To spawn a vehicle to a specific location just once, spawnVehicle can be used.
 * @param theVehicle The vehicle you wish to respawn.
 * @returns Returns true if the vehicle respawned successfully, false if the passed argument does not exist or is not a vehicle.
 * @see https://wiki.mtasa.com/wiki/RespawnVehicle
 **/
declare function respawnVehicle(theVehicle: Vehicle): boolean;

/**
 * This function is used to change the handling data of all vehicles of a specified model.
 * @param modelID The vehicle model you wish to set the handling of.
 * @param property The property you wish to set the handling of the vehicle to, or undefined if you want to reset the all the handling properties.
 * @param value The value of the models's handling property you wish to set, or undefined if you want to reset the handling property to its default value.
 * @returns Returns true if the handling was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetModelHandling
 **/
declare function setModelHandling(modelID: number, property: string, value: any): boolean;

/**
 * This function will set a train or tram as derailable.
 * This is, if it can derail when it goes above the maximum speed.
 * @param derailableVehicle The vehicle that you wish to set derailable.
 * @param derailable whether the train or tram is derailable: true as derailable, false as non-derailable.
 * @returns Returns true if the state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrainDerailable
 **/
declare function setTrainDerailable(derailableVehicle: Vehicle, derailable: boolean): boolean;

/**
 * This function will set a train or tram as derailed.
 * @param vehicleToDerail The vehicle that you wish to derail.
 * @param derailed whether the train is derailed.
 * @returns Returns true if the state was successfully set.
 * @see https://wiki.mtasa.com/wiki/SetTrainDerailed
 **/
declare function setTrainDerailed(vehicleToDerail: Vehicle, derailed: boolean): boolean;

/**
 * Sets the direction in which a train or tram drives over the rails (clockwise or counterclockwise).
 * @param train the train whose direction to change.
 * @param clockwise if true, will make the train go clockwise. If false, makes it go counterclockwise.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrainDirection
 **/
declare function setTrainDirection(train: Vehicle, clockwise: boolean): boolean;

/**
 * Sets the position the train is currently on the track.
 * @param train the train of which to set the track.
 * @param position the position along the track (0 - 18107 a complete way round).
 * @returns Returns true if the train position was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrainPosition
 **/
declare function setTrainPosition(train: Vehicle, position: number): boolean;

/**
 * Sets the on-track speed of a train.
 * @param train the train whose speed to change.
 * @param speed the new on-track speed of the train. A positive value will make it go clockwise, a negative value counter clockwise.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrainSpeed
 **/
declare function setTrainSpeed(train: Vehicle, speed: number): boolean;

/**
 * Sets the track of a train.
 * - Note: MTA 1.6 and older.
 * - Note: Function has been disabled.
 * @param train the train of which to set the track.
 * @param track the track where you want to set the train. It can be 0, 1, 2 or 3.
 * @returns Returns true if the track was set to the train, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrainTrack
 **/
declare function setTrainTrack(train: Vehicle, track: 0 | 1 | 2 | 3): boolean;

/**
 * This function will set the color of a vehicle.
 * Colors are in RGB format, vehicles can have up to 4 colors.
 * Most vehicles have 2 colors only.
 * @param theVehicle The vehicle that you wish to set the color of.
 * @param r1 Red color.
 * @param g1 Green color.
 * @param b1 Blue color.
 * @param r2 Red color.
 * @param g2 Green color.
 * @param b2 Blue color.
 * @param r3 Red color.
 * @param g3 Green color.
 * @param b3 Blue color.
 * @param r4 Red color.
 * @param g4 Green color.
 * @param b4 Blue color.
 * @returns Returns true if vehicle's color was set, false if an invalid vehicle or invalid colors were specified.
 * @see https://wiki.mtasa.com/wiki/SetVehicleColor
 **/
declare function setVehicleColor(theVehicle: Vehicle, r1: number, g1: number, b1: number, r2?: number, g2?: number, b2?: number, r3?: number, g3?: number, b3?: number, r4?: number, g4?: number, b4?: number): boolean;

/**
 * This functions makes a vehicle damage proof, so it won't take damage from bullets, hits, explosions or fire.
 * A damage proof's vehicle health can still be changed via script.
 * @param theVehicle The vehicle you wish to make damage proof.
 * @param damageProof true is damage proof, false is damageable.
 * @returns Returns true if the vehicle was set damage proof succesfully, false if the arguments are invalid or it failed.
 * @see https://wiki.mtasa.com/wiki/SetVehicleDamageProof
 **/
declare function setVehicleDamageProof(theVehicle: Vehicle, damageProof: boolean): boolean;

/**
 * This function sets how much a vehicle's door is open.
 * Doors include the boot/trunk and the bonnet of the vehicle.
 * @param theVehicle The vehicle that you wish to change the door open ratio of.
 * @param door A whole number, 0 (hood), 1 (trunk), 2 (front left), 3 (front right), 4 (rear left), 5 (rear right).
 * @param ratio The ratio value, ranging from 0 (fully closed) to 1 (fully open).
 * @param [time=0] The number of milliseconds the door should take to reach the value you have specified.A value of 0 will change the door open ratio instantly.
 * @returns Returns true if the door open ratio was successfully set, false if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/SetVehicleDoorOpenRatio
 **/
declare function setVehicleDoorOpenRatio(theVehicle: Vehicle, door: 0 | 1 | 2 | 3 | 4 | 5, ratio: 0 | 1, time?: number): boolean;

/**
 * This function sets the state of the specified door on a vehicle.
 * @param theVehicle The vehicle that you wish to change the door state of.
 * @param door a number representing which door to set the state of.
 * @param state a number representing the state to set the door to.
 * @returns Returns true if the door state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleDoorState
 **/
declare function setVehicleDoorState(theVehicle: Vehicle, door: 0 | 1 | 2 | 3 | 4 | 5, state: 0 | 1 | 2 | 3 | 4): boolean;

/**
 * - Note: MTA 1.6 and older.
 * This function sets the state of the specified door on a vehicle.
 * @param theVehicle The vehicle that you wish to change the door state of.
 * @param door a number representing which door to set the state of.
 * @param state a number representing the state to set the door to.
 * @param [spawnFlyingComponent=true] A boolean, if set to true, spawns flying doors etc. if you remove a component and state === 4.
 * @returns Returns true if the door state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleDoorState
 **/
declare function setVehicleDoorState(theVehicle: Vehicle, door: 0 | 1 | 2 | 3 | 4 | 5, state: 0 | 1 | 2 | 3 | 4, spawnFlyingComponent?: boolean): boolean;

/**
 * This function makes a vehicle's doors undamageable, so they won't fall off when they're hit.
 * Note that the vehicle has to be locked using setVehicleLocked for this setting to have any effect.
 * @param theVehicle The vehicle of which you wish to set the car door damageability.
 * @param state A boolean denoting whether the vehicle's doors are undamageable (true) or damageable (false).
 * @returns Returns true if the damageability state was successfully changed, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetVehicleDoorsUndamageable
 **/
declare function setVehicleDoorsUndamageable(theVehicle: Vehicle, state: boolean): boolean;

/**
 * This function turns a vehicle's engine on or off.
 * Note that the engine will always be turned on when someone enters the driver seat, unless you override that behaviour with scripts.
 * @param theVehicle The vehicle you wish to change the engine state of.
 * @param engineState A boolean value representing whether the engine will be turned on (true) or off (false).
 * @returns Returns true if the vehicle's engine state was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleEngineState
 **/
declare function setVehicleEngineState(theVehicle: Vehicle, engineState: boolean): boolean;

/**
 * This function changes the 'explodable state' of a vehicle's fuel tank, which toggles the ability to blow the vehicle up by shooting the tank.
 * This function will have no effect on vehicles with tanks that cannot be shot in single player.
 * @param theVehicle The vehicle you wish to change the fuel tank explodable state of.
 * @param explodable A boolean value representing whether or not the fuel tank will be explodable.
 * @returns Returns true if the vehicle's fuel tank explodable state was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleFuelTankExplodable
 **/
declare function setVehicleFuelTankExplodable(theVehicle: Vehicle, explodable: boolean): boolean;

/**
 * This function is used to change the handling data of a vehicle.
 * @param theVehicle The vehicle you wish to set the handling of.
 * @param property The property you wish to set the handling of the vehicle to.
 * @param value The value of the property you wish to set the handling of the vehicle to. Use undefined to reset handling.
 * @param reset If false: Reset one property to model handling value. If true: Reset one property to GTA default value.
 * @returns Returns true if the handling was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleHandling
 **/
declare function setVehicleHandling(theVehicle: Vehicle, property: string, value: any, reset: boolean): boolean;

/**
 * This function is used to change the handling data of a vehicle.
 * @param theVehicle The vehicle you wish to set the handling of.
 * @param reset If false: reset all properties to model handling value. If true: Reset all properties to GTA default value.
 * @returns Returns true if the handling was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleHandling
 **/
declare function setVehicleHandling(theVehicle: Vehicle, reset: boolean): boolean;

/**
 * This function will set the headlight color of a vehicle.
 * Valid Red Green and Blue arguments range from 0-255.
 * @param theVehicle The vehicle that you wish to set the headlight color of.
 * @param red a number indicating the amount of red for the vehicle's headlights.
 * @param green a number indicating the amount of green for the vehicle's headlights.
 * @param blue a number indicating the amount of blue for the vehicle's headlights.
 * @returns Returns true if vehicle's headlight color was set, false if an invalid vehicle or invalid color ranges were specified for red, green or blue.
 * @see https://wiki.mtasa.com/wiki/SetVehicleHeadLightColor
 **/
declare function setVehicleHeadLightColor(theVehicle: Vehicle, red: number, green: number, blue: number): boolean;

/**
 * This function sets the time delay (in milliseconds) the vehicle will remain at its position while empty.
 * - Important note: toggleVehicleRespawn must be set to true for this function to have any effect.
 * @param theVehicle The vehicle you wish to change the respawn delay of.
 * @param timeDelay The number of milliseconds the vehicle will be allowed to remain unused until it respawns.
 * @returns Returns true if the vehicle was found and edited.
 * @see https://wiki.mtasa.com/wiki/SetVehicleIdleRespawnDelay
 **/
declare function setVehicleIdleRespawnDelay(theVehicle: Vehicle, timeDelay: number): boolean;

/**
 * This function is used to set the landing gear state of certain vehicles.
 * @param theVehicle The vehicle of which you wish to set the landing gear state.
 * @param gearState A bool representing the state of the landing gear. true represents a collapsed landing gear, while false represents a disabled landing gear.
 * @returns Returns true if the landing gear was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleLandingGearDown
 **/
declare function setVehicleLandingGearDown(theVehicle: Vehicle, gearState: boolean): boolean;

/**
 * This function sets the state of the light on the vehicle.
 * @param theVehicle A handle to the vehicle that you wish to change the light state of.
 * @param light A whole number determining the individual light.
 * @param state A whole number determining the new state of the light. 0 represents normal lights, and 1 represents broken lights.
 * @returns Returns true if the light state was set successfully, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/SetVehicleLightState
 **/
declare function setVehicleLightState(theVehicle: Vehicle, light: 0 | 1 | 2 | 3, state: 0 | 1): boolean;

/**
 * This function can be used to set a vehicle to be locked or unlocked.
 * Locking a vehicle restricts access to all doors of a vehicle.
 * @param theVehicle The vehicle which you wish to change the lock status of.
 * @param locked Boolean for the status you wish to set. Set true to lock, false to unlock.
 * @returns Returns true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleLocked
 **/
declare function setVehicleLocked(theVehicle: Vehicle, locked: boolean): boolean;

/**
 * This function changes the light overriding setting on a vehicle.
 * @param theVehicle The vehicle you wish to change the override lights setting of.
 * @param value A whole number representing the state of the lights.
 * @returns Returns true if the vehicle's lights setting was changed. Otherwise false.
 * @see https://wiki.mtasa.com/wiki/SetVehicleOverrideLights
 **/
declare function setVehicleOverrideLights(theVehicle: Vehicle, value: 0 | 1 | 2): boolean;

/**
 * This function changes the paintjob on the specified vehicle.
 * See paintjob for list of supported vehicles.
 * @param theVehicle The vehicle you wish to change the paintjob of.
 * @param value A whole number representing the new paintjob id. Ranges from 0 up to 3.
 * @returns Returns true if the vehicle's paintjob was changed. Otherwise false.
 * @see https://wiki.mtasa.com/wiki/SetVehiclePaintjob
 **/
declare function setVehiclePaintjob(theVehicle: Vehicle, value: 0 | 1 | 2 | 3): boolean;

/**
 * This function allows you to change the state of one of the six panels vehicle's can have.
 * @param theVehicle The vehicle you would like to modify the panel of.
 * @param panelID An ID specifying the part of the vehicle. Possible values from 0 up to 6.
 * @param state How damaged the part is on the scale of 0 to 3, with 0 being undamaged and 3 being very damaged. How this is manifested depends on the panel and the vehicle.
 * @returns Returns true if the panel state has been updated, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehiclePanelState
 **/
declare function setVehiclePanelState(theVehicle: Vehicle, panelID: 0 | 1 | 2 | 3 | 4 | 5 | 6, state: 0 | 1 | 2 | 3): boolean;

/**
 * This function can be used to set the numberplate text of a car.
 * It now also changes the numberplate text of any vehicle that has visual numberplates.
 * @param theVehicle the vehicle whose numberplate you want to change.
 * @param numberplate a string that will go on the number plate of the car (max 8 characters).
 * @returns Returns true if the numberplate was changed successfully, or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetVehiclePlateText
 **/
declare function setVehiclePlateText(theVehicle: Vehicle, numberplate: string): boolean;

/**
 * This function sets the time delay (in milliseconds) the vehicle will remain wrecked before respawning.
 * - Important note: toggleVehicleRespawn must be set to true for this function to have any effect.
 * @param theVehicle The vehicle you wish to change the respawn delay of.
 * @param timeDelay The amount of milliseconds to delay.
 * @returns Returns true if the vehicle was found and edited.
 * @see https://wiki.mtasa.com/wiki/SetVehicleRespawnDelay
 **/
declare function setVehicleRespawnDelay(theVehicle: Vehicle, timeDelay: number): boolean;

/**
 * This function sets the position (and rotation) the vehicle will respawn to.
 * @param theVehicle The vehicle you wish to change the respawn position of.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param rx A floating point number representing the rotation about the X axis in Degrees.
 * @param ry A floating point number representing the rotation about the Y axis in Degrees.
 * @param rz A floating point number representing the rotation about the Z axis in Degrees.
 * @returns Returns true if the vehicle was found and edited, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleRespawnPosition
 **/
declare function setVehicleRespawnPosition(theVehicle: Vehicle, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number): boolean;

/**
 * This function sets the rotation the vehicle will respawn to.
 * @param theVehicle The vehicle you wish to change the respawn position of.
 * @param rx A float representing the rotation about the X axis in degrees.
 * @param ry A float representing the rotation about the Y axis in degrees.
 * @param rz A float representing the rotation about the Z axis in degrees.
 * @returns Returns true if the vehicle respawn rotation was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleRespawnRotation
 **/
declare function setVehicleRespawnRotation(theVehicle: Vehicle, rx: number, ry: number, rz: number): boolean;

/**
 * This function changes the properties of a vehicles siren point.
 * - Note: Although you may be able to add sirens to any vehice, this function may not work. This function fails on the Buffalo for example.
 * @param theVehicle The vehicle to modify.
 * @param sirenPoint The siren point to modify.
 * @param posX The x position of this siren point from the center of the vehicle.
 * @param posY The y position of this siren point from the center of the vehicle.
 * @param posZ The z position of this siren point from the center of the vehicle.
 * @param red The amount of red from 0 to 255.
 * @param green The amount of green from 0 to 255.
 * @param blue The amount of blue from 0 to 255.
 * @param [alpha=255] The alpha of the siren from 0 to 255.
 * @param [minAlpha=0] The minimum alpha of the light during day time.
 * @returns Returns true if the siren point was successfully changed on the vehicle, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleSirens
 **/
declare function setVehicleSirens(theVehicle: Vehicle, sirenPoint: number, posX: number, posY: number, posZ: number, red: number, green: number, blue: number, alpha?: number, minAlpha?: number): boolean;

/**
 * This function changes the state of the sirens on the specified vehicle.
 * @param theVehicle The vehicle that will have the sirens set.
 * @param sirensOn The state to set the sirens to.
 * @returns Returns true if the sirens are set for the specified vehicle, false if the sirens can't be set for the specified vehicle, if the vehicle doesn't have sirens or if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/SetVehicleSirensOn
 **/
declare function setVehicleSirensOn(theVehicle: Vehicle, sirensOn: boolean): boolean;

/**
 * This function will set the taxi light on in a taxi (vehicle ID's 420 and 438)
 * @param taxi The vehicle element of the taxi that you wish to turn the light on.
 * @param LightState whether the light is on. True for on, False for off.
 * @returns Returns true if the state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleTaxiLightOn
 **/
declare function setVehicleTaxiLightOn(taxi: Vehicle, LightState: boolean): boolean;

/**
 * This function sets the position of a vehicle's turret, if it has one.
 * This can be used to influence the turret's rotation, so it doesn't follow the camera.
 * Vehicles with turrets include firetrucks and tanks.
 * @param turretVehicle The vehicle whose turret position you want to retrieve. This should be a vehicle with a turret.
 * @param positionX The horizontal position of the turret. In radians.
 * @param positionY The vertical position of the turret. In radians.
 * @returns Returns a true if a valid vehicle element and valid positions were passed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleTurretPosition
 **/
declare function setVehicleTurretPosition(turretVehicle: Vehicle, positionX: number, positionY: number): boolean;

/**
 * This function sets the variant of a specified vehicle.
 * In GTA SA some vehicles are different for example the labelling on trucks or the contents of a pick-up truck and the varying types of a motor bike.
 * - Tip: Both variant arguments need to be supplied, otherwise random ones will be picked.
 * - Tip: If you only want one variant, set 'variant2' to 255. If you want no variants, then set both 'variant1' and 'variant2' to 255.
 * - Note: The fairings on the NRG-500 and BF-400 are both variants, so unless you explicitly ask for 3 or 4, your bike will have no fairings which some people may find offensive.
 * @param theVehicle A handle to the vehicle that you want to get the variant of.
 * @param variant1 a number for the first variant see Vehicle variants.
 * @param variant2 a number for the second variant see Vehicle variants.
 * @returns Returns true as the vehicle variants were successfully set or falce because the specified vehicle didn't exist or specified variants were invalid.
 * @see https://wiki.mtasa.com/wiki/SetVehicleVariant
 **/
declare function setVehicleVariant(theVehicle: Vehicle, variant1?: number, variant2?: number): boolean;

/**
 * This function sets the state of wheels on the vehicle.
 * Internally, no vehicles have more than 4 wheels.
 * If they appear to, they will be duplicating other wheels.
 * @param theVehicle A handle to the vehicle that you wish to change the wheel states of.
 * @param frontLeft A whole number representing the wheel state (-1 for no change).
 * @param [rearLeft=-1] A whole number representing the wheel state (-1 for no change).
 * @param [frontRight=-1] A whole number representing the wheel state (-1 for no change).
 * @param [rearRight=-1] A whole number representing the wheel state (-1 for no change).
 * @returns Returns a boolean value true or false that tells you if it was successful or not.
 * @see https://wiki.mtasa.com/wiki/SetVehicleWheelStates
 **/
declare function setVehicleWheelStates(theVehicle: Vehicle, frontLeft: number, rearLeft?: number, frontRight?: number, rearRight?: number): boolean;

/**
 * Spawns a vehicle at any given position and rotation.
 * @param theVehicle The vehicle you wish to spawn.
 * @param x The x position you wish to spawn the vehicle at.
 * @param y The x position you wish to spawn the vehicle at.
 * @param z The x position you wish to spawn the vehicle at.
 * @param rx The x rotation you wish to spawn the vehicle at.
 * @param ry The y rotation you wish to spawn the vehicle at.
 * @param rz The z rotation you wish to spawn the vehicle at.
 * @returns Returns true if the vehicle spawned successfully, false if the passed argument does not exist or is not a vehicle.
 * @see https://wiki.mtasa.com/wiki/SpawnVehicle
 **/
declare function spawnVehicle(theVehicle: Vehicle, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number): boolean;

/**
 * This function toggles whether or not the vehicle will be respawned after blown or idle.
 * @param theVehicle The vehicle you wish to toggle the respawning of.
 * @param Respawn A boolean determining if the vehicle will respawn or not.
 * @returns Returns true if the vehicle was found and edited, or false.
 * @see https://wiki.mtasa.com/wiki/ToggleVehicleRespawn
 **/
declare function toggleVehicleRespawn(theVehicle: Vehicle, Respawn: boolean): boolean;
