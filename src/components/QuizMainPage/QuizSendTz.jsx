import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import QuizHappyState from "./QuizHappyState";

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

    const checkInputsValid = () => {
        const checkFile = tzState.quizFormInputs.filter((item) => item.inputName === 'file' && item.valid && item.inputValue !== '')
        if (checkFile && checkFile.length > 0) {
            const validFields = tzState.quizFormInputs.filter((item) => 
                (item.inputName === 'phone' || item.inputName === 'email') && item.valid && item.inputValue !== '');
            return 2 + validFields.length;
        }
        return 0;
    };

    const displayUploadFilename = () => {
        const checkFilename = tzState.quizFormInputs.find((item) => item.inputName === 'file' && item.valid);
        if (checkFilename) {
            return checkFilename.inputValue.name;
        }
        return 'файл не прикреплен'
    };
    
    if (props.happyState && props.happyState.active) {
        return (
            <QuizHappyState 
                order={props.happyState.data.order} 
                description={props.happyState.data.description} 
                title={props.happyState.data.title} 
            />
        )
    }

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
                                            onChange={(e) => props.quizFromInputHandler(e, tzInput.inputName, findFromRef(tzInput.inputName).current)}
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
                                    onChange={(e) => props.quizFromInputHandler(e.target.files, 'file', findFromRef('file'))}
                                    type="file" 
                                    name="file"
                                />
                                <span className="input-file-btn">Прикрепить файл</span>
                            </label>
                        </div>
                        <div className="tz-form-wrap-file-input-description">{displayUploadFilename()}</div>
                        <div className="tz-form-send-btn-wrap">
                            <button
                                onClick={props.quizSendTzHandler} 
                                className={checkInputsValid() < 3 ? 
                                    "tz-form-send-btn btnDisabled" : "tz-form-send-btn"
                                }
                            >Отправить</button>
                        </div>
                    </form>
                </div>
                <div className="tz-download-template-wrap">
                    <div className="tz-download-template-text-wrap">
                        <p>Шаблон технического задания для разработки продукта, который поможет детализировать функциональные характеристики. </p>
                    </div>
                    <div className="tz-download-template-btn-wrap">
                        <Link
                            to={`${tzState.tzTemplateUrl}`}
                            target={'_blank'}
                        >Скачать шаблон ТЗ</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default QuizSendTz;