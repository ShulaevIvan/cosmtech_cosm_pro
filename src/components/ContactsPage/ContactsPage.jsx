import React from "react";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import { Link } from "react-router-dom";
import telegramLogo from '../../img/telegram_footer.svg'
import whatsappLogo from '../../img/whatsapp_footer.svg'
import vkLogo from '../../img/vk_footer.svg'

const ContactsPage = () => {
    return (
        <React.Fragment>
            <InnerPageHeader />
            <div className="inner-page-main-wrapper">
            <div className="inner-page-container-contacts">
                <section>
                    <div className="container">
                        <div className="contact-page-main-contacts-row">
                            <div className="contacts-content-wrap">
                                <div className="contact-list-content">
                                    <h3>Производство</h3>
                                    <ul>
                                        <li><span>Телефон:</span> <Link href="#">+7 (812) XXX-XX-XX</Link></li>
                                        <li><span>Email:</span> <Link href="#">test@mail.ru</Link></li>
                                    </ul>
                                    <ul>
                                        <li className="contact-list-social">
                                            <span>
                                                <Link href="#"><img src={whatsappLogo} alt="social" /></Link>
                                            </span>  <Link href="#">+7 (921)-XXX-XX-XX</Link>
                                        </li>
                                        <li className="contact-list-social">
                                            <span>
                                                <Link href="#"><img src={telegramLogo} alt="social" /></Link>
                                            </span>  
                                            <a href="#">+7 (921)-XXX-XX-XX</a>
                                        </li>
                                        <li className="contact-list-social">
                                            <span><Link href="#"><img src={vkLogo} alt="social" /></Link></span>
                                            <a href="#">Группа Вконтакте</a>
                                                
                                        </li>
                                    </ul>
                                </div>

                                <div className="contact-list-content">
                                    <h3>Реквизиты</h3>
                                    <div className="req-list-wrap">
                                        <ul>
                                            <li><span className="req-list-name">Полное наименование :</span> Общество с ограниченной ответственностью «КОСМЕТИЧЕСКИЕ ТЕХНОЛОГИИ»</li>
                                            <li><span className="req-list-name">ИНН:</span> 7816737360</li>
                                            <li><span className="req-list-name">КПП:</span> 781601001</li>
                                            <li><span className="req-list-name">ОГРН:</span> 1227800166880</li>
                                            <li><span className="req-list-name">БИК:</span> 044030653</li>
                                            <li><span className="req-list-name">Юридический Адрес:</span> 192102, г. Санкт-Петербург, вн. тер. г. Муниципальный округ Волковское, ул. Салова д.27, литера АБ, помещ. 24Н-4, офис 1
                                            </li>
                                            <li><span className="req-list-name">Наименование банка:</span> СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК</li>
                                            <li><span className="req-list-name">Расчетный счет:</span> 40702810355000000126</li>
                                            <li><span className="req-list-name">Корреспондентский счет:</span> 40702810355000000126</li>
                                        </ul>
                                    </div>
                                    <Link href="#">Скачать полные реквизиты</Link>
                                </div>
                            </div>

                            <div className="contacts-form-wrap">
                                <div className="contact-page-form-wrap">
                                    <form>
                                        <div className="contact-page-form-row">
                                            <div className="contact-page-input-wrap-left">
                                                <div className="contact-page-input-left-title">Имя</div>
                                                <div className="contact-page-input-left">
                                                    <input type="text" />
                                                </div>
                                            </div>

                                            <div className="contact-page-input-wrap-right">
                                                <div className="contact-page-input-left-title">
                                                    <label for="req-type">Тип обращения</label>
                                                </div>
                                                <select id="req-type">
                                                    <option value="">--Тип обращения--</option>
                                                    <option value="">--Тип обращения--</option>
                                                    <option value="">--Тип обращения--</option>
                                                    <option value="">--Тип обращения--</option>
                                                    <option value="">--Тип обращения--</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="contact-page-form-row">
                                            <div className="contact-page-input-wrap-left">
                                                <div className="contact-page-input-left-title">Телефон</div>
                                                <div className="contact-page-input-left">
                                                    <input type="tel" />
                                                </div>
                                            </div>

                                            <div className="contact-page-input-wrap-right">
                                                <div className="contact-page-input-right-title">
                                                    <label>Ваш Город</label>
                                                </div>
                                                <input type="text" />
                                            </div>
                                        </div>

                                        <div className="contact-page-form-row">
                                            <div className="contact-page-input-wrap-left">
                                                <div className="contact-page-input-left-title">Email</div>
                                                <div className="contact-page-input-left">
                                                    <input type="text" />
                                                </div>
                                            </div>

                                            <div className="contact-page-input-wrap-right">
                                                <div className="contact-page-input-right-title">
                                                    <label>Предпочтительный способ связи</label>
                                                </div>

                                                <fieldset className="contact-page-radioset-wrap">
                                                        
                                                    <div className="contact-page-radioset-item">
                                                        <input type="radio" id="phone" name="radio" value="Телефон" checked />
                                                        <label for="phone">Телефон</label>
                                                    </div>
                                                      
                                                    <div className="contact-page-radioset-item">
                                                        <input type="radio" id="email" name="radio" value="Email" />
                                                        <label for="email">Email</label>
                                                    </div>
                                                      
                                                    <div className="contact-page-radioset-item">
                                                        <input type="radio" id="msg" name="radio" value="Telegram" />
                                                        <label for="msg">Мессанджеры</label>
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>

                                        <div className="contact-contact-page-form-file-input">
                                            <label>Прикрепить файл</label>
                                            <input type="file" />
                                        </div>

                                        <div className="contact-page-form-full-row">
                                            <div className="contact-page-input-left-title">Комментарий</div>
                                            <div className="contact-page-input-textarea-wrap">
                                                <textarea></textarea>
                                            </div>
                                        </div>

                                        <div className="contact-page-form-btns-row">
                                            <div className="contact-page-form-checkbox-wrap">
                                                <input type="checkbox" id="checkbox-custom-hero-form-policy" className="checkbox-custom-hero-form-policy" />
                                                <label for="checkbox-custom-hero-form-policy"></label>
                                                <span className="contact-page-form-checkbox-description">
                                                    Рыбатекст используется дизайнерами, проектировщиками и фронтендерами. 
                                                </span>
                                            </div>
                                            <div className="contact-page-form-btn-wrap">
                                                <span className="contact-page-form-btn-send">Отправить</span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="contact-page-map-title">
                            <h2>Мы на карте</h2>
                            <div className="contact-page-map-description">
                                <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, 
                                    когда нужно быстро заполнить макеты или прототипы содержимым. 
                                    Это тестовый контент, который не должен нести никакого смысла, 
                                    лишь показать наличие самого текста или продемонстрировать типографику в деле.
                                </p>
                            </div>
                        </div>
                            
                        <div className="map-wrap">
                            <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9a3094a0d3acf49f8de23d10b6f24ef1ff95d76a1cce0e8e7f9ed4255f854a32&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </React.Fragment>
    )
};

export default ContactsPage;