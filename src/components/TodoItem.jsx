import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import React from "react";
import Card from "./shared/Card";

function TodoItem({ item, handleDelete, handleCheck }) {
  return (
    <Card>
      <div className="checkbox-display">
        <input
          type="checkbox"
          onClick={() => handleCheck(item)}
          defaultChecked={item.done}
        />
      </div>
      <FaTimes
        color="purple"
        className="close"
        onClick={() => handleDelete(item.id)}
      />
      <p>{item.text}</p>
    </Card>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
};
export default TodoItem;
