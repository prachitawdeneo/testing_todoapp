import React,{useState} from 'react';
import Input from "./components/Input";
import TodoList from "./components/TodoList";
function App() {
  const [todos,setTodos]=useState('');
  const [listToDos,setListToDos]=useState([]);
  const handleSubmitToDo=(userToDo)=>{
       setListToDos(listToDos.concat(userToDo))
  }
  return (
    <div className="App">
       <h2> To do list </h2>
       <Input initialToDo={todos} setTodo={setTodos} onSubmitToDo={handleSubmitToDo}/>
       <TodoList toDoList={listToDos}/>
    </div>
  );
}

export default App;
