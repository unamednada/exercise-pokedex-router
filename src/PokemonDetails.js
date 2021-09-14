import React from "react";
import { Link } from "react-router-dom";

class PokemonDetails extends React.Component {
  render() {
    const { pokemons } = this.props;
    const { id: curPokemon } = this.props.match.params;
    const pokemon = pokemons.find((pkm) => pkm.id === +curPokemon);
    console.log(pokemon);
    const { name, foundAt, image, moreInfo, summary } = pokemon;
    return (
      <div>
        <p>Pokedex completa</p>
        <div>
          <p>{name}</p>
          {foundAt.map(({ location }) => <p>{location}</p>)}
          <img src={image} alt="" />
          <p>{moreInfo}</p>
          <p>{summary}</p>
          <p><Link to="/">Voltar</Link></p>
        </div>
      </div>
    )
  }
}

export default PokemonDetails;