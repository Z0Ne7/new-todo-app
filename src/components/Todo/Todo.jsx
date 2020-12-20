import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../actions/todo';
// import { connect } from 'react-redux';

function Todo(props) {
  const { todo } = props;
  const dispatch = useDispatch();
  const handleDoubleClick = () => {
    console.log('ok');
  };
  const onDelete = () => {
    const { id } = todo;
    console.log(id);
    dispatch(removeTodo(id));
  };
  return (
    <div>
      {todo.isEditing ? null : (
        <li>
          <div className='view' onDoubleClick={handleDoubleClick}>
            <input className='toggle' type='checkbox' />
            <label>{todo.name}</label>
            <button className='destroy' onClick={onDelete}></button>
          </div>
        </li>
      )}
    </div>
  );
}

export default Todo;
