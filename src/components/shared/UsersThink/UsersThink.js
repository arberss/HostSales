import React from 'react';
import Slider from 'react-slick';

import person1 from '../../../assets/img/Landing/kate.png';
import digitalmedia from '../../../assets/img/Landing/digitalmedia.png';

import person2 from '../../../assets/img/Landing/maria.png';
import norwich from '../../../assets/img/Landing/norwich.png';

import person3 from '../../../assets/img/Landing/allan.png';
import tdk from '../../../assets/img/Landing/tdk.png';

import { AiFillStar } from 'react-icons/ai';

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

// slide arrows
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <BsArrowRight className='slide__icon' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <BsArrowLeft className='slide__icon' />
    </div>
  );
}
// slide arrows

function UsersThink() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      logo: digitalmedia,
      text: `
          " With HostSales CRM, we experienced a 65% increase in our sales
          pipeline. We also managed to reduce our lead to real prospect
          time by 60%, which is huge. I would definitely recommend
          HostCustomer to companies that are experiencing complexity with
          sales and marketing and witnessing rapid growth. "
          `,
      img: person1,
      name: 'Kate Bryan',
      job: 'CEO & Fonder of Digital Media',
    },
    {
      logo: norwich,
      text: `
        " With HostCustomer CRM, we experienced a 65% increase in our sales pipeline. We also managed to reduce our lead to real prospect time by 60%, which is huge. I would definitely recommend HostCustomer to companies that are experiencing complexity with sales and marketing and witnessing rapid growth. "
            `,
      img: person2,
      name: 'Maria Lopez',
      job: 'Principal of City College Norwhich',
    },
    {
      logo: tdk,
      text: `
            " With HostSales CRM, we experienced a 65% increase in our sales
            pipeline. We also managed to reduce our lead to real prospect
            time by 60%, which is huge. I would definitely recommend
            HostCustomer to companies that are experiencing complexity with
            sales and marketing and witnessing rapid growth. "
            `,
      img: person3,
      name: 'Allan Turning',
      job: 'CEO & Fonder of TDK',
    },
    {
      logo: digitalmedia,
      text: `
            " With HostSales CRM, we experienced a 65% increase in our sales
            pipeline. We also managed to reduce our lead to real prospect
            time by 60%, which is huge. I would definitely recommend
            HostCustomer to companies that are experiencing complexity with
            sales and marketing and witnessing rapid growth. "
            `,
      img: person1,
      name: 'Kate Bryan',
      job: 'CEO & Fonder of Digital Media',
    },
    {
      logo: norwich,
      text: `
          " With HostCustomer CRM, we experienced a 65% increase in our sales pipeline. We also managed to reduce our lead to real prospect time by 60%, which is huge. I would definitely recommend HostCustomer to companies that are experiencing complexity with sales and marketing and witnessing rapid growth. "
              `,
      img: person2,
      name: 'Maria Lopez',
      job: 'Principal of City College Norwhich',
    },
    {
      logo: tdk,
      text: `
              " With HostSales CRM, we experienced a 65% increase in our sales
              pipeline. We also managed to reduce our lead to real prospect
              time by 60%, which is huge. I would definitely recommend
              HostCustomer to companies that are experiencing complexity with
              sales and marketing and witnessing rapid growth. "
              `,
      img: person3,
      name: 'Allan Turning',
      job: 'CEO & Fonder of TDK',
    },
  ];

  return (
    <div className='usersThink'>
      <div className='container-middle'>
        <div className='usersThink__content'>
          <div className='usersThink__title'>What our users think</div>

          <Slider {...settings}>
            {data &&
              data.map((item, i) => {
                const { logo, text, img, name, job } = item;
                return (
                  <div className='usersThink__card' key={i}>
                    <img
                      src={logo}
                      alt=''
                      className='usersThink__card-company'
                    />

                    <div className='usersThink__card-text'>{text}</div>
                    <div className='usersThink__card-bottom'>
                      <img src={img} alt='' className='usersThink__card-img' />
                      <div className='usersThink__card-personal'>
                        <div className='usersThink__card-person'>{name}</div>
                        <div className='usersThink__card-job'>{job}</div>
                        <div className='usersThink__stars'>
                          {Array.from(Array(5)).map((_, i) => {
                            return (
                              <AiFillStar
                                className='usersThink__star'
                                key={i}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default UsersThink;
