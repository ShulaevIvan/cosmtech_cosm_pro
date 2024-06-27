import React, { useEffect } from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { 
    validateServiceFormMainPage, 
    serviceFormMainPageClearInput,
    serviceFormSendBtnActive,
    sendOrderThunkServiceMainPage
} from "../../redux/slices/mainPageSlice";

import ServiceMainPagePopupHappy from "./ServiceMainPagePopupHappy";

const ServicesMainPagePopup = (props) => {
    const dispatch = useDispatch();
    const serviceState = props.serviceState;
    const formRefs = [
        { name: 'name', ref: useRef(null)},
        { name: 'phone', ref: useRef(null)},
        { name: 'email', ref: useRef(null)},
        { name: 'options', ref: useRef(null)},
        { name: 'comment', ref: useRef(null)},
    ];

    const formInputHandler = (fieldName, targetRef) => {
        dispatch(validateServiceFormMainPage({fieldType: fieldName, fieldValue: targetRef.current.value}));
    };

    const clearFormInput = (e, fieldName) => {
        if (e.key === 'Backspace') {
            dispatch(serviceFormMainPageClearInput({fieldType: fieldName}));
        }
    };
    
    const findFormRef = (inputName) => {
        return formRefs.find((item) => item.name === inputName).ref;
    };
    
    const sendFormHandler = () => {
        const data = formRefs.reduce((obj, item) => {
            obj[item.name] = item.ref.current.value;
            return obj;
        }, {});
        dispatch(sendOrderThunkServiceMainPage(data));
    };

    useEffect(() => {
        dispatch(serviceFormSendBtnActive());
    }, [serviceState.servicePopupForm.formFields])

    useEffect(() => {
        const optionsObj = serviceState.servicePopupForm.formFields.find((item) => item.fieldName === 'options');
        const findSelected = optionsObj.options.find((item) => item.selected);
        const selectRef = findFormRef('options');
        if (findSelected) {
            selectRef.current.value = findSelected.name;
            return;
        }
        selectRef.current.value = optionsObj.options[0].name;
    }, []);

    return (
        <React.Fragment>
        <div className="service-popup-wrap" style={{'left': props.cords.left, 'top': props.cords.top}}>
            <div className="service-popup-close-wrap">
                <span 
                    className="service-popup-close-btn"
                    onClick={(e) => props.popupHandler(e, false)}
                ></span>
            </div>
            <div className="service-popup-form-wrap">
                {serviceState.servicePopupForm.servicePopupHappyState ? 
                    <ServiceMainPagePopupHappy description={serviceState.servicePopupForm.servicePopupHappyStateDescription} /> : null}
                {!serviceState.servicePopupForm.servicePopupHappyState ? 
                    <form>
                        {serviceState.servicePopupForm.formFields.map((serviceInputItem) => {
                            if (serviceInputItem.type === 'options') {
                                return (
                                    <React.Fragment key={serviceInputItem.id}>
                                        <div className="service-form-options-wrap">
                                            <div className="service-form-options-title">Услуга</div>
                                            <select
                                                ref={findFormRef(serviceInputItem.fieldName)}
                                                onChange={() => formInputHandler(serviceInputItem.fieldName, findFormRef(serviceInputItem.fieldName))}
                                            >
                                                {serviceInputItem.options.map((optionItem) => {
                                                    return (
                                                            <React.Fragment key={optionItem.id}>
                                                                <option>{optionItem.name}</option>
                                                            </React.Fragment>
                                                        )
                                                })}
                                            </select>
                                        </div>
                                    </React.Fragment>
                                )
                            }
                            if (serviceInputItem.type === 'textarea') {
                                return (
                                    <React.Fragment key={serviceInputItem.id}>
                                        <div className="service-form-options-wrap">
                                            <div className="service-form-options-title">
                                                <label htmlFor="service-popup-form-comment">Коментарий</label>
                                            </div>
                                            <textarea 
                                                ref={findFormRef(serviceInputItem.fieldName)} 
                                                id="service-popup-form-comment"
                                                onChange={() => formInputHandler(serviceInputItem.fieldName, findFormRef(serviceInputItem.fieldName))}
                                            ></textarea>
                                        </div>
                                    </React.Fragment>
                                )
                            }
                            return (
                                <React.Fragment key={serviceInputItem.id}>
                                    <div className="service-form-input-wrap">
                                        <div className="service-popup-form-title">
                                            <label htmlFor={`service-popup-${serviceInputItem.fieldName}-input`}>{serviceInputItem.name}</label>
                                        </div>
                                        <div className="service-popup-form-title">
                                            <input
                                                ref={findFormRef(serviceInputItem.fieldName)}
                                                onChange={() => formInputHandler(serviceInputItem.fieldName, findFormRef(serviceInputItem.fieldName))}
                                                onKeyDown={(e) => clearFormInput(e, serviceInputItem.fieldName)}
                                                id={`service-popup-${serviceInputItem.fieldName}-input`} 
                                                type={serviceInputItem.type}
                                                value={serviceInputItem.value}
                                                placeholder={serviceInputItem.placeholder}
                                                className={serviceInputItem.err ? 'input-err' : null} 
                                                autoComplete={'off'}
                                            />
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                   
                        <div className="service-form-order-btn-wrap">
                            <span
                                className={serviceState.servicePopupForm.sendBtnActive ? "service-form-order-btn": "service-form-order-btn btnDisabled"}
                                onClick={sendFormHandler}
                            >Отправить</span>
                        </div>
                    </form>
                : null}
            </div>
        </div>
    </React.Fragment>
    )
};


export default ServicesMainPagePopup;