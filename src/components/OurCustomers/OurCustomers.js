import React from 'react'
import style from './OurCustomers.module.scss'
import Slider from "react-slick"
import Button from '../Button/Button';

const OurCustomers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={style.customers}>
      <p className={style.title}>Our Customers</p>
      <div className={style.reviews}>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
      <div className={style.btn}>
        <Button reverse={true} />
      </div>
    </div>
  )
}

export default OurCustomers