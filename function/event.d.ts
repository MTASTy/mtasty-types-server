declare type EventHandler = (...args: any[]) => void;

/**
 * @property tickStart A number estimating how many ticks until the data transfer starts (Negative means the transfer has already started)
 * @property tickEnd A number estimating how many ticks until the data transfer completes
 * @property totalSize A number representing how many bytes in total this transfer will transfer
 * @property percentComplete A number between 0-100 saying how much is done
 */
declare type LatentEventStatus = {
  tickStart: number;
  tickEnd: number;
  totalSize: number;
  percentComplete: number;
}

/**
 * This function allows you to register a custom event.
 * Custom events function exactly like the built-in events.
 * See event system for more information on the event system.
 * @param eventName The name of the event you wish to create.
 * @param [allowRemoteTrigger=false] A boolean specifying whether this event can be called remotely using triggerClientEvent / triggerServerEvent or not.
 * @returns Returns true if the event was added successfully, false if the event was already added.
 * @see https://wiki.mtasa.com/wiki/AddEvent
 **/
declare function addEvent(eventName: string, allowRemoteTrigger?: boolean): boolean;

/**
 * This function will add an event handler.
 * An event handler is a function that will be called when the event it's attached to is triggered.
 * See event system for more information on how the event system works.
 * Event handlers are functions that are called when a particular event happens.
 * Each event specifies a specific set of variables that are passed to the event handler and can be read by your function.
 * It is important to remember that events pass up and down the element tree.
 * An event triggered on the root element is triggered on every element in the tree.
 * An event triggered on any other element is triggered on its ancestors (its parent element and its parent's parent etc) and its children, grandchildren and great-grandchildren.
 * You can use the getPropagated argument to specify if you wish your handler to receive events that have propagated up or down the tree.
 * The order in which event handlers are triggered is undefined, you should not rely on one event handler being executed before another.
 * - Important note: Do NOT use the same name for your handler function as the event name, as this can lead to confusion if multiple handler functions are used.
 * - Note: See Script security for tips on preventing cheaters when using events and element data
 * - Note: See Event Source Element for a descriptive visualization of the event system handling an event trigger.
 * @param eventName The name of the event you want to attach the handler function to.
 * @param attachedTo The element you wish to attach the handler to. The handler will only be called when the event it is attached to is triggered for this element, or one of its children. Often, this can be the root element (meaning the handler will be called when the event is triggered for any element).
 * @param handlerFunction The handler function you wish to call when the event is triggered. This function will be passed all of the event's parameters as arguments, but it isn't required that it takes all of them.
 * @param [getPropagated=true] A boolean representing whether the handler will be triggered if the event was propagated down or up the element tree (starting from the source), and not triggered directly on attachedTo (that is, handlers attached with this argument set to false will only be triggered if source == this).
 * @param [priority="normal"] A string representing the trigger order priority relative to other event handlers of the same name. Possible values are: "high", "normal", "low"
 * @returns Returns true if the event handler was attached successfully. Returns false if the specified event could not be found or any parameters were invalid.
 * @see https://wiki.mtasa.com/wiki/AddEventHandler
 **/
declare function addEventHandler(eventName: string, attachedTo: Element, handlerFunction: EventHandler, getPropagated?: boolean, priority?: "high" | "normal" | "low"): boolean;

/**
 * This function is used to stop the automatic internal handling of events, for example this can be used to prevent an item being given to a player when they walk over a pickup, by canceling the onPickupUse event.
 * cancelEvent does not have an effect on all events, see the individual event's pages for information on what happens when the event is canceled.
 * cancelEvent does not stop further event handlers from being called, as the order of event handlers being called is undefined in many cases.
 * Instead, you can see if the currently active event has been cancelled using wasEventCancelled.
 * The use of cancelEvent outside of an event handler has no effect.
 * If you implement your own custom events and want to handle them being cancelled, you should call wasEventCancelled to check after your call to triggerEvent.
 * @param [cancel=true] True to cancel, false to uncancel.
 * @param [reason=""] The reason for cancelling the event.
 * @returns Always returns true.
 * @see https://wiki.mtasa.com/wiki/CancelEvent
 **/
declare function cancelEvent(cancel?: boolean, reason?: string): true;

/**
 * Stops a latent event from completing
 * @param thePlayer The player who is receiving the event.
 * @param handle A handle previous got from getLatentEventHandles.
 * @returns Returns a true if the latent event was successfully cancelled, or false if it was not
 * @see https://wiki.mtasa.com/wiki/CancelLatentEvent
 **/
declare function cancelLatentEvent(thePlayer: Player, handle: number): boolean;

/**
 * Gets the reason for cancelling an event.
 * @returns Returns the reason that was given with cancelEvent
 * @see https://wiki.mtasa.com/wiki/GetCancelReason
 **/
declare function getCancelReason(): string;

/**
 * This function gets the attached functions from the event and attached element from current script.
 * @param eventName The name of the event. For example ("onPlayerWasted").
 * @param attachedTo The element attached to.
 * @returns Returns table with attached functions, empty table otherwise.
 * @see https://wiki.mtasa.com/wiki/GetEventHandlers
 **/
declare function getEventHandlers(eventName: string, attachedTo: Element): EventHandler[];

/**
 * Gets the currently queued latent events.
 * The last one in the table is always the latest event queued.
 * Each returned handle can be used with getLatentEventStatus or cancelLatentEvent
 * @param thePlayer The player who is receiving the events.
 * @returns Returns a table of handles or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetLatentEventHandles
 **/
declare function getLatentEventHandles(thePlayer: Player): EventHandler[] | false;

/**
 * Gets the status of one queued latent event.
 * @param thePlayer The player who is receiving the event.
 * @param handle A handle previous got from getLatentEventHandles.
 * @returns {LatentEventStatus} Returns a table with the following info or false if invalid arguments were passed
 * @see https://wiki.mtasa.com/wiki/GetLatentEventStatus
 **/
declare function getLatentEventStatus(thePlayer: Player, handle: number): LatentEventStatus | false;

/**
 * This functions removes a handler function from an event, so that the function is not called anymore when the event is triggered.
 * See event system for more information on how the event system works.
 * @param eventName The name of the event you want to detach the handler function from.
 * @param attachedTo The element the handler was attached to.
 * @param functionVar The handler function that was attached.
 * @returns Returns true if the event handler was removed successfully. Returns false if the specified event handler could not be found or invalid parameters were passed.
 * @see https://wiki.mtasa.com/wiki/RemoveEventHandler
 **/
declare function removeEventHandler(eventName: string, attachedTo: Element, functionVar: EventHandler): boolean;

/**
 * This function will trigger a named event on a specific element in the element tree.
 * See event system for more information on how the event system works.
 * You can use the value returned from this function to determine if the event was cancelled by one of the event handlers.
 * You should determine what your response (if any) to this should be based on the event's purpose.
 * Generally, cancelling an event should prevent any further code being run that is dependent on whatever triggered that event.
 * For example, if you have an onFlagCapture event, cancelling it would be expected to prevent the flag being able to be captured.
 * Similarly, if you have onPlayerKill as an event you trigger, canceling it would either be expected to prevent the player being killed from dying or at least prevent the player from getting a score for it.
 * - Note: You should avoid triggering events on the root element unless you really need to. Doing this triggers the event on every element in the element tree, which is potentially very CPU intensive. Use as specific (i.e. low down the tree) element as you can.
 * - Note: See Event Source Element for a descriptive visualization of the event system handling an event trigger.
 * @param eventName The name of the event you wish to trigger
 * @param baseElement The element you wish to trigger the event on. See event system for information on how this works.
 * @param args The first argument that the event handler expects should be added after the baseElement variable. This function can have more than one of these arguments specified, once for each argument the event handler is expecting.
 * @returns Returns undefined if the arguments are invalid or the event could not be found. Returns true if the event was triggered successfully, and was not cancelled using cancelEvent. Returns false if the event was triggered successfully, and was cancelled using cancelEvent.
 * @see https://wiki.mtasa.com/wiki/TriggerEvent
 **/
declare function triggerEvent(eventName: string, baseElement: Element, ...args: any[]): undefined | boolean;

/**
 * This function triggers an event previously registered on a client.
 * This is the primary means of passing information between the server and the client.
 * Clients have a similar triggerServerEvent function that can do the reverse.
 * You can treat this function as if it was an asynchronous function call, using triggerServerEvent to pass back any returned information if necessary.
 * Almost any data types can be passed as expected, including elements and complex nested tables.
 * Non-element MTA data types like xmlNodes or resource pointers will not be able to be passed as they do not necessarily have a valid representation on the client.
 * Events are sent reliably, so clients will receive them, but there may be (but shouldn't be) a significant delay before they are received.
 * You should take this into account when using them.
 * Keep in mind the bandwidth issues when using events - don't pass a large list of arguments unless you really need to. It is marginally more efficient to pass one large event than two smaller ones.
 * - Important note: Non-element MTA data types like xmlNodes or resource pointers will not be able to be passed as they do not necessarily have a valid representation on the client.
 * - Note: It is marginally more efficient to pass one large event than two smaller ones.
 * @param sendTo The event will be sent to all players that are children of the specified element. By default this is the root element, and hence the event is sent to all players. If you specify a single player it will just be sent to that player. This argument can also be a table of player elements.
 * @param name The name of the event to trigger client side. You should register this event with addEvent and add at least one event handler using addEventHandler.
 * @param sourceElement The element that is the source of the event.
 * @param args A list of arguments to trigger with the event. You can pass any lua data type (except functions). You can also pass elements.
 * @returns Returns true if the event trigger has been sent, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/TriggerClientEvent
 **/
declare function triggerClientEvent(sendTo: Element, name: string, sourceElement: Element, ...args: any[]): boolean;

/**
 * This function triggers an event previously registered on a client.
 * This is the primary means of passing information between the server and the client.
 * Clients have a similar triggerServerEvent function that can do the reverse.
 * You can treat this function as if it was an asynchronous function call, using triggerServerEvent to pass back any returned information if necessary.
 * Almost any data types can be passed as expected, including elements and complex nested tables.
 * Non-element MTA data types like xmlNodes or resource pointers will not be able to be passed as they do not necessarily have a valid representation on the client.
 * Events are sent reliably, so clients will receive them, but there may be (but shouldn't be) a significant delay before they are received.
 * You should take this into account when using them.
 * Keep in mind the bandwidth issues when using events - don't pass a large list of arguments unless you really need to. It is marginally more efficient to pass one large event than two smaller ones.
 * - Important note: Non-element MTA data types like xmlNodes or resource pointers will not be able to be passed as they do not necessarily have a valid representation on the client.
 * - Note: It is marginally more efficient to pass one large event than two smaller ones
 * @param name The name of the event to trigger client side. You should register this event with addEvent and add at least one event handler using addEventHandler.
 * @param sourceElement The element that is the source of the event.
 * @param args A list of arguments to trigger with the event. You can pass any lua data type (except functions). You can also pass elements.
 * @returns Returns true if the event trigger has been sent, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/TriggerClientEvent
 **/
declare function triggerClientEvent(name: string, sourceElement: Element, ...args: any[]): boolean;

/**
 * This function is the same as triggerClientEvent except the transmission rate of the data contained in the arguments can be limited
 * and other network traffic is not blocked while the data is being transferred.
 * - Note: You should avoid triggering events on the root element unless you really need to. Doing this triggers the event on every element in the element tree, which is potentially very CPU intensive. Use as specific (i.e. low down the tree) element as you can.
 * @param sendTo The event will be sent to all players that are children of the specified element. By default this is the root element, and hence the event is sent to all players. If you specify a single player it will just be sent to that player. This argument can also be a table of player elements.
 * @param name The name of the event to trigger client side. You should register this event with addEvent and add at least one event handler using addEventHandler.
 * @param bandwidth The bytes per second rate to send the data contained in the arguments.
 * @param persist A bool indicating whether the transmission should be allowed to continue even after the resource that triggered it has since stopped.
 * @param theElement The element that is the source of the event. This could be another player, or if this isn't relevant, use the root element.
 * @param args A list of arguments to trigger with the event. You can pass any Lua data type (except functions). You can also pass elements. The total amount of data should not exceed 100MB.
 * @returns Returns true if the event trigger has been sent, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/TriggerLatentClientEvent
 **/
declare function triggerLatentClientEvent(sendTo: Element | Element[], name: string, bandwidth: number, persist: boolean, theElement: Element, ...args: any[]): boolean;

/**
 * This function is the same as triggerClientEvent except the transmission rate of the data contained in the arguments can be limited
 * and other network traffic is not blocked while the data is being transferred.
 * - Note: You should avoid triggering events on the root element unless you really need to. Doing this triggers the event on every element in the element tree, which is potentially very CPU intensive. Use as specific (i.e. low down the tree) element as you can.
 * @param sendTo The event will be sent to all players that are children of the specified element. By default this is the root element, and hence the event is sent to all players. If you specify a single player it will just be sent to that player. This argument can also be a table of player elements.
 * @param name The name of the event to trigger client side. You should register this event with addEvent and add at least one event handler using addEventHandler.
 * @param bandwidth The bytes per second rate to send the data contained in the arguments.
 * @param theElement The element that is the source of the event. This could be another player, or if this isn't relevant, use the root element.
 * @param args A list of arguments to trigger with the event. You can pass any Lua data type (except functions). You can also pass elements. The total amount of data should not exceed 100MB.
 * @returns Returns true if the event trigger has been sent, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/TriggerLatentClientEvent
 **/
declare function triggerLatentClientEvent(sendTo: Element | Element[], name: string, bandwidth: number, theElement: Element, ...args: any[]): boolean;

/**
 * This function is the same as triggerClientEvent except the transmission rate of the data contained in the arguments can be limited
 * and other network traffic is not blocked while the data is being transferred.
 * - Note: You should avoid triggering events on the root element unless you really need to. Doing this triggers the event on every element in the element tree, which is potentially very CPU intensive. Use as specific (i.e. low down the tree) element as you can.
 * @param sendTo The event will be sent to all players that are children of the specified element. By default this is the root element, and hence the event is sent to all players. If you specify a single player it will just be sent to that player. This argument can also be a table of player elements.
 * @param name The name of the event to trigger client side. You should register this event with addEvent and add at least one event handler using addEventHandler.
 * @param persist  A bool indicating whether the transmission should be allowed to continue even after the resource that triggered it has since stopped.
 * @param theElement The element that is the source of the event. This could be another player, or if this isn't relevant, use the root element.
 * @param args A list of arguments to trigger with the event. You can pass any Lua data type (except functions). You can also pass elements. The total amount of data should not exceed 100MB.
 * @returns Returns true if the event trigger has been sent, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/TriggerLatentClientEvent
 **/
declare function triggerLatentClientEvent(sendTo: Element | Element[], name: string, persist: boolean, theElement: Element, ...args: any[]): boolean;

/**
 * This function is the same as triggerClientEvent except the transmission rate of the data contained in the arguments can be limited
 * and other network traffic is not blocked while the data is being transferred.
 * - Note: You should avoid triggering events on the root element unless you really need to. Doing this triggers the event on every element in the element tree, which is potentially very CPU intensive. Use as specific (i.e. low down the tree) element as you can.
 * @param sendTo The event will be sent to all players that are children of the specified element. By default this is the root element, and hence the event is sent to all players. If you specify a single player it will just be sent to that player. This argument can also be a table of player elements.
 * @param name The name of the event to trigger client side. You should register this event with addEvent and add at least one event handler using addEventHandler.
 * @param theElement The element that is the source of the event. This could be another player, or if this isn't relevant, use the root element.
 * @param args A list of arguments to trigger with the event. You can pass any Lua data type (except functions). You can also pass elements. The total amount of data should not exceed 100MB.
 * @returns Returns true if the event trigger has been sent, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/TriggerLatentClientEvent
 **/
declare function triggerLatentClientEvent(sendTo: Element | Element[], name: string, theElement: Element, ...args: any[]): boolean;

/**
 * This function is the same as triggerClientEvent except the transmission rate of the data contained in the arguments can be limited
 * and other network traffic is not blocked while the data is being transferred.
 * - Note: You should avoid triggering events on the root element unless you really need to. Doing this triggers the event on every element in the element tree, which is potentially very CPU intensive. Use as specific (i.e. low down the tree) element as you can.
 * @param name The name of the event to trigger client side. You should register this event with addEvent and add at least one event handler using addEventHandler.
 * @param bandwidth The bytes per second rate to send the data contained in the arguments.
 * @param persist A bool indicating whether the transmission should be allowed to continue even after the resource that triggered it has since stopped.
 * @param theElement The element that is the source of the event. This could be another player, or if this isn't relevant, use the root element.
 * @param args A list of arguments to trigger with the event. You can pass any Lua data type (except functions). You can also pass elements. The total amount of data should not exceed 100MB.
 * @returns Returns true if the event trigger has been sent, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/TriggerLatentClientEvent
 **/
declare function triggerLatentClientEvent(name: string, bandwidth: number, persist: boolean, theElement: Element, ...args: any[]): boolean;

/**
 * This function is the same as triggerClientEvent except the transmission rate of the data contained in the arguments can be limited
 * and other network traffic is not blocked while the data is being transferred.
 * - Note: You should avoid triggering events on the root element unless you really need to. Doing this triggers the event on every element in the element tree, which is potentially very CPU intensive. Use as specific (i.e. low down the tree) element as you can.
 * @param name The name of the event to trigger client side. You should register this event with addEvent and add at least one event handler using addEventHandler.
 * @param bandwidth The bytes per second rate to send the data contained in the arguments.
 * @param theElement The element that is the source of the event. This could be another player, or if this isn't relevant, use the root element.
 * @param args A list of arguments to trigger with the event. You can pass any Lua data type (except functions). You can also pass elements. The total amount of data should not exceed 100MB.
 * @returns Returns true if the event trigger has been sent, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/TriggerLatentClientEvent
 **/
declare function triggerLatentClientEvent(name: string, bandwidth: number, theElement: Element, ...args: any[]): boolean;

/**
 * This function is the same as triggerClientEvent except the transmission rate of the data contained in the arguments can be limited
 * and other network traffic is not blocked while the data is being transferred.
 * - Note: You should avoid triggering events on the root element unless you really need to. Doing this triggers the event on every element in the element tree, which is potentially very CPU intensive. Use as specific (i.e. low down the tree) element as you can.
 * @param name The name of the event to trigger client side. You should register this event with addEvent and add at least one event handler using addEventHandler.
 * @param persist  A bool indicating whether the transmission should be allowed to continue even after the resource that triggered it has since stopped.
 * @param theElement The element that is the source of the event. This could be another player, or if this isn't relevant, use the root element.
 * @param args A list of arguments to trigger with the event. You can pass any Lua data type (except functions). You can also pass elements. The total amount of data should not exceed 100MB.
 * @returns Returns true if the event trigger has been sent, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/TriggerLatentClientEvent
 **/
declare function triggerLatentClientEvent(name: string, persist: boolean, theElement: Element, ...args: any[]): boolean;

/**
 * This function is the same as triggerClientEvent except the transmission rate of the data contained in the arguments can be limited
 * and other network traffic is not blocked while the data is being transferred.
 * - Note: You should avoid triggering events on the root element unless you really need to. Doing this triggers the event on every element in the element tree, which is potentially very CPU intensive. Use as specific (i.e. low down the tree) element as you can.
 * @param name The name of the event to trigger client side. You should register this event with addEvent and add at least one event handler using addEventHandler.
 * @param theElement The element that is the source of the event. This could be another player, or if this isn't relevant, use the root element.
 * @param args A list of arguments to trigger with the event. You can pass any Lua data type (except functions). You can also pass elements. The total amount of data should not exceed 100MB.
 * @returns Returns true if the event trigger has been sent, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/TriggerLatentClientEvent
 **/
declare function triggerLatentClientEvent(name: string, theElement: Element, ...args: any[]): boolean;

/**
 * This function checks if the last completed event was cancelled.
 * This is mainly useful for custom events created by scripts.
 * Events can be cancelled using cancelEvent, this indicates that the resource which triggered the event should do whatever it can to reverse any changes made by whatever caused the event.
 * See triggerEvent for a more detailed explanation of this.
 * @returns Returns true if the event was cancelled, false if it wasn't or doesn't exist.
 * @see https://wiki.mtasa.com/wiki/WasEventCancelled
 **/
declare function wasEventCancelled(): boolean;
