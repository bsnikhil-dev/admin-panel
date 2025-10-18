import DynamicForm from "../../components/Form/DynamicForm";
import type { FormField } from "../../types";

const RegisterPage = () => {
  const registerFields: FormField[] = [
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
    <div className="div">
      <h1>Register Page</h1>
      <DynamicForm formControls={registerFields} />
    </div>
  );
};

export default RegisterPage;
