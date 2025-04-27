import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import incidentRoutes from './routes/incidentRoutes';
import { errorHandler } from './utils/errorHandler';
import { log } from './utils/logger';

dotenv.config();

const app = express();

log.info(`Starting server in ${process.env.NODE_ENV || 'development'} mode`);

connectDB();

app.use(express.json());
log.info('Middleware initialized');

const API_PREFIX = '/api/v1';

app.use(`${API_PREFIX}/incidents`, incidentRoutes);
log.info(`Routes initialized with prefix: ${API_PREFIX}`);


app.get(`/health_check`, (req: Request, res: Response) => {
    log.info('Health check endpoint hit');
    res.send("API is running...");
});

app.use(errorHandler);
log.info('Error handler middleware initialized');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => log.info(`Server running on port ${PORT}`));