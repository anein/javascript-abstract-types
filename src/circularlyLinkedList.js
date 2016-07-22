/**
 * The Node class consists of the data and "next".
 *
 * @class Node
 */
export class Node {

  /**
   * Creates an instance of Node.
   *
   * @param {string} data - The node data.
   * @param {Node} [next=null] - a link to the next node.
   */
  constructor( data, next = null ) {

    this.data = data;
    this.next = next;

  }

}

/**
 * Circularly Linked List has its head node's next property point back to itself.
 *
 * @class CircularlyLinkedList
 */
export class CircularlyLinkedList {

  /**
   * Creates an instance of CircularlyLinkedList.
   */
  constructor() {

    this.head = new Node( 'head' );
    // circle
    this.head.next = this.head;
    this.numberOfNodes = 1;

  }

  /**
   * Searches through the linked list looking the item.
   *
   * @param {string} data - a node data to find.
   * @return {Node} returns the node storing the data.
   */
  find( data ) {

    let currentNode = this.head;

    while ( currentNode.data !== data && currentNode.next.data !== 'head' ) {
      currentNode = currentNode.next;
    }

    return currentNode;

  }

  /**
   * Finds the node before the item.
   *
   * @param {string} data - a node data to find.
   * @return {(Node|null)} returns the previous node or the head node.
   */
  findPrevious( data ) {

    let currentNode = this.head;

    while ( currentNode.next.data !== 'head' ) {

      if ( currentNode.next.data === data ) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;

  }

  /**
   * Inserts a new item after an existing node.
   *
   * @param {string} newItem - New data of the linked list.
   * @param {string} item - The node after which the new node will be inserted.
   */
  insert( newItem, item ) {

    const newNode = new Node( newItem );
    const currentNode = this.find( item );

    newNode.next = currentNode.next;
    currentNode.next = newNode;

    this.numberOfNodes += 1;

  }

  /**
   * Removes a node from the list.
   *
   * @param {string} data - Item to remove.
   */
  remove( data ) {

    const previousNode = this.findPrevious( data );

    if ( previousNode && data !== 'head' ) {

      previousNode.next = previousNode.next.next;

      this.numberOfNodes -= 1;

    }

  }

  /**
   * Returns the number of nodes in a list.
   *
   * @return {number} number of nodes in the list.
   */
  length() {

    return this.numberOfNodes;

  }

  /**
   * Converts the list to the array.
   *
   * @return {Array} returns an array of node's data.
   */
  toArray() {

    const newArray = [];

    let currentNode = this.head;
    let nodeNumber = 0;

    while ( currentNode.next.data !== 'head' ) {

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
