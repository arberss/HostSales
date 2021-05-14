import React from 'react';
import { data } from './data';

import { IoIosTimer } from 'react-icons/io';
import { BsArrowRight } from 'react-icons/bs';

import img1 from '../../../assets/img/Landing/question-img.png';

function Crm() {
  return (
    <div className='crm'>
      <div className='container-middle'>
        <div className='crm__title'>
          A CRM that will transform your business
        </div>
        <div className='crm__content'>
          {data.map((item, i) => {
            return (
              <div className='crm__card' key={i}>
                {item.icon}
                <div className='crm__card-title'>{item.title}</div>
                <div className='crm__card-text'>{item.text}</div>
                <div className='crm__card-bottom'>
                  <button className='crm__card-btn button-unstyled'>
                    <IoIosTimer className='crm__btn-icon crm__btn-icon--1' />
                    Watch Demo
                  </button>
                  <button className='crm__card-btn button-unstyled'>
                    Learn More
                    <BsArrowRight className='crm__btn-icon crm__btn-icon--2' />
                  </button>
                </div>
              </div>
            );
          })}
          <div className='crm__card crm__card2'>
            <div className='crm__card2-title'>
              Didn’t find what you’re looking for?
            </div>
            <button className='crm__card2-btn button-unstyled'>
              See All Products{' '}
              <BsArrowRight className='crm__btn-icon crm__btn-icon--2' />
            </button>
            <img src={img1} alt='' className='crm__card2-img' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crm;
