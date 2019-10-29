declare class Connection extends Element {
  // static exec(databaseConnection: Connection, query: string, ...params: DbQueryParams): boolean;
  // static prepareString(databaseConnection: Connection, query: string, ...params: DbQueryParams): string | false;
  // static query(callbackFunction: DbQueryCallbackFunction, callbackArguments: any[], databaseConnection: Connection, query: string, ...params: DbQueryParams): QueryHandle | false;

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