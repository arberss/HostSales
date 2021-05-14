import { ReactComponent as Icon1 } from '../../../../assets/img/Nav/dropdown/bar-chart.svg';
import { ReactComponent as Icon2 } from '../../../../assets/img/Nav/dropdown/cast.svg';
import { ReactComponent as Icon3 } from '../../../../assets/img/Nav/dropdown/code.svg';
import { ReactComponent as Icon4 } from '../../../../assets/img/Nav/dropdown/cpu.svg';
import { ReactComponent as Icon5 } from '../../../../assets/img/Nav/dropdown/icn.svg';
import { ReactComponent as Icon6 } from '../../../../assets/img/Nav/dropdown/line-chart.svg';
import { ReactComponent as Icon7 } from '../../../../assets/img/Nav/dropdown/megaphone.svg';
import { ReactComponent as Icon8 } from '../../../../assets/img/Nav/dropdown/monitor.svg';
import { ReactComponent as Icon9 } from '../../../../assets/img/Nav/dropdown/settings.svg';
import { ReactComponent as Icon10 } from '../../../../assets/img/Nav/dropdown/share.svg';
import { ReactComponent as Icon11 } from '../../../../assets/img/Nav/dropdown/shopping-cart.svg';
import { ReactComponent as Icon12 } from '../../../../assets/img/Nav/dropdown/users.svg';

import { ReactComponent as Icon13 } from '../../../../assets/img/Nav/dropdown/bar-chart2.svg';
import { ReactComponent as Icon14 } from '../../../../assets/img/Nav/dropdown/blog.svg';
import { ReactComponent as Icon15 } from '../../../../assets/img/Nav/dropdown/earth-globe.svg';
import { ReactComponent as Icon16 } from '../../../../assets/img/Nav/dropdown/file-text.svg';
import { ReactComponent as Icon17 } from '../../../../assets/img/Nav/dropdown/headphones.svg';
import { ReactComponent as Icon18 } from '../../../../assets/img/Nav/dropdown/info.svg';
import { ReactComponent as Icon19 } from '../../../../assets/img/Nav/dropdown/star.svg';
import { ReactComponent as Icon20 } from '../../../../assets/img/Nav/dropdown/user-circle.svg';
import { ReactComponent as Icon21 } from '../../../../assets/img/Nav/dropdown/video.svg';

export const menuData = {
  products: [
    {
      icon: <Icon6 className='dropdown__icon' />,
      title: 'Sales',
      text: 'Sell faster and smarter with the most sophisticated platform',
      link: '/sales',
    },
    {
      icon: <Icon7 className='dropdown__icon' />,
      title: 'Marketing',
      text: 'Know your customer and engage across every interaction',
      link: '/marketing',
    },
    {
      icon: <Icon12 className='dropdown__icon' />,
      title: 'Employees',
      text: 'Work together in real time inside HostCustomer',
      link: '/employess',
    },
    {
      icon: <Icon11 className='dropdown__icon' />,
      title: 'Commerce',
      text: 'Grow revenue with leading B2C and B2B ecommerce solutions',
      link: '/commerce',
    },
    {
      icon: <Icon9 className='dropdown__icon' />,
      title: 'Service',
      text: 'Manage customer support across every channel with HostCustomer',
      link: '/service',
    },
    {
      icon: <Icon10 className='dropdown__icon' />,
      title: 'Integration',
      text:
        'Unlock and integrate data from any system to deliver critical, time-sensitive projects',
      link: '/integration',
    },
    {
      icon: <Icon1 className='dropdown__icon' />,
      title: 'Analytics',
      text: 'Drill deep into your sales data with customizable reports',
      link: '/analytics',
    },
    {
      icon: <Icon8 className='dropdown__icon' />,
      title: 'HostCustomer Platform',
      text: 'Build, connect, and integrate apps with enterprise cloud',
      link: '/HostCustomer Platform',
    },
    {
      icon: <Icon4 className='dropdown__icon' />,
      title: 'HostSales AI',
      text:
        'Work smarter with artificial intelligence that’s built right into HostCustomer',
      link: '/hostsales-ai',
    },
    {
      icon: <Icon2 className='dropdown__icon' />,
      title: 'Learning',
      text: 'Quickly deliver digital learning to your teams',
      link: '/learning',
    },
    {
      icon: <Icon5 className='dropdown__icon' />,
      title: 'Industries',
      text: 'Create a path to success in your industry with the best CRM',
      link: '/industries',
    },
    {
      icon: <Icon3 className='dropdown__icon' />,
      title: 'Developer Platform',
      text: 'Build custom solutions to manage enterprise operations',
      link: '/dev-platform',
    },
  ],

  resources: [
    {
      icon: <Icon17 className='dropdown__icon' />,
      title: 'Help',
      text: 'Connect with our team',
      link: '/help',
    },
    {
      icon: <Icon14 className='dropdown__icon' />,
      title: 'Blog',
      text: 'Read all things about productivity',
      link: '/blog',
    },
    {
      icon: <Icon21 className='dropdown__icon' />,
      title: 'Videos',
      text: 'See the platform in action',
      link: '/videos',
    },
    {
      icon: <Icon16 className='dropdown__icon' />,
      title: 'Documentation',
      text: 'Learn what HostCustomer consists of ',
      link: '/documentation',
    },
    {
      icon: <Icon18 className='dropdown__icon' />,
      title: 'Guides',
      text: 'Understand HostCustomer in full detail',
      link: '/guides',
    },
    {
      icon: <Icon13 className='dropdown__icon' />,
      title: 'Reports',
      text: 'Read our featured researches and data insights',
      link: '/reports',
    },
    {
      icon: <Icon20 className='dropdown__icon' />,
      title: 'Training',
      text: 'Learn with our training programs ',
      link: '/training',
    },
    {
      icon: <Icon15 className='dropdown__icon' />,
      title: 'Webinars',
      text: 'Walk through the platform for specific use-cases',
      link: '/webinars',
    },
    {
      icon: <Icon19 className='dropdown__icon' />,
      title: 'On-Demand Demos',
      text: 'Dive into the platform based on experience level',
      link: '/on-demand',
    },
  ],
  solutions: [
    {
      title: 'Industry',
      links: [
        {
          link: 'Financial Services',
          to: '/financial-services',
        },
        {
          link: 'Healthcare & Life Sciences',
          to: '/healthcare',
        },
        {
          link: 'Retail',
          to: '/retail',
        },
        {
          link: 'Transportation & Hospitality',
          to: '/transportation',
        },
        {
          link: 'Communication',
          to: '/communication',
        },
        {
          link: 'Manufacturing',
          to: '/manufacturing',
        },
        {
          link: 'Education',
          to: '/education',
        },
      ],
    },

    {
      title: 'A',
      blank: true,
      links: [
        {
          link: 'Software',
          to: '/software',
        },
        {
          link: 'Insurance',
          to: '/insurance',
        },
        {
          link: 'Media',
          to: '/media',
        },
        {
          link: 'Consumer Goods',
          to: '/consumer',
        },
      ],
    },
  ],

  solutions2: [
    {
      title: 'Business Type',
      links: [
        {
          link: 'Small Business',
          to: '/small-business',
        },
        {
          link: 'Enterprise',
          to: '/enterprise',
        },
        {
          link: 'Startups',
          to: '/startups',
        },
      ],
    },

    {
      title: 'Role',
      links: [
        {
          link: 'Sales',
          to: '/sales',
        },
        {
          link: 'Service',
          to: '/service',
        },
        {
          link: 'Marketing',
          to: '/marketing',
        },
        {
          link: 'IT',
          to: '/it',
        },
        {
          link: 'Commerce',
          to: '/role-commerce',
        },
      ],
    },
  ],
};
