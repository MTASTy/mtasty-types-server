/** @customConstructor AclGroup */
declare class AclGroup {
  readonly name: string;
  readonly objects: string[];
  readonly aclList: Acl[];

  /**
   * This function is used to get the ACL group with the given name.
   * If you need most of the groups you should consider using aclGroupList instead to get an array containing them all.
   * @param groupName The name to get the ACL group from
   * @returns Returns the ACL group if it could be found. Returns false/undefined if it did not exist or failed for some reason.
   * @see https://wiki.mtasa.com/wiki/AclGetGroup
   **/
  static get(groupName: string): AclGroup | false | undefined;

  /**
   * This function returns an array of all the ACL groups.
   * @returns Returns an array of all the ACL groups if successful, returns an empty array if no ACL groups exist. false/undefined can be returned if this function fails for some other reason.
   * @see https://wiki.mtasa.com/wiki/AclGroupList
   **/
  static list(): AclGroup[] | false | undefined;

  /**
   * This function creates a group in the ACL.
   * An ACL group can contain objects like players and resources.
   * They specify who has access to the ACL's in this group.
   * @param groupName The name of the group to create.
   * @see https://wiki.mtasa.com/wiki/AclCreateGroup
   **/
  constructor(groupName: string);

  /**
   * This function destroys the given ACL group.
   * The destroyed ACL group will no longer be valid.
   * @returns Returns true if the ACL group was successfully deleted.
   * @see https://wiki.mtasa.com/wiki/AclDestroyGroup
   **/
  destroy(): boolean;

  // TODO: need test
  /**
   * This function is used to determine if an object is in a group.
   * - Important note: You must NOT to use this function to limit features to users that belong to specific groups. Instead you MUST use hasObjectPermissionTo. Using this function forces the server owner to name their group a certain way, whereas using hasObjectPermissionTo allows the owner to give permission for whatever features you restrict to whatever groups they have set up in their ACL.
   * @param theObject the name of the object to check.
   * @returns Returns true if the object is in the specified group, false otherwise.
   * @see https://wiki.mtasa.com/wiki/IsObjectInACLGroup
   **/
  doesContainObject(theObject: string): boolean;

  /**
   * This function adds the given ACL to the given ACL group.
   * This makes the resources and players in the given ACL group have access to what's specified in the given ACL.
   * The rights for something in the different ACL's in a group are OR-ed together, which means if one ACL gives access to something, this ACL group will have access to that.
   * @param theACL The ACL to add to the group.
   * @returns Returns true if the ACL could be successfully added to the ACL group, false/undefined if the ACL is already in that group or if something else goes wrong.
   * @see https://wiki.mtasa.com/wiki/AclGroupAddACL
   **/
  addACL(theACL: Acl): boolean | undefined;

  /**
   * This function adds an object to the given ACL group.
   * An object can be a player's account, specified as: 'user.<accountname>'
   * Or a resource, specified as: 'resource.<resourcename>'
   * Objects are specified as strings.
   * The ACL groups work for the user accounts and the resources that are specified in them.
   * @param theObjectName The object string to add to the given ACL.
   * @returns Returns true if the object was successfully added to the ACL, false if it already existed in the list.
   * @see https://wiki.mtasa.com/wiki/AclGroupAddObject
   **/
  addObject(theObjectName: string): boolean;

  /**
   * This function removes the given ACL from the given ACL group.
   * @param theACL The ACL to remove from the given group
   * @returns Returns true if the ACL was successfully removed from the ACL group, false/undefined if it could not be removed for reason.
   * @see https://wiki.mtasa.com/wiki/AclGroupRemoveACL
   **/
  removeACL(theACL: Acl): boolean | undefined;

  /**
   * This function removes the given object from the given ACL group.
   * The object can be a resource or a player.
   * See aclGroupAddObject for more details.
   * @param theObjectString The object to remove from the ACL group
   * @returns Returns true if the object existed in the ACL and could be remoevd, false if it could not be removed for some reason, ie. it did not exist in the given ACL group.
   * @see https://wiki.mtasa.com/wiki/AclGroupRemoveObject
   **/
  removeObject(theObjectString: string): boolean;

  /**
   * This function returns an array over all the ACL's that exist in a given ACL group.
   * @returns Returns an array of the ACL elements in the given ACL group. This array might be empty. Returns false or undefined if it fails for some reason.
   * @see https://wiki.mtasa.com/wiki/AclGroupListACL
   **/
  listACL(): Acl[] | false | undefined;

  /**
   * This function returns an array over all the objects that exist in a given ACL group.
   * These are objects like players and resources.
   * @returns Returns an array of strings in the given ACL group. This array might be empty. Returns false or undefined if it fails for some reason.
   * @see https://wiki.mtasa.com/wiki/AclGroupListObjects
   **/
  listObjects(): string[] | false | undefined;

  /**
   * This function is used to get the name of the given ACL group.
   * @returns Returns the name of the given ACL group as a string if successful, otherwise false or undefined if it fails for some reason.
   * @see https://wiki.mtasa.com/wiki/AclGroupGetName
   **/
  getName(): string | false | undefined;
}
