import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as action from '../../actions/todo';

function Header(props) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  // const { addTodo, isCheckedAll } = props;
  const onAddTodo = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(
        action.addTodo({
          id: new Date().valueOf(),
          name: text,
          status: false,
          editing: false,
        })
      );
      setText('');
    }
  };
  return (
    <header className='header'>
      <h1 className='absolute -top-24 w-full text-8xl font-light text-center text-pink-200'>todos</h1>
      <form onSubmit={onAddTodo}>
        <input
          className='new-todo'
          value={text}
          onChange={(e) => setText(e.target.value)}
          // onKeyPress={(e) => onAddTodo(e)}
          // checked={isCheckedAll}
        />
      </form>
    </header>
  );
}

export default Header;
