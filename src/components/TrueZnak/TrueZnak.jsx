import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { znakOpen, znakPopup } from "../../redux/slices/innerPageSlice";


import TrueZnakPopup from "./TrueZnakPopup";
import TrueZnakHappyState from "./TrueZnakHappyState";

import TrueZnakLogo2 from '../../img/trueZnak2.jpg';
import TrueZnakPlus from '../../img/plus-icon-quest.svg';
import TrueZnakMinus from '../../img/minus-icon-quest.svg'

const TrueZnak = () => {
    const znakState = useSelector((state) => state.innerPage.trueZnak);
    const dispatch = useDispatch();

    const znakQuestHandler = (ansId) => {
        dispatch(znakOpen({questId: ansId}));
    };

    const znakPopupHandler = () => {
        dispatch(znakPopup());
    };

    return (
        <React.Fragment>
            {znakState.popup.active ? 
                <TrueZnakPopup 
                    closeHandler={znakPopupHandler}
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
                            <h3>Система маркировки «Честный знак»</h3>
                            <p className="true-znak-text-min">
                                На нашем косметическом производстве полностью внедрена система «Честный знак».
                                Вся выпускаемая продукция для ваших покупателей отвечает всем нормативным требованиям.
                            </p>
                            <h3>Часто задаваемые вопросы</h3>
                            <div className="true-znak-questions-wrap">
                                {znakState.questions.map((questItem) => {
                                    return (
                                        <React.Fragment key={questItem.id}>
                                            <div 
                                                className={`true-znak-question-item-wrap ${questItem.active ? 'open' : ''}`}
                                            >
                                                <div className="true-znak-question-item-header">
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