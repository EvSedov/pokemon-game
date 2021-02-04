import cn from 'classnames';

import s from './style.module.css';

const NavBar = ({isOpen, bgActive=false, onClickHamburger}) => {
  const handleClick = () => {
    onClickHamburger && onClickHamburger();
  }
  return (
    <nav id={s.navbar} className={cn({
      [s.bgActive]: bgActive
    })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          WELLCOME TO THE POKEMONS GAME
        </p>
        <div
          className={cn(s.menuButton, {[s.active]: isOpen})}
          onClick={handleClick}
        >
          <span />
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
