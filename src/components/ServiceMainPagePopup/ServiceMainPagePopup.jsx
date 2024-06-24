import React, { useEffect } from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { validateServiceFormMainPage } from "../../redux/slices/mainPageSlice";

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
    
    const findFormRef = (inputName) => {
        return formRefs.find((item) => item.name === inputName).ref;
    };
    
    const sendFormHandler = () => {
        console.log(formRefs)
    };

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
                <form>
                    {serviceState.servicePopupForm.formFields.map((serviceInputItem) => {
                        if (serviceInputItem.type === 'options') {
                            return (
                                <React.Fragment key={serviceInputItem.id}>
                                    <div className="service-form-options-wrap">
                                        <div className="service-form-options-title">Услуга</div>
                                        <select 
                                            ref={findFormRef(serviceInputItem.fieldName)} name="hero"
                                            onChange={() => formInputHandler(serviceInputItem.fieldName, findFormRef(serviceInputItem.fieldName))}
                                        >
                                            {serviceInputItem.options.map((optionItem) => {
                                                return (
                                                    <React.Fragment key={optionItem.id}>
                                                        <option value="t1">{optionItem.name}</option>
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
                                            id={`service-popup-${serviceInputItem.fieldName}-input`} 
                                            type={serviceInputItem.type}
                                            value={serviceInputItem.value}
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
                            className="service-form-order-btn"
                            onClick={sendFormHandler}
                        >Отправить</span>
                    </div>
                
                </form>
            </div>
        </div>
    </React.Fragment>
    )
};


export default ServicesMainPagePopup;