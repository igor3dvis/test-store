import React from "react";
//import "./Modal.css";

class Button extends React.Component {
  render() {
    const { text, backColor, handler } = this.props;
    return (
      <>
        <button style={{ backgroundColor: { backColor } }} onClick={handler}>
          {text}
        </button>
      </>
    );
  }
}
export default Button;
