import React from "react";
import PropTypes from "prop-types";

function Header({ text, bgColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Todo App",
  bgColor: "rgba(0,0,0,0.4)",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Header;
