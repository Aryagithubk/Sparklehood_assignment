import { Request, Response, NextFunction } from 'express';
import Incident from '../models/incident';
import { log } from '../utils/logger';

export const getAllIncidents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    log.info('Fetching all incidents');
    const incidents = await Incident.find();
    log.info(`Fetched ${incidents.length} incidents`);
    res.status(200).json(incidents);
  } catch (error) {
    log.error(`Error fetching incidents: ${(error as Error).message}`);
    next(error);
  }
};

export const getIncidentById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    log.info(`Fetching incident with ID: ${id}`);
    const incident = await Incident.findById(id);
    if (!incident) {
      log.warn(`Incident with ID: ${id} not found`);
      res.status(404).json({ message: 'Incident not found' });
      return;
    }
    log.info(`Fetched incident with ID: ${id}`);
    res.status(200).json(incident);
  } catch (error) {
    log.error(`Error fetching incident with ID: ${req.params.id}: ${(error as Error).message}`);
    next(error);
  }
};

export const createIncident = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { title, description, severity } = req.body;
    log.info('Creating a new incident');
    const newIncident = new Incident({ title, description, severity });
    await newIncident.save();
    log.info(`Incident created with ID: ${newIncident.id}`);
    res.status(201).json(newIncident);
  } catch (error) {
    log.error(`Error creating incident: ${(error as Error).message}`);
    next(error);
  }
};

export const deleteIncident = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    log.info(`Deleting incident with ID: ${id}`);
    const incident = await Incident.findByIdAndDelete(id);
    if (!incident) {
      log.warn(`Incident with ID: ${id} not found`);
      res.status(404).json({ message: 'Incident not found' });
      return;
    }
    log.info(`Incident with ID: ${id} deleted successfully`);
    res.status(200).json({ message: 'Incident deleted successfully' });
  } catch (error) {
    log.error(`Error deleting incident with ID: ${req.params.id}: ${(error as Error).message}`);
    next(error);
  }
};