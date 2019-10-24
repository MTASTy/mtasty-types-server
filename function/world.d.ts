/**
 * Gets whether the traffic lights are currently locked or not.
 * If the lights are locked, it means they won't change unless you do setTrafficLightState.
 * @returns Returns true the traffic lights are currently locked, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AreTrafficLightsLocked
 **/
declare function areTrafficLightsLocked(): boolean;

/**
 * This function returns the maximum velocity at which aircrafts could fly.
 * @returns Returns a number being the max velocity that is currently set, depending on which side it is used.
 * @see https://wiki.mtasa.com/wiki/GetAircraftMaxVelocity
 **/
declare function getAircraftMaxVelocity(): number;

/**
 * This function will tell you if clouds are enabled or disabled.
 * @returns Returns true if the clouds are enabled or false if clouds are disabled.
 * @see https://wiki.mtasa.com/wiki/GetCloudsEnabled
 **/
declare function getCloudsEnabled(): boolean;

/**
 * This function will tell you what is the current render distance.
 * - Note: The function will return false server-side if far clip distance has not been set before the function is called.
 * @returns Returns a number with the current render distance, false if the operation could not be completed.
 * @see https://wiki.mtasa.com/wiki/GetFarClipDistance
 **/
declare function getFarClipDistance(): number | false;

/**
 * This function will tell you what is the current fog render distance.
 * - Note: The function will return false server-side if fog distance has not been set before the function is called.
 * @returns Returns a float with the current fog render distance, false if the operation could not be completed.
 * @see https://wiki.mtasa.com/wiki/GetFogDistance
 **/
declare function getFogDistance(): number | false;

/**
 * This function gets the current game speed value.
 * @returns Returns a float representing the speed of the game.
 * @see https://wiki.mtasa.com/wiki/GetGameSpeed
 **/
declare function getGameSpeed(): number | false;

/**
 * This function returns the current gravity level for the context in which it is called.
 * @returns Returns a number with the current server gravity level.
 * @see https://wiki.mtasa.com/wiki/GetGravity
 **/
declare function getGravity(): number | false;

/**
 * This function will return the current heat haze effect settings.
 * - Note: The server can only return the heat haze settings if it has actually been set by script.
 * @returns Returns 9 values, which are the same used as arguments in SetHeatHaze.
 * @see https://wiki.mtasa.com/wiki/GetHeatHaze
 * @tupleReturn
 **/
declare function getHeatHaze(): [number, number, number, number, number, number, number, number, boolean] | [false];

/**
 * This function gets the maximum height at which your jetpack can fly without failing to go higher.
 * @returns Returns a float containing the max jetpack height.
 * @see https://wiki.mtasa.com/wiki/GetJetpackMaxHeight
 **/
declare function getJetpackMaxHeight(): number | false;

/**
 * This function checks if a weapon is usable while on a Jetpack.
 * @param weapon The weapon that's being checked if it's usable on a Jetpack.
 * @returns Returns true if the weapon is enabled, else false if the weapon isn't or invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/GetJetpackWeaponEnabled
 **/
declare function getJetpackWeaponEnabled(weapon: string): boolean;

/**
 * Tells you how long an ingame minute takes in real-world milliseconds.
 * The default GTA value is 1000.
 * @returns Returns the number of real-world milliseconds that go in an ingame minute.
 * @see https://wiki.mtasa.com/wiki/GetMinuteDuration
 **/
declare function getMinuteDuration(): number | false;

/**
 * This function returns the moon size.
 * Using this function server-side will return the server-side value, not necessarily the same that is set client-side.
 * @returns Returns a number being the moon size that is currently set, depending on which side it is used.
 * @see https://wiki.mtasa.com/wiki/GetMoonSize
 **/
declare function getMoonSize(): number | false;

/**
 * This function is used to get "occlusions enabled" state.
 * - Note: Occlusions are used by GTA to enhance performance by hiding objects that are (normally) obscured by certain large buildings. However when removeWorldModel is used they may also have the undesired effect of making parts of the map disappear. Disabling occlusions will fix that.
 * @returns Returns true if occlusions are enabled, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetOcclusionsEnabled
 **/
declare function getOcclusionsEnabled(): number | false;

/**
 * This function is used to get the current rain level.
 * - Note: The server can only return the rain level if it has actually been set by script, otherwise it will return false.
 * @returns Returns the rain level as a number.
 * @see https://wiki.mtasa.com/wiki/GetRainLevel
 **/
declare function getRainLevel(): number | false;

/**
 * This function will return the current sky color.
 * - Note: The server can only return the sky color if it has actually been set by script.
 * @returns Returns 6 numbers, of which the first 3 represent the sky's "top" color, (in RGB) and the last 3 represent the bottom colors.
 * @see https://wiki.mtasa.com/wiki/GetSkyGradient
 * @tupleReturn
 **/
declare function getSkyGradient(): [number, number, number, number, number, number] | [false];

/**
 * This function is used to get the color of the sun.
 * @returns Returns the color of the sun as six numbers, false if its default.
 * @see https://wiki.mtasa.com/wiki/GetSunColor
 * @tupleReturn
 **/
declare function getSunColor(): [number, number, number, number, number, number] | [false];

/**
 * This function is used to get the size of the sun.
 * @returns Returns the size of the sun as a number, false if the size of the sun is at its default.
 * @see https://wiki.mtasa.com/wiki/GetSunSize
 **/
declare function getSunSize(): number | false;

/**
 * This function changes the maximum flying height of jetpack.
 * @param height The max height starting at approximately -20.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetJetpackMaxHeight
 **/
declare function setJetpackMaxHeight(height: number): boolean;

/**
 * This function changes the maximum flying height of aircraft.
 * @param height The height you want aircraft to be able to go.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetAircraftMaxHeight
 **/
declare function setAircraftMaxHeight(height: number): boolean;

/**
 * This function is used to get the current time in the game.
 * If you want to get the real server time, use getRealTime.
 * @returns Returns two numbers that represent hours and minutes.
 * @see https://wiki.mtasa.com/wiki/GetTime
 * @tupleReturn
 **/
declare function getTime(): [number, number];

/**
 * Gets the current traffic light state.
 * This state controls the traffic light colors.
 * For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.
 * @returns Returns the current state of the traffic lights.
 * @see https://wiki.mtasa.com/wiki/GetTrafficLightState
 **/
declare function getTrafficLightState(): number;

/**
 * This function returns the current Weather ID.
 * @returns Returns two numbers indicating the weather type that is currently active. The first number says what weather is currently considered to be active. The second number is the weather id that is being blended into if any, otherwise it is undefined.
 * @see https://wiki.mtasa.com/wiki/GetWeather
 * @tupleReturn
 **/
declare function getWeather(): [number, number | undefined];

/**
 * This function gets the maximum height at which aircraft can fly without their engines turning off.
 * @returns Returns a number containing the max aircraft height.
 * @see https://wiki.mtasa.com/wiki/GetAircraftMaxHeight
 **/
declare function getAircraftMaxHeight(): number | false;

/**
 * This function gets the wind velocity in San Andreas.
 * @returns Returns three numbers containing wind velocity.
 * @see https://wiki.mtasa.com/wiki/GetWindVelocity
 * @tupleReturn
 **/
declare function getWindVelocity(): [number, number, number];

/**
 * This function allows you to retrieve the zone name of a certain location.
 * @param x The X axis position.
 * @param y The Y axis position.
 * @param z The Z axis position.
 * @param [citiesonly=false] An optional argument to choose if you want to return the city name (eg Las Venturas).
 * @returns Returns the string of the zone name.
 * @see https://wiki.mtasa.com/wiki/GetZoneName
 **/
declare function getZoneName(x: number, y: number, z: number, citiesonly?: boolean): string | false;

/**
 * This function checks whether or not a specific garage door is open.
 * @param garageID The garage ID that represents the garage door that is being checked.
 * @returns Returns true if the garage is open, false if it is closed or an invalid garage ID was given.
 * @see https://wiki.mtasa.com/wiki/IsGarageOpen
 **/
declare function isGarageOpen(garageID: number): boolean;

/**
 * This function is used to remove a world map object.
 * @param modelID A whole number specifying the GTASA map object model ID.
 * @param radius A floating point number representing the radius that will be eliminated.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param [interior=0] The interior ID to apply the removal to (some map objects in interior 13 show in all interiors so if you want to remove everything in interior 0 also remove everything in interior 13).
 * @returns Returns true if the map object was removed, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/RemoveWorldModel
 **/
declare function removeWorldModel(modelID: number, radius: number, x: number, y: number, z: number, interior?: number): boolean;

/**
 * This function resets the far clip distance to its default state.
 * - Note: The function will not reset far clip distance client-side, unless it is relying on a value set by the server.
 * - Note: The function will reset the far clip distance to false server-side, as there is no default value to begin with.
 * @returns Returns true if operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetFarClipDistance
 **/
declare function resetFarClipDistance(): boolean;

/**
 * This function resets the fog render distance to its default state.
 * - Note: The function will reset the fog render distance to false server-side, as there is no default value to begin with.
 * @returns Returns true if operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetFogDistance
 **/
declare function resetFogDistance(): boolean;

/**
 * This function restores the default heat haze.
 * @returns Returns true if the heat haze was reset correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetHeatHaze
 **/
declare function resetHeatHaze(): boolean;

/**
 * This function is used to reset the size of the moon to its normal size.
 * @returns Returns true if the size of the moon was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetMoonSize
 **/
declare function resetMoonSize(): boolean;

/**
 * This function resets the rain level of the current weather to its default.
 * @returns Returns true if the rain level was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetRainLevel
 **/
declare function resetRainLevel(): boolean;

/**
 * This function allows restoring of a changed sky gradient as a result of setSkyGradient.
 * @returns Returns true if sky color was reset correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetSkyGradient
 **/
declare function resetSkyGradient(): boolean;

/**
 * This function is used to reset the color of the sun to its normal color.
 * @returns Returns true if the color of the sun was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetSunColor
 **/
declare function resetSunColor(): boolean;

/**
 * This function is used to reset the size of the sun to its normal size.
 * @returns Returns true if the size of the sun was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetSunSize
 **/
declare function resetSunSize(): boolean;

/**
 * This function resets the wind velocity in San Andreas to its default state.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetWindVelocity
 **/
declare function resetWindVelocity(): boolean;

/**
 * This function allows restoring of all world map objects,which were removed with RemoveWorldModel.
 * @returns Returns true if the world map objects were restored, false otherwise.
 * @see https://wiki.mtasa.com/wiki/RestoreAllWorldModels
 **/
declare function restoreAllWorldModels(): boolean;

/**
 * This function allows restoring of world map object,which was removed with RemoveWorldModel.
 * @param modelID A whole number specifying the GTASA map object model ID.
 * @param radius A fnumber representing the radius that will be eliminated.
 * @param x A number representing the X coordinate on the map.
 * @param y A number representing the Y coordinate on the map.
 * @param z A number representing the Z coordinate on the map.
 * @param [interior=1] Interior.
 * @returns Returns true if the world map object was restored, false otherwise.
 * @see https://wiki.mtasa.com/wiki/RestoreWorldModel
 **/
declare function restoreWorldModel(modelID: number, radius: number, x: number, y: number, z: number, interior?: number): boolean;

/**
 * This function sets the maximum velocity at which aircrafts could fly.
 * Using this function server-side will overwrite the value that was previously set client-side.
 * @param velocity The max velocity, can be 0 or any positive value. Default is 1.5.
 * @returns Returns true if the max velocity was set correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetAircraftMaxVelocity
 **/
declare function setAircraftMaxVelocity(velocity: number): boolean;

/**
 * This function will enable or disable clouds.
 * This is useful for race maps which are placed high up as clouds can cause low FPS.
 * @param enabled A boolean value determining if clouds should be shown.Use true to show clouds and false to hide them.
 * @returns Returns true if the cloud state was changed succesfully, false if an invalid argument was specified.
 * @see https://wiki.mtasa.com/wiki/SetCloudsEnabled
 **/
declare function setCloudsEnabled(enabled: boolean): boolean;

/**
 * This function is used to set the distance of render.
 * Areas beyond the specified distance will not be rendered.
 * @param distance A number specifying the distance of render. Setting this less than 5 will cause problems to the client.
 * @returns Returns true if the distance was set correctly, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetFarClipDistance
 **/
declare function setFarClipDistance(distance: number): boolean;

/**
 * This function changes the distance at which fog appears.
 * Keep in mind that this function doesn't change the distance of render.
 * @returns Returns true if the distance changed successfully, false if bad arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetFogDistance
 **/
declare function setFogDistance(distance: number): boolean;

/**
 * This function sets the game speed to the given value.
 * @param value The number value of the game speed (range 0 - 10).
 * @returns Returns true if the gamespeed was set successfully, false otherwise. The normal game speed is '1'.
 * @see https://wiki.mtasa.com/wiki/SetGameSpeed
 **/
declare function setGameSpeed(value: number): boolean;

/**
 * This function opens or closes the specified garage door in the world.
 * - Note: setGarageOpen does not work with ID 32 (Pay 'n' Spray near Royal Casino). This garage doesn't work in SP too. You can remove this gate by removeWorldModel and recreate them for later using with moveObject.
 * @param garageID The garage ID that represents the garage door being opened or closed.
 * @param isOpen A boolean indicating whether or not to open the door.
 * @returns Returns true if successful, false if an invalid garage id was given.
 * @see https://wiki.mtasa.com/wiki/SetGarageOpen
 **/
declare function setGarageOpen(garageID: number, isOpen: boolean): boolean;

/**
 * This function sets the server's gravity level.
 * - Note: This does not effect peds/players; to set ped/player gravity use setPedGravity.
 * - Note: Setting the gravity level to different values on clients can cause animation bugs (players floating across ground because players see different fall animation).
 * @param level The level of gravity (default is 0.008).
 * @returns Returns true if gravity was changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetGravity
 **/
declare function setGravity(level: number): boolean;

/**
 * This function changes the heat haze effect.
 * @param intensity The intensity of the effect, from 0 to 255.
 * @param [randomShift=0] Sets a random jitter, from 0 to 255.
 * @param [speedMin=12] The slowest effect speed, from 0 to 1000.
 * @param [speedMax=18] The fastest effect speed, from 0 to 1000.
 * @param [scanSizeX=75] The X size in pixels of the chunk grabbed from the screen, from -1000 to 1000.
 * @param [scanSizeY=80] The Y size in pixels of the chunk grabbed from the screen, from -1000 to 1000.
 * @param [renderSizeX=80] The X size in pixels the chunk will be when rendered back to the screen, from 0 to 1000.
 * @param [renderSizeY=85] The Y size in pixels the chunk will be when rendered back to the screen, from 0 to 1000.
 * @param [bShowInside=false] Set to true to enable the heat haze effect when inside a building.
 * @returns Returns true if the heat haze effect was set correctly, false if invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/SetHeatHaze
 **/
declare function setHeatHaze(intensity: number, randomShift?: number, speedMin?: number, speedMax?: number, scanSizeX?: number, scanSizeY?: number, renderSizeX?: number, renderSizeY?: number, bShowInside?: boolean): boolean;

/**
 * This function disables or enables the ambient sounds played by GTA in most interiors, like restaurants, casinos, clubs, houses, etc.
 * @param enabled set to true to enable the interior ambient sounds, false to disable them. By default they're enabled.
 * @returns If a boolean was passed to the function, it always succeeds and returns true.
 * @see https://wiki.mtasa.com/wiki/SetInteriorSoundsEnabled
 **/
declare function setInteriorSoundsEnabled(enabled: boolean): boolean;

/**
 * This function sets a weapon usable while using the Jetpack.
 * - Note: colt 45, sawed-off, tec-9 and uzi are always enabled for the Jetpack and are not affected by this function.
 * @param weaponName The weapon that's being set usable on a Jetpack.
 * @param enabled A bool representing whether the weapon is enabled or disabled.
 * @returns Returns true, else false if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/SetJetpackWeaponEnabled
 **/
declare function setJetpackWeaponEnabled(weaponName: string, enabled: boolean): boolean;

/**
 * Sets the real-world duration of an ingame minute.
 * The GTA default is 1000.
 * @param milliseconds the new duration of an ingame minute, accepted values 0 - 4294967296.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetMinuteDuration
 **/
declare function setMinuteDuration(milliseconds: number): boolean;

/**
 * This function sets the moon size.
 * Using this function server-side will overwrite the value that was previously set client-side.
 * @param size The size, can be 0 or any positive value. Default is 3.
 * @returns Returns true if the moon size was set correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetMoonSize
 **/
declare function setMoonSize(size: number): boolean;

/**
 * This function is used to enable or disable occlusions.
 * Occlusions are used by GTA to enhance performance by hiding objects that are (normally) obscured by certain large buildings.
 * However when removeWorldModel is used they may also have the undesired effect of making parts of the map disappear.
 * Disabling occlusions will fix that.
 * @param enabled A bool specifying if GTA occlusions should be enabled.
 * @returns Returns true if the setting was set correctly, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetOcclusionsEnabled
 **/
declare function setOcclusionsEnabled(enabled: boolean): boolean;

/**
 * This function sets the rain level to any weather available in GTA.
 * Use resetRainLevel to undo the changes.
 * @param level A floating point number representing the rain level. 1 represents the maximum rain level usually available in GTA, but higher values are accepted.
 * @returns Returns true if the rain level was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetRainLevel
 **/
declare function setRainLevel(level: number): boolean;

/**
 * This function changes the sky color to a two-color gradient.
 * @param [topRed=0] The red value of the upper part of the sky, from 0 to 255.
 * @param [topGreen=0] The green value of the upper part of the sky, from 0 to 255.
 * @param [topBlue=0] The blue value of the upper part of the sky, from 0 to 255.
 * @param [bottomRed=0] The red value of the lower part of the sky, from 0 to 255.
 * @param [bottomGreen=0] The green value of the lower part of the sky, from 0 to 255.
 * @param [bottomBlue=0] The blue value of the lower part of the sky, from 0 to 255.
 * @returns Returns true if sky color was set correctly, false if invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/SetSkyGradient
 **/
declare function setSkyGradient(topRed?: number, topGreen?: number, topBlue?: number, bottomRed?: number, bottomGreen?: number, bottomBlue?: number): boolean;

/**
 * This function is used to set the color of the sun.
 * @param aRed The amount of red (0-255) you want the sun to be.
 * @param aGreen The amount of green (0-255) you want the sun to be.
 * @param aBlue The amount of blue (0-255) you want the sun to be.
 * @param bRed The amount of red (0-255) you want the sun to be.
 * @param bGreen The amount of green (0-255) you want the sun to be.
 * @param bBlue The amount of blue (0-255) you want the sun to be.
 * @returns Returns true if the color of the sun was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSunColor
 **/
declare function setSunColor(aRed: number, aGreen: number, aBlue: number, bRed: number, bGreen: number, bBlue: number): boolean;

/**
 * This function is used to set the size of the sun.
 * @param size The size you want the sun to be in the sky.
 * @returns Returns true if the size of the sun was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSunSize
 **/
declare function setSunSize(size: number): boolean;

/**
 * This function sets the current GTA time to the given time.
 * @param hour The hour of the new time (range 0-23).
 * @param minute The minute of the new time (range 0-59).
 * @returns Returns true if the new time was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTime
 **/
declare function setTime(hour: number, minute: number): boolean;

/**
 * Sets the current traffic light state.
 * This state controls the traffic light colors.
 * For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.
 * @param colorNS Valid colors are: "green", "yellow", "red".
 * @param colorEW Valid colors are: "green", "yellow", "red".
 * @returns Returns true if the state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrafficLightState
 **/
declare function setTrafficLightState(colorNS: "green" | "yellow" | "red", colorEW: "green" | "yellow" | "red"): boolean;

/**
 * Sets the current traffic light state.
 * This state controls the traffic light colors.
 * For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.
 * @param state If an number is provided, the state you wish to use (possible values: 0-9).
 * @returns Returns true if the state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrafficLightState
 **/
declare function setTrafficLightState(state: number): boolean;

/**
 * Sets the current traffic light state.
 * This state controls the traffic light colors.
 * For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.
 * @param state One of the following strings: "auto", "disabled".
 * @returns Returns true if the state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrafficLightState
 **/
declare function setTrafficLightState(state: "auto" | "disabled"): boolean;

/**
 * Toggles whether you want the traffic lights to be locked.
 * If the lights are locked, it means they won't change unless you do setTrafficLightState.
 * @param toggle A bool indicating whether you want the traffic lights to change automatically, or not.
 * @returns Returns true if the successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrafficLightsLocked
 **/
declare function setTrafficLightsLocked(toggle: boolean): boolean;

/**
 * This function sets the current weather to the given valid value.
 * To change the weather gradually, see setWeatherBlended.
 * @param weatherID The ID of new weather. Valid values are 0 to 255 inclusive.
 * @returns Returns true if the weather was set succesfully, false if an invalid weatherID was specified.
 * @see https://wiki.mtasa.com/wiki/SetWeather
 **/
declare function setWeather(weatherID: number): boolean;

/**
 * This function will change the current weather to another in a smooth manner, over the period of 1-2 in-game hours (unlike setWeather, which sets a new weather instantly).
 * To ensure this transition performs as expected, you should not call this function until getWeather indicates that no transition is already being done.
 * @param weatherID The ID of the weather state you wish to set.Valid values are 0 to 255 inclusive.
 * @returns Returns true if successful, false if an invalid weatherID is passed.
 * @see https://wiki.mtasa.com/wiki/SetWeatherBlended
 **/
declare function setWeatherBlended(weatherID: number): boolean;

/**
 * This function changes the wind velocity.
 * The wind shakes the vegetation and makes particles fly in a direction.
 * The intensity and direction of the effect deppends of the wind velocity in each axis.
 * @param velocityX The velocity of the wind along the x axis.
 * @param velocityY The velocity of the wind along the y axis.
 * @param velocityZ The velocity of the wind along the z axis.
 * @returns Returns true if successful, false if bad arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetWindVelocity
 **/
declare function setWindVelocity(velocityX: number, velocityY: number, velocityZ: number): boolean;
