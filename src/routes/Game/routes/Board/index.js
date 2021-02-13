import { useState, useContext, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

import {PokemonContext} from '../../../../context/pokemonContext';

import PokemonCard from '../../../../components/PokemonCard';
import PlayerBoard from './component/PlayerBoard';

import s from './style.module.css';

const BoardPage = () => {
  const { selectedPokemons } = useContext(PokemonContext);

  const [board, setBoard] = useState([]);
  const [player1, setPlayer1] = useState(() => {
    return Object.values(selectedPokemons).map((item) => ({
      ...item,
      possession: 'blue'
    }))
  });
  const [player2, setPlayer2] = useState([]);
  const [choiceCard, setChoiceCard] = useState(null);  
  
  // const history = useHistory();

  useEffect(() => {
    async function fetchData () {
      const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
      const boardRequest = await boardResponse.json();
      setBoard(boardRequest.data)

      const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
      const player2Request = await player2Response.json();
      setPlayer2(() => {
    return player2Request.data.map((item) => ({
      ...item,
      possession: 'red'
    }))
  });
    };
    fetchData();
  }, []);

  // if (Object.keys(selectedPokemons).length === 0) {
  //   history.replace('/game');
  // }

  const hendleClickBoardPlate = async (position) => {
    if (choiceCard) {
      const params = {
        position,
        card: choiceCard,
        board,
      }

      const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      const request = await res.json();
      console.log('#### request', request);
      setBoard(request.data);
    }
  }

  return (
    <div className={s.root}>
			<div className={s.playerOne}>
        {
          <PlayerBoard
            player={1}
            cards={player1} 
            onClickCard={(card) => setChoiceCard(card)}
          />
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
                item.card && <PokemonCard {...item.card} isActive minimize />
              }
            </div>
          ))
        }
      </div>
      <div className={s.playerTwo}>
        <PlayerBoard
          player={2}
          cards={player2}
          onClickCard={(card) => setChoiceCard(card)}
        />
      </div>
    </div>
  )
};

export default BoardPage;
