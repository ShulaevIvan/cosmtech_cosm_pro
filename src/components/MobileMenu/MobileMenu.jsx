import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { mobileMenuActive } from "../../redux/slices/menuSlice";
import telegramIcon from '../../img/telegram-mobile.svg';
import whatsappIcon from '../../img/whatsapp-mobile.svg';
import vkIcon from '../../img/vk-mobile.svg'

const MobileMenu = (props) => {
    const dispatch = useDispatch();
    const mobileMenuState = useSelector((state) => state.menu);
    const mobileMenuHandler = (status) => {
        dispatch(mobileMenuActive({status: status}));
    };

    return (
        <React.Fragment>
            <div className="mobile-menu">
                <div className="container-mobile">

                    <div className="content-mobile">
                        <nav role="navigation-mobile">
                            <div id="menuToggle-mobile" onClick={() => mobileMenuHandler(mobileMenuState.mobileMenuActive ? false : true)}>
                                <span></span>
                                <span></span>
                                <span></span>
                                {mobileMenuState.mobileMenuActive ?
                                    <ul id="menu-mobile">
                                    <li><Link to={'/'}>Контрактное производство</Link></li>
                                    <li><Link to={'/services'}>Услуги</Link></li>
                                    <li><Link to={'/about'}>О Нас</Link></li>
                                    <li><Link to={'/forclients'}>Клиентам</Link></li>
                                    <li><Link to={'/contacts'}>Контакты</Link></li>
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
                    </div>

                    <div className="contacts-row">
                        <div className="contact-phone-mobile-wrap">
                            <Link to={'tel:+78123630614'}>+7 (812) 363-06-14</Link>
                        </div>
                        <div className="contact-email-mobile-wrap">
                            <Link to={'mailto:pro@cosmtech.ru&amp;body=text?subject=Вопрос'}>pro@cosmtech.ru</Link>
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