import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function TodoForm({ handleAdd }) {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text !== "") {
      const newTodo = {
        text: text,
        done: false,
      };

      handleAdd(newTodo);
      //reset form after adding
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Add a Todo Item</h2>
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Add a task"
            value={text}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </Card>
  );
}

TodoForm.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};
export default TodoForm;
