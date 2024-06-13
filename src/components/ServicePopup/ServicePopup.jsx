import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const ServicePopup = (props) => {
    const servicesFormState = useSelector((state) => state.innerPage.servicesPage.serviceForm);
    const formRefs = [
        { id: 1, name: 'name', ref: useRef(null), },
        { id: 2, name: 'phone', ref: useRef(null), },
        { id: 3, name: 'email', ref: useRef(null), },
        { id: 4, name: 'serviceType', ref: useRef(null), },
        { id: 5, name: 'comment', ref: useRef(null), }
    ];

    const findFormRef = (refType) => {
        const targetRef = formRefs.find((item) => item.name === refType);
        return targetRef.ref;
    };

    const formInputHandler = (targetRef) => {
        console.log(targetRef.current.value)
    };

    return (
        <React.Fragment>
            <div className="service-popup-wrap" style={{left: window.screen.width < 800 ? `${0}%` : `${33}%`, top: `${props.cords.top}%`, position: 'fixed'}}>
                <div className="service-popup-close-wrap">
                    <span 
                        className="service-popup-close-btn"
                        onClick={(e) => props.formHandler(e, false)}
                    ></span>
                </div>
                <div className="service-popup-form-wrap">
                    <form>
                        {servicesFormState.fields.map((formField) => {
                            if (formField.fieldType === 'select') {
                                return (
                                    <React.Fragment key={formField.id}>
                                        <div className="service-form-options-wrap">
                                            <div className="service-form-options-title">Услуга</div>
                                            <select
                                                ref={findFormRef(formField.fieldName)}  
                                                name="hero"
                                                onChange={() => formInputHandler(findFormRef(formField.fieldName))}
                                            >
                                                {formField.options.map((optionObj) => {
                                                    return (
                                                        <React.Fragment key={optionObj.id}>
                                                            <option value={optionObj.value}>{optionObj.name}</option>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </React.Fragment>
                                )
                            }
                            else if (formField.fieldType === 'textarea') {
                                return (
                                    <React.Fragment key={formField.id}>
                                        <div className="service-form-options-wrap">
                                            <div className="service-form-options-title">
                                                <label htmlFor="service-popup-form-comment">Коментарий</label>
                                            </div>
                                            <textarea 
                                                ref={findFormRef(formField.fieldName)} 
                                                id="service-popup-form-comment"
                                                onChange={() => formInputHandler(findFormRef(formField.fieldName))}
                                            ></textarea>
                                        </div>
                                    </React.Fragment>
                                )
                            }
                            return (
                                <React.Fragment key={formField.id}>
                                    <div className="service-form-input-wrap">
                                        <div className="service-popup-form-title">
                                            <label htmlFor="service-popup-name-input">{formField.title}</label>
                                        </div>
                                        <div className="service-popup-form-title">
                                            <input
                                                ref={findFormRef(formField.fieldName)} 
                                                id="service-popup-name-input" 
                                                type={formField.fieldType}
                                                onChange={() => formInputHandler(findFormRef(formField.fieldName))}
                                            />
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                        <div className="service-form-order-btn-wrap">
                            <span className="service-form-order-btn">Отправить</span>
                        </div>
                    
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ServicePopup;