/**
 * Set is a collection of unique elements.
 *
 * @export
 * @class Set
 */
export class Set {

  /**
   * Creates an instance of Set.
   *
   */
  constructor() {
    this.dataStore = [];
  }

  /**
   * Adds data to a set.
   *
   * @param {string} data
   * @return {boolean} true if data has been stored, otherwise returns false.
   */
  add( data ) {

    if ( this.contains( data ) === false ) {

      this.dataStore.push( data );
      return true;

    }

    return false;

  }

  /**
   * Removes data from a set.
   *
   * @param {(string|number|{})} data
   * @return {boolean} true if data was removed, otherwise returns false.
   */
  remove( data ) {

    const pos = this.dataStore.indexOf( data );

    if ( pos > -1 ) {

      this.dataStore.splice( pos, 1 );
      return true;

    }

    return false;

  }

  /**
   * [a ∪ b] Combines two sets using the union set operation to form a new set.
   *
   * @param {Set} set
   * @return {Set} a new set.
   */
  union( set ) {

    const tempSet = new Set();

    for ( const member of this.dataStore ) {
      tempSet.add( member );
    }

    for ( const member of set.dataStore ) {
      tempSet.add( member );
    }

    return tempSet;

  }

  /**
   * [a ∩ b] Creates a new set that contains those elements of the first set
   * that are also in the second set.
   *
   * @param {Set} set - second set.
   * @return {Set} a new set.
   */
  intersect( set ) {

    const tempSet = new Set();

    for ( const member of this.dataStore ) {
      if ( set.contains( member ) === true ) tempSet.add( member );
    }

    return tempSet;

  }

  /**
   * [a \ b] Creates a new set that contains those members of the first set
   * that are not in the second set.
   *
   * @param {Set} set - second set.
   * @return {Set} a new set
   */
  difference( set ) {

    const tempSet = new Set();

    for ( const member of this.dataStore ) {
      if ( set.contains( member ) === false ) tempSet.add( member );
    }

    return tempSet;

  }

  /**
   * Makes sure that this set is a subset of the set.
   *
   * @param {Set} set - second set.
   * @return {boolean} true if this set is a subset, otherwise returns false.
   */
  subset( set ) {

    if ( this.size() > set.size() ) return false;

    for ( const member of this.dataStore ) {
      if ( set.contains( member ) === false ) return false;
    }

    return true;

  }

  /**
   * Checks if a specified member is part of a set.
   *
   * @param {string} data
   * @return {boolean} true if a set contains data, otherwise returns true.
   */
  contains( data ) {

    return this.dataStore.indexOf( data ) > -1;

  }

  /**
   * Returns the number of elements in a set.
   *
   * @return {number} size of a set
   */
  size() {
    return this.dataStore.length;
  }

  /**
   * [Optional]. Returns the string representation of a set.
   */
  toString() {

  }

}
