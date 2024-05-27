import React from "react";
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
                        <div className="logo-wrap"><a href="index.html"><img src={mainLogoIcon}  alt="logo"/></a></div>
                        <div className="main-nav-wrap">
                            <nav className="main-nav">
                                <ul className="main-nav-list">
                                    <li><a href="index.html">Контрактное производство</a></li>
                                    <li><a href="services.html">Услуги</a></li>
                                    <li><a href="about.html">О Нас</a></li>
                                    <li><a href="contacts.html">Контакты</a></li>
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