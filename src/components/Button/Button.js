//window.scrollTo({
//  top: document.documentElement.scrollHeight,
//  behavior: "smooth",
//});
import React from "react";
import PropTypes from "prop-types";
import "../styles.css";

const Button = (handleClick) => {
  console.log(handleClick);
  // console.log(onClick);
  return (
    <button type="button" className="Button" onClick={handleClick}>
      Load more
    </button>
  );
};
Button.defaultProps = {
  handleClick: () => null,
};

Button.propTypes = {
  handleClick: PropTypes.func,
};
export default Button;
