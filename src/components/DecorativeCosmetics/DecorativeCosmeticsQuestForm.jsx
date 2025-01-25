import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const DecorativeCosmeticsQuestForm = (props) => {
    const formState = props.formState;
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
            <div className="container">
                <div className="decorative-cosmetics-consult-form-wrap">
                   
                    <div className="decorative-cosmetics-consult-form">
                        <div className="decorative-cosmetics-consult-form-text">
                            <h3>Остались вопросы?</h3>
                            <p>Вы можете получить консультацию относительно наших услуг заполнив форму.</p>
                        </div>
                        {formState.fields.map((fieldItem) => {
                            return (
                                <React.Fragment key={fieldItem.id}>
                                    <div className="decorative-cosmetics-consult-form-input-wrap">
                                        <div className="decorative-cosmetics-consult-form-input-wrap">
                                            <label htmlFor={`decorative-cosmetics-consult-form-input-${fieldItem.id}`}>
                                                {fieldItem.title}
                                            </label>
                                            <input
                                                ref={findInputRef(fieldItem.name)}
                                                className={fieldItem.valid ? '' : 'input-err'}
                                                onChange={() => props.inputHandler(fieldItem.id, fieldItem.name, findInputRef(fieldItem.name).current)}
                                                onKeyDown={(e) => props.clearInputHandler(e, fieldItem.id, fieldItem.name)}
                                                id={`decorative-cosmetics-consult-form-input-${fieldItem.id}`} 
                                                type={fieldItem.type}
                                                placeholder={fieldItem.placeholder}
                                                value={fieldItem.value}
                                            />
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                        <div className="decor-cosmetic-quest-from-checkbox-wrap">
                            <input
                                onClick={props.policyHandler}
                                type="checkbox" 
                                id="decor-quest-from-checkbox" className="decor-cosmetic-quest-from-checkbox"
                            />
                            <label
                                htmlFor="decor-quest-from-checkbox"
                            ></label>
                            <span>согласен с <Link to={'/policy'}>политикой конфидициальности</Link></span>
                        </div>
                        <div className="decorative-cosmetics-consult-form-btn-wrap">
                            <span
                                className={formState.sendBtnActive ? 
                                    "decorative-cosmetics-consult-form-btn" : "decorative-cosmetics-consult-form-btn btnDisabled"
                                }
                                onClick={props.sendFormHandler}
                            >Отправить</span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default DecorativeCosmeticsQuestForm;