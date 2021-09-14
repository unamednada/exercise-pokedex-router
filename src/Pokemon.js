import React from 'react';
import { Link, Route } from 'react-router-dom';
import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {id, name, type, averageWeight, image, favourite} = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <Route exact path="/" render={() => <p><Link to={`/pokemon-details/${id}`} className="link">More Details</Link></p>} />
        </div>
        <img src={image} alt={`${name} sprite`} />
        {favourite && <img src="https://www.techinn.com/f/13806/138064758/teknofun-alto-falante-pokeball-pokemon.jpg" alt="" className="favourite"/>}
      </div>
    );
  }
}

export default Pokemon;