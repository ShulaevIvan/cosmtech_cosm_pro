import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import ServiceMainPagePopupHappy from "../ServiceMainPagePopup/ServiceMainPagePopupHappy";
import { 
    serviceOrderValidateInput, 
    serviceOrderSendBtnActive,
    serviceOrderInputClear,
    sendServiceOrderThunk
} from "../../redux/slices/innerPageSlice";


const ServicePopup = (props) => {
    const dispatch = useDispatch();
    const servicesFormState = useSelector((state) => state.innerPage.servicesPage.serviceForm);
    const popupWrapRef = useRef(null);
    const closeBtnRef = useRef(null);
    const formRefs = [
        { id: 1, name: 'name', ref: useRef(null), },
        { id: 2, name: 'phone', ref: useRef(null), },
        { id: 3, name: 'email', ref: useRef(null), },
        { id: 4, name: 'serviceType', ref: useRef(null), },
        { id: 5, name: 'comment', ref: useRef(null), }
    ];

    const formInputHandler = (fieldName, targetRef) => {
        console.log(targetRef.current.value)
        dispatch(serviceOrderValidateInput({fieldType: fieldName, fieldValue: targetRef.current.value}));
    };

    const clearInputHandler = (e, fieldName) => {
        if (e.key === 'Backspace') {
            dispatch(serviceOrderInputClear({fieldName: fieldName}))
        }
    };

    const findFormRef = (inputName) => {
        return formRefs.find((item) => item.name === inputName).ref;
    };

    const sendFormHandler = () => {
        const data = formRefs.reduce((itemObj, item) => {
            itemObj[item.name] = item.ref.current.value;
            return itemObj;
        }, {});
        dispatch(sendServiceOrderThunk(data));
    };

    const clickOutsideHandler = (e) => {
        if (popupWrapRef.current && !popupWrapRef.current.contains(e.target)) {
            closeBtnRef.current.click();
        }
    };

    useEffect(() => {
        const optionsObj = servicesFormState.fields.find((item) => item.fieldName === 'serviceType');
        const findSelected = optionsObj.options.find((item) => item.name === servicesFormState.selectedService);
        const selectRef = findFormRef('serviceType');
        if (findSelected) {
            selectRef.current.value = findSelected.name;
            return;
        }
    }, []);

    useEffect(() => {
        dispatch(serviceOrderSendBtnActive());
    }, [formRefs]);

    useEffect(() => {
        document.addEventListener('mousedown', clickOutsideHandler);
        return () => {
            document.removeEventListener('mousedown', clickOutsideHandler);
        };
    }, [popupWrapRef]);

    return (
        <React.Fragment>
            <div
                ref={popupWrapRef}
                className="service-popup-wrap" 
                style={{left: window.screen.width < 800 ? `${0}%` : `${33}%`, top: `${10}%`, position: 'fixed'}}>
                <div className="service-popup-close-wrap">
                    <span
                        ref={closeBtnRef} 
                        className="service-popup-close-btn"
                        onClick={(e) => props.formHandler(e, false)}
                    ></span>
                </div>
                <div className="service-popup-form-wrap">
                        {servicesFormState.serviceFormHappyState ? 
                            <ServiceMainPagePopupHappy description={servicesFormState.serviceFormHappyStateDescription} /> 
                        : null}
                        {!servicesFormState.serviceFormHappyState ? 
                            <form>
                                {servicesFormState.fields.map((formField) => {
                                    if (formField.fieldType === 'select') {
                                        return (
                                            <React.Fragment key={formField.id}>
                                                <div className="service-form-options-wrap">
                                                    <div className="service-form-options-title">Услуга</div>
                                                    <select
                                                        ref={findFormRef(formField.fieldName)}  
                                                        onChange={() => formInputHandler(formField.fieldName, findFormRef(formField.fieldName))}
                                                    >
                                                        {formField.options.map((optionObj) => {
                                                            return (
                                                                <React.Fragment key={optionObj.id}>
                                                                    <option>{optionObj.name}</option>
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
                                                        onChange={() => formInputHandler(formField.fieldName, findFormRef(formField.fieldName))}
                                                        id="service-popup-form-comment"
                                                        value={formField.fieldValue}
                                                        autoComplete={'off'}
                                                    
                                                    ></textarea>
                                                </div>
                                            </React.Fragment>
                                        )
                                    }
                                    return (
                                        <React.Fragment key={formField.id}>
                                            <div className="service-form-input-wrap">
                                                <div className="service-popup-form-title">
                                                    <label htmlFor={`service-popup-${formField.fieldName}-input`}>{formField.title}</label>
                                                </div>
                                                <div className="service-popup-form-title">
                                                    <input
                                                        id={`service-popup-${formField.fieldName}-input`}
                                                        className={formField.err ? 'input-err' : null} 
                                                        ref={findFormRef(formField.fieldName)}
                                                        onChange={() => formInputHandler(formField.fieldName, findFormRef(formField.fieldName))}
                                                        onKeyDown={(e) => clearInputHandler(e, formField.fieldName)}
                                                        type={formField.fieldType}
                                                        value={formField.fieldValue}
                                                        placeholder={formField.placeholder}
                                                        autoComplete={'off'}
                                                    />
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                                <div className="service-form-order-btn-wrap">
                                    <span
                                        className={servicesFormState.serviceFormSendBtnActive ? "service-form-order-btn" : "service-form-order-btn btnDisabled"}
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

export default ServicePopup;