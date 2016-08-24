import { expect } from 'chai';
//
import { Set } from '../src/set';

describe( 'Set tests', () => {

  /** @type {Set} */
  let set = null;

  //
  describe( 'Initialization.', () => {

    it( 'is Set defined.', () => {
      expect( Set ).not.to.be.equal( null );
    } );

    it( 'Created object should be instantiated of Set.', () => {

      set = new Set();
      expect( set ).to.be.an.instanceof( Set );

    } );

  } );

  //
  describe( 'Adding', () => {

    it( 'add(): Should add 4 elements to the set - Pooh, Piglet, Eeyore, Rabbit.', () => {

      const names = [ 'Pooh', 'Piglet', 'Eeyore', 'Rabbit' ];

      for ( const m of names ) {
        expect( set.add( m ) ).to.be.equal( true );
      }

    } );

    it( 'size(): Set must contain 4 elements', () => {

      expect( set.size() ).to.be.equal( 4 );

    } );

    it( 'add(): Should not add a duplicated element  -  Piglet', () => {

      expect( set.add( 'Piglet' ) ).to.be.equal( false );

    } );

  } );

  //
  describe( 'Removing', () => {

    it( 'remove(): Should not remove a non-existence element - Robin.', () => {

      expect( set.remove( 'Robin' ) ).to.be.equal( false );

    } );

    it( 'remove(): Should remove an element - Eeyore', () => {
      expect( set.remove( 'Eeyore' ) ).to.be.equal( true );
      expect( set.size() ).to.be.equal( 3 );
    } );

  } );

  describe( 'Subsets', () => {

    it( 'subset(): Create a new set with different size and it should not be a part of current set.', () => {

      const tempSet = new Set();
      tempSet.add( 'Hedwig' );

      expect( set.subset( tempSet ) ).to.be.equal( false );

    } );

    it( 'subset(): Create a new set with the same size as current set but with different members.', () => {

      const tempSet = new Set();
      tempSet.add( 'Hedwig' );
      tempSet.add( 'Dobby' );
      tempSet.add( 'Mrs Norris' );

      expect( set.subset( tempSet ) ).to.be.equal( false );

    } );

    it( 'subset(): Create a new set with the same members as current set.', () => {

      const tempSet = new Set();
      tempSet.add( 'Pooh' );
      tempSet.add( 'Piglet' );
      tempSet.add( 'Rabbit' );

      expect( set.subset( tempSet ) ).to.be.equal( true );

    } );

  } );

  describe( 'Union', () => {

    it( 'union(): Should combine two sets.', () => {


      const tempSet = new Set();
      tempSet.add( 'Hedwig' );

      const newSet = set.union( tempSet );

      expect( newSet.size() ).to.be.equal( 4 );

      expect( newSet.dataStore ).to.be.eql( [ 'Pooh', 'Piglet', 'Rabbit', 'Hedwig' ] );

    } );

  } );


  describe( 'Intersect', () => {

    it( 'intersect(): Should intersect two sets.', () => {


      const tempSet = new Set();
      tempSet.add( 'Hedwig' );
      tempSet.add( 'Dobby' );
      tempSet.add( 'Mrs Norris' );
      tempSet.add( 'Pooh' );


      const newSet = set.intersect( tempSet );

      expect( newSet.size() ).to.be.equal( 1 );

      expect( newSet.dataStore ).to.be.eql( [ 'Pooh' ] );

    } );


  } );

  describe( 'Difference', () => {

    it( 'difference(): Should difference two sets.', () => {

      const tempSet = new Set();
      tempSet.add( 'Hedwig' );
      tempSet.add( 'Piglet' );
      tempSet.add( 'Mrs Norris' );
      tempSet.add( 'Pooh' );

      const newSet = set.difference( tempSet );

      expect( newSet.size() ).to.be.equal( 1 );

      expect( newSet.dataStore ).to.be.eql( [ 'Rabbit' ] );

    } );

  } );

} );
