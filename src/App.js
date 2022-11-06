import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoData from "./data/TodoData";
import TodoStats from "./components/TodoStats";
import TodoForm from "./components/TodoForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState(TodoData);

  //setTodos(todos.sort((a, b) => a.id - b.id))
  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();
    console.log(newTodo);
    setTodos([newTodo, ...todos]);
  };

  //To update state
  const toggleDone = (item) => {
    const newState = todos.map((todo) => {
      //if id matches, update done property to the opposite
      if (todo.id === item.id) {
        return { ...todo, done: !item.done };
      }

      //Otherwise return object as it is
      return todo;
    });
    //To rearrange the order
    newState.sort((a, b) => a.done - b.done);
    setTodos(newState);
  };

  return (
    <>
      <Header />
      <div className="container">
        <TodoForm handleAdd={addTodo} />
        <TodoStats todos={todos} />
        <TodoList
          todos={todos}
          handleDelete={deleteTodo}
          handleCheck={toggleDone}
        />
      </div>
    </>
  );
}

export default App;
