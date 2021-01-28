import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderBlock from './components/HeaderBlock';

const AppHeader = () => (
  <h1 className="header">Hello world!!!</h1>
);

const AppList = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
  return (
    <ul>
      {
        items.map(item => <li>{item}</li>)
      }
    </ul>
  )
};

const App = () => {
  return (
    <>
      <AppHeader />
      <AppList />
      <HeaderBlock />
    </>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
