import React from "react";
import { Link } from "react-router-dom";

const ContactsPopup = (props) => {
    const consultState = props.consultState;

    return (
        <React.Fragment>
            <div className="sticky-sidemenu-tz-background">
            <div className="sticky-sidemenu-tz-inner-popup consult">
                <div className="sticky-sidemenu-tz-popup-close-btn-wrap">
                    <span 
                        className="sticky-sidemenu-tz-popup-close-btn"
                        onClick={() => props.closeHandler(false, 'contacts')}
                    ></span>
                </div>
                <div className="sticky-sidemenu-tz-popup-body consult">
                    <div className="sticky-sidemenu-tz-title-wrap">
                        <h2>Получить консультацию</h2>
                    </div>
                    <div className="sticky-sidemenu-consult-messagers-row">
                        {consultState.messagers.map((messagerItem) => {
                            return (
                                <React.Fragment key={messagerItem.id}>
                                    <div className="sticky-sidemenu-consult-messagers-item">
                                        <Link to={messagerItem.url} target={'_blank'}>
                                            <img src={messagerItem.img} alt={messagerItem.imgAlt} />
                                        </Link>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div className="sticky-sidemenu-consult-form-row">
                        {consultState.fields.map((fieldItem) => {
                            return (
                                <React.Fragment key={fieldItem.id}>
                                    <div className="sticky-sidemenu-consult-form-item">
                                        <div className="sticky-sidemenu-consult-form-label-wrap">
                                            <label htmlFor={`sticky-sidemenu-consult-form-input-${fieldItem.id}`}>{fieldItem.title}</label>
                                        </div>
                                    <div className="sticky-sidemenu-consult-form-input-wrap">
                                        <input
                                            className={fieldItem.valid ? '' : 'input-err'}
                                            ref={props.findInputRef(props.consultRefs, fieldItem.name)}
                                            onKeyDown={(e) => props.clearInputHandler(e, fieldItem.id, fieldItem.name)}
                                            onChange={() => props.inputHandler(
                                                fieldItem.id, fieldItem.name, 
                                                props.findInputRef(props.consultRefs, fieldItem.name).current
                                            )}
                                            id={`sticky-sidemenu-consult-form-input-${fieldItem.id}`} 
                                            type={fieldItem.type}
                                            placeholder={fieldItem.placeholder}
                                            value={fieldItem.value}
                                        />
                                    </div>
                                </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div className="sticky-sidemenu-consult-checkbox-wrap">
                        <div className="form-mode-decor-cosmetic-get-consult-checkbox">
                            <input
                                onClick={props.policyCheckboxHandler}
                                type="checkbox" 
                                id="sticky-sidemenu-consult-checkbox" className="sticky-sidemenu-consult-checkbox"
                            />
                            <label
                                htmlFor="sticky-sidemenu-consult-checkbox"
                            ></label>
                            <span>согласен с <Link to={'/policy'}>политикой конфидициальности</Link></span>
                        </div>
                    </div>
                    <div className="consult-inner-popup-from-controls-row">
                        <div className="consult-popup-from-controls-btn-wrap">
                            <Link
                                onClick={props.sendFormHandler} 
                                className={props.consultState.sendBtnActive ? 
                                    "consult-popup-from-controls-btn" : "consult-popup-from-controls-btn btnDisabled"
                                }                        
                            >Отправить</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
};

export default ContactsPopup;