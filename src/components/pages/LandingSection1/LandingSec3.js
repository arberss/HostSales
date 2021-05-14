import React from 'react';

import imgL3 from '../../../assets/img/Landing/imgL3.png';
import imgL2 from '../../../assets/img/Landing/imgL2.png';
import imgL5 from '../../../assets/img/Landing/imgL5.png';
import imgL6 from '../../../assets/img/Landing/imgL6.png';
import imgL7 from '../../../assets/img/Landing/imgL7.png';

import { ReactComponent as Icon1 } from '../../../assets/img/Landing/icon-user.svg';
import { ReactComponent as Icon2 } from '../../../assets/img/Landing/icon-chart.svg';
import { ReactComponent as Icon3 } from '../../../assets/img/Landing/icon-notification.svg';

import { ReactComponent as Icon4 } from '../../../assets/img/Landing/icon-decision.svg';
import { ReactComponent as Icon5 } from '../../../assets/img/Landing/icon-meter.svg';
import { ReactComponent as Icon6 } from '../../../assets/img/Landing/icon-page.svg';

import pana from '../../../assets/img/Landing/pana.png';
import cuate from '../../../assets/img/Landing/cuate.png';

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import LeftRuler from '../../shared/LeftRuler/LeftRuler';
import LandingRow from '../../shared/LandingRow/LandingRow';

const rulerData = {
  first: [
    {
      title: 'Manage sales meetings and presentations',
      text:
        'Manage  presentations and meetings from within your CRM. Organize webinars, convert attendees to leads, and get webinar reports, all within your CRM.',
      circle: true,
    },
    {
      title: 'Stay ahead of the numbers',
      text:
        'Never lose track of sales and performance metrics, even while you are away. From dedicated mobile apps, to blended dashboards, our powerful AI tools ensure you are always ahead of the curve.',
    },
    {
      title: 'Collaborate with your team',
      text: `Collaborate with your team through common feeds. Share insights, answer each other's questions, and send lead or deal updates to keep everyone on the same page.`,
    },
  ],

  second: [
    {
      title:
        'Automate every aspect of your business and cut out time-intensive, repetitive tasks',
      circle: true,
    },
    {
      title:
        'Streamline your lead nurturing process and make the most of every incoming lead',
    },
    {
      title: `Trigger instant actions, stay on top of activities, and follow up better with workflows`,
    },
  ],
};

const landingRow = {
  first: {
    img: pana,
    title: 'Connect with your customers wherever they are',
    data: [
      {
        icon: <Icon1 className='landingRow__icon' />,
        text:
          'Reach customers across every channel: telephone, email, live chat, and social media',
      },
      {
        icon: <Icon3 className='landingRow__icon' />,
        text:
          'Get real-time notifications when customers interact with your business',
      },
      {
        icon: <Icon2 className='landingRow__icon' />,
        text:
          'Measure the effectiveness of your customer communication and find the best time and channel to reach out to your customers',
      },
    ],
  },

  second: {
    img: cuate,
    title: 'Get real-time reports and insights',
    data: [
      {
        icon: <Icon4 className='landingRow__icon' />,
        text:
          'Make smarter business decisions with powerful, real-time analytics',
      },
      {
        icon: <Icon5 className='landingRow__icon' />,
        text:
          'Measure and manage your organization’s territory-wide sales performance',
      },
      {
        icon: <Icon6 className='landingRow__icon' />,
        text:
          'Track key performance indicators, including current trends and future predictions',
      },
    ],
  },
};

function LandingSec3() {
  const { first, second } = landingRow;

  return (
    <div className='landingSec3'>
      <div className='container-middle'>
        <div className='landingSec3__content'>
          <div className='landingSec3__left'>
            <div className='landingSec3__left-title'>
              Continue growing sales with HostSales features
            </div>
            <LeftRuler data={rulerData.first} />
          </div>
          <div className='landingSec3__right'>
            <div className='landingSec3__right-content'>
              <img src={imgL3} alt='' className='landingSec3__right-img' />
              <img src={imgL2} alt='' className='landingSec3__right-img2' />
              <div className='landingSec3__right-arrowbody landingSec3__right-arrowbody--left'>
                <BsArrowLeft className='landingSec3__right-arrow' />
              </div>
              <div className='landingSec3__right-arrowbody'>
                <BsArrowRight className='landingSec3__right-arrow' />
              </div>
            </div>
          </div>
        </div>

        <LandingRow title={first.title} img={first.img} data={first.data} />

        {/*  */}
        <div className='landingSec3__reverse'>
          <div className='landingSec3__left'>
            <div className='landingSec3__left-title'>
              Save more time with automation
            </div>
            <LeftRuler data={rulerData.second} />
          </div>
          <div className='landingSec3__right'>
            <div className='landingSec3__right-content'>
              <img src={imgL5} alt='' className='landingSec3__right-img' />
              <img src={imgL6} alt='' className='landingSec3__right-img3' />
              <img src={imgL7} alt='' className='landingSec3__right-img4' />
              <div className='landingSec3__right-arrowbody landingSec3__right-arrowbody--left'>
                <BsArrowLeft className='landingSec3__right-arrow' />
              </div>
              <div className='landingSec3__right-arrowbody'>
                <BsArrowRight className='landingSec3__right-arrow' />
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <LandingRow
          title={second.title}
          img={second.img}
          data={second.data}
          reverse
        />
      </div>
    </div>
  );
}

export default LandingSec3;
