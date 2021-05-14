import React, { useState } from 'react';

import { ReactComponent as Icon1 } from '../../../assets/img/Auth/icon-user.svg';
import { ReactComponent as Icon2 } from '../../../assets/img/Auth/icon-users.svg';
import { ReactComponent as Icon3 } from '../../../assets/img/Auth/icon-interaction.svg';
import { ReactComponent as Icon4 } from '../../../assets/img/Auth/icon-dashboard.svg';

import logo1 from '../../../assets/img/Landing/amazon.png';
import logo2 from '../../../assets/img/Landing/uber.png';
import logo3 from '../../../assets/img/Landing/airbnb.png';
import logo5 from '../../../assets/img/Landing/hoststar.png';
import logo6 from '../../../assets/img/Landing/nike-logo-gray.png';

import { Link } from 'react-router-dom';
import Select, { components } from 'react-select';

import { BsEnvelope } from 'react-icons/bs';
import { RiLock2Line } from 'react-icons/ri';
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineCopyright,
  AiOutlineEdit,
  AiOutlinePhone,
  AiOutlineUser,
} from 'react-icons/ai';
import { MdBusinessCenter } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { GoLocation } from 'react-icons/go';
import { ImEarth } from 'react-icons/im';

import { countries, languages } from './data';

function AuthSignup() {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [cntrs, setCntrs] = useState([]);
  const [lngs, setLngs] = useState([]);

  const onMenuOpen = () => {
    setTimeout(() => {
      setCntrs(countries);
    }, 1000);
  };

  const onMenuOpen1 = () => {
    setTimeout(() => {
      setLngs(languages);
    }, 1000);
  };

  const onChangeCountry = (selectedValue) => {
    setCountry(selectedValue);
  };

  const onChangeLanguage = (selectedValue) => {
    setLanguage(selectedValue);
  };

  const ValueContainer = ({ children, ...props }) => {
    return (
      components.ValueContainer && (
        <components.ValueContainer {...props}>
          <GoLocation className='select__icn1' />

          {children}
        </components.ValueContainer>
      )
    );
  };

  return (
    <div className='signup account'>
      <div className='container-middle'>
        {/* left */}
        <div className='signup__flex'>
          <div className='signup__left'>
            <div className='signup__left-title'>
              Try HostCustomer for 30 days free trial
            </div>
            <div className='signup__left-text'>
              Stay connected to your customers and convert more leads.
            </div>
            <div className='signup__left-data'>
              <div className='signup__left-box'>
                <div className='signup__left-iconbox'>
                  <Icon1 className='signup__left-icon' />
                </div>
                <p className='signup__left-txt'>
                  Get a complete view of every customer
                </p>
              </div>

              <div className='signup__left-box'>
                <div className='signup__left-iconbox'>
                  <Icon2 className='signup__left-icon' />
                </div>
                <p className='signup__left-txt'>
                  Track contacts and manage pipeline
                </p>
              </div>

              <div className='signup__left-box'>
                <div className='signup__left-iconbox'>
                  <Icon3 className='signup__left-icon' />
                </div>
                <p className='signup__left-txt'>
                  Track every customer interaction emails, calls, meetings, and
                  more
                </p>
              </div>

              <div className='signup__left-box'>
                <div className='signup__left-iconbox'>
                  <Icon4 className='signup__left-icon' />
                </div>
                <p className='signup__left-txt'>
                  Get business insights at a glance with reports and dashboards
                </p>
              </div>
            </div>
            <div className='signup__teams'>
              <div className='signup__teams-title'>Used by big teams:</div>
              <img src={logo1} className='signup__teams-team' alt='' />
              <img src={logo2} className='signup__teams-team' alt='' />
              <img src={logo3} className='signup__teams-team' alt='' />
              <img src={logo5} className='signup__teams-team' alt='' />
              <img src={logo6} className='signup__teams-team' alt='' />
            </div>
          </div>
          {/* left */}

          {/* form */}
          <div className='signup__content account__content'>
            <div className='account__title u-text-center'>
              Sign up now for free trial
            </div>

            <div className='account__register'>
              Already have an account?
              <Link to='/login' className='account__link'>
                Log In
              </Link>
            </div>

            <form action='' className='form'>
              <div className='form__input-content'>
                <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Full Name'
                  className='form__input'
                />
                <AiOutlineUser className='form__icon' />
              </div>

              <div className='form__input-content'>
                <input
                  type='text'
                  name='job'
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  placeholder='Job Title'
                  className='form__input'
                />
                <AiOutlineEdit className='form__icon' />
              </div>

              <div className='form__input-content'>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Work Email'
                  className='form__input'
                />
                <BsEnvelope className='form__icon' />
              </div>

              <div className='form__input-content'>
                <input
                  type='text'
                  name='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='Phone Number'
                  className='form__input'
                />
                <AiOutlinePhone className='form__icon' />
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
                  placeholder='Create Password'
                  className='form__input'
                />

                <RiLock2Line className='form__icon' />
              </div>

              <div className='form__input-content'>
                <input
                  type='text'
                  name='company'
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder='Company'
                  className='form__input'
                />
                <MdBusinessCenter className='form__icon' />
              </div>

              <div className='form__input-content'>
                <Select
                  className='basic-multi-select'
                  classNamePrefix='select'
                  onMenuOpen={onMenuOpen}
                  options={cntrs}
                  components={{
                    ValueContainer,
                  }}
                  placeholder='Select Country'
                  onChange={onChangeCountry}
                />
              </div>

              <div className='form__input-content'>
                <Select
                  className='basic-multi-select'
                  classNamePrefix='select'
                  onMenuOpen={onMenuOpen1}
                  options={lngs}
                  components={{ ValueContainer }}
                  placeholder='Select Language'
                  onChange={onChangeLanguage}
                />
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
                Sign Up
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
          {/* form */}
        </div>
      </div>
    </div>
  );
}

export default AuthSignup;
