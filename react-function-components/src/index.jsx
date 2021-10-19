import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>Click Me!</button>;
}

const button = <CustomButton />;
const rootDiv = document.querySelector('#root');

ReactDOM.render(button, rootDiv);
