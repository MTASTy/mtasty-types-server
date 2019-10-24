/** @noSelf **/
interface UTF8Interface {
  /**
   * Returns the codepoints for the i-th through j-th character of the string passed.
   * @param input A string character sequence.
   * @param [i=1] An integer representing the beginning position.
   * @param [j=1] An integer representing the ending position.
   * @returns Returns a sequence of number values from the original string if successful, undefined otherwise.
   * @see https://wiki.mtasa.com/wiki/Utf8.byte
   **/
  byte(input: string, i?: number, j?: number): number[] | undefined;

  /**
   * Generates a string representing the character codepoints as arguments.
   * @param {...number} codepoints An variable argument sequence of code points representing the desired unicode characters.
   * @returns Returns a string representation of the codepoints passed.
   * @see https://wiki.mtasa.com/wiki/Utf8.char
   **/
  char(...codepoints: number[]): string;

  /**
   * Converts the UTF-8 codepoint position to byte-string position.
   * - Note: Code point characters beyond the byte value range (0-127) require at least 2 bytes to represent the character.
   * @param input A string character sequence.
   * @param [charpos=0] An integer representing the beginning position (offset will be added/subtracted).
   * @param [offset=1] An integer representing the offset to charpos.
   * @returns Returns the integer position as in a byte string and the integer codepoint at this position, undefined otherwise.
   * @see https://wiki.mtasa.com/wiki/Utf8.charpos
   * @tupleReturn
   **/
  charpos(input: string, charpos?: number, offset?: number): [number, number] | [undefined];

  /**
   * Escapes a string to a UTF-8 format string.
   * It supports several escape formats, see the formatting table.
   * @param input A string character sequence.
   * @returns Returns a string containing the escaped UTF-8 characters from the original string.
   * @see https://wiki.mtasa.com/wiki/Utf8.escape
   **/
  escape(input: string): string;

  /**
   * Finds the first occurrence of the pattern in the string passed.
   * If an instance of the pattern is found, a pair of values representing the start and the end of the matched string is returned.
   * @param input A string character sequence.
   * @param pattern A string match pattern (you can disable pattern matching by using the optional fourth argument plain).
   * @param [startpos=1] An integer representing the beginning position.
   * @param [plain=false] A boolean, if pattern matching should be turned off.
   * @returns Returns two number values for the beginning and ending position of the matched string, undefined otherwise.
   * @see https://wiki.mtasa.com/wiki/Utf8.find
   * @tupleReturn
   **/
  find(input: string, pattern: string, startpos?: number, plain?: unknown): [number, number] | [undefined];

  /**
   * Converts a UTF-8 string to folded case (lowercase), which can be used to compare two strings.
   * If input is an integer, it's treat as a codepoint and a convert codepoint (integer) is returned.
   * - Note: You may want to read up on case folding for more information about the use of this function.
   * @param input A string character sequence OR an integer value
   * @returns Returns a string in lowercase OR returns an integer (see description).
   * @see https://wiki.mtasa.com/wiki/Utf8.fold
   **/
  fold(input: string): string;

  /**
   * Converts a UTF-8 string to folded case (lowercase), which can be used to compare two strings.
   * If input is an integer, it's treat as a codepoint and a convert codepoint (integer) is returned.
   * - Note: You may want to read up on case folding for more information about the use of this function.
   * @param input A string character sequence OR an integer value
   * @returns Returns a string in lowercase OR returns an integer (see description).
   * @see https://wiki.mtasa.com/wiki/Utf8.fold
   **/
  fold(input: number): number;

  /**
   * This function returns a pattern finding iterator for UTF-8 strings.
   * The iterator will search through the string input looking for instances of the pattern you passed.
   * For more information on iterators read the ForTutorial and IteratorsTutorial.
   * @param input A string character sequence
   * @param pattern A string match pattern
   * @returns Returns an function for iterations on the input string by using the passed pattern string.
   * @see https://wiki.mtasa.com/wiki/Utf8.gmatch
   * @luaIterator
   **/
  gmatch(input: string, pattern: string): Iterable<string>;

  /**
   * Returns a copy of the original input string with replaced matches from the pattern by the replacement value.
   * Warning: This function may modify your input string even if no changes were made. Try it with runcode: srun utf8.gsub(utf8.char(66376), "", "") == utf8.char(66376)
   * @param input A string character sequence
   * @param pattern A string match pattern
   * @param replace A string literal OR an integer value OR a function OR an array ({ match = replacement })
   * @param [match_limit=utf8.len(input)] An integer to limit the number of substitutions made
   * @returns Returns a pair of values, the modified string and the integer number of substitutions made.
   * @see https://wiki.mtasa.com/wiki/Utf8.gsub
   * @tupleReturn
   **/
  gsub(input: string, pattern: string, replace: string | {[key: string]: string} | ((match: string) => string), match_limit?: number): [string, number];


  /**
   * Inserts a substring into input string.
   * If insert-position is given, the substring will be inserted before the character at this index, otherwise the substring will concatenate to input.
   * The insert position may be negative.
   * @param input A string character sequence
   * @param substring A string character sequence which should be inserted
   * @param [insert_pos] An integer representing the position, where the substring will be inserted at.
   * @returns Returns a string with the inserted substring value.
   * @see https://wiki.mtasa.com/wiki/Utf8.insert
   **/
  insert(input: string, substring: string, insert_pos?: number): string;

  /**
   * Returns the length of the string passed.
   * @param input A string character sequence
   * @param [i=1] An integer representing the beginning position for measuring the length of the section (may be negative).
   * @param [j] An integer representing the ending position for measuring the length of the section (may be negative).
   * @returns Returns the length of the string as an integer.
   * @see https://wiki.mtasa.com/wiki/Utf8.len
   **/
  len(input: string, i?: number, j?: number): number;

  /**
   * Converts a UTF-8 string to folded case (lowercase), which can be used to compare two strings.
   * If input is an integer, it's treat as a codepoint and a convert codepoint (integer) is returned.
   * - Note: You may want to read up on case folding for more information about the use of this function.
   * @param input A string character sequence OR an integer value
   * @returns Returns a string in lowercase OR returns an integer (see description).
   * @see https://wiki.mtasa.com/wiki/Utf8.fold
   **/
  lower(input: string): string;

  /**
   * Converts a UTF-8 string to folded case (lowercase), which can be used to compare two strings.
   * If input is an integer, it's treat as a codepoint and a convert codepoint (integer) is returned.
   * - Note: You may want to read up on case folding for more information about the use of this function.
   * @param input A string character sequence OR an integer value
   * @returns Returns a string in lowercase OR returns an integer (see description).
   * @see https://wiki.mtasa.com/wiki/Utf8.fold
   **/
  lower(input: number): number;

  /**
   * Extract substrings by matching patterns in the input string.
   * This function can be used to extract specific information from a string.
   * @param input A string character sequence
   * @param pattern A string match pattern
   * @param [index=1] An integer representing the beginning position for the pattern matching
   * @returns Returns a sequence of string matches from the input string, undefined otherwise.
   * @see https://wiki.mtasa.com/wiki/Utf8.match
   * @tupleReturn
   **/
  match(input: string, pattern: string, index?: number): string[] | [undefined];

  /**
   * Compares two strings in lower-case and returns the difference indicator (see table below) as an integer value.
   * @param a A string character sequence
   * @param b A string character sequence
   * @returns Returns an integer, which indicates the difference, see the table below for further information.
   * @see https://wiki.mtasa.com/wiki/Utf8.ncasecmp
   **/
  ncasecmp(a: string, b: string): -1 | 0 | 1;

  /**
   * This is an iteration function to traverse each single codepoint of a UTF-8 string.
   * @param input A string character sequence.
   * @param [charpos=0] An integer representing the beginning position (offset will be added/subtracted).
   * @param [offset=1] An integer representing the offset to charpos.
   * @returns Returns the integer position in bytes and the integer codepoint at this position, undefined otherwise.
   * @see https://wiki.mtasa.com/wiki/Utf8.next
   * @tupleReturn
   **/
  next(input: string, charpos?: number, offset?: number): [number, number] | [undefined];

  /**
   * This function removes a substring in a UTF-8 string by using a position range.
   * @param input A string character sequence.
   * @param [start=1] An integer representing the beginning position.
   * @param [stop=1] An integer representing the ending position.
   * @returns Returns the string with the removed substring from the range.
   * @see https://wiki.mtasa.com/wiki/Utf8.remove
   **/
  remove(input: string, start?: number, stop?: number): string;

  /**
   * Reverses the input string.
   * @param input A string character sequence.
   * @returns Returns a string containing the reversed original UTF-8 string.
   * @see https://wiki.mtasa.com/wiki/Utf8.reverse
   **/
  reverse(input: string): string;

  /**
   * Returns a substring of the string passed.
   * The substring starts at i.
   * If the third argument j is not given, the substring will end at the end of the string.
   * If the third argument is given, the substring ends at and includes j.
   * @param input A string character sequence.
   * @param [i=1] An integer representing the beginning position (may be negative).
   * @param [j] An integer representing the ending position (may be negative).
   * @returns Returns a string substring of the original string, containing the selected range from the original string.
   * @see https://wiki.mtasa.com/wiki/Utf8.sub
   **/
  sub(input: string, i?: number, j?: number): string;

  /**
   * Converts a UTF-8 string to title case (uppercase).
   * If input is an integer, it is treated as a codepoint and a converted codepoint (integer) is returned.
   * - Note: You may want to read up on case folding for more information about the use of this function.
   * @param input A string character sequence OR a number value.
   * @returns Returns a string in uppercase OR returns an integer (see description).
   * @see https://wiki.mtasa.com/wiki/Utf8.title
   **/
  title(input: string): string;

  /**
   * Converts a UTF-8 string to title case (uppercase).
   * If input is an integer, it is treated as a codepoint and a converted codepoint (integer) is returned.
   * - Note: You may want to read up on case folding for more information about the use of this function.
   * @param input A string character sequence OR an integer value.
   * @returns Returns a string in uppercase OR returns an integer (see description).
   * @see https://wiki.mtasa.com/wiki/Utf8.title
   **/
  title(input: number): number;

  /**
   * Converts a UTF-8 string to title case (uppercase).
   * If input is an integer, it is treated as a codepoint and a converted codepoint (integer) is returned.
   * - Note: You may want to read up on case folding for more information about the use of this function.
   * @param input A string character sequence OR an integer value.
   * @returns Returns a string in uppercase OR returns an integer (see description).
   * @see https://wiki.mtasa.com/wiki/Utf8.upper
   **/
  upper(input: string): string;

  /**
   * Converts a UTF-8 string to title case (uppercase).
   * If input is an integer, it is treated as a codepoint and a converted codepoint (integer) is returned.
   * - Note: You may want to read up on case folding for more information about the use of this function.
   * @param input A string character sequence OR an integer value.
   * @returns Returns a string in uppercase OR returns an integer (see description).
   * @see https://wiki.mtasa.com/wiki/Utf8.upper
   **/
  upper(input: number): number;
  
  /**
   * Calculates the width of UTF-8 strings with special/unprintable characters, which require special width treatment.
   * @param input A string character sequence OR a codepoint integer.
   * @param [ambi_is_double=false] A boolean, if set to true, ambiguous character's width is 2 (see example below).
   * @param [default_width=0] An integer, if given, is used as width for unprintable characters..
   * @returns Returns the integer width of the input string OR the width of the codepoint integer.
   * @see https://wiki.mtasa.com/wiki/Utf8.width
   **/
  width(input: string | number, ambi_is_double?: boolean, default_width?: number): number;

  /**
   * Returns the location, offset and width of the character at the given location in the UTF-8 string.
   * @param input A string character sequence.
   * @param location unknown
   * @param [ambi_is_double=false] A boolean, if set to true, ambiguous character's width is 2 (see example).
   * @param [default_width=0] An integer, if given, is used as width for unprintable characters.
   * @returns Returns the given location, the offset in UTF-8 encoding (if cursor is in the middle of the wide char - offset will be 2) and the width of the character, otherwise only the location as integer will be returned.
   * @see https://wiki.mtasa.com/wiki/Utf8.widthindex
   * @tupleReturn
   **/
  widthindex(input: string, location: number, ambi_is_double?: boolean, default_width?: number): [number, number, number];
}

declare const utf8: UTF8Interface;
