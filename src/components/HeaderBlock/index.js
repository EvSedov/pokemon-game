import s from './style.module.css';

const HeaderBlock = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.header}>This is Pockemon Card Game</h1>
        <p className={s.paragraph}>Simple Triple Trial Card Game</p>
      </div>
    </div>
  )
}

export default HeaderBlock;
