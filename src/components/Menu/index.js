import cn from 'classnames';

import s from './style.module.css';

const menuLists = [
  {
    id: 1,
    title: 'HOME',
    to: '#welcome',
  },
  {
    id: 2,
    title: 'GAME',
    to: '#game',
  },
  {
    id: 3,
    title: 'ABOUT',
    to: '#about',
  },
  {
    id: 4,
    title: 'CONTACT',
    to: '#contact',
  },
];

const Menu = ({ isOpen }) => {
  return (
    <div className={cn(s.menuContainer, {
      [s.active]: isOpen === true,
      [s.deactive]: isOpen === false
    })}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {
            menuLists.map(({ title, to, id }) => {
              return (
                <li key={id}>
                  <a href={to}>
                    {title}
                  </a>
                </li>
              )
            })
          }
          </ul>
      </div>
    </div>
  )
}

export default Menu;
