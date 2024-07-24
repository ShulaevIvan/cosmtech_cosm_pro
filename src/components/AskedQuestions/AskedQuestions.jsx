import React from "react";
import { useSelector, useDispatch } from "react-redux";
import questImg from '../../img/500x400.png'
import { activeFaq } from "../../redux/slices/mainPageSlice";

const AskedQuestions = () => {
    const dispatch = useDispatch();
    const faqState = useSelector((state) => state.mainPage.faq);

    const faqHandler = (faqObj) => {
        dispatch(activeFaq({status: faqObj.active ? false: true, id: faqObj.id}));
    };

    return (
        <React.Fragment>
            <section className="faq-section">
                <div className="asked-questions-wrap">
                    <div className="container">
                        <div className="asked-questions-title">
                            <h3 className="main-color-title">Часто задаваемые вопросы</h3>
                        </div>
                        <div className="questions-row">
                            <div className="questions-image-column">
                                <img src={questImg} alt="askedQuestions" />
                            </div>
                            <div className="questions-column">
                                <div className="questions-items-wrap">
                                    {faqState.faqItems.map((faqItem) => {
                                        return (
                                            <React.Fragment key={faqItem.id}>
                                                <div className="question-item-row">
                                                    <div className="question-item-title-wrap" onClick={() => faqHandler(faqItem)}><h4>{faqItem.title}</h4></div>
                                                    <div className="question-item-btn-wrap">
                                                        <span 
                                                            className={faqItem.active ? "question-item-btn-more rotate-question-btn" : "question-item-btn-more"}
                                                            onClick={() => faqHandler(faqItem)}
                                                        ></span>
                                                    </div>
                                                    {faqItem.active ? 
                                                        <div className={faqItem.active ? "question-item-description visible" : "question-item-description"}>
                                                            <p>{faqItem.description}</p>
                                                        </div>
                                                    : null}
                                                </div>
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default AskedQuestions;