import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import Field from './field';

const reducers = combineReducers({
  field: () => ({ value: 'Hello' })
});

ReactDOM.render(
  <Field initialValue='testing' />
  , document.getElementById('app'));
