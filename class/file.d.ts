declare class File {
  pos: number;
  readonly size: number;
  readonly eof: boolean;
  readonly path: string;

  // static open(filePath: string, readOnly?: boolean): File | false;
  // static exists(filePath: string): boolean;
  // static copy(filePath: string, copyToFilePath: string, overwrite?: boolean): boolean;
  // static rename(filePath: string, newFilePath: string): boolean;
  // static delete(filePath: string): boolean;

  /**
   * Creates a new file in a directory of a resource.
   * If there already exists a file with the specified name, it is overwritten with an empty file.
   * - Note: To prevent memory leaks, ensure each successful call to fileCreate has a matching call to fileClose
   * - Note: The file functions should not be used to implement configuration files. It is encouraged to use the XML functions for this instead.
   * - Tip: If you do not want to share the content of the created file with other servers, prepend the file path with @ (See filepath for more information)
   * @param filePath The filepath of the file to be created in the following format
   * @see https://wiki.mtasa.com/wiki/FileCreate
   **/
  constructor(filePath: string);

  /**
   * Closes a file handle obtained by fileCreate or fileOpen.
   * @returns Returns true if successful.
   * @see https://wiki.mtasa.com/wiki/FileClose
   **/
  close(): boolean;

  /**
   * Forces pending disk writes to be executed.
   * fileWrite doesn't directly write to the hard disk but places the data in a temporary buffer; only when there is enough data in the buffer it is actually written to disk.
   * Call this function if you need the data written right now without closing the file.
   * This is useful for log files that might want to be read while the resource is still executing.
   * fileFlush can be called after each log entry is written.
   * Without this, the file may appear empty or outdated to the user.
   * @returns Returns true if succeeded.
   * @see https://wiki.mtasa.com/wiki/FileFlush
   **/
  flush(): boolean;

  /**
   * Reads the specified number of bytes from the given file starting at its current read/write position, and returns them as a string.
   * @param count The number of bytes you wish to read.
   * @returns Returns the bytes that were read in a string. Note that this string might not contain as many bytes as you specified if an error occured, i.e. end of file.
   * @see https://wiki.mtasa.com/wiki/FileRead
   **/
  read(count: number): string;

  /**
   * Writes one or more strings to a given file, starting at the current read/write position.
   * Advances the position over the number of bytes that were written.
   * @param string The string to write.
   * @param additionalStrings The strings to write.
   * @returns Returns the number of bytes successfully written to the file.
   * @see https://wiki.mtasa.com/wiki/FileWrite
   **/
  write(string: string, ...additionalStrings: string[]): number;

  /**
   * Returns the current read/write position in the given file.
   * @returns Returns the file position if successful.
   * @see https://wiki.mtasa.com/wiki/FileGetPos
   **/
  getPos(): number;

  /**
   * Returns the total size in bytes of the given file.
   * @returns Returns the file size if successful.
   * @see https://wiki.mtasa.com/wiki/FileGetSize
   **/
  getSize(): number;

  /**
   * This function retrieves the path of the given file.
   * @returns Returns a string representing the file path.
   * @see https://wiki.mtasa.com/wiki/FileGetPath
   **/
  getPath(): string;

  /**
   * Checks if the file position is at the end of the file.
   * - Note: Due to underlying C API restrictions this function may return false until an attempt to read further than the end of the file is made.
   * @returns Returns true if the file position of the specified file is at the end of the file, false otherwise.
   * @see https://wiki.mtasa.com/wiki/FileIsEOF
   **/
  isEOF(): boolean;

  /**
   * Sets the current read/write position in the file.
   * @param offset The new position. This is the number of bytes from the beginning of the file. If this value is larger than the file size, it is limited to 52,428,800 bytes (50 MB).
   * @returns Returns where the offset was actually set at. I.e. if offset was past the end of the file, it will be set at the end of the file, and this position will be returned. Returns false in case of failure (e.g. the specified file handle is invalid).
   * @see https://wiki.mtasa.com/wiki/FileSetPos
   **/
  setPos(offset: number): number | false;
}
