import { ACTION } from '../constants/actionTypes';

export const addTodo = (todo) => {
  return {
    type: ACTION.ADD_TODO,
    payload: { todo },
  };
};

export const removeTodo = (id) => {
  return {
    type: ACTION.REMOVE_TODO,
    payload: id,
  };
};

