import { useState } from "react";
import "./App.css";
import "./Todoinput.js";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== ""){
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <div className= "App">
      <h1>React todo app</h1>

      <div className="input-wrapper">
        <input type="text" name="todo" placeholder ="Create a new todo" />
        <button className="add-button">Add</button>
      </div>
    </div>
  )
}

export default App;