import React from 'react';

// function Button({ label, color }) {
function Button(props) {
  return (
    // <button style={{backgroundColor: color}}>{label}</button>
    <button type={props.type}>{props.children}</button>
  );
  // children can be components too
}
Button.defaultProps = {
  label: 'Enter a label for the button',
  type: 'submit',
}

export default Button;
