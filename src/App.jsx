import { useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';

 // ⇨ 'b18794e8-5d0d-417c-b361-ba38e78411b4'

function App() {
  const [todo, setTodo] = useState(""); //input text
  const [todos, setTodos] = useState([]); //holds all todo

  const handleEdit = () => {

  };

  const handleDelete = () => {

  };

  const handleAdd = () => {
    setTodos([...todos, {id:uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos)
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
   let id = e.target.name;
   let index = todos.findIndex(item => {
    return item.id === id;
   })
   let newTodos = [...todos];
   newTodos[index].isCompleted = !newTodos[index].isCompleted;
   setTodos(newTodos);

  }
  

  return (
    <>
      <Navbar />

      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[90vh]">
        <div className="addtodo">
          <h2 className="text-lg font-bold my-2">Add a Todo</h2>

          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-1/2"
          />

          <button
            onClick={handleAdd}
            className="bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm text-white font-bold rounded-md mx-6"
          >
            Add
          </button>
        </div>

        <h2 className="text-lg font-bold">Your Todos</h2>

        <div className="todos">
          {todos.map((item) => {
            return (
              <div key={item.id} className="todo flex w-1/4 my-3 justify-between">
                <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted}/>
                <div className={item.isCompleted?"line-through":""}>{item.todo}</div>

                <div className="buttons"></div>

                <button
                  onClick={handleEdit}
                  className="bg-violet-800 hover:bg-violet-950 p-1 py-1 text-xs text-white font-bold rounded-md mx-1"
                >
                  Edit
                </button>

                <button
                  onClick={handleDelete}
                  className="bg-violet-800 hover:bg-violet-950 p-1 py-1 text-xs text-white font-bold rounded-md mx-1"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;