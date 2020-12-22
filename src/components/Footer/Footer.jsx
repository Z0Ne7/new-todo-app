import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../actions/todo';

function Footer(props) {
  const dispatch = useDispatch();
  const { todoReducer } = useSelector((state) => state);
  const items = todoReducer.data;
  const itemsLeft = items.filter((todo) => todo.status === false);
  const onFilterAll = () => {
    dispatch(action.filterAllTodo('ALL'));
  };
  const onFilterActive = () => {
    dispatch(action.filterActiveTodo('ACTIVE'));
  };
  const onFilterCompleted = () => {
    dispatch(action.filterCompletedTodo('COMPLETED'));
  };
  const onClearCompleted = () => {
    dispatch(action.clearComplete());
  };

  return (
    <>
      {items.length < 1 ? null : (
        <footer className='footer'>
          <span className='todo-count'>
            <strong>{itemsLeft.length}</strong>
            <span>{itemsLeft.length <= 1 ? ' item' : ' items'}</span>
            <span> left</span>
          </span>
          <ul className='filters'>
            <li>
              <a
                href='#/'
                onClick={onFilterAll}
                className={`${todoReducer.filter === 'ALL' ? 'selected' : ''}`}
              >
                All
              </a>
            </li>
            <li>
              <a
                href='#/'
                onClick={onFilterActive}
                className={`${todoReducer.filter === 'ACTIVE' ? 'selected' : ''}`}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href='#/'
                onClick={onFilterCompleted}
                className={`${todoReducer.filter === 'COMPLETED' ? 'selected' : ''}`}
              >
                Completed
              </a>
            </li>
          </ul>
          {items.length > itemsLeft.length ? (
            <button className='clear-completed' onClick={onClearCompleted}>
              Clear completed
            </button>
          ) : null}
        </footer>
      )}
    </>
  );
}

export default Footer;
