/**
 * Hashing is a common technique for storing data in such a way that the
 * data can be inserted and retrieved very quickly.
 *
 * @class Hashtable
 */
export class Hashtable {

  /**
   * Creates an instance of Hashtable.
   */
  constructor() {

    this.table = {};

    this.tableSize = 0;
  }

  /**
   * Puts data to a hash table.
   *
   * @param {(string|number)} key - a key associated with data.
   * @param {string} data - data to store
   */
  put( key, data ) {

    const index = this.generateHash( key );

    this.table[ index ] = data;
    this.tableSize += 1;

  }

  /**
   * Returns the value associated with the given key.
   *
   * @param {(string|number)} key - index of element
   * @return {(string|number|{})} - the value of element.
   */
  get( key ) {
    return this.table[ this.generateHash( key ) ];
  }

  /**
   * Generates a unique hash for the data using Horner's method.
   *
   * @param {string} key - element key
   * @return {number} a unique hash
   */
  generateHash( key ) {

    const H = 37;

    let total = 0;

    for ( let i = 0; i < key.length; ++i ) {
      total += ( H * total ) + key.charCodeAt( i );
    }

    return total;
  }

  /**
   * Removes all elements from a hashtable.
   */
  clear() {

    this.table = {};
    this.tableSize = 0;

  }

  /**
   * Returns the number of element in a hashtable.
   *
   * @return {number} size of a hashtable.
   */
  length() {
    return this.tableSize;
  }

  /**
   * [Optional]. Returns the string representation of a dictionary.
   */
  toString() {
  }

}
