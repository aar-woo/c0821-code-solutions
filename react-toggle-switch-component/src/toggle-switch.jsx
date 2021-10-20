import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let switchContainerClasses = 'switch-container background-green';
    let toggleSwitchClasses;
    if (this.state.toggle) {
      toggleSwitchClasses = 'switch-inner switch-on';
    } else {
      toggleSwitchClasses = 'switch-inner';
      switchContainerClasses = 'switch-container background-grey';
    }
    return (
    <div onClick={this.handleClick} className={ switchContainerClasses }>
      <div className={toggleSwitchClasses}>

      </div>
    </div>
    );
  }

  handleClick() {
    this.setState({ toggle: !this.state.toggle });
  }
}

export default ToggleSwitch;
