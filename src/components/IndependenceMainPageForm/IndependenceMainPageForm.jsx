import React from "react";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { independenceFromInputValidate, clearIndependenceFormInput } from "../../redux/slices/mainPageSlice";

const IndependenceMainPageForm = (props) => {
    const independenceFormState = props.formState;
    const dispatch = useDispatch();
    const nameInputRef = useRef(null);
    const phoneInputRef = useRef(null);
    const comentInputRef = useRef(null);

    const formInputHandler = (fieldType, fieldValue) => {
        dispatch(independenceFromInputValidate({fieldType: fieldType, fieldValue: fieldValue}));
    };

    const clearInputHandler = (e, fieldType, fieldRef) => {
        if (e.key === 'Backspace') {
            fieldRef.current.value = '';
            dispatch(clearIndependenceFormInput({fieldType: fieldType, fieldValue: fieldRef.current.value}));
        }
    };
    
    return (
        <React.Fragment>
            <div className="independence-main-order-form">
                <h3 className="main-color-title">Текст-рыба на русском языке</h3>

                <form className="contact-form-order-main">
                    <div className="contact-form-order-main-row">
                        <div className="contact-form-order-main-item">
                            <div className="contact-form-order-main-label-wrap">
                                <label htmlFor="independenceFormName">Имя</label>
                            </div>
                            <div className="contact-form-order-main-input-wrap">
                                <input
                                    id={'independenceFormName'}
                                    className={!independenceFormState.nameFieldValid ? 'input-err' : null} 
                                    ref={nameInputRef} 
                                    type="text" 
                                    placeholder="Ваше имя"
                                    onChange={() => formInputHandler('name', nameInputRef.current.value)}
                                    onKeyDown={(e) => clearInputHandler(e, 'name', nameInputRef)}
                                />
                            </div>
                        </div>

                        <div className="contact-form-order-main-item">
                            <div className="contact-form-order-main-label-wrap">
                                <label htmlFor="independenceFormPhone">Телефон</label>
                            </div>
                            <div className="contact-form-order-main-input-wrap">
                                <input
                                    id={'independenceFormPhone'}
                                    className={!independenceFormState.phoneFieldValid ? 'input-err' : null} 
                                    ref={phoneInputRef} 
                                    type="tel" 
                                    placeholder="+7 xxx xx xx"
                                    value={independenceFormState.phoneFieldValue}
                                    onChange={() => formInputHandler('phone', phoneInputRef.current.value)}
                                    onKeyDown={(e) => clearInputHandler(e, 'phone', phoneInputRef)}
                                />
                            </div>
                        </div>
                        <div className="contact-form-order-main-item contact-form-order-main-item-text">
                            <div className="contact-form-order-main-label-wrap">
                                <label htmlFor="independenceFormComment">Комментарий</label>
                            </div>
                            <div className="contact-form-order-main-input-wrap">
                                <input
                                    id={'independenceFormComment'}
                                    className={independenceFormState.commentFieldValid ? "main-form-message" : "main-form-message input-err" }
                                    type="text" 
                                    ref={comentInputRef}
                                    placeholder="Комментарий ..."
                                    onChange={() => formInputHandler('comment', comentInputRef.current.value)}
                                    onKeyDown={(e) => clearInputHandler(e, 'comment', comentInputRef)}
                                />
                            </div>
                        </div>
                        <div className="contact-form-order-main-item-end">
                            <div className="contact-form-order-main-btn-send">
                                <span>Отправить</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
};

export default IndependenceMainPageForm;