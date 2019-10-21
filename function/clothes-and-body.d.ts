/**
 * This function is used to get the name of a body part on a player.
 * @param bodyPartID An integer representing the body part ID you wish to retrieve the name of.
 * @returns This function returns a string containing the body part name if the ID is valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetBodyPartName
 **/
declare function getBodyPartName(bodyPartID: number): string | false;

/**
 * This function is used to get the texture and model of clothes by the clothes type and index.
 * (Scans through the list of clothes for the specific type).
 * @param clothesType An integer representing the clothes slot/type to scan through.
 * @param clothesIndex An integer representing the index (0 based) set of clothes in the list you wish to retrieve.Each type has a different number of valid indexes.
 * @returns This function returns 2 strings, a texture and model respectively, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/GetClothesByTypeIndex
 * @tupleReturn
 **/
declare function getClothesByTypeIndex(clothesType: number, clothesIndex: number): [string, string] | [false];

/**
 * This function is used to get the name of a certain clothes type.
 * @param clothesType An integer determining the type of clothes you want to get the clothes of.
 * @returns This function returns a string (the name of the clothes type) if found, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetClothesTypeName
 **/
declare function getClothesTypeName(clothesType: number): string | false;

/**
 * This function is used to get the clothes type and index from the texture and model.
 * (Scans through the list of clothes for the specific type).
 * @param clothesTexture A string determining the clothes texture that you wish to retrieve the type and index from. See the clothes catalog.
 * @param clothesModel A string determining the corresponding clothes model that you wish to retrieve the type and index from. See the clothes catalog.
 * @returns This function returns two integers, type and index respectively, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/GetTypeIndexFromClothes
 * @tupleReturn
 **/
declare function getTypeIndexFromClothes(clothesTexture: string, clothesModel: string): [number, number] | [false];

/**
 * This function is used to set the current clothes on a ped.
 * - Note: This function only works with peds using CJ skin (ID 0).
 * @param thePed The ped whose clothes you want to change.
 * @param clothesTexture A string determining the clothes texture that will be added.
 * @param clothesModel A string determining the clothes model that will be added.
 * @param clothesType A number representing the clothes slot/type the clothes should be added to.
 * @returns This function returns true if the clothes were successfully added to the ped, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AddPedClothes
 **/
declare function addPedClothes(thePed: Ped, clothesTexture: string, clothesModel: string, clothesType: number): boolean;

/**
 * This function is used to get the current clothes texture and model of a certain type on a ped.
 * @param thePed The ped whose clothes you want to retrieve.
 * @param clothesType The type/slot of clothing you want to get.
 * @returns This function returns 2 strings, the clothes texture and model. The first return value will be false if this player's clothes type is empty or an invalid player was specified.
 * @see https://wiki.mtasa.com/wiki/GetPedClothes
 * @tupleReturn
 **/
declare function getPedClothes(thePed: Ped, clothesType: number): [string | false, string];

/**
 * This function is used to remove the current clothes of a certain type on a ped.
 * It will remove them if the clothesTexture and clothesModel aren't specified, or if they match the current clothes on that slot.
 * @param thePed The ped you want to remove clothes from.
 * @param clothesType the clothes slot/type to remove.
 * @param clothesTexture A string determining the clothes texture that will be removed.
 * @param clothesModel A string determining the clothes model that will be removed.
 * @returns This function returns true if the clothes were successfully removed from the ped, false otherwise.
 * @see https://wiki.mtasa.com/wiki/RemovePedClothes
 **/
declare function removePedClothes(thePed: Ped, clothesType: number, clothesTexture?: string, clothesModel?: string): boolean;
