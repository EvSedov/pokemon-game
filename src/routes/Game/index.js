import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';

// import POKEMONS from '../../pokemons';
import db from '../../service/firebase';

import s from './style.module.css';

const GamePage = () => {
  const history = useHistory()
  const handleClick = () => {
    history.push('/');
  };

  const [pokemons, setStatePokemons] = useState({});

  useEffect(() => {
    db.ref('pokemons').once('value', (snapshot) => {
      setStatePokemons(snapshot.val());
    });
  }, []);

  const hendleClickCard = (id) => {
    setStatePokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
        };
        acc[item[0]] = pokemon;
        return acc;
      }, {});
    });
  };
  
  return (
    <>
      <div className={s.root}>
        This is Game Page!!!
      </div>
      <button className={s.button} onClick={handleClick}>
        Return Home Page!
      </button>
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
