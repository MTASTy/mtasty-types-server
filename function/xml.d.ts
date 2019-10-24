/**
 * This function copies all contents of a certain node in a XML document to a new document file, so the copied node becomes the new file's root node.
 * The new file will not be saved to file system until xmlSaveFile() is called.
 * - Note: To prevent memory leaks, ensure each call to xmlCopyFile has a matching call to xmlUnloadFile.
 * @param nodeToCopy the xmlnode that is to be copied to a new document.
 * @param newFilePath the path of the file that is to be created, in the following format.
 * @returns Returns the xmlnode of the copy if the node was successfully copied, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/XmlCopyFile
 **/
declare function xmlCopyFile(nodeToCopy: XML, newFilePath: string): XML | false;

/**
 * This function creates a new child node under an XML node.
 * @param parentNode the xmlnode you want to create a new child node under.
 * @param tagName the type of the child node that will be created.
 * @returns Returns the created xmlnode if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlCreateChild
 **/
declare function xmlCreateChild(parentNode: XML, tagName: string): XML | false;

/**
 * This function creates a new XML document, which can later be saved to a file by using xmlSaveFile.
 * This function will overwrite the file specified if it already exists.
 * - Note: To prevent memory leaks, ensure each call to xmlCreateFile has a matching call to xmlUnloadFile.
 * - Tip: If you do not want to share the content of the created file with other servers, prepend the file path with @ (See filepath for more information).
 * @param filePath The filepath of the file in the following format: ":resourceName/path". 'resourceName' is the name of the resource the file will be in, and 'path' is the path from the root directory of the resource to the file.
 * @param rootNodeName the name of the root node in the XML document.
 * @returns Returns the root xmlnode element of the new XML file if successful, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlCreateFile
 **/
declare function xmlCreateFile(filePath: string, rootNodeName: string): XML | false;

/**
 * This function destroys a XML node from the XML node tree.
 * @param theXMLNode The xml node you want to destroy.
 * @returns Returns true if the xml node was successfully destroyed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlDestroyNode
 **/
declare function xmlDestroyNode(theXMLNode: XML): boolean;

/**
 * This function returns a named child node of an XML node.
 * @param parent This is an xmlnode that you want to find the child node under.
 * @param tagName This is the name of the child node you wish to find (case-sensitive).
 * @param index This is the 0-based index of the node you wish to find. For example, to find the 5th subnode with a particular name, you would use 4 as the index value. To find the first occurence, use 0.
 * @returns Returns an xmlnode if the node was found, false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlFindChild
 **/
declare function xmlFindChild(parent: XML, tagName: string, index: number): XML | false;

/**
 * This function provides an alternative way to load XML files to getResourceConfig.
 * This function loads an XML file and returns the node by specifying a specific file path, while getResourceConfig allows for loading an XML file from a resource.
 * - Note: To prevent memory leaks, ensure each call to xmlLoadFile has a matching call to xmlUnloadFile.
 * @param filePath The filepath of the file in the following format: ":resourceName/path". 'resourceName' is the name of the resource the file is in, and 'path' is the path from the root directory of the resource to the file.
 * @param [readOnly=false] By default, the XML file is opened with reading and writing access.You can specify true for this parameter if you only need reading access.
 * @returns Returns the root xmlnode element of an xml file if successful, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlLoadFile
 **/
declare function xmlLoadFile(filePath: string, readOnly?: boolean): XML | false;

/**
 * This function creates an Xmlnode from a string input.
 * @param xmlString A string containing XML data.
 * @returns Returns the root xmlnode element of an xml string if successful, or false otherwise (invalid XML string).
 * @see https://wiki.mtasa.com/wiki/XmlLoadString
 **/
declare function xmlLoadString(xmlString: string): XML | false;

/**
 * This function is used to return an attribute of a node in a configuration file.
 * @param node The node from which you wish to return the attribute.
 * @param name The name of the attribute.
 * @returns Returns the attribute in string form or false, if the attribute is not defined.
 * @see https://wiki.mtasa.com/wiki/XmlNodeGetAttribute
 **/
declare function xmlNodeGetAttribute(node: XML, name: string): string | false;

/**
 * Returns all the attributes of a specific XML node.
 * @param node the XML node to get the attributes of.
 * @returns If successful, returns an object with as keys the names of the attributes and as values the corresponding attribute values. If the node has no attributes, returns an empty object. In case of failure, returns false.
 * @see https://wiki.mtasa.com/wiki/XmlNodeGetAttributes
 **/
declare function xmlNodeGetAttributes(node: XML): {[key: string]: any} | false;

/**
 * This function returns all children of a particular XML node, or a particular child node.
 * @param parent This is the xmlnode you want to retrieve one or all child nodes of.
 * @param index If you only want to retrieve one particular child node, specify its (0-based) index here.For example if you only want the first node, specify 0; the fifth node has index 4, etc.
 * @returns If index isn't specified, returns an array containing all child nodes. If index is specified, returns the corresponding child node if it exists. If no nodes are found, it returns an empty array. Returns false in case of failure.
 * @see https://wiki.mtasa.com/wiki/XmlNodeGetChildren
 **/
declare function xmlNodeGetChildren(parent: XML, index?: number): XML[] | false;

/**
 * Gets the tag name of the specified XML node.
 * @param node the node to get the tag name of.
 * @returns Returns the tag name of the node if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlNodeGetName
 **/
declare function xmlNodeGetName(node: XML): string | false;

/**
 * Returns the parent node of an xml node.
 * @param node the node of which you want to know the parent.
 * @returns Returns the parent node of the specified node if successful. Returns false if the specified node is the root node or an invalid node was passed.
 * @see https://wiki.mtasa.com/wiki/XmlNodeGetParent
 **/
declare function xmlNodeGetParent(node: XML): XML | false;

/**
 * This function is made to be able to read tag values in XML files (eg. <something>anything</something>).
 * @param theXMLNode The xml node of which you need to know the value.
 * @returns Returns the value of the node as a string if it was received successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlNodeGetValue
 **/
declare function xmlNodeGetValue(theXMLNode: XML): string | false;

/**
 * This function is used to edit an attribute of a node in a configuration file.
 * @param node The node of which you wish to edit an attribute.
 * @param name The name of the attribute.
 * @param value The value which you wish to change the attribute to. (Note: nil will delete the attribute).
 * @returns Returns true if the attribute was set successfully, false if the node and/or attribute do not exist, or if they're faulty.
 * @see https://wiki.mtasa.com/wiki/XmlNodeSetAttribute
 **/
declare function xmlNodeSetAttribute(node: XML, name: string, value: string | number): boolean;

/**
 * Sets the tag name of the specified XML node.
 * @param node the node to change the tag name of.
 * @param name the new tag name to set.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlNodeSetName
 **/
declare function xmlNodeSetName(node: XML, name: string): boolean;

/**
 * This function is made to be able to assign values to tags in XML files (eg. <something>anything</something>).
 * @param theXMLNode The xml node you want to set the value of.
 * @param value The string value you want the node to have.
 * @param [setCDATA=false] A boolean indicating if you want the value to be enclosed inside CDATA tags.
 * @returns Returns true if value was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlNodeSetValue
 **/
declare function xmlNodeSetValue(theXMLNode: XML, value: string, setCDATA?: boolean): boolean;

/**
 * This function saves a loaded XML file.
 * @param rootNode the root xmlnode of the loaded XML file.
 * @returns Returns true if save was successful, false if the XML file does not exist.
 * @see https://wiki.mtasa.com/wiki/XmlSaveFile
 **/
declare function xmlSaveFile(rootNode: XML): boolean;

/**
 * Unloads an XML document from memory.
 * @param node root of the XML document to unload.
 * @returns Returns true if the document was unloaded successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlUnloadFile
 **/
declare function xmlUnloadFile(node: XML): boolean;
