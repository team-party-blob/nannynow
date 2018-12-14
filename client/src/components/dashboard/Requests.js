import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Request from './Request';

export default class Requests extends PureComponent {
  static propTypes = {
    requests: PropTypes.array.isRequired,
    fetchRequests: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { fetchRequests } = this.props;
    const userId = this.props.match.params.id;
    fetchRequests(userId);
  }

  render() {
    const { requests, user } = this.props;

    const requestComponents = requests.map(request => {
      return <Request key={request._id} request={request} user={user} />;
    });

    return (
      <div>
        <h4>Request List</h4>
        {requestComponents}
      </div>
    );
  }
}
