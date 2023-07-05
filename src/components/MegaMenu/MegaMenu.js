import React from 'react'
import style from './MegaMenu.module.scss'

const MegaMenu = ({ handleCloseMegaMenu }) => {
    return (
        <nav id="megamenu">
            <div className={style['mega-menu-wrapper']}>
                <div className={style.topHeader}>
                    <a href='/' className={style.logo}>
                        <img src='https://traya.health/cdn/shop/files/TrayaLogoDark.webp?v=1662613377' />
                    </a>
                    <div className={style.close} onClick={handleCloseMegaMenu}>
                        <svg aria-hidden="true" focusable="false" role="presentation" fill="#000" viewBox="0 0 40 40" style={{ fill: "#000" }}><path d="M23.868 20.015L39.117 4.78c1.11-1.108 1.11-2.77 0-3.877-1.109-1.108-2.773-1.108-3.882 0L19.986 16.137 4.737.904C3.628-.204 1.965-.204.856.904c-1.11 1.108-1.11 2.77 0 3.877l15.249 15.234L.855 35.248c-1.108 1.108-1.108 2.77 0 3.877.555.554 1.248.831 1.942.831s1.386-.277 1.94-.83l15.25-15.234 15.248 15.233c.555.554 1.248.831 1.941.831s1.387-.277 1.941-.83c1.11-1.109 1.11-2.77 0-3.878L23.868 20.015z"></path></svg>
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.leftSide}>
                        <h3>WHAT WE DO</h3>
                        <p>We help you take control of your hairloss in a personalised, and scientific way.</p>
                        <ul>
                            <li><a href="/pages/result4">MY RESULTS</a></li>
                            <li><a href="https://trayahealth.clickpost.ai">Track Order</a></li>
                            <li><a href="https://myrecords.traya.health">My Plan</a></li>
                            <li><a href="https://form.traya.health/questions?cohort=1&amp;source=HeaderMenu&amp;page=home" id="hairtestcta" data-resultform="">Hair Test <sup>™</sup></a></li>
                            <li><a href="/collections/all-products">Traya Combos</a></li>
                            <li><a href="/policies/refund-policy">5 Month Money Back Guarantee</a></li>
                            <li>
                                <a type="button" data-toggle="modal" data-target=".bd-example-modal-sm">Log In</a>
                                <a type="button">Log Out</a>
                            </li>
                            <li><a href="/pages/referral">Referral</a></li>


                        </ul>
                    </div>
                    <div className={style.rightSide}>
                        <h3>HOW WE DO IT</h3>
                        <ul>
                            <li>
                                <a href="/pages/the-science">Traya Science</a>
                            </li>
                            <li>
                                <a href="/pages/traya-ingredients">Ingredients</a>
                            </li>
                            <li>
                                <a href="/pages/reviews">Reviews</a>
                            </li>
                            <li>
                                <a href="/pages/customer-stories">Hero's Page</a>
                            </li>
                        </ul>
                        <h3>HOW WE ARE</h3>
                        <ul>
                            <li>
                                <a href="/pages/about-us">About Us</a>
                            </li>
                            <li>
                                <a href="/pages/our-experts">Our Experts</a>
                            </li>
                            <li>
                                <a href=" https://traya.health/blogs/hair-care ">Blog</a>
                            </li>
                        </ul>
                        <h3>GET IN TOUCH</h3>
                        <ul className={style.socialIcon}>
                            <li>
                                <a href="https://www.instagram.com/traya.health/" target="_blank">
                                    <img alt="instagram" src="//traya.health/cdn/shop/t/396/assets/insta.svg?v=161841316333456272061686225152" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/traya.health/" target="_blank">
                                    <img alt="facebook" src="//traya.health/cdn/shop/t/396/assets/fb.svg?v=137006790736630527151686225152" />
                                </a>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=918828006272&amp;utm_source=chatwas&amp;utm_medium=chat&amp;utm_campaign=chatbot" target="_blank">
                                    <img alt="whatsapp" src="//traya.health/cdn/shop/t/396/assets/whatsapp.svg?v=91007566767629702641686225152" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MegaMenu