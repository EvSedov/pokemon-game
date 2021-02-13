import { useContext } from 'react';
import {useHistory} from 'react-router-dom';

import {PokemonContext} from '../../../../context/pokemonContext';

import PokemonCard from '../../../../components/PokemonCard';

import s from './style.module.css';

const FinfshPage = () => {
  const { selectedPokemons, opponentPokemon } = useContext(PokemonContext);
  const history = useHistory()
  const handleClick = () => {
    history.push('/game');
  };
  return (
    <>
      <div className={s.root}>
        <div className={s.playerOne}>
          {
            Object.values(selectedPokemons).map(({name, type, img, id, values}) => (
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
            opponentPokemon.map(({name, type, img, id, values}) => (
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