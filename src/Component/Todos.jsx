import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo, updateTodo } from '../Action/todo';
import { filterColor, filterStatus } from '../Action/filter';



const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const add = () => {
    if (todo === ""){
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  return (
    <div className="addTodos">
      <input 
      type = "text"
      onChange={(e) => handleChange(e)}
      className="todo-input"
      value={todo}/>
      <button className="add-button" onChange={() => add()}>Add</button>
      <br />

      {/* <ul>
        {props.todos.length > 0 && 
          props.todos.map((item) => {
            return <li key={item.id}>{item.item}</li>;
          })}
      </ul> */}
    </div>
  )
}

export default Todos;
