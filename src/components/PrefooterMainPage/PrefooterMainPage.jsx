import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    validatePrefooterForm, 
    prefooterClearInput,
    prefooterFormCheckbox
} from "../../redux/slices/footerSlice";
import { Link } from "react-router-dom";

const PrefooterMainPage = () => {
    const dispatch = useDispatch();
    const footerState = useSelector((state) => state.footer);
    const footerFormRefs = [
        { id: 1, nameRef: 'name', inputRef: useRef(null)},
        { id: 2, nameRef: 'phone', inputRef: useRef(null)},
        { id: 3, nameRef: 'email', inputRef: useRef(null)},
        { id: 4, nameRef: 'city', inputRef: useRef(null)},
        { id: 5, nameRef: 'comment', inputRef: useRef(null)},
    ];

    const findRef = (inputId, inputType) => {
        return footerFormRefs.find((item) => item.id === Number(inputId) && item.nameRef === inputType).inputRef;
    };

    const formInputHandler = (inputId, inputType) => {
        const targetRef = findRef(inputId, inputType);
        dispatch(validatePrefooterForm({fieldId: inputId, fieldType: inputType, fieldValue: targetRef.current.value}));
    };

    const findFieldValue = (formField) => {
        return footerState.preFooterForm.inputs.find((item) => item.id === formField.id && item.name === formField.fieldName).fieldValue;
    };

    const clearInputHandler = (e, inputId, inputType) => {
        if (e.key === 'Backspace') {
            const targetRef = findRef(inputId, inputType);
            targetRef.current.value = '';
            dispatch(prefooterClearInput({inputId: inputId, inputType: inputType, inputValue: targetRef.current.value}));
        }
    };

    const policyCheckboxHandler = (status) => {
        dispatch(prefooterFormCheckbox({status: status}));
        console.log(footerState.preFooterForm.policyCheckboxStatus)
    };


    return (
        <React.Fragment>
            <section className="prefooter-order-section">
                <div className="prefooter-order-form-wrap">
                    <div className="prefooter-order-form-background">
                        <div className="prefooter-form-wrap">
                   
                            <form className="prefooter-form">
                                <div className="prefooter-from-title">
                                    <h3>Быстрый способ уточнить детали</h3>
                                </div>
                                {footerState.preFooterForm.inputs.map((formField) => {
                                    return (
                                        <React.Fragment key={formField.id}>
                                            <label htmlFor={`prefooter-form-${formField.fieldType}`}>{formField.title}</label>
                                            {formField.type === 'textarea' ? 
                                                <textarea
                                                    className={!formField.fieldValid ? 'input-err' : null} 
                                                    ref={findRef(formField.id, formField.fieldType)}
                                                    value={findFieldValue(formField)}
                                                    placeholder={formField.placeholder}
                                                    onChange={() => formInputHandler(formField.id, formField.fieldType)}
                                                    onKeyDown={(e) => clearInputHandler(e, formField.id, formField.fieldType)}
                                                    id={`prefooter-form-${formField.fieldType}`}
                                                ></textarea> : 
                                                <input
                                                    className={!formField.fieldValid ? 'input-err' : null} 
                                                    ref={findRef(formField.id, formField.fieldType)}
                                                    value={findFieldValue(formField)}
                                                    placeholder={formField.placeholder}
                                                    onChange={() => formInputHandler(formField.id, formField.fieldType)}
                                                    onKeyDown={(e) => clearInputHandler(e, formField.id, formField.fieldType)}
                                                    id={`prefooter-form-${formField.fieldType}`} 
                                                    type={formField.type}
                                                />
                                            }
                                        </React.Fragment>
                                    )
                                })}
                                <div className="prefooter-form-checkbox-row">
                                    <div className="prefooter-checkbox-wrap">
                                        <input type="checkbox" id="custom-checkbox" className="checkbox-custom" />
                                        <label 
                                            htmlFor="custom-checkbox"
                                            onClick={() => policyCheckboxHandler(footerState.preFooterForm.policyCheckboxStatus ? false : true)}
                                        ></label>
                                    </div>
                                    <div className="prefooter-form-checkbox-text">
                                        <p>Я ознакомлен и согласен с <Link target={'_blank'} to={'about/policy'}>политикой конфидициальности</Link></p>
                                    </div>
                            
                                </div>
                                <div className="prefooter-form-btn-wrap">
                                    <span className="prefooter-order-form-btn">Отправить</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default PrefooterMainPage;