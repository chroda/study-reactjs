import React from 'react';

export default props => {
  return props.test ? props.children : false;
}
