import { useState } from 'react';
import cn from 'classnames';

import s from './style.module.css';

const NavBar = ({onClickHamburger}) => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
    onClickHamburger(!isActive);
  }
  return (
    <nav id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <span
          className={cn(s.menuButton, {[s.active]: isActive})}
          onClick={handleClick}
        >
          <span />
        </span>
      </div>
    </nav>
  )
}

export default NavBar;
