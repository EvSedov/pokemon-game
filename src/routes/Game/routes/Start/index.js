import { useState, useEffect, useContext } from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';

import {FireBaseContext} from '../../../../context/firebaseContext';
import {PokemonContext} from '../../../../context/pokemonContext';

import Layout from '../../../../components/Layout';
import PokemonCard from '../../../../components/PokemonCard';

import { onePokemon as DATA } from '../../../../pokemons';

import cn from 'classnames';

import s from './style.module.css';

const StartPage = () => {
  const firebase = useContext(FireBaseContext);
  const [pokemons, setStatePokemons] = useState({});
  
  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setStatePokemons(pokemons);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const pokemonContext = useContext(PokemonContext);
  
  const hendleClickCard = (id) => {
    setStatePokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        const key = item[0]
        if (pokemon.id === id) {
          // pokemon.active = !pokemon.active
          pokemon.selected = !pokemon.selected
          pokemonContext.onAddPokemon(pokemon);
        }

        acc[key] = pokemon;
        // firebase.postPokemon(key, pokemon);

        return acc;
      }, {})
    })
  };

  const handleClickButtonAddCard = () => {
    const data = DATA;
    firebase.addPokemon({data, id: data.id++});
  };

  const match = useRouteMatch();

  const history = useHistory()
  
  const handleClickButtonStartGame = () => {
    history.push(`${match.path}board`);
  };

  return (
    <>
      <div className={cn(s.flex, s.column)}>
        <div className={s.root}>
          <h1>This is Game Page!!!</h1>
        </div>
        <button className={s.button} onClick={handleClickButtonStartGame}>
          Start Game
        </button>
        <button className={s.button} onClick={handleClickButtonAddCard}>
          Add Pokemon Card
        </button>
      </div>
      <Layout 
        id="2" 
        title="Cards" 
        colorBg="red"
      >
        <div className={s.flex}>
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
                onClickCard={hendleClickCard}
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
