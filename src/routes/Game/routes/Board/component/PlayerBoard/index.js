import {useState} from 'react';

import PokemonCard from '../../../../../../components/PokemonCard';

import cn from 'classnames';

import s from './style.module.css';

const PlayerBoard = ({ player, cards, onClickCard }) => {
  const [isSelected, setSelected] = useState(null);

  return (
    <>
      {
          cards.map(
            (item) => 
            (<div className={cn(s.cardBoard, {
                [s.selected]: isSelected === item.id
              })}
              onClick={() => {
                setSelected(item.id);
                onClickCard && onClickCard({
                  player,
                  ...item,
                })
              }}
              key = {item.id}
            >
              <PokemonCard
                name = {item.name}
                type = {item.type}
                img = {item.img}
                id = {item.id}
                values = {item.values}
                isActive
                minimize
              />
            </div>)
          )
        }
    </>
  );
};

export default PlayerBoard;
