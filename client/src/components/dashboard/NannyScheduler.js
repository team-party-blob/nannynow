import React, { PureComponent } from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import Range from './Range';
import styles from './NannyScheduler.css';
import globalStyles from '../../main.css';

export default class NannyScheduler extends PureComponent {
  static propTypes = {
    updateAvailability: PropTypes.func.isRequired
  };

  state = {
    start: new Date(),
    end: new Date()
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
    this.props.updateAvailability(start.toLocaleString(), end.toLocaleString(), _id);
  };

  render() {
    const { start, end } = this.state;
    return (

      <form onSubmit={this.handleSubmit} id={globalStyles.form} className={styles.schedulerForm}>
        <Range
          onStartChange={this.handleStartChange}
          onEndChange={this.handleEndChange}
          start={start}
          end={end}
          id={styles.range}
        />
        <button id={globalStyles.button}>Submit Availability</button>
      </form>
    );
  }
}
