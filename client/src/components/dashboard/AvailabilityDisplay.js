import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './AvailabilityDisplay.css';
import Loading from '../loading/Loading';

export default class AvailabilityDisplay extends PureComponent {
  static propTypes = {
    availability: PropTypes.array,
    removeAvailability: PropTypes.func.isRequired,
    getAvailability: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { _id } = this.props.user;
    console.log(this.props);
    // add in error guard clause
    if(!this.props.availability) return this.props.getAvailability(_id);
  }

  handleRemove = id => {
    return () => this.props.removeAvailability(id);
  };

  render() {

    const { availability } = this.props;
    if(!availability) return <Loading />;
    const availabilityList = availability.map((available, i) => {
      const { _id, availableStartTime, availableEndTime } = available;
      return (
        <div key={i} id={styles.availabilityList}>
          <div><b>Start Time/Date:</b> {availableStartTime}</div>
          <div><b>End Time Date:</b> {availableEndTime}</div>
          <button onClick={this.handleRemove(_id)}>Remove</button>
        </div>
      );
    });
    return (
      <div>
        <div>Available From:</div>
        <div>Available Until:</div>
        {availabilityList}
      </div>
    );
  }
}
