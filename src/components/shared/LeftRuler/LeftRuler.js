import React from 'react';
import clsx from 'clsx';

function LeftRuler({ newClass, data }) {
  return (
    <div className={clsx('leftRuler', newClass)}>
      {data &&
        data.map((item, i) => {
          const { title, text, btn, circle } = item;

          return (
            <div
              className={clsx(
                'leftRuler__info',
                circle ? 'leftRuler__info--circle' : ''
              )}
              key={i}
            >
              <div className='leftRuler__title'>{title}</div>
              <div className='leftRuler__text'>{text}</div>
              {btn ? (
                <button className='leftRuler__btn button-unstyled'>
                  {btn}
                </button>
              ) : null}
            </div>
          );
        })}
    </div>
  );
}

export default LeftRuler;
