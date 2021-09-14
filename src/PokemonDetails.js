import React from 'react';
import Pokemon from './Pokemon';
import './pokedex.css';

class PokemonDetails extends React.Component {
  render() {
    const { id: curPkm } = this.props.match.params;
    const { pokemons } = this.props;
    const pokemon = pokemons.find(({ id }) => id === +curPkm);
    return (
      <div className="pokedex">
        <h1>{pokemon.name}</h1>
        <Pokemon pokemon={pokemon} />
      </div>
    )
  }
}

export default PokemonDetails;