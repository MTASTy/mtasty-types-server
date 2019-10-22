/**
 * This function creates an ACL entry in the Access Control List system with the specified name.
 * @param aclName The name of the ACL entry to add.
 * @returns Returns the created ACL object if successful. Returns false if an ACL of the given name could not be created.
 * @see https://wiki.mtasa.com/wiki/AclCreate
 **/
declare function aclCreate(aclName: string): Acl;

/**
 * This function creates a group in the ACL.
 * An ACL group can contain objects like players and resources.
 * They specify who has access to the ACL's in this group.
 * @param groupName The name of the group to create
 * @returns Returns the pointer to the created aclgroup if successful. Returns false if failed.
 * @see https://wiki.mtasa.com/wiki/AclCreateGroup
 **/
declare function aclCreateGroup(groupName: string): AclGroup | false;

/**
 * This function destroys the ACL passed.
 * The destroyed ACL will no longer be valid.
 * @param theACL The ACL to destroy
 * @returns Returns true if successfully destroyed and false if it could not be deleted (ie. it's not valid).
 * @see https://wiki.mtasa.com/wiki/AclDestroy
 **/
declare function aclDestroy(theACL: Acl): boolean;

/**
 * This function destroys the given ACL group.
 * The destroyed ACL group will no longer be valid.
 * @param aclGroup The aclgroup element to destroy
 * @returns Returns true if the ACL group was successfully deleted, false if it could not be deleted for some reason (ie. invalid argument).
 * @see https://wiki.mtasa.com/wiki/AclDestroyGroup
 **/
declare function aclDestroyGroup(aclGroup: AclGroup): boolean;

/**
 * Get the ACL with the given name.
 * If need to get most of the ACL's, you should consider using aclList to get a table of them all.
 * @param aclName The name to get the ACL belonging to
 * @returns Returns the ACL with that name if it could be retrieved, false/undefined if the ACL does not exist or it fails for some other reason.
 * @see https://wiki.mtasa.com/wiki/AclGet
 **/
declare function aclGet(aclName: string): Acl | false | undefined;

/**
 * This function is used to get the ACL group with the given name.
 * If you need most of the groups you should consider using aclGroupList instead to get a table containing them all.
 * @param groupName The name to get the ACL group from
 * @returns Returns the ACL group if it could be found. Returns false/undefined if it did not exist or failed for some reason.
 * @see https://wiki.mtasa.com/wiki/AclGetGroup
 **/
declare function aclGetGroup(groupName: string): AclGroup | false | undefined;

/**
 * Get the name of given ACL.
 * @param theAcl ACL
 * @returns Returns the name of the given ACL as a string if successful. Returns false/undefined if unsuccessful, ie the ACL is invalid.
 * @see https://wiki.mtasa.com/wiki/AclGetName
 **/
declare function aclGetName(theAcl: Acl): string | false | undefined;

/**
 * This function returns whether the access for the given right is set to true or false in the ACL.
 * @param theAcl The ACL to get the right from
 * @param rightName The right name to return the access value of.
 * @returns Returns true or false if the ACL gives access or not to the given function. Returns undefined if it failed for some reason, e.g. an invalid ACL was specified or the right specified does not exist in the ACL.
 * @see https://wiki.mtasa.com/wiki/AclGetRight
 **/
declare function aclGetRight(theAcl: Acl, rightName: string): boolean | undefined;

/**
 * This function adds the given ACL to the given ACL group.
 * This makes the resources and players in the given ACL group have access to what's specified in the given ACL.
 * The rights for something in the different ACL's in a group are OR-ed together, which means if one ACL gives access to something, this ACL group will have access to that.
 * @param theGroup The group to add the ACL to
 * @param theACL The ACL to add to the group
 * @returns Returns true if the ACL could be successfully added to the ACL group, false/undefined if either of the elements are invalid, the ACL is already in that group or if something else goes wrong.
 * @see https://wiki.mtasa.com/wiki/AclGroupAddACL
 **/
declare function aclGroupAddACL(theGroup: AclGroup, theACL: Acl): boolean | undefined;

/**
 * This function adds an object to the given ACL group.
 * An object can be a player's account, specified as: 'user.<accountname>'
 * Or a resource, specified as: 'resource.<resourcename>'
 * Objects are specified as strings.
 * The ACL groups work for the user accounts and the resources that are specified in them.
 * @param theGroup The group to add the object name string too.
 * @param theObjectName The object string to add to the given ACL.
 * @returns Returns true if the object was successfully added to the ACL, false if it already existed in the list.
 * @see https://wiki.mtasa.com/wiki/AclGroupAddObject
 **/
declare function aclGroupAddObject(theGroup: AclGroup, theObjectName: string): boolean;

/**
 * This function is used to get the name of the given ACL group.
 * @param aclGroup The ACL group to get the name of
 * @returns Returns the name of the given ACL group as a string if successful, otherwise false or undefined if the aclGroup is invalid or it fails for some other reason.
 * @see https://wiki.mtasa.com/wiki/AclGroupGetName
 **/
declare function aclGroupGetName(aclGroup: AclGroup): string | false | undefined;

/**
 * This function returns a table of all the ACL groups.
 * @returns Returns a table of all the ACL groups if successful, returns an empty table if no ACL groups exist. false/undefined can be returned if this function fails for some other reason.
 * @see https://wiki.mtasa.com/wiki/AclGroupList
 **/
declare function aclGroupList(): object | false | undefined;

/**
 * This function returns a table over all the ACL's that exist in a given ACL group.
 * @param theGroup The ACL group to get the ACL elements from
 * @returns Returns a table of the ACL elements in the given ACL group. This table might be empty. Returns false or undefined if theGroup is invalid or it fails for some other reason.
 * @see https://wiki.mtasa.com/wiki/AclGroupListACL
 **/
declare function aclGroupListACL(theGroup: AclGroup): Acl[] | false | undefined;

/**
 * This function returns a table over all the objects that exist in a given ACL group.
 * These are objects like players and resources.
 * @param theGroup The ACL group to get the objects from
 * @returns Returns a table of strings in the given ACL group. This table might be empty. Returns false or undefined if theGroup is invalid or it fails for some other reason.
 * @see https://wiki.mtasa.com/wiki/AclGroupListObjects
 **/
declare function aclGroupListObjects(theGroup: AclGroup): string[] | false | undefined;

/**
 * This function removes the given ACL from the given ACL group.
 * @param theGroup The group to remove the given ACL from
 * @param theACL The ACL to remove from the given group
 * @returns Returns true if the ACL was successfully removed from the ACL group, false/undefined if it could not be removed for some reason, ie. either of the elements were invalid.
 * @see https://wiki.mtasa.com/wiki/AclGroupRemoveACL
 **/
declare function aclGroupRemoveACL(theGroup: AclGroup, theACL: Acl): boolean | undefined;

/**
 * This function removes the given object from the given ACL group.
 * The object can be a resource or a player.
 * See aclGroupAddObject for more details.
 * @param theGroup The ACL group to remove the object string from
 * @param theObjectString The object to remove from the ACL group
 * @returns Returns true if the object existed in the ACL and could be remoevd, false if it could not be removed for some reason, ie. it did not exist in the given ACL group.
 * @see https://wiki.mtasa.com/wiki/AclGroupRemoveObject
 **/
declare function aclGroupRemoveObject(theGroup: AclGroup, theObjectString: string): boolean | undefined;

/**
 * This function returns a list of all the ACLs.
 * @returns Returns a table of all the ACLs. This table can be empty if no ACLs exist. It can also return false/undefined if it failed for some reason.
 * @see https://wiki.mtasa.com/wiki/AclList
 **/
declare function aclList(): Acl[] | false | undefined;

/**
 * This function returns a table of all the rights that a given ACL has.
 * @param theACL The ACL to get the rights from
 * @param allowedType The allowed right type. Possible values are general, function, resource and command
 * @returns Returns a table over the rights as strings in the given ACL. This table might be empty. Returns false or undefined if theACL is invalid or it fails for some other reason.
 * @see https://wiki.mtasa.com/wiki/AclListRights
 **/
declare function aclListRights(theACL: Acl, allowedType: string): string[] | false | undefined;

/**
 * This function reloads the ACL's and the ACL groups from the ACL XML file.
 * All ACL and ACL group elements are invalid after a call to this and should not be used anymore.
 * @returns Returns true if the XML was successfully reloaded from the file, false or undefined if the XML was invalid, didn't exist or could not be loaded for some other reason.
 * @see https://wiki.mtasa.com/wiki/AclReload
 **/
declare function aclReload(): boolean;

/**
 * This function removes the given right (string) from the given ACL.
 * @param theAcl The ACL to remove the right from
 * @param rightName The ACL name to remove from the right from
 * @returns Returns true if the given right was successfully removed from the given ACL, false or undefined if it could not be removed for some reason, ie. it didn't exist in the ACL.
 * @see https://wiki.mtasa.com/wiki/AclRemoveRight
 **/
declare function aclRemoveRight(theAcl: Acl, rightName: string): boolean | undefined;

/**
 * The ACL XML file is automatically saved whenever the ACL is modified, but the automatic save can be delayed by up to 10 seconds for performance reasons.
 * Calling this function will force an immediate save.
 * @returns Returns true if the ACL was successfully changed, false or undefined if it could not be saved for some reason, ie. file in use.
 * @see https://wiki.mtasa.com/wiki/AclSave
 **/
declare function aclSave(): boolean | undefined;

/**
 * This functions changes or adds the given right in the given ACL.
 * The access can be true or false and specifies whether the ACL gives access to the right or not.
 * @param theAcl The ACL to change the right of
 * @param rightName The right to add/change the access property of
 * @param hasAccess Whether the access should be set to true or false
 * @returns Returns true if the access was successfully changed, false or undefined if it failed for some reason, ie. invalid ACL or the rightname is invalid.
 * @see https://wiki.mtasa.com/wiki/AclSetRight
 **/
declare function aclSetRight(theAcl: Acl, rightName: string, hasAccess: boolean): boolean | undefined;

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
declare function hasObjectPermissionTo(element: string | Element, theAction: string, defaultPermission?: boolean): boolean | undefined;

/**
 * This function is used to determine if an object is in a group.
 * - Important note: You must NOT to use this function to limit features to users that belong to specific groups. Instead you MUST use hasObjectPermissionTo. Using this function forces the server owner to name their group a certain way, whereas using hasObjectPermissionTo allows the owner to give permission for whatever features you restrict to whatever groups they have set up in their ACL.
 * @param theObject the name of the object to check.
 * @param theGroup the ACL group pointer of the group from which the object should be found.
 * @returns Returns true if the object is in the specified group, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsObjectInACLGroup
 **/
declare function isObjectInACLGroup(theObject: string, theGroup: AclGroup): boolean | undefined;