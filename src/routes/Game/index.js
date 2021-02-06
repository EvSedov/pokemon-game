import { useState, useEffect } from 'react';

import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';

import db from '../../service/firebase';

import cn from 'classnames';

import s from './style.module.css';

const GamePage = () => {
  const handleClick = () => {
    
  };

  const [pokemons, setStatePokemons] = useState({});

  useEffect(() => {
    db.ref('pokemons').once('value', (snapshot) => {
      setStatePokemons(snapshot.val());
    });
  }, [pokemons]);

  const hendleClickCard = (id) => {
    Object.entries(pokemons).forEach((item) => {
      const pokemon = {...item[1]};
      if (pokemon.id === id) {
        const key = item[0];
        db.ref('pokemons/'+ key).set({
	        ...pokemon, active: !pokemon.active 
        });
      };
    });
  };
  
  return (
    <>
      <div className={cn(s.flex, s.column)}>
        <div className={s.root}>
          This is Game Page!!!
        </div>
        <button className={s.button} onClick={handleClick}>
          Add new Card
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
              ([key, {id, name, type, img, values, active}]) => <PokemonCard
                key = {key}
                name = {name}
                type = {type}
                img = {img}
                id = {id}
                values = {values}
                isActive={active}
                onClickCard={hendleClickCard}
              />
            )
          }
        </div>
      </Layout>
    </>
  )
};

export default GamePage;
