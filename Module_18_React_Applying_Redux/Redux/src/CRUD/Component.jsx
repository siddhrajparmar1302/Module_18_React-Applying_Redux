import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "./Slice";

const App = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.crud?.items || []);
  const memoizedTodos = useMemo(() => todos, [todos]); // Memoize selected state
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Redux Toolkit CRUD</h2>

      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => { if (text) dispatch(addItem(text)); setText(""); }}>Add</button>

      <ul>
        {memoizedTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text} 
            <button onClick={() => dispatch(deleteItem(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default App;
