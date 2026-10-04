import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { stringify, v4 as uuidv4 } from "uuid";
// import React  from "react";
// import { useState  } from "react";

function App() {
  const [todo, setTodo] = useState(""); //input text
  const [todos, setTodos] = useState([]); //holds all todo
  const [showfinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todoString = JSON.parse(localStorage.getItem("todos"));
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const savetoLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = (e) => {
    setshowFinished(!showfinished);
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    setTodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    savetoLS();
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    savetoLS();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos);
    savetoLS();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    savetoLS();
  };

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
            disabled={todo.length <= 3}
            className="bg-violet-800 hover:bg-violet-950 disabled:bg-violet-700 p-1 pl-2 pr-2 text-sm text-white font-bold rounded-md mx-6"
          >
            Save
          </button>
        </div>
        <input
          onChange={toggleFinished}
          type="checkbox"
          checked={showfinished}
        />
        Show Finished
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-5">No todo to display</div>}
          {todos.map((item) => {
            return (
              (showfinished || !item.isCompleted) && (
                <div key={item.id} className="todo flex w-1/2 my-3 items-start">
                  <div className="flex gap-2 items-start w-full">
                    <input
                      name={item.id}
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                      className="mt-1"
                    />
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>

                  <div className="buttons flex h-full"></div>

                  <button
                    onClick={(e) => {
                      handleEdit(e, item.id);
                    }}
                    className="bg-violet-800 hover:bg-violet-950 p-1 py-1 text-xs text-white font-bold rounded-md mx-1"
                  >
                    Edit
                  </button>

                  <button
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                    className="bg-violet-800 hover:bg-violet-950 p-1 py-1 text-xs text-white font-bold rounded-md mx-1"
                  >
                    Delete
                  </button>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
