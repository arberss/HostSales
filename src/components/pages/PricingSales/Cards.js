import React from 'react';

import { cardData } from './data';
import img1 from '../../../assets/img/Pricing/popular.png';

function Cards() {
  return (
    <div className='pricingSales'>
      <div className='container-middle'>
        <div className='pricingSales__content'>
          <div className='productPricing__top'>
            <div className='productPricing__top-title pricingSales__top-title'>
              Sales Pricing
            </div>
            <div className='productPricing__top-text'>
              Sell faster and smarter with any of our fully customizable CRM
              editions.
            </div>
          </div>
          <div className='pricingSales__cards'>
            {cardData.map((item, i) => {
              const { badge, text, price, everything, links, popular } = item;

              return (
                <div className='pricingSales__card' key={i}>
                  <div className='pricingSales__card-badge'>{badge}</div>
                  <div className='pricingSales__card-text'>{text}</div>
                  <div className='pricingSales__card-price'>
                    <span className='pricingSales__currency'>$</span>
                    {price}
                  </div>
                  <div className='pricingSales__card-month'>
                    user/month paid annually
                  </div>
                  <button className='pricingSales__btn button-primary'>
                    Get Now
                  </button>
                  <div className='pricingSales__hr'></div>
                  <div className='pricingSales__card-badgetext'>
                    Everything is <span>{everything}</span> +
                  </div>
                  <div className='pricingSales__card-lists'>
                    {links.map((link, i) => {
                      return (
                        <div className='pricingSales__card-list' key={i}>
                          {link.icon}
                          <div className='pricingSales__card-info'>
                            {link.text}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {popular ? (
                    <img
                      src={img1}
                      className='pricingSales__card-popularimg'
                      alt=''
                    />
                  ) : (
                    ''
                  )}
                  {popular ? (
                    <div className='pricingSales__card-popular'>Popular</div>
                  ) : (
                    ''
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
