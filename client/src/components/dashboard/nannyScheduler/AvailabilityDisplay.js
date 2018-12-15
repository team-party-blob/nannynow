import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './AvailabilityDisplay.css';
import Loading from '../../loading/Loading';
import { getLocalDateTime } from '../../helpers/time';

export default class AvailabilityDisplay extends PureComponent {
  static propTypes = {
    availability: PropTypes.array,
    removeAvailability: PropTypes.func.isRequired,
    getAvailability: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { _id } = this.props.user;
    // add in error guard clause
    if(!this.props.availability) return this.props.getAvailability(_id);
  }

  handleRemove = id => {
    const { _id } = this.props.user;
    return () => this.props.removeAvailability(id)
      .then(this.props.getAvailability(_id));
  };

  render() {

    const { availability } = this.props;
    if(!availability) return <Loading />;
    const availabilityList = availability.map((available, i) => {
      const { _id, availableStartTime, availableEndTime } = available;
      return (
        <div key={i} id={styles.availabilityList}>
          <div><b>Start Time/Date:</b> {getLocalDateTime(availableStartTime)}</div>
          <div><b>End Time Date:</b> {getLocalDateTime(availableEndTime)}</div>
          <button id={styles.removeButton} onClick={this.handleRemove(_id)}>Remove</button>
        </div>
      );
    });
    return (
      <div>
        {availability.length > 0 && <div>Available From:</div>}
        {availability.length > 0 && <div>Available Until:</div>}
        {availabilityList}
      </div>
    );
  }
}
