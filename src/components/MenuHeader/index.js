import React, { useState } from 'react';
import LoginForm from '../LoginForm';
import Menu from '../Menu';
import Modal from '../Modal';
import NavBar from '../Navbar';

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);

  const handleClickHamburger = () => {
    setOpen((prevState) => !prevState);
  }

  const handleClickLogin = () => {
    setOpenModal((prevState) => !prevState);
  }

  const handleSubmitLoginForm = async ({email, password}) => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })

    }
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCTmvGQGw3UDu7vmvYOfH9TB2uirx4iTKE', requestOptions).then(res => res.json())
    console.log("🚀 ~ response", response)
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
