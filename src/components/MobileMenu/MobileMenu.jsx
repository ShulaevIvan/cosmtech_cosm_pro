import React from "react";

const MobileMenu = (props) => {
    return (
        <React.Fragment>
            <div className="mobile-menu">
                <div className="container-mobile">

                    <div className="content-mobile">
                        <nav role="navigation-mobile">
                            <div id="menuToggle-mobile">
                                <span></span>
                                <span></span>
                                <span></span>
                                <ul id="menu-mobile">
                                    <li><a href="index.html">Контрактное производство</a></li>
                                    <li><a href="services.html">Услуги</a></li>
                                    <li><a href="about.html">О Нас</a></li>
                                    <li><a href="contacts.html">Контакты</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div className="contacts-row">
                        <div className="contact-phone-mobile-wrap">+7 (812) XXX-XX-XX</div>
                        <div className="contact-email-mobile-wrap">test@cosmtech.ru</div>
                        <div className="mobile-menu-logo-wrap">
                            <img src={props.logo} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default MobileMenu;