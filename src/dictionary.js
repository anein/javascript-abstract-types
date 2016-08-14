/**
 * Dictionary is a data structure that stores data as key-value paris.
 *
 * @class Dictionary
 */
export class Dictionary {

  /**
   * Creates an instance of Dictionary.
   */
  constructor() {

    this.dataStore = [];
    // count of entries
    this.entries = 0;

  }

  /**
   * Adds a new element to a dictionary.
   *
   * @param {string} key - index of the value element.
   * @param {(string|number|{})} value - element data.
   */
  add( key, value ) {

    this.dataStore[ key ] = value;
    this.entries += 1;

  }

  /**
   * Takes a key and returns the value associated with it.
   *
   * @param {string} key - index of the element.
   * @return {(string|number|{})} - the value associated with the key.
   */
  find( key ) {
    return this.dataStore[ key ];
  }

  /**
   * Removes a key-value pair from a dictionary.
   *
   * @param {string} key - index of the element.
   */
  remove( key ) {

    const element = this.dataStore[ key ];

    if ( element ) {
      delete this.dataStore[ key ];
      this.entries -= 1;
    }

  }

  /**
   * Removes all elements of a dictionary.
   */
  clear() {

    this.dataStore = {};
    this.entries = 0;

  }

  /**
   * Returns count of entries in a dictionary.
   *
   * @return {number} count of entries in a dictionary.
   */
  count() {
    return this.entries;
  }

  /**
   * [Optional]. Returns the string representation of a dictionary.
   */
  toString() {
  }

}
