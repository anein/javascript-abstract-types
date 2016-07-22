//
import { expect } from 'chai';

import { CircularlyLinkedList, Node } from '../src/circularlyLinkedList';

describe( 'Circularly Linked List Test', () => {

  let list = null;

  //
  describe( 'Initialization', () => {

    //
    it( 'Is Node defined?', () => {

      const temp = new Node( 'temp' );

      expect( temp.constructor.name ).to.be.equal( 'Node' );

    } );

    //
    it( 'Is LinkedList defined?', () => {

      const temp = new CircularlyLinkedList();

      expect( temp.constructor.name ).to.be.equal( 'CircularlyLinkedList' );

    } );

    //
    it( 'Created object should be instantiated of the Circularly Linked List type.', () => {

      list = new CircularlyLinkedList();

      expect( list ).to.be.an.instanceof( CircularlyLinkedList );

    } );

  } );

  //
  describe( 'Creating', () => {

    //
    it( 'length(): New Circularly Linked List should be empty', () => {

      list = new CircularlyLinkedList();

      expect( list.length() ).to.be.equal( 1 );

    } );

    //
    it( 'insert(): Should insert 4 nodes to the list: Pooh, Piglet, Eeyore, Rabbit.', () => {

      list.insert( 'Pooh', 'head' );
      list.insert( 'Piglet', 'Pooh' );
      list.insert( 'Eeyore', 'Piglet' );
      list.insert( 'Rabbit', 'Eeyore' );

      expect( list.length() ).to.be.equal( 5 );

    } );

    //
    it( 'insert(): Should insert 1 node to the list: Tom. ', () => {

      list.insert( 'Tom', 'Piglet' );

      expect( list.length() ).to.be.equal( 6 );

    } );

  } );

  //
  describe( 'Reading', () => {

    //
    it( 'The first node should be "head". ', () => {

      expect( list.head.data ).to.be.equal( 'head' );

    } );

    //
    it( 'find(): Should find the node "Pooh".', () => {

      const node = list.find( 'Pooh' );

      expect( node.data ).to.be.equal( 'Pooh' );

    } );

    //
    it( 'find(): Should not find a non-existing node "Robbin".', () => {

      const node = list.find( 'Robbin' );

      expect( node.data ).not.to.be.equal( 'Robbin' );

    } );

    //
    it( 'find(): The last node "Rabbit" should have "head" as the next node', () => {

      const node = list.find( 'Rabbit' );

      expect( node.next.data ).to.be.equal( 'head' );

    } );

    //
    it( 'find(): "Tom" should have "Eeyore" as the next node', () => {

      const node = list.find( 'Tom' );

      expect( node.next.data ).to.be.equal( 'Eeyore' );

    } );

    //
    it( 'find(): "Piglet" should have "Tom" as the next node', () => {

      const node = list.find( 'Piglet' );

      expect( node.next.data ).to.equal( 'Tom' );

    } );

    //
    it( 'findPrevious(): Is the previous node of "Eeyore" - "Tom" ', () => {

      const node = list.findPrevious( 'Eeyore' );

      expect( node.data ).to.equal( 'Tom' );

    } );

    //
    it( 'findPrevious(): Is the previous node of "Tom" - "Piglet" ', () => {

      const node = list.findPrevious( 'Tom' );

      expect( node.data ).to.equal( 'Piglet' );

    } );

    //
    it( 'toArray() : The third node should be "Piglet". ', () => {

      const data = list.toArray()[ 2 ];

      expect( data ).to.equal( 'Piglet' );

    } );

  } );

  //
  describe( 'Removing', () => {

    //
    it( 'remove() : Removing a non-existing node "Robbin" does not change the list', () => {

      list.remove( 'Robbin' );

      expect( list.length() ).to.be.equal( 6 );

    } );

    //
    it( 'remove() : Remove the node - "Rabbit":  Eeyore -> (x)Rabbit -> head ', () => {

      list.remove( 'Rabbit' );

      expect( list.length() ).to.be.equal( 5 );

    } );


    //
    it( 'remove() : Should not remove the node - "head"', () => {

      list.remove( 'head' );

      expect( list.length() ).to.be.equal( 5 );

    } );


    //
    it( 'find(): "Eeyore" should have "head" as the next node: Eeyore -> head', () => {

      const node = list.find( 'Eeyore' );

      expect( node.next.data ).to.be.equal( 'head' );

    } );

    //
    it( 'findPrevious(): Is the previous node of "Eeyore" - "Tom": Tom -> Eeyore', () => {

      const node = list.findPrevious( 'Eeyore' );

      expect( node.data ).to.equal( 'Tom' );

    } );
  } );

} );
