import {useContext} from 'react';
import {TextContext} from '../../context/testContext';

import s from './style.module.css';

const AboutPage = () => {
  const themeContext = useContext(TextContext);
  const handleClick = () =>{
    themeContext.onChangeTheme(themeContext.theme === 'light' ? 'dark' : 'light')
  }
  console.log(themeContext);

  return (
    <>
      <h1 className={s.title}>This is About Page.</h1>
      <button onClick={handleClick}>
        Change Theme
      </button>
    </>
  )
};

export default AboutPage;
