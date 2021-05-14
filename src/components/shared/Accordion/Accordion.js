import React from 'react';

import clsx from 'clsx';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

function Acrd({ newclass, title, text, icon1, icon2, uuid }) {
  return (
    <AccordionItem uuid={uuid} className={clsx('accordion__item', newclass)}>
      <AccordionItemHeading>
        <AccordionItemButton>
          {icon1}
          {title}
          {icon2}
        </AccordionItemButton>
      </AccordionItemHeading>

      <AccordionItemPanel>
        <p className='accordion__text'>{text}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
}

export default Acrd;
