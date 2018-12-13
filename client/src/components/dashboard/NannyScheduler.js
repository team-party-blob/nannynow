import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class NannyScheduler extends PureComponent {
  state = {
    startDate: new Date(),
    endDate: new Date()
  };

  handleChange = date => {
    this.setState({ startDate: date });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { startTime, startDate, endTime, endDate } = this.state;
    const startDateTime = startDate + startTime;
    console.log(startDateTime);
  };

  render() {
    const { startDate, endDate} = this.state;
    console.log(this.state);

    return (
      <div>
        <label>Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={this.handleChange}
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={15}
          dateFormat='MMMM d, yyyy h:mm aa'
          timeCaption='time'
        />
        <DatePicker
          selected={startDate}
          onChange={this.handleChange}
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={15}
          dateFormat='MMMM d, yyyy h:mm aa'
          timeCaption='time'
        />
      </div>

      // <form onSubmit={this.handleSubmit}>
      //   <div>
      //     <label htmlFor="startDate">Start Date</label>
      //     <input type="date" name="startDate" value={startDate} onChange={this.handleChange}/>
      //     <label htmlFor="startTime">Start Time</label>
      //     <input type="time" name="startTime" value={startTime} onChange={this.handleChange}/>
      //   </div>
      //   <div>
      //     <label htmlFor="endDate">End Date</label>
      //     <input type="date" name="endDate" value={endDate} onChange={this.handleChange}/>
      //     <label htmlFor="endTime">End Time</label>
      //     <input type="time" name="endTime" value={endTime} onChange={this.handleChange}/>
      //   </div>
      //   <button>Submit</button>
      // </form>
    );
  }
}
