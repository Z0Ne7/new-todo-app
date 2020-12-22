import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as action from '../../actions/todo';

function Header(props) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const onAddTodo = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(
        action.addTodo({
          id: new Date().valueOf(),
          name: text,
          status: false,
          isEditing: false,
        })
      );
      setText('');
    }
  };
  return (
    <header>
      <h1 className='absolute -top-24 w-full text-8xl font-light text-center text-pink-100'>todos</h1>
      <form onSubmit={onAddTodo}>
        <input
          className='new-todo italic'
          value={text}
          placeholder='What needs to be done?'
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </header>
  );
}

export default Header;
