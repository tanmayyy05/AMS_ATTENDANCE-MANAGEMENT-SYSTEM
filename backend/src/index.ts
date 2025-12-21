import express, { Application, Request, Response } from "express";
import authRoutes from "./routes/auth.routes";

// Define the port
const PORT = process.env.PORT || 3000;

// Initialize Express app
const app: Application = express();

// Middleware
app.use(express.json());

// Test route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Attendance System Server is running!",
  });
});
console.log("Registering auth routes...");
app.use("/api/auth", authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Press CTRL+C to stop the server.`);
});
