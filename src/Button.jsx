import React from "react";
import "./Button.css";

class Button extends React.Component {
  state = {};
  render() {
    return (
      <button
        className="bn3637 bn37"
        onClick={() => {
          this.props.handleClick();
        }}
      >
        SEARCH
      </button>
    );
  }
}

export default Button;
