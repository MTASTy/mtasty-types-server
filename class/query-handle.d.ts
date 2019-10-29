declare class QueryHandle {
  /**
   * This function checks the progress of a database query.
   * @param timeout How many milliseconds to wait for a result. Use 0 for an instant response (which may return nil). Use -1 to wait until a result is ready. Note: A wait here will freeze the entire server just like the executeSQL* functions.
   * @param [multipleResults=false] Set to true to enable the return values from multiple queries.
   * @returns Result, false or undefined.
   * @see https://wiki.mtasa.com/wiki/DbPoll
   **/
  poll(timeout: number, multipleResults?: boolean): DbQueryResult | undefined | false;

  /**
   * This function frees a database query handle.
   * dbFree only needs to be used if a result has not been obtained with dbPoll.
   * @returns Returns true if the handle was successfully freed, false otherwise.
   * @see https://wiki.mtasa.com/wiki/DbFree
   **/
  free(): boolean;
}
