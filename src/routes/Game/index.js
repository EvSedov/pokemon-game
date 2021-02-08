import { useState, useEffect } from 'react';

import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';

import db from '../../service/firebase';

import { onePokemon as data } from '../../pokemons';

import cn from 'classnames';

import s from './style.module.css';

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const GamePage = () => {
  const [pokemons, setStatePokemons] = useState({});

  useEffect(() => {
    db.ref('pokemons').once('value', (snapshot) => {
      setStatePokemons(snapshot.val());
    });
  }, []);

  const handleClick = () => {
    const newKey = db.ref().child('pokemons').push().key;
    const newID = data.id + random(1, 1000);
    const newPokemon = {...data, id: newID}
    db.ref('pokemons/' + newKey)
      .set(newPokemon)
      .then(() => setStatePokemons((prevState) => ({ ...prevState, [newKey]: newPokemon})));
  };

  const hendleClickCard = (id) => {
    Object.entries(pokemons).forEach((item) => {
      const pokemon = {...item[1]};
      if (pokemon.id === id) {
        const objID = item[0];
        const newPokemon = {
	        ...pokemon, active: !pokemon.active 
        }
        db.ref('pokemons/'+ objID)
          .set(newPokemon)
          .then(() => setStatePokemons((prevState) => (
            {
              ...prevState,
              [objID]: newPokemon
            }
          )));
      };
    });
  };
  
  return (
    <>
      <div className={cn(s.flex, s.column)}>
        <div className={s.root}>
          <h1>This is Game Page!!!</h1>
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
