import { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom';

import {FireBaseContext} from '../../../../context/firebaseContext';
import {PokemonContext} from '../../../../context/pokemonContext';

import PokemonCard from '../../../../components/PokemonCard';

import s from './style.module.css';

const FinishPage = () => {
  const firebase = useContext(FireBaseContext);
  const pokemonContext = useContext(PokemonContext);
  const [pokemons, setPokemons] = useState(pokemonContext.opponentPokemon);
  const history = useHistory()

  const handleClickBtn = () => {
    const idSelectedPokemons = pokemons.map((pokemon) => {
      if (pokemon.selected) {
        return pokemon.id
      } else {
        return false;
      }
    });
    
    idSelectedPokemons.forEach((item, idx) => {
      if (item) {
        const newPokemon = pokemonContext.opponentPokemon[idx]
        firebase.addPokemon(newPokemon);
      }
    });

    pokemonContext.clearContext();
    history.push('/game');
  };

  const handleClickCard = (id) => {
    setPokemons((prevState) => {
      const newState = prevState.map((item) => {
        return (item.id === id)
          ? {
            ...item,
            selected: !item.selected,
          }
          : {
            ...item,
            selected: false,
          };
      });
      return newState;
    })
  }

  return (
    <>
      <div className={s.root}>
        <div className={s.playerOne}>
          {
            Object.values(pokemonContext.selectedPokemons).map(({name, type, img, id, values}) => (
              <PokemonCard
                className={s.cardBoard}
                name = {name}
                type = {type}
                img = {img}
                id = {id}
                values = {values}
                isActive
                minimize
              />
            ))
          }
        </div>
        <div>
          <button className={s.button} onClick={handleClickBtn}>
          END GAME
        </button>
        </div>
        <div className={s.playerTwo}>
          {
            pokemons.map(({name, type, img, id, values, selected}) => (
              <PokemonCard
                className={s.cardBoard}
                name = {name}
                type = {type}
                img = {img}
                id = {id}
                values = {values}
                isActive
                isSelected={selected}
                onClickCard={pokemonContext.winner && handleClickCard}
                minimize
              />
            ))
          }
        </div>
      </div>

    </>
  )
};

export default FinishPage;