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
    let iconClass = 'fas fa-times-circle red';
    const regex = /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

    if (this.state.password.length === 0) {
      errMessage = 'A password is required';
    } else if (this.state.password.length < 8) {
      errMessage = 'Your password is too short';
    } else if (!this.state.password.match(regex)) {
      errMessage = 'Password must contain a number, capital letter, and special character.';
    } else {
      errMessage = '';
      iconClass = 'fas fa-check-circle green';
    }

    return (
    <form>
      <label>
        <p>Password</p>
          <input type='password' name="password" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}" value={this.state.password} onChange={this.handleChange}></input>
      </label>
        <i className={iconClass}></i>
        <p className="no-password">{errMessage}</p>
    </form>
    );
  }
}

export default (ValidatedInput);
