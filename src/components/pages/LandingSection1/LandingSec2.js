import React from 'react';

import logo1 from '../../../assets/img/Landing/amazon.png';
import logo2 from '../../../assets/img/Landing/uber.png';
import logo3 from '../../../assets/img/Landing/airbnb.png';
import logo4 from '../../../assets/img/Landing/virgin.png';
import logo5 from '../../../assets/img/Landing/hoststar.png';
import logo6 from '../../../assets/img/Landing/nike-logo-gray.png';

function LandingSec2() {
  return (
    <div className='landingSec2'>
      <div className='container'>
        <div className='landingSec2__title'>Used by big teams</div>
        <div className='landingSec2__content'>
          <img src={logo1} alt='' className='landingSec2__img' />
          <img src={logo2} alt='' className='landingSec2__img' />
          <img src={logo3} alt='' className='landingSec2__img' />
          <img src={logo4} alt='' className='landingSec2__img' />
          <img src={logo5} alt='' className='landingSec2__img' />
          <img src={logo6} alt='' className='landingSec2__img' />
        </div>
      </div>
    </div>
  );
}

export default LandingSec2;
