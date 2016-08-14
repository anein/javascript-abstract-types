//
import { expect } from 'chai';
//
import { Dictionary } from '../src/dictionary';

describe( 'Dictionary tests', () => {

  let dict = null;

  //
  describe( 'Initialization.', () => {

    it( 'Is Dictionary defined.', () => {
      expect( Dictionary ).not.to.be.equal( null );
    } );

    it( 'Created object should be instantiated of the Dictionary type.', () => {

      dict = new Dictionary();
      expect( dict ).to.be.an.instanceof( Dictionary );

    } );

  } );

  describe( 'Creating', () => {

    it( 'count(): Created dictionary should not have entries. ', () => {

      expect( dict.count() ).to.be.equal( 0 );

    } );


    it( 'add(): Should insert 4 elements to the queue: Pooh, Piglet, Eeyore, Rabbit. ', () => {

      dict.add( 'Pooh', 1 );
      dict.add( 'Piglet', 2 );
      dict.add( 'Eeyore', 3 );
      dict.add( 'Rabbit', 4 );

      expect( dict.count() ).to.be.equal( 4 );

    } );

  } );

  describe( 'Reading', () => {

    it( 'find(): Should return value of index "Eeyore" - 3. ', () => {

      expect( dict.find( 'Eeyore' ) ).to.be.equal( 3 );

    } );


    it( 'find(): Should not return value of non-existent index "Robin". ', () => {

      expect( dict.find( 'Robin' ) ).to.be.equal( undefined );

    } );

  } );


  describe( 'Removing', () => {

    it( 'remove(): Should remove the element "Pooh".', () => {

      dict.remove( 'Pooh' );

      expect( dict.count() ).to.be.equal( 3 );

    } );

    it( 'remove(): Should not remove non-existent index  "Robin". ', () => {

      dict.remove( 'Robin' );

      expect( dict.count() ).to.be.equal( 3 );

    } );

    it( 'clear(): Should remove all elements of dictionary.', () => {

      dict.clear();

      expect( dict.count() ).to.be.equal( 0 );

    } );

  } );

} );
