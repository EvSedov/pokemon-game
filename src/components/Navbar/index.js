import React from 'react';
import cn from 'classnames';

import { ReactComponent as LoginSVG } from '../../assets/login.svg';

import s from './style.module.css';

const NavBar = ({isOpen, bgActive=false, onClickHamburger, onClickLogin}) => {
  return (
    <nav id={s.navbar} className={cn({
      [s.bgActive]: bgActive
    })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          WELLCOME TO THE POKEMONS GAME
        </p>
        <div className={s.loginAndMenu}>
          <div 
            className={s.loginWrap}
            onClick={onClickLogin}
          >
            <LoginSVG />
          </div>
          <div
            className={cn(s.menuButton, {
              [s.active]: isOpen
            })}
            onClick={onClickHamburger}
          >
            <span />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
