import React from "react";
import PropTypes from "prop-types";

function TodoStats({ todos }) {
  let completed =
    (todos.filter((todo) => todo.done === true).length / todos.length) * 100;
  completed = Math.ceil(completed);
  return (
    <div className="todo-stats">
      <h4>All Todos: {todos.length}</h4>
      <h4>{isNaN(completed) ? 0 : completed}% Done</h4>
    </div>
  );
}

TodoStats.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoStats;
