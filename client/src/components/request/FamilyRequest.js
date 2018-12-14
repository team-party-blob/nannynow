import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import FilteredNannies from './FilteredNannies';
import Range from '../dashboard/Range';
import styles from './FamilyRequest.css';

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
    const { requestedNannies } = this.state;
    if(requestedNannies.filter(e => e.nanny === target.value).length > 0)  {
      const index = Object.values(requestedNannies.indexOf(target.value));
      return console.log(index);
    }
    // const nannyAlreadyChecked = (requestedNannies.filter(e => e.nanny === target.value).length > 0);
    const newRequestedNannies = this.state.requestedNannies.concat({ nanny: target.value });
    // const removeNanny = requestedNannies.indexOf()
    this.setState({ requestedNannies: newRequestedNannies });
  };

  handleFinalRequest = event => {
    event.preventDefault();
    const { _id, agency } = this.props.user;
    const { searchQuery, requestedNannies } = this.state;

    this.props.createRequest(_id, agency, searchQuery, requestedNannies);
  };

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
        <div key={i} id={styles.addChild}>
          <input id={styles.checkBox}type='checkbox' value={selectedChildren} />

          <label>Child #{i + 1} (born {slicedBirthday})</label>
        </div>
      );
    });
    return (
      <div id={styles.requestBody}>
        <h1>Request an Appointment</h1>
        <div>
          <form onSubmit={this.handleUpdateSearchTerm}>
            <Range
              onStartChange={this.handleStartChange}
              onEndChange={this.handleEndChange}
              start={startDateTime}
              end={endDateTime}
            />
            <h3 htmlFor='birthdays'>Children Needing Care:</h3>
            {childBirthdays}
            <label htmlFor='comments'>Appointment Comments:</label>
            <textarea
              type='text'
              name='comments'
              value={appointmentComments}
              onChange={this.handleChange}
            />
            <button type='submit'>Get List of Availabilities</button>
          </form>
          <FilteredNannies
            filteredNannies={filteredNannies}
            searchQuery={searchQuery}
            handleUpdateRequestedNannies={this.handleUpdateRequestedNannies}
          />
          {filteredNannies && <button type="button" onClick={this.handleFinalRequest}>Request Nannies Now!</button>}
        </div>
      </div>
    );
  }
}
