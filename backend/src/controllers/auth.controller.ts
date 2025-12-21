import { Request, Response } from "express";
import { loginUser, registerUser } from "../services/auth.service";

// REGISTER CONTROLLER
export const register = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;

  const user = await registerUser(name, email, password);

  res.status(201).json({
    message: "User registered successfully",
    user,
  });
};

// LOGIN CONTROLLER
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  const result = await loginUser(email, password);

  res.status(200).json({
    message: "Login successful",
    ...result,
  });
};
