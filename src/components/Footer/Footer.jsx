import React from "react";
import { Link } from "react-router-dom";
import footerLogo from '../../img/logo_cosm.jpeg';
import telegramLogo from '../../img/telegram_footer.svg';
import whatsappLogo from '../../img/whatsapp_footer.svg';
import vkLogo from '../../img/vk_footer.svg';
import goTopIcon from '../../img/gototop.svg'

const Footer = () => {
    return (
        <React.Fragment>
            <footer class="main-footer">
                <div class="footer-wrap">
                    <div class="main-footer-top-row">
                        <div class="main-footer-logo">
                            <div class="footer-logo-social-row">
                                <div class="footer-logo">
                                    <Link to={'/'}><img src={footerLogo} alt="logo footer" /></Link>
                                </div>
                            <div class="footer-socials-row">
                                <div class="social-item"><a href="#"><img src={telegramLogo}  alt="telegram logo"/></a></div>
                                <div class="social-item whatsapp-footer-icon"><a href="#"><img src={whatsappLogo}  alt="whatsapp logo"/></a></div>
                                <div class="social-item"><a href="#"><img src={vkLogo}  alt="vk logo"/></a></div>
                            </div>
                        </div>
                
                        <div class="footer-logo-description">
                            <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.</p>
                        </div>
                    </div>
                    <div class="main-footer-form">
                        <form>
                            <div class="main-footer-form-label-wrap"><h5>Перезвоните мне</h5></div>
                            <div class="main-footer-input-wrap">
                                <div class="main-footer-input">
                                    <input type="text" />
                                </div>
                                <div class="main-footer-btn-send-wrap">
                                    <div class="main-footer-btn-send">Отправить</div>
                                </div>
                            </div>
                            <div class="main-footer-description-wrap">
                                <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым.</p>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="main-footer-bottom-row">
                    <div class="main-footer-contact-row">
                        <div class="main-footer-contact-title-wrap">
                            <h4>Контакты</h4>
                        </div>
                        <div class="main-footer-contact-list-wrap">
                            <ul>
                                <li>Адрес: Санкт-Петербург ул Салова 27 АБ</li>
                                <li>Телефон: <a href="#">+7 (812) 999-88-77</a></li>
                                <li>email: <a href="#">office@cosmtech.ru</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="main-footer-contact-row">
                        <div class="main-footer-submenu-list-wrap">
                            <div class="main-footer-submenu-title-wrap">
                                <h4>Услуги</h4>
                            </div>
                            <ul class="main-footer-submenu">
                                <li><a href="#">Производство</a></li>
                                <li><a href="#">Собственная торовая марка</a></li>
                                <li><a href="#">Частные вопросы</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="main-footer-contact-row">
                        <div class="main-footer-submenu-list-wrap">
                            <div class="main-footer-submenu-title-wrap">
                                <h4>Информация</h4>
                            </div>
                            <ul class="main-footer-submenu">
                                <li><a href="#">О Компании</a></li>
                                <li><a href="#">Реквизиты</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="main-footer-copy-wrap">
                    <span class="footer-copy-text">© 2024 ООО Космотех все права защищены</span>
                    <span class="footer-policy-text"><a href="#">Политика конфидициальности</a></span>
                </div>
                </div>
                <span class="gotop-btn"><img src={goTopIcon} alt="gototop"/></span>
            </footer>
        </React.Fragment>
    )
};

export default Footer;