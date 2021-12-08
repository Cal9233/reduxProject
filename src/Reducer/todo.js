import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, TOGGLE_TODO } from "../Action/action-types";
//import { createSlice } from "@reduxjs/toolkit";

//reducer is the 'how to do it' of redux, think of it like the api js fetch from nexus project
//types of field action is to switch and validate WHICH logic to perform
//payload data updates the states in the store

const initialState = [
  {
    id: "01",
    text: "Learn React",
    status: "not-started",
  },
  {
    id: "02",
    text: "Learn Redux",
    status: "not-started",
  },
];

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
}

// function getId(todos){
//   return todos.reduce((i, todo) => {
//     return Math.max(todo.id, i)
//   }, -1) + 1;
// }

// const initialState = [ 
//     { id: 0, text: "Learn React", completed: true, color: "green" },
//     { id: 1, text: "Learn Redux", completed: false, color: "red" },
//     { id: 2, text: "Build Redux App", completed: false, color: "blue"},
//     { id: 3, text: "Remain Positive", completed: true, colors: "purple" }
// ];

// const todoReducer = (state = initialState, action) => {
//   switch(action.types){
//     case ADD_TODO: 
//       return [
//         ...state,
//         // {
//         //   id: getId(state),
//         //   text: action.payload,
//         //   completed: false
//         // }
//         action.payload
//       ] 
    
//     case REMOVE_TODO: {
//       return {
//         state,
//         todo: action.payload
//       }
//     }
//     case UPDATE_TODO: {
//       return {
//         ...state,
//         todo: action.payload
//       }
//     }
//     case TOGGLE_TODO: {
//       return state.map(todo => {
//         if(todo.id !== action.payload){
//           return todo
//         }
//         return {
//           ...todo,
//           completed: !todo.completed
//         }
//       })
//     }
//     default: {
//       return state;
//     }
//   }
// }

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

// const addTodoReducer = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     addTodos: (state, action) => {
//       state.push(action.payload);
//       return state;
//     },
//     removeTodos: (state, action) => {
//       return state.filter((item) => item.id !== action.payload);
//     },
//     updateTodos: (state, action) => {
//       return state.map((todo) => {
//         if (todo.id === action.payload.id){
//           return {
//             ...todo,
//             item: action.payload.item,
//           };
//         }
//         return todo;
//       })
//     },
//     completedTodos: (state, action) => {
//       return state.map((todo) => {
//         if(todo.id === action.payload){
//           return {
//             ...todo,
//             completed: true,
//           };
//         }
//         return todo;
//       })
//     }
//   },
// });



// export const { addTodos, removeTodos, updateTodos, completedTodos } = addTodoReducer.actions;

// export const reducer = addTodoReducer.reducer;

export default todoReducer;