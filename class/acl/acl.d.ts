declare class Acl {
  readonly name: string;

  // static save(): boolean | undefined;
  // static get(aclName: string): Acl | false | undefined;
  // static reload(): boolean;
  // static list(): Acl[] | false | undefined;
  // static hasObjectPermissionTo(element: string | BaseElement, theAction: string, defaultPermission?: boolean): boolean | undefined;

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
