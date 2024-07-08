import express from 'express';
import positionController from './controllers/position.controller';
import applicantController from './controllers/applicant.controller';

const app = express();

app.use(express.json());
app.use('/api', positionController);
app.use('/api', applicantController);

export default app;
