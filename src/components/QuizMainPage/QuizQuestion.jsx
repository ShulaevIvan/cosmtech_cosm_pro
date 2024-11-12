import React from "react";
import { useEffect, useRef } from "react";
import QuizHappyState from "./QuizHappyState";
const QuizQuestion = (props) => {
    const quizState = props.quizState;
    const formRefs = [
        { id: 1, name: 'name', ref: useRef(null)},
        { id: 2, name: 'phone', ref: useRef(null)},
        { id: 3, name: 'email', ref: useRef(null)},
        { id: 4, name: 'comment', ref: useRef(null)}
    ];
    
    const findFromRef = (targetInputName) => {
        return formRefs.find((item) => item.name === targetInputName).ref;
    };

    const checkInputsValid = () => {
        return quizState.quizFormInputs.filter((item) => 
            (item.inputName === 'name' || item.inputName === 'phone' || item.inputName === 'email') 
                && item.valid && item.inputValue !== '').length;
    };
    
    if (props.happyState && props.happyState.active) {
        return (
            <QuizHappyState 
                order={props.happyState.data.order} 
                description={props.happyState.data.description} 
                title={props.happyState.data.title}
                closeHandler={props.closeHandler}
            />
        )
    }
  
    return (
 
        <React.Fragment>
            
            <div className="quiz-question-form-wrap">
                <div className="quiz-question-img-banner">
                    <img src={quizState.formBanner.img} alt={quizState.formBanner.alt} />
                </div>
              <div className="quiz-question-form-row">
                {quizState.quizFormInputs.filter((item) => item.inputTag === 'input').map((formInput) => {
                    return (
                        <React.Fragment key={formInput.id}>
                            <div className="quiz-quistion-form-input-wrap">
                                <label htmlFor={`quiz-quistion-form-input-${formInput.inputName}`}>
                                    {formInput.inputTitle}
                                </label>
                                <input
                                    ref={findFromRef(formInput.inputName)}
                                    className={formInput.valid ? '' : 'input-err'}
                                    onChange={() => props.quizFormInputHandler(formInput.inputName, findFromRef(formInput.inputName).current)}
                                    onKeyDown={(e) => props.quizFormClearInputHandler(e, formInput.inputName, findFromRef(formInput.inputName).current)}
                                    id={`quiz-quistion-form-input-${formInput.inputName}`}
                                    type="text"
                                    value={formInput.inputValue}
                                    autoComplete="off"
                                    placeholder={formInput.placeholder}
                                />
                            </div>
                        </React.Fragment>
                    )
                })}
              </div>
              <div className="quiz-question-additional-row">
                <div className="quiz-question-form-comment-wrap">
                    {quizState.quizFormInputs.filter((item) => item.inputTag === 'textarea').map((formInput) => {
                        return (
                            <React.Fragment key={formInput.id}>
                                <label htmlFor={`quiz-question-additional-textarea-${formInput.inputName}`}>{formInput.inputTitle}</label>
                                <textarea
                                    ref={findFromRef(formInput.inputName)}
                                    onChange={() => props.quizFormInputHandler(formInput.inputName, findFromRef(formInput.inputName).current)}
                                    id={`quiz-question-additional-textarea-${formInput.inputName}`}
                                    value={formInput.value}
                                    placeholder={formInput.placeholder}
                                ></textarea>
                            </React.Fragment>
                        )
                    })}
                </div>
    
                
                <div className="quiz-question-form-options-wrap">
                    <h3>Способ связи</h3>
                    <div className="quiz-question-select-wrap">
                        <select
                            onChange={(e) => props.quizFormSelectHandler(e.target.value)}
                        >
                            {quizState.сommunicationMethods.map((communicationMethodItem) => {
                                return (
                                    <React.Fragment key={communicationMethodItem.id}>
                                        <option>{communicationMethodItem.value}</option>
                                    </React.Fragment>
                                )
                            })}  
                        </select>
                    </div>
                    <div className="quiz-question-send-btn-wrap">
                        <button 
                            className={checkInputsValid() >= 2 ? '' : 'btnDisabled'}
                            onClick={props.quizFormSendHandler}
                        >Отправить</button>
                    </div>
                </div>
              </div>
            </div>
        </React.Fragment>
    )
};

export default QuizQuestion;