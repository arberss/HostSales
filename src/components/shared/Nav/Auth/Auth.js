import React from 'react';

import { Link } from 'react-router-dom';

function Auth() {
  return (
    <div className='nav__buttons'>
      <Link to='/login' className='nav__btn'>
        <button className='button-unstyled  nav__btn--login'>Log In</button>
      </Link>
      <Link to='/signup' className='nav__btn'>
        <button className='button-primary-hover nav__btn--signup'>
          Sign Up
        </button>
      </Link>
    </div>
  );
}

export default Auth;
