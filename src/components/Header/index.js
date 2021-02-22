import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {plusAction, selectCount} from '../../store/counter';
import s from './style.module.css';

const Header = ({ title, descr }) => {
  const history = useHistory();
  console.log("🚀 ~ file: index.js ~ line 10 ~ Header ~ history", history)
  
  const count = useSelector(selectCount);
  console.log("🚀 ~ file: index.js ~ line 10 ~ Header ~ count", count)
  const dispatch = useDispatch();

  const handleClick = () => {
    // history.push('/game');
    dispatch(plusAction(1));
  };

  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.silhouette}></div>
      <div className={s.moon}></div>
      <div className={s.container}>
        {title && (<h1>{title}</h1>) }
        {descr && (<p>{descr}</p>) }
        <button className={s.button} onClick={handleClick}>
          Start Game!
        </button>
      </div>
    </header>
  )
};

export default Header;
