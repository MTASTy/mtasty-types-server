/**
 * This function adds a new empty config file to an existing resource.
 * @param filePath The filepath of the file to be created in the following format ":resourceName/path". 'resourceName' is the name of the resource the file is in, and 'path' is the path from the root directory of the resource to the file.
 * @param [filetype=server] a string indicating whether the file is serverside ("server") or clientside ("client").
 * @returns Returns the new config's root xmlnode if the config was added successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AddResourceConfig
 **/
declare function addResourceConfig(filePath: string, filetype?: string): XML | false;

/**
 * This function adds a new empty mapfile to an existing resource.
 * - Note: You can't add a map to a running resource.
 * @param filePath The filepath of the resource map in the following format
 * @param [dimension=0] the dimension in which the map's objects will be placed.
 * @returns Returns the new map's root xmlnode if the map was added successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AddResourceMap
 **/
declare function addResourceMap(filePath: string, dimension?: number): XML | false;

/**
 * This function is used to call a function from another resource (which must be running).
 * The function which you wish to call must first be exported within the resource's meta.
 * You cannot call a server function from the client or vice versa. See triggerServerEvent and triggerClientEvent for possibilities to do that.
 * - Note: Calls may incur a performance overhead - they are not equivalent in performance to calling functions in the same resource.
 * - Important note: The sourceResource and sourceResourceRoot "hidden" variables are available even if you use exports.*:*
 * @param arguments Any arguments you may want to pass to the function when it is called.Any number of arguments of can be specified, each being passed to the designated function.
 * @returns Returns anything that the designated function has returned, if the function has no return, undefined is returned. If the function does not exist, is not exported, or the call was not successful it will return false.Returns anything that the designated function has returned, if the function has no return, undefined is returned. If the function does not exist, is not exported, or the call was not successful it will return false.
 * @see https://wiki.mtasa.com/wiki/Call
 **/
declare function call(...arguments: any[]): any;

/**
 * This function allows you to call functions that have been exported with HTTP access by other MTA servers.
 * The calls are asynchronous so you do not get an immediate result from the call, instead a callback function you specify is called when the call returns.
 * You can also use this function to access a standard web page on a server you own by specifying the URL.
 * The arguments you specify to callRemote are passed to the web page using HTTP POST as a JSON array.
 * This will always have an array as the root element.
 * The page must return a JSON formated *array* in the page's body with the results of the call (or an empty array if there are no results).
 * You can use the PHP SDK to create PHP pages that can be called by this function.
 * See the PHP SDK page for an example.
 * In addition, it is possible to use this function to get information about a resource in the MTA community, besides other things.
 * Check out the Community Resources article.
 * In the case when the call fails, a string containing "ERROR" followed by an integer containing the error reason will be passed to the callback function.
 * The reason for failure will be similar to errors found with websites - file not found, server not found and timeouts.
 * @param URL A full URL in the format http://hostname/path/file.ext. A port can be specified with a colon followed by a port number appended to the hostname.
 * @param [queueName=default] Name of the queue to use. Any name can be used. If not set, the queue name is "default". Requests in the same queue are processed in order, one at a time.
 * @param [connectionAttempts=10] Number of times to retry if the remote host does not respond. In the case of a non-responding remote server, each connection attempt will timeout after 6 seconds. Therefore, the default setting of 10 connection attempts means it will be 60 seconds before your script gets a callback about the error. Reducing this value to 2 for example, will decrease that period to 12 seconds.
 * @param [connectTimeout=10000] Number of milliseconds each connection attempt will take before timing out.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(URL: string, queueName: string, connectionAttempts: number, connectTimeout: number, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * You can use this function to access a standard web page on a server you own by specifying the URL.
 * @param URL A full URL in the format http://hostname/path/file.ext. A port can be specified with a colon followed by a port number appended to the hostname.
 * @param [connectionAttempts=10] Number of times to retry if the remote host does not respond. In the case of a non-responding remote server, each connection attempt will timeout after 6 seconds. Therefore, the default setting of 10 connection attempts means it will be 60 seconds before your script gets a callback about the error. Reducing this value to 2 for example, will decrease that period to 12 seconds.
 * @param [connectTimeout=10000] Number of milliseconds each connection attempt will take before timing out.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(URL: string, connectionAttempts: number, connectTimeout: number, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * You can use this function to access a standard web page on a server you own by specifying the URL.
 * @param URL A full URL in the format http://hostname/path/file.ext. A port can be specified with a colon followed by a port number appended to the hostname.
 * @param [queueName=default] Name of the queue to use. Any name can be used. If not set, the queue name is "default". Requests in the same queue are processed in order, one at a time.
 * @param [connectTimeout=10000] Number of milliseconds each connection attempt will take before timing out.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(URL: string, queueName: string, connectTimeout: number, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * You can use this function to access a standard web page on a server you own by specifying the URL.
 * @param URL A full URL in the format http://hostname/path/file.ext. A port can be specified with a colon followed by a port number appended to the hostname.
 * @param [queueName=default] Name of the queue to use. Any name can be used. If not set, the queue name is "default". Requests in the same queue are processed in order, one at a time.
 * @param [connectionAttempts=10] Number of times to retry if the remote host does not respond. In the case of a non-responding remote server, each connection attempt will timeout after 6 seconds. Therefore, the default setting of 10 connection attempts means it will be 60 seconds before your script gets a callback about the error. Reducing this value to 2 for example, will decrease that period to 12 seconds.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(URL: string, queueName: string, connectionAttempts: number, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * You can use this function to access a standard web page on a server you own by specifying the URL.
 * @param URL A full URL in the format http://hostname/path/file.ext. A port can be specified with a colon followed by a port number appended to the hostname.
 * @param [connectTimeout=10000] Number of milliseconds each connection attempt will take before timing out.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(URL: string, connectTimeout: number, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * You can use this function to access a standard web page on a server you own by specifying the URL.
 * @param URL A full URL in the format http://hostname/path/file.ext. A port can be specified with a colon followed by a port number appended to the hostname.
 * @param [queueName=default] Name of the queue to use. Any name can be used. If not set, the queue name is "default". Requests in the same queue are processed in order, one at a time.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(URL: string, queueName: string, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * You can use this function to access a standard web page on a server you own by specifying the URL.
 * @param URL A full URL in the format http://hostname/path/file.ext. A port can be specified with a colon followed by a port number appended to the hostname.
 * @param [connectionAttempts=10] Number of times to retry if the remote host does not respond. In the case of a non-responding remote server, each connection attempt will timeout after 6 seconds. Therefore, the default setting of 10 connection attempts means it will be 60 seconds before your script gets a callback about the error. Reducing this value to 2 for example, will decrease that period to 12 seconds.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(URL: string, connectionAttempts: number, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * You can use this function to access a standard web page on a server you own by specifying the URL.
 * @param URL A full URL in the format http://hostname/path/file.ext. A port can be specified with a colon followed by a port number appended to the hostname.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(URL: string, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * This function allows you to call functions that have been exported with HTTP access by other MTA servers.
 * The calls are asynchronous so you do not get an immediate result from the call, instead a callback function you specify is called when the call returns.
 * You can also use this function to access a standard web page on a server you own by specifying the URL.
 * The arguments you specify to callRemote are passed to the web page using HTTP POST as a JSON array.
 * This will always have an array as the root element.
 * The page must return a JSON formated *array* in the page's body with the results of the call (or an empty array if there are no results).
 * You can use the PHP SDK to create PHP pages that can be called by this function.
 * See the PHP SDK page for an example.
 * In addition, it is possible to use this function to get information about a resource in the MTA community, besides other things.
 * Check out the Community Resources article.
 * In the case when the call fails, a string containing "ERROR" followed by an integer containing the error reason will be passed to the callback function.
 * The reason for failure will be similar to errors found with websites - file not found, server not found and timeouts.
 * @param host This is a host name - including the HTTP port - of the server you wish to connect to.
 * @param [queueName=default] Name of the queue to use. Any name can be used. If not set, the queue name is "default". Requests in the same queue are processed in order, one at a time.
 * @param [connectionAttempts=10] Number of times to retry if the remote host does not respond. In the case of a non-responding remote server, each connection attempt will timeout after 6 seconds. Therefore, the default setting of 10 connection attempts means it will be 60 seconds before your script gets a callback about the error. Reducing this value to 2 for example, will decrease that period to 12 seconds.
 * @param [connectTimeout=10000] Number of milliseconds each connection attempt will take before timing out.
 * @param resourceName This is a name of the resource that contains the exported function you want to call.
 * @param functionName This is a string with the name of the function which you want to call.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(host: string, queueName: string, connectionAttempts: number, connectTimeout: number, resourceName: string, functionName: string, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * This function allows you to call functions that have been exported with HTTP access by other MTA servers.
 * @param host This is a host name - including the HTTP port - of the server you wish to connect to.
 * @param [queueName=default] Name of the queue to use. Any name can be used. If not set, the queue name is "default". Requests in the same queue are processed in order, one at a time.
 * @param [connectTimeout=10000] Number of milliseconds each connection attempt will take before timing out.
 * @param resourceName This is a name of the resource that contains the exported function you want to call.
 * @param functionName This is a string with the name of the function which you want to call.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(host: string, queueName: string, connectTimeout: number, resourceName: string, functionName: string, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * This function allows you to call functions that have been exported with HTTP access by other MTA servers.
 * @param host This is a host name - including the HTTP port - of the server you wish to connect to.
 * @param [queueName=default] Name of the queue to use. Any name can be used. If not set, the queue name is "default". Requests in the same queue are processed in order, one at a time.
 * @param [connectionAttempts=10] Number of times to retry if the remote host does not respond. In the case of a non-responding remote server, each connection attempt will timeout after 6 seconds. Therefore, the default setting of 10 connection attempts means it will be 60 seconds before your script gets a callback about the error. Reducing this value to 2 for example, will decrease that period to 12 seconds.
 * @param resourceName This is a name of the resource that contains the exported function you want to call.
 * @param functionName This is a string with the name of the function which you want to call.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(host: string, queueName: string, connectionAttempts: number, resourceName: string, functionName: string, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * This function allows you to call functions that have been exported with HTTP access by other MTA servers.
 * @param host This is a host name - including the HTTP port - of the server you wish to connect to.
 * @param [queueName=default] Name of the queue to use. Any name can be used. If not set, the queue name is "default". Requests in the same queue are processed in order, one at a time.
 * @param resourceName This is a name of the resource that contains the exported function you want to call.
 * @param functionName This is a string with the name of the function which you want to call.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(host: string, queueName: string, resourceName: string, functionName: string, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * This function allows you to call functions that have been exported with HTTP access by other MTA servers.
 * @param host This is a host name - including the HTTP port - of the server you wish to connect to.
 * @param [connectionAttempts=10] Number of times to retry if the remote host does not respond. In the case of a non-responding remote server, each connection attempt will timeout after 6 seconds. Therefore, the default setting of 10 connection attempts means it will be 60 seconds before your script gets a callback about the error. Reducing this value to 2 for example, will decrease that period to 12 seconds.
 * @param [connectTimeout=10000] Number of milliseconds each connection attempt will take before timing out.
 * @param resourceName This is a name of the resource that contains the exported function you want to call.
 * @param functionName This is a string with the name of the function which you want to call.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(host: string, connectionAttempts: number, connectTimeout: number, resourceName: string, functionName: string, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * This function allows you to call functions that have been exported with HTTP access by other MTA servers.
 * @param host This is a host name - including the HTTP port - of the server you wish to connect to.
 * @param [connectTimeout=10000] Number of milliseconds each connection attempt will take before timing out.
 * @param resourceName This is a name of the resource that contains the exported function you want to call.
 * @param functionName This is a string with the name of the function which you want to call.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(host: string, connectTimeout: number, resourceName: string, functionName: string, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * This function allows you to call functions that have been exported with HTTP access by other MTA servers.
 * @param host This is a host name - including the HTTP port - of the server you wish to connect to.
 * @param [connectionAttempts=10] Number of times to retry if the remote host does not respond. In the case of a non-responding remote server, each connection attempt will timeout after 6 seconds. Therefore, the default setting of 10 connection attempts means it will be 60 seconds before your script gets a callback about the error. Reducing this value to 2 for example, will decrease that period to 12 seconds.
 * @param resourceName This is a name of the resource that contains the exported function you want to call.
 * @param functionName This is a string with the name of the function which you want to call.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(host: string, connectionAttempts: number, resourceName: string, functionName: string, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * This function allows you to call functions that have been exported with HTTP access by other MTA servers.
 * @param host This is a host name - including the HTTP port - of the server you wish to connect to.
 * @param resourceName This is a name of the resource that contains the exported function you want to call.
 * @param functionName This is a string with the name of the function which you want to call.
 * @param callbackFunction This is the function that should receive the data returned from the remote function call. The argument list should match the format of the data returned. The callback function will be passed a string containing "ERROR" followed by an integer indicating the error code when an error occurs calling the function. A list of error codes can be found here.
 * @param arguments Any arguments you may want to pass to the function when it is called. Any number of arguments of can be specified, each being passed to the designated function.Most data types can be passed, including tables.The only values that cannot be passed are 'userdata' values such as xmlnodes - elements and resources can be passed though may be misinterpreted on other game servers (or cause warnings).
 * @returns Returns true if the function has been called, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CallRemote
 **/
declare function callRemote(host: string, resourceName: string, functionName: string, callbackFunction: SimpleHandler, ...arguments: any[]): boolean;

/**
 * This function copies a specified resource with a new name.
 * @param theResource the resource which is going to be copied.
 * @param newResourceName the name that the copied resource will receive.
 * @param organizationalDir A string containing the path where the resource should be copied to (e.g. "[gamemodes]/[amx]").
 * @returns Returns the resource element of the copy. Returns false if the arguments are incorrect.
 * @see https://wiki.mtasa.com/wiki/CopyResource
 **/
declare function copyResource(theResource: Resource, newResourceName: string, organizationalDir?: string): Resource | false;

/**
 * This function creates an new, empty resource.
 * This creates a directory matching the name you specify on disk, then creates an empty meta.xml file with a element in it.
 * @param resourceName The name of the new resource.This should be a valid file name.It's recommended that you do not have spaces or non-ASCII characters in resource names.
 * @param organizationalDir A string containing the path where the resource should be created (e.g. "[gamemodes]/[amx]").
 * @returns Returns the resource element of the new resource if successful, false otherwise. This could fail if the resource name already is in use, if a directory already exists with the name you've specified (but this isn't a valid resource) or if the name you specify isn't valid. It could also fail if the disk was full or for other similar reasons.
 * @see https://wiki.mtasa.com/wiki/CreateResource
 **/
declare function createResource(resourceName: string, organizationalDir?: string): Resource | false;

/**
 * This function deletes a resource from the MTA memory and moves it to the /resources-cache/trash/ directory.
 * @param resourceName The name of resource to delete.
 * @returns Returns true if the resource has been deleted successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DeleteResource
 **/
declare function deleteResource(resourceName: string): boolean;

interface FetchRemoteOptions {
  // Name of the queue to use. Any name can be used. If not set, the queue name is "default". Requests in the same queue are processed in order, one at a time.
  queueName?: string;

  // Number of times to retry if the remote host does not respond. (Defaults to 10)
  connectionAttempts?: number;

  // Number of milliseconds each connection attempt will take before timing out. (Defaults to 10000)
  connectTimeout?: number;

  // A string specifying any data you want to send to the remote HTTP server.
  postData?: string;

  // A boolean specifying if the data is text, or binary. (Defaults to false)
  postIsBinary?: boolean;

  // A string specifying the request method. (Defaults to GET or POST)
  method?: string;

  // A table containing HTTP request headers. e.g.{ Pragma="no-cache" }
  headers?: { [key: string]: string }

  // An integer limiting the number of HTTP redirections to automatically follow. (Defaults to 8)
  maxRedirects?: number;

  // A string specifying the username for protected pages.
  username?: string;

  // A string specifying the password for protected pages.
  password?: string;

  // A table containing form items to submit. e.g.{ name="bob", email="bob@example.com" }
  formFields: { [key: string]: string };
}

// TODO: Fix types
/**
 * This function allows you to post and receive data from HTTP servers.
 * The calls are asynchronous so you do not get an immediate result from the call, instead a callback function you specify is called when the download completes.
 * In the case when the call fails, a string containing "ERROR" followed by an integer containing the error reason will be passed to the callback function.
 * The reason for failure will be similar to errors found with websites - file not found, server not found and timeouts.
 * If you are using fetchRemote to connect to a PHP script, you can use file_get_contents("php://input") to read the postData sent from this function.
 * - Warning: function won't trigger inside another fetchRemote function.
 * @param URL A full URL in the format http://hostname/path/file.ext. A port can be specified with a colon followed by a port number appended to the hostname.
 * @param options A table containing any request options (queueName, connectionAttempts, connectTimeout, postData, postIsBinary, method, headers, maxRedirects, username, password, formFields).
 * @param callbackFunction This is the function that should receive the data returned from the remote server.
 * @param callbackArguments The arguments that were passed into fetchRemote
 * @returns Returns a request value which can be used with getRemoteRequestInfo or abortRemoteRequest (if the arguments are correct, false otherwise).
 * @see https://wiki.mtasa.com/wiki/FetchRemote
 **/
declare function fetchRemote(URL: string, options: FetchRemoteOptions, callbackFunction: SimpleHandler, callbackArguments?: object): Request | false;

// TODO: Fix types
/**
 * This function allows you to post and receive data from HTTP servers.
 * The calls are asynchronous so you do not get an immediate result from the call, instead a callback function you specify is called when the download completes.
 * In the case when the call fails, a string containing "ERROR" followed by an integer containing the error reason will be passed to the callback function.
 * The reason for failure will be similar to errors found with websites - file not found, server not found and timeouts.
 * If you are using fetchRemote to connect to a PHP script, you can use file_get_contents("php://input") to read the postData sent from this function.
 * - Warning: function won't trigger inside another fetchRemote function.
 * @param URL A full URL in the format http://hostname/path/file.ext. A port can be specified with a colon followed by a port number appended to the hostname.
 * @param callbackFunction This is the function that should receive the data returned from the remote server.
 * @param callbackArguments The arguments that were passed into fetchRemote
 * @returns Returns a request value which can be used with getRemoteRequestInfo or abortRemoteRequest (if the arguments are correct, false otherwise).
 * @see https://wiki.mtasa.com/wiki/FetchRemote
 **/
declare function fetchRemote(URL: string, callbackFunction: SimpleHandler, callbackArguments?: object): Request | false;

// TODO: Fix types
/**
 * This function retrieves the ACL request section from the meta.xml file of the given resource.
 * @param theResource the resource to get the ACL requests for.
 * @returns Returns a table with the ACL requests for the given resource, or false if the resource is not valid. A valid resource with no ACL requests will return an empty table.
 * @see https://wiki.multitheftauto.com/wiki/GetResourceACLRequests
 **/
declare function getResourceACLRequests(theResource: Resource): object | false;

/**
 * This function is used to return the root node of a configuration file. Config files must be predefined in a resource's meta file. An alternative way to load XML files is to use xmlLoadFile.
 * @param filePath The filepath of the file in the following format: ":resourceName/path". 'resourceName' is the name of the resource the file is in, and 'path' is the path from the root directory of the resource to the file.
 * @returns Returns the root node of the specified configuration file. If the file is corrupted, not defined in the meta file or doesn't exist, returns false.
 * @see https://wiki.multitheftauto.com/wiki/GetResourceConfig
 **/
declare function getResourceConfig(filePath: string): XML | false;

/**
 * This function retrieves the dynamic element root of a specified resource.
 * The dynamic element root is the parent of elements that are created by scripts (e.g. with createObject) unless they specify a different parent.
 * @param theResource the resource of which dynamic element root we want.
 * @returns Returns an element of the resource's dynamic element root if the resource specified was valid and active (currently running), false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetResourceDynamicElementRoot
 **/
declare function getResourceDynamicElementRoot(theResource: Resource): Element | false;

/**
 * Returns a table containing the names of the functions that a resource exports.
 * It will return the exports of the current resource if there is no argument passed in.
 * @param [theResource=currentResource] the resource of which you want to know the exported functions.
 * @returns Returns a table of function names if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetResourceExportedFunctions
 **/
declare function getResourceExportedFunctions(theResource?: Resource): string[] | false;

/**
 * This function is used to retrieve a resource from its name.
 * A resource's name is the same as its folder or file archive name on the server (without the extension).
 * @param resourceName the name of the resource you wish to get.
 * @returns Returns the resource with the specified name, or false if no resource of that name exists.
 * @see https://wiki.mtasa.com/wiki/GetResourceFromName
 **/
declare function getResourceFromName(resourceName: string): Resource | false;

/**
 * This function retrieves the value of any attribute in a resource info tag.
 * @param theResource: the resource we are getting the info from.
 * @param attribute the name of the attribute we want info about.
 * @returns Returns a string with the attribute value if it exists, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetResourceInfo
 **/
declare function getResourceInfo(theResource: Resource, attribute: string): string | false;

/**
 * Used to check the last starting time and date of a resource.
 * @param theResource: the resource of which you'd like to check the last starting time.
 * @returns If successful, returns the UNIX timestamp when the resource was last started, or the string "never" if the resource has not been started yet, otherwise false. Use in conjunction with getRealTime in order to retrieve detailed information.
 * @see https://wiki.mtasa.com/wiki/GetResourceLastStartTime
 **/
declare function getResourceLastStartTime(theResource: Resource): number | false;

/**
 * This function retrieves the reason why a resource failed to start.
 * @param theResource The resource you wish to check.
 * @returns If the resource failed to load, returns a string with the failure reason in it. If it loaded successfully, returns an empty string. Returns false if the resource doesn't exist.
 * @see https://wiki.mtasa.com/wiki/GetResourceLoadFailureReason
 **/
declare function getResourceLoadFailureReason(theResource: Resource): string | false;

/**
 * Gets the date and time at which a resource was last loaded in the server.
 * @param theResource the resource you want to know the load time of.
 * @returns If successful, returns the UNIX timestamp when the resource was loaded, otherwise false. Use in conjunction with getRealTime in order to retrieve detailed information.
 * @see https://wiki.mtasa.com/wiki/GetResourceLoadTime
 **/
declare function getResourceLoadTime(theResource: Resource): number | false;

/**
 * This function retrieves the root element of a certain map in a specified resource.
 * @param theResource the resource where the map is located.
 * @param mapName name of the maps which root element we want to retrieve, file extension is required.
 * @returns Returns an the resource's map root element if the map exists and resource specified was valid and active (currently running), false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetResourceMapRootElement
 **/
declare function getResourceMapRootElement(theResource: Resource, mapName: string): Element | false;

/**
 * This function gets the name of the specified resource.
 * @param theResource The resource you wish to get the name of.
 * @returns Returns a string with the resource name in it, or false if the resource does not exist.
 * @see https://wiki.mtasa.com/wiki/GetResourceName
 **/
declare function getResourceName(theResource: Resource): string | false;

/**
 * This function returns the organizational file path (e.g. [admin]) of a resource.
 * @param theResource the resource of which you want to know the organizational path.
 * @returns Returns the organizational path of the resource, or false if the resource does not exist.
 * @see https://wiki.mtasa.com/wiki/GetResourceOrganizationalPath
 **/
declare function getResourceOrganizationalPath(theResource: Resource): string | false;

/**
 * This function retrieves a resource's root element.
 * The resource's root element is the element in the element tree which is the parent of all elements that belong to a particular resource (except for elements specifically created elsewhere).
 * You can attach event handlers to this element to easily capture events that originate from your resource (and global events that originate from the root element).
 * - Note: every resource has a predefined global variable called resourceRoot whose value is the root element of that resource.
 * @param [theResource=currentResource] the resource whose root element we are getting. If not specified, assumes the current resource.
 * @returns Returns an element representing the resource's root, false if the specified resource doesn't exist.
 * @see https://wiki.mtasa.com/wiki/GetResourceRootElement
 **/
declare function getResourceRootElement(theResource?: Resource): Element | false;

declare enum ResourceState {
  Loaded = "loaded",
  Running = "running",
  Starting = "starting",
  Stopping = "stopping",
  FailedToLoad = "failed to load",
}

/**
 * This function returns the state of a given resource.
 * @param theResource The resource you wish to get the state of.
 * @returns If successful returns a string with the resource state in it, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetResourceState
 **/
declare function getResourceState(theResource: Resource): ResourceState | false;

/**
 * This function retrieves a table of all the resources that exist on the server.
 * @returns Returns a table of resources.
 * @see https://wiki.mtasa.com/wiki/GetResources
 **/
declare function getResources(): Resource[];

/**
 * This function retrieves the resource from which the function call was made.
 * - Note: Every resource has a predefined global variable called resource that contains the resource pointer for that resource, in other words, the value that this function returns.
 * @returns Returns the resource in which the current script is.
 * @see https://wiki.mtasa.com/wiki/GetThisResource
 **/
declare function getThisResource(): Resource;

/**
 * Checks whether a resource is currently archived (running from within a ZIP file).
 * @param theResource the resource to check.
 * @returns Returns true if a resource is archived, false if it is not archived, or undefined if there is problem with resource.
 * @see https://wiki.mtasa.com/wiki/IsResourceArchived
 **/
declare function isResourceArchived(theResource: Resource): boolean;

/**
 * This function finds new resources and checks for changes to the current ones.
 * @param [refreshAll=false] If true MTA will check for changes in all resources. If false, MTA will only check for new resources and try to reload resources with errorsNote: Checking for changes in all resources can result in lag for a short period of time. It should generally be avoided to set refreshAll to true.
 * @param [targetResource=undefined] If set, the refresh is restricted to the supplied resource only.
 * @returns Returns true if refresh was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/RefreshResources
 **/
declare function refreshResources(refreshAll?: boolean, targetResource?: Resource): boolean;

/**
 * This function removes a file from the resource.
 * @param theResource The resource element.
 * @param fileName The filename what you wan't to delete.
 * @returns Returns true if file was deleted, otherwise false if the resource is in use or the file doesn't exist.
 * @see https://wiki.mtasa.com/wiki/RemoveResourceFile
 **/
declare function removeResourceFile(theResource: Resource, fileName: string): boolean;

/**
 * This function renames a resource.
 * @param resourceName The name of resource to rename.
 * @param newResourceName The name of what the resource should be renamed to.
 * @param organizationalPath If you want to store the new resource inside a category.
 * @returns Returns true if the resource has been renamed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/RenameResource
 **/
declare function renameResource(resourceName: string, newResourceName: string, organizationalPath?: string): boolean;

/**
 * This function restarts a running resource.
 * Restarting will destroy all the elements that the resource has created (as stopping the resource does).
 * - Note: This function does not restart the resource immediately. Restarts are queued up until the end of the server's frame to ensure that they occur in the correct order (and that dependent resources can start and stop correctly). The resource being restarted will have an onResourceStop event triggered and the restarted instance will receive an onResourceStart event. Remember that the element and resource variables will be invalidated during the restart, though of course, the resource's name will not.
 * @param theResource the resource you want to restart.
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
declare function restartResource(theResource: Resource, persistent?: boolean, configs?: boolean, maps?: boolean, scripts?: boolean, html?: boolean, clientConfigs?: boolean, clientScripts?: boolean, clientFiles?: boolean): boolean;

/**
 * This function sets the value of any attribute in a resource info tag.
 * - Note: This function requires the resource to have 'ModifyOtherObjects' ACL right.
 * @param theResource the resource we are setting info to.
 * @param attribute the name of the attribute that is to be set.
 * @param value the value of this attribute.
 * @returns Returns true if the info was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetResourceInfo
 **/
declare function setResourceInfo(theResource: Resource, attribute: string, value: string): boolean;

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
 * @param theResource The resource that should be started.
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
declare function startResource(theResource: Resource, persistent?: boolean, startIncludedResources?: boolean, loadServerConfigs?: boolean, loadMaps?: boolean, loadServerScripts?: boolean, loadHTML?: boolean, loadClientConfigs?: boolean, loadClientScripts?: boolean, loadFiles?: boolean): boolean;

/**
 * This function stops a running resource.
 * - Note: This function does not stop the resource immediately, so don't expect that it starts stopping until the onResourceStop event for that resource is triggered. This happens after the scripts are done executing for this server frame.
 * @param theResource the resource that should be stopped.
 * @returns Returns true if the resource was stopped, false if the stopping failed, or an invalid resource was passed.
 * @see https://wiki.mtasa.com/wiki/StopResource
 **/
declare function stopResource(theResource: Resource): boolean;

/**
 * This function changes the access for one ACL request of the given resource.
 * - Note: This function is protected by default and must be explicitly allowed in the server ACL.
 * @param theResource the resource to set the ACL request for.
 * @param rightName a string with the name of the right to set the access for. This has to match an existing ACL request.
 * @param access a boolean value setting the access. True is for allow, and false for deny.
 * @param byWho a string value to identity who is changing the setting.
 * @returns Returns true if the resource was stopped, false if the stopping failed, or an invalid resource was passed.
 * @see https://wiki.mtasa.com/wiki/UpdateResourceACLRequest
 **/
declare function updateResourceACLRequest(theResource: Resource, rightName: string, access: boolean, byWho?: string): boolean;

// TODO: Fix types
/**
 * Gets all fetchRemote and callRemote requests currently running.
 * @param [theResource=undefined] the resource to get all requests from.
 * @returns Returns a table with all requests, false if an invalid resource was provided.
 * @see https://wiki.mtasa.com/wiki/GetRemoteRequests
 **/
declare function getRemoteRequests(theResource?: Resource): Request[] | false;

interface RemoteRequestInfo {
  // A number specifying the amount of data received so far. Zero means the download is queued
  bytesReceived: number;

  // A number specifying the final download size. Will be zero if the remote HTTP server has not set the 'Content-Length' header
  bytesTotal: number;

  // A number specifying the current connection attempt
  currentAttempt: number;

  // A string specifying either "fetch" or "call"
  type: "fetch" | "call";

  // A string specifying the URL
  url: string;

  // The resource which started the request, or false if the resource has since been stopped/restarted
  resource: Resource | false;

  // A string specifying the queue name
  queue: string;

  //  A string specifying the HTTP method. e.g. "GET" or "POST"
  method: "GET" | "POST";

  // A number specifying max number connection attempts as declared in the fetchRemote call
  connectionAttempts: number;

  // A number specifying connection attempt timeout as declared in the fetchRemote call
  connectionTimeout: number;

  // A string containing the request post data as declared in the fetchRemote call
  postData: string;

  // A table containing the request HTTP headers as declared in the fetchRemote call
  headers: { [key: string]: string };
}

/**
 * Gets informations of an fetchRemote or callRemote request info.
 * @param theRequest returned from fetchRemote, callRemote or getRemoteRequests.
 * @param [postDataLength=0] post data length.
 * @param [includeHeaders=false] include headers.
 * @returns Returns a table when valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetRemoteRequestInfo
 **/
declare function getRemoteRequestInfo(theRequest: Request, postDataLength?: number, includeHeaders?: boolean): RemoteRequestInfo | false;

/**
 * Aborts a fetchRemote or callRemote request.
 * @param theRequest returned from fetchRemote, callRemote or getRemoteRequests.
 * @returns Returns true on success, false when invalid request was provided.
 * @see https://wiki.mtasa.com/wiki/AbortRemoteRequest
 **/
declare function abortRemoteRequest(theRequest: Request): boolean;
