import React, { useState } from 'react';
import {NotificationManager} from 'react-notifications';

import LoginForm from '../LoginForm';
import Menu from '../Menu';
import Modal from '../Modal';
import NavBar from '../Navbar';

const loginSignupUser = async ({email, password, type}) => {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    })
  }

  switch (type) {
    case 'signup':
      return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCTmvGQGw3UDu7vmvYOfH9TB2uirx4iTKE', requestOptions).then(res => res.json());
    case 'login':
      return await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTmvGQGw3UDu7vmvYOfH9TB2uirx4iTKE', requestOptions).then(res => res.json());
    default:
      return 'I cannot login user!';
  }
}

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);

  const handleClickHamburger = () => {
    setOpen((prevState) => !prevState);
  }

  const handleClickLogin = () => {
    setOpenModal((prevState) => !prevState);
  }

  const handleSubmitLoginForm = async (props) => {
    const response = await loginSignupUser(props);
    console.log("🚀 ~ response", response);
    if (response.hasOwnProperty('error')) {
      NotificationManager.error(response.error.message, 'Wrong!');
    } else {
      localStorage.setItem('idToken', response.idToken);
      NotificationManager.success('Success!!!');
      handleClickLogin();
    }
  }

  return (
    <>
      <Menu
        isOpen={isOpen}
        onClickMenu={handleClickHamburger}
      />
      <NavBar
        isOpen={isOpen}
        bgActive={bgActive}
        onClickHamburger={handleClickHamburger}
        onClickLogin={handleClickLogin}
      />
      <Modal
        title="Log in..."
        isOpen={isOpenModal}
        onCloseModal={handleClickLogin}
      >
        <LoginForm
          onSubmit={handleSubmitLoginForm}
        />
      </Modal>
    </>
  )
}

export default MenuHeader;
