import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const ForClientsDetailsForm = (props) => {
    const formState = props.formState;
    const formRefs = [{name: 'name', ref: useRef(null)}, {name: 'email', ref: useRef(null)}, {name: 'comment', ref: useRef(null)}];
    
    const findTargetRef = (inputName) => {
        return formRefs.find((item) => item.name === inputName).ref;
    };

    return (
        <React.Fragment>
            <div className="for-clients-detail-form-background">
                <div className="for-clients-detail-from-row">
                    <span 
                        className="for-clients-detail-popup-close-btn"
                        onClick={() => props.popupHandler(false)}
                    ></span>
                    <div className="for-clients-detail-main-title-form">
                        <h3>Задать вопрос</h3>
                    </div>
                    <div className="for-clients-detail-inputs-wrap">
                        {formState.fields.map((fieldItem) => {
                            return (
                                <React.Fragment key={fieldItem.id}>
                                    <div className="for-clients-detail-input-wrap">
                                        <div className="for-detail-detail-title-wrap">
                                            <label htmlFor={`for-clients-detail-input-${fieldItem.id}`}>{fieldItem.title}</label>
                                        </div>
                                        {fieldItem.type === 'textarea' ? 
                                            <textarea
                                                ref={findTargetRef(fieldItem.name)}
                                                className={fieldItem.valid ? '' : 'input-err'}
                                                onChange={() => props.inputHandler(fieldItem.id, fieldItem.name, findTargetRef(fieldItem.name).current)}
                                                id={`for-clients-detail-input-${fieldItem.id}`} 
                                                placeholder={fieldItem.placeholder}
                                                value={fieldItem.value}
                                            ></textarea>
                                        : 
                                        <input
                                            ref={findTargetRef(fieldItem.name)}
                                            className={fieldItem.valid ? '' : 'input-err'}
                                            onChange={() => props.inputHandler(fieldItem.id, fieldItem.name, findTargetRef(fieldItem.name).current)}
                                            id={`for-clients-detail-input-${fieldItem.id}`} 
                                            type={fieldItem.type}
                                            value={fieldItem.value}
                                            placeholder={fieldItem.placeholder}
                                        />}
                                        
                                    </div>
                                </React.Fragment>
                            )
                        })}
                        <div className="form-mode-for-clients-get-detail-checkbox">
                            <input
                                onClick={props.policyHandler}
                                type="checkbox" 
                                id="for-clients-get-detail-checkbox" className="for-clients-get-detail-checkbox"
                            />
                            <label
                                htmlFor="for-clients-get-detail-checkbox"
                            ></label>
                            <span>согласен с <Link to={'/policy'}>политикой конфидициальности</Link></span>
                        </div>
                    </div>
                    <div className="for-clients-detail-btn-wrap ">
                        <Link
                            onClick={props.sendFormHandler}
                            className={formState.sendBtnActive ? "for-clients-get-detail-btn" : 'for-clients-get-detail-btn btnDisabled'}
                        >Отправить</Link>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
};

export default ForClientsDetailsForm;