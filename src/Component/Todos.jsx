import React, {useState} from 'react';
import { addTodo } from '../Action/todo';
import { useSelector, useDispatch } from 'react-redux';



const Todos = () => {
  
  const [todo, setTodo] = useState({});
  //const [user, setUser] = useState({});
  // const [todoList, setTodoList] = React.useState();

  const todoList = useSelector((state) => state.todoReducer);
  //const userList = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  // console.log(state);

  // const handleUserNameChange = (e) => {
  //   setUser({
  //     userName: e.target.value,
  //     description: e.target.value,
  //     status: "not-started",
  //   });
  // };

  const handleOnChaneg = (e) => {
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
      <input type="" onChange={handleOnChaneg} />
      {todoList.map((val, key) => {
        return <p key={key}> {val.text}</p>;
      })}

      <button onClick={onAdd}> Add to List</button>
      {/* <br />
      <br />
      <br />
      <input type="" onChange={handleUserNameChange} />
      {userList.map((val, key) => {
        return <p key={key}> {val.userName}</p>;
      })}

      <button onClick={onUserAdd}> Add user to the List</button>

      <br />
      <br />
      <br />
      <br />
      <button onClick={handleGetTodo}> Get Todo List</button> */}
    </div>
  );
}


export default Todos
