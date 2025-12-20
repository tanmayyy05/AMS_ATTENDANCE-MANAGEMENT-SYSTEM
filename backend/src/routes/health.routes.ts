// src/routes/health.routes.ts
import express from 'express';
import { getHealthStatus } from '../controllers/health.controller';

const router = express.Router();

// Define the GET request for the health check
router.get('/', getHealthStatus);

export default router;