import React from 'react'
import style from './Solution.module.scss'
import Button from '../Button/Button'

const Solution = () => {
  return (
    <div className={style.solution}>
                <p className={style.title}>
                    <span className={style.textGreen}>
                        <span>Dermatology</span>
                        <span>Ayurveda</span>
                        <span className="active"> Nutrition</span>
                        <span></span>
                    </span>
                    Doctors <br />build your plan
                </p>
                <div className={style.container}>
                    <div className={style.imgSection}>
                        <img data-src="//cdn.shopify.com/s/files/1/0100/1622/7394/files/1400x1374.jpg" alt="Plan-image" src="//cdn.shopify.com/s/files/1/0100/1622/7394/files/1400x1374.jpg" />
                        <div className={style.caption}>
                            <h5>Products verified <br /> by doctors</h5>
                            <h5>Dosage as per  <br /> your profile</h5>
                            <h5>Personalized  <br /> diet plan</h5>
                        </div>
                    </div>
                    <h4><p className={style.doctor_bottom_text}>We are not just doctor backed, <br />we are doctor recommended.</p></h4>
                </div>
                <div className={style.imgSection}>
                    <img data-src="//cdn.shopify.com/s/files/1/0100/1622/7394/files/1400x1374.jpg" alt="Plan-image" src="//cdn.shopify.com/s/files/1/0100/1622/7394/files/1400x1374.jpg" />
                    <div className={style.caption}>
                        <h5>Products verified <br /> by doctors</h5>
                        <h5>Dosage as per  <br /> your profile</h5>
                        <h5>Personalized  <br /> diet plan</h5>
                    </div>
                </div>
                <div className={style.btn}>
                    <Button reverse={true} />
                </div>
            </div>
  )
}

export default Solution