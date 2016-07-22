//
import { expect } from 'chai';

import { LinkedList, Node } from '../src/singlyLinkedlist';

//
describe( 'LinkedList tests', () => {

  let linkedList = null;

  //
  describe( 'Initialization', () => {

    //
    it( 'Is Node defined.', () => {

      const temp = new Node( 'temp' );

      expect( temp.constructor.name ).to.be.equal( 'Node' );

    } );

    //
    it( 'Is LinkedList defined.', () => {

      const temp = new LinkedList();

      expect( temp.constructor.name ).to.be.equal( 'LinkedList' );

    } );

    //
    it( 'Created object should be instantiated of the Linked List type.', () => {

      linkedList = new LinkedList();

      expect( linkedList ).to.be.an.instanceof( LinkedList );

    } );

  } );

  //
  describe( 'Creating Nodes', () => {

    it( 'Create a node', () => {

      const node = new Node( 'Tom' );

      expect( node.data ).to.be.equal( 'Tom' );

    } );

    it( 'Should create two linked nodes ', () => {

      const node1 = new Node( 'Tom' );
      const node2 = new Node( 'Jerry', node1 );

      expect( node2.next ).to.be.equal( node1 );

    } );

  } );

  //
  describe( 'Creating', () => {

    it( 'length() : Linked list should have only HEAD node', () => {

      expect( linkedList.length() ).to.equal( 1 );

    } );

    it( 'insert() : Should insert 4 elements to the list: Bulgakov, Pasternak, Dostoyevsky, Tolsoy  ', () => {

      linkedList.insert( 'Bulgakov', 'head' );
      linkedList.insert( 'Pasternak', 'Bulgakov' );
      linkedList.insert( 'Dostoyevsky', 'Pasternak' );
      linkedList.insert( 'Tolsoy', 'Dostoyevsky' );

      expect( linkedList.length() ).to.equal( 5 );

    } );

  } );

  //
  describe( 'Reading', () => {

    it( 'The First node should be HEAD', () => {

      expect( linkedList.head.data ).to.equal( 'head' );

    } );

    it( 'find(): Is "Dostoyevsky" found ', () => {

      expect( linkedList.find( 'Dostoyevsky' ).data ).to.equal( 'Dostoyevsky' );

    } );

    it( 'find(): Should not find non-existing node "Pushkin" ', () => {

      expect( linkedList.find( 'Pushkin' ) ).to.be.equal( null );

    } );

    it( 'findPrevious(): Is the previous node of "Dostoyevsky" - Pasternak ', () => {

      expect( linkedList.findPrevious( 'Dostoyevsky' ).data ).to.equal( 'Pasternak' );

    } );

    it( 'findPrevious(): Should not find the previous node of non-existing node "Pushkin" ', () => {

      expect( linkedList.findPrevious( 'Pushkin' ) ).to.be.equal( null );

    } );

    it( 'toArray() : The third node should be Pasternak', () => {

      const nodes = linkedList.toArray()[ 2 ];

      expect( nodes ).to.equal( 'Pasternak' );

    } );

  } );

  //
  describe( 'Removing', () => {

    it( 'remove() : Removing a non-existing node "Pushkin" does not change the list', () => {

      linkedList.remove( 'Pushkin' );

      expect( linkedList.length() ).to.be.equal( 5 );

    } );

    it( 'remove() : Remove the third node - Pasternak', () => {

      linkedList.remove( 'Pasternak' );

      expect( linkedList.length() ).to.be.equal( 4 );

    } );

    it( 'The third node should be Dostoyevsky', () => {

      const nodes = linkedList.toArray()[ 2 ];

      expect( nodes ).to.equal( 'Dostoyevsky' );

    } );

  } );

} );
