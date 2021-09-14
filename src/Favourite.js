import React from 'react';
import Pokemon from './Pokemon';
import './favourite.css';

class Favourite extends React.Component {

  render() {
    const { pokemons } = this.props;
    const favouritePokemon = pokemons.filter(({ favourite }) => favourite);
    return (
      <div className="Fav">
        <h2>Favourite Pokemon</h2>
        <div className="fav-container">
          {favouritePokemon.map((pokemon) => <Pokemon pokemon={pokemon} />)}
        </div>
      </div>
    )
  }
}

export default Favourite;