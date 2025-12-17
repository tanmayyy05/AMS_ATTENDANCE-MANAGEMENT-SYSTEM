import FormWrapper from "../../components/common/FormWrapper";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const Login = () => {
  return (
    <FormWrapper title="Login">
      <form>
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <Button type="button">
          Login
        </Button>
      </form>
    </FormWrapper>
  );
};

export default Login;
