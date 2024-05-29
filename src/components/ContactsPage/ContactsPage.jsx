import React from "react";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";

const ContactsPage = () => {
    return (
        <React.Fragment>
            <InnerPageHeader />
            <div class="inner-page-main-wrapper">
            <div class="inner-page-container-contacts">
                <section>
                    <div class="container">
                        <div class="contact-page-main-contacts-row">
                            <div class="contacts-content-wrap">
                                <div class="contact-list-content">
                                    <h3>Производство</h3>
                                    <ul>
                                        <li><span>Телефон:</span> <a href="#">+7 (812) XXX-XX-XX</a></li>
                                        <li><span>Email:</span> <a href="#">test@mail.ru</a></li>
                                    </ul>
                                    <ul>
                                        <li class="contact-list-social">
                                            <span>
                                                <a href="#"><img src="./src/img/whatsapp_footer.svg" alt="social" /></a>
                                            </span>  <a href="#">+7 (921)-XXX-XX-XX</a>
                                        </li>
                                        <li class="contact-list-social">
                                            <span>
                                                <a href="#"><img src="./src/img/telegram_footer.svg" alt="social" /></a>
                                            </span>  
                                            <a href="#">+7 (921)-XXX-XX-XX</a>
                                        </li>
                                        <li class="contact-list-social">
                                            <span><a href="#"><img src="./src/img/vk_footer.svg" alt="social" /></a></span>
                                            <a href="#">Группа Вконтакте</a>
                                                
                                        </li>
                                    </ul>
                                </div>

                                <div class="contact-list-content">
                                    <h3>Реквизиты</h3>
                                    <div class="req-list-wrap">
                                        <ul>
                                            <li><span class="req-list-name">Полное наименование :</span> Общество с ограниченной ответственностью «КОСМЕТИЧЕСКИЕ ТЕХНОЛОГИИ»</li>
                                            <li><span class="req-list-name">ИНН:</span> 7816737360</li>
                                            <li><span class="req-list-name">КПП:</span> 781601001</li>
                                            <li><span class="req-list-name">ОГРН:</span> 1227800166880</li>
                                            <li><span class="req-list-name">БИК:</span> 044030653</li>
                                            <li><span class="req-list-name">Юридический Адрес:</span> 192102, г. Санкт-Петербург, вн. тер. г. Муниципальный округ Волковское, ул. Салова д.27, литера АБ, помещ. 24Н-4, офис 1
                                            </li>
                                            <li><span class="req-list-name">Наименование банка:</span> СЕВЕРО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК</li>
                                            <li><span class="req-list-name">Расчетный счет:</span> 40702810355000000126</li>
                                            <li><span class="req-list-name">Корреспондентский счет:</span> 40702810355000000126</li>
                                        </ul>
                                    </div>
                                    <a href="#">Скачать полные реквизиты</a>
                                </div>
                            </div>

                            <div class="contacts-form-wrap">
                                <div class="contact-page-form-wrap">
                                    <form>
                                        <div class="contact-page-form-row">
                                            <div class="contact-page-input-wrap-left">
                                                <div class="contact-page-input-left-title">Имя</div>
                                                <div class="contact-page-input-left">
                                                    <input type="text" />
                                                </div>
                                            </div>

                                            <div class="contact-page-input-wrap-right">
                                                <div class="contact-page-input-left-title">
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

                                        <div class="contact-page-form-row">
                                            <div class="contact-page-input-wrap-left">
                                                <div class="contact-page-input-left-title">Телефон</div>
                                                <div class="contact-page-input-left">
                                                    <input type="tel" />
                                                </div>
                                            </div>

                                            <div class="contact-page-input-wrap-right">
                                                <div class="contact-page-input-right-title">
                                                    <label>Ваш Город</label>
                                                </div>
                                                <input type="text" />
                                            </div>
                                        </div>

                                        <div class="contact-page-form-row">
                                            <div class="contact-page-input-wrap-left">
                                                <div class="contact-page-input-left-title">Email</div>
                                                <div class="contact-page-input-left">
                                                    <input type="text" />
                                                </div>
                                            </div>

                                            <div class="contact-page-input-wrap-right">
                                                <div class="contact-page-input-right-title">
                                                    <label>Предпочтительный способ связи</label>
                                                </div>

                                                <fieldset class="contact-page-radioset-wrap">
                                                        
                                                    <div class="contact-page-radioset-item">
                                                        <input type="radio" id="phone" name="radio" value="Телефон" checked />
                                                        <label for="phone">Телефон</label>
                                                    </div>
                                                      
                                                    <div class="contact-page-radioset-item">
                                                        <input type="radio" id="email" name="radio" value="Email" />
                                                        <label for="email">Email</label>
                                                    </div>
                                                      
                                                    <div class="contact-page-radioset-item">
                                                        <input type="radio" id="msg" name="radio" value="Telegram" />
                                                        <label for="msg">Мессанджеры</label>
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>

                                        <div class="contact-contact-page-form-file-input">
                                            <label>Прикрепить файл</label>
                                            <input type="file" />
                                        </div>

                                        <div class="contact-page-form-full-row">
                                            <div class="contact-page-input-left-title">Комментарий</div>
                                            <div class="contact-page-input-textarea-wrap">
                                                <textarea></textarea>
                                            </div>
                                        </div>

                                        <div class="contact-page-form-btns-row">
                                            <div class="contact-page-form-checkbox-wrap">
                                                <input type="checkbox" id="checkbox-custom-hero-form-policy" class="checkbox-custom-hero-form-policy" />
                                                <label for="checkbox-custom-hero-form-policy"></label>
                                                <span class="contact-page-form-checkbox-description">
                                                    Рыбатекст используется дизайнерами, проектировщиками и фронтендерами. 
                                                </span>
                                            </div>
                                            <div class="contact-page-form-btn-wrap">
                                                <span class="contact-page-form-btn-send">Отправить</span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="container">
                        <div class="contact-page-map-title">
                            <h2>Мы на карте</h2>
                            <div class="contact-page-map-description">
                                <p>Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, 
                                    когда нужно быстро заполнить макеты или прототипы содержимым. 
                                    Это тестовый контент, который не должен нести никакого смысла, 
                                    лишь показать наличие самого текста или продемонстрировать типографику в деле.
                                </p>
                            </div>
                        </div>
                            
                        <div class="map-wrap">
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