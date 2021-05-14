import React from 'react';

import { ReactComponent as Icon1 } from '../../../assets/img/Landing/icon-guarantee.svg';

const data = [
  {
    title:
      'Simple, user-friendly and flexible UI with a minimal learning curve',
  },
  {
    title: 'Contracts supported by transparent pricing plans',
  },
  {
    title: 'Integration of CRM with external systems and applications',
  },
  {
    title: 'Easily import data from spreadsheets or any other CRM systems',
  },
  {
    title: 'Video demo and on-going consultation to help you get started',
  },
  {
    title: 'HostCustomer CRM apps for both IOS and Android',
  },
];

function HostSaleBanner() {
  return (
    <div className='hostsaleBanner'>
      <div className='container-middle-small'>
        <div className='hostsaleBanner__content'>
          <div className='hostsaleBanner__title'>Why choose HostSales?</div>
          <div className='hostsaleBanner__cards'>
            {data &&
              data.map((item, i) => {
                return (
                  <div className='hostsaleBanner__card' key={i}>
                    <Icon1 className='hostsaleBanner__icon' />
                    <div className='hostsaleBanner__text'>{item.title}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostSaleBanner;
