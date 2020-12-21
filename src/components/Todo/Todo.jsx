import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as action from '../../actions/todo';

function Todo(props) {
  const { todo } = props;
  const dispatch = useDispatch();
  const [text, setText] = useState(todo.name);
  const onEditTodo = () => {
    const { id } = todo;
    dispatch(action.editTodo(id));
  };
  const onConfirmEditTodo = (e) => {
    e.preventDefault();
    const { id } = todo;
    dispatch(action.confirmEditTodo(id, text));
  };
  const onDelete = () => {
    const { id } = todo;
    dispatch(action.removeTodo(id));
  };
  const onCompleteTodo = () => {
    const { id } = todo;
    dispatch(action.completeTodo(id));
  };
  return (
    <div>
      {todo.isEditing ? (
        <form onSubmit={onConfirmEditTodo}>
          <input
            autoFocus
            className='edit'
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={onConfirmEditTodo}
          />
        </form>
      ) : (
        <li className={`${todo.status ? 'completed' : ''}`}>
          <div className='view'>
            <input
              className='toggle'
              type='checkbox'
              checked={todo.status}
              onChange={onCompleteTodo}
            />
            <label onDoubleClick={onEditTodo}>{todo.name}</label>
            <button className='destroy' onClick={onDelete}></button>
          </div>
        </li>
      )}
    </div>
  );
}

export default Todo;
