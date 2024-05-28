import React from "react";
import { Link } from "react-router-dom";
import callbackIcon from '../../img/callback.svg';
import sendmailIcon from '../../img/send_mail.svg';
import mainLogoIcon from '../../img/logo_cosm.jpeg';
import mainLogoMinIcon from '../../img/logo_cosm.png';
import MobileMenu from "../MobileMenu/MobileMenu";


const Header = () => {
    return (
        <React.Fragment>
            <header className="main-header">
                <MobileMenu logo={mainLogoMinIcon}  />
                <div className="container-center-header">
                    <div className="main-header-row">
                        <div className="logo-wrap"><Link to={'/'}><img src={mainLogoIcon}  alt="logo"/></Link></div>
                        <div className="main-nav-wrap">
                            <nav className="main-nav">
                                <ul className="main-nav-list">
                                    <li><Link to={'/'}>Контрактное производство</Link></li>
                                    <li><Link to={'/services'}>Услуги</Link></li>
                                    <li><Link to={'/about'}>О Нас</Link></li>
                                    <li><Link to={'/contacts'}>Контакты</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="contacts-header-row">
                            <div className="callback-btn-wrap">
                                <span className="callback-btn">Консультация</span>
                                <span className="header-worktime">пн-пт с 10:00 - 18:00</span>
                            </div>
                            <div class="callback-wrap">
                                <span className="callback-icon"><img src={callbackIcon} alt="callback-icon" class="filter-green" /></span>
                                <span><a href="#">+7 (812) XXX-XX-XX</a></span>
                            </div>
                            <div class="email-wrap">
                                <span className="email-icon"><img src={sendmailIcon} alt="callback-icon" /></span>
                                <span><a href="#">test@cosmtech.ru</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
};

export default Header;