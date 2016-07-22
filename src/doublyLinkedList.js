/**
 * Stores a data, link to the next node and the previous node.
 *
 * @class Node
 */
export class Node {

  /**
   * Creates an instance of Node.
   *
   * @param {string} data - the node data.
   */
  constructor( data ) {

    this.data = data;
    this.next = null;
    this.previous = null;

  }

}

/**
 * The Doubly Linked List is a list that contains links to next and previous nodes.
 *
 * @class DoublyLinkedList
 */
export class DoublyLinkedList {

  /**
   * Creates an instance of DoublyLinkedList.
   */
  constructor() {

    this.head = new Node( 'head' );
    this.numberOfNodes = 1;

  }

  /**
   * Searches through the list looking an item.
   *
   * @param {string} data - a node data to find..
   * @return {Node} returns the node storing the data.
   */
  find( data ) {

    let currentNode = this.head;

    while ( currentNode !== null && currentNode.data !== data ) {
      currentNode = currentNode.next;
    }

    return currentNode;

  }

  /**
   * Finds the last node in the list.
   *
   * @return {Node} last node
   */
  findLast() {

    let currentNode = this.head;

    while ( currentNode !== null && currentNode.next !== null ) {
      currentNode = currentNode.next;
    }

    return currentNode;

  }

  /**
   * Inserts a new item after an existing item.
   *
   * @param {string} newItem - New node of the list.
   * @param {string} item - The node after which the new node will be inserted.
   */
  insert( newItem, item ) {

    const newNode = new Node( newItem );
    const currentNode = this.find( item );

    newNode.next = currentNode.next;
    newNode.previous = currentNode;
    currentNode.next = newNode;

    //
    this.numberOfNodes += 1;

  }

  /**
   * Removes a node
   *
   * 1. Find the node in the list that is storing the item.
   * 2. Set that node’s previous property to the node pointed to by the deleted node’s next property.
   * 3. Redirect the previous property of the node to the node before the deleted node.
   *
   * @param {string} item - item to remove
   */
  remove( item ) {

    const currentNode = this.find( item );

    if ( currentNode === null ) return;

    currentNode.previous.next = currentNode.next;
    currentNode.next.previous = currentNode.previous;

    // removing of node
    currentNode.next = null;
    currentNode.previous = null;

    //
    this.numberOfNodes -= 1;
  }

  /**
   * Returns the number of nodes in the doubly linked list.
   *
   * @return {number} number of nodes in the doubly linked list.
   */
  length() {

    return this.numberOfNodes;

  }

  /**
   * Converts the Doubly Linked List to the array.
   *
   * @return {Array} returns an array of node's data.
   */
  toArray() {

    let currentNode = this.head;

    const arrayList = [];
    let nodeNumber = 0;

    while ( currentNode !== null ) {

      arrayList[ nodeNumber ] = currentNode.data;

      currentNode = currentNode.next;
      nodeNumber += 1;

    }

    return arrayList;

  }

  /**
   * [Optional] Converts the linked list to string.
   */
  toSting() {
  }

}
