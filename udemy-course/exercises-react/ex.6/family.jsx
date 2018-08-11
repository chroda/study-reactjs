import React from 'react';

export default props => (
  <div>
    <h1>Family</h1>
    { React.cloneElement(props.children, {...props}) }
  </div>
);
