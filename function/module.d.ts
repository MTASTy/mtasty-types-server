/** @noSelfInFile */

/**
 * This function returns all the currently loaded modules of the server.
 * @returns Returns an array of all the currently loaded modules. If no modules are loaded, the array will be empty.
 * @see https://wiki.mtasa.com/wiki/GetLoadedModules
 **/
declare function getLoadedModules(): string[];

interface ModuleInfo {
  // Module version in format X.XX
  version: string;

  // Module name
  name: string;

  // Module author
  author: string
}

/**
 * This function returns information about the specified module.
 * @param moduleName A string containing the module you wish to get information of e.g. "hashing.dll".
 * @returns Returns an object containing information about module. These keys are present in the object: "version", "name", "author". If invalid name for module is passed, it will return false.
 * @see https://wiki.mtasa.com/wiki/GetModuleInfo
 **/
declare function getModuleInfo(moduleName: string): ModuleInfo | false;
