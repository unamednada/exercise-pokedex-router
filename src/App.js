import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <Switch>
          <Route path="/pokemons/:id" render={() => <p>Pokedex completa</p>} />
          <Route path="/" render={() => <Pokedex pokemons={pokemons} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;