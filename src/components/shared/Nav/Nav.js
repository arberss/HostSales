import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import HamburgerMenu from '../MobileNav/HamburgerMenu';
import MobileNav from '../MobileNav/MobileNav';
import Auth from './Auth/Auth';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';

function Nav({ isWhite = false }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const nav = document.querySelector('.nav');
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > navHeight ? true : false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        'nav',
        isSticky ? clsx('nav__sticky', (isWhite = false)) : '',
        isWhite ? 'nav__isWhite' : ''
      )}
    >
      <div className='container-middle'>
        <div className='nav__content'>
          <Logo />
          <Menu />
          <MobileNav />
          <Auth />
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
