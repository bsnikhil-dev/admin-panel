import { useState } from 'react';
import DynamicForm from '../../components/Form/DynamicForm';
import type { FormField } from '../../types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { registerThunk } from '../../features/auth';

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const registerFields: FormField[] = [
    {
      name: 'username',
      label: 'User Name',
      type: 'text',
      placeholder: 'Enter User Name',
    },
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
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setRegisterFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerThunk(registerFormValues));
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
