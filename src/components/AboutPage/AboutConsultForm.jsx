import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AboutConsultFormHappyState from "./AboutConsultFormHappyState";

const AboutConsultForm = (props) => {
    const formState = props.formState;
    const inputRefs = [
        {type: 'name', ref: useRef(null)}, 
        {type: 'phone', ref: useRef(null)}, 
        {type: 'comment', ref: useRef(null)}
    ];
    const findInputRef = (inputType) => {
        return inputRefs.find((item) => item.type === inputType).ref;
    };

    return (
        <React.Fragment>
            <div className="about-production-consult-popup-background">
                <div className="about-production-consult-popup-wrap">
                    <div className="about-production-consult-popup-close-btn-wrap">
                        <span 
                            className="about-production-consult-popup-close-btn"
                            onClick={props.popupHandler}
                        ></span>
                    </div>
                    {formState.happyState.active ? <AboutConsultFormHappyState description={formState.happyState.description} />: null}
                    {!formState.happyState.active ? 
                        <React.Fragment>
                            <h4>Получить консультацию</h4>
                            <div className="about-production-form-wrap">
                                <div className="about-production-consult-form-row">
                                    {formState.fields.filter((item) => item.fieldType !== 'comment').map((formField) => {
                                        return (
                                            <React.Fragment key={formField.id}>
                                                <div className="about-production-consult-form-item">
                                                    <label htmlFor={`about-input-prod-name-id-${formField.id}`}>{formField.title}</label>
                                                    <div className="about-production-form-input-wrap">
                                                        <input
                                                            className={formField.fieldValid ? '' : 'input-err'}
                                                            ref={findInputRef(formField.fieldType)}
                                                            onChange={() => props.inputHandler(formField.fieldType, findInputRef(formField.fieldType).current)}
                                                            onKeyDown={(e) => props.clearInputHandler(e, formField.fieldType)}
                                                            id={`about-input-prod-name-id-${formField.id}`}
                                                            type={formField.type}
                                                            placeholder={formField.placeholder}
                                                            value={formField.value}
                                                        />
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                                <div className="about-production-form-textarea-wrap">
                                    {formState.fields.filter((item) => item.fieldType === 'comment').map((formField) => {
                                        return (
                                            <React.Fragment key={formField.id}>
                                                <label htmlFor={`about-input-prod-name-id-${formField.id}`}>{formField.title}</label>
                                                <textarea
                                                    className={formField.fieldValid ? '' : 'input-err'}
                                                    ref={findInputRef(formField.fieldType)}
                                                    onChange={() => props.inputHandler(formField.fieldType, findInputRef(formField.fieldType).current)}
                                                    onKeyDown={(e) => props.clearInputHandler(e, formField.fieldType)}
                                                    id={`about-input-prod-name-id-${formField.id}`}
                                                    placeholder={formField.placeholder}
                                                    value={formField.value}
                                                ></textarea>
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                                <div className="about-production-checkbox-wrap">
                                    <div className="form-mode-about-production-checkbox">
                                        <input
                                            onClick={props.policyHandler} 
                                            type="checkbox" 
                                            id="about-production-checkbox" 
                                            className="about-production-checkbox" 
                                        />
                                        <label htmlFor="about-production-checkbox"></label>
                                        <span>согласен с <a href="/policy">политикой конфидициальности</a></span>
                                    </div>
                                </div>
                                <div className="about-production-send-btn-wrap">
                                    <Link 
                                        className={props.formState.sendBtnActive ? 
                                            "about-production-send-btn" : "about-production-send-btn btnDisabled"}
                                        onClick={props.sendFormHandler}
                                    >Отправить</Link>
                                </div>
                            </div>
                        </React.Fragment>
                    : null}
                    
                </div>
            </div>
            
        </React.Fragment>
    )
};

export default AboutConsultForm;