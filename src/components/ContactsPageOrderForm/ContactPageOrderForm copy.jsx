import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ContactsPageOrderForm = () => {
    const orderFormState = useSelector((state) => state.innerPage.contacts);
    console.log(orderFormState)
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
};

export default ContactsPageOrderForm;