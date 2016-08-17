//
import { expect } from 'chai';

//
import { Hashtable } from '../src/hashtable';

//
describe( 'Hashtable tests', () => {

  let table = null;

  //
  describe( 'Initialization.', () => {

    it( 'is Hashtable defined.', () => {
      expect( Hashtable ).not.to.be.equal( null );
    });

    it( 'Created object should be instantiated of the Hashtable type.', () => {

      table = new Hashtable();
      expect( table ).to.be.an.instanceof( Hashtable );

    });

  });

  //
  describe( 'Creating', () => {

    it( 'length(): Hashtable should be empty.', () => {

      expect( table.length() ).to.be.equal( 0 );

    });

    it( 'put(): Should insert 4 elements to the hashtable: Pooh, Piglet, Eeyore, Rabbit.', () => {

      table.put( 'Pooh', 1 );
      table.put( 'Piglet', 2 );
      table.put( 'Eeyore', 3 );
      table.put( 'Rabbit', 4 );

      expect( table.length() ).to.be.equal( 4 );

    });

  });

  //
  describe( 'Reading', () => {

    it( 'get(): Should return the value of the element "Pooh" - 1 ', () => {
      expect( table.get( 'Pooh' ) ).to.be.equal( 1 );
    });

    it( 'generateHash(): Should return two different values for two different keys: "Piglet" and  "Rabbit" ', () => {

      const pigletHash = table.generateHash( 'Piglet' );
      const rabbitHash = table.generateHash( 'Rabbit' );

      expect( pigletHash ).not.to.be.equal( rabbitHash );

    });

  });


  describe( 'Removing.', () => {

    it( 'clear(): Remove all elements in a hashtable.', () => {

      table.clear();

      expect( table.length() ).to.be.equal( 0 );

    });

    it( 'get(): Should return "undefined" trying to get non-existent element "Pooh" from the hashtable. ', () => {

      expect( table.get( 'Pooh' ) ).to.be.equal( undefined );

    });

  });

});
