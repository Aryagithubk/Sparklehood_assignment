// routes.ts
import { Router } from 'express';
import { getAllIncidents, getIncidentById, createIncident, deleteIncident } from '../controllers/incidentController';
import { validateIncident } from '../utils/validateIncident';

const router = Router();

router.get('/', getAllIncidents);
router.get('/:id', getIncidentById);
router.post('/', validateIncident, createIncident);
router.delete('/:id', deleteIncident);

export default router;
