import React from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { mobileMenuActive } from "../../redux/slices/menuSlice";
import telegramIcon from '../../img/telegram-mobile.svg';
import whatsappIcon from '../../img/whatsapp-mobile.svg';
import vkIcon from '../../img/vk-mobile.svg'

import { 
    submenuActive,
    resetMenu 
} from '../../redux/slices/menuSlice';

const MobileMenu = (props) => {
    const dispatch = useDispatch();
    const mobileMenuState = useSelector((state) => state.menu);

    const mobileMenuHandler = (status) => {
        dispatch(mobileMenuActive({status: status}));
    };

    const submenuHandler = (menuId, menuName) => {
        dispatch(submenuActive({menuId: menuId, menuName: menuName}))
    };

    const closeSubmenuHandler = () => {
        dispatch(resetMenu());
    };

    useEffect(() => {
        dispatch(mobileMenuActive({status: false}));
    }, [window.location.pathname]);

    return (
        <React.Fragment>
            <div className="mobile-menu">
                <div className="container-mobile">

                    <div className="content-mobile">
                        <nav role="navigation-mobile">
                            <div id="menuToggle-mobile">
                                <div
                                    className="menuToggle-" 
                                    onClick={() => mobileMenuHandler(mobileMenuState.mobileMenuActive ? false : true)}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                              
                                {mobileMenuState.mobileMenuActive ?
                                    <ul id="menu-mobile">
                                        {mobileMenuState.mainMenu.menuItems.map((menuItem) => {
                                            return (
                                                <React.Fragment key={menuItem.id}>
                                                    <li 
                                                        className={menuItem.submenu ? 'mobile-menu-item-has-submenu': null}
                                                        onClick={menuItem.submenu && !menuItem.submenu.active ? 
                                                            () => submenuHandler(menuItem.id, menuItem.name) : closeSubmenuHandler}
                                                    >
                                                        <Link to={menuItem.url}>{menuItem.name}</Link>
                                                        {menuItem.submenu.active ? 
                                                            <ul className="mobile-menu-submenu">
                                                                {menuItem.submenu.menuItems.map((submenuItem) => {
                                                                    return (
                                                                        <React.Fragment key={submenuItem.id}>
                                                                            <li><Link to={submenuItem.url}>{submenuItem.name}</Link></li>
                                                                        </React.Fragment>
                                                                    )
                                                                })}
                                                            </ul>
                                                        : null}
                                                    </li>
                                                </React.Fragment>
                                            )
                                        })}
                                        <li id="mobile-footer-links-wrap">
                                            <ul id="mobile-footer-links-menu">
                                                {mobileMenuState.footerMenu.menuItems.map((menuItem) => {
                                                return (
                                                    <React.Fragment key={menuItem.id}>
                                                        <li><Link to={menuItem.url}>{menuItem.name}</Link></li>
                                                    </React.Fragment>
                                                )
                                            })}
                                            </ul>
                                        </li>
                                        
                                    <li id="mobile-contacts-wrap-li">
                                        <div className="mobile-contacts-wrap">
                                            <div className="mobile-contacts-email">
                                                <div className="mobile-email-item">
                                                    <Link 
                                                        to={'mailto:pro@cosmtech.ru&amp;body=text?subject=Вопрос'} 
                                                        target={'_blank'}
                                                    >pro@cosmtech.ru</Link>
                                                </div>
                                            </div>
                                            <div className="mobile-contacts-row">
                                                <div className="mobile-social-item">
                                                    <Link to={'https://t.me/+79643637272'} target={'_blank'}>
                                                        <img src={telegramIcon} alt="send_telegram" />
                                                    </Link>
                                                </div>
                                                <div className="mobile-social-item">
                                                    <Link to={'https://wa.me/+79643637272'} target={'_blank'}>
                                                        <img className="mobile-social-item-whatsapp" src={whatsappIcon} alt="send_whatsapp" />
                                                    </Link>
                                                </div>
                                                <div className="mobile-social-item">
                                                    <Link to={'https://vk.com/cosmtech'} target={'_blank'}>
                                                        <img src={vkIcon} alt="vk group" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                
                                : null}
                                
                            </div>
                        </nav>
                        <div className="contacts-row">
                            <div className="contact-item-mobile"><Link to={'tel:+78123630614'}>+7 (812) 363-06-14</Link></div>
                            <div className="contact-item-mobile social">
                                {mobileMenuState.mobileHeader.icons.map((iconItem) => {
                                    return (
                                        <Link key={iconItem.id} to={iconItem.url} target={'_blank'}><img src={iconItem.img} alt={iconItem.imgAlt} /></Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="mobile-menu-logo-wrap">
                            <Link to={'/'}><img src={props.logo} alt="cosm_tech_mobile_logo" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default MobileMenu;