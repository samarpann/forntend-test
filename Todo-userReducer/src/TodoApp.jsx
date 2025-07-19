import { useState } from "react";
import { useTodo } from "./TodoContext";

const TodoApp = () => {
  const { todos, dispatch } = useTodo();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: "ADD_TODO", payload: input });
      setInput("");
    }
  };

  return (
    <div>
      <h1 >Todo</h1>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task"
        />
        <button
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <ul >
        {todos.map((todo) => (
          <li
            key={todo.id}
          >
            {todo.text}
            <button
              onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
