import { useContext } from 'react';
import {useHistory} from 'react-router-dom';

import {PokemonContext} from '../../../../context/pokemonContext';

import PokemonCard from '../../../../components/PokemonCard';

import s from './style.module.css';

const FinfshPage = () => {
  const pokemonContext = useContext(PokemonContext);
  const history = useHistory()

  const handleClick = () => {
    pokemonContext.clearContext();
    history.push('/game');
  };
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
          <button className={s.button} onClick={handleClick}>
          END GAME
        </button>
        </div>
        <div className={s.playerTwo}>
          {
            pokemonContext.opponentPokemon.map(({name, type, img, id, values}) => (
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
      </div>

    </>
  )
};

export default FinfshPage;