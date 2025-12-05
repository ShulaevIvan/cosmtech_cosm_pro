import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const DecorativeCosmeticsOrderPopup = (props) => {
    const popupState = props.popupState;

    const inputRefs = [
        {name: 'name', ref: useRef()},
        {name: 'phone', ref: useRef()},
        {name: 'email', ref: useRef()},
        {name: 'file', ref: useRef()},
        {name: 'comment', ref: useRef()},
    ];

    const findInputRef = (fieldType) => {
        return inputRefs.find((item) => item.name === fieldType).ref;
    };
    
    return (
        <React.Fragment>
            <div className="decorative-cosmetic-popup-bg-wrap">
                <div className="decorative-cosmetic-order-popup-wrap">
                    <div className="decorative-cosmetic-consult-popup-close-btn-wrap">
                        <span 
                            className="decorative-cosmetic-consult-popup-close-btn"
                            onClick={props.popupHandler}
                        ></span>
                    </div>
                    <div className="decorative-cosmetic-order-popup-body">
                        <div className="decorative-cosmetic-order-popup-title">
                            <h3>Запросить рассчет</h3>
                        </div>
                        <div className="decorative-cosmetic-order-form-wrap">
                            {popupState.fields.map((fieldItem) => {
                                return (
                                    <React.Fragment key={fieldItem.id}>
                                        <div className="decorative-cosmetic-order-form-input-wrap">
                                            {fieldItem.name === 'comment' ? 
                                                <div className="decorative-cosmetic-order-form-input-wrap">
                                                    <div className="decorative-cosmetic-order-form-input-title-wrap">
                                                        <label htmlFor={`decorative-cosmetic-order-form-input-${fieldItem.id}`}>{fieldItem.title}</label>
                                                    </div>
                                                    <textarea
                                                        ref={findInputRef(fieldItem.name)}
                                                        className={fieldItem.valid ? '' : 'input-err'}
                                                        onChange={() => props.inputHandler(fieldItem, findInputRef(fieldItem.name).current)}
                                                        onKeyDown={(e) => props.clearInputHandler(e, fieldItem.id, fieldItem.name)}
                                                        id={`decorative-cosmetic-order-form-input-${fieldItem.id}`} 
                                                        placeholder={fieldItem.placeholder}
                                                        value={fieldItem.value}
                                                    ></textarea>
                                                </div>
                                        
                                            : 
                                                <React.Fragment>
                                                    {fieldItem.type === 'file' ? 
                                                
                                                    <div className="decorative-cosmetic-order-form-file-input">
                                                        <label className="input-file">
                                                            <span className="input-file-text" type="text"></span>
                                                            <input
                                                                ref={findInputRef(fieldItem.name)}
                                                                onChange={() => props.inputHandler(fieldItem, findInputRef(fieldItem.name).current)}
                                                                type="file" 
                                                                name="file"
                                                                value={fieldItem.value} 
                                                                multiple={false} 
                                                            />
                                                            <span className="input-file-btn">Прикрепить ТЗ</span>
                                                            <span className="input-file-display-name">
                                                                {fieldItem.displayName ? fieldItem.displayName : null}
                                                            </span>
                                                        </label>
                                                    </div>
                                                    :
                                                        <React.Fragment>
                                                            <div className="decorative-cosmetic-order-form-input-title-wrap">
                                                                <label htmlFor={`decorative-cosmetic-order-form-input-${fieldItem.id}`}>{fieldItem.title}</label>
                                                            </div>
                                                            <input
                                                                ref={findInputRef(fieldItem.name)}
                                                                className={fieldItem.valid ? '' : 'input-err'}
                                                                onChange={() => props.inputHandler(fieldItem, findInputRef(fieldItem.name).current)}
                                                                onKeyDown={(e) => props.clearInputHandler(e, fieldItem.id, fieldItem.name)}
                                                                id={`decorative-cosmetic-order-form-input-${fieldItem.id}`}
                                                                type={fieldItem.type}
                                                                placeholder={fieldItem.placeholder}
                                                                value={fieldItem.value}
                                                            />
                                                        </React.Fragment>
                                                    }
                                                
                                                </React.Fragment>
                                            
                                            }
                                        
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                        <div className="form-mode-decor-cosmetic-get-consult-checkbox">
                            <input
                                type="checkbox" 
                                id="decor-cosmetic-consult-checkbox" className="decor-cosmetic-get-consult-checkbox"
                                onClick={props.policyHandler}
                            />
                            <label
                                htmlFor="decor-cosmetic-consult-checkbox"
                            ></label>
                            <span>согласен с <Link to={'/policy'}>политикой конфидициальности</Link></span>
                        </div>
                        <div className="decorative-cosmetic-order-form-btn-wrap">
                            <a 
                                className={
                                    popupState.sendBtnActive ? 'decorative-cosmetic-order-form-btn' : 'decorative-cosmetic-order-form-btn btnDisabled'
                                }
                                onClick={props.sendFormHandler}
                            >Отправить</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default DecorativeCosmeticsOrderPopup;