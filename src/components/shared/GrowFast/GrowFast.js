import React from 'react';

import { BsArrowRight } from 'react-icons/bs';

import rocket from '../../../assets/img/Landing/rocket.png';

function GrowFast() {
  return (
    <div className='growFast'>
      <div className='container-middle'>
        <div className='growFast__content'>
          <div className='growFast__left'>
            <img src={rocket} alt='' className='growFast__img' />
          </div>
          <div className='growFast__right'>
            <div className='growFast__title'>
              Grow faster and lasting relationship with your customers
            </div>
            <div className='growFast__text'>
              30-day free trial. No credit card required.
            </div>
            <div className='growFast__buttons'>
              <button className='growFast__btn button-primary-hover'>
                Get Started <BsArrowRight className='growFast__arrow' />
              </button>
              <button className='growFast__btn growFast__btn--2 button-primary-hover'>
                See plan and pricing
                <BsArrowRight className='growFast__arrow' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrowFast;
