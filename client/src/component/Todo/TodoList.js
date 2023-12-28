import React, { useState, useEffect } from "react";
// import "../css/TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [count, setCount] = useState(0);

  // 할 일이 추가될 때마다 추가할 수 있는 const 생성
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
      setCount(count + 1);
    }
  };

  // 할 일을 삭제할 때마다 삭제할 수 있는 const 생성
  const removeTodo = (index) => {
    const updateTodos = [...todos];
    updateTodos.splice(index, 1);
    setTodos(updateTodos);
    setCount(count - 1);
  };

  useEffect(() => {
    document.title = "TodoList 총 " + `${count}` + "개";
    console.log(`todos가 변경됨: `, todos);
  }, [todos]);

  return (
    <div>
      <h2>Mihye's Todo List</h2>

      <div>
        <input
          id="toDoInput"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>할 일 추가</button>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => removeTodo(index)}>삭제하기</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
