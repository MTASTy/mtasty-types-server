/** @customConstructor Timer */
declare class Timer {
  readonly valid: boolean;

  /**
   * This function allows you to trigger a function after a number of milliseconds have elapsed.
   * You can call one of your own functions or a built-in function.
   * For example, you could set a timer to spawn a player after a number of seconds have elapsed.
   * Once a timer has finished repeating, it no longer exists.
   * The minimum accepted interval is 0ms.
   * Multi Theft Auto guarantees that the timer will be triggered after at least the interval you specify.
   * The resolution of the timer is tied to the frame rate (server side and client-side).
   * All the overdue timers are triggered at a single point each frame.
   * This means that if, for example, the player is running at 30 frames per second, then two timers specified to occur after 100ms and 110ms would more than likely occur during the same frame, as the difference in time between the two timers (10ms) is less than half the length of the frame (33ms).
   * As with most timers provided by other languages, you shouldn't rely on the timer triggering at an exact point in the future.
   * - Important note: The speed at which a client side timer runs can be completely unreliable if a client is maliciously modifying their operating system speed, timers could run much faster or slower.
   * @param theFunction The function you wish the timer to call.
   * @param timeInterval The number of milliseconds that should elapse before the function is called (the minimum is 50 (0 on 1.5.6 r16715) 1000 milliseconds = 1 second).
   * @param timesToExecute The number of times you want the timer to execute, or 0 for infinite repetitions.
   * @param arguments Any arguments you wish to pass to the function can be listed after the timesToExecute argument.
   * @see https://wiki.mtasa.com/wiki/SetTimer
   **/
  constructor(theFunction: SimpleHandler, timeInterval: number, timesToExecute: number, ...arguments: any[]);

  /**
   * This function allows you to kill/halt existing timers.
   * @returns Returns true if the timer was successfully killed.
   * @see https://wiki.mtasa.com/wiki/KillTimer
   **/
  destroy(): boolean;

  /**
   * This function allows you to reset the elapsed time in existing timers to zero.
   * The function does not reset the 'times to execute' count on timers which have a limited amout of repetitions.
   * @returns Returns true if the timer was successfully reset.
   * @see https://wiki.mtasa.com/wiki/ResetTimer
   **/
  reset(): boolean;

  /**
   * This function checks if a variable is a timer.
   * - Note: This function is not reliable as timer ids are eventually recycled.
   * @returns Returns true if the passed value is a timer.
   * @see https://wiki.mtasa.com/wiki/IsTimer
   **/
  isValid(): boolean;

  /**
   * This function is for getting the details of a running timer.
   * @returns Returns false if the timer doesn't exist or stopped running.
   * @see https://wiki.mtasa.com/wiki/GetTimerDetails
   * @tupleReturn
   **/
  getDetails(): [number, number, number] | [false];
}
