import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const urls = [
  {
    id: 'bulbasaur',
    url: '../images/001.png'
  },
  {
    id: 'charmander',
    url: '../images/004.png'
  },
  {
    id: 'squirtle',
    url: '../images/007.png'
  },
  {
    id: 'pikachu',
    url: '../images/025.png'
  },
  {
    id: 'jigglypuff',
    url: '../images/039.png'
  }
];

ReactDOM.render(<Carousel urls={urls} />, document.querySelector('#root'));
