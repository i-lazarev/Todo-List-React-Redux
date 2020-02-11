import { todoConstants } from "../constants";
const initState = [];

export const todos = (state = initState, action) => {
  switch (action.type) {
    case todoConstants.RETRIEVE_TODOS:
      return [...state, ...action.items];
    case todoConstants.ADD_TODO:
      return [...state, action.newItem];
    case todoConstants.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, status: !todo.status } : todo
      );
    case todoConstants.DEL_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};
