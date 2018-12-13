import React, { Fragment, PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

export default class Range extends PureComponent {
  static propTypes = {
    onStartChange: PropTypes.func.isRequired,
    onEndChange: PropTypes.func.isRequired,
    // start: PropTypes.dateFormat
    //start and end proptypes
  };

  render() {

    return (
      <Fragment>
        <div>
          <label>Start Date and Time:</label>
          <DatePicker
            selected={this.props.start}
            onChange={this.props.onStartChange}
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
            selected={this.props.end}
            onChange={this.props.onEndChange}
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
      </Fragment>
    );
  }
}
