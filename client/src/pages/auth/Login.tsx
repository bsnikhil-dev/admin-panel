import { useState } from "react";
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

  const [loginFormValues, setLoginFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setLoginFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginFormValues);
  };

  return (
    <div className="text-black">
      <h1>Login Page</h1>
      <DynamicForm
        formControls={loginFields}
        formData={loginFormValues}
        onChange={handleChange}
        onSubmit={handleSubmit}
        buttonText="Login"
      />
    </div>
  );
};

export default LoginPage;
