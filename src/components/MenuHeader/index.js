import React, { useState } from 'react';
import LoginForm from '../LoginForm';
import Menu from '../Menu';
import Modal from '../Modal';
import NavBar from '../Navbar';

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);
  const [isOpenModal, setOpenModal] = useState(true);

  const handleClickHamburger = () => {
    setOpen((prevState) => !prevState);
  }

  const handleClickLogin = () => {
    setOpenModal((prevState) => !prevState);
  }

  const handleSubmitLoginForm = (value) => {
    console.log("🚀 ~ value", value);
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
        title="Title Modal!"
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
