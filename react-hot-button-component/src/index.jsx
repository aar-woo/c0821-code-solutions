import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let color;
    let textColor;
    if (this.state.clicks >= 3) {
      color = 'dark-purple';
      textColor = 'text-white';
    }
    if (this.state.clicks >= 6) {
      color = 'purple';
    }
    if (this.state.clicks >= 9) {
      color = 'red';
    }
    if (this.state.clicks >= 12) {
      color = 'orange';
      textColor = 'text-black';
    }
    if (this.state.clicks >= 15) {
      color = 'yellow';
    }
    if (this.state.clicks >= 18) {
      color = 'white';
    }
    const classNames = `hot-btn ${color} ${textColor}`;
    return (
      <button className={classNames} onClick={ this.handleClick }>
        Hot Button
      </button>
    );
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }
}

ReactDOM.render(<CustomButton/>, document.querySelector('#root'));
