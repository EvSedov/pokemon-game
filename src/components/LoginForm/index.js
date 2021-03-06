import React, { useState } from 'react';

import s from './style.module.css';

const LoginForm = ({onSubmit}) => {
  const [email, setEmail] = useState('you-email@addr.ru');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit({
      email,
      password
    });
    setEmail('you-email@addr.ru');
    setPassword('')
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={s.root} >
          <input 
            type="text" 
            className={s.input} 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <span className={s.highlight}></span>
          <span className={s.bar}></span>
          <label className={s.label}>Email</label>
        </div>
        <div className={s.root}>
          <input 
            type="text" 
            className={s.input}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <span className={s.highlight}></span>
          <span className={s.bar}></span>
          <label className={s.label}>Password</label>
        </div>
        <button>
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;