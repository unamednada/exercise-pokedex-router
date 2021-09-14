import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/pokemon-details/:id" render={(props) => <PokemonDetails {...props} />} />
          <Route path="/" render={() => <Pokedex pokemons={pokemons} /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;