import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './AvailabilityDisplay.css';

export default class AvailabilityDisplay extends PureComponent {
  static propTypes = {
    availability: PropTypes.array,
    removeAvailability: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { _id } = this.props.user;
    // this.props.fetchAvailability(_id);
  }

  handleRemove = id => {
    return () => this.props.removeAvailability(id);
  };

  render() {
    let startTime1 = new Date('2018-12-15T16:00:00.000Z');
    let endTime1 = new Date('2018-12-15T21:00:00.000Z');
    let startTime2 = new Date('2018-12-16T20:00:00.000Z');
    let endTime2 = new Date('2018-12-17T02:00:00.000Z');

    const availabilityTest = [
      {
        availableStartTime: startTime1,
        availableEndTime: endTime1
      },
      {
        availableStartTime: startTime2,
        availableEndTime: endTime2
      }
    ];

    const availabilityList = availabilityTest.map((available, i) => {
      const { _id, availableStartTime, availableEndTime } = available;
      return (
        <div key={i} id={styles.availabilityList}>
          <div><b>Start Time/Date:</b> {availableStartTime.toDateString()}</div>
          <div><b>End Time Date:</b> {availableEndTime.toDateString()}</div>
          <button onClick={this.handleRemove(_id)}>Remove</button>
        </div>
      );
    });
    return (
      <div>
        {/* <div>Available From:</div>
        <div>Available Until:</div> */}
        {availabilityList}
      </div>
    );
  }
}
