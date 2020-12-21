import React from 'react';
import Todo from '../Todo/Todo';
import { useSelector } from 'react-redux';

function TodoList(props) {
  const { todoReducer } = useSelector((state) => state);
  return (
    <section className='main'>
      <input className='toggle-all' type='checkbox' />
      <label htmlFor='toggle-all'></label>
      <ul className='todo-list'>
        {todoReducer.data.map((todo) => (
          <Todo key={todo.id} {...{ todo }} {...props} />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
