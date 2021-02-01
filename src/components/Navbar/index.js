import cn from 'classnames';

import s from './style.module.css';

const NavBar = ({isClassActive, onClickHamburger}) => {
  const handleClick = () => {
    onClickHamburger();
  }
  return (
    <nav id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <span
          className={cn(s.menuButton, {[s.active]: isClassActive})}
          onClick={handleClick}
        >
          <span />
        </span>
      </div>
    </nav>
  )
}

export default NavBar;
