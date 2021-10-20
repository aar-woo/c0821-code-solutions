import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      seconds: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFaceClick = this.handleFaceClick.bind(this);
  }

  render() {
    let iconClass = 'fas fa-play';
    if (this.state.playing) {
      iconClass = 'fas fa-pause';
    }
    return (
      <div className="container">
        <div className="circle" onClick={this.handleFaceClick}>
          <h1 className="number">{ this.state.seconds }</h1>
        </div>
        <i className={iconClass} onClick={this.handleClick}></i>
      </div>

    );
  }

  tick() {
    this.setState({
      playing: true,
      seconds: this.state.seconds + 1
    });
  }

  handleClick() {
    if (!this.state.playing) {
      this.tick();
      this.intervalID = setInterval(() => this.tick(), 1000);
    } else {
      this.setState(
        {
          playing: false,
          seconds: this.state.seconds
        }
      );
      clearInterval(this.intervalID);
    }
  }

  handleFaceClick() {
    if (this.state.playing) {
      return;
    }
    this.setState({
      playing: false,
      seconds: 0
    });
  }

}

export default Stopwatch;
