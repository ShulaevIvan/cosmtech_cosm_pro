import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const DecorativeCosmeticsConsultPopup = (props) => {
    const popupState = props.popupState;
    const formRefs = [
        {name: 'name', ref: useRef()},
        {name: 'phone', ref: useRef()},
        {name: 'email', ref: useRef()},
    ];

    const findInputRef = (refType) => {
        return formRefs.find((item) => item.name === refType).ref;
    };
    

    return (
        <React.Fragment>
            <div className="decorative-cosmetic-consult-popup-wrap">
                <div className="decorative-cosmetic-consult-popup-close-btn-wrap">
                    <span 
                        className="decorative-cosmetic-consult-popup-close-btn"
                        onClick={props.popupHandler}
                    ></span>
                </div>
                <div className="decorative-cosmetic-consult-popup-body">
                    <h3>Получить консультацию</h3>
                </div>
                <div className="decorative-cosmetic-consult-popup-form-wrap">
                    {popupState.fields.map((fieldItem) => {
                        return (
                            <React.Fragment key={fieldItem.id}>
                                <label htmlFor={`decorative-cosmetic-consult-popup-form-input-${fieldItem.id}`}>
                                    {fieldItem.title}
                                </label>
                                <div className="decorative-cosmetic-consult-popup-form-input">
                                    <input
                                        ref={findInputRef(fieldItem.name)}
                                        className={fieldItem.valid ? '' : 'input-err'}
                                        id={`decorative-cosmetic-consult-popup-form-input-${fieldItem.id}`} 
                                        type={fieldItem.type} 
                                        placeholder={fieldItem.placeholder}
                                        value={fieldItem.value}
                                        onChange={() => props.inputHandler(fieldItem.id, fieldItem.name, findInputRef(fieldItem.name).current)}
                                        onKeyDown={(e) => props.clearInputHandler(e, fieldItem.id)}
                                    />
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className="decor-cosmetic-get-consult-checkbox-wrap">
                    <div className="form-mode-decor-cosmetic-get-consult-checkbox">
                        <input
                            onClick={props.policyHandler}
                            type="checkbox" 
                            id="decor-cosmetic-consult-checkbox" className="decor-cosmetic-get-consult-checkbox"
                        />
                        <label
                            htmlFor="decor-cosmetic-consult-checkbox"
                        ></label>
                        <span>согласен с <Link to={'/policy'}>политикой конфидициальности</Link></span>
                    </div>
                </div>
                <div className="decorative-cosmetic-consult-popup-form-send-btn-wrap">
                    <Link 
                        to={'#'} 
                        className={popupState.sendBtnActive ? 
                            "decorative-cosmetic-consult-popup-form-send-btn" : "decorative-cosmetic-consult-popup-form-send-btn btnDisabled"
                        }
                        onClick={props.sendFormHandler}
                    >Отправить</Link>
                </div>
            </div>
        </React.Fragment>
    )
};

export default DecorativeCosmeticsConsultPopup;