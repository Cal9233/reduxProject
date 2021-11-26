import { ADD_TODO, REMOVE_TODO } from "./action-types";

//action is the logic for the reducer to dispatch
//think of action as the "controller" in mvc concepts

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  payload: todo,
});