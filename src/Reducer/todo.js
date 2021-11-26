import { ADD_TODO, REMOVE_TODO } from "../Action/action-types";
import { createSlice } from "@reduxjs/toolkit";

//reducer is the 'how to do it' of redux, think of it like the api js fetch from nexus project
//types of field action is to switch and validate WHICH logic to perform
//payload data updates the states in the store

const initialState = [];

// export const todos = (state = initialState, action) => {
//   switch(action.types){
//     case ADD_TODO: {
//       return [...state, action.payload];
//     }
//     case REMOVE_TODO: {
//       return [state, action.payload];
//     }
//     default:
//       return state;
//   }
// }

const addTodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id){
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      })
    },
    completedTodos: (state, action) => {
      return state.map((todo) => {
        if(todo.id === action.payload){
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      })
    }
  },
});



export const { addTodos, removeTodos, updateTodos, completedTodos } = addTodoReducer.actions;

export const reducer = addTodoReducer.reducer;