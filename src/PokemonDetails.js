import React from 'react';
import Pokemon from './Pokemon.js';
import './pokedex.css';

class PokemonDetails extends React.Component {

  render() {
    const { id: curPkm } = this.props.match.params;
    const { pokemons, handleFavourite } = this.props;
    const pokemon = pokemons.find(({ id }) => id === +curPkm);
    const { name, summary, foundAt } = pokemon;

    const pickFavourite = () => {
      handleFavourite(curPkm);
    }

    return (
      <div>
        <div className="pokedex">
          <Pokemon pokemon={pokemon} />
        </div>
        <div className="details">
          <div>
            <h2>Summary</h2>
            <p>{summary}</p>
          </div>
          <div>
            <h2>{name} game locations</h2>
            <div className="locations-container">
              {foundAt.map(({ location, map }) => (
                <div>
                  <h3>{location}</h3>
                  <img src={map} alt="" />
                </div>
              ))}
            </div>
          </div>
          <label htmlFor="favourite">
            <input type="checkbox" id="favourite" onChange={pickFavourite} />
          Favourite Pokemon!
          </label>
        </div>
      </div>
    )
  }
}

export default PokemonDetails;