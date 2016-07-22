import { expect } from 'chai';
//
import ListADT from '../src/listadt';

describe( 'ListADT Tests', () => {

  let list = null;

  //
  describe( 'Initialization', () => {

    it( 'is ListADT defined', () => {
      expect( ListADT ).not.to.be.equal( null );
    } );

    it( 'Created object should be instantiated of the ListADT type', () => {

      list = new ListADT();
      expect( list ).to.be.an.instanceof( ListADT );

    } );

  } );

  //
  describe( 'Creating', () => {


    it( 'elements(): Should be empty', () => {

      expect( list.elements() ).to.have.length( 0 );

    } );

    it( 'Should append 4 elements: Peter, Olga, Alexander, Fedor ', () => {

      list.append( 'Peter' );
      list.append( 'Olga' );
      list.append( 'Alexander' );
      list.append( 'Fedor' );

      expect( list.elements() ).to.have.length( 4 );

    } );


    it( 'getElement(): The first element should be "Peter" ', () => {

      expect( list.getElement() ).to.contain( 'Peter' );

    } );

    it( 'Should contain the element "Olga" ', () => {

      expect( list.contains( 'Olga' ) ).to.be.equal( true );

    } );

  } );

  //
  describe( 'Changing', () => {

    it( 'insert(): Add a new element "Vlad" after element "Olga" ', () => {
      expect( list.insert( 'Vlad', 'Olga' ) ).to.be.equal( true );
    } );

    it( 'The third element should be "Vlad" ', () => {
      expect( list.elements()[ 2 ] ).to.equal( 'Vlad' );
    } );

    it( 'insert(): Insert a new element "Anton" to the end of the list.', () => {
      expect( list.insert( 'Anton' ) ).to.be.equal( true );
    } );

    it( 'insert(): Should not insert a new element "Gleb" after a no-existing element.', () => {
      expect( list.insert( 'Gleb', 'Vova' ) ).to.be.equal( false );
    } );

  } );

  //
  describe( 'Reading', () => {

    it( 'front(): Move to the first element - "Peter" ', () => {
      list.front();
      expect( list.getElement() ).to.equal( 'Peter' );
    } );

    it( 'next(): Move forward one element - "Olga" ', () => {
      list.next();
      expect( list.getElement() ).to.equal( 'Olga' );
    } );

    it( 'prev(): Move forward twice and backward once - "Vlad" ', () => {
      list.next();
      list.next();
      list.prev();
      expect( list.getElement() ).to.equal( 'Vlad' );
    } );

    it( 'end(): Move to the last element - "Anton" ', () => {
      list.end();
      expect( list.getElement() ).to.equal( 'Anton' );
    } );

    it( 'next(): Should not be moved out of the list.', () => {
      list.next();
      expect( list.currentPosition() ).to.equal( 5 );
    } );

    it( 'prev(): Should not be moved out of the list.', () => {
      list.front();
      list.prev();
      expect( list.currentPosition() ).to.equal( 0 );
    } );

    it( 'moveTo(): Move to a random position and get element - "Alexander" ', () => {
      list.moveTo( 3 );
      expect( list.getElement() ).to.equal( 'Alexander' );
    } );

    it( 'find(): Try to find a non-existing element', () => {
      list.find( 3 );
      expect( list.getElement() ).to.equal( 'Alexander' );
    } );

  } );

  //
  describe( 'Removing.', () => {

    it( 'remove(): Remove one element by its value - "Olga". ', () => {
      expect( list.remove( 'Olga' ) ).to.be.equal( true );
    } );

    it( 'remove(): Remove non-existing element. ', () => {
      expect( list.remove( 'Gleb' ) ).to.be.equal( false );
    } );

    it( 'clear(): Clear the list ', () => {
      list.clear();
    } );

    it( 'elements(): The list should be empty', () => {
      expect( list.elements() ).to.have.length( 0 );
    } );

    it( 'length(): The list size should be 0', () => {
      expect( list.length() ).to.equal( 0 );
    } );

    it( 'currentPosition(): The list position should be 0', () => {
      expect( list.currentPosition() ).to.equal( 0 );
    } );

  } );

} );
