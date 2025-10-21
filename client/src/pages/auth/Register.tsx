import { useState } from 'react';
import DynamicForm from '../../components/Form/DynamicForm';
import type { FormField } from '../../types';
import { useAppSelector } from '../../app/hooks';

const RegisterPage = () => {
  const { isAuthenticated, isLoading, user } = useAppSelector(state => state.authentication);
  console.log(user, isAuthenticated, isLoading);
  const registerFields: FormField[] = [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
    },
  ];
  const [registerFormValues, setRegisterFormValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setRegisterFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerFormValues);
  };
  return (
    <div className="div">
      <h1>Register Page</h1>
      <DynamicForm
        formControls={registerFields}
        formData={registerFormValues}
        onChange={handleChange}
        onSubmit={handleSubmit}
        buttonText="Register"
      />
    </div>
  );
};

export default RegisterPage;
