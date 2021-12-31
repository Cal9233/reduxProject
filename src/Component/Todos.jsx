import React, {useState} from 'react';
import { addTodo } from '../Action/todo';
import { useSelector, useDispatch } from 'react-redux';

const Todos = () => {
  
  const [todo, setTodo] = useState({});

  const todoList = useSelector((state) => state.todoReducer);
  //const filterList = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();


  const handleOnChange = (e) => {
    setTodo({
      id: "03" + e.target.value,
      description: e.target.value,
      status: "not-started",
    });
  };

  const onAdd = () => {
    dispatch(addTodo(todo));
  };

  // const onUserAdd = () => {
  //   dispatch(addUser(user));
  // };

  // const handleGetTodo = () => {
  //   dispatch(getTodoList());
  // };

  return (
    <div className="App">
      <br />
      <input type="" onChange={handleOnChange} />
      {todoList.map((val, key) => {
        return <p key={key}> {val.description} </p>;
      })}
      <button onClick={onAdd}> Add to List </button>
    </div>
  );
}


export default Todos
