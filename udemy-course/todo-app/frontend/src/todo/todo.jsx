import React, { Component } from 'react';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
  render() {
    return (
      <div>
        <PageHeader name="Tasks" small='Register' />
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}
