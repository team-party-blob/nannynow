import React, { Fragment, PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import globalStyles from '../../main.css';
import styles from './Range.css';

export default class Range extends PureComponent {
  static propTypes = {
    onStartChange: PropTypes.func.isRequired,
    onEndChange: PropTypes.func.isRequired,
    start: PropTypes.object.isRequired,
    end: PropTypes.object.isRequired
  };

  render() {
    const { start, end } = this.props;
    return (
      <div id={styles.container}>
        <div id={styles.selectLine}>
          <label id={globalStyles.inputLabel}>Start Availability:</label>
          <DatePicker
            selected={this.props.start}
            onChange={this.props.onStartChange}
            showTimeSelect
            selectsStart
            start={start}
            minDate={new Date()}
            timeFormat='HH:mm'
            timeIntervals={15}
            dateFormat='MMMM d, yyyy h:mm aa'
            timeCaption='time'
            id={globalStyles.input}
            className={styles.dateInput}
          />
        </div>
        <div id={styles.selectLine}>
          <label id={globalStyles.inputLabel}>End Availability:</label>
          <DatePicker
            selected={this.props.end}
            onChange={this.props.onEndChange}
            showTimeSelect
            selectsEnd
            end={end}
            timeFormat='HH:mm'
            timeIntervals={15}
            dateFormat='MMMM d, yyyy h:mm aa'
            timeCaption='time'
            minDate={new Date()}
            id={globalStyles.input}
            className={styles.dateInput}
          />
        </div>
      </div>
    );
  }
}
