import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes/routes';

export default class Login extends PureComponent {

  static propTypes = {
    loginType: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
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

  changeLoginType = () => {
    const { loginType } = this.props;
    if(loginType === 'Sign Up') this.props.history.push(ROUTES.SIGNIN.linkTo());
    if(loginType === 'Sign In') this.props.history.push(ROUTES.SIGNUP.linkTo());
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, userType } = this.state;
    this.props.onSubmit({ email, password, userType });
  };

  render() {

    const { email, password, userType } = this.state;
    const { loginType } = this.props;

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
          <button onClick={this.changeLoginType}>Click Here to Sign In</button>
        </div>
      );
    };

    const newUser = () => {
      return (
        <div>
          <h3>New to Nanny Now?</h3>
          <button onClick={this.changeLoginType}>Click Here to Sign Up</button>
        </div>
      );
    };

    return (
      <div>
        <h1>Welcome to Nanny Now!</h1>
        <form onSubmit={this.handleSubmit}>
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
