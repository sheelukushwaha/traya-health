import React, { useState, useEffect } from 'react';
import style from './Header.module.scss';
import Button from '../Button/Button';
import MegaMenu from '../MegaMenu/MegaMenu';

const Header = () => {
    const [sticky, setSticky] = useState(false);
    const [showMegaMenu, setShowMegaMenu] = useState(false);

    const handleScroll = () => {
        if (!sticky && window.scrollY > 2) {
            setSticky(true)
            console.log(sticky);
        } else if (sticky && window.scrollY < 1.5) {
            setSticky(false)
            console.log(sticky);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [sticky])

    const handleMegaMenu = (e) => {
        e.preventDefault();
        const megamenu = document.getElementById("megamenu");
        megamenu.style.height = "100vh";
        // setShowMegaMenu(true);
    }
    const handleCloseMegaMenu = (e) => {
        e.preventDefault();
        const megamenu = document.getElementById("megamenu");
        megamenu.style.height = "0";
        // setShowMegaMenu(false);
    }

    return (
        <header className={style.container + " " + style[sticky ? 'sticky' : ""]}>
            {
                // showMegaMenu ?
                    
                //     :
                    <>
                        <MegaMenu
                            handleCloseMegaMenu={handleCloseMegaMenu}
                        />
                        <div className={style.header}>
                            <div className={style.logo}>
                                <img src='https://traya.health/cdn/shop/files/TrayaLogoWhite_250x_73a5d7e5-bd9b-4089-8e81-80249caeac61.webp?v=1662534292&width=200' />
                            </div>
                            <div className={style.links}>
                                <Button />
                                <a href='/'>
                                    <img src='https://cdn.shopify.com/s/files/1/0100/1622/7394/files/whatsapp-logo_75x.png' />
                                </a>
                                <a href=''>
                                    <svg height="26" viewBox="0 0 32 32" width="26" xmlns="http://www.w3.org/2000/svg"><g id="_x31_8"><path d="m25 17c.3544922 0 .6816406-.1875.8613281-.4921875.6914063-1.1738281 4.1386719-7.1455078 4.1386719-9.5078125 0-2.7568359-2.2431641-5-5-5s-5 2.2431641-5 5c0 2.3623047 3.4472656 8.3339844 4.1386719 9.5078125.1796875.3046875.5068359.4921875.8613281.4921875zm-2-10c0-1.1025391.8974609-2 2-2s2 .8974609 2 2-.8974609 2-2 2-2-.8974609-2-2z"></path><path d="m2 24c0 .3925781.2290039.7480469.5864258.9101563l10.9135742 5.0898437v-12.6799927l-11.5-5.3076782z"></path><path d="m23.2773438 17.015625c-.4242554-.7203369-1.0343018-1.7874756-1.6610718-2.9799194l-7.116272 3.2843017v12.6799927l10.9140625-5.0898438c.3564453-.1621093.5859375-.5175781.5859375-.9101562v-6.2712402c-.3001709.173706-.644104.2712402-1 .2712402-.7041016 0-1.3642578-.3769531-1.7226562-.984375z"></path><path d="m19.1824951 8.2574463-4.7689209-2.1676025c-.2626953-.1191406-.5644531-.1191406-.8271484 0 0 0-11.0543823 5.0366211-11.0830688 5.0532227l11.496643 5.3061523 7.1584473-3.3040161c-.8409424-1.6708985-1.6328125-3.4710084-1.9759522-4.8877564z"></path></g></svg>
                                </a>
                                <a href=''>
                                    <svg width="26" height="26" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.599 3.07093C6.57216 3.07093 4.91384 4.72925 4.91384 6.75609C4.91384 8.78293 6.57216 10.4412 8.599 10.4412C10.6258 10.4412 12.2842 8.78293 12.2842 6.75609C12.2842 4.72925 10.6258 3.07093 8.599 3.07093ZM8.599 9.21286C7.24777 9.21286 6.14223 8.10731 6.14223 6.75609C6.14223 5.40487 7.24777 4.29932 8.599 4.29932C9.95022 4.29932 11.0558 5.40487 11.0558 6.75609C11.0558 8.10731 9.95022 9.21286 8.599 9.21286Z" fill="#fff"></path>
                                        <path d="M8.5987 0C3.83888 0 0 3.83888 0 8.5987C0 10.9326 0.951999 13.0823 2.45677 14.6178C2.82529 14.9863 3.22451 15.3241 3.68516 15.6312C5.06709 16.6139 6.75612 17.1667 8.5987 17.1667C10.4413 17.1667 12.1301 16.5832 13.5122 15.6312C13.9422 15.3241 14.3414 14.9863 14.7406 14.6178C16.2761 13.0516 17.1974 10.9326 17.1974 8.5987C17.1974 3.83888 13.3585 0 8.5987 0ZM8.5987 15.969C6.75612 15.969 5.0978 15.2934 3.80799 14.1879C4.1458 13.0823 5.15922 12.2839 6.35689 12.2839H10.871C12.0687 12.2839 13.0821 13.0823 13.4199 14.1879C12.0994 15.2934 10.4411 15.969 8.59835 15.969H8.5987ZM14.3412 13.2051C13.6963 11.9153 12.3758 11.0555 10.871 11.0555H6.35689C4.82141 11.0555 3.5009 11.946 2.88671 13.2051C1.84258 11.946 1.22839 10.3491 1.22839 8.5987C1.22839 4.54503 4.54503 1.22839 8.5987 1.22839C12.6524 1.22839 15.969 4.54503 15.969 8.5987C15.969 10.3491 15.3548 11.946 14.3414 13.2051H14.3412Z" fill="#fff"></path>
                                    </svg>
                                </a>
                                <a href=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25.489" height="22.416" viewBox="0 0 36.489 33.416">
                                        <defs>
                                        </defs>
                                        <g id="shopping-cart" transform="translate(0.15 0.15)">
                                            <g id="Group_123" data-name="Group 123" transform="translate(24.138 24.092)">
                                                <g id="Group_122" data-name="Group 122" transform="translate(0 0)">
                                                    <path id="Path_113" data-name="Path 113" className="cls-1" d="M346.059,362.612a4.512,4.512,0,1,0,4.512,4.512A4.517,4.517,0,0,0,346.059,362.612Zm0,6.316a1.8,1.8,0,1,1,1.8-1.8A1.806,1.806,0,0,1,346.059,368.928Z" transform="translate(-341.547 -362.612)"></path>
                                                </g>
                                            </g>
                                            <g id="Group_125" data-name="Group 125">
                                                <g id="Group_124" data-name="Group 124" transform="translate(0 0)">
                                                    <path id="Path_114" data-name="Path 114" className="cls-1" d="M35.9,28.36a1.352,1.352,0,0,0-1.066-.519H8.355l-1.218-5.1A1.354,1.354,0,0,0,5.82,21.7H1.354a1.353,1.353,0,1,0,0,2.707h3.4l4.4,18.406a1.354,1.354,0,0,0,1.317,1.039h21.07a1.353,1.353,0,0,0,1.314-1.028l3.294-13.31A1.356,1.356,0,0,0,35.9,28.36ZM30.478,41.15H11.535L9,30.548H33.1Z" transform="translate(0 -21.705)"></path>
                                                </g>
                                            </g>
                                            <g id="Group_127" data-name="Group 127" transform="translate(7.76 24.092)">
                                                <g id="Group_126" data-name="Group 126" transform="translate(0 0)">
                                                    <path id="Path_115" data-name="Path 115" className="cls-1" d="M114.318,362.612a4.512,4.512,0,1,0,4.512,4.512A4.517,4.517,0,0,0,114.318,362.612Zm0,6.316a1.8,1.8,0,1,1,1.8-1.8A1.806,1.806,0,0,1,114.318,368.928Z" transform="translate(-109.806 -362.612)"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                                <a href='' onClick={handleMegaMenu}>
                                    <img alt="3bar-white" src="//cdn.shopify.com/s/files/1/0100/1622/7394/t/198/assets/3bar-white.svg?v=79131991471393817451657781795" width="40" height="22" className="icon-hamburger" />
                                </a>
                            </div>
                        </div>
                    </>
            }
        </header>
    )
}

export default Header;