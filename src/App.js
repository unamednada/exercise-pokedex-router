import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About'; 

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/pokemon-details/:id" render={(props) => <PokemonDetails {...props} pokemons={pokemons} />} />
          <Route path="/about" component={About} />
          <Route path="/" render={() => <Pokedex pokemons={pokemons} /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;