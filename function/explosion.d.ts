/**
 * Creates an explosion of a certain type at a specified point in the world.
 * If creator is specified, the explosion will occur only in its dimension.
 * @param x a float value that specifies the X world coordinate where the explosion is created at.
 * @param y a float value that specifies the Y world coordinate where the explosion is created at.
 * @param z a float value that specifies the Z world coordinate where the explosion is created at.
 * @param theType a number specifying the explosion type. Valid types are: 0 - 12.
 * @param [creator=undefined] the explosion's simulated creator, the player responsible for it.
 * @returns Returns true if the explosion was created or false if invalid parameters were passed.
 * @see https://wiki.mtasa.com/wiki/CreateExplosion
 **/
declare function createExplosion(x: number, y: number, z: number, theType: number, creator?: Player): boolean;