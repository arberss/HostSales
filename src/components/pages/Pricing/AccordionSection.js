import React from 'react';

import { Accordion } from 'react-accessible-accordion';

import AccordionItm from '../../shared/Accordion/Accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import { RiArrowUpSLine } from 'react-icons/ri';

const data = {
  list1: [
    {
      title: 'Can I get a demo of HostCustomer CRM?',
      text:
        'Yes, we would be happy to demonstrate HostCustomer CRM through a web-conference at your convenience. The demo is a one hour session. To schedule your personal session, please contact sales@hostcustomer.com.',
      uuid: 'a',
    },
    {
      title: 'What types of payment do you accept?',
      text:
        'Yes, we would be happy to demonstrate HostCustomer CRM through a web-conference at your convenience. The demo is a one hour session. To schedule your personal session, please contact sales@hostcustomer.com.',
    },
    {
      title: 'Does HostCustomer CRM support multiple languages?',
      text:
        'Yes, we would be happy to demonstrate HostCustomer CRM through a web-conference at your convenience. The demo is a one hour session. To schedule your personal session, please contact sales@hostcustomer.com.',
    },
  ],
  list2: [
    {
      title: 'How long are your contracts?',
      text:
        'Yes, we would be happy to demonstrate HostCustomer CRM through a web-conference at your convenience. The demo is a one hour session. To schedule your personal session, please contact sales@hostcustomer.com.',
    },
    {
      title: 'Can I switch plans?',
      text:
        'Yes, we would be happy to demonstrate HostCustomer CRM through a web-conference at your convenience. The demo is a one hour session. To schedule your personal session, please contact sales@hostcustomer.com.',
    },
    {
      title: 'Is my data safe?',
      text:
        'Yes, we would be happy to demonstrate HostCustomer CRM through a web-conference at your convenience. The demo is a one hour session. To schedule your personal session, please contact sales@hostcustomer.com.',
    },
  ],
};

function AccordionSection() {
  return (
    <div className='accordionSection'>
      <div className='container-middle'>
        <div className='accordionSection__content'>
          <div className='accordionSection__title'>
            Frequently Asked Questions
          </div>
          <div className='accordionSection__accs'>
            <Accordion allowZeroExpanded preExpanded={['a']}>
              {data.list1.map((item, i) => {
                const { title, text, uuid } = item;
                return (
                  <AccordionItm
                    key={i}
                    title={title}
                    text={text}
                    uuid={uuid ? uuid : ''}
                    icon2={
                      <RiArrowUpSLine className='accordion__icon accordion__icon--2' />
                    }
                  />
                );
              })}
            </Accordion>

            <Accordion allowZeroExpanded>
              {data.list2.map((item, i) => {
                const { title, text } = item;
                return (
                  <AccordionItm
                    key={i}
                    title={title}
                    text={text}
                    icon2={
                      <RiArrowUpSLine className='accordion__icon accordion__icon--2' />
                    }
                  />
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionSection;
