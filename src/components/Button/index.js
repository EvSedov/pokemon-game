import React, {useState} from 'react';

import s from './style.module.css';

const Button = ({isLogin, onClickBtn}) => {
  const hendleClick = () => {
    onClickBtn();
  }

  return (
    <div className={s.flex}>
      <button className={s.button}>
       { isLogin ? 'Login' : 'Signup' }
      </button>
      <div 
        className={s.link}
        onClick={() => hendleClick()}
      >
        { isLogin ? 'Register' : 'Login' }
      </div>
    </div>
  );
};

export default Button;