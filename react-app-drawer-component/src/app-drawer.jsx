import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let drawerClass;
    let shadeClass;
    let shadeOnClick;
    if (this.state.menuOpen) {
      drawerClass = 'app-drawer show-menu';
      shadeClass = 'overlay';
      shadeOnClick = this.handleClick;
    } else {
      drawerClass = 'app-drawer hide-menu';
      shadeClass = 'overlay hide-shade';
    }
    return (
        <div>
          <div className={shadeClass} onClick={shadeOnClick}>
          </div>
          <i className="fas fa-bars fa-2x" onClick={this.handleClick}></i>
          <div className={ drawerClass}>
            <h1>Menu</h1>
            <ul onClick={this.handleClick}>
              <li>About</li>
              <li>Get Started</li>
              <li>Sign In</li>
            </ul>
          </div>
        </div>
    );
  }

  handleClick(event) {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

}

export default AppDrawer;
