import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, bindActionCreators } from 'redux';

import rootReducer, * as actions from './store/counter';

import './index.css';

import App from './App';

const store = new createStore(rootReducer);
store.subscribe(() => console.log("🚀 ~ file: index.js ~ line 14 ~ store", store.getState()));
const {plusAction, minusAction} = bindActionCreators(actions, store.dispatch)
plusAction(5);
minusAction(3);
plusAction(10);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
