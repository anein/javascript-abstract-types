//
import { expect } from 'chai';
//
import { Stack } from '../src/stack';

describe( 'Stack tests.', () => {

  let stack = null;

  //
  describe( 'Initialization.', () => {

    it( 'is Stack defined.', () => {
      expect( Stack ).not.to.be.equal( null );
    } );

    it( 'Created object should be instantiated of the Stack type.', () => {

      stack = new Stack();
      expect( stack ).to.be.an.instanceof( Stack );

    } );

  } );

  //
  describe( 'Creating.', () => {

    it( 'length(): Stack should be empty.', () => {

      expect( stack.length() ).to.be.equal( 0 );

    } );

    it( 'push(): Should insert 4 elements to the stack: Pooh, Piglet, Eeyore, Rabbit.', () => {

      stack.push( 'Pooh' );
      stack.push( 'Piglet' );
      stack.push( 'Eeyore' );
      stack.push( 'Rabbit' );

      expect( stack.length() ).to.be.equal( 4 );

    } );

  } );

  //
  describe( 'Reading.', () => {

    //
    it( 'pop(): Get last element "Rabbit" and reduce number of elements in the stack.', () => {

      expect( stack.pop() ).to.be.equal( 'Rabbit' );
      expect( stack.length() ).to.be.equal( 3 );

    } );

    //
    it( 'peek(): New last element should be "Eeyore".', () => {

      expect( stack.peek() ).to.be.equal( 'Eeyore' );

    } );

  } );

  describe( 'Removing.', () => {

    it( 'clear(): Remove all elements in the stack.', () => {

      stack.clear();

      expect( stack.length() ).to.be.equal( 0 );

    } );

    it( 'peek(): Should return "undefined." ', () => {

      expect( stack.peek() ).to.be.equal( undefined );

    } );

  } );

} );
