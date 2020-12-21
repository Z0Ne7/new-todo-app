import produce from 'immer';
import { ACTION } from '../constants/actionTypes';

const initialState = {
  data: [
    { id: 1, name: 'To do 1', status: false, isEditing: false },
    { id: 2, name: 'To do 2', status: true, isEditing: false },
    { id: 3, name: 'To do 3', status: true, isEditing: false },
  ],
  filter: 'ALL',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return produce(state, (draft) => {
        draft.data.push(action.payload.todo);
      });
    case ACTION.REMOVE_TODO:
      return produce(state, (draft) => {
        draft.data = draft.data.filter((todo) => todo.id !== action.payload);
      });
    case ACTION.EDIT_TODO:
      return produce(state, (draft) => {
        const findTodo = draft.data.find((todo) => {
          return todo.id === action.payload;
        });
        findTodo.isEditing = !findTodo.isEditing;
      });
    case ACTION.CONFIRM_EDIT_TODO:
      return produce(state, (draft) => {
        const findTodo = draft.data.find((todo) => {
          return todo.id === action.payload.id;
        });
        findTodo.name = action.payload.text;
        findTodo.isEditing = false;
      });
    case ACTION.COMPLETE_TODO:
      return produce(state, (draft) => {
        const findTodo = draft.data.find((todo) => {
          return todo.id === action.payload;
        });
        findTodo.status = !findTodo.status;
      });
    case ACTION.FILTER_ALL_TODO:
      return produce(state, (draft) => {
        console.log(action.payload);
      });
    case ACTION.FILTER_ACTIVE_TODO:
      return produce(state, (draft) => {
        console.log(action.payload);
      });
    case ACTION.FILTER_COMPLETED_TODO:
      return produce(state, (draft) => {
        console.log(action.payload);
      });
    default:
      return state;
  }
};

export default todoReducer;
