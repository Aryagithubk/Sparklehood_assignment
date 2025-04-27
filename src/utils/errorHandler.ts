import { Request, Response, NextFunction } from 'express';
import { log } from './logger';

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  log.error(err.stack);
  res.status(500).json({ message: 'Server Error' });
};
