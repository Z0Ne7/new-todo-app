import React from 'react';
import Todo from '../Todo/Todo';
import { connect, useSelector } from 'react-redux';

function TodoList(props) {
  const {todoReducer} = useSelector(state => state);
  return (
    <section className='main'>
      <input className='toggle-all' type='checkbox' />
      <label htmlFor='toggle-all'></label>
      <ul className='todo-list'>
        {todoReducer.data.map((todo) => (
          <Todo key={`todo${todo.id}`} {...{ todo }} {...props} />
        ))}
      </ul>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    todosList: state.todoReducer.data,
  };
};
export default connect(mapStateToProps)(TodoList);
