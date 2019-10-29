declare class Resource {
  readonly dynamicElementRoot: Element | false;
  readonly exportedFunctions: string[];
  readonly organizationalPath: string;
  readonly lastStartTime: number;
  readonly aclRequests: Request[];
  readonly loadTime: number;
  name: string;
  readonly rootElement: Element;
  state: ResourceState;
  readonly archived: boolean;
  readonly loadFailureReason: string;

  // static addConfig(filePath: string, filetype?: string): XML | false;
  // static addMap(filePath: string, dimension?: number): XML | false;
  // static getConfig(filePath: string): XML | false;

  // static getFromName(resourceName: string): Resource | false;
  // static getAll(): Resource[];
  // static getThis(): Resource;
  // static refresh(refreshAll?: boolean, targetResource?: Resource): boolean;
  // static rename(resourceName: string, newResourceName: string, organizationalPath?: string): boolean;
  // static delete(resourceName: string): boolean;
  // static call(...arguments: any[]): any;

  /**
   * This function creates an new, empty resource.
   * This creates a directory matching the name you specify on disk, then creates an empty meta.xml file with a element in it.
   * @param resourceName The name of the new resource.This should be a valid file name.It's recommended that you do not have spaces or non-ASCII characters in resource names.
   * @param organizationalDir A string containing the path where the resource should be created (e.g. "[gamemodes]/[amx]").
   * @see https://wiki.mtasa.com/wiki/CreateResource
   **/
  constructor(resourceName: string, organizationalDir?: string);

  /**
   * This function starts a resource either persistently or as a dependency of the current resource.
   * If you start the resource persistently, the resource will run until stopped either using stopResource or by the server admin.
   * A resource started as a dependency will stop when your resource stops, if no other resources have it as a dependency.
   * This is the same effect as using an include in your meta.xml file.
   * The function also allows you to specify a number of boolean options.
   * These allow you to disable the loading of various aspects of the resource.
   * This is generally useful for editors rather than for actual gamemodes.
   * It could also be used as a way to preview a resource before enabling the scripting aspects, though this could produce unreliable results.
   * There is no way for a resource to tell if it is being run with any of these booleans set.
   * @param [persistent=false] A boolean specifying if the resource should continue to run even after this resource has been stopped or not. If this is true then the resource will run until another resource or user terminates it or the server shuts down.
   * @param [startIncludedResources=true] A boolean specifying if the resource's included/dependant resources will be started.
   * @param [loadServerConfigs=true] A boolean specifying if server side config (XML) files should be loaded with the resource.
   * @param [loadMaps=true] A boolean specifying if any .map files will be started with the resource.
   * @param [loadServerScripts=true] A boolean specifying if server side script files should be started alongside the resource.
   * @param [loadHTML=true] A boolean specifying if HTML files should be started alongside the resource.
   * @param [loadClientConfigs=true] A boolean specifying if client configs should be loaded alongside the resource.
   * @param [loadClientScripts=true] A boolean specifying if client scripts should be loaded and started alongside the resource.
   * @param [loadFiles=true] A boolean specifying if client-side files should be loaded alongside the resource.
   * @returns Returns true if the resource has been started successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/StartResource
   **/
  start(persistent?: boolean, startIncludedResources?: boolean, loadServerConfigs?: boolean, loadMaps?: boolean, loadServerScripts?: boolean, loadHTML?: boolean, loadClientConfigs?: boolean, loadClientScripts?: boolean, loadFiles?: boolean): boolean;

  /**
   * This function stops a running resource.
   * - Note: This function does not stop the resource immediately, so don't expect that it starts stopping until the onResourceStop event for that resource is triggered. This happens after the scripts are done executing for this server frame.
   * @returns Returns true if the resource was stopped, false if the stopping failed, or an invalid resource was passed.
   * @see https://wiki.mtasa.com/wiki/StopResource
   **/
  stop(): boolean;

  /**
   * This function copies a specified resource with a new name.
   * @param newResourceName the name that the copied resource will receive.
   * @param organizationalDir A string containing the path where the resource should be copied to (e.g. "[gamemodes]/[amx]").
   * @returns Returns the resource element of the copy. Returns false if the arguments are incorrect.
   * @see https://wiki.mtasa.com/wiki/CopyResource
   **/
  copy(newResourceName: string, organizationalDir?: string): Resource | false;

  /**
   * This function removes a file from the resource.
   * @param fileName The filename what you wan't to delete.
   * @returns Returns true if file was deleted, otherwise false if the resource is in use or the file doesn't exist.
   * @see https://wiki.mtasa.com/wiki/RemoveResourceFile
   **/
  removeFile(fileName: string): boolean;

  /**
   * This function restarts a running resource.
   * Restarting will destroy all the elements that the resource has created (as stopping the resource does).
   * - Note: This function does not restart the resource immediately. Restarts are queued up until the end of the server's frame to ensure that they occur in the correct order (and that dependent resources can start and stop correctly). The resource being restarted will have an onResourceStop event triggered and the restarted instance will receive an onResourceStart event. Remember that the element and resource variables will be invalidated during the restart, though of course, the resource's name will not.
   * @param [persistent=false] Unused
   * @param [configs=true] Reload configs?
   * @param [maps=true] Reload maps?
   * @param [scripts=true] Reload (server) scripts?
   * @param [html=true] Reload html files (for resource web access)?
   * @param [clientConfigs=true] Reload client configs?
   * @param [clientScripts=true] Reload client scripts?
   * @param [clientFiles=true] Reload files?
   * @returns Returns true if the resource was restarted, false if the resource wasn't running, or an invalid resource was passed.
   * @see https://wiki.mtasa.com/wiki/RestartResource
   **/
  restart(persistent?: boolean, configs?: boolean, maps?: boolean, scripts?: boolean, html?: boolean, clientConfigs?: boolean, clientScripts?: boolean, clientFiles?: boolean): boolean;

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
   * @param theAction The action to test if the given object has access to. Ie. "function.kickPlayer".
   * @param [defaultPermission=true] The default permission if none is specified in either of the groups the given object is a member of. If this is left to true, the given object will have permissions to perform the action unless the opposite is explicitly specified in the ACL.If false, the action will be denied by default unless explicitly approved by the Access Control List.
   * @returns Returns true if the given object has permission to perform the given action, false otherwise. Returns undefined if the function failed because of bad arguments.
   * @see https://wiki.mtasa.com/wiki/HasObjectPermissionTo
   **/
  hasPermissionTo(theAction: string, defaultPermission?: boolean): boolean | undefined;

  /**
   * This function changes the access for one ACL request of the given resource.
   * - Note: This function is protected by default and must be explicitly allowed in the server ACL.
   * @param rightName a string with the name of the right to set the access for. This has to match an existing ACL request.
   * @param access a boolean value setting the access. True is for allow, and false for deny.
   * @param byWho a string value to identity who is changing the setting.
   * @returns Returns true if the resource was stopped, false if the stopping failed, or an invalid resource was passed.
   * @see https://wiki.mtasa.com/wiki/UpdateResourceACLRequest
   **/
  updateACLRequest(rightName: string, access: boolean, byWho?: string): boolean;

  /**
   * This function sets the value of any attribute in a resource info tag.
   * - Note: This function requires the resource to have 'ModifyOtherObjects' ACL right.
   * @param attribute the name of the attribute that is to be set.
   * @param value the value of this attribute.
   * @returns Returns true if the info was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/SetResourceInfo
   **/
  setInfo(attribute: string, value: string): boolean;

  /**
   * This function retrieves the dynamic element root of a specified resource.
   * The dynamic element root is the parent of elements that are created by scripts (e.g. with createObject) unless they specify a different parent.
   * @returns Returns an element of the resource's dynamic element root if the resource specified was valid and active (currently running), false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetResourceDynamicElementRoot
   **/
  getDynamicElementRoot(): Element | false;

  /**
   * This function retrieves a resource's root element.
   * The resource's root element is the element in the element tree which is the parent of all elements that belong to a particular resource (except for elements specifically created elsewhere).
   * You can attach event handlers to this element to easily capture events that originate from your resource (and global events that originate from the root element).
   * - Note: every resource has a predefined global variable called resourceRoot whose value is the root element of that resource.
   * @returns Returns an element representing the resource's root.
   * @see https://wiki.mtasa.com/wiki/GetResourceRootElement
   **/
  getResourceRootElement(): Element;

  /**
   * Returns an array containing the names of the functions that a resource exports.
   * It will return the exports of the current resource if there is no argument passed in.
   * @returns Returns an array of function names if successful.
   * @see https://wiki.mtasa.com/wiki/GetResourceExportedFunctions
   **/
  getExportedFunctions(): string[];

  /**
   * This function returns the organizational file path (e.g. [admin]) of a resource.
   * @returns Returns the organizational path of the resource.
   * @see https://wiki.mtasa.com/wiki/GetResourceOrganizationalPath
   **/
  getOrganizationalPath(): string;

  /**
   * Used to check the last starting time and date of a resource.
   * @returns If successful, returns the UNIX timestamp when the resource was last started, or the string "never" if the resource has not been started yet, otherwise false. Use in conjunction with getRealTime in order to retrieve detailed information.
   * @see https://wiki.mtasa.com/wiki/GetResourceLastStartTime
   **/
  getLastStartTime(): number;

  /**
   * Gets the date and time at which a resource was last loaded in the server.
   * @returns If successful, returns the UNIX timestamp when the resource was loaded. Use in conjunction with getRealTime in order to retrieve detailed information.
   * @see https://wiki.mtasa.com/wiki/GetResourceLoadTime
   **/
  getLoadTime(): number;

  /**
   * This function retrieves the value of any attribute in a resource info tag.
   * @param attribute the name of the attribute we want info about.
   * @returns Returns a string with the attribute value if it exists, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetResourceInfo
   **/
  getInfo(attribute: string): string | false;

  /**
   * This function retrieves the reason why a resource failed to start.
   * @returns If the resource failed to load, returns a string with the failure reason in it. If it loaded successfully, returns an empty string.
   * @see https://wiki.mtasa.com/wiki/GetResourceLoadFailureReason
   **/
  getLoadFailureReason(): string;

  /**
   * This function retrieves the root element of a certain map in a specified resource.
   * @param mapName name of the maps which root element we want to retrieve, file extension is required.
   * @returns Returns an the resource's map root element if the map exists and resource specified was valid and active (currently running), false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetResourceMapRootElement
   **/
  getMapRootElement(mapName: string): Element | false;

  /**
   * This function gets the name of the specified resource.
   * @returns Returns a string with the resource name in it.
   * @see https://wiki.mtasa.com/wiki/GetResourceName
   **/
  getName(): string | false;

  /**
   * This function returns the state of a given resource.
   * @returns If successful returns a string with the resource state in it.
   * @see https://wiki.mtasa.com/wiki/GetResourceState
   **/
  getState(): ResourceState;

  /**
   * This function retrieves the ACL request section from the meta.xml file of the given resource.
   * @returns Returns an array with the ACL requests for the given resource. If no ACL requests will return an empty array.
   * @see https://wiki.multitheftauto.com/wiki/GetResourceACLRequests
   **/
  getACLRequests(): Request[];

  /**
   * Checks whether a resource is currently archived (running from within a ZIP file).
   * @returns Returns true if a resource is archived, false if it is not archived.
   * @see https://wiki.mtasa.com/wiki/IsResourceArchived
   **/
  isArchived(): boolean;
}
