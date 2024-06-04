import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validatePrefooterForm } from "../../redux/slices/footerSlice";

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
                                                    ref={findRef(formField.id, formField.fieldType)}
                                                    onChange={() => formInputHandler(formField.id, formField.fieldType)} 
                                                    id={`prefooter-form-${formField.fieldType}`}
                                                ></textarea> : 
                                                <input 
                                                    ref={findRef(formField.id, formField.fieldType)}
                                                    onChange={() => formInputHandler(formField.id, formField.fieldType)}
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
                                        <label htmlFor="custom-checkbox"></label>
                                    </div>
                                    <div className="prefooter-form-checkbox-text">
                                        <p>Рыбатекст используется дизайнерами, 
                                            проектировщиками и фронтендерами, 
                                            когда нужно быстро заполнить макеты или прототипы содержимым
                                        </p>
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