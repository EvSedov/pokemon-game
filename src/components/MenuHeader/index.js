import React, { useState } from 'react';
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
        This is Modal...
      </Modal>
    </>
  )
}

export default MenuHeader;
