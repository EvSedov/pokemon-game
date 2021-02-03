import cn from 'classnames';

import s from './style.module.css';

const Menu = ({isClassActive}) => {
  const lists = [
    {
      id: 1,
      descr: 'HOME',
      href: '#welcome',
    },
    {
      id: 2,
      descr: 'GAME',
      href: '#game',
    },
    {
      id: 3,
      descr: 'ABOUT',
      href: '#about',
    },
    {
      id: 4,
      descr: 'CONTACT',
      href: '#contact',
    },
  ];
  return (
    <div className={
      cn(
        s.menuContainer,
        {[s.active]: isClassActive},
        {[s.deactive]: !isClassActive}
      )}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {
            lists.map((list) => {
              return (
                <li key={list.id}>
                  <a href={list.href}>
                    {list.descr}
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
