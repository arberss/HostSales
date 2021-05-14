import React from 'react';

import img1 from '../../../assets/img/Pricing/sell-img1.png';
import img2 from '../../../assets/img/Pricing/sell-img2.png';
import img3 from '../../../assets/img/Pricing/sell-img3.png';
import img4 from '../../../assets/img/Pricing/sell-img4.png';

import imginsights from '../../../assets/img/Pricing/img-insights.png';

import { ReactComponent as CheckCircle } from '../../../assets/img/Pricing/check-circle.svg';

import drive from '../../../assets/img/Landing/drive.png';
import dropbox from '../../../assets/img/Landing/dropbox.png';
import onedrive from '../../../assets/img/Landing/onedrive.png';
import calendarMonth from '../../../assets/img/Landing/calendar-month.png';
import outlook from '../../../assets/img/Landing/outlook.png';
import calendarDay from '../../../assets/img/Landing/calendar-day.png';
import mailchimp from '../../../assets/img/Landing/mailchimp.png';

function SellAnywhere() {
  return (
    <div className='sellAnywhere'>
      <div className='container-middle'>
        {/* content */}
        <div className='sellAnywhere__content'>
          <div className='sellAnywhere__title'>
            Sell from anywhere on any device
          </div>
          <div className='sellAnywhere__img-content'>
            <img src={img1} alt='' className='sellAnywhere__img' />
            <img
              src={img2}
              alt=''
              className='sellAnywhere__img2 sellAnywhere__img2--1'
            />
            <img
              src={img3}
              alt=''
              className='sellAnywhere__img2 sellAnywhere__img2--2'
            />
            <img
              src={img4}
              alt=''
              className='sellAnywhere__img2 sellAnywhere__img2--3'
            />
          </div>
        </div>
        {/* content */}

        {/* content */}
        <div className='sellAnywhere__content'>
          <div className='sellAnywhere__title'>
            Create and track quotes and orders
          </div>
          <div className='sellAnywhere__cards'>
            <div className='sellAnywhere__card-two'>
              <div className='sellAnywhere__card'>
                <div className='sellAnywhere__card-icon-body'>
                  <CheckCircle className='sellAnywhere__card-icon' />
                </div>
                <div className='sellAnywhere__card-title'>Contracts</div>
                <div className='sellAnywhere__card-text'>
                  Help your sales teams manage contract approvals and renewals.
                </div>
              </div>

              <div className='sellAnywhere__card'>
                <div className='sellAnywhere__card-icon-body'>
                  <CheckCircle className='sellAnywhere__card-icon' />
                </div>
                <div className='sellAnywhere__card-title'>Orders</div>
                <div className='sellAnywhere__card-text'>
                  Track and manage sales orders in one central location.
                </div>
              </div>
            </div>

            <div className='sellAnywhere__card-two'>
              <div className='sellAnywhere__card'>
                <div className='sellAnywhere__card-icon-body'>
                  <CheckCircle className='sellAnywhere__card-icon' />
                </div>
                <div className='sellAnywhere__card-title'>
                  Products and price books
                </div>
                <div className='sellAnywhere__card-text'>
                  Save your product catalogue and assign prices for every
                  scenario.
                </div>
              </div>

              <div className='sellAnywhere__card'>
                <div className='sellAnywhere__card-icon-body'>
                  <CheckCircle className='sellAnywhere__card-icon' />
                </div>
                <div className='sellAnywhere__card-title'>Quotes</div>
                <div className='sellAnywhere__card-text'>
                  Easily create basic quotes by pulling in products and pricing
                  to show customers.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* content */}

        {/* content */}
        <div className='sellAnywhere__content'>
          <div className='sellAnywhere__title'>Get real-time insights</div>
          <div className='sellAnywhere__insights-blue'>
            <img
              src={imginsights}
              alt=''
              className='sellAnywhere__insights-img'
            />
          </div>
        </div>
        {/* content */}

        {/* content */}
        <div className='sellAnywhere__content sellAnywhere__content-timeline'>
          <div className='sellAnywhere__title'>
            Collaborate across your company
          </div>
          <div className='sellAnywhere__timeline'>
            <div className='sellAnywhere__timeline-box sellAnywhere__timeline-box--left'>
              <div className='sellAnywhere__timeline-content'>
                <div className='sellAnywhere__timeline-title'>Files</div>
                <div className='sellAnywhere__timeline-text'>
                  Share and collaborate on key files relevant to each deal.
                </div>
              </div>
            </div>

            <div className='sellAnywhere__timeline-box sellAnywhere__timeline-box--right'>
              <div className='sellAnywhere__timeline-content'>
                <div className='sellAnywhere__timeline-title'>
                  Topics and Recommendations
                </div>
                <div className='sellAnywhere__timeline-text'>
                  Automatically get the most up-to-date content and
                  recommendations on what to follow and join.
                </div>
              </div>
            </div>

            <div className='sellAnywhere__timeline-box sellAnywhere__timeline-box--left'>
              <div className='sellAnywhere__timeline-content'>
                <div className='sellAnywhere__timeline-title'>Chatter</div>
                <div className='sellAnywhere__timeline-text'>
                  Collaborate throughout your company and with outside parties.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* content */}

        <div className='sellAnywhere__content sellAnywhere__content-connect'>
          <div className='sellAnywhere__title'>
            Sell from anywhere on any device
          </div>
          <div className='sellAnywhere__connectSales'>
            <div className='sellAnywhere__comp'>
              <img
                src={drive}
                className='sellAnywhere__connectSales-img'
                alt=''
              />
            </div>
            <div className='sellAnywhere__comp'>
              <img
                src={dropbox}
                className='sellAnywhere__connectSales-img'
                alt=''
              />
            </div>
            <div className='sellAnywhere__comp'>
              <img
                src={onedrive}
                className='sellAnywhere__connectSales-img'
                alt=''
              />
            </div>
            <div className='sellAnywhere__comp'>
              <img
                src={outlook}
                className='sellAnywhere__connectSales-img2'
                alt=''
              />
            </div>
            <div className='sellAnywhere__comp'>
              <img
                src={calendarMonth}
                className='sellAnywhere__connectSales-img2'
                alt=''
              />
            </div>
            <div className='sellAnywhere__comp'>
              <img
                src={calendarMonth}
                className='sellAnywhere__connectSales-img2'
                alt=''
              />
            </div>
            <div className='sellAnywhere__comp'>
              <img
                src={mailchimp}
                className='sellAnywhere__connectSales-img'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellAnywhere;
