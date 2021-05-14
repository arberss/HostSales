import React from 'react';

import { BsArrowRight } from 'react-icons/bs';
import { AiOutlinePlayCircle } from 'react-icons/ai';

// import photo1 from '../../../assets/img/Landing/photo1.webp';
import photo1 from '../../../assets/img/Landing/photo1.png';

import img1 from '../../../assets/img/Landing/img1.png';
import img2 from '../../../assets/img/Landing/img1.2.png';
import img3 from '../../../assets/img/Landing/img1.3.png';
import img4 from '../../../assets/img/Landing/img1.4.png';

function LandingSec1() {
  return (
    <div className='landingSec1'>
      <div className='container-middle'>
        <div className='landingSec1__content'>
          <div className='landingSec1__left'>
            <div className='landingSec1__title'>
              Build lasting relationship with your customers
            </div>
            <div className='landingSec1__text'>
              All your work in one place with HostCustomer. Get more leads,
              engage your customers and stay connected.
            </div>
            <div className='landingSec1__buttons'>
              <button className='button-primary-hover landingSec1__btn landingSec1__btn--1'>
                Get Started
                <BsArrowRight className='landingSec1__icon1-left' />
              </button>
              <button className='button-unstyled landingSec1__btn landingSec1__btn--2'>
                <AiOutlinePlayCircle className='landingSec1__icon2-left' />
                Watch Demo
              </button>
            </div>
          </div>
          <div className='landingSec1__right'>
            <div className='landingSec1__right-content'>
              <img src={img1} className='landingSec1__right-img' alt='' />
              <img
                src={img2}
                className='landingSec1__right-img2 landingSec1__right-img2--1'
                alt=''
              />
              <img
                src={img3}
                className='landingSec1__right-img2 landingSec1__right-img2--2'
                alt=''
              />
              <img
                src={img4}
                className='landingSec1__right-img2 landingSec1__right-img2--3'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingSec1;
