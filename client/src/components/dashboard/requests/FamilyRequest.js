import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FilteredNannies from './FilteredNannies';
import Range from '../range/Range';
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
    const newRequestedNannies = requestedNannies.concat({ nanny: target.value });
    this.setState({ requestedNannies: newRequestedNannies });
  };

  handleFinalRequest = event => {
    event.preventDefault();
    const { _id, agency } = this.props.user;
    const { searchQuery } = this.props;
    const { requestedNannies } = this.state;
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
    console.log(appointmentComments);
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
            <h3>Appointment Comments:</h3>
            <textarea
              type='text'
              name='appointmentComments'
              onChange={this.handleChange}
            />
            <br />
            <div id={styles.buttonContainer}>
              <button id={styles.getNannies} type='submit'>Get List of Availabilities</button>
            </div>
          </form>
          <FilteredNannies
            filteredNannies={filteredNannies}
            searchQuery={searchQuery}
            handleUpdateRequestedNannies={this.handleUpdateRequestedNannies}
          />

          <div id={styles.buttonContainer}>
            {filteredNannies.length > 0 && <button id={styles.submitButton} type="button" onClick={this.handleFinalRequest}>Request Nannies Now!</button>}
          </div>
        </div>
      </div>
    );
  }
}
