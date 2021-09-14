import React from "react";
import { Link } from "react-router-dom";

class PokemonDetails extends React.Component {
  render() {
    const { pokemons } = this.props;
    const { id: curPokemon } = this.props.match.params;
    const pokemon = pokemons.find((pkm) => pkm.id === +curPokemon);
    const { name, foundAt, image, moreInfo, summary } = pokemon;
    return (
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <div>
          <h3>Bio</h3>
          <p>{summary}</p>
          <h3>Location</h3>
          {foundAt.map(({ location, map }) => (
            <div>
              <h4>Found in {location}</h4>
              <img src={map} alt={location} />
            </div>
          ))}
          <h3>For more info, access <span><a href={moreInfo}>Bulbapedia</a></span></h3>
        </div>
        <p><Link to="/">Voltar</Link></p>
      </div>
    )
  }
}

export default PokemonDetails;