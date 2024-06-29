import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
    validateContactsInput, 
    clearContactsInput,
    selectFieldContactsForm,
    contactsCheckboxPolicy,
    uploadFile,
    contactsAddFiles,
    contactsSendBtnActive,
    sendContactUsOrder
} from "../../redux/slices/innerPageSlice";
import fileToBase64 from "../../functions/fileToBase64";

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
        const orderName = orderFormState.contactsForm.fields[1].options.find((item) => item.value === contactsRefs[inputType].current.value);

        dispatch(selectFieldContactsForm({
            inputType: inputType, 
            optionName: callOption, 
            orderName: orderName ? orderName.name : '', 
            inputValue: contactsRefs[inputType].current.value
        }));
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
        dispatch(uploadFile({status: true}));
    };

    const sendFormHandler = () => {
        const data = orderFormState.contactsForm.fields.reduce((fieldObj, item) => {
            if (item.fieldName === 'orderType') {
                const selectedOrder = item.options.find((orderItem) => orderItem.selected);
                console.log(item.options)
                fieldObj['orderType'] = selectedOrder ? selectedOrder.name : '';
                return fieldObj;
            }
            if (item.fieldName === 'callOption') {
                const selectedOption = item.options.find((optionItem) => optionItem.selected);
                fieldObj[item.fieldName] = selectedOption ? selectedOption.name : '';
                return fieldObj;
            }
            fieldObj[item.fieldName] = item.fieldValue;
            return fieldObj;
        }, {});
        data.file = orderFormState.contactsForm.contactFormFileUpload;
        dispatch(sendContactUsOrder(data));
    };
    const getFileNames = () => {
        const names = Object.entries(contactsRefs.file.current.files).map((item, i) => {
            if (item[1]) return {id: i, fileName: item[1].name};
        });
        return names;
    };

    useEffect(() => {
        if (contactsRefs.file.current.files && contactsRefs.file.current.files.length > 0) {
            const promises = Object.entries(contactsRefs.file.current.files).map((fileItem, i) => {
                const filePromise = fileToBase64(fileItem[1]);
                return filePromise;
            });
            if (orderFormState.contactsForm.contactFormFileUpload.length !== contactsRefs.file.current.files.length) {
                Promise.all(promises).then((data) => {
                    dispatch(contactsAddFiles({files: data}));
                });
            }
        }
        dispatch(contactsSendBtnActive());
        
    }, [orderFormState.contactsForm, orderFormState.contactsForm.filesLoaded]);

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
                                        autoComplete={'off'}
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
                                                <option value={optionItem.value}>{optionItem.value}</option>
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
                                        placeholder={'8 xxx xxx xx xx'}
                                        autoComplete={'off'}
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
                                    autoComplete={'off'}
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
                                        placeholder={'demo@......ru'}
                                        autoComplete={'off'}
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
                                            autoComplete={'off'}
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
                                            autoComplete={'off'}
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
                                            autoComplete={'off'}
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
                                        multiple={true}
                                    />        
 	   	                            <span className="input-file-btn">Прикрепить файл</span>
 	                        </label>
                            <div className="contact-page-form-file file-loaded">
                                {contactsRefs.file.current ? getFileNames().map((item) => {
                                    return (
                                        <React.Fragment key={item.id}>
                                            <div>{item.fileName}</div>
                                        </React.Fragment>
                                    )
                                }) : null}
                                <div>{orderFormState.contactsForm.contactFormFileUpload.length ? 
                                    `Количество файлов:${orderFormState.contactsForm.contactFormFileUpload.length}`: null}
                                </div>
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
                                <span
                                    className={orderFormState.contactsForm.sendBtnActive ? 
                                        "contact-page-form-btn-send": "contact-page-form-btn-send btnDisabled"
                                    }
                                    onClick={sendFormHandler}
                                >Отправить</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ContactsPageOrderForm;