import { todoConstants } from "../constants";

const retrieveTodos = items => {
  return { type: todoConstants.RETRIEVE_TODOS, items };
};

const addTodo = newItem => {
  return { type: todoConstants.ADD_TODO, newItem };
};

const toggleTodo = id => {
  return { type: todoConstants.TOGGLE_TODO, id };
};

const delTodo = id => {
  return { type: todoConstants.DEL_TODO, id };
};

export const todoActions = {
  retrieveTodos,
  addTodo,
  toggleTodo,
  delTodo
};
