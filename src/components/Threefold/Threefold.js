import React from 'react'
import style from "./Threefold.module.scss";
import Button from '../Button/Button';

const Threefold = () => {
    return (
        <div className={style.threefold}>
            <div className={style.container}>
                <div className={style.heading}>
                    <p>The Threefold Way</p>
                </div>
                <div className={style.contentWrapper}>
                    <p className={style.subheading}>TRAYA’S HOLISTIC PLAN FOR HAIR FALL</p>
                    <h5 className={style.contentWays}>AYURVEDA<span>+</span>DERMATOLOGY<span>+</span>NUTRITION</h5>
                    <p className={style.description}>Our approach combines the goodness of three sciences. With ingredients from the most authentic sources, we personalize your treatment delivering assured results.</p>
                    <div id="hairtestcta" className={style.btn}>
                        <Button
                            reverse={true}
                            link="https://form.traya.health/questions?cohort=1&amp;location=Ingredients&amp;page=home"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Threefold