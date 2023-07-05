import React from 'react'
import style from './Footer.module.scss'

const FooterMiddle = () => {
    return (
        <div className={style.middle}>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.info_container}>
                        {/* <div class="trust-badge-image d-none d-md-none">
                            <img src="//traya.health/cdn/shop/files/imgpsh_fullsize_anim.png?v=1663332303" />
                        </div> */}
                        <div className={style.footer_info}>

                            <div className={style.footer_logo}>
                                <a href="/">
                                    <img data-src="//traya.health/cdn/shop/files/TrayaLogoWhite_250x_73a5d7e5-bd9b-4089-8e81-80249caeac61.webp?v=1662534292" width="165" height="52" alt="cstm_footer_logo" src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/Group_87_59a28562-b3b3-4331-9d3c-4a27366eba04.png?v=1604573345" />
                                </a>
                            </div>
                            <div className={style.searchTitle}>POPULAR SEARCH</div>
                            <div className={style.SearchLink}>
                                <a href="/blogs/hair-care/top-10-reasons-for-losing-hair">Reasons For Hair Fall</a>
                                <a href="/blogs/hair-care/how-the-best-customised-hair-regrowth-oil-is-made">Hair Growth Oil</a>
                                <a href="/blogs/hair-care/stop-hair-loss-and-reduce-pitta-dosha">How To Stop Hair Fall</a>
                                <a href="/blogs/hair-care/dandruff-vs-dry-scalp">Dandruff Vs Dry Scalp</a>
                                <a href="/blogs/hair-care/foods-for-hair-growth">Food For Hair Growth</a>
                                <a href="/blogs/hair-care/a-hair-loss-treatment-that-also-fixes-your-health">Hair Loss Treatment</a>
                                <a href="/blogs/hair-care/minoxidil-for-hair">What Is Minoxidil</a>
                                <a href="/blogs/hair-care/nasya-treatment-for-better-health">Nasya Treatment</a>
                                <a href="/blogs/hair-care/how-to-prevent-grey-hair-and-hair-loss-due-to-scalp-ageing">How To Stop White Hair</a>
                                <a href="/blogs/hair-care/the-benefits-of-yashtimadhu-for-hair-growth">Yashtimadhu Uses</a>
                                <a href="/blogs/hair-care/bhringraj-hair-oil">Bhringraj Hair Oil</a>
                                <a href="/blogs/hair-care/how-can-i-thicken-my-hair-help-it-grow-long">How Can I Thicken My Hair</a>
                                <a href="/blogs/hair-care/rice-water-for-hair">Rice Water For Hair</a>

                                <a href="/blogs/hair-care/how-to-strengthen-your-hair">How To Strengthen Hair</a>

                                <a href="/blogs/hair-care/shatavari-for-hair">Shatavari For Hair</a>

                                <a href="/blogs/hair-care/clove-benefits">Clove Benefits</a>

                                <a href="/blogs/hair-care/12-ayurvedic-herbs-and-how-to-use-them-for-hair-loss">Ayurvedic Herbs For Hair Growth</a>

                                <a href="/blogs/hair-care/how-to-reduce-hair-loss-with-ayurvedic-treatment-and-natural-homemade-remedies">Ayurvedic Treatment For Hair Fall</a>

                                <a href="/products/scalp-oil-with-growth-therapy-booster-shots">Herbal Hair Oil</a>

                                <a href="/products/anti-dandruff-shampoo">Anti-dandruff Shampoo</a>
                                <a href="/blogs/hair-care/redensyl-vs-minoxidil-which-one-is-better"> Redensyl vs Minoxidil </a>
                            </div>

                        </div>
                    </div>
                    <div className={style.linkContainer}>
                        <div className={style.row}>
                            <div className={style.footerLinks}>
                                <ul className={style.menu}>
                                    <li className={style.menuItem}>Traya Journey</li>
                                    <li className={style.menuItem}><a href="https://trayahealth.clickpost.ai/">Track Order</a></li>
                                    <li className={style.menuItem}><a href="https://myrecords.traya.health">Get Prescription</a></li>
                                    <li className={style.menuItem}><a href="https://form.traya.health/questions?cohort=1&amp;location=FooterMenu" data-resultform="">Online Diagnosis</a></li>
                                    <li className={style.menuItem}><a href="/pages/referral">Referral</a></li>
                                    <li className={style.menuItem}><a href="/pages/customer-stories">Customer Stories</a></li>
                                    <li className={style.menuItem}><a href="/pages/reviews">Reviews</a></li>
                                </ul>
                                {/* <div class="trust-badge-image d-none d-md-none mt-2">
                                    <img src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/HEA_Stamp_e37982ea-f9e5-4b6d-b7f8-114dcf1cc05c_160x.png" />
                                </div> */}
                            </div>
                            <div className={style.footerLinks}>
                                <div className={style.row}>
                                    <div className={style.footer_social}>
                                        <ul className={style.menu}>
                                            <li className={style.menuItem}>Company</li>
                                            <li className={style.menuItem}><a href="/pages/the-science">Science</a></li>
                                            <li className={style.menuItem}><a href="/pages/about-us">Our Story</a></li>
                                            <li className={style.menuItem}><a href="/blogs/hair-care">Blog</a></li>
                                            <li className={style.menuItem}><a href="/collections/all-products">All Products</a></li>
                                            <li className={style.menuItem}><a href="/pages/hair-loss-treatment-for-women">Hair Treatment for women</a></li>
                                            <li className={style.menuItem}><a href="/pages/hair-fall-solution-for-men">Hair Treatment for Men</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.footerLinks} ${style.footer_links_legal}`}>
                                <div className={style.row}>
                                    <ul className={style.menu}>
                                        <li className={style.menuItem}>Legal</li>
                                        <li className={style.menuItem}><a href="/policies/refund-policy">Refund Policy</a></li>
                                        <li className={style.menuItem}><a href="/policies/privacy-policy">Privacy Policy</a></li>
                                        <li className={style.menuItem}><a href="/policies/terms-of-service">Terms of Service</a></li>
                                        <li className={style.menuItem}><a href="/pages/return-policy">Return Policy</a></li>
                                        <li className={style.menuItem}><a href="/pages/faq">FAQ</a></li>
                                        <div class="d-none d-md-block ">
                                            <ul className={style.socialLinks}>
                                                <li><a href="https://www.instagram.com/traya.health/" target="_blank" aria-describedby="a11y-new-window-external-message" rel="null noopener"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.89589 0.00131111L10.5157 0.000475308C12.6422 0.000206814 14.3922 1.74401 14.3925 3.86558L14.3933 10.4331C14.3936 12.5538 12.6449 14.299 10.5175 14.2992L3.8977 14.3001C1.77116 14.3003 0.0211164 12.5565 0.0208485 10.435L0.0200193 3.86739C0.0197516 1.74676 1.76842 0.00157972 3.89589 0.00131111ZM11.065 2.49764C11.5105 2.49758 11.8882 2.87414 11.8882 3.31836C11.8883 3.76259 11.5107 4.13924 11.0652 4.13929C10.5849 4.13936 10.2421 3.76279 10.242 3.31857C10.242 2.87435 10.5847 2.4977 11.065 2.49764ZM7.18876 3.2504L7.22267 3.25039C9.3492 3.25012 11.1332 5.02867 11.1334 7.1493C11.1337 9.30374 9.35019 11.0489 7.22365 11.0492L7.18974 11.0492C5.06321 11.0495 3.31317 9.30567 3.31289 7.15029C3.31263 5.02966 5.06128 3.25067 7.18876 3.2504ZM7.18893 4.58401L7.22284 4.584C8.62891 4.58383 9.79592 5.74636 9.79609 7.14947C9.79627 8.58639 8.63051 9.74922 7.22349 9.7494L7.18958 9.7494C5.7835 9.74958 4.61649 8.58704 4.61631 7.15013C4.61613 5.74796 5.78191 4.58419 7.18893 4.58401ZM3.92995 1.23255L10.481 1.23172C11.9558 1.23154 13.1567 2.42882 13.1569 3.89954L13.1577 10.3985C13.1579 11.8693 11.9573 13.0669 10.4825 13.067L3.93145 13.0679C2.45662 13.0681 1.2557 11.8708 1.25551 10.4001L1.25469 3.90105C1.25451 2.43032 2.45513 1.23274 3.92995 1.23255Z" fill="#fff"></path>
                                                </svg>
                                                </a></li>
                                                <li><a href="https://www.facebook.com/traya.health/" target="_blank" aria-describedby="a11y-new-window-external-message" rel="null noopener"><svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.38992 14.2997H5.1676V7.91012H7.21951L7.63007 5.32858H5.1676V3.37657C5.1676 2.65283 5.86247 2.24341 6.52466 2.24341H7.72454V0.10298L5.57815 0.00876927C3.52624 -0.117138 2.38992 1.48796 2.38992 3.40827V5.32858H0.0537109V7.91012H2.38992V14.2997Z" fill="#fff"></path>
                                                </svg></a></li>
                                                <li><a href="https://www.linkedin.com/company/trayahealth" target="_blank" aria-describedby="a11y-new-window-external-message" rel="null noopener"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.993156 4.83784H3.83995V14.3694H0.993156V4.83784ZM2.39854 0.00183105C3.34747 0.00183105 4.12059 0.772804 4.12059 1.7191C4.12059 2.66539 3.34747 3.43637 2.39854 3.43637C1.4496 3.43637 0.711426 2.66539 0.711426 1.7191C0.711426 0.772804 1.4496 0.00183105 2.39854 0.00183105ZM5.52597 4.83784H8.33672V6.16963C8.93404 5.29303 9.91791 4.7333 11.0427 4.7333H11.8158C13.6077 4.7333 15.0491 6.20556 15.0491 7.95768V14.3705H12.2384V13.4939V9.21868C12.2034 8.13191 11.4652 7.29124 10.3755 7.29124C9.28565 7.29124 8.37276 8.13191 8.33782 9.21868V14.3705H5.52706V4.83893L5.52597 4.83784Z" fill="#fff"></path>
                                                </svg></a></li>
                                                <li><a href="https://twitter.com/TrayaHealth?t=I0O9cO7MJi-iIHiVSqI9qg&amp;s=09" target="_blank" aria-describedby="a11y-new-window-external-message" rel="null noopener"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.79045 4.39915C8.09375 0.710068 12.5092 -1.48384 15.1117 1.17703C15.1117 1.17703 16.2732 0.849814 17.2968 0.196527C17.2968 0.196527 16.9247 1.45766 15.6704 2.25069C15.6704 2.25069 17.0649 2.06436 17.6689 1.69057C17.6689 1.69057 17.0649 2.95169 15.9486 3.41865C16.5526 11.8705 7.48866 17.0059 0.14502 12.8044C0.14502 12.8044 3.77104 12.9907 5.30468 11.2172C5.30468 11.2172 3.07321 11.4035 1.95803 8.69608C1.95803 8.69608 2.79497 9.02329 3.63078 8.60291C3.63078 8.60291 1.02834 8.18254 0.79535 5.05471C0.79535 5.05471 1.6323 5.708 2.56199 5.47509C2.56199 5.47509 -0.319823 3.747 1.30657 0.619176C1.30657 0.619176 4.37386 4.54117 8.79045 4.40142V4.39915Z" fill="#fff"></path>
                                                </svg>
                                                </a></li>
                                                <li><a href="https://www.youtube.com/@TrayaHealth" target="_blank" aria-describedby="a11y-new-window-external-message" rel="null noopener"><svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8402 0.240402C6.8302 0.0818076 9.17768 0.00183105 10.9692 0.00183105C12.7594 0.00183105 15.0675 0.0818076 17.0982 0.240402C19.4457 0.438307 20.6406 0.835468 20.9586 3.17644C21.1177 4.24729 21.1979 5.71666 21.1979 7.22399C21.1979 8.73268 21.1177 10.24 20.9586 11.2716C20.6406 13.6532 19.4457 14.0097 17.0982 14.2076C15.0688 14.4055 12.7608 14.4462 10.9692 14.4462C9.17904 14.4462 6.8302 14.4069 4.8402 14.2076C2.49271 14.0097 1.25847 13.6518 0.940394 11.2716C0.820777 10.24 0.741943 8.73132 0.741943 7.22399C0.741943 5.71531 0.822136 4.24729 0.940394 3.17644C1.25847 0.835468 2.49271 0.438307 4.8402 0.240402Z" fill="#fff"></path>
                                                    <path class="fill-you" fill-rule="evenodd" clip-rule="evenodd" d="M8.90036 4.1701L14.2328 7.22543L8.90036 10.3201V4.1701Z" fill="#414042"></path>
                                                </svg>
                                                </a></li>
                                            </ul>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={style.contactInfo}>
                        <p>Registered Copyright 2023</p>
                        <p class="mb-2">
                            <strong>Tatvartha Health Pvt. Ltd.</strong><br />
                            <strong>Mumbai Office:</strong> Unit no - 101, B wing, Building - <br />16,
                            Interface, Off Link Road, Malad (West),
                            Mumbai - 400064, Maharashtra<br />
                        </p>
                        <p><strong>Registered Office:</strong> C67 P1, Fortune Hotel Galaxy,Koparli R, GIDC, Vapi, Gujarat - 396195</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default FooterMiddle