import { dropCollection } from './db';
import request from 'supertest';
import app from '../../../routes/app';
import User from '../../../models/User';

beforeEach(() => {
  return dropCollection('agencies');
});

beforeEach(() => {
  return dropCollection('users');
});

beforeEach(() => {
  return dropCollection('nannyprofiles');
});

beforeEach(() => {
  return dropCollection('familyprofiles');
});

beforeEach(() => {
  return dropCollection('requestedappointments');
});

beforeEach(() => {
  return dropCollection('appointments');
});

let createdAgencies;
let createdUsers;
let createdNannies;
let createdFamilies;
let createdRequestedAppointments;
let createdAppointments;

let startTime1 = new Date('2018-12-15T16:00:00.000Z');
let endTime1 = new Date('2018-12-15T21:00:00.000Z');
let startTime2 = new Date('2018-12-16T20:00:00.000Z');
let endTime2 = new Date('2018-12-17T02:00:00.000Z');
let startTime3 = new Date('2018-12-10T04:00:00.000Z');
let arrivalTime3 = new Date('2018-12-10T03:55:00.000Z');
let endTime3 = new Date('2018-12-10T08:00:00.000Z');
let departureTime3 = new Date('2018-12-10T08:15:00.000Z');

let birthday1 = new Date('2016-06-06');
let birthday2 = new Date('2013-10-22');
let birthday3 = new Date('2018-01-05');
let birthday4 = new Date('2008-04-13');

const agencies = [
  {
    businessName: 'NWNannies LLC',
    contactName: 'Linda',
    streetAddress1: '3 Monroe Parkway Suite P#129',
    city: 'Lake Oswego',
    state: 'OR',
    zip: '97035',
    phone: '5032455288',
    businessEmail: 'info@nwnannies.net',
    website: 'https://nwnannies.net/',
    hourlyFee: 3.5,
    agencyAlias: 'nwnannies'
  }
];

const users = [
  {
    email: 'family@test.com',
    password: '123',
    role: 'family'
  },
  {
    email: 'family1@test.com',
    password: '123',
    role: 'family'
  },
  {
    email: 'nanny@test.com',
    password: '123',
    role: 'nanny'
  },
  {
    email: 'nanny1@test.com',
    password: '123',
    role: 'nanny'
  },
  {
    email: 'admin@test.com',
    password: '123',
    role: 'admin'
  }
];

const nannies = [
  {
    name: 'Mrs. Doubtfire',
    streetAddress1: '3 Monroe Parkway Suite P#129',
    city: 'Lake Oswego',
    state: 'OR',
    zip: '97035',
    phone: '5105010844',
    description:
      'I am a nanny in disguise to spy on children for my own personal gain',
    age: 42,
    pricePerHour: 8.25,
    createdDate: Date.now()
  },
  {
    name: 'Mary Poppins',
    streetAddress1: '3 Monroe Parkway Suite P#129',
    city: 'Portland',
    state: 'OR',
    zip: '97208',
    phone: '9251112222',
    description:
      'A magic umbrella with drop me at your house early in the morning and your children will be doing chores by 8am',
    age: 42,
    pricePerHour: 5.75,
    createdDate: Date.now()
  }
];

const families = [
  {
    name: 'Von Trap',
    streetAddress1: '201 Eidelweiss Way',
    city: 'Portland',
    state: 'OR',
    zip: '97210',
    phone: '5032222222',
    email: 'vontrap@test.com',
    description: 'Family of singers',
    numOfChildren: 2,
    birthdays: [birthday1, birthday2]
  },
  {
    name: 'MacManus',
    streetAddress1: '10 Old Time St',
    city: 'Portland',
    state: 'OR',
    zip: '97211',
    phone: '503333333',
    email: 'brady@test.com',
    description: 'A very special family',
    numOfChildren: 2,
    birthdays: [birthday3, birthday4]
  }
];

const requestedAppointments = [
  {
    startDateTime: startTime1,
    endDateTime: endTime1,
    birthdays: [birthday1, birthday2],
    appointmentComments: 'Working from home during appointment'
  },
  {
    startDateTime: startTime2,
    endDateTime: endTime2,
    birthdays: [birthday3, birthday4],
    appointmentComments: 'Might be up to one hour late returning'
  },
  {
    startDateTime: startTime3,
    endDateTime: endTime3,
    birthdays: [birthday1, birthday4],
    appointmentComments: 'No sweets'
  }
];

const appointments = [
  {
    arrivalTime: arrivalTime3,
    departureTime: departureTime3,
    agencyFeePerHour: 3.5,
    nannyPricePerHour: 17
  }
];

let adminToken = '';
let nannyToken = '';
let familyToken = '';

const createAgency = agency => {
  return request(app)
    .post('/api/agencies')
    .set('Authorization', `Bearer ${adminToken}`)
    .send(agency)
    .then(res => res.body);
};

const createUser = user => {
  return request(app)
    .post('/api/users/nwnannies/signup')
    .send(user)
    .then(res => res.body);
};

const createNanny = nanny => {
  return request(app)
    .post('/api/nannies')
    .set('Authorization', `Bearer ${nannyToken}`)
    .send(nanny)
    .then(res => res.body);
};

const createFamily = family => {
  return request(app)
    .post('/api/families')
    .set('Authorization', `Bearer ${familyToken}`)
    .send(family)
    .then(res => res.body);
};

const createRequestedAppointment = requestedAppointment => {
  return request(app)
    .post('/api/requests')
    .send(requestedAppointment)
    .then(res => res.body);
};
const createAppointment = appointment => {
  return request(app)
    .post('/api/appointments')
    .send(appointment)
    .then(res => res.body);
};

beforeEach(() => {
  return User.create({
    email: 'usertest@test.com',
    password: '123',
    role: 'admin'
  });
});

beforeEach(() => {
  return request(app)
    .post('/api/users/signin')
    .send({ email: 'usertest@test.com', password: '123' })
    .then(res => (adminToken = res.body.token));
});

beforeEach(() => {
  return request(app)
    .post('/api/users/signin')
    .send({ email: 'nanny@test.com', password: '123' })
    .then(res => (nannyToken = res.body.token));
});

beforeEach(() => {
  return request(app)
    .post('/api/users/signin')
    .send({ email: 'family@test.com', password: '123' })
    .then(res => (familyToken = res.body.token));
});

beforeEach(() => {
  return Promise.all(agencies.map(createAgency)).then(agenciesRes => {
    createdAgencies = agenciesRes;
  });
});

beforeEach(() => {
  users[0].agency = createdAgencies[0]._id;
  users[1].agency = createdAgencies[0]._id;
  users[2].agency = createdAgencies[0]._id;
  users[3].agency = createdAgencies[0]._id;

  return Promise.all(users.map(createUser)).then(usersRes => {
    createdUsers = usersRes;
  });
});

beforeEach(() => {
  nannies[0].agency = createdAgencies[0]._id;
  nannies[1].agency = createdAgencies[0]._id;

  nannies[0].user = createdUsers[1]._id;
  nannies[1].user = createdUsers[2]._id;

  return Promise.all(nannies.map(createNanny)).then(nanniesRes => {
    createdNannies = nanniesRes;
  });
});

beforeEach(() => {
  families[0].agency = createdAgencies[0]._id;
  families[1].agency = createdAgencies[0]._id;

  families[0].user = createdUsers[0]._id;
  families[1].user = createdUsers[1]._id;

  return Promise.all(families.map(createFamily)).then(familiesRes => {
    createdFamilies = familiesRes;
  });
});

beforeEach(() => {
  requestedAppointments[0].agency = createdAgencies[0]._id;
  requestedAppointments[1].agency = createdAgencies[0]._id;
  requestedAppointments[2].agency = createdAgencies[0]._id;

  requestedAppointments[0].family = createdFamilies[0]._id;
  requestedAppointments[1].family = createdFamilies[1]._id;
  requestedAppointments[2].family = createdFamilies[0]._id;

  requestedAppointments[0].requestedNannies = [
    createdNannies[0]._id,
    createdNannies[1]._id
  ];

  requestedAppointments[1].requestedNannies = [
    createdNannies[0]._id,
    createdNannies[1]._id
  ];

  requestedAppointments[2].requestedNannies = [
    createdNannies[0]._id,
    createdNannies[1]._id
  ];

  return Promise.all(
    requestedAppointments.map(createRequestedAppointment)
  ).then(requestedAppointmentsRes => {
    createdRequestedAppointments = requestedAppointmentsRes;
  });
});

beforeEach(() => {
  appointments[0].agency = createdAgencies[0]._id;

  appointments[0].family = createdFamilies[0]._id;

  appointments[0].nanny = createdNannies[0]._id;
  appointments[0].request = createdRequestedAppointments[1]._id;
  return Promise.all(appointments.map(createAppointment)).then(
    appointmentsRes => {
      createdAppointments = appointmentsRes;
    }
  );
});

export const getAdminToken = () => adminToken;
export const getAgencies = () => createdAgencies;
export const agenciesSeedData = () => agencies;

export const getUsers = () => createdUsers;
export const usersSeedData = () => users;

export const getNannyToken = () => nannyToken;
export const getNannies = () => createdNannies;
export const nanniesSeedData = () => nannies;

export const getFamilyToken = () => familyToken;
export const getFamilies = () => createdFamilies;
export const familiesSeedData = () => families;

export const getRequestedAppointments = () => createdRequestedAppointments;
export const requestedAppointmentsSeedData = () => requestedAppointments;

export const getAppointments = () => createdAppointments;
export const appointmentsSeedData = () => appointments;
