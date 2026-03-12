import "./App.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (!input.trim()) {
      alert("Add Input Value");
      return;
    }

    const updatedTodo = [...todo];

    if (editIndex !== null) {
      updatedTodo[editIndex] = input;
      setTodo(updatedTodo);
      setEditIndex(null);
    } else {
      
      setTodo([...todo, input]);
    }

    setInput("");
  };

  const deleteTodo = (index) => {
    const newTodo = todo.filter((item, i) => i !== index);
    setTodo(newTodo);
  };

  const editTodo = (index) => {
    setInput(todo[index]);
    setEditIndex(index);
  };

  return (
    <>
      <main>
        <section>
          <h2>To-do-list</h2>

          <div className="inputHolder">
            <input
              type="text"
              placeholder="add your task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            
            <button onClick={addTodo}>Add</button>
          </div>

          <div className="item-container">
            <ul>
              {todo.map((item, index) => (
                <TodoItem
                  key={index}
                  item={item}
                  index={index}
                  editTodo={editTodo}
                  deleteTodo={deleteTodo}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;