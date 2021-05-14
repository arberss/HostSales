import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/img/Nav/logo.svg';

function Logo() {
  return (
    <Link to='/' className='nav__logo-link'>
      <div className='nav__logo-content'>
        <img src={logo} className='nav__logo' alt='' />
        <div className='nav__logo-title'>HostSales</div>
      </div>
    </Link>
  );
}

export default Logo;
