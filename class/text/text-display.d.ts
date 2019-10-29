declare class TextDisplay {
  readonly observers: Player[];

  /**
   * A text display is like a canvas that can contain many items of text.
   * Each display can be seen by multiple observers (players) and each player can see multiple displays.
   * @see https://wiki.mtasa.com/wiki/TextCreateDisplay
   **/
  constructor();

  /**
   * This function destroys a text display and will unlink all the textitems on it. This does not stop the textitems existing, but anyone who was observing the textitems through this display will stop seeing them.
   * @returns Returns true if creation was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/TextDestroyDisplay
   **/
  destroy(): boolean;

  /**
   * This function adds a player as an observer of a textdisplay.
   * This allows the player to see any textitems that the textdisplay contains.
   * @param playerToAdd The player that should observe the textdisplay.
   * @see https://wiki.mtasa.com/wiki/TextDisplayAddObserver
   **/
  addObserver(playerToAdd: Player): void;

  /**
   * This function removes a player observer of a textdisplay.
   * This stops the player from being able to see textitems that the textdisplay contains.
   * @param playerToRemove The player that should be removed from the textdisplay.
   * @returns Return boolean value.
   * @see https://wiki.mtasa.com/wiki/TextDisplayRemoveObserver
   **/
  removeObserver(playerToRemove: Player): boolean;

  /**
   * This function adds a textitem to a textdisplay.
   * This allows any observers of the textdisplay to see the textitem.
   * @param itemToAdd The textitem to add to the display.
   * @see https://wiki.mtasa.com/wiki/TextDisplayAddText
   **/
  addText(itemToAdd: TextItem): void;

  /**
   * This function removes a textitem from a textdisplay.
   * This stops any observers of the textdisplay from being able to see the textitem.
   * @param itemToRemove The textitem to remove from the display.
   * @see https://wiki.mtasa.com/wiki/TextDisplayRemoveText
   **/
  removeText(itemToRemove: TextItem): void;

  /**
   * This function checks if a player can see the specified textdisplay.
   * @param thePlayer The player.
   * @returns Return true if textdisplay is showing, or false if not.
   * @see https://wiki.mtasa.com/wiki/TextDisplayIsObserver
   **/
  isObserver(thePlayer: Player): boolean;

  /**
   * This function can be used to retrieve all the players currently observing a specified textdisplay.
   * @returns Returns an array of players that are observers of the display.
   * @see https://wiki.mtasa.com/wiki/TextDisplayGetObservers
   **/
  getObservers(): Player[];
}
