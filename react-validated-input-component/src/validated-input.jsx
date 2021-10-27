import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let errMessage;
    if (this.state.password.length === 0) {
      errMessage = 'A password is required';
    } else if (this.state.password.length < 8) {
      errMessage = 'Your password is too short';
    } else {
      errMessage = '';
    }
    return (
    <form>
      <label>
        <p>Password</p>
        <input type='password' name="password" value={this.state.password} onChange={this.handleChange}></input>
      </label>
        <i className="fas fa-times-circle"></i>
        <p className="no-password">{errMessage}</p>
    </form>
    );
  }
}

export default (ValidatedInput);
