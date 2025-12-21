import { PrismaClient } from "@prisma/client";
import { hashPassword, comparePassword } from "../utils/password.util";
import { generateToken } from "../utils/jwt.util";

const prisma = new PrismaClient();

// REGISTER USER
export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const hashedPassword = await hashPassword(password);

  return prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      roleId: 2, // EMPLOYEE
    },
  });
};

// LOGIN USER
export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isValid = await comparePassword(password, user.password);
  if (!isValid) {
    throw new Error("Invalid password");
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
    roleId: user.roleId,
  });

  return { user, token };
};
