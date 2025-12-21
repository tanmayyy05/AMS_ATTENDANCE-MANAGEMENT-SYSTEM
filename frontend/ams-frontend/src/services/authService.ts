import api from "./api";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  role: "ADMIN" | "MANAGER";
}

// MOCK login (temporary)
export const login = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  // simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // basic mock validation
  if (payload.email === "admin@test.com" && payload.password === "password") {
    return {
      token: "mock-admin-token",
      role: "ADMIN",
    };
  }

  throw new Error("Invalid email or password");
};
