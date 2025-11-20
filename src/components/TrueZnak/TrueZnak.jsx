import React from "react";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { 
    znakOpen, 
    znakPopup, 
    znakPopupPolicy,
    znakPopupInput,
    znakClearPopupInput,
    validateZnakPopupForm
} from "../../redux/slices/innerPageSlice";

import TrueZnakPopup from "./TrueZnakPopup";
import TrueZnakHappyState from "./TrueZnakHappyState";

import TrueZnakLogo2 from '../../img/trueZnak2.jpg';
import TrueZnakPlus from '../../img/plus-icon-quest.svg';
import TrueZnakMinus from '../../img/minus-icon-quest.svg'

const TrueZnak = () => {
    const znakState = useSelector((state) => state.innerPage.trueZnak);
    const znakPopupForm = useSelector((state) => state.innerPage.trueZnak.popup);
    const dispatch = useDispatch();

    const znakPopupFormRefs = [
        { name: 'name', ref: useRef(null)},
        { name: 'phone', ref: useRef(null)}
    ];

    const findInputRef = (inputType) => {
        return znakPopupFormRefs.find((item) => item.name === inputType).ref;
    };

    const znakQuestHandler = (ansId) => {
        dispatch(znakOpen({questId: ansId}));
    };

    const znakPopupHandler = () => {
        dispatch(znakPopup());
    };

    const znakPolicyHandler = () => {
        dispatch(znakPopupPolicy());
    };

    const znakInputHandler = (inputId, inputType, inputRef) => {
        dispatch(znakPopupInput({fieldId: inputId, fieldType: inputType, fieldValue: inputRef.current.value}));
    };
    
    const znakClearInputHandler = (e, inputId) => {
        if (e.key === 'Backspace') {
            dispatch(znakClearPopupInput({inputId: inputId}))
        }
    };

    useEffect(() => {
        dispatch(validateZnakPopupForm());
    }, [znakPopupForm.fields, znakPopupForm.policyActive])

    return (
        <React.Fragment>
            {znakState.popup.active ? 
                <TrueZnakPopup 
                    formState={znakPopupForm}
                    closeHandler={znakPopupHandler}
                    inputHandler={znakInputHandler}
                    clearInputHandler={znakClearInputHandler}
                    policyHandler={znakPolicyHandler}
                    findInputRef={findInputRef}
                /> 
            : null}
            {znakState.happyStatePopup.active ? 
                <TrueZnakHappyState 
                    closeHandler={znakPopupHandler}
                /> 
            : null}
            <section>
                <div className="container">
                    <div className="true-znak-row">
                        
                        <div className="true-znak-image-wrap">
                            <div className="true-znak-img-wrap">
                                <img src={TrueZnakLogo2} alt="#" />
                            </div>
                            <div className="true-znak-btn-wrap">
                                <Link 
                                    className="true-znak-btn"
                                    onClick={znakPopupHandler}
                                >Получить консультацию</Link>
                            </div>
                        </div>
                        <div className="true-znak-content-wrap">
                            <h3>Производство косметики и «Честный знак»</h3>
                            <p className="true-znak-text-min">
                                На нашем производстве полностью внедрена система <strong>«Честный знак»</strong>.
                                Вся выпускаемая продукция для ваших покупателей отвечает всем нормативным требованиям.
                            </p>
                            <p className="true-znak-text-min">Специфику работы можно уточнить у менеджера.</p>
                            <h3>Часто задаваемые вопросы</h3>
                            <div className="true-znak-questions-wrap">
                                {znakState.questions.map((questItem) => {
                                    return (
                                        <React.Fragment key={questItem.id}>
                                            <div 
                                                className={`true-znak-question-item-wrap ${questItem.active ? 'open' : ''}`}
                                            >
                                                <div className="true-znak-question-item-header" onClick={() => znakQuestHandler(questItem.id)}>
                                                    <p>{questItem.quest}</p>
                                                </div>
                                                <div 
                                                    className="true-znak-question-item-icon-wrap"
                                                    onClick={() => znakQuestHandler(questItem.id)}
                                                >
                                                    <img src={questItem.active ? TrueZnakMinus : TrueZnakPlus} alt="#" />
                                                </div>
                                                <div className={`true-znak-question-item-body ${questItem.active ? '' : 'hidden'}`}>
                                                    <p>{questItem.ans}
                                                    </p>
                                                    <div className="true-znak-link-wrap">
                                                        <span>Оригинал:</span> <Link 
                                                            to={questItem.linkUrl} 
                                                            target={'_blank'}
                                                        >{questItem.linkName}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default TrueZnak;