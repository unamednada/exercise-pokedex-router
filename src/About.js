import React from 'react';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div class="about">
        <div>
          <h2>About the Pokedex</h2>
          <p>
            The Pokédex (Japanese: ポケモン図鑑 illustrated Pokémon encyclopedia) is a digital encyclopedia created by Professor Oak as an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokémon in the world that are contained in its database.
          </p>
          <p>
            Pokédex entries typically describe a Pokémon in only two or three sentences. They may give background information on the habitat or activities of a Pokémon in the wild or other information on the Pokémon's history or anatomy.
          </p>        
        </div>
        <div>
          <img src="https://img.elo7.com.br/product/600x380/1FD4C14/descanso-de-panela-pokedex.jpg" alt="" />
        </div>
      </div>
    )
  }
}

export default About;