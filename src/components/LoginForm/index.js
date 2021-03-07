import React, { useState } from 'react';
import Button from '../Button';

import Input from '../Input';

const LoginForm = ({onSubmit}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit({
      email,
      password
    });
    setEmail('');
    setPassword('')
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
      <Button text="Login"/>
    </form>
  );
};

export default LoginForm;