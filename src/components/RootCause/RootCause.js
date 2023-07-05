import React from 'react'
import style from "./RootCause.module.scss";
import Button from '../Button/Button';

const RootCause = () => {
    return (
        <div className={style.rootcause}>
            <div className={style.container}>
                <p>Hair Loss Has Multiple Root Causes</p>
                <div className={style.imgContainer}>
                    <img src="https://traya.health/cdn/shop/files/Banner_1_410d97a2-8921-4069-a949-38a2366180f4.jpg?v=1688114570" alt="" />
                </div>
                <div className={style.btn}>
                    <Button reverse={true} />
                </div>
            </div>
        </div>
    )
}

export default RootCause