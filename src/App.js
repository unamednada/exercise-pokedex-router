import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route path="/pokemon-details/:id" render={(props) => <PokemonDetails {...props} pokemons={pokemons} />} />
          <Route path="/about" component={About} />
          <Route exact path="/" render={() => <Pokedex pokemons={pokemons} /> } />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;