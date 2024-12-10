import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const ForClientsConsultForm = (props) => {
    const formState = props.formState;
    const formRefs = [{name: 'name', ref: useRef(null)}, {name: 'phone', ref: useRef(null)}];

    const findTargetRef = (inputName) => {
        return formRefs.find((item) => item.name === inputName).ref;
    };
    
    return (
        <React.Fragment>
            <div className="for-clients-consult-form-background">
                <div className="for-clients-consult-from-row">
                    <span 
                        className="for-clients-consult-popup-close-btn"
                        onClick={() => props.popupHandler(false)}
                    ></span>
                    <div className="for-clients-consult-main-title-form">
                        <h3>Получить консультацию</h3>
                    </div>
                    <div className="for-clients-inputs-row">
                        {formState.fields.map((fieldItem) => {
                            return (
                                <React.Fragment key={fieldItem.id}>
                                    <div className="for-clients-consult-input-item-wrap">
                                        <div className="for-clients-consult-input-label-wrap">
                                            <label htmlFor={`for-clients-consult-input-${fieldItem.id}`}>
                                                {fieldItem.title}
                                            </label>
                                        </div>
                                        <div className="for-clients-consult-input-wrap">
                                            <input
                                                ref={findTargetRef(fieldItem.name)}
                                                onKeyDown={(e) => props.clearInputHandler(e, fieldItem.name, fieldItem.id)}
                                                className={fieldItem.valid ? '' : 'input-err'}
                                                onChange={() => props.inputHandler(fieldItem.id, fieldItem.name, findTargetRef(fieldItem.name).current)}
                                                id={`for-clients-consult-input-${fieldItem.id}`}
                                                value={fieldItem.value}
                                                type={fieldItem.type} 
                                                placeholder={fieldItem.placeholder} 
                                            />
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div className="for-clients-get-consult-checkbox-wrap">
                        <div className="form-mode-for-clients-get-consult-checkbox">
                            <input
                                onClick={props.policyHandler}
                                type="checkbox" 
                                id="for-clients-get-consult-checkbox" className="for-clients-get-consult-checkbox"
                            />
                            <label
                                htmlFor="for-clients-get-consult-checkbox"
                            ></label>
                            <span>согласен с <Link to={'/policy'}>политикой конфидициальности</Link></span>
                        </div>
                    </div>
                    <div className="for-clients-get-consult-btn-wrap">
                        <Link
                            onClick={props.sendFormHandler} 
                            className={formState.sendBtnActive ?
                                "for-clients-get-consult-btn" : "for-clients-get-consult-btn btnDisabled"}
                        >Отправить</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ForClientsConsultForm;