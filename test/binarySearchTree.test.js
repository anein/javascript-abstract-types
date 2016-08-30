import { expect } from 'chai';
//
import { Node, BST } from '../src/binarySearchTree.js';


describe( 'BST tests', () => {

  /** @type {BST} */
  let bst = null;


  //
  describe( 'Initialization.', () => {

    //
    it( 'Is Node defined?', () => {

      expect( Node ).to.not.be.undefined;

    } );

    //
    it( 'Created Node should be instantiated of the Node type.', () => {

      const temp = new Node( 1 );

      expect( temp ).to.be.an.instanceof( Node );

    } );

    //
    it( 'Created Node should include the left and right nodes.', () => {

      const temp = new Node( 1 );
      const temp1 = new Node( 20 );
      const temp2 = new Node( 3, temp, temp1 );

      expect( temp2 ).to.be.an.instanceof( Node );
      expect( temp2.right ).to.not.be.null;
      expect( temp2.left ).to.not.be.null;

    } );

    //
    it( 'Is Binary Search Tree defined?.', () => {

      expect( BST ).to.not.be.undefined;

    } );

    //
    it( 'Created Object should be instantiated of the BST type.', () => {

      bst = new BST();

      expect( bst ).to.be.an.instanceof( BST );

    } );

    //
    it( 'Empty object should not have nodes.', () => {

      expect( bst.nodesCount ).to.be.equal( 0 );

    } );

    //
    it( 'Empty object should not have edges.', () => {

      expect( bst.edgesCount ).to.be.equal( 0 );

    } );

  } );

  //
  describe( 'Insertion.', () => {

    //
    it( 'Should insert 10 nodes to a tree.', () => {

      bst.insert( 6 );
      bst.insert( 2 );
      bst.insert( 1 );
      bst.insert( 11 );
      bst.insert( 15 );
      bst.insert( 8 );
      bst.insert( 9 );
      bst.insert( 10 );

      expect( bst.nodesCount ).to.be.equal( 8 );
      expect( bst.edgesCount ).to.be.equal( 7 );

    } );

  } );

  //
  describe( 'Reading.', () => {

    //
    it( 'Should not find a node in an empty tree.', () => {

      const node = new BST();

      expect( node.find( 12 ) ).to.be.null;

    } );

    //
    it( 'Should find existing value in the left subtree  - 2.', () => {

      const node = bst.find( 2 );

      expect( node ).to.not.be.null;
      expect( node.value ).to.be.equal( 2 );

    } );

    //
    it( 'Should find existing value in the right subtree - 15. ', () => {

      const node = bst.find( 15 );

      expect( node ).to.not.be.null;
      expect( node.value ).to.be.equal( 15 );

    } );

    //
    it( 'Must not find non-existent value - 32. ', () => {

      const node = bst.find( 32 );

      expect( node ).to.be.null;

    } );

    //
    it( 'Should find the minimum value in a tree - 1.', () => {

      const node = bst.getMin();

      expect( node ).to.not.be.null;
      expect( node.value ).to.be.equal( 1 );

    } );

    //
    it( 'Should find a node with the maximum value in a tree - 15.', () => {

      const node = bst.getMax();

      expect( node ).to.not.be.null;
      expect( node.value ).to.be.equal( 15 );

    } );

  } );

  //
  describe( 'Removing.', () => {


    it( 'Should not remove a node from an empty tree.', () => {

      const tmp = new BST();

      tmp.remove( 6 );

      expect( tmp.root ).to.be.null;

    } );

    it( 'Should remove the root node - 6.', () => {

      bst.remove( 6 );

      expect( bst.root.value ).to.be.equal( 8 );
      expect( bst.root.right.left.value ).to.be.equal( 9 );

    } );


    it( 'Should remove the root node where the left subtree does not have LEFT branches.', () => {

      bst = new BST();

      bst.insert( 6 );
      bst.insert( 2 );
      bst.insert( 4 );
      bst.insert( 3 );

      bst.remove( 6 );

      expect( bst.root.value ).to.be.equal( 2 );
      // expect( bst.root.right.value ).to.be.equal( 15 );

    } );

    it( 'Should remove the root node where the left subtree does not have RIGHT branches.', () => {

      bst = new BST();

      bst.insert( 6 );
      bst.insert( 5 );
      bst.insert( 4 );
      bst.insert( 3 );

      bst.remove( 6 );

      expect( bst.root.value ).to.be.equal( 5 );
      expect( bst.root.left.value ).to.be.equal( 4 );
      expect( bst.root.left.left.value ).to.be.equal( 3 );

    } );

    it( 'Should remove the root node where the right tree of the deletion node does not have a LEFT branch.', () => {

      bst = new BST();

      bst.insert( 6 );
      bst.insert( 2 );
      bst.insert( 1 );
      bst.insert( 4 );
      bst.insert( 11 );
      bst.insert( 15 );
      bst.insert( 17 );

      bst.remove( 6 );

      expect( bst.root.value ).to.be.equal( 11 );
      expect( bst.root.right.value ).to.be.equal( 15 );

    } );

    it( 'Should remove a node with two children.', () => {

      bst = new BST();

      bst.insert( 6 );
      bst.insert( 2 );
      bst.insert( 1 );
      bst.insert( 9 );
      bst.insert( 8 );
      bst.insert( 15 );
      bst.insert( 18 );
      bst.insert( 13 );
      bst.insert( 11 );

      bst.remove( 9 );

      expect( bst.root.right.value ).to.be.equal( 11 );
      expect( bst.root.right.right.left.value ).to.be.equal( 13 );
      expect( bst.nodesCount ).to.be.equal( 8 );

    } );

    //
    it( 'Should remove a node without children.', () => {


      bst.remove( 1 );

      expect( bst.root.left.value ).to.be.equal( 2 );
      expect( bst.root.left.left ).to.be.null;
      expect( bst.root.left.right ).to.be.null;
      expect( bst.nodesCount ).to.be.equal( 7 );

    } );


    //
    it( 'Should not remove non-existent node and change the current tree.', () => {


      bst.remove( 156 );

      expect( bst.nodesCount ).to.be.equal( 7 );
      expect( bst.edgesCount ).to.be.equal( 6 );

      expect( bst.root.left.value ).to.be.equal( 2 );
      expect( bst.root.left.left ).to.be.null;
      expect( bst.root.left.right ).to.be.null;

    } );


  } );


} );
