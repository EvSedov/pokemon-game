import { useState } from 'react';
import Menu from '../Menu';
import NavBar from '../Navbar';

const MenuHeader = () => {
  const [isActive, setActive] = useState(false);

  const handleClickHamburger = () => {
    setActive(!isActive);
  }
  return (
    <>
      <Menu isClassActive={isActive}/>
      <NavBar isClassActive={isActive} onClickHamburger={handleClickHamburger} />
    </>
  )
}

export default MenuHeader;
