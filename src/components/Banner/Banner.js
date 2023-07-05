import React from 'react'
import style from './Banner.module.scss'
import Button from '../Button/Button'

const Banner = () => {
    return (
        <div className={style.container}>
            <div className={style.banner}>
                <h2 className={style.heading1}>Doctor Recommended <br />Hair loss treatment</h2>
                <div className={style.heading2}>
                    <span>Know The Root Cause <br /> Of Your Hair Loss</span>
                </div>
                <div className={style.heading3}>
                    <span className={style.last}>93% Success rate in 5 months</span>
                </div>
                <Button reverse={true} />
            </div>
        </div>
    )
}

export default Banner