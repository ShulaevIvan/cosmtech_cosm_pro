import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextStep } from "../../redux/slices/quizSlice";
import QuizStep1 from './QuizStep1';

const QuizMainPage = (props) => {
    const dispatch = useDispatch();
    const stepTitle = useRef(null);
    const quizState = useSelector((state) => state.quiz);

    const nextStepHandler = (param) => {
        dispatch(nextStep({stepParam: param}));
    };

    const findStep = (stepNum) => {
        const stepData = quizState.qizSteps.find((quizItem) => quizItem.stepNum === stepNum);
        return stepData;
    };

    const productSelectHandler = (product) => {
        console.log(product)
    };

    useEffect(() => {
        const stepData = findStep(quizState.currentStep);
        if (stepData) {
            stepTitle.current.textContent = stepData.stepTitle;
        }

    }, [quizState.currentStep]);

    return (
        <React.Fragment>
            <div className="quiz-mainpage-popup-wrap">
                <div className="quiz-mainpage-body-row">
                    <div className="quiz-controlpanel-wrap">
                        <div className="quiz-controlpanel-item quiz-controlpanel-item-active">1</div>
                        <div className="quiz-controlpanel-item">2</div>
                        <div className="quiz-controlpanel-item">3</div>
                        <div className="quiz-controlpanel-item">4</div>
                    </div>
                        <div className="quiz-content-wrap">
                        <div className="quiz-mainpage-title-row">
                            <div className="quiz-mainpage-title-wrap">
                                <h2 ref={stepTitle}></h2>
                            </div>
                            <div className="quiz-mainpage-close-btn-wrap">
                                <span 
                                    className="close-popup-btn"
                                    onClick={props.closeHandler}
                                ></span>
                            </div>
                        </div>
                        <div className="quiz-mainpage-content-wrap">
                            {quizState.currentStep === 1 ? 
                                <QuizStep1 
                                    stepData={findStep(1)} 
                                    productSelectHandler={productSelectHandler}
                                /> 
                            : null}
                            
                        </div>
                        <div className="next-step-wrap">
                            <div className="prev-step-btn-wrap">
                                {quizState.showPrevStepBtn ? 
                                    <span 
                                        className="prev-step-btn"
                                        onClick={() => nextStepHandler(-1)}
                                    >{quizState.prevBtnText}</span> 
                                : null}
                            </div>
                            <div className="next-step-btn-wrap">
                                <span 
                                    className="next-step-btn"
                                    onClick={() => nextStepHandler(1)}
                                >{quizState.nextBtnText}</span>
                            </div>
                            <div className="step-counter-wrap">
                                <div className="step-counter-value">
                                    <span><span>Step:</span> {quizState.currentStep} / </span>
                                    <span>{quizState.maxSteps}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};


export default QuizMainPage;