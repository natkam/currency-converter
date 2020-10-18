import React from 'react';

function Button(props) {
  return (
    <button type={props.type}>{props.children}</button>
  );
  // props.children can also be components
}
Button.defaultProps = {
  type: 'button',
}

export default Button;
