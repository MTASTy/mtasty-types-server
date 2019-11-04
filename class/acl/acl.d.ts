/** @customConstructor Acl */
declare class Acl {
  readonly name: string;

  /**
   * The ACL XML file is automatically saved whenever the ACL is modified, but the automatic save can be delayed by up to 10 seconds for performance reasons.
   * Calling this function will force an immediate save.
   * @returns Returns true if the ACL was successfully changed, false or undefined if it could not be saved for some reason, ie. file in use.
   * @see https://wiki.mtasa.com/wiki/AclSave
   **/
  static save(): boolean | undefined;

  /**
   * Get the ACL with the given name.
   * If need to get most of the ACL's, you should consider using aclList to get an array of them all.
   * @param aclName The name to get the ACL belonging to
   * @returns Returns the ACL with that name if it could be retrieved, false/undefined if the ACL does not exist or it fails for some other reason.
   * @see https://wiki.mtasa.com/wiki/AclGet
   **/
  static get(aclName: string): Acl | false | undefined;

  /**
   * This function reloads the ACL's and the ACL groups from the ACL XML file.
   * All ACL and ACL group elements are invalid after a call to this and should not be used anymore.
   * @returns Returns true if the XML was successfully reloaded from the file, false or undefined if the XML was invalid, didn't exist or could not be loaded for some other reason.
   * @see https://wiki.mtasa.com/wiki/AclReload
   **/
  static reload(): boolean;

  /**
   * This function returns a list of all the ACLs.
   * @returns Returns an array of all the ACLs. This array can be empty if no ACLs exist. It can also return false/undefined if it failed for some reason.
   * @see https://wiki.mtasa.com/wiki/AclList
   **/
  static list(): Acl[] | false | undefined;

  /**
   * This function returns whether or not the given object has access to perform the given action.
   * Scripts frequently wish to limit access to features to particular users.
   * The naïve way to do this would be to check if the player who is attempting to perform an action is in a particular group (usually the Admin group).
   * The main issue with doing this is that the Admin group is not guaranteed to exist.
   * It also doesn't give the server admin any flexibility.
   * He might want to allow his 'moderators' access to the function you're limiting access to, or he may want it disabled entirely.
   * This is where using the ACL properly comes in, and luckily this is very easy.
   * It all comes down to using this function.
   * This, somewhat confusingly named function lets you check if an ACL object (a player or a resource) has a particular ACL right.
   * In this case, we just care about players.
   * So, first of all, think of a name for your 'right'.
   * Let's say we want a private area only certain people can go in, we'll call our right accessPrivateArea.
   * Notice that we've named the right using resource.YourResourceName.accessPrivateArea - this is just for neatness, so that the admin knows what resource the right belongs to. It's strongly advised you follow this convention.
   * The false argument specifies the 'defaultPermission', false indicating that if the user hasn't had the right allowed or dissallowed (i.e. the admin hasn't added it to the config), that it should default to being not allowed.
   * The only downside of using this method is that the admin has to modify his config.
   * The upsides are that the admin has much more control and your script will work for any server, however the admin has configured it.
   * - Note: Only certain action names work. This function seems to return undefined and output a bad argument error when checking if an object has rights for an action which doesn't start with function., command. or resource. keywords.
   * @param element string or Element
   * @param theAction The action to test if the given object has access to. Ie. "function.kickPlayer".
   * @param [defaultPermission=true] The default permission if none is specified in either of the groups the given object is a member of. If this is left to true, the given object will have permissions to perform the action unless the opposite is explicitly specified in the ACL.If false, the action will be denied by default unless explicitly approved by the Access Control List.
   * @returns Returns true if the given object has permission to perform the given action, false otherwise. Returns undefined if the function failed because of bad arguments.
   * @see https://wiki.mtasa.com/wiki/HasObjectPermissionTo
   **/
  static hasObjectPermissionTo(element: string | BaseElement, theAction: string, defaultPermission?: boolean): boolean | undefined;

  /**
   * This function creates an ACL entry in the Access Control List system with the specified name.
   * @param aclName The name of the ACL entry to add.
   * @see https://wiki.mtasa.com/wiki/AclCreate
   **/
  constructor(aclName: string);

  /**
   * This function destroys the ACL passed.
   * The destroyed ACL will no longer be valid.
   * @returns Returns true if successfully destroyed.
   * @see https://wiki.mtasa.com/wiki/AclDestroy
   **/
  destroy(): boolean;

  /**
   * This function returns an array of all the rights that a given ACL has.
   * @param allowedType The allowed right type. Possible values are general, function, resource and command
   * @returns Returns an array over the rights as strings in the given ACL. This array might be empty. Returns false or undefined if it fails for some other reason.
   * @see https://wiki.mtasa.com/wiki/AclListRights
   **/
  listRights(allowedType: string): string[] | false | undefined;

  /**
   * This function removes the given right (string) from the given ACL.
   * @param rightName The ACL name to remove from the right from
   * @returns Returns true if the given right was successfully removed from the given ACL, false or undefined if it could not be removed for some reason, ie. it didn't exist in the ACL.
   * @see https://wiki.mtasa.com/wiki/AclRemoveRight
   **/
  removeRight(rightName: string): boolean | undefined;

  /**
   * Get the name of given ACL.
   * @returns Returns the name of the given ACL as a string if successful.
   * @see https://wiki.mtasa.com/wiki/AclGetName
   **/
  getName(): string;

  /**
   * This function returns whether the access for the given right is set to true or false in the ACL.
   * @param rightName The right name to return the access value of.
   * @returns Returns true or false if the ACL gives access or not to the given function. Returns undefined if it failed for some reason, e.g. the right specified does not exist in the ACL.
   * @see https://wiki.mtasa.com/wiki/AclGetRight
   **/
  getRight(rightName: string): boolean | undefined;

  /**
   * This functions changes or adds the given right in the given ACL.
   * The access can be true or false and specifies whether the ACL gives access to the right or not.
   * @param rightName The right to add/change the access property of
   * @param hasAccess Whether the access should be set to true or false
   * @returns Returns true if the access was successfully changed, false or undefined if it failed for some reason, ie. the rightname is invalid.
   * @see https://wiki.mtasa.com/wiki/AclSetRight
   **/
  setRight(rightName: string, hasAccess: boolean): boolean | undefined;
}
