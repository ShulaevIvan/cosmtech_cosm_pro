import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderFormAdditionalFields, orderFormInputValidate } from "../../redux/slices/mainPageSlice";


const MainPageOrderForm = (props) => {
    const dispatch = useDispatch();
    const orderFormState = useSelector((state) => state.mainPage.orderForm);
    const baseFields = useSelector((state) => state.mainPage.orderForm.baseFields);
    const formRefs = [
        {name: 'name', ref: useRef(null)},
        {name: 'phone', ref: useRef(null)},
        {name: 'email', ref: useRef(null)},
        {name: 'comment', ref: useRef(null)}
    ];



    const additionalFieldsHandler = (status) => {
        dispatch(orderFormAdditionalFields({status: status}));
    };

    const clearInputHandler = (e) => {
        if (e.key === 'Backspace') e.target.value = '';
    };

    
    const baseFieldInputHandler = (e, field) => {
        if (field.fieldName === 'phone') {
            const pattern = /^[0-9]\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})([0-9]{2})$/;
            const symPattern = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
            const enRuPattern = /[a-zA-Zа-яА-Я]+/;
            const phoneRef = formRefs.find((item) => item.name === 'phone').ref;

            if (phoneRef.current.value.replace(symPattern, '').length > 11) {
                phoneRef.current.value = phoneRef.current.value.replace(/.$/, '');
                return;
            }

            phoneRef.current.value = phoneRef.current.value.replace(/\s/g, '').replace(symPattern, '');
            phoneRef.current.value = phoneRef.current.value.replace(enRuPattern, '');

            if (phoneRef.current.value.length  === 1 && (Number(phoneRef.current.value[0]) <= 9)) {
                phoneRef.current.value = `7${phoneRef.current.value}`;
            }
            if (pattern.test(phoneRef.current.value) && /^[7|8]/.test(phoneRef.current.value)) {
                phoneRef.current.value.replace(pattern, (all, group2, group3, group4, group5) => {
                    phoneRef.current.value = `+7 (${group2}) ${group3}-${group4}-${group5}`;
                    return `+7 (${group2})-${group3}-${group4}-${group5}`
                });
                dispatch(orderFormInputValidate({
                    fieldId: field.id, 
                    fieldName: field.fieldName, 
                    fieldType: field.type, 
                    fieldValue: phoneRef.current.value
                }));
            }
            
            return;
        }
        dispatch(orderFormInputValidate({
            fieldId: field.id, 
            fieldName: field.fieldName, 
            fieldType: field.type, 
            fieldValue: e.target.value
        }));
    };
    
    return (
        <React.Fragment>
            <div className="hero-order-form-popup-wrap">
                <div className="hero-order-form-popup-close-wrap">
                    <span 
                        className="close-popup-btn"
                        onClick={() => props.orderFormHandler(false)}
                    ></span>
                </div>
                <div className="hero-order-form-wrap">
                    <form className="hero-order-form">
                        <div className="hero-order-form-mode-wrap">
                            <div className="form-mode-checkbox">
                                <input type="checkbox" id="checkbox-custom-hero-form" class="checkbox-custom-hero-form" />
                                <label 
                                    htmlFor="checkbox-custom-hero-form"
                                    onClick={() => additionalFieldsHandler({status: true})}
                                ></label>
                                <span>Уточнить</span>
                            </div>
                        </div>
                        {orderFormState.additionalFields.fieldsActive ? 
                            <div className="hero-order-additional-fields-wrap">
                                {orderFormState.additionalFields.fieldsTypes.map((fieldBlock) => {
                                    return (
                                        <React.Fragment key={Math.random()}>
                                             <div className="hero-order-form-options-wrap">
                                                <div class="hero-order-form-options-title">{fieldBlock.name}</div>
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
                                        <label>{field.name}</label>
                                    </div>
                                    <div className="hero-order-main-fields-input-wrap">
                                        {field.type === 'textarea' ?  <textarea></textarea>
                                        : 
                                        <input
                                            onKeyDown={(e) => clearInputHandler(e)}
                                            ref={formRefs.find((refItem) => refItem.name === field.fieldName).ref} 
                                            className={field.err === true ? 'input-err' : null} 
                                            type={field.type} onChange={(e) => baseFieldInputHandler(e, field)} 
                                        />}
                                    </div>
                                </React.Fragment>
                            )
                        })}

                        <div className="hero-order-main-fields-checkbox-wrap">
                            <div className="form-mode-checkbox">
                                <input type="checkbox" id="checkbox-custom-hero-form-policy" class="checkbox-custom-hero-form-policy" />
                                <label for="checkbox-custom-hero-form-policy"></label>
                                <span>согласен с <a href="#">политикой конфидициальности</a></span>
                            </div>
                        </div>
                        <div className="hero-order-main-fields-send-btn-wrap">
                            <span className="hero-order-main-fields-send-btn">Отправить</span>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
};

export default MainPageOrderForm;