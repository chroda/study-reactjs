import React from 'react';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default () => (
  <div>
    <PageHeader name="Tasks" small='Register' />
    <TodoForm />
    <TodoList />
  </div>
);
