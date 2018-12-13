import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import Range from './Range';
// import { updateAvailability } from '../../actions/availability';

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

    this.props.updateAvailability(start.toISOString(), end.toISOString(), _id);
    // {start && end && updateAvailability(start.toISOString(), end.toISOString(), _id);}
  };

  render() {
    const { start, end } = this.state;
    console.log(this.props);
    return (

      <form onSubmit={this.handleSubmit}>
        {/* <Range
          onStartChange={this.handleStartChange}
          onEndChange={this.handleEndChange}
          start={start}
          end={end}
        /> */}
        <div>
          <label>Start Date and Time:</label>
          <DatePicker
            selected={start}
            onChange={this.handleStartChange}
            showTimeSelect
            selectsStart
            start={start}
            // end={end}
            minDate={new Date()}
            timeFormat='HH:mm'
            timeIntervals={15}
            dateFormat='MMMM d, yyyy h:mm aa'
            timeCaption='time'
          />
        </div>
        <div>
          <label>End Date and Time:</label>
          <DatePicker
            selected={end}
            onChange={this.handleEndChange}
            showTimeSelect
            selectsEnd
            // start={start}
            end={end}
            timeFormat='HH:mm'
            timeIntervals={15}
            dateFormat='MMMM d, yyyy h:mm aa'
            timeCaption='time'
            minDate={new Date()}
          />
        </div>
        <button>Submit Availability</button>
      </form>
    );
  }
}
