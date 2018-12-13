import React, { PureComponent } from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import Range from './Range';

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

      <form onSubmit={this.handleSubmit}>
        <Range
          onStartChange={this.handleStartChange}
          onEndChange={this.handleEndChange}
          start={start}
          end={end}
        />
        <button>Submit Availability</button>
      </form>
    );
  }
}
