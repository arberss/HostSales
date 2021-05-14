import React from 'react';

export default function SingleLanguage(props) {
  const { Flag } = props;

  return (
    <div
      className={`single-language ${props.styles}`}
      onClick={props.handleLanguageChange}
    >
      {/* <div className='flag'>
        <img src={props.flag} alt='flag' />
      </div> */}
      <Flag className='flag' />
      <div className='text'>
        <span>{props.language}</span>
      </div>
    </div>
  );
}
