import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { 
    orderFormAdditionalFields, 
    orderFormInputValidate, 
    orderFormPhoneInputValidate,
    checkOrderFrom,
    orderFormPolicyCheckbox,
    sendOrderThunk
} from "../../redux/slices/mainPageSlice";



const MainPageOrderForm = (props) => {
    const dispatch = useDispatch();
    const orderFormState = useSelector((state) => state.mainPage.orderForm);
    const baseFields = useSelector((state) => state.mainPage.orderForm.baseFields);
    const policyCheckboxRef = useRef(null);
    const popupWrapRef = useRef(null);
    const closePopupBtnRef = useRef(null);
    const formRefs = [
        {name: 'name', ref: useRef(null)},
        {name: 'phone', ref: useRef(null)},
        {name: 'email', ref: useRef(null)},
        {name: 'comment', ref: useRef(null)}
    ];

    const additionalFieldsHandler = (status) => {
        dispatch(orderFormAdditionalFields({status: status}));
    };

    const clearInputHandler = (e, ref) => {
        if (e.key === 'Backspace') {
            ref.current.value = '';
            if (orderFormState.policyChecked) policyCheckboxRef.current.click();
            dispatch(orderFormPolicyCheckbox({status: false}));
            dispatch(checkOrderFrom({formRefs: formRefs}));
        }
    };

    const baseFieldInputHandler = (e, field) => {
        const targetRef = formRefs.find((refItem) => refItem.name === field.fieldName).ref;
        if (field.fieldName === 'phone') {
            dispatch(orderFormPhoneInputValidate({fieldId: field.id, fieldType: field.type,  ref: targetRef}));
            return;
        }
        dispatch(orderFormInputValidate({
            fieldId: field.id, 
            fieldName: field.fieldName, 
            fieldType: field.type, 
            fieldValue: targetRef.current.value
        }));
    };

    const sendFormHandler = () => {
        const data = formRefs.reduce((sendObj, refItem) => {
            sendObj[refItem.name] = refItem.ref.current.value;
            return sendObj;
        }, {});
        dispatch(sendOrderThunk(data));
        clearOrderForm();
    };

    const policyCheckboxHandler = (status) => {
        dispatch(orderFormPolicyCheckbox({status: status}));
        dispatch(checkOrderFrom({formRefs: formRefs}));
    };

    const clearOrderForm = () => {
        formRefs.forEach((item) => {
            item.ref.current.value = '';
        });
    };

    const clickOutsideHandler = (e) => {
        if (popupWrapRef.current && !popupWrapRef.current.contains(e.target)) {
            closePopupBtnRef.current.click();
        }
    };

    useEffect(() => {
        if (baseFields.filter((item) => !item.err).length === 4 && orderFormState.policyChecked) {
            dispatch(checkOrderFrom({formRefs: formRefs}));
        }
    }, [baseFields, orderFormState.policyChecked]);

    useEffect(() => {
        document.addEventListener('mousedown', clickOutsideHandler);
        return () => {
            document.removeEventListener('mousedown', clickOutsideHandler);
        };
    }, [popupWrapRef]);
    
    return (
        <React.Fragment>
            <div className="hero-order-form-popup-background">
            <div className='hero-order-form-popup-wrap' ref={popupWrapRef}>
                <div className="hero-order-form-popup-close-wrap">
                    <span
                        ref={closePopupBtnRef}
                        className="close-popup-btn"
                        onClick={() => props.orderFormHandler(false)}
                    ></span>
                </div>
                <div className="hero-order-form-wrap">
                    <h2>Запросить рассчет</h2>
                    <form className="hero-order-form">
                        {/* <div className="hero-order-form-mode-wrap">
                            <div className="form-mode-checkbox">
                                <input type="checkbox" id="checkbox-custom-hero-form" className="checkbox-custom-hero-form" />
                                <label 
                                    htmlFor="checkbox-custom-hero-form"
                                    onClick={() => additionalFieldsHandler({status: true})}
                                ></label>
                                <span>Уточнить</span>
                            </div>
                        </div> */}
                        {orderFormState.additionalFields.fieldsActive ? 
                            <div className="hero-order-additional-fields-wrap">
                                {orderFormState.additionalFields.fieldsTypes.map((fieldBlock) => {
                                    return (
                                        <React.Fragment key={Math.random()}>
                                             <div className="hero-order-form-options-wrap">
                                                <div className="hero-order-form-options-title">{fieldBlock.name}</div>
                                                    <select className="hero">
                                                        <option selected>Выберите</option>
                                                        {fieldBlock.options.map((optionItem) => {
                                                            return (
                                                                <React.Fragment key={Math.random()}>
                                                                    <option value="t1">{optionItem.name}</option>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>

                        : null}
                        {baseFields.map((field) => {
                            return (
                                <React.Fragment key={field.id}>
                                    <div className="hero-order-main-fields-title-wrap">
                                        <label htmlFor={`id-order-${field.fieldName}`}>{field.name}</label>
                                    </div>
                                    <div className="hero-order-main-fields-input-wrap">
                                        {field.type === 'textarea' ?  
                                        <textarea 
                                            ref={formRefs.find((refItem) => refItem.name === field.fieldName).ref}
                                            onChange={(e) => baseFieldInputHandler(e, field)}
                                            id={`id-order-${field.fieldName}`}
                                        ></textarea> : 
                                        <input
                                            onKeyDown={(e) => clearInputHandler(e, formRefs.find((refItem) => refItem.name === field.fieldName).ref)}
                                            ref={formRefs.find((refItem) => refItem.name === field.fieldName).ref} 
                                            className={field.err ? 'input-err' : null} 
                                            type={field.type} onChange={(e) => baseFieldInputHandler(e, field)}
                                            id={`id-order-${field.fieldName}`}
                                            placeholder={field.placeholder}
                                            autoComplete={'off'}
                                        />}
                                    </div>
                                </React.Fragment>
                            )
                        })}

                        <div className="hero-order-main-fields-checkbox-wrap">
                            <div className="form-mode-checkbox">
                                <input 
                                    type="checkbox" 
                                    id="checkbox-custom-hero-form-policy" className="checkbox-custom-hero-form-policy" />
                                <label
                                    ref={policyCheckboxRef} 
                                    onClick={() => policyCheckboxHandler(orderFormState.policyChecked ? false : true)} 
                                    htmlFor="checkbox-custom-hero-form-policy"
                                ></label>
                                <span>согласен с <Link to={'/policy'}>политикой конфидициальности</Link></span>
                            </div>
                        </div>
                        <div className="hero-order-main-fields-send-btn-wrap">
                            <span
                                 
                                className={orderFormState.allFieldsValid ? "hero-order-main-fields-send-btn" : "hero-order-main-fields-send-btn btnDisabled"}
                                onClick={sendFormHandler}
                            >Отправить</span>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
};

export default MainPageOrderForm;