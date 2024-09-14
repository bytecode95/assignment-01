import React, { useState } from 'react';
import RegisterForm from '../../components/forms/RegisterForm';
import LoginForm from '../../components/forms/LoginForm';


const AuthPage: React.FC = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegisterMode ? 'Register' : 'Login'}
        </h2>
        {isRegisterMode ? <RegisterForm /> : <LoginForm />}

        <p className="mt-4 text-center">
          {isRegisterMode ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setIsRegisterMode(!isRegisterMode)}
          >
            {isRegisterMode ? 'Login' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
