import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import Field from './field';
import fieldReducer from './fieldReducer';

const reducers = combineReducers({ field: fieldReducer });

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Field initialValue='testing' />
  </Provider>
  , document.getElementById('app'));
