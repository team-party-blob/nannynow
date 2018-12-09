import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Login extends PureComponent {

  static propTypes = {
    loginType: PropTypes.string.isRequired,
    updateLoginType: PropTypes.func.isRequired
  };

  state = {
    email: '',
    password: '',
    userType: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleUserTypeChange = ({ target }) => {
    this.setState({ userType: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.onSubmit({ email, password });
  };

  render() {
    const { email, password, userType } = this.state;
    const { loginType, updateLoginType } = this.props;

    const nannyOrFamilyInput = () => {
      return (
        <div id='userType'>
          <label>Are You a Nanny or a Family?</label>
          <select name={userType} onChange={this.handleUserTypeChange}>
            <option value=''>Select</option>
            <option name={userType} key='nanny' value='nanny'>
              Nanny
            </option>
            <option name={userType} key='family' value='family'>
              Family
            </option>
          </select>
        </div>
      );
    };
    const alreadyUser = () => {
      return (
        <div>
          <h3>Already Have an Account?</h3>
          <button onClick={updateLoginType}>Click Here to Sign In</button>
        </div>
      );
    };

    const newUser = () => {
      return (
        <div>
          <h3>New to Nanny Now?</h3>
          <button>Click Here to Sign Up</button>
        </div>
      );
    };

    return (
      <div>
        <h1>Welcome to Nanny Now!</h1>
        <form>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          {loginType === 'Sign Up' && nannyOrFamilyInput()}
          <button>{loginType}</button>
        </form>
        {loginType === 'Sign Up' && alreadyUser()}
        {loginType === 'Sign In' && newUser()}
      </div>
    );
  }
}
