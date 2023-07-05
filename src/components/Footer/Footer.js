import React from 'react'
import style from './Footer.module.scss'
import FooterTop from './FooterTop'
import FooterMiddle from './FooterMiddle'
import FooterBottom from './FooterBottom'

const Footer = () => {
    return (
        <footer className={style.footer}>
             <FooterTop />
            <FooterMiddle />
            <FooterBottom />
        </footer>
    )
}

export default Footer