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

export const editTodo = (id) => {
  return {
    type: ACTION.EDIT_TODO,
    payload: id,
  };
};

export const confirmEditTodo = (id, text) => {
  return {
    type: ACTION.CONFIRM_EDIT_TODO,
    payload: { id, text },
  };
};

export const completeTodo = (id) => {
  return {
    type: ACTION.COMPLETE_TODO,
    payload: id,
  };
};

export const filterTodo = (status) => {
  return {
    type: ACTION.FILTER_TODO,
    payload: status,
  };
};

export const clearComplete = () => {
  return {
    type: ACTION.CLEAR_COMPLETED,
  };
};
