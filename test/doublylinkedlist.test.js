//
import { expect } from 'chai';

import { DoublyLinkedList, Node } from '../src/doublyLinkedList';

describe( 'DoublyLinkedList tests', () => {

  let list = null;

  describe( 'Initialization', () => {

    //
    it( 'Is Node defined.', () => {

      const temp = new Node( 'temp' );

      expect( temp.constructor.name ).to.be.equal( 'Node' );

    } );

    //
    it( 'Is DoublyLinkedList defined.', () => {

      const temp = new DoublyLinkedList();

      expect( temp.constructor.name ).to.be.equal( 'DoublyLinkedList' );

    } );

    //
    it( 'Created object should be instantiated of the DoublyLinkedList type.', () => {

      list = new DoublyLinkedList();

      expect( list ).to.be.an.instanceof( DoublyLinkedList );

    } );

  } );

  //
  describe( 'Creating Nodes', () => {

    it( 'Create a node.', () => {

      const node = new Node( 'Tom' );

      expect( node.data ).to.be.equal( 'Tom' );

    } );

  } );

  //
  describe( 'Creating', () => {

    it( 'length(): Created Doubly Linked List should consist of 1 node "head".', () => {

      list = new DoublyLinkedList();

      expect( list.length() ).to.be.equal( 1 );

    } );

    it( 'insert(): Should insert 4 nodes to the list: Pooh, Piglet, Eeyore, Rabbit.', () => {

      list.insert( 'Pooh', 'head' );
      list.insert( 'Piglet', 'Pooh' );
      list.insert( 'Eeyore', 'Piglet' );
      list.insert( 'Rabbit', 'Eeyore' );

      expect( list.length() ).to.equal( 5 );

    } );

  } );

  //
  describe( 'Reading', () => {

    it( 'The first node should be "head". ', () => {

      expect( list.head.data ).to.be.equal( 'head' );

    } );

    it( 'The first node should not have the previous node.', () => {

      expect( list.head.previous ).to.be.equal( null );

    } );

    //
    it( 'find(): Should find the node "Pooh". ', () => {

      const node = list.find( 'Pooh' );

      expect( node.data ).to.be.equal( 'Pooh' );

    } );

    //
    it( 'find(): Should not find non-existing node "Tigger".', () => {

      const node = list.find( 'Tigger' );

      expect( node ).to.be.equal( null );

    } );

    //
    it( 'find(): Node "Piglet" should have the previous node "Pooh".', () => {

      const node = list.find( 'Piglet' );

      expect( node.previous.data ).to.be.equal( 'Pooh' );

    } );

    //
    it( 'find(): Node "Eeyore" should have "Rabbit" as the next node.', () => {

      const node = list.find( 'Eeyore' );

      expect( node.next.data ).to.be.equal( 'Rabbit' );

    } );

    //

    it( 'find(): Node "Rabbit" should have "Eeyore" as the previous node, should not have the next node.', () => {

      const node = list.find( 'Rabbit' );

      expect( node.previous.data ).to.be.equal( 'Eeyore' );
      expect( node.next ).to.be.equal( null );

    } );

    //
    it( 'findLast(): Should find node "Rabbit". ', () => {

      const node = list.findLast();

      expect( node.data ).to.be.equal( 'Rabbit' );

    } );

    it( 'toArray() : The third node should be "Piglet". ', () => {

      const element = list.toArray()[ 2 ];

      expect( element ).to.equal( 'Piglet' );

    } );

  } );

  describe( 'Removing', () => {

    it( 'remove(): Removing a non-existing node "Tigger" does not change the list.', () => {

      list.remove( 'Tigger' );

      expect( list.length() ).to.equal( 5 );

    } );

    it( 'remove(): Remove the third node "Piglet". ', () => {

      list.remove( 'Piglet' );

      expect( list.length() ).to.equal( 4 );

    } );

    it( 'toArray(): The third node should be "Eeyore". ', () => {

      const element = list.toArray()[ 2 ];

      expect( element ).to.equal( 'Eeyore' );

    } );

    it( 'find(): Node "Eeyore" should have "Rabbit" as the next node, "Pooh" as the previous node. ', () => {

      const node = list.find( 'Eeyore' );

      expect( node.next.data ).to.equal( 'Rabbit' );
      expect( node.previous.data ).to.equal( 'Pooh' );

    } );

  } );

} );
