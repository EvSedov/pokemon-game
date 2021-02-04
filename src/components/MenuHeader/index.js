import { useState } from 'react';
import Menu from '../Menu';
import NavBar from '../Navbar';

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);

  const handleClickHamburger = () => {
    setOpen((prevState) => !prevState);
  }
  return (
    <>
      <Menu isOpen={isOpen}/>
      <NavBar isOpen={isOpen} bgActive={bgActive} onClickHamburger={handleClickHamburger} />
    </>
  )
}

export default MenuHeader;
