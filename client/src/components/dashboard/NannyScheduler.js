import React, { PureComponent } from 'react';
import DatePicker from 'react-datepicker';


export default class NannyScheduler extends PureComponent {

  state = {
    startTime: '',
    startDate: '',
    endTime: '',
    endDate: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { startTime, startDate, endTime, endDate } = this.state;
    const startDateTime = startDate + startTime;
    console.log(startDateTime);
  }


  render() {
    // const tomorrow = new Date();
    // tomorrow.setDate(tomorrow.getDate() + 0);
    // console.log(tomorrow)

    // const weekBefore = [
    //   tomorrow,
    //   tomorrow,
    //   tomorrow,
    //   tomorrow,
    //   tomorrow,
    //   tomorrow,
    //   tomorrow
    // ];


    // const weekAfter = weekBefore.map((day, i) => {
    //   day.setDate(day.getDate() + i);
    // });
    // console.log(weekAfter);
    // // console.log(weekAfter);

    const { startDate, startTime, endDate, endTime } = this.state;

    console.log(this.state);

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="startDate" value={startDate} onChange={this.handleChange}/>
          <label htmlFor="startTime">Start Time</label>
          <input type="time" name="startTime" value={startTime} onChange={this.handleChange}/>
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" value={endDate} onChange={this.handleChange}/>
          <label htmlFor="endTime">End Time</label>
          <input type="time" name="endTime" value={endTime} onChange={this.handleChange}/>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}
