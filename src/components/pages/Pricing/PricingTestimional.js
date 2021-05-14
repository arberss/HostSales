import React from 'react';
import Slider from 'react-slick';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import img1 from '../../../assets/img/Pricing/img1.png';

// slide arrows
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <BsArrowRight className='slide__icon' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <BsArrowLeft className='slide__icon' />
    </div>
  );
}
// slide arrows

function PricingTestimional() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className='pricingTestimional'>
      <div className='container-middle'>
        <div className='pricingTestimional__content'>
          <div className='pricingTestimional__body'>
            <Slider {...settings}>
              <div className='pricingTestimional__slide'>
                <div className='pricingTestimional__left'>
                  <img src={img1} className='pricingTestimional__img' alt='' />
                </div>
                <div className='pricingTestimional__right'>
                  <div className='pricingTestimional__text'>
                    " HostCustomer CRM's artificial intelligence, is extremely
                    impressive. As a CRM manager, I can plug myself in directly
                    to the sales team and make sure they never slip out of
                    deals, with the help of working tips provided by
                    HostCustomer. "
                  </div>
                  <div className='pricingTestimional__name'>Sara Huston</div>
                  <div className='pricingTestimional__job'>
                    Manager at PA Solutions
                  </div>
                </div>
              </div>

              <div className='pricingTestimional__slide'>
                <div className='pricingTestimional__left'>
                  <img src={img1} className='pricingTestimional__img' alt='' />
                </div>
                <div className='pricingTestimional__right'>
                  <div className='pricingTestimional__text'>
                    " HostCustomer CRM's artificial intelligence, is extremely
                    impressive. As a CRM manager, I can plug myself in directly
                    to the sales team and make sure they never slip out of
                    deals, with the help of working tips provided by
                    HostCustomer. "
                  </div>
                  <div className='pricingTestimional__name'>Sara Huston1</div>
                  <div className='pricingTestimional__job'>
                    Manager at PA Solutions
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingTestimional;
