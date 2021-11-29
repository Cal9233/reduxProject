import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, UPDATE_TODO } from "./action-types";

//action is the logic for the reducer to dispatch
//think of action as the "controller" in mvc concepts

export const addTodo = (todo) => {
  return async dispatch => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    })
  }
};

export const removeTodo = (key) => {
  return async dispatch => {
    dispatch({
      type: REMOVE_TODO,
      payload: key,
    })
  }
};

export const toggleTodo = (todo) => {
  return async dispatch => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todo,
    })
  }
}

export const updateTodo = (key) => {
  return async dispatch => {
    dispatch({
      type: UPDATE_TODO,
      payload: key,
    })
  }
}
