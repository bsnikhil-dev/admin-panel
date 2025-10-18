import DynamicForm from "../../components/Form/DynamicForm";
import type { FormField } from "../../types";

const LoginPage = () => {
  const loginFields: FormField[] = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  return (
    <div className="text-black">
      <h1>Login Page</h1>
      <DynamicForm formControls={loginFields} />
    </div>
  );
};

export default LoginPage;
