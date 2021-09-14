import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';
import Favourite from './Favourite';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemons.map((pokemon) => ({...pokemon, favourite: false})),
    }
    this.handleFavourite = this.handleFavourite.bind(this);
  }

  componentDidMount() {
    if (localStorage['pokemons']) {
      this.setState({ pokemons: JSON.parse(localStorage.getItem('pokemons'))});
    }
  }

  handleFavourite(id) {
    this.setState((state) => ({
      pokemons: state.pokemons.map((pokemon) => {
        if (pokemon.id === +id) {
          if (pokemon.favourite) return {...pokemon, favourite: false};
          return {...pokemon, favourite: true}
        } 
        return {...pokemon}
      })
    }), () => {
      localStorage.setItem('pokemons', JSON.stringify(this.state.pokemons));
    })
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <BrowserRouter>
          <nav>
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">About</Link>
            <Link to="/favourite" className="link">Favourite Pokemon</Link>
          </nav>
          <Switch>
            <Route path="/pokemon-details/:id" render={(props) => <PokemonDetails {...props} pokemons={pokemons} handleFavourite={this.handleFavourite}/>} />
            <Route path="/favourite" render={() => <Favourite pokemons={pokemons} /> } />
            <Route path="/about" component={About} />
            <Route exact path="/" render={() => <Pokedex pokemons={pokemons} /> } />
            <Route path="/" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;