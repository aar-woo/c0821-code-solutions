import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topicSelected: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const listItem = event.target.closest('li');
    const dataKey = listItem.getAttribute('data-key');

    if (dataKey === this.state.topicSelected) {
      this.setState({ topicSelected: 'closed' });
      return;
    }
    this.setState({ topicSelected: dataKey });
  }

  render() {
    const topicList = this.props.topics;

    return (
      <ul onClick={this.handleClick}>
        {
          topicList.map(topic => {
            let infoClasses;
            this.state.topicSelected === topic.name ? infoClasses = 'topic-info' : infoClasses = 'topic-info hide';
            return (
              <li key={topic.name} data-key={topic.name}>
                <div className="topic-div">
                  <h3>{topic.name}</h3>
                </div>
                <div className={infoClasses}>
                  <p>{topic.info}</p>
                </div>
              </li>
            );
          }
          )
        }
      </ul>
    );
  }
}

export default Accordion;
