import { config } from 'dotenv';
import connect from '../../../utils/connect';
import mongoose from 'mongoose';

config();
connect();

afterAll(() => {
  return mongoose.disconnect();
});

module.exports = {
  dropCollection(name) {
    return mongoose.connection.dropCollection(name).catch(err => {
      if(err.codeName !== 'NamespaceNotFound') throw err;
    });
  }
};
