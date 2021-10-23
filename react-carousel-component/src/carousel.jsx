import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { urlIndex: '001' }; // need to change to PROPS
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-between">
          <a href="#"><i className="fas fa-chevron-left arrow"></i></a>
          <div className="img-div">
            <img src={`../images/${this.state.urlIndex}.png`} />
          </div>
          <a href="#"><i className="fas fa-chevron-right arrow"></i></a>
        </div>
        <div className="row justify-center circles">
          <a href="#"><i className="fas fa-circle" data-view="first"></i></a>
          <a href="#"><i className="far fa-circle" data-view="second"></i></a>
          <a href="#"><i className="far fa-circle" data-view="third"></i></a>
          <a href="#"><i className="far fa-circle" data-view="fourth"></i></a>
          <a href="#"><i className="far fa-circle" data-view="fifth"></i></a>
        </div>
      </div>
    );
  }
}

// have state be the index in the array of urls
