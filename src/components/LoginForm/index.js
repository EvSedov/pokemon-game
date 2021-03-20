import React, { useState } from 'react';
import Button from '../Button';

import Input from '../Input';

const LoginForm = ({onSubmit}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setLogin] = useState(true);

  const hendleLogin = () => {
    setLogin(!isLogin);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit({
      type: isLogin ? 'login' : 'signup',
      email,
      password
    });
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={email}
        label="Email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        required={true}
      />
      <Input
        value={password}
        label="Password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        required={true}
      />
      <Button
        onClickBtn={() => hendleLogin()}
        isLogin={isLogin}
      />
    </form>
  );
};

export default LoginForm;