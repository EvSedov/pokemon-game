import { useState } from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';

import {PokemonContext} from '../../context/pokemonContext';

import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';

const GamePage = () => {
  const match = useRouteMatch();
  const [selectedPokemons, setPokemons] = useState({});
  
  const hendleSelectedPokemon = (key, pokemon) => {
    setPokemons((prevState) => {
      if (prevState[key]) {
        const copyState = {...prevState};
        delete copyState[key];
        return copyState;
      }

      return {
        ...prevState,
        [key]: pokemon,
      }
    })
  }

  const [opponentPokemon, setOpponentPokemon] = useState([]);
  
  const hendleOpponentPokemon = (pokemons) => {
    setOpponentPokemon((prevState) => {
      return [
        ...prevState,
        ...pokemons,
      ]
    })
  }

  const hendleClearContext = () => {
    setPokemons({});
    setOpponentPokemon([]);
  }

    return (
      <PokemonContext.Provider value={{
        selectedPokemons,
        onSelectedPokemon: hendleSelectedPokemon,
        opponentPokemon,
        addOpponentPokemons: hendleOpponentPokemon,
        clearContext: hendleClearContext,
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
