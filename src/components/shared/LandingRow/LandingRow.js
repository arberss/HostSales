import clsx from 'clsx';
import React from 'react';

function LandingRow({ img, title, data, reverse = false }) {
  return (
    <div className='landingRow'>
      <div
        className={clsx(
          'landingRow__content',
          reverse ? 'landingRow__reverse' : null
        )}
      >
        <div className='landingRow__left'>
          <img src={img} alt='' className='landingRow__img' />
        </div>
        <div className='landingRow__right'>
          <div className='landingRow__right-content'>
            <div className='landingRow__title'>{title}</div>
            <div className='landingRow__data'>
              {data &&
                data.map((item, i) => {
                  const { icon, text } = item;

                  return (
                    <div className='landingRow__single' key={i}>
                      <div className='landingRow__icon-body'>{icon}</div>
                      <div className='landingRow__text'>{text}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingRow;
