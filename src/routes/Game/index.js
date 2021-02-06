import {useState} from 'react';

import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';

import POKEMONS from '../../pokemons';

import {useHistory} from 'react-router-dom';

import s from './style.module.css';

const GamePage = () => {
  const history = useHistory()
  const handleClick = () => {
    history.push('/');
  };

  const [pokemons, setStatePokemons] = useState(POKEMONS);

  const hendleClickCard = (id) => {
    setStatePokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id === id) {
          pokemon.active = true;
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
            pokemons.map(
              (pokemon) => <PokemonCard
                key = {pokemon.id}
                name = {pokemon.name}
                type = {pokemon.type}
                img = {pokemon.img}
                id = {pokemon.id}
                values = {pokemon.values}
                isActive={pokemon.active}
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
