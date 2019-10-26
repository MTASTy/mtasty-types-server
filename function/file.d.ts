/** @noSelfInFile */

/**
 * Closes a file handle obtained by fileCreate or fileOpen.
 * @param theFile The file handle to close.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FileClose
 **/
declare function fileClose(theFile: File): boolean;

/**
 * This function copies a file.
 * - Note: The file functions should not be used to implement configuration files. It is encouraged to use the XML functions for this instead.
 * - Tip: If you do not want to share the content of the created file with other servers, prepend the file path with @ (See filepath for more information)
 * @param filePath The path of the file you want to copy.
 * @param copyToFilePath Where to copy the specified file to.
 * @param [overwrite=false] If set to true it will overwrite a file that already exists at copyToFilePath.
 * @returns Return true if the file was copied, else false if the 'filePath' doesn't exist.
 * @see https://wiki.mtasa.com/wiki/FileCopy
 **/
declare function fileCopy(filePath: string, copyToFilePath: string, overwrite?: boolean): boolean;

/**
 * Creates a new file in a directory of a resource.
 * If there already exists a file with the specified name, it is overwritten with an empty file.
 * - Note: To prevent memory leaks, ensure each successful call to fileCreate has a matching call to fileClose
 * - Note: The file functions should not be used to implement configuration files. It is encouraged to use the XML functions for this instead.
 * - Tip: If you do not want to share the content of the created file with other servers, prepend the file path with @ (See filepath for more information)
 * @param filePath The filepath of the file to be created in the following format
 * @returns If successful, returns a file handle which can be used with other file functions (fileWrite, fileClose...). Returns false if an error occured.
 * @see https://wiki.mtasa.com/wiki/FileCreate
 **/
declare function fileCreate(filePath: string): File | false;

/**
 * Deletes the specified file.
 * @param filePath The filepath of the file to delete in the following format
 * @returns Returns true if successful, false otherwise (for example if there exists no file with the given name, or it does exist but is in use).
 * @see https://wiki.mtasa.com/wiki/FileDelete
 **/
declare function fileDelete(filePath: string): boolean;

/**
 * This functions checks whether a specified file exists inside a resource.
 * @param filePath The filepath of the file, whose existence is going to be checked, in the following format
 * @returns Returns true if the file exists, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FileExists
 **/
declare function fileExists(filePath: string): boolean;

/**
 * Forces pending disk writes to be executed.
 * fileWrite doesn't directly write to the hard disk but places the data in a temporary buffer; only when there is enough data in the buffer it is actually written to disk.
 * Call this function if you need the data written right now without closing the file.
 * This is useful for log files that might want to be read while the resource is still executing.
 * fileFlush can be called after each log entry is written.
 * Without this, the file may appear empty or outdated to the user.
 * @param theFile The file handle of the file you wish to flush.
 * @returns Returns true if succeeded, false in case of failure (e.g. the file handle is invalid).
 * @see https://wiki.mtasa.com/wiki/FileFlush
 **/
declare function fileFlush(theFile: File): boolean;

/**
 * This function retrieves the path of the given file.
 * @param theFile The file you want to get the path.
 * @returns Returns a string representing the file path, false if invalid file was provided.
 * @see https://wiki.mtasa.com/wiki/FileGetPath
 **/
declare function fileGetPath(theFile: File): string;

/**
 * Returns the current read/write position in the given file.
 * @param theFile the file handle you wish to get the position of.
 * @returns Returns the file position if successful, or false if an error occured (e.g. an invalid handle was passed).
 * @see https://wiki.mtasa.com/wiki/FileGetPos
 **/
declare function fileGetPos(theFile: File): number | false;

/**
 * Returns the total size in bytes of the given file.
 * @param theFile the file handle you wish to get the size of.
 * @returns Returns the file size if successful, or false if an error occured (e.g. an invalid file handle was passed).
 * @see https://wiki.mtasa.com/wiki/FileGetSize
 **/
declare function fileGetSize(theFile: File): number | false;

/**
 * Checks if the file position is at the end of the file.
 * - Note: Due to underlying C API restrictions this function may return false until an attempt to read further than the end of the file is made.
 * @param theFile A handle to the file you wish to check.
 * @returns Returns true if the file position of the specified file is at the end of the file, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FileIsEOF
 **/
declare function fileIsEOF(theFile: File): boolean;

/**
 * Opens an existing file for reading and writing.
 * - Note: To prevent memory leaks, ensure each successful call to fileOpen has a matching call to fileClose.
 * - Tip: The file functions should not be used to implement configuration files. It is encouraged to use the XML functions for this instead.
 * @param filePath The filepath of the file in the following format
 * @param [readOnly=false] By default, the file is opened with reading and writing access.You can specify true for this parameter if you only need reading access.
 * @returns If successful, returns a file handle for the file. Otherwise returns false (f.e. if the file doesn't exist).
 * @see https://wiki.mtasa.com/wiki/FileOpen
 **/
declare function fileOpen(filePath: string, readOnly?: boolean): File | false;

/**
 * Reads the specified number of bytes from the given file starting at its current read/write position, and returns them as a string.
 * @param theFile A handle to the file you wish to read from. Use fileOpen to obtain this handle.
 * @param count The number of bytes you wish to read.
 * @returns Returns the bytes that were read in a string. Note that this string might not contain as many bytes as you specified if an error occured, i.e. end of file.
 * @see https://wiki.mtasa.com/wiki/FileRead
 **/
declare function fileRead(theFile: File, count: number): string;

/**
 * Renames the specified file.
 * - Note: Also with this function you can move specified file to a new location, new folder or even to another resource's folder. But for this action executing resource must have 'ModifyOtherObjects' ACL right set to true.
 * @param filePath The filepath of the source file in the following format
 * @param newFilePath Destination filepath for the specified source file in the same format.
 * @returns If successful, returns true. Otherwise returns false.
 * @see https://wiki.mtasa.com/wiki/FileRename
 **/
declare function fileRename(filePath: string, newFilePath: string): boolean;

/**
 * Sets the current read/write position in the file.
 * @param theFile The file handle of which you want to change the read/write position.
 * @param offset The new position. This is the number of bytes from the beginning of the file. If this value is larger than the file size, it is limited to 52,428,800 bytes (50 MB).
 * @returns Returns where the offset was actually set at. I.e. if offset was past the end of the file, it will be set at the end of the file, and this position will be returned. Returns false in case of failure (e.g. the specified file handle is invalid).
 * @see https://wiki.mtasa.com/wiki/FileSetPos
 **/
declare function fileSetPos(theFile: File, offset: number): number | false;

/**
 * Writes one or more strings to a given file, starting at the current read/write position.
 * Advances the position over the number of bytes that were written.
 * @param theFile A handle to the file you wish to write to. The file must have been opened with write access, i.e. the file handle must be a result of fileCreate or fileOpen with the readonly parameter set to false.
 * @param string The string to write.
 * @param additionalStrings The strings to write.
 * @returns Returns the number of bytes successfully written to the file, returns false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/FileWrite
 **/
declare function fileWrite(theFile: File, string: string, ...additionalStrings: string[]): number | false;
