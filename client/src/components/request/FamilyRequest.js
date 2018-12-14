import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import FilteredNannies from './FilteredNannies';
import Range from '../dashboard/Range';

export default class FamilyRequest extends PureComponent {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    createRequest: PropTypes.func.isRequired,
    filteredNannies: PropTypes.array,
    searchQuery: PropTypes.object.isRequired,
    updateSearchQuery: PropTypes.func.isRequired,
    fetchFilteredNannies: PropTypes.func.isRequired
  };

  state = {
    birthdays: [],
    selectedChildren: [],
    // searchQuery: {},
    closed: false,
    startDateTime: new Date(),
    endDateTime: new Date(),
    appointmentComments: '',
    requestedNannies: []
  };

  componentDidMount() {
    const { profile, searchQuery } = this.props;
    this.setState({ birthdays: profile.birthdays, searchQuery });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleStartChange = date => {
    this.setState({ startDateTime: date });
  };

  handleEndChange = date => {
    this.setState({ endDateTime: date });
  };

  handleUpdateSearchTerm = event => {
    event.preventDefault();
    const {
      birthdays,
      startDateTime,
      endDateTime,
      appointmentComments
    } = this.state;
    const { updateSearchQuery, fetchFilteredNannies } = this.props;
    const query = {
      birthdays,
      startDateTime,
      endDateTime,
      appointmentComments
    };
    updateSearchQuery(query);
    fetchFilteredNannies(
      startDateTime.toISOString(),
      endDateTime.toISOString()
    );
  };

  handleUpdateRequestedNannies = ({ target }) => {
    //Need to deal with unchecking nannies
    let newRequestedNannies = this.state.requestedNannies.concat({ nanny: target.value });
    this.setState({ requestedNannies: newRequestedNannies });
  };

  handleFinalRequest = event => {
    event.preventDefault();
    const { _id, agency } = this.props.user;
    const { searchQuery, requestedNannies } = this.state;

    this.props.createRequest(_id, agency, searchQuery, requestedNannies);
  }

  render() {
    const { filteredNannies, searchQuery } = this.props;
    const {
      birthdays,
      startDateTime,
      endDateTime,
      appointmentComments,
      selectedChildren
    } = this.state;
    const childBirthdays = birthdays.map((birthday, i) => {
      const slicedBirthday = birthday.slice(0, 10);
      return (
        <p key={i}>
          Child #{i + 1} <br />
          <label>{slicedBirthday}</label>
          <input type='checkbox' value={selectedChildren} />
        </p>
      );
    });
    return (
      <Fragment>
        <h1>Request an Appointment</h1>
        <div>
          <form onSubmit={this.handleUpdateSearchTerm}>
            <label htmlFor='birthdays'>Children:</label>
            {childBirthdays}
            <Range
              onStartChange={this.handleStartChange}
              onEndChange={this.handleEndChange}
              start={startDateTime}
              end={endDateTime}
            />
            <label htmlFor='comments'>Appointment Comments:</label>
            <br />
            <textarea
              name='comments'
              value={appointmentComments}
              onChange={this.handleChange}
            />
            <br />
            <button type='submit'>Get List of Availabilities</button>
          </form>
          <FilteredNannies
            filteredNannies={filteredNannies}
            searchQuery={searchQuery}
            handleUpdateRequestedNannies={this.handleUpdateRequestedNannies}
          />
          {filteredNannies && <button type="button" onClick={this.handleFinalRequest}>Request Nannies Now!</button>}
        </div>
      </Fragment>
    );
  }
}
