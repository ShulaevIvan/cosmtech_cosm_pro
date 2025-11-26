import React from "react";

const TrueZnakPopup = (props) => {

    const formState = props.formState;

    return (
        <React.Fragment>
            <div className="popup-znak-background-wrap">
                <div className="popup-znak-wrap">
                    <div className="sticky-sidemenu-tz-popup-close-btn-wrap">
                        <span 
                            className="sticky-sidemenu-tz-popup-close-btn"
                            onClick={props.closeHandler}
                        ></span>
                    </div>
                    <div className="popup-znak-body">
                        <h3>Консультация по «ЧЗ»</h3>

                        <form>
                            {formState.fields.map((formItem) => {
                                return (
                                    <React.Fragment key={formItem.id}>
                                        <label htmlFor={`znak-input-${formItem.id}`}>{formItem.title}</label>
                                        <div className="znak-form-input-wrap">
                                            <input
                                                className={!formItem.valid ? 'input-err' : ''}
                                                ref={props.findInputRef(formItem.name)}
                                                id={`znak-input-${formItem.id}`} 
                                                onKeyDown={(e) => props.clearInputHandler(e, formItem.id)}
                                                onChange={() => props.inputHandler(formItem.id, formItem.name, props.findInputRef(formItem.name))}
                                                type={formItem.type}
                                                placeholder={formItem.placeholder}
                                                value={formItem.value}
                                            />
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                            <div className="popup-znak-checkbox-wrap">
                                <div className="form-mode-checkbox">
                                    <input onClick={props.policyHandler} type="checkbox" id="popup-znak-policy" className="popup-znak-policy" />
                                    <label htmlFor="popup-znak-policy"></label>
                                    <span>согласен с <a href="/policy">политикой конфидициальности</a></span>
                                </div>
                            </div>
                            <div className="znak-form-send-btn-wrap">
                                <span 
                                    className={props.formState.sendBtnActive ? 'znak-form-send-btn' : "znak-form-send-btn btnDisabled"}
                                >Отправить</span>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};


export default TrueZnakPopup;