import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const urls = [
  '../images/001.png',
  '../images/004.png',
  '../images/007.png',
  '../images/025.png',
  '../images/039.png'
];

ReactDOM.render(<Carousel url={ urls[this.state.urlIndex]} />, document.querySelector('#root'));
// render url = { urls[this.state.urlIndex] }
// or
// render url = { `../images/{this.state.urlIndex}` }
