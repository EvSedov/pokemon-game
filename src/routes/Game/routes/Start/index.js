import { useState, useEffect, useContext } from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';

import {FireBaseContext} from '../../../../context/firebaseContext';
import {PokemonContext} from '../../../../context/pokemonContext';

import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';

import s from './style.module.css';

const StartPage = () => {
  const firebase = useContext(FireBaseContext);
  const pokemonContext = useContext(PokemonContext);
  
  const [pokemons, setPokemons] = useState({});
  
  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });

    return () => firebase.offPokemonSoket();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  
  const hendleChangeSelected = (key) => {
    const pokemon = {...pokemons[key]};
    pokemonContext.onSelectedPokemon(key, pokemon);

    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      }
    }))
  };

  const match = useRouteMatch();

  const history = useHistory()
  
  const handleClick = () => {
    history.push(`${match.path}board`);
  };

  return (
    <>
      <div className={s.flex}>
        <div className={s.root}>
          <h1>This is Game Page!!!</h1>
        </div>
        <button 
          className={s.button} 
          onClick={handleClick}
          disabled={Object.keys(pokemonContext.selectedPokemons).length < 5}
        >
          Start Game
        </button>
      </div>
      <Layout 
        id="2" 
        title="Cards" 
        colorBg="red"
      >
        <div className={s.grid}>
          {
            Object.entries(pokemons).map(
              ([key, {id, name, type, img, values, selected }]) => <PokemonCard
                key = {key}
                name = {name}
                type = {type}
                img = {img}
                id = {id}
                values = {values}
                isActive={true}
                isSelected={selected}
                onClickCard={() => {
                  if (Object.keys(pokemonContext.selectedPokemons).length < 5 || selected) {
                    hendleChangeSelected(key);
                  }
                }}
                minimize
                className={s.card}
              /> 
            )
          }
        </div>
      </Layout>
    </>
  )
};

export default StartPage;
