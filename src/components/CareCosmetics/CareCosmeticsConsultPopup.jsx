import React from "react";

const CareCosmeticsConsultPopup = (props) => {
    const formState = props.formState;
    const formRefs = props.formRefs;

    return (
        <React.Fragment>
            <div className="decorative-cosmetic-consult-popup-wrap">
                <div className="decorative-cosmetic-consult-popup-close-btn-wrap">
                    <span 
                        className="decorative-cosmetic-consult-popup-close-btn"
                        onClick={props.closeHandler}
                    ></span>
                </div>
                <div className="decorative-cosmetic-consult-popup-body">
                    <h3>Получить консультацию</h3>
                </div>
                <div className="decorative-cosmetic-consult-popup-form-wrap">
                    {formState.fields.map((formItem) => {
                        return (
                            <React.Fragment key={formItem.id}>
                                <label htmlFor={`care-cosmetic-consult-popup-form-input-${formItem.id}`}>
                                    {formItem.title}
                                </label>
                                    <div className="decorative-cosmetic-consult-popup-form-input">
                                        <input
                                            className={!formItem.valid ? 'input-err' : ''}
                                            ref={props.findInputRef(formItem.name, formRefs)}
                                            onChange={() => props.inputHandler(formItem.id, formItem.name, props.findInputRef(formItem.name, formRefs).current)}
                                            onKeyDown={(e) => props.clearInputHandler(e, formItem.id, formItem.name, null, true)}
                                            id={`care-cosmetic-consult-popup-form-input-${formItem.id}`} 
                                            type={formItem.type}
                                            value={formItem.value}
                                            placeholder={formItem.placeholder}
                                        />
                                    </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className="decor-cosmetic-get-consult-checkbox-wrap">
                    <div className="form-mode-decor-cosmetic-get-consult-checkbox">
                        <input type="checkbox" id="decor-cosmetic-consult-checkbox" className="decor-cosmetic-get-consult-checkbox" />
                        <label 
                            htmlFor="decor-cosmetic-consult-checkbox"
                            onClick={props.policyHandler}
                        ></label>
                        <span>согласен с <a href="/policy">политикой конфидициальности</a></span>
                    </div>
                </div>
                <div className="decorative-cosmetic-consult-popup-form-send-btn-wrap">
                    <a 
                        className={`decorative-cosmetic-consult-popup-form-send-btn ${!formState.sendBtnActive ? 'btnDisabled': ''}`} 
                        onClick={props.sendFormHandler}
                    >Отправить</a>
                </div>
            </div>
        </React.Fragment>
    )
};

export default CareCosmeticsConsultPopup;