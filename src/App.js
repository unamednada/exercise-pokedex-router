import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <Link to="/" className="nav-btn">Voltar</Link>
        <Switch>
          <Route path="/pokemons/:id" render={(props) => <PokemonDetails pokemons={pokemons} {...props} />} />
          <Route path="/" render={() => <Pokedex pokemons={pokemons} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;