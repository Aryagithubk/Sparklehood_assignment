import { Request, Response, NextFunction } from 'express';
import { log } from './logger';

export const validateIncident = (req: Request, res: Response, next: NextFunction): void => {
  const { title, description, severity } = req.body;

  log.debug(`Validating incident data: ${JSON.stringify(req.body)}`);

  if (!title || !description || !['Low', 'Medium', 'High'].includes(severity)) {
    log.warn('Validation failed: Invalid data');
    res.status(400).json({ message: 'Invalid data' });
    return;
  }

  log.info('Incident data validated successfully');
  next();
};