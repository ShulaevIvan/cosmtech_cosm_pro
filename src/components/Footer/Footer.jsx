import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import footerLogo from '../../img/logo_cosm.jpeg';
import telegramLogo from '../../img/telegram_footer.svg';
import whatsappLogo from '../../img/whatsapp_footer.svg';
import vkLogo from '../../img/vk_footer.svg';

import { goToTop } from "../../redux/slices/footerSlice";
import GoToTop from "../GoToTopBtn/GoToTopBtn";

const Footer = () => {
    const dispatch = useDispatch();
    const footerState = useSelector((state) => state.footer);

    const goToTopHandler = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <React.Fragment>
            <footer className="main-footer">
                <div className="footer-wrap">
                    <div className="main-footer-top-row">
                        <div className="main-footer-logo">
                            <div className="footer-logo-social-row">
                                <div className="footer-logo">
                                    <Link to={'/'}><img src={footerLogo} alt="logo footer" /></Link>
                                </div>
                            <div className="footer-socials-row">
                                <div className="social-item"><a href="#"><img src={telegramLogo}  alt="telegram logo"/></a></div>
                                <div className="social-item whatsapp-footer-icon"><a href="#"><img src={whatsappLogo}  alt="whatsapp logo"/></a></div>
                                <div className="social-item"><a href="#"><img src={vkLogo}  alt="vk logo"/></a></div>
                            </div>
                        </div>
                
                        <div className="footer-logo-description">
                            <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.</p>
                        </div>
                    </div>
                    <div className="main-footer-form">
                        <form>
                            <div className="main-footer-form-label-wrap"><h5>Перезвоните мне</h5></div>
                            <div className="main-footer-input-wrap">
                                <div className="main-footer-input">
                                    <input type="text" />
                                </div>
                                <div className="main-footer-btn-send-wrap">
                                    <div className="main-footer-btn-send">Отправить</div>
                                </div>
                            </div>
                            <div className="main-footer-description-wrap">
                                <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.</p>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="main-footer-bottom-row">
                    <div className="main-footer-contact-row">
                        <div className="main-footer-contact-title-wrap">
                            <h4>Контакты</h4>
                        </div>
                        <div className="main-footer-contact-list-wrap">
                            <ul>
                                <li>Адрес: Санкт-Петербург ул Салова 27 АБ</li>
                                <li>Телефон: <a href="#">+7 (812) 999-88-77</a></li>
                                <li>email: <a href="#">office@cosmtech.ru</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-footer-contact-row">
                        <div className="main-footer-submenu-list-wrap">
                            <div className="main-footer-submenu-title-wrap">
                                <h4>Услуги</h4>
                            </div>
                            <ul className="main-footer-submenu">
                                <li><a href="#">Производство</a></li>
                                <li><a href="#">Собственная торовая марка</a></li>
                                <li><a href="#">Частные вопросы</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-footer-contact-row">
                        <div className="main-footer-submenu-list-wrap">
                            <div className="main-footer-submenu-title-wrap">
                                <h4>Информация</h4>
                            </div>
                            <ul className="main-footer-submenu">
                                <li><a href="#">О Компании</a></li>
                                <li><a href="#">Реквизиты</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main-footer-copy-wrap">
                    <span className="footer-copy-text">© 2024 ООО Космотех все права защищены</span>
                    <span className="footer-policy-text"><a href="#">Политика конфидициальности</a></span>
                </div>
                </div>
            <GoToTop goToTopHandler={goToTopHandler} />
            </footer>
        </React.Fragment>
    )
};

export default Footer;