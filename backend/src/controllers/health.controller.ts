// src/controllers/health.controller.ts
import { Request, Response } from 'express';

export const getHealthStatus = (req: Request, res: Response) => {
    // Calculate uptime in seconds (optional but helpful)
    const uptimeInSeconds = process.uptime();
    const uptime = new Date(uptimeInSeconds * 1000).toISOString().substr(11, 8);

    res.status(200).json({
        status: 'OK',
        message: 'Attendance Management Backend is healthy.',
        timestamp: new Date().toISOString(),
        uptime: uptime,
        environment: process.env.NODE_ENV || 'development'
    });
};