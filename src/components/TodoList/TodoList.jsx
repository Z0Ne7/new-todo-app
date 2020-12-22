import React from 'react';
import Todo from '../Todo';
import { useSelector } from 'react-redux';

function TodoList(props) {
  const { todoReducer } = useSelector((state) => state);
  const allTodos = todoReducer.data;
  const { filter } = todoReducer;
  const isNotCompletedAll = allTodos.find((todo) => !todo.status);
  const onCheckAll = () => {};
  const filterTodos = (todos, status) => {
    switch (status) {
      case 'ALL':
        return todos;
      case 'ACTIVE':
        return todos.filter((todo) => !todo.status);
      case 'COMPLETED':
        return todos.filter((todo) => todo.status);
      default:
        return todos;
    }
  };

  return (
    <section className='main'>
      {allTodos.length < 1 ? null : (
        <input
          className='toggle-all'
          type='checkbox'
          checked={isNotCompletedAll ? false : true}
          onChange={onCheckAll}
        />
      )}
      <label htmlFor='toggle-all'></label>
      <ul className='todo-list'>
        {filterTodos(allTodos, filter).map((todo) => (
          <Todo key={todo.id} {...{ todo }} {...props} />
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
