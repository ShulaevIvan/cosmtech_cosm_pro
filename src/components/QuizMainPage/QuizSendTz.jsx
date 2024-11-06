import React from "react";
import { useEffect, useRef } from "react";

const QuizSendTz = (props) => {
    const tzState = props.quizState;
    const formRefs = [
        { id: 1, name: 'name', ref: useRef(null)},
        { id: 2, name: 'phone', ref: useRef(null)},
        { id: 3, name: 'email', ref: useRef(null)},
        { id: 4, name: 'file', ref: useRef(null)}
    ];

    const findFromRef = (targetInputName) => {
        return formRefs.find((item) => item.name === targetInputName).ref;
    };

    return (
        <React.Fragment>
            <div className="tz-form-row">
                <div className="tz-form-img-wrap">
                    <img src={tzState.formBanner.img} alt={tzState.formBanner.alt} />
                </div>
               
                <div className="tz-form-wrap">
                    <form>
                        {tzState.quizFormInputs.filter((item) => item.inputName !== 'file').map((tzInput) => {
                            return (
                                <React.Fragment key={tzInput.id}>
                                    <label htmlFor={`tz-${tzInput.inputName}-${tzInput.id}`}>
                                        {tzInput.inputTitle}
                                    </label>
                                    <div className="tz-form-input-wrap">
                                        <input
                                            ref={findFromRef(tzInput.inputName)}
                                            className={tzInput.valid ? '' : 'input-err'}
                                            onChange={() => props.quizFromInputHandler(tzInput.inputName, findFromRef(tzInput.inputName).current)}
                                            onKeyDown={(e) => props.quizFormClearInputHandler(e, tzInput.inputName, findFromRef(tzInput.inputName).current)}
                                            id={`tz-${tzInput.inputName}-${tzInput.id}`} 
                                            type={tzInput.inputType}
                                            value={tzInput.inputValue}
                                            placeholder={tzInput.placeholder}
                                        />
                                    </div>
                                </React.Fragment>
                            )
                        })}
                        <div className="tz-form-wrap-file-input">
                            <label className="input-file">
                                <span className="input-file-text" type="text"></span>
                                <input
                                    ref={findFromRef('file')}
                                    onChange={() => props.quizFromInputHandler('file', findFromRef('file').current)}
                                    type="file" 
                                    name="file"
                                />
                                <span className="input-file-btn">Прикрепить файл</span>
                            </label>
                        </div>
                        <div className="tz-form-send-btn-wrap">
                            <button className="tz-form-send-btn">Отправить</button>
                        </div>
                    </form>
                </div>
                <div className="tz-download-template-wrap">
                    <div className="tz-download-template-text-wrap">
                        <p>Шаблон технического задания для разработки продукта, который поможет детализировать функциональные характеристики. </p>
                    </div>
                    <div className="tz-download-template-btn-wrap">
                        <button>Скачать Шаблон ТЗ</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default QuizSendTz;