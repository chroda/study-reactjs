import React from 'react';

export function childrenWithProps(children, props){
  return React.Children.map(props.children, child => React.cloneElement(child, {...props}));
}
