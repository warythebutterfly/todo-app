import PropTypes from "prop-types";
import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, handleDelete, handleCheck }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No items on your list.</p>
      ) : (
        todos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))
      )}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      done: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  handleCheck: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default TodoList;
