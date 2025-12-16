import express, { Application, Request, Response } from 'express';

// Define the port the server will listen on
const PORT = process.env.PORT || 3000;

// Initialize the Express application
const app: Application = express();

// Middleware: CRITICAL for reading JSON data sent to the server
app.use(express.json()); 

// A simple test route (the 'Hello World' of APIs)
app.get('/', (req: Request, res: Response) => {
    // Send a 200 OK status with a JSON message
    res.status(200).send({ 
        message: 'Attendance System Server is running!' 
    });
});

// Start the server and listen for connections
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Press CTRL+C to stop the server.`);
});