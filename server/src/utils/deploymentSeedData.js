import { config } from 'dotenv';
config();

import mongoose from 'mongoose';
import { connect } from '../utils/connect';

import User from '../../../models/User';
import Agency from '../../../models/Agency';
import NannyProfile from '../../../models/NannyProfile';
import FamilyProfile from '../../../models/FamilyProfile';
import RequestedAppointment from '../../../models/RequestedAppointment';
import Appointment from '../../../models/Appointment';
import AvailableTime from '../../../models/AvailableTime';

connect();
seedData();

let birthday1 = new Date('2016-06-06');
let birthday2 = new Date('2013-10-22');
let birthday3 = new Date('2018-01-05');
let birthday4 = new Date('2008-04-13');
// let birthday5 = new Date('2012-06-06');
// let birthday6 = new Date('2011-10-22');
// let birthday7 = new Date('2017-01-05');
// let birthday8 = new Date('2006-04-13');
// let birthday9 = new Date('2005-01-05');

let startTime1 = new Date('2018-12-15T16:00:00.000Z');
let endTime1 = new Date('2018-12-15T21:00:00.000Z');
let startTime2 = new Date('2018-12-16T20:00:00.000Z');
let endTime2 = new Date('2018-12-17T02:00:00.000Z');
let startTime3 = new Date('2018-12-10T04:00:00.000Z');
let arrivalTime3 = new Date('2018-12-10T03:55:00.000Z');
let endTime3 = new Date('2018-12-10T08:00:00.000Z');
let departureTime3 = new Date('2018-12-10T08:15:00.000Z');
let startTime4 = new Date('2018-12-10T02:00:00.000Z');
let endTime4 = new Date('2018-12-17T05:00:00.000Z');
let startTime5 = new Date('2018-12-19T04:00:00.000Z');
let endTime5 = new Date('2018-12-20T02:00:00.000Z');

async function seedData() {

  await mongoose.connection.dropDatabase();

  const agencies = await Agency.create([
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
  ]);
  const users = await User.create([
    {
      email: 'baggins@mail.com',
      password: '123',
      role: 'family',
      agency: agencies[0]._id
    },
    {
      email: 'vontrapps@mail.com',
      password: '123',
      role: 'family',
      agency: agencies[0]._id
    },
    {
      email: 'mrsdoubtfire@mail.com',
      password: '123',
      role: 'nanny',
      agency: agencies[0]._id
    },
    {
      email: 'marypoppins@mail.com',
      password: '123',
      role: 'nanny',
      agency: agencies[0]._id
    },
    {
      email: 'fran@mail.com',
      password: '123',
      role: 'nanny',
      agency: agencies[0]._id
    },
    {
      email: 'charles@mail.com',
      password: '123',
      role: 'nanny',
      agency: agencies[0]._id
    },
    {
      email: 'nana@mail.com',
      password: '123',
      role: 'nanny',
      agency: agencies[0]._id
    },
    {
      email: 'lassie@mail.com',
      password: '123',
      role: 'nanny',
      agency: agencies[0]._id
    },
    {
      email: 'mcphee@mail.com',
      password: '123',
      role: 'nanny',
      agency: agencies[0]._id
    },
    {
      email: 'maria@mail.com',
      password: '123',
      role: 'nanny',
      agency: agencies[0]._id
    },
    {
      email: 'nwnannies@mail.com',
      password: '123',
      role: 'admin',
      agency: agencies[0]._id
    }
  ]);
  const nannies = await NannyProfile.create([
    {
      user: users[2]._id,
      name: 'Mrs. Doubtfire',
      streetAddress1: '3 Monroe Parkway Suite P#129',
      city: 'Lake Oswego',
      state: 'OR',
      zip: '97035',
      phone: '5105010844',
      description:
        'I am a nanny in disguise to spy on children for my own personal gain',
      age: 42,
      pricePerHour: 15,
      createdDate: Date.now(),
      photo:
        'https://thumbs.mic.com/ZGZiODJmMGU5NyMveFJMR0dxQmo0S040QnA2WFJvdjc2eXdZN21vPS81MDB4NjoxNTcweDEwNzYvMjAweDIwMC9maWx0ZXJzOmZvcm1hdChqcGVnKTpxdWFsaXR5KDgwKS9odHRwczovL3MzLmFtYXpvbmF3cy5jb20vcG9saWN5bWljLWltYWdlcy9iM2QzNTQxN2I2YWEzNzdhZjdjMmJhYmJiNGZjMGIxYzNlMWNiZjNiOWRiMjQyOGQ2OGZkOWU4Mzc3N2IxYzNmLmpwZw.jpg'
    },
    {
      user: users[3]._id,
      name: 'Mary Poppins',
      streetAddress1: '0 SW 1st St',
      city: 'Portland',
      state: 'OR',
      zip: '97222',
      phone: '9251112222',
      description:
        'A magic umbrella with drop me at your house early in the morning and your children will be doing chores by 8am',
      age: 30,
      pricePerHour: 17,
      createdDate: Date.now(),
      photo: 'https://openclipart.org/download/307249/1538041396.svg'
    },
    {
      user: users[4]._id,
      name: 'Fran Fine',
      streetAddress1: '10 Fine St',
      city: 'Portland',
      state: 'OR',
      zip: '97207',
      phone: '9249350324',
      description: 'Honest, outgoing, flashy wardrobe',
      age: 39,
      pricePerHour: 15,
      createdDate: Date.now()
    },
    {
      user: users[5]._id,
      name: 'Charles in Charge',
      streetAddress1: '109 Charge St',
      city: 'Portland',
      state: 'OR',
      zip: '97277',
      phone: '5249356234',
      description: 'Warm, funny, and inexperienced',
      age: 19,
      pricePerHour: 15,
      createdDate: Date.now()
    },
    {
      user: users[6]._id,
      name: 'Nana Darling',
      streetAddress1: '34 Pan St',
      city: 'Portland',
      state: 'OR',
      zip: '97371',
      phone: '5039356234',
      description:
        'Attentive, trustworthy, will serve icky medicine tonics at bedtime',
      age: 49,
      pricePerHour: 17,
      createdDate: Date.now()
    },
    {
      user: users[7]._id,
      name: 'Lassie',
      streetAddress1: '888 Collie St',
      city: 'Portland',
      state: 'OR',
      zip: '97001',
      phone: '5036296234',
      description: 'Intelligent, heroic, a bit of a show boat',
      age: 40,
      pricePerHour: 17,
      createdDate: Date.now()
    },
    {
      user: users[8]._id,
      name: 'Nanny McPhee',
      streetAddress1: '888 Mysterious St',
      city: 'Portland',
      state: 'OR',
      zip: '97001',
      phone: '5036296234',
      description: 'Mystical powers, strict disciplinarian',
      age: 60,
      pricePerHour: 16,
      createdDate: Date.now()
    },
    {
      user: users[9]._id,
      name: 'Maria',
      streetAddress1: '999 Music St',
      city: 'Portland',
      state: 'OR',
      zip: '97031',
      phone: '5036296234',
      description:
        'Treats each child as an individual and each family as a singing group',
      age: 24,
      pricePerHour: 17,
      createdDate: Date.now()
    }
  ]);
  const families = await FamilyProfile.create([
    {
      name: 'Von Trap',
      streetAddress1: '201 Eidelweiss Way',
      city: 'Portland',
      state: 'OR',
      zip: '97210',
      phone: '5032222222',
      email: 'vontrap@mail.com',
      user: users[0]._id,
      agency: agencies[0]._id,
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
      email: 'macmanus@mail.com',
      user: users[1]._id,
      agency: agencies[0]._id,
      description: 'A very special family',
      numOfChildren: 2,
      birthdays: [birthday3, birthday4]
    },
  ]);
  const requestedAppointments = await RequestedAppointment.create([
    {
      startDateTime: startTime1,
      endDateTime: endTime1,
      birthdays: [birthday1, birthday2],
      appointmentComments: 'Working from home during appointment',
      family: families[0]._id,
      agency: agencies[0]._id,
      requestedNannies: [
        {
          nanny: nannies[0]._id,
          status: 'no response'
        },
        {
          nanny: nannies[1]._id,
          status: 'no response'
        }
      ]
    },
    {
      startDateTime: startTime2,
      endDateTime: endTime2,
      birthdays: [birthday3, birthday4],
      appointmentComments: 'Might be up to one hour late returning',
      family: families[0]._id,
      agency: agencies[0]._id,
      requestedNannies: [
        {
          nanny: nannies[2]._id,
          status: 'no response'
        },
        {
          nanny: nannies[3]._id,
          status: 'no response'
        }
      ],
      closed: false
    },
    {
      startDateTime: startTime3,
      endDateTime: endTime3,
      birthdays: [birthday1, birthday4],
      appointmentComments: 'No sweets',
      family: families[1]._id,
      agency: agencies[0]._id,
      requestedNannies: [
        {
          nanny: nannies[2]._id,
          status: 'no response'
        },
        {
          nanny: nannies[3]._id,
          status: 'no response'
        }
      ],
      closed: false
    },
    {
      startDateTime: startTime5,
      endDateTime: endTime5,
      birthdays: [birthday2, birthday3],
      appointmentComments: 'n/a',
      family: families[1]._id,
      agency: agencies[0]._id,
      requestedNannies: [
        {
          nanny: nannies[3]._id,
          status: 'no response'
        },
        {
          nanny: nannies[4]._id,
          status: 'no response'
        }
      ],
      closed: false
    }
  ]);
  const appointments = await Appointment.create([
    {
      family: families[0]._id,
      agency: agencies[0]._id,
      nanny: nannies[0]._id,
      request: requestedAppointments[0]._id,
      arrivalTime: arrivalTime3,
      departureTime: departureTime3,
      agencyFeePerHour: 3.5,
      nannyPricePerHour: 13
    },
    {
      family: families[0]._id,
      agency: agencies[0]._id,
      nanny: nannies[0]._id,
      request: requestedAppointments[1]._id,
      arrivalTime: arrivalTime3,
      departureTime: departureTime3,
      agencyFeePerHour: 3.5,
      nannyPricePerHour: 15
    },
    {
      family: families[0]._id,
      agency: agencies[0]._id,
      nanny: nannies[0]._id,
      request: requestedAppointments[2]._id,
      arrivalTime: arrivalTime3,
      departureTime: departureTime3,
      agencyFeePerHour: 3.5,
      nannyPricePerHour: 14
    },
    {
      family: families[1]._id,
      agency: agencies[0]._id,
      nanny: nannies[1]._id,
      request: requestedAppointments[0]._id,
      arrivalTime: arrivalTime3,
      departureTime: departureTime3,
      agencyFeePerHour: 3.5,
      nannyPricePerHour: 12
    },
    {
      family: families[1]._id,
      agency: agencies[0]._id,
      nanny: nannies[1]._id,
      request: requestedAppointments[1]._id,
      arrivalTime: arrivalTime3,
      departureTime: departureTime3,
      agencyFeePerHour: 3.5,
      nannyPricePerHour: 13
    },
    {
      family: families[1]._id,
      agency: agencies[0]._id,
      nanny: nannies[1]._id,
      request: requestedAppointments[2]._id,
      arrivalTime: arrivalTime3,
      departureTime: departureTime3,
      agencyFeePerHour: 3.5,
      nannyPricePerHour: 15
    },
    {
      family: families[1]._id,
      agency: agencies[0]._id,
      nanny: nannies[2]._id,
      request: requestedAppointments[3]._id,
      arrivalTime: arrivalTime3,
      departureTime: departureTime3,
      agencyFeePerHour: 3.5,
      nannyPricePerHour: 14
    },
  ]);
  const availableTimes = await AvailableTime.create([
    {
      availableStartTime: startTime4,
      availableEndTime: endTime4,
      nanny: nannies[0]._id,
    },
    {
      availableStartTime: startTime4,
      availableEndTime: endTime4,
      nanny: nannies[1]._id,

    },
    {
      availableStartTime: startTime1,
      availableEndTime: endTime1,
      nanny: nannies[2]._id,
    },
    {
      availableStartTime: startTime2,
      availableEndTime: endTime2,
      nanny: nannies[3]._id
    }

  ]);
  return await mongoose.disconnect();
}








