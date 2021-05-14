import React, { useState } from 'react';

import { BsEnvelope } from 'react-icons/bs';
import { RiLock2Line } from 'react-icons/ri';
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineCopyright,
  AiOutlineQuestionCircle,
} from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='login account'>
      <div className='container-middle'>
        <div className='login__elipse login__elipse--1'></div>
        <div className='login__elipse login__elipse--2'></div>
        <div className='login__content account__content'>
          <div className='account__title u-text-center'>
            Welcome Back to HostSales
          </div>

          <div className='account__register'>
            Don't have an account?
            <Link to='/signup' className='account__link'>
              Sign Up
            </Link>
          </div>

          <form action='' className='form'>
            <Link to='/' className='login__helpbox button-unstyled'>
              <AiOutlineQuestionCircle className='login__question-icon' />
              <p className='login__help'>Help</p>
            </Link>
            <div className='form__input-content'>
              <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='form__input'
              />
              <BsEnvelope className='form__icon' />
            </div>
            <div className='form__input-content'>
              {!showPassword ? (
                <AiOutlineEyeInvisible
                  className='form__icon form__icon--pass'
                  onClick={() => setShowPassword(true)}
                />
              ) : (
                <AiOutlineEye
                  className='form__icon form__icon--pass'
                  onClick={() => setShowPassword(false)}
                />
              )}
              <input
                type={!showPassword ? 'password' : 'text'}
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
                className='form__input'
              />

              <RiLock2Line className='form__icon' />
            </div>
            <div className='form__account'>
              <div className='form__remember'>
                <input type='checkbox' name='remember' id='remember' />
                <label htmlFor='remember' className='form__label-checkbox'>
                  Remember me
                </label>
              </div>
              <div className='form__pass-forgot'>
                <RiLock2Line className='form__icon-passforgot' />
                <Link to='/' className='account__link'>
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button className='form__button button-primary-hover'>
              Log In
            </button>
            <span className='account__or'>OR</span>
            <button className='account__googlebtn button-primary'>
              <FcGoogle className='account__google-icon' />
              Log In with Google
            </button>

            <div className='account__copyright'>
              Copyright <AiOutlineCopyright /> 2021 HostSales
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
