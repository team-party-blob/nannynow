import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { getSession, getSessionLoading } from '../../selectors/session';
import { refreshSession } from '../../actions/session';
import { withRouter } from 'react-router-dom';

export const withSession = Component => {

  class WithSessionComponent extends PureComponent {
    static propTypes = {
      loading: PropTypes.bool.isRequired,
      session: PropTypes.object
    };

    componentDidMount() {
      if(!this.props.session) this.props.refreshSession();
    }

    render() {
      if(this.props.loading) return <h1>LOADING SESSION</h1>;
      if(!this.props.session) {
        return <Redirect to={ROUTES.SIGNIN.linkTo(this.props.location.pathname)} />;
      }

      return <Component {...this.props} />;
    }
  }

  return withRouter(connect(
    state => ({
      session: getSession(state),
      loading: getSessionLoading(state)
    }),
    dispatch => ({ refreshSession: () => dispatch(refreshSession()) })
  )(WithSessionComponent));
};
