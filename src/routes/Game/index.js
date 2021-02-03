import s from './style.module.css';

const GamePage = ({onChangePage}) => {
  const handleClick = () => {
    onChangePage && onChangePage('app');
  };

  return (
    <>
      <div>
        This is Game Page!!!
      </div>
      <button className={s.button} onClick={handleClick}>
        Return Home Page!
      </button>
    </>
  )
};

export default GamePage;
