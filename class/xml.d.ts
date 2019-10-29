declare class XML {
  value: string;
  name: string;
  readonly attributes: {[key: string]: any};
  readonly children: XML[];
  readonly parent: XML;

  // static load(filePath: string, readOnly?: boolean): XML | false;
  // static loadstring(xmlString: string): XML | false;

  /**
   * This function creates a new XML document, which can later be saved to a file by using xmlSaveFile.
   * This function will overwrite the file specified if it already exists.
   * - Note: To prevent memory leaks, ensure each call to xmlCreateFile has a matching call to xmlUnloadFile.
   * - Tip: If you do not want to share the content of the created file with other servers, prepend the file path with @ (See filepath for more information).
   * @param filePath The filepath of the file in the following format: ":resourceName/path". 'resourceName' is the name of the resource the file will be in, and 'path' is the path from the root directory of the resource to the file.
   * @param rootNodeName the name of the root node in the XML document.
   * @see https://wiki.mtasa.com/wiki/XmlCreateFile
   **/
  constructor(filePath: string, rootNodeName: string);

  /**
   * Unloads an XML document from memory.
   * @returns Returns true if the document was unloaded successfully, false otherwise.
   * @see https://wiki.mtasa.com/wiki/XmlUnloadFile
   **/
  unload(): boolean;

  /**
   * This function copies all contents of a certain node in a XML document to a new document file, so the copied node becomes the new file's root node.
   * The new file will not be saved to file system until xmlSaveFile() is called.
   * - Note: To prevent memory leaks, ensure each call to xmlCopyFile has a matching call to xmlUnloadFile.
   * @param newFilePath the path of the file that is to be created, in the following format.
   * @returns Returns the xmlnode of the copy if the node was successfully copied, false if invalid arguments were passed.
   * @see https://wiki.mtasa.com/wiki/XmlCopyFile
   **/
  copy(newFilePath: string): XML | false;

  /**
   * This function destroys a XML node from the XML node tree.
   * @returns Returns true if the xml node was successfully destroyed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/XmlDestroyNode
   **/
  destroy(): boolean;

  /**
   * This function is intended to load data from a loaded XML file into the element tree.
   * This could be used for loading an external map, or part of another map.
   * @param parent The node you wish to be the parent of the new map data.
   * @returns Returns an element that corresponds to the root of the new data added, i.e. an element that represents the node xmlnode passed to the function. Returns false if the argument are invalid.
   * @see https://wiki.mtasa.com/wiki/LoadMapData
   **/
  loadMapData(parent: Element): Element | false;

  /**
   * This converts a set of elements in the element tree into XML.
   * This is a format that can then be loaded as a map file.
   * Each element represents a single XML node.
   * @param baseElement The first element to output to the xml tree. This element and all its children (and their children, etc) will be output.
   * @param [childrenOnly=false] Defines if you want to only save children of the specified element.
   * @returns Returns true if the map was saved successfully, otherwise false.
   * @see https://wiki.mtasa.com/wiki/SaveMapData
   **/
  saveMapData(baseElement: Element, childrenOnly?: boolean): boolean;

  /**
   * This function is made to be able to read tag values in XML files (eg. <something>anything</something>).
   * @returns Returns the value of the node as a string if it was received successfully.
   * @see https://wiki.mtasa.com/wiki/XmlNodeGetValue
   **/
  getValue(): string;

  /**
   * This function is used to edit an attribute of a node in a configuration file.
   * @param name The name of the attribute.
   * @param value The value which you wish to change the attribute to. (Note: nil will delete the attribute).
   * @returns Returns true if the attribute was set successfully, false if the node and/or attribute do not exist, or if they're faulty.
   * @see https://wiki.mtasa.com/wiki/XmlNodeSetAttribute
   **/
  setAttribute(name: string, value: string | number): boolean;

  /**
   * This function is made to be able to assign values to tags in XML files (eg. <something>anything</something>).
   * @param value The string value you want the node to have.
   * @param [setCDATA=false] A boolean indicating if you want the value to be enclosed inside CDATA tags.
   * @returns Returns true if value was successfully set, false otherwise.
   * @see https://wiki.mtasa.com/wiki/XmlNodeSetValue
   **/
  setValue(value: string, setCDATA?: boolean): boolean;

  /**
   * This function saves a loaded XML file.
   * @returns Returns true if save was successful.
   * @see https://wiki.mtasa.com/wiki/XmlSaveFile
   **/
  saveFile(): boolean;

  /**
   * This function creates a new child node under an XML node.
   * @param tagName the type of the child node that will be created.
   * @returns Returns the created xmlnode if successful.
   * @see https://wiki.mtasa.com/wiki/XmlCreateChild
   **/
  createChild(tagName: string): XML;

  /**
   * This function returns a named child node of an XML node.
   * @param tagName This is the name of the child node you wish to find (case-sensitive).
   * @param index This is the 0-based index of the node you wish to find. For example, to find the 5th subnode with a particular name, you would use 4 as the index value. To find the first occurence, use 0.
   * @returns Returns an xmlnode if the node was found, false otherwise.
   * @see https://wiki.mtasa.com/wiki/XmlFindChild
   **/
  findChild(tagName: string, index: number): XML | false;

  /**
   * Sets the tag name of the specified XML node.
   * @param name the new tag name to set.
   * @returns Returns true if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/XmlNodeSetName
   **/
  setName(name: string): boolean;

  /**
   * Returns all the attributes of a specific XML node.
   * @returns If successful, returns an object with as keys the names of the attributes and as values the corresponding attribute values. If the node has no attributes, returns an empty object.
   * @see https://wiki.mtasa.com/wiki/XmlNodeGetAttributes
   **/
  getAttributes(): {[key: string]: any};

  /**
   * This function returns all children of a particular XML node, or a particular child node.
   * @param index If you only want to retrieve one particular child node, specify its (0-based) index here.For example if you only want the first node, specify 0; the fifth node has index 4, etc.
   * @returns If index isn't specified, returns an array containing all child nodes. If index is specified, returns the corresponding child node if it exists. If no nodes are found, it returns an empty array.
   * @see https://wiki.mtasa.com/wiki/XmlNodeGetChildren
   **/
  getChildren(index?: number): XML[];

  /**
   * Gets the tag name of the specified XML node.
   * @returns Returns the tag name of the node.
   * @see https://wiki.mtasa.com/wiki/XmlNodeGetName
   **/
  getName(): string;

  /**
   * Returns the parent node of an xml node.
   * @returns Returns the parent node of the specified node if successful. Returns false if the specified node is the root node.
   * @see https://wiki.mtasa.com/wiki/XmlNodeGetParent
   **/
  getParent(): XML | false;

  /**
   * This function is used to return an attribute of a node in a configuration file.
   * @param name The name of the attribute.
   * @returns Returns the attribute in string form or false, if the attribute is not defined.
   * @see https://wiki.mtasa.com/wiki/XmlNodeGetAttribute
   **/
  getAttribute(name: string): string | false;
}
