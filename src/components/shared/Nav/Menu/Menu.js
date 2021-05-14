import React from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { NavLink as Link } from 'react-router-dom';
import { menuData } from './menuData';

function Menu() {
  return (
    <ul className='nav__menu'>
      <li className='nav__list'>
        <Link
          to='/products'
          className='nav__anchor'
          activeClassName='nav__activeLink'
        >
          Products
          <MdKeyboardArrowDown className='nav__list--d-arrow' />
        </Link>

        <div className='dropdown dropdown--products'>
          <div className='dropdown__name'>Products</div>
          <div className='dropdown__data'>
            {menuData.products.map((item, i) => {
              const { icon, title, text, link } = item;

              return (
                <Link
                  to={'/features' + link}
                  className='dropdown__link'
                  key={i}
                >
                  <div className='dropdown__icn dropdown__icn--first'>
                    {icon}
                  </div>
                  <div className='dropdown__info'>
                    <div className='dropdown__title'>{title}</div>
                    <div className='dropdown__text'>{text}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </li>
      <li className='nav__list'>
        <Link
          to='/pricing'
          className='nav__anchor'
          activeClassName='nav__activeLink'
        >
          Pricing
        </Link>
      </li>
      <li className='nav__list'>
        <Link
          to='/solutions'
          className='nav__anchor'
          activeClassName='nav__activeLink'
        >
          Solutions
          <MdKeyboardArrowDown className='nav__list--d-arrow' />
        </Link>

        <div className='dropdown dropdown--solutions dropdown-flex'>
          <div className='dropdown-flex__content'>
            <div className='dropdown-flex__data'>
              {menuData.solutions.map((item, i) => {
                const { title, links, blank } = item;
                return (
                  <div className='dropdown-flex__column' key={i}>
                    <div
                      className='dropdown-flex__title'
                      style={
                        blank
                          ? { visibility: 'hidden' }
                          : { visibility: 'visible' }
                      }
                    >
                      {title}
                    </div>
                    <div className='dropdown-flex__links'>
                      {links.map((ln, i) => {
                        const { link, to } = ln;

                        return (
                          <Link to={to} className='dropdown-flex__link' key={i}>
                            {link}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='dropdown-flex__data'>
              {menuData.solutions2.map((item, i) => {
                const { title, links, blank } = item;
                return (
                  <div className='dropdown-flex__column' key={i}>
                    <div
                      className='dropdown-flex__title'
                      style={
                        blank
                          ? { visibility: 'hidden' }
                          : { visibility: 'visible' }
                      }
                    >
                      {title}
                    </div>
                    <div className='dropdown-flex__links'>
                      {links.map((ln, i) => {
                        const { link, to } = ln;

                        return (
                          <Link to={to} className='dropdown-flex__link' key={i}>
                            {link}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </li>
      <li className='nav__list'>
        <Link
          to='/resources'
          className='nav__anchor'
          activeClassName='nav__activeLink'
        >
          Resources
          <MdKeyboardArrowDown className='nav__list--d-arrow' />
        </Link>

        <div className='dropdown dropdown--resources'>
          <div className='dropdown__name'>Resources</div>
          <div className='dropdown__data'>
            {menuData.resources.map((item, i) => {
              const { icon, title, text } = item;

              return (
                <Link to='/' className='dropdown__link' key={i}>
                  <div className='dropdown__icn dropdown__icn--second'>
                    {icon}
                  </div>
                  <div className='dropdown__info'>
                    <div className='dropdown__title'>{title}</div>
                    <div className='dropdown__text'>{text}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </li>
      <li className='nav__list'>
        <Link
          to='/blog'
          className='nav__anchor'
          activeClassName='nav__activeLink'
        >
          Support
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
