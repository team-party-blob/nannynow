import React, { PureComponent } from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import Range from './Range';
import styles from './NannyScheduler.css';
import globalStyles from '../../main.css';
import AvailabilityDisplay from './AvailabilityDisplay';

export default class NannyScheduler extends PureComponent {
  static propTypes = {
    updateAvailability: PropTypes.func.isRequired
  };

  state = {
    start: null,
    end: null
  };

  handleStartChange = date => {
    this.setState({ start: date });
  };

  handleEndChange = date => {
    this.setState({ end: date });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { start, end } = this.state;
    const { _id } = this.props.user;
    {start && end && this.props.updateAvailability(start.toISOString(), end.toISOString(), _id);}
  };

  render() {
    const { start, end } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} id={globalStyles.form} className={styles.schedulerForm}>
          <Range
            onStartChange={this.handleStartChange}
            onEndChange={this.handleEndChange}
            start={start}
            end={end}
            id={styles.range}
          />
          <button id={globalStyles.button} className={styles.addAvailButton}>Submit Availability</button>
        </form>
        <AvailabilityDisplay />
      </div>
    );
  }
}
