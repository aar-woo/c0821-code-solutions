#!/bin/sh
npm init -y
npm i react react-dom
npm i --save-dev webpack webpack-cli babel-loader @babel/core @babel/plugin-transform-react-jsx

touch webpack.config.js
echo $"module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx'
            ]
          }
        }
      }
    ]
  }
};
" > webpack.config.js

mkdir src dist

cd src
touch app.jsx index.jsx

echo $"import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'

React.DOM.render(
  <App />,
  document.querySelector('#root')
);" > index.jsx

echo $"import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
}" > app.jsx

cd ..

cd dist
touch index.html styles.css
echo $'<!DOCTYPE html>
<html>
<head>
  <title>App</title>
  <link rel="stylesheet" src="./styles.css" />
</head>
<body>
  <div id="root"></div>
  <script src="main.js"></script>
</body>
</html>' > index.html
