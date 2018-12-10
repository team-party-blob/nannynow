import { dropCollection } from './db';
import request from 'supertest';
import app from '../../../routes/app';

beforeEach(() => {
  return dropCollection('agencies');
});

beforeEach(() => {
  return dropCollection('users');
});

let createdAgencies;
let createdUsers;

const agencies = [
  {
    businessName: 'NWNannies LLC',
    contactName: 'Linda',
    streetAddress1: '3 Monroe Parkway Suite P#129',
    city: 'Lake Oswego',
    state: 'OR',
    zip: 97035,
    phone: 5032455288,
    businessEmail: 'info@nwnannies.net',
    website: 'https://nwnannies.net/',
    hourlyFee: 3.50
  }
];

const users = [
  {
    email: 'family@test.com',
    password: '123',
    role: 'family'
  },
  {
    email: 'nanny@test.com',
    password: '123',
    role: 'nanny'
  },
  {
    email: 'admin@test.com',
    password: '123',
    role: 'admin'
  }
];

const createAgency = agency => {
  return request(app)
    .post('/api/agencies')
    .send(agency)
    .then(res => res.body);
};

const createUser = user => {
  return request(app)
    .post('/api/users')
    .send(user)
    .then(res => res.body);
};

beforeEach(() => {
  return Promise.all(agencies.map(createAgency)).then(agenciesRes => {
    createdAgencies = agenciesRes;
  });
});

beforeEach(() => {
  users[0].agency = createdAgencies[0]._id;
  users[1].agency = createdAgencies[0]._id;
  users[2].agency = createdAgencies[0]._id;

  return Promise.all(users.map(createUser)).then(usersRes => {
    createdUsers = usersRes;
  });
});

const getAgencies = () => createdAgencies;
const agenciesSeedData = () => agencies;

const getUsers = () => createdUsers;
const usersSeedData = () => users;

module.exports = {
  getAgencies,
  getUsers,
  agenciesSeedData,
  usersSeedData
};
