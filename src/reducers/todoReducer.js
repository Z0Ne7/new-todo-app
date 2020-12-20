import produce from 'immer';
import { ACTION } from '../constants/actionTypes';

const initialState = {
  data: [
    { id: 1, name: 'To do 1', status: false, editing: false },
    { id: 2, name: 'To do 2', status: true, editing: false },
    { id: 3, name: 'To do 3', status: true, editing: false },
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
        return draft.data.filter((todo) => todo.id !== action.payload);
      });

    default:
      return state;
  }
};


export default todoReducer;
