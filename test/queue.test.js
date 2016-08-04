//
import { expect } from 'chai';
//
import { Queue } from '../src/queue';

describe( 'Queue tests', () => {

  let queue = null;

  //
  describe( 'Initialization.', () => {

    it( 'is Queue defined.', () => {
      expect( Queue ).not.to.be.equal( null );
    } );

    it( 'Created object should be instantiated of the Queue type.', () => {

      queue = new Queue();
      expect( queue ).to.be.an.instanceof( Queue );

    } );

  } );

  //
  describe( 'Creating', () => {

    it( 'isEmpty(): Queue should be empty.', () => {

      expect( queue.isEmpty() ).to.be.equal( true );

    } );

    it( 'enqueue(): Should insert 4 elements to the queue: Pooh, Piglet, Eeyore, Rabbit.', () => {

      queue.enqueue( 'Pooh' );
      queue.enqueue( 'Piglet' );
      queue.enqueue( 'Eeyore' );
      queue.enqueue( 'Rabbit' );

      expect( queue.length() ).to.be.equal( 4 );

    } );

  } );

  describe( 'Reading', () => {

    it( 'front(): The first element should be "Pooh" ', () => {

      expect( queue.front() ).to.be.equal( 'Pooh' );

    } );

    it( 'back(): The last element should be "Rabbit" ', () => {

      expect( queue.back() ).to.be.equal( 'Rabbit' );

    } );

  } );


  describe( 'Removing', () => {

    it( 'dequeue(): Should remove the first element "Pooh" ', () => {

      expect( queue.dequeue() ).to.be.equal( 'Pooh' );

    } );

    it( 'front(): The first element should be "Piglet" ', () => {

      expect( queue.front() ).to.be.equal( 'Piglet' );

    } );

  } );

  describe( 'Inserting', () => {

    it( 'enqueue(): Should add an element "Tom" to the end of the queue ', () => {

      queue.enqueue( 'Tom' );

      expect( queue.length() ).to.be.equal( 4 );

    } );

    it( 'front(): The first element should be "Piglet" ', () => {

      expect( queue.front() ).to.be.equal( 'Piglet' );

    } );

    it( 'back(): The last element should be "Tom" ', () => {

      expect( queue.back() ).to.be.equal( 'Tom' );

    } );


  } );

} );
