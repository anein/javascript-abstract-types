/**
 * The definition of a list abstract data type.
 */
class ListADT {

  constructor() {

    // number of elements in list
    this.listSize = 0;

    // Current position in list
    this.position = 0;

    // empty array to store list element;
    this.dataStore = [];
  }

  /**
   * Returns the length of elements in the list.
   *
   * @return {number}
   */
  length() {
    return this.listSize;
  }

  /**
   * Clears all elements from list
   */
  clear() {

    delete this.dataStore;

    this.dataStore = [];
    this.listSize = 0;
    this.position = 0;

  }

  /**
   * Returns all elements of list.
   *
   * @return {Array} The list
   */
  elements() {
    return this.dataStore;
  }

  /**
   * Returns string representation of list.
   */
  toString() {
    return this.dataStore;
  }

  /**
   * Returns element at current position.
   *
   * @return {number} The element at the current position;
   */
  getElement() {
    return this.dataStore[ this.position ];
  }

  /**
   * Inserts new element after exising element.
   *
   * @param {(number|string)} elem - A new element in the list
   * @param {(number|string)} [after=null] - The exising element in list.
   */
  insert( elem, after = null ) {

    if ( after ) {
      const insPos = this.find( after );

      if ( insPos > -1 ) {
        this.dataStore.splice( insPos + 1, 0, elem );
        this.listSize++;
        return true;
      }
      return false;
    }

    this.append( elem );

    return true;

  }

  /**
   * Adds new element to the end of the list.
   *
   * @param {(number|string)} elem - A new element
   */
  append( elem ) {
    this.dataStore[ this.listSize++ ] = elem;
  }

  /**
   * Removes element from the list.
   *
   * @param {(number|string)} elem - The element to remove
   * @return {boolean} success of the operation.
   */
  remove( elem ) {

    const foundAt = this.find( elem );

    if ( foundAt > -1 ) {

      this.dataStore.splice( foundAt, 1 );
      --this.listSize;
      return true;

    }

    return false;
  }

  /**
   * Finds the element in the list.
   *
   * @param {(number|string)} elem - The element to find.
   * @return {number} Index of the element, otherwise returns -1
   */
  find( elem ) {

    for ( let i = 0; i < this.dataStore.length; ++i ) {

      if ( this.dataStore[ i ] === elem ) return i;

    }

    return -1;
  }

  /**
   * Checks a particular value in the list.
   *
   * @param {(number|string)} elem - The element for checking.
   * @return {boolean} The result of the checking.
   */
  contains( elem ) {
    return ( this.find( elem ) > -1 );
  }

  /**
   * Sets surrent position to first element of list.
   */
  front() {
    this.position = 0;
  }

  /**
   * Sets current position to the last element of list.
   */
  end() {
    this.position = this.length() - 1;
  }

  /**
   * Moves current position back one element.
   */
  prev() {

    if ( this.position > 0 ) {
      --this.position;
    }

  }

  /**
   * Moves current position forward one element.
   */
  next() {
    if ( this.position < this.length() - 1 ) {
      ++this.position;
    }

  }

  /**
   * Returns the current position in list.
   *
   * @return {number} The current position in the list
   */
  currentPosition() {
    return this.position;
  }

  /**
   * Moves the current position to specified position.
   *
   * @param {number} position  - New position of the list.
   */
  moveTo( position ) {
    this.position = position;
  }
}

export default ListADT;
