/**
 * This function plays a frontend sound for the specified player.
 * @param player The player you want the sound to play for.
 * @param sound A whole int specifying the sound id to play. Valid values are: 0 - 20 Selection sounds, 27 - 30 Bullet sounds, 32 - 33 Selection sounds, 34 Radio static, 35 Stop Radio static, 37 - 38 Tick, 40 Selection sounds, 41 - 42 Tick (no ammo), 43 - 45 Race countdown, 46 Repair, 47 White noise static, 48 Stop White noise static, 49 Static short, 101 Countdown/selection
 * @returns Returns true if the sound was successfully played, false otherwise.
 * @see https://wiki.mtasa.com/wiki/PlaySoundFrontEnd
 **/
declare function playSoundFrontEnd(player: Player, sound: number): boolean;