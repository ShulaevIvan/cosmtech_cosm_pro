import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const ExcursionToProductionPopup = (props) => {
    const formState = props.formState;

    const inputRefs = [
        {name:'name', ref:useRef(null)},
        {name:'phone', ref:useRef(null)},
        {name:'date', ref:useRef(null)},
        {name:'time', ref:useRef(null)}
    ];
    const findInputRef = (inputName) => {
        return inputRefs.find((item) => item.name === inputName).ref;
    };

    return (
        <React.Fragment>
            <div className="excursion-production-popup-wrap">
                <span
                    onClick={props.popupHandler} 
                    className="excursion-production-close-btn"
                ></span>
                <div className="excursion-production-title-wrap">
                    <h2>Предварительная запись на экскурсию</h2>
                    <p>Мы организуем для вас экскурсию в будние дни с 10:00 до 17:00</p>

                </div>
                <div className="excursion-production-popup-body">
                    
                    <div className="excursion-production-form-row">
                        {formState.fields.map((fieldItem) => {
                            return (
                                <React.Fragment key={fieldItem.id}>
                                    <div className="excursion-production-form-input-wrap">
                                        <label htmlFor={`excursion-input-${fieldItem.id}`}>{fieldItem.title}</label>
                                        <div className="excursion-production-form-input-wrap">
                                            <input
                                                {...fieldItem.type === 'date' ? {min: fieldItem.minDate} : null}
                                                className={fieldItem.valid ? '' : 'input-err'}
                                                ref={findInputRef(fieldItem.name)}
                                                id={`excursion-input-${fieldItem.id}`} 
                                                type={fieldItem.type}
                                                placeholder={fieldItem.placeholder}
                                                value={fieldItem.value}
                                                onChange={() => props.inputHandler(fieldItem, findInputRef(fieldItem.name).current)}
                                                onKeyDown={(e) => props.clearInputHandler(e, fieldItem.id, fieldItem.name)}
                                            />
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div className="form-mode-get-excursion-popup-checkbox">
                        <input
                            onChange={props.checkboxHandler}
                            type="checkbox" 
                            id="get-excursion-popup-checkbox" 
                            className="get-excursion-popup-checkbox"
                        />
                        <label
                            htmlFor="get-excursion-popup-checkbox"
                        ></label>
                        <span>согласен с <Link to={'/policy'}>политикой конфидициальности</Link></span>
                    </div>
                    <div className="excursion-production-send-btn-wrap">
                        <Link
                            onClick={props.sendFormHandler}
                            className={formState.sendBtnActive ? "excursion-production-send-btn" : "excursion-production-send-btn btnDisabled"}
                        >Отправить</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ExcursionToProductionPopup;