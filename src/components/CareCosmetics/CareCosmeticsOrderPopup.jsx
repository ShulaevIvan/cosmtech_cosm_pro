import React from "react";

const CareCosmeticsOrderPopup = (props) => {
    const formState = props.formState;
    const formRefs = props.formRefs;
    
    return (
        <React.Fragment>
            <div className="decorative-cosmetic-popup-bg-wrap">
                <div className="decorative-cosmetic-order-popup-wrap">
                    <div className="decorative-cosmetic-consult-popup-close-btn-wrap">
                        <span 
                            className="decorative-cosmetic-consult-popup-close-btn"
                            onClick={props.closeHandler}
                        ></span>
                    </div>
                    <div className="decorative-cosmetic-order-popup-body">
                        <div className="decorative-cosmetic-order-popup-title">
                            <h3>Запросить рассчет</h3>
                        </div>
                        <div className="decorative-cosmetic-order-form-wrap">
                            {formState.fields.map((fieldItem) => {
                                if (fieldItem.type === 'file') {
                                    return (
                                        <React.Fragment key={fieldItem.id}>
                                            <div className="decorative-cosmetic-order-form-input-wrap">
                                                <div className="decorative-cosmetic-order-form-file-input">
                                                    <label className="input-file">
                                                        <span className="input-file-text" type="text"></span>
                                                        <input
                                                            ref={props.findInputRef(fieldItem.name, formRefs)} 
                                                            type="file" 
                                                            name="file" 
                                                            onChange={() => props.inputHandler(
                                                                fieldItem.id, 
                                                                fieldItem.name,
                                                                props.findInputRef(fieldItem.name, formRefs).current
                                                            )}
                                                        />
                                                        <span className="input-file-btn">Прикрепить ТЗ</span>
                                                        <span className="input-file-display-name">{fieldItem.displayName}</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                }
                                else if (fieldItem.type === 'textarea') {
                                    return (
                                        <React.Fragment key={fieldItem.id}>
                                            <div className="decorative-cosmetic-order-form-input-wrap">
                                                <div className="decorative-cosmetic-order-form-input-wrap">
                                                    <div className="decorative-cosmetic-order-form-input-title-wrap">
                                                        <label htmlFor={`decorative-cosmetic-order-form-input-${fieldItem.id}`}>Комментарий</label>
                                                    </div>
                                                    <textarea
                                                        ref={props.findInputRef(fieldItem.name, formRefs)}
                                                        onChange={() => props.inputHandler(
                                                            fieldItem.id, 
                                                            fieldItem.name,
                                                            props.findInputRef(fieldItem.name, formRefs).current
                                                        )}
                                                        onKeyDown={(e) => props.clearInputHandler(e, fieldItem.id, fieldItem.name, '', true)}
                                                        className={fieldItem.valid ? '' : 'input-err'}
                                                        id={`decorative-cosmetic-order-form-input-${fieldItem.id}`}
                                                        value={fieldItem.value}
                                                        placeholder={fieldItem.placeholder}
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                }
                                return (
                                    <React.Fragment key={fieldItem.id}>
                                        <div className="decorative-cosmetic-order-form-input-wrap">
                                            <div className="decorative-cosmetic-order-form-input-title-wrap">
                                                <label htmlFor={`decorative-cosmetic-order-form-input-${fieldItem.id}`}>
                                                    {fieldItem.title}
                                                </label>
                                            </div>
                                            <input
                                                ref={props.findInputRef(fieldItem.name, formRefs)}
                                                onChange={() => props.inputHandler(
                                                    fieldItem.id, 
                                                    fieldItem.name, 
                                                    props.findInputRef(fieldItem.name, formRefs).current
                                                )}
                                                onKeyDown={(e) => props.clearInputHandler(e, fieldItem.id, fieldItem.name, '', true)}
                                                className={fieldItem.valid ? '' : 'input-err'}
                                                id={`decorative-cosmetic-order-form-input-${fieldItem.id}`} 
                                                type={fieldItem.type}
                                                value={fieldItem.value}
                                                placeholder={fieldItem.placeholder}
                                            />
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                        <div className="form-mode-decor-cosmetic-get-consult-checkbox">
                            <input 
                                type="checkbox" 
                                id="decor-cosmetic-consult-checkbox" 
                                className="decor-cosmetic-get-consult-checkbox"
                                onChange={props.policyHandler} 
                            />
                            <label htmlFor="decor-cosmetic-consult-checkbox"></label>
                            <span>согласен с <a href="/policy">политикой конфидициальности</a></span>
                        </div>
                        <div className="decorative-cosmetic-order-form-btn-wrap">
                            <a 
                                className={`decorative-cosmetic-order-form-btn ${!formState.sendBtnActive ? 'btnDisabled' : null}`}
                                onClick={props.sendFormHandler}
                            >Отправить</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default CareCosmeticsOrderPopup;