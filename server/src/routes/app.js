import express from 'express';
import morgan from 'morgan';
import { handler } from '../middleware/error';
import spa from '../middleware/spa';
import agenciesRoutes from './api/agencies';
import usersRoutes from './api/users';
import familiesRoutes from './api/families';
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/agencies', agenciesRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/families', familiesRoutes);

app.use(express.static('../client/dist'));
app.use('*', spa('../client/dist/index.html'));

app.use(handler);

export default app;
