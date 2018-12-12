import express from 'express';
import morgan from 'morgan';
import { handler } from '../middleware/error';
import spa from '../middleware/spa';
import agenciesRoutes from './api/agencies';
import usersRoutes from './api/users';
import nanniesRoutes from './api/nannies';
import familiesRoutes from './api/families';
import requestedAppointmentRoutes from './api/requests';
import appointmentsRoutes from './api/appointments';
import availabilityRoutes from './api/availability';

const app = express();

app.use(morgan('dev', {
  skip() {
    return process.env.NODE_ENV === 'test';
  }
}));

app.use(express.json());

app.use('/api/agencies', agenciesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/nannies', nanniesRoutes);
app.use('/api/families', familiesRoutes);
app.use('/api/requests', requestedAppointmentRoutes);
app.use('/api/appointments', appointmentsRoutes);
app.use('/api/availability', availabilityRoutes);

app.use(express.static('../client/dist'));
app.use('*', spa('../client/dist/index.html'));

app.use(handler);

export default app;
