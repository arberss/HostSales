import React, { useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { NavLink as Link } from 'react-router-dom';
import { menuData } from '../Nav/Menu/menuData';
import { ReactComponent as Logo } from '../../../assets/img/Nav/logo.svg';

function MobileNav() {
  useEffect(() => {
    const linkArrows = document.querySelectorAll('.mobileNav__icon');
    const links = document.querySelectorAll('.mobileNav__link--dropdown');

    [...links].forEach((link) => {
      link.addEventListener('click', (e) => {
        const navArrow = link.querySelector('.mobileNav__arrow');
        const dropdownNav = link.querySelector('.mobileNav__dropdown');

        dropdownNav.classList.toggle('mobileNav__show');

        if (
          e.target.parentElement.classList.contains('mobileNav__icon') ||
          e.target.parentElement.classList.contains('mobileNav__arrow') ||
          e.target.classList.contains('mobileNav__icon')
        ) {
          if (dropdownNav.classList.contains('mobileNav__show')) {
            dropdownNav.style.height = dropdownNav.scrollHeight + 'px';
          } else {
            dropdownNav.style.height = 0;
          }

          navArrow.classList.toggle('arrowShow');
        }
      });
    });
  }, []);

  const { products, resources, solutions, solutions2 } = menuData;

  return (
    <>
      <div className='fixedBack'></div>
      <div className='mobileNav'>
        <div className='mobileNav__close'>
          <Logo className='mobileNav__logo' />
          <div className='mobileNav__closebox'>
            <MdKeyboardArrowDown className='mobileNav__closeicn' />
          </div>
        </div>
        <ul className='mobileNav__list'>
          <li className='mobileNav__link mobileNav__link--dropdown'>
            <Link
              to='/features'
              className='mobileNav__al'
              activeClassName='mobileNav__activeLink'
            >
              <span className='mobileNav__linkName'>Products</span>
            </Link>
            <div className='mobileNav__icon'>
              <MdKeyboardArrowDown className='mobileNav__arrow' />
            </div>
            <ul className='mobileNav__dropdown'>
              {products.map((item, i) => {
                return (
                  <li className='mobileNav__dropLink' key={i}>
                    <Link to={'/products' + item.link}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className='mobileNav__link'>
            <Link
              to='/pricing'
              className='mobileNav__al'
              activeClassName='mobileNav__activeLink'
            >
              <span className='mobileNav__linkName'>Pricing</span>
            </Link>
          </li>

          <li className='mobileNav__link'>
            <Link
              to='/pricing'
              className='mobileNav__al'
              activeClassName='mobileNav__activeLink'
            >
              <span className='mobileNav__linkName'>Pricing</span>
            </Link>
          </li>

          <li className='mobileNav__link mobileNav__link--dropdown'>
            <Link
              to='/solutions'
              className='mobileNav__al'
              activeClassName='mobileNav__activeLink'
            >
              <span className='mobileNav__linkName'>Solutions</span>
            </Link>
            <div className='mobileNav__icon'>
              <MdKeyboardArrowDown className='mobileNav__arrow' />
            </div>

            <ul className='mobileNav__dropdown'>
              {solutions.map((item, i) => {
                const { links } = item;
                return links.map((itm) => {
                  return (
                    <li className='mobileNav__dropLink' key={itm.to}>
                      <Link to={'/features' + itm.to}>{itm.link}</Link>
                    </li>
                  );
                });
              })}
              {solutions2.map((item, i) => {
                const { links } = item;
                return links.map((itm) => {
                  return (
                    <li className='mobileNav__dropLink' key={itm.to}>
                      <Link to={'/features' + itm.to}>{itm.link}</Link>
                    </li>
                  );
                });
              })}
            </ul>
          </li>

          <li className='mobileNav__link mobileNav__link--dropdown'>
            <Link
              to='/resources'
              className='mobileNav__al'
              activeClassName='mobileNav__activeLink'
            >
              <span className='mobileNav__linkName'>Resources</span>
            </Link>
            <div className='mobileNav__icon'>
              <MdKeyboardArrowDown className='mobileNav__arrow' />
            </div>

            <ul className='mobileNav__dropdown'>
              {resources.map((item, i) => {
                return (
                  <li className='mobileNav__dropLink' key={i}>
                    <Link to={'/features' + item.link}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className='mobileNav__link'>
            <Link
              to='/support'
              className='mobileNav__al'
              activeClassName='mobileNav__activeLink'
            >
              <span className='mobileNav__linkName'>Support</span>
            </Link>
          </li>
        </ul>

        <div className='mobileNav__buttons'>
          <Link to='/login' className='mobileNav__btn'>
            <button className='button-unstyled  mobileNav__btn--login'>
              Log In
            </button>
          </Link>
          <Link to='/signup' className='mobileNav__btn'>
            <button className='button-primary-hover mobileNav__btn--signup'>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
