/**
 * The Node class consists of the data and "next",
 * which store a link to the next node in the linked list.
 *
 * @class Node
 */
export class Node {

  /**
   * Creates an instance of Node.
   *
   * @param {string} data - the node data.
   * @param {Node} [next=null] - a link to the next node.
   */
  constructor( data, next = null ) {

    this.data = data;
    this.next = next;

  }

}

/**
 * A linked list is a collection of objects called nodes.
 *
 * @class LinkedList
 */
export class LinkedList {

  /**
   * Creates an instance of LinkedList.
   */
  constructor() {

    this.numberOfNodes = 1;
    this.head = new Node( 'head' );

  }

  /**
   * Searches through the linked list looking the item.
   *
   * @param {string} data - The Node item.
   * @return {(Node|null)} returns the node storing the data or null if didn't find the item.
   */
  find( data ) {

    let currentNode = this.head;

    while ( currentNode !== null && currentNode.data !== data ) {
      currentNode = currentNode.next;
    }


    return currentNode;

  }

  /**
   * Finds the node before the item.
   *
   * @param {string} data - A node data to find.
   * @return {(Node|null)} returns the previous node.
   */
  findPrevious( data ) {

    let currentNode = this.head;

    while ( currentNode.next !== null ) {

      if ( currentNode.next.data === data ) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;

  }

  /**
   * Inserts a new item after an existing item.
   *
   * @param {string} newItem - New node of the linked list.
   * @param {string} item - The node after which the new node will be inserted.
   */
  insert( newItem, item ) {

    const newNode = new Node( newItem );
    const currentNode = this.find( item );

    // currentNode -> newNode -> nextNode
    newNode.next = currentNode.next;
    currentNode.next = newNode;

    this.numberOfNodes += 1;

  }

  /**
   * Removes a node from the list.
   *
   * @param {string} item - Item to remove.
   */
  remove( item ) {

    const previousNode = this.findPrevious( item );

    if ( previousNode !== null && previousNode.next !== null ) {

      previousNode.next = previousNode.next.next;

      this.numberOfNodes -= 1;

    }

  }

  /**
   * Returns the number of nodes in a list.
   *
   * @return {number} number of nodes.
   */
  length() {

    return this.numberOfNodes;

  }

  /**
   * Converts the Linked List to the array.
   *
   * @return {Array} returns an array.
   */
  toArray() {

    const newArray = [];

    let currentNode = this.head;
    let nodeNumber = 0;

    while ( currentNode !== null ) {
      newArray[ nodeNumber ] = currentNode.data;

      currentNode = currentNode.next;
      nodeNumber += 1;
    }

    return newArray;

  }

  /**
   * [Optional] Converts the linked list to string.
   */
  toSting() {
  }

}
