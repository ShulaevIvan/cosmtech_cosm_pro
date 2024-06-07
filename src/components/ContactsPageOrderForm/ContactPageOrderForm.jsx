import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";

import { validateContactsInput } from "../../redux/slices/innerPageSlice";

const ContactsPageOrderForm = () => {
    const dispatch = useDispatch();
    const orderFormState = useSelector((state) => state.innerPage.contacts);
    const contactsRefs = {
        name: useRef(null),
        phone: useRef(null),
        email: useRef(null),
        orderType: useRef(null),
        city: useRef(null),
        callOption: {
            telegram: useRef(null),
            whatsapp: useRef(null),
            mail: useRef(null),
        },
        file: useRef(null),
        comment: useRef(null)
    };

    const contactInputHandler = (inputType, social) => {
        if (social) {
            // dispatch(validateContactsInput({inputType: inputType, inputValue: contactsRefs[inputType][social].current.value }));
            return;
        }
        dispatch(validateContactsInput({inputType: inputType, inputValue: contactsRefs[inputType].current.value }));
    };

    return (
        <React.Fragment>
            <div className="contacts-form-wrap">
                <div className="contact-page-form-wrap">
                    <form>
                        <div className="contact-page-form-row">
                            <div className="contact-page-input-wrap-left">
                                <div className="contact-page-input-left-title">
                                    <label htmlFor="contact-page-form-name">Имя</label>
                                </div>
                                <div className="contact-page-input-left">
                                    <input 
                                        onChange={() => contactInputHandler('name')} 
                                        ref={contactsRefs.name} 
                                        id='contact-page-form-name' 
                                        type="text" 
                                    />
                                </div>
                            </div>

                            <div className="contact-page-input-wrap-right">
                                <div className="contact-page-input-left-title">
                                    <label htmlFor="req-type">Тип обращения</label>
                                </div>
                                <select
                                    ref={contactsRefs.orderType} 
                                    id="req-type"
                                    onChange={() => contactInputHandler('orderType')} 
                                >
                                    <option selected value="--Тип обращения 1--">--Тип обращения 1--</option>
                                    <option value="--Тип обращения 2--">--Тип обращения 2--</option>
                                    <option value="--Тип обращения 3--">--Тип обращения 3--</option>
                                    <option value="--Тип обращения 4--">--Тип обращения 4--</option>
                                    <option value="--Тип обращения 5--">--Тип обращения 5--</option>
                                </select>
                            </div>
                        </div>

                        <div className="contact-page-form-row">
                            <div className="contact-page-input-wrap-left">
                            <div className="contact-page-input-left-title">
                                <label htmlFor="contact-page-form-phone">Телефон</label>
                            </div>
                                <div className="contact-page-input-left">
                                    <input
                                        ref={contactsRefs.phone}  
                                        id="contact-page-form-phone" 
                                        type="tel"
                                        onChange={() => contactInputHandler('phone')} 

                                    />
                                </div>
                            </div>

                            <div className="contact-page-input-wrap-right">
                                <div className="contact-page-input-right-title">
                                    <label htmlFor="contact-page-form-city">Ваш Город</label>
                                </div>
                                <input
                                    ref={contactsRefs.city} 
                                    id="contact-page-form-city" 
                                    type="text"
                                    onChange={() => contactInputHandler('city')}  
                                />
                            </div>
                        </div>

                        <div className="contact-page-form-row">
                            <div className="contact-page-input-wrap-left">
                                <div className="contact-page-input-left-title">
                                    <label htmlFor="contact-page-form-email">Email</label>
                                </div>
                                <div className="contact-page-input-left">
                                    <input
                                        ref={contactsRefs.email}  
                                        id="contact-page-form-email" 
                                        type="text"
                                        onChange={() => contactInputHandler('email')} 
                                    />
                                </div>
                            </div>

                            <div className="contact-page-input-wrap-right">
                                <div className="contact-page-input-right-title">
                                    <label>Предпочтительный способ связи</label>
                                </div>

                                <fieldset className="contact-page-radioset-wrap">
                                            
                                    <div className="contact-page-radioset-item">
                                        <input 
                                            ref={contactsRefs.callOption.whatsapp}
                                            onChange={() => contactInputHandler('callOption', 'whatsapp')} 
                                            type="radio" 
                                            id="phone" 
                                            name="radio" 
                                            value="Телефон" 
                                        />
                                        <label htmlFor="phone">Телефон</label>
                                    </div>
                                                      
                                    <div className="contact-page-radioset-item">
                                        <input 
                                            ref={contactsRefs.callOption.mail}
                                            onChange={() => contactInputHandler('callOption', 'mail')}  
                                            type="radio" 
                                            id="email" 
                                            name="radio" 
                                            value="Email" 
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                                      
                                    <div className="contact-page-radioset-item">
                                        <input 
                                            ref={contactsRefs.callOption.telegram}
                                            onChange={() => contactInputHandler('callOption', 'telegram')}  
                                            type="radio" 
                                            id="msg" 
                                            name="radio" 
                                            value="Telegram" 
                                        />
                                        <label htmlFor="msg">Мессанджеры</label>
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        <div className="contact-contact-page-form-file-input">
                            <label htmlFor="contact-page-form-file">Прикрепить файл</label>
                            <input 
                                id="contact-page-form-file" 
                                type="file" 
                            />
                        </div>

                        <div className="contact-page-form-full-row">
                            <div className="contact-page-input-left-title">
                                <label htmlFor="contact-page-form-comment">Комментарий</label>
                            </div>
                            <div className="contact-page-input-textarea-wrap">
                                <textarea id="contact-page-form-comment"></textarea>
                            </div>
                        </div>

                        <div className="contact-page-form-btns-row">
                            <div className="contact-page-form-checkbox-wrap">
                                <input type="checkbox" id="checkbox-custom-hero-form-policy" className="checkbox-custom-hero-form-policy" />
                                <label htmlFor="checkbox-custom-hero-form-policy"></label>
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