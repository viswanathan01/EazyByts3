import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className="flex min-h-screen  justify-center items-center pt-25 pb-16 ">
      <SignIn />
    </div>
  );
};

export default Login;
