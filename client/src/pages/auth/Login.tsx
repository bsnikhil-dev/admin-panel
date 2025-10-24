import { useState } from 'react';
const LoginPage = () => {
  const [loginFormValues, setLoginFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const [authType, setAuthType] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState(false); // 👈 new state for toggling password

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setLoginFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginFormValues);
  };

  return (
    <div className="max-w-md mx-auto border border-gray-200 rounded-2xl shadow-sm my-6 bg-white">
      <h1 className="text-center font-semibold text-2xl mt-5">{authType ? 'Sign Up' : 'Login'}</h1>

      <p className="text-center text-gray-600 text-sm mt-2 mb-4">
        {authType ? 'Already have an account? ' : 'Don’t have an account? '}
        <strong
          className="text-gray-900 cursor-pointer hover:underline"
          onClick={() => setAuthType(prev => !prev)}
        >
          {authType ? 'Login' : 'Sign Up'}
        </strong>
      </p>

      <hr className="border-t border-gray-200 mb-6" />

      <form className="flex flex-col px-6 pb-6" onSubmit={handleSubmit}>
        {authType && (
          <div>
            <label className="my-2 text-sm font-medium text-gray-700">Full Name</label>
            <div className="flex gap-2">
              <input
                name="firstname"
                className="w-1/2 border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#FF385C] focus:outline-none"
                placeholder="First name"
                type="text"
                onChange={handleChange}
              />
              <input
                name="lastname"
                className="w-1/2 border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#FF385C] focus:outline-none"
                placeholder="Last name"
                type="text"
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        <label className="my-2 text-sm font-medium text-gray-700">Email</label>
        <input
          name="email"
          className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-[#FF385C] focus:outline-none"
          placeholder="Email"
          type="email"
          onChange={handleChange}
        />

        <label className="my-2 text-sm font-medium text-gray-700">Password</label>
        <div className="relative">
          <input
            name="password"
            className="w-full border border-gray-300 rounded-lg p-2 pr-10 text-sm focus:ring-2 focus:ring-[#FF385C] focus:outline-none"
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223a10.477 10.477 0 00-1.91 3.777 10.477 10.477 0 0019.86 0 10.47 10.47 0 00-4.5-5.223m-3.51-1.2a10.451 10.451 0 00-3.6 0M3 3l18 18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7a10.477 10.477 0 01-19.084 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        </div>

        <button
          type="submit"
          className="mt-5 w-full bg-[#FF385C] text-white font-semibold py-3 rounded-lg hover:bg-[#E31C5F] transition-all duration-200 cursor-pointer"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
