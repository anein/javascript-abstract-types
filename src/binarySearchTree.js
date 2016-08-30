/**
 *
 *
 * @export
 * @class Node
 */
export class Node {

  /**
   * Creates an instance of Node.
   *
   * @param {number} value - node's value
   * @param {Node} [left=null] - left child of current node.
   * @param {Node} [right=null] - right child of current node.
   */
  constructor( value, left = null, right = null ) {

    this.value = value;
    this.left = left;
    this.right = right;

  }

  /**
   * Retrieves node's value.
   *
   * @return {number} value
   */
  show() {
    return this.value;
  }

}

// [private] stores the number of nodes.
const _nodesCount = new WeakMap();

/**
 *
 *
 * @export
 * @class BST
 */
export class BST {

  /**
   * Creates an instance of BST.
   *
   */
  constructor() {

    this.root = null;

    _nodesCount.set( this, 0 );

  }

  /**
   * Returns the number of nodes in a tree.
   *
   * @return {number} the number of nodes
   */
  get nodesCount() {
    return _nodesCount.get( this );
  }

  /**
   * Returns the number of edges in a tree - (n-1).
   *
   * @return {number} the number of adges
   */
  get edgesCount() {
    return (this.nodesCount === 0 ) ? 0 : this.nodesCount - 1;
  }

  /**
   * Inserts a new value to the binary tree.
   *
   * @param {number} value
   */
  insert( value ) {

    const node = new Node( value );

    // increments the node number
    _nodesCount.set( this, (_nodesCount.get( this ) + 1) );

    if ( this.root === null ) {

      this.root = node;
      return;

    }

    let currentNode = this.root;
    let parent = null;

    while ( true ) {

      parent = currentNode;

      // node goes to the left.
      if ( value < currentNode.value ) {

        currentNode = currentNode.left;

        if ( currentNode === null ) {

          parent.left = node;
          break;

        }

      } else {

        currentNode = currentNode.right;

        if ( currentNode === null ) {

          parent.right = node;
          break;

        }

      }

    }


  }

  /**
   * Removes the node by its value.
   *
   * @param {number} value
   */
  remove( value ) {

    const root = this.removeNode( this.root, value );

    if ( root !== null ) {

      this.root = root;
      // decrement the node number
      _nodesCount.set( this, this.countNodes( this.root ) );

    }

  }

  /**
   *  Checks to see if the node holds the value and has child nodes.
   *
   * @param {Node} node
   * @param {number} value
   *
   * @return {(Node|null)}
   */
  removeNode( node, value ) {

    if ( node === null ) return null;

    if ( value === node.value ) {

      // node has no children.
      if ( node.left === null && node.right === null ) {
        return null;
      }

      // node has no left child.
      if ( node.left === null ) {
        return node.right;
      }

      // node has no right child
      if ( node.right === null ) {
        return node.left;
      }

      const tempNode = this.getMin( node.right );

      node.value = tempNode.value;
      node.right = this.removeNode( node.right, tempNode.value );

      return node;

    } else if ( value < node.value ) {

      node.left = this.removeNode( node.left, value );
      return node;

    } else {

      node.right = this.removeNode( node.right, value );
      return node;

    }
  }

  /**
   * Finds a specific value.
   *
   * @param {number} value - searching value
   * @return {(Node|null)} node with the value being searched for, otherwise returns null.
   */
  find( value ) {

    let current = this.root;

    if ( current === null ) {
      return null;
    }

    while ( value !== current.value ) {

      if ( value < current.value ) {
        current = current.left;
      } else {
        current = current.right;
      }

      if ( current === null ) {
        return null;
      }

    }

    return current;

  }

  /**
   * Gets either the minimum value stored in a BST or the minimum value of a target node.
   *
   * @param {Node} node - child node
   * @return {Node} node with the maximum value.
   */
  getMin( node = this.root ) {

    let current = node;

    while ( current.left !== null ) {
      current = current.left;
    }

    return current;

  }

  /**
   * Gets the maximum value stored in a BST.
   *
   * @return {Node} node with the maximum value.
   */
  getMax() {

    let current = this.root;

    while ( current.right !== null ) {
      current = current.right;
    }

    return current;

  }

  /**
   * Counts the number of nodes in a tree.
   *
   * @param {Node} node
   * @return {number} the number of nodes.
   */
  countNodes( node ) {

    if ( node === null ) {
      return 0;
    }

    return this.countNodes( node.left ) + this.countNodes( node.right ) + 1;


  }


}
