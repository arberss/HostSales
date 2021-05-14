import React from 'react';
import AuthSignup from '../../components/pages/Auth/AuthSignup';
import Nav from '../../components/shared/Nav/Nav';

function Signup() {
  return (
    <main>
      <Nav isWhite />
      <AuthSignup />
    </main>
  );
}

export default Signup;
