import React from 'react';

import { NavLink as Link } from 'react-router-dom';

import { linksData } from './data';

import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiOutlineCopyright,
} from 'react-icons/ai';

import { BiEnvelope } from 'react-icons/bi';

import { BsArrowRight } from 'react-icons/bs';
import SelectLanguage from '../SelectLanguage/SelectLanguage';

function Footer(props) {
  return (
    <div className='footer'>
      <div className='container-middle'>
        <div className='footer__top'>
          <div className='footer__top-left'>
            <div className='footer__title'>
              <div className='footer__top-title'>
                Start growing today with HostSales
              </div>
              <div className='footer__text'>
                30-day free trial. Check which plan suits you the best.
              </div>
            </div>
          </div>
          <button className='footer__top-btn button-primary-hover'>
            Get Started <BsArrowRight className='footer__btn-arrow' />
          </button>
        </div>

        <div className='footer__middle'>
          <div className='footer__links'>
            {linksData &&
              linksData.map((item) => {
                const { title, links } = item;
                return (
                  <div className='link' key={title}>
                    <div className='link__title'>{title}</div>
                    <ul className='link__list'>
                      {links.map((link) => {
                        const { to, name } = link;
                        return (
                          <li key={name}>
                            <Link to={to}>{name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>

        <div className='footer__bottom'>
          <div className='info'>
            <ul className='footer__social'>
              <li>
                <a
                  href='https://www.facebook.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a
                  href='https://www.twitter.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiFillTwitterSquare />
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiOutlineInstagram />
                </a>
              </li>
            </ul>

            <div className='info__text'>
              <AiOutlineCopyright className='footer__icon' />
              {new Date().getFullYear()} HostSales
            </div>
          </div>

          <div className='info__privacy'>
            <Link to='/'>Privacy</Link>

            <span className='info__privacy--line'>|</span>
            <Link to='/'>
              <span className='info__privacy--term'>Terms</span>
            </Link>
          </div>

          <div className='info'>
            <div className='info__text info__text--right'>
              <BiEnvelope className='footer__icon' />
              support@hostsales.com
            </div>

            <SelectLanguage
              setLanguage={props.setLanguage}
              language={props.language}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
