import React from "react";
import { Link } from "react-router-dom";

const DecorativeCosmeticsConsultPopup = (props) => {
    const popupState = props.popupState;
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
                            <React.Fragment>
                                <label htmlFor={`decorative-cosmetic-consult-popup-form-input-${fieldItem.id}`}>
                                    {fieldItem.title}
                                </label>
                                <div className="decorative-cosmetic-consult-popup-form-input">
                                    <input
                                        id={`decorative-cosmetic-consult-popup-form-input-${fieldItem.id}`} 
                                        type={fieldItem.type} 
                                        placeholder={fieldItem.placeholder}
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
                    >Отправить</Link>
                </div>
            </div>
        </React.Fragment>
    )
};

export default DecorativeCosmeticsConsultPopup;