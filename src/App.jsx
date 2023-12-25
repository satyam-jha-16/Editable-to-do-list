import { useEffect, useState } from "react";
import { ToDoContextProvider } from "./context";
import { ToDoForm, ToDoItem } from "./components";

function App() {
  const [toDoItems, setToDOItems] = useState([]);

  const addToDo = (toDoItem) => {
    setToDOItems((prev) => [{ id: Date.now(), ...toDoItem }, ...prev]);
  };

  const updateToDo = (id, toDoItem) => {
    setToDOItems((prev) => {
      return prev.map((prevTodo) => {
        return prevTodo.id === id ? toDoItem : prevTodo;
      });
    });
  };

  const deleteToDo = (id) => {
    setToDOItems((prev) => {
      return prev.filter((prevToDo) => {
        return prevToDo.id !== id;
      });
    });
  };

  const toggleComplete = (id) => {
    setToDOItems((prev) => {
      return prev.map((prevToDo) => {
        return prevToDo.id === id
          ? { ...prevToDo, completed: !prevToDo.completed }
          : prevToDo;
      });
    });
  };

  useEffect(() => {
    const toDoItems = JSON.parse(localStorage.getItem("toDoItems"));
    if (toDoItems && toDoItems.length > 0) {
      setToDOItems(toDoItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
  }, [toDoItems]);

  return (
    <ToDoContextProvider
      value={{
        toDoItems,
        addToDo,
        updateToDo,
        deleteToDo,
        toggleComplete,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            <ToDoForm />
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {toDoItems.map((todo) => {
              return(
              <div key={todo.id} className="w-full">
                <ToDoItem todo={todo} />
              </div>);
              
            })}
          </div>
        </div>
      </div>
    </ToDoContextProvider>
  );
}

export default App;
