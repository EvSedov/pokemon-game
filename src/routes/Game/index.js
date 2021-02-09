import { useState } from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';

import {PokemonContext} from '../../context/pokemonContext';

import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';

const GamePage = () => {
    const match = useRouteMatch();
    const [pokemons, setPokemons] = useState([]);
  
  const hendleAddPokemon = (pokemon) => {
    setPokemons(prevState => [...prevState, pokemon]);
  }
    return (
      <PokemonContext.Provider value={{
        pokemons,
        onAddPokemon: hendleAddPokemon
      }}>
        <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
      </PokemonContext.Provider>
    );
};

export default GamePage;
