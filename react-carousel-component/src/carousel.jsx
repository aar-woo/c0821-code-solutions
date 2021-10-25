import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { urlIndex: 0 };
    this.arrowClick = this.arrowClick.bind(this);
    this.dotClick = this.dotClick.bind(this);
  }

  arrowClick(event) {
    let newIndex;
    if (event.target.matches('.fa-chevron-right')) {
      newIndex = this.state.urlIndex + 1;
      if (newIndex === this.props.urls.length) {
        newIndex = 0;
      }
      this.setState({ urlIndex: newIndex });
    } else {
      newIndex = this.state.urlIndex - 1;
      if (newIndex < 0) {
        newIndex = this.props.urls.length - 1;
      }
      this.setState({ urlIndex: newIndex });
    }
    clearInterval(this.timerID);
    this.startInterval();
  }

  dotClick(event) {
    const dotItem = event.target;
    const newIndex = parseInt(dotItem.getAttribute('data-key'));
    this.setState({ urlIndex: newIndex });
    clearInterval(this.timerID);
    this.startInterval();
  }

  startInterval() {
    this.timerID = setInterval(() => {
      let newIndex = this.state.urlIndex + 1;
      if (newIndex === this.props.urls.length) {
        newIndex = 0;
      }
      this.setState({ urlIndex: newIndex });
    }, 3000);
  }

  componentDidMount() {
    this.startInterval();
  }

  render() {
    const urlLinks = this.props.urls;
    return (
      <div className="container">
        <div className="row justify-between">
          <a href="#"><i className="fas fa-chevron-left arrow" onClick={this.arrowClick}></i></a>
          <div className="img-div">
            <img src={urlLinks[this.state.urlIndex].url} />
          </div>
          <a href="#"><i className="fas fa-chevron-right arrow" onClick={this.arrowClick}></i></a>
        </div>
        <div className="row justify-center circles" onClick={this.dotClick}>
          {urlLinks.map(link => {
            let dotClasses;
            if (link.id !== urlLinks[this.state.urlIndex].id) {
              dotClasses = 'far fa-circle';
            } else {
              dotClasses = 'fas fa-circle';
            }
            return (
              <a href="#" key={link.id}><i className={dotClasses} data-key={urlLinks.indexOf(link)}></i></a>
            );
          })
          }
        </div>
      </div>
    );
  }
}
