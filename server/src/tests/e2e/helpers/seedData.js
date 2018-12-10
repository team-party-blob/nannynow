import { dropCollection } from './db';
import request from 'supertest';
import app from '../../../routes/app';


beforeEach(() => {
  return dropCollection('agencies');
});

afterAll(() => {
  return dropCollection('users');
});

beforeEach(() => {
  return dropCollection('users');
});

beforeEach(() => {
  return dropCollection('nannies');
});

let createdAgencies;
let createdUsers;
let createdNannies;

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
    address: '1315 Fabricator ln',
    description: 'I am a nanny in disguise to spy on children for my own personal gain',
    age: 42,
    pricePerHour: 8.25,
    createdDate: Date.now()
  },
  {
    name: 'Mary Poppins',
    address: '6558 Umbrella Ave',
    description: 'A magic umbrella with drop me at your house early in the morning and your children will be doing chores by 8am',
    age: 42,
    pricePerHour: 5.75,
    createdDate: Date.now()
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
    .post('/api/users/signup')
    .send(user)
    .then(res => res.body);
};

const createNanny = nanny => {
  return request(app)
    .post('/api/nannies')
    .send(nanny)
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
  users[3].agency = createdAgencies[0]._id;

  return Promise.all(users.map(createUser)).then(usersRes => {
    createdUsers = usersRes;
  });
});

beforeEach(() => {
  nannies[0].agency = createdAgencies[0]._id;
  nannies[1].agency = createdAgencies[0]._id;

  nannies[0].user = users[1]._id;
  nannies[1].user = users[2]._id;


  return Promise.all(nannies.map(createNanny)).then(nanniesRes => {
    createdNannies = nanniesRes;
  });
});

const getAgencies = () => createdAgencies;
const agenciesSeedData = () => agencies;

const getUsers = () => createdUsers;
const usersSeedData = () => users;

const getNannies = () => createdNannies;
const nanniesSeedData = () => users;

module.exports = {
  getAgencies,
  getUsers,
  getNannies,
  agenciesSeedData,
  usersSeedData,
  nanniesSeedData
};
