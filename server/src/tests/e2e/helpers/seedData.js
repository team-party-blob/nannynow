import { dropCollection } from './db';
import request from 'supertest';
import app from '../../../routes/app';

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

let createdAgencies;
let createdUsers;
let createdNannies;
let createdFamilies;

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
    description: 'I am a nanny in disguise to spy on children for my own personal gain',
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
    description: 'A magic umbrella with drop me at your house early in the morning and your children will be doing chores by 8am',
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
    birthdays: ['06/19/15', '06/13/13']
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
    .post('/api/users/nwnannies/signup')
    .send(user)
    .then(res => res.body);
};

const createNanny = nanny => {
  return request(app)
    .post('/api/nannies')
    .send(nanny)
    .then(res => res.body);
};

const createFamily = family => {
  return request(app)
    .post('/api/families')
    .send(family)
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

  nannies[0].user = createdUsers[1]._id;
  nannies[1].user = createdUsers[2]._id;

  return Promise.all(nannies.map(createNanny)).then(nanniesRes => {
    createdNannies = nanniesRes;
  });
});

beforeEach(() => {
  families[0].agency = createdAgencies[0]._id;

  families[0].user = createdUsers[0]._id;

  return Promise.all(families.map(createFamily)).then(familiesRes => {
    createdFamilies = familiesRes;
  });
});

export const getAgencies = () => createdAgencies;
export const agenciesSeedData = () => agencies;

export const getUsers = () => createdUsers;
export const usersSeedData = () => users;

export const getNannies = () => createdNannies;
export const nanniesSeedData = () => nannies;

export const getFamilies = () => createdFamilies;
export const familiesSeedData = () => families;
