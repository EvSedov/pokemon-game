import { useState, useEffect, useContext } from 'react';
import {PokemonContext} from '../../../../context/pokemonContext';

import PokemonCard from '../../../../components/PokemonCard';

import s from './style.module.css';

const BoardPage = () => {
  const pokemonContext = useContext(PokemonContext);

  const [pokemons, setPokemons] = useState({});
  useEffect(() => {
    setPokemons(pokemonContext.pokemons);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.root}>
			<div className={s.playerOne}>
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
              // onClickCard={hendleClickCard}
              minimize
              className={s.card}
            />
          )
        }
      </div>
      <div className={s.board}>
        <div className={s.boardPlate}>1</div>
        <div className={s.boardPlate}>2</div>
        <div className={s.boardPlate}>3</div>
        <div className={s.boardPlate}>4</div>
        <div className={s.boardPlate}>5</div>
        <div className={s.boardPlate}>6</div>
        <div className={s.boardPlate}>7</div>
        <div className={s.boardPlate}>8</div>
        <div className={s.boardPlate}>9</div>
      </div>
    </div>
  )
};

export default BoardPage;
