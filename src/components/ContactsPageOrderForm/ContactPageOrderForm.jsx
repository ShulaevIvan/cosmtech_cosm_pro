import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
    validateContactsInput, 
    clearContactsInput,
    selectFieldContactsForm,
    contactsCheckboxPolicy,
    uploadFile
} from "../../redux/slices/innerPageSlice";

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
            phone: useRef(null),
            email: useRef(null),
            msg: useRef(null),
        },
        file: useRef(null),
        comment: useRef(null)
    };

    const contactInputHandler = (inputType) => {
        dispatch(validateContactsInput({inputType: inputType, inputValue: contactsRefs[inputType].current.value }));
    };

    const contactSelectHandler = (inputType, callOption) => {
        if (callOption) {
            dispatch(selectFieldContactsForm({inputType: inputType, optionName: callOption, status: true, inputValue: '' }));
            return
        }

        dispatch(selectFieldContactsForm({
            inputType: inputType, 
            optionName: callOption, 
            status: true, 
            inputValue: contactsRefs[inputType].current.value
        }));
        // dispatch(selectFieldContactsForm({inputType: inputType, optionName, status }))
    };
    
    const findField = (fieldType) => {
        return orderFormState.contactsForm.fields.find((item) => item.fieldName === fieldType);
    };

    const clearInputHandler = (e, inputType) => {
        if (e.key === 'Backspace' && inputType) {
            dispatch(clearContactsInput({inputType: inputType, inputValue: contactsRefs[inputType].current.value}))
        }
    };

    const checkboxPolicyHandler = (status) => {
        dispatch(contactsCheckboxPolicy({status: status}));
    };

    const loadFileHandler = () => {
        dispatch(uploadFile({file: contactsRefs.file.current.value}));
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
                                        className={findField('name').fieldValid ? '' : 'input-err'} 
                                        onChange={() => contactInputHandler('name')}
                                        onKeyDown={(e) => clearInputHandler(e, 'name')}
                                        ref={contactsRefs.name} 
                                        id='contact-page-form-name' 
                                        type="text"
                                        value={findField('name').fieldValue}
                                        placeholder={'Имя'}
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
                                    onChange={(e) => contactSelectHandler('orderType')} 
                                >   
                                    {findField('orderType').options.map((optionItem) => {
                                        return (
                                            <React.Fragment key={optionItem.id}>
                                                <option value={optionItem.value}>{optionItem.name}</option>
                                            </React.Fragment>
                                        )
                                    })}
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
                                        className={findField('phone').fieldValid ? '' : 'input-err'} 
                                        ref={contactsRefs.phone}  
                                        id="contact-page-form-phone" 
                                        type="tel"
                                        value={findField('phone').fieldValue}
                                        onChange={() => contactInputHandler('phone')}
                                        onKeyDown={(e) => clearInputHandler(e, 'phone')}
                                        placeholder={'+7 812 xxx-xx-xx'}

                                    />
                                </div>
                            </div>

                            <div className="contact-page-input-wrap-right">
                                <div className="contact-page-input-right-title">
                                    <label htmlFor="contact-page-form-city">Ваш Город</label>
                                </div>
                                <input
                                    className={findField('city').fieldValid ? '' : 'input-err'} 
                                    onChange={() => contactInputHandler('city')}
                                    onKeyDown={(e) => clearInputHandler(e, 'city')}
                                    ref={contactsRefs.city} 
                                    id="contact-page-form-city" 
                                    type="text"
                                    value={findField('city').fieldValue}
                                    placeholder={'Москва'}
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
                                        className={findField('email').fieldValid ? '' : 'input-err'} 
                                        onChange={() => contactInputHandler('email')}
                                        onKeyDown={(e) => clearInputHandler(e, 'email')}
                                        ref={contactsRefs.email}  
                                        id="contact-page-form-email" 
                                        type="text"
                                        placeholder={'test@yandex.ru'}
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
                                            ref={contactsRefs.callOption.phone}
                                            onChange={() => contactSelectHandler('callOption', 'phone')} 
                                            type="radio" 
                                            id="phone" 
                                            name="radio" 
                                            value="Телефон"
                                        />
                                        <label htmlFor="phone">Телефон</label>
                                    </div>
                                                      
                                    <div className="contact-page-radioset-item">
                                        <input 
                                            ref={contactsRefs.callOption.email}
                                            onChange={() => contactSelectHandler('callOption', 'email')}  
                                            type="radio" 
                                            id="email" 
                                            name="radio" 
                                            value="Email"
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                                      
                                    <div className="contact-page-radioset-item">
                                        <input 
                                            ref={contactsRefs.callOption.msg}
                                            onChange={() => contactSelectHandler('callOption', 'msg')}  
                                            type="radio" 
                                            id="msg" 
                                            name="radio" 
                                            value="Мессанджеры" 
                                        />
                                        <label htmlFor="msg">Мессанджеры</label>
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        <div className="contact-contact-page-form-file-input">
                            <label className="input-file">
	   	                        <span className="input-file-text" type="text"></span>
	   	                            <input
                                        ref={contactsRefs.file} 
                                        type="file" 
                                        name="file"
                                        onChange={loadFileHandler}
                                    />        
 	   	                            <span className="input-file-btn">Прикрепить файл</span>
 	                        </label>
                            <div className="contact-page-form-file file-loaded">
                                {contactsRefs.file.current ? contactsRefs.file.current.value : null}
                            </div>
                        </div>

                        <div className="contact-page-form-full-row">
                            <div className="contact-page-input-left-title">
                                <label htmlFor="contact-page-form-comment">Комментарий</label>
                            </div>
                            <div className="contact-page-input-textarea-wrap">
                                <textarea
                                    className={findField('comment').fieldValid ? '' : 'input-err'} 
                                    onChange={() => contactInputHandler('comment')}
                                    onKeyDown={(e) => clearInputHandler(e, 'comment')}
                                    ref={contactsRefs.comment}
                                    value={findField('comment').fieldValue}
                                    placeholder={'Комментарий...'}
                                    id="contact-page-form-comment"
                                ></textarea>
                            </div>
                        </div>

                        <div className="contact-page-form-btns-row">
                            <div className="contact-page-form-checkbox-wrap">
                                <input type="checkbox" id="checkbox-custom-hero-form-policy" className="checkbox-custom-hero-form-policy" />
                                <label 
                                    htmlFor="checkbox-custom-hero-form-policy"
                                    onClick={() => checkboxPolicyHandler(orderFormState.contactsForm.checkboxPolicyStatus ? false : true)}
                                ></label>
                                <span className="contact-page-form-checkbox-description">
                                    согласен с <Link target={'_blank'} to={'/about/policy'}>политикой конфидициальности</Link>
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