import React from 'react';

import { BsArrowRight } from 'react-icons/bs';

import drive from '../../../assets/img/Landing/drive.png';
import dropbox from '../../../assets/img/Landing/dropbox.png';
import onedrive from '../../../assets/img/Landing/onedrive.png';
import box from '../../../assets/img/Landing/box.png';

import github from '../../../assets/img/Landing/github.png';
import gitlab from '../../../assets/img/Landing/gitlab.png';
import bitbucket from '../../../assets/img/Landing/bitbucket.png';
import zapier from '../../../assets/img/Landing/zapier.png';

import calendarMonth from '../../../assets/img/Landing/calendar-month.png';
import outlook from '../../../assets/img/Landing/outlook.png';
import calendarDay from '../../../assets/img/Landing/calendar-day.png';

import slack from '../../../assets/img/Landing/slack.png';
import mailchimp from '../../../assets/img/Landing/mailchimp.png';
import shopify from '../../../assets/img/Landing/shopify.png';
import zoom from '../../../assets/img/Landing/zoom.png';

function WebApps() {
  return (
    <div className='webapps'>
      <div className='container-middle'>
        <div className='webapps__content'>
          <div className='webapps__top'>
            <div className='webapps__title'>
              Integrated with apps you use every day
            </div>
            <button className='webapps__btn button-unstyled'>
              Learn More <BsArrowRight className='webapps__arrow' />
            </button>
          </div>

          <div className='webapps__row'>
            <div className='webapps__namebox'>
              <div className='webapps__name'>Cloud Storage</div>
            </div>
            <div className='webapps__apps'>
              <div className='webapps__app'>
                <img src={drive} alt='' className='webapps__img' />
              </div>
              <div className='webapps__app'>
                <img src={dropbox} alt='' className='webapps__img' />
              </div>
              <div className='webapps__app'>
                <img src={onedrive} alt='' className='webapps__img' />
              </div>
              <div className='webapps__app'>
                <img src={box} alt='' className='webapps__img2' />
              </div>
              <div className='webapps__icon-body'>
                <BsArrowRight className='webapps__icon' />
              </div>
            </div>
          </div>

          <div className='webapps__row'>
            <div className='webapps__namebox'>
              <div className='webapps__name'>Developers</div>
            </div>
            <div className='webapps__apps'>
              <div className='webapps__app'>
                <img src={github} alt='' className='webapps__img' />
              </div>
              <div className='webapps__app'>
                <img src={gitlab} alt='' className='webapps__img' />
              </div>
              <div className='webapps__app'>
                <img src={bitbucket} alt='' className='webapps__img' />
              </div>
              <div className='webapps__app'>
                <img src={zapier} alt='' className='webapps__img2' />
              </div>
              <div className='webapps__icon-body'>
                <BsArrowRight className='webapps__icon' />
              </div>
            </div>
          </div>

          <div className='webapps__row'>
            <div className='webapps__namebox'>
              <div className='webapps__name'>Calendar</div>
            </div>
            <div className='webapps__apps'>
              <div className='webapps__app'>
                <img src={outlook} alt='' className='webapps__img2' />
              </div>
              <div className='webapps__app'>
                <img src={calendarDay} alt='' className='webapps__img2' />
              </div>
              <div className='webapps__app'>
                <img src={calendarMonth} alt='' className='webapps__img2' />
              </div>
            </div>
          </div>

          <div className='webapps__row'>
            <div className='webapps__namebox'>
              <div className='webapps__name'>More</div>
            </div>
            <div className='webapps__apps'>
              <div className='webapps__app'>
                <img src={slack} alt='' className='webapps__img' />
              </div>
              <div className='webapps__app'>
                <img src={mailchimp} alt='' className='webapps__img' />
              </div>
              <div className='webapps__app'>
                <img src={shopify} alt='' className='webapps__img' />
              </div>
              <div className='webapps__app'>
                <img src={zoom} alt='' className='webapps__img' />
              </div>
              <div className='webapps__icon-body'>
                <BsArrowRight className='webapps__icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebApps;
