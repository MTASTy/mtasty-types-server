/** @customConstructor Connection */
declare class Connection extends BaseElement {
  /**
   * This function executes a database query using the supplied connection.
   * No result is returned.
   * - Tip: The server command debugdb 2 will output verbose information on each query to a logging file (usually logs/db.log)
   * @param databaseConnection A database connection element previously returned from dbConnect.
   * @param query An SQL query. Positions where parameter values will be inserted are marked with a "?".
   * @param params Params in SQL query.
   * @returns Returns true unless the connection is incorrect, in which case it returns false.
   * @see https://wiki.mtasa.com/wiki/DbExec
   **/
  static exec(databaseConnection: Connection, query: string, ...params: DbQueryParams): boolean;

  /**
   * This function escapes arguments in the same way as dbQuery, except dbPrepareString returns the query string instead of processing the query. This allows you to safely build complex query strings from component parts and help prevent (one class of) SQL injection.
   * @param databaseConnection A database connection element previously returned from dbConnect.
   * @param query An SQL query. Positions where parameter values will be inserted are marked with a "?".
   * @param params Params in SQL query.
   * @returns Returns a prepare SQL query string, or false if an error occurred.
   * @see https://wiki.mtasa.com/wiki/DbPrepareString
   **/
  static prepareString(databaseConnection: Connection, query: string, ...params: DbQueryParams): string | false;

  /**
   * This function starts a database query using the supplied connection.
   * Use the returned query handle with dbPoll to get the result, or dbFree if you don't want the result.
   * - Tip: The server command debugdb 2 will output verbose information on each query to a logging file (usually logs/db.log).
   * @param callbackFunction An optional function to be called when a result is ready. The function will only be called if the result has not already been read with dbPoll. The function is called with the query handle as the first argument. (Notice
   * @param callbackArguments An optional array containing extra arguments to be sent to the callback function.
   * @param databaseConnection A database connection element previously returned from dbConnect.
   * @param query An SQL query. Positions where parameter values will be inserted are marked with a "?".
   * @param params Params in SQL query.
   * @returns Returns a query handle unless the connection is incorrect, in which case it return false.
   * @see https://wiki.mtasa.com/wiki/DbQuery
   **/
  static query(callbackFunction: DbQueryCallbackFunction, callbackArguments: any[], databaseConnection: Connection, query: string, ...params: DbQueryParams): QueryHandle | false;

  /**
   * This function starts a database query using the supplied connection.
   * Use the returned query handle with dbPoll to get the result, or dbFree if you don't want the result.
   * - Tip: The server command debugdb 2 will output verbose information on each query to a logging file (usually logs/db.log).
   * @param callbackFunction An optional function to be called when a result is ready. The function will only be called if the result has not already been read with dbPoll. The function is called with the query handle as the first argument. (Notice
   * @param databaseConnection A database connection element previously returned from dbConnect.
   * @param query An SQL query. Positions where parameter values will be inserted are marked with a "?".
   * @param params Params in SQL query.
   * @returns Returns a query handle unless the connection is incorrect, in which case it return false.
   * @see https://wiki.mtasa.com/wiki/DbQuery
   **/
  static query(callbackFunction: DbQueryCallbackFunction, databaseConnection: Connection, query: string, ...params: DbQueryParams): QueryHandle | false;

  /**
   * This function opens a connection to a database and returns an element that can be used with dbQuery.
   * To disconnect use destroyElement.
   * - Note: Connecting and disconnecting many times can have a performance impact on the server. For optimal performance it is recommended that you use dbConnect only once when the resource starts, and share the connection element with the whole script.
   * @param databaseType The type of database. This can be either sqlite or mysql.
   * @param host Host address e.g. host=127.0.0.1
   * @param username Usually required for MySQL, ignored by SQLite.
   * @param password Usually required for MySQL, ignored by SQLite.
   * @param options List of key=value pairs separated by semicolons. Supported keys are: "share", "batch", "autoreconnect", "log", "tag", "suppress", "multi_statements".
   * @see https://wiki.mtasa.com/wiki/DbConnect
   **/
  constructor(databaseType: "sqlite" | "mysql", host: string, username?: string, password?: string, options?: string);
}
