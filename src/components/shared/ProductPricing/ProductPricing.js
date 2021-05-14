import React from 'react';
import { Link } from 'react-router-dom';

import { cardData } from './data';

function ProductPricing() {
  return (
    <section className='productPricing'>
      <div className='container-middle-small'>
        <div className='productPricing__content'>
          <div className='productPricing__top'>
            <div className='productPricing__top-title'>
              HostSales Product Pricing
            </div>
            <div className='productPricing__top-text'>
              Find out more about all our editions and pricing below. Learn more
              for each solution.
            </div>
          </div>
          <div className='productPricing__cards'>
            {cardData &&
              cardData.map((item, i) => {
                const { icon, title, text, to } = item;

                return (
                  <div className='productPricing__card' key={i}>
                    <div className='productPricing__iconbody'>{icon}</div>
                    <div className='productPricing__title'>{title}</div>
                    <div className='productPricing__text'>{text}</div>
                    <Link to={to}>
                      <button className='productPricing__button button-unstyled'>
                        Learn More
                      </button>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPricing;
