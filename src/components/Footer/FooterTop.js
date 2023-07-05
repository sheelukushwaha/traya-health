import React from 'react'
import style from './Footer.module.scss'

const FooterTop = () => {
    return (
        <div className={style.top}>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.top_details}>
                        <div className={style.google_icons}>
                            <h4>
                                <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0839 0.000150649H2.35392C1.14279 0.000150649 0.158691 0.981514 0.158691 2.18928V17.8109C0.158691 19.0186 1.14279 20 2.35392 20H10.082C11.2932 20 12.2773 19.0186 12.2773 17.8109V2.18928C12.2795 0.981363 11.2932 0 10.0843 0L10.0839 0.000150649ZM8.46986 0.626332L8.2071 1.33462H4.23067L3.96791 0.626332H8.46986ZM11.6514 17.811C11.6514 18.6725 10.9478 19.3741 10.0839 19.3741H2.35392C1.49008 19.3741 0.786466 18.6725 0.786466 17.811V2.18943C0.786466 1.32799 1.49008 0.626332 2.35392 0.626332H3.3001L3.71866 1.75644C3.76322 1.87855 3.88125 1.96065 4.01256 1.96065H8.42749C8.5588 1.96065 8.67683 1.87855 8.72139 1.75644L9.13995 0.626332H10.0839C10.9477 0.626332 11.6514 1.32799 11.6514 2.18943L11.6514 17.811ZM8.48093 18.1952C8.48093 18.3683 8.34062 18.5083 8.16697 18.5083H4.26873C4.09507 18.5083 3.95476 18.3683 3.95476 18.1952C3.95476 18.022 4.09728 17.8821 4.26873 17.8821H8.16734C8.34085 17.8821 8.48116 18.022 8.48116 18.1952H8.48093Z" fill="white"></path>
                                </svg> Experience the Traya Mobile App
                            </h4>
                            <div className={style.googleappple_icon}>
                                <a href="https://trayahealth.app.link/xT3UrtZDvyb">
                                    <img src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/icon-AppStore_lg30tv.png?v=1681909359" />
                                </a>
                                <a href="https://trayahealth.app.link/xT3UrtZDvyb">
                                    <img src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/icon-GooglePlay_1_zixjxl.png?v=1681909354" />
                                </a>
                            </div>
                        </div>
                        <div className={style.copyright}>
                            <p>Registered Copyright 2023</p>
                            <p>
                                <strong>Tatvartha Health Pvt. Ltd.</strong><br />
                                <strong>Mumbai Office:</strong> Unit no - 101, B wing, Building - <br />
                                16, Interface, Off Link Road, Malad (West),
                                Mumbai - 400064, Maharashtra<br />
                            </p>

                            <p><strong>Registered Office:</strong> C67 P1, Fortune Hotel Galaxy,Koparli R, GIDC, Vapi, Gujarat - 396195</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FooterTop