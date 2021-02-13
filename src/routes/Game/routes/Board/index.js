import { useState, useContext, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

import {PokemonContext} from '../../../../context/pokemonContext';

import PokemonCard from '../../../../components/PokemonCard';

import s from './style.module.css';

const BoardPage = () => {
  const [board, setBoard] = useState([]);
  const [player2, setPlayer2] = useState([]);
  console.log("🚀 ~ file: index.js ~ line 13 ~ BoardPage ~ player2", player2)
  
  
  const { selectedPokemons } = useContext(PokemonContext);
  // const history = useHistory();

  useEffect(() => {
    async function fetchData () {
      const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
      const boardRequest = await boardResponse.json();
      setBoard(boardRequest.data)

      const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
      const player2Request = await player2Response.json();
      setPlayer2(player2Request.data);
    };
    fetchData();
  }, []);

  // if (Object.keys(selectedPokemons).length === 0) {
  //   history.replace('/game');
  // }

  const hendleClickBoardPlate = (position) => {
    console.log("🚀 ~ file: index.js ~ line 29 ~ hendleClickBoardPlate ~ position", position)

  }

  return (
    <div className={s.root}>
			<div className={s.playerOne}>
        {
          Object.values(selectedPokemons).map(
            ({id, name, type, img, values }) => <PokemonCard
              key = {id}
              name = {name}
              type = {type}
              img = {img}
              id = {id}
              values = {values}
              isActive
              minimize
              className={s.card}
            />
          )
        }
      </div>
      <div className={s.board}>
        {
          board.map((item) =>( 
            <div
              key={item.position}
              className={s.boardPlate}
              onClick={ () => !item.card && hendleClickBoardPlate(item.position)}
            >
              {
                item.card && <PokemonCard {...item} minimize />
              }
            </div>
          ))
        }
      </div>
      <div className={s.playerTwo}>
        {
          player2.map(
            ({id, name, type, img, values }) => <PokemonCard
              key = {id}
              name = {name}
              type = {type}
              img = {img}
              id = {id}
              values = {values}
              isActive
              minimize
              className={s.card}
            />
          )
        }
      </div>
    </div>
  )
};

export default BoardPage;
