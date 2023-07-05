import React from 'react'
import style from './TheScience.module.scss'
import Button from '../Button/Button'

const TheScience = () => {
    return (
        <div className={style.science}>
            <img className={style.deskImg} src="//traya.health/cdn/shop/files/Male-2x2Regimen_2.webp?v=1678350346" loading="lazy" />
            <img className={style.mobImg} src="//traya.health/cdn/shop/files/Male-2x2Regimen-mobile_2.webp?v=1678350362" loading="lazy" />

            <div className={style.regimenContent}>
                <div className={style.textContent}>
                    <p className={style.subHeading}>TRAYA 2X2 REGIMEN</p>
                    <h2><strong>2min</strong><br />
                        twice a day</h2>
                    <h4 className={style.heading}>Follow a simple daily routine. Start seeing the difference in under 30 days.</h4>
                    <div className={style.btn}>
                        <Button reverse={true} text="The Science" link="/pages/the-science" tm={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheScience