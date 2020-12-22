import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../actions/todo';

function Footer() {
  const dispatch = useDispatch();
  const { todoReducer } = useSelector((state) => state);
  const items = todoReducer.data;
  const itemsLeft = items.filter((todo) => todo.status === false);
  const onFilter = (status) => {
    dispatch(action.filterTodo(status));
  };
  const onClearCompleted = () => {
    dispatch(action.clearComplete());
  };

  return (
    <>
      {items.length < 1 ? null : (
        <footer className='text-gray-500 py-2.5 px-4 h-11 text-center border-solid border-t'>
          <span className='float-left text-left'>
            <strong>{itemsLeft.length}</strong>
            <span>{itemsLeft.length <= 1 ? ' item' : ' items'}</span>
            <span> left</span>
          </span>
          <ul className='m-0 p-0 list-none absolute right-0 left-0'>
            <li className='inline'>
              <a
                href='#/'
                onClick={() => onFilter('ALL')}
                className={`${
                  todoReducer.filter === 'ALL'
                    ? 'm-0.5 py-0.75 px-2 no-underline border border-solid rounded border-red-100'
                    : 'm-2'
                }`}
              >
                All
              </a>
            </li>
            <li className='inline'>
              <a
                href='#/'
                onClick={() => onFilter('ACTIVE')}
                className={`${
                  todoReducer.filter === 'ACTIVE'
                    ? 'm-0.5 py-0.75 px-2 no-underline border border-solid rounded border-red-100'
                    : 'm-2'
                }`}
              >
                Active
              </a>
            </li>
            <li className='inline'>
              <a
                href='#/'
                onClick={() => onFilter('COMPLETED')}
                className={`${
                  todoReducer.filter === 'COMPLETED'
                    ? 'm-0.5 py-0.75 px-2 no-underline border border-solid rounded border-red-100'
                    : 'm-2'
                }`}
              >
                Completed
              </a>
            </li>
          </ul>
          {items.length > itemsLeft.length ? (
            <button
              className='float-right relative no-underline cursor-pointer'
              onClick={onClearCompleted}
            >
              Clear completed
            </button>
          ) : null}
        </footer>
      )}
    </>
  );
}

export default Footer;
