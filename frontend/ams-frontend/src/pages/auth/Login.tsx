import { useState } from "react";
import FormWrapper from "../../components/common/FormWrapper";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";


const Login = () => {
  // --------------------
  // State
  // --------------------
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  // --------------------
  // Validation helpers
  // --------------------
  const emailError =
    hasSubmitted && !email ? "Email is required" : undefined;

  const passwordError =
    hasSubmitted && !password
      ? "Password is required"
      : hasSubmitted && password.length < 6
      ? "Password must be at least 6 characters"
      : undefined;

  const isFormInvalid = !!emailError || !!passwordError;

  const isButtonDisabled =
    isFormInvalid || isSubmitting;

  // --------------------
  // Handlers
  // --------------------
  const handleLogin = async () => {
  setHasSubmitted(true);
  setGlobalError(null);

  if (isFormInvalid) return;

  try {
    setIsSubmitting(true);

    const response = await login({
      email,
      password,
    });

    // save token
    localStorage.setItem("token", response.token);

    // redirect based on role (for now only admin)
    navigate("/admin/dashboard");
  } catch (error) {
    setGlobalError("Invalid email or password");
  } finally {
    setIsSubmitting(false);
  }
};


  // --------------------
  // UI
  // --------------------
  return (
    <FormWrapper title="Login">
      <form>
        {globalError && (
          <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-700 border border-red-200">
            {globalError}
          </div>
        )}

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          disabled={isSubmitting}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          disabled={isSubmitting}
        />

        <Button
          type="button"
          disabled={isButtonDisabled}
          onClick={handleLogin}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>
    </FormWrapper>
  );
};

export default Login;
