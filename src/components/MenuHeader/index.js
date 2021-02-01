import { useState } from 'react';
import Menu from '../Menu';
import NavBar from '../Navbar';

const MenuHeader = () => {
  const [isActive, setActive] = useState(false);

  const handleClickHamburger = (isActive) => {
    setActive(isActive)
  }
  return (
    <>
      <Menu clickHamburger={isActive}/>
      <NavBar onClickHamburger={handleClickHamburger} />
    </>
  )
}

export default MenuHeader;
