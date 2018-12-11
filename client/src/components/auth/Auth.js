import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes/routes';
import styles from './Auth.css';
// import { logo } from '../../assets/imageUrl';

export default class Login extends PureComponent {
  static propTypes = {
    loginType: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    email: '',
    password: '',
    role: '',
    agency: 'nwnannies'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleRoleChange = ({ target }) => {
    this.setState({ role: target.value });
  };

  changeLoginType = () => {
    const { loginType } = this.props;
    if(loginType === 'Sign Up')
      this.props.history.push(ROUTES.SIGNIN.linkTo());
    if(loginType === 'Sign In')
      this.props.history.push(ROUTES.SIGNUP.linkTo());
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, role, agency } = this.state;
    this.props.onSubmit({ email, password, role, agency });
  };

  render() {
    const { email, password, role } = this.state;
    const { loginType } = this.props;

    const nannyOrFamilyInput = () => {
      return (
        <Fragment>
          <label id={styles.role}>Are You a Nanny or a Family?</label>
          <select name={role} onChange={this.handleRoleChange}>
            <option value=''>Select</option>
            <option name={role} key='nanny' value='nanny'>
              Nanny
            </option>
            <option name={role} key='family' value='family'>
              Family
            </option>
          </select>
        </Fragment>
      );
    };
    const alreadyUser = () => {
      return (
        <div id={styles.switchUserType}>
          <h3>Already Have an Account?</h3>
          <button onClick={this.changeLoginType}>Click Here to Sign In</button>
        </div>
      );
    };

    const newUser = () => {
      return (
        <div id={styles.switchUserType}>
          <h3>New to Nanny Now?</h3>
          <button onClick={this.changeLoginType}>Click Here to Sign Up</button>
        </div>
      );
    };

    return (
      <div id={styles.auth}>

        <h1>Nanny Now!</h1>

        <form id={styles.authForm} onSubmit={this.handleSubmit}>
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
