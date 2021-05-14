import { ReactComponent as User } from '../../../assets/img/Pricing/icon-user.svg';
import { ReactComponent as Mail } from '../../../assets/img/Pricing/icon-mail.svg';
import { ReactComponent as Share } from '../../../assets/img/Pricing/icon-share.svg';
import { ReactComponent as Chart } from '../../../assets/img/Pricing/line-chart.svg';
import { ReactComponent as Repeat } from '../../../assets/img/Pricing/repeat.svg';
import { ReactComponent as SmartPhone } from '../../../assets/img/Pricing/smartphone.svg';
import { ReactComponent as Layout } from '../../../assets/img/Pricing/layout.svg';
import { ReactComponent as Chart2 } from '../../../assets/img/Pricing/chart2.svg';
import { ReactComponent as Settings } from '../../../assets/img/Pricing/settings.svg';

export const cardData = [
  {
    badge: 'Standard',
    text: 'Small business CRM for up to 10 users',
    price: 25,
    everything: 'free',

    links: [
      {
        icon: <User className='pricingSales__card-icon' />,
        text: 'Account, Contact, Lead, and Opportunity Management',
      },
      {
        icon: <Mail className='pricingSales__card-icon' />,
        text: 'Email Integration with Gmail or Outlook',
      },
      {
        icon: <SmartPhone className='pricingSales__card-icon' />,
        text: 'HostSale Mobile App',
      },
    ],
  },
  {
    badge: 'Professional',
    text: 'Complete CRM for any size team',
    price: 75,
    everything: 'standard',

    links: [
      {
        icon: <Chart className='pricingSales__card-icon' />,
        text: 'Lead Registration and Rules-Based Lead Scoring',
      },
      {
        icon: <Share className='pricingSales__card-icon' />,
        text: 'Collaborative Forecasting',
      },
    ],
  },
  {
    badge: 'Enterprise',
    text: 'Customizable sales CRM for your business',
    price: 150,
    everything: 'professional',
    popular: true,
    links: [
      {
        icon: <Layout className='pricingSales__card-icon' />,
        text: 'Workflow and Approval Automation',
      },
      {
        icon: <Repeat className='pricingSales__card-icon' />,
        text: 'Advanced Customization',
      },
    ],
  },
  {
    badge: 'Unlimited',
    text: 'Unlimited CRM power and support',
    price: 300,
    everything: 'enterprise',
    links: [
      {
        icon: <Chart2 className='pricingSales__card-icon' />,
        text: 'Advanced BI - bundled with HostCustomer Analytics',
      },
      {
        icon: <Settings className='pricingSales__card-icon' />,
        text: '24/7 Support and Configuration Services',
      },
    ],
  },
];
