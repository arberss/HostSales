import React, { useEffect } from 'react';

function HamburgerMenu() {
  useEffect(() => {
    const hambMenu = document.querySelector('.hamburger');

    const mobileNav = document.querySelector('.mobileNav');
    const overlay = document.querySelector('.fixedBack');
    const closeNav = document.querySelector('.mobileNav__closebox');

    const showMobileMenu = () => {
      hambMenu.classList.add('hambClicked');
      mobileNav.classList.add('navShow');
      overlay.style.display = 'block';
    };

    const hiddeMobileMenu = () => {
      hambMenu.classList.remove('hambClicked');
      mobileNav.classList.remove('navShow');
      overlay.style.display = 'none';
    };

    window.addEventListener('resize', () => {
      const screenWidth = document.body.clientWidth;
      if (screenWidth > 900) {
        hiddeMobileMenu();
      }
    });

    hambMenu.addEventListener('click', (e) => {
      if (hambMenu.classList.contains('hambClicked')) {
        hiddeMobileMenu();
      } else {
        showMobileMenu();
      }
    });

    closeNav.addEventListener('click', () => {
      hiddeMobileMenu();
    });

    overlay.addEventListener('click', () => {
      hiddeMobileMenu();
    });
  }, []);

  return (
    <div className='hamburger'>
      <div className='hamburger__line hamburger__line--one'></div>
      <div className='hamburger__line hamburger__line--two'></div>
      <div className='hamburger__line hamburger__line--three'></div>
    </div>
  );
}

export default HamburgerMenu;
