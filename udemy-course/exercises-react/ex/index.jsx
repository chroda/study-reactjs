import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import Field from './field';

const reducers = combineReducers({
  field: () => ({ value: 'Hello' })
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Field initialValue='testing' />
  </Provider>
  , document.getElementById('app'));
