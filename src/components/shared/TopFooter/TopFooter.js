import React from 'react';

import { ReactComponent as Icon1 } from '../../../assets/img/Landing/icon-check.svg';
import { ReactComponent as Icon2 } from '../../../assets/img/Landing/online-video.svg';
import { ReactComponent as Icon3 } from '../../../assets/img/Landing/icon-shield.svg';

function TopFooter() {
  return (
    <div className='topFooter'>
      <div className='container-middle'>
        <div className='topFooter__content'>
          <div className='topFooter__box'>
            <Icon3 className='topFooter__icon' />
            <div className='topFooter__text'>
              Serious about security & privacy
            </div>
          </div>

          <div className='topFooter__box'>
            <Icon1 className='topFooter__icon' />
            <div className='topFooter__text'>
              99.99% uptime the last 12 months
            </div>
          </div>

          <div className='topFooter__box'>
            <Icon2 className='topFooter__icon' />
            <div className='topFooter__text'>
              On-demand demo & 24-hour support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
