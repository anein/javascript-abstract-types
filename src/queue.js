/**
 * Queue is a type of list where data are inserted at the end
 * and are removed from the from. [FIFO]
 */
export class Queue {

  /**
   * Creates an instance of Queue.
   */
  constructor() {

    // stores the queue elements
    this.dataStore = [];

  }

  /**
   * Adds an element to the end of a queue.
   *
   * @param {(number|string|object)} element - a new element.
   */
  enqueue( element ) {

    this.dataStore.push( element );

  }

  /**
   * Removes an element from the front of a queue.
   */
  dequeue() {

    return this.dataStore.shift();

  }

  /**
   * Returns the front element of a queue.
   */
  front() {

    return this.dataStore[ 0 ];

  }

  /**
   * Returns the back element of a queue.
   */
  back() {

    return this.dataStore[ this.dataStore.length - 1 ];

  }

  /**
   * Checks if a queue is empty.
   */
  isEmpty() {

    return ( this.dataStore.length === 0 );

  }

  /**
   * Returns the length of a queue.
   */
  length() {

    return this.dataStore.length;

  }

  /**
   * [Optional]. Returns the string representation of a queue.
   */
  toString() {

  }

}
