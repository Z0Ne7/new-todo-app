import React from 'react';
import { useDispatch } from 'react-redux';
import * as action from '../../actions/todo';

function Footer(props) {
  const dispatch = useDispatch();
  const onFilterAll = () => {
    dispatch(action.filterAllTodo('ALL'));
  };
  const onFilterActive = () => {
    dispatch(action.filterActiveTodo('ACTIVE'));
  };
  const onFilterCompleted = () => {
    dispatch(action.filterCompletedTodo('COMPLETED'));
  };

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>1</strong>
        <span> items</span>
        <span> left</span>
      </span>

      <ul className='filters'>
        <li>
          <a href='#/' onClick={onFilterAll}>
            All
          </a>
        </li>
        <li>
          <a href='#/' onClick={onFilterActive}>
            Active
          </a>
        </li>
        <li>
          <a href='#/' onClick={onFilterCompleted}>
            Completed
          </a>
        </li>
      </ul>

      <button className='clear-completed'>Clear completed</button>
    </footer>
  );
}

export default Footer;
