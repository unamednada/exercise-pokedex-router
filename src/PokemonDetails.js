import React from 'react';
import Pokemon from './Pokemon.js';
import './pokedex.css';

class PokemonDetails extends React.Component {
  render() {
    const { id: curPkm } = this.props.match.params;
    const { pokemons } = this.props;
    const pokemon = pokemons.find(({ id }) => id === +curPkm);
    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemon} />
      </div>
    )
  }
}

export default PokemonDetails;