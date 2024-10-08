import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    nextStep,
    validateStep,
    selectProduct, 
    disableQuantity, 
    changeQuantity, 
    changeMaxQuantity,
    selectDeadline,
    saveDeadlineCustomValue
} from "../../redux/slices/quizSlice";
import QuizStep1 from './QuizStep1';
import QuizStep2 from './QuizStep2';

const QuizMainPage = (props) => {
    const dispatch = useDispatch();
    const stepTitle = useRef(null);
    const quizState = useSelector((state) => state.quiz);

    const nextStepHandler = (param) => {
        dispatch(nextStep({stepParam: param}));
    };

    const quantityBlockHandler = (param, customValue) => {
        if (customValue) {
            return;
        }
        dispatch(disableQuantity({status: param}));
    };

    const changeQuantityHandler = (numValue) => {
        dispatch(changeQuantity({qntValue: numValue}));
    };

    const changeMaxQuantityHandler = (numValue) => {
        dispatch(changeMaxQuantity({qntValue: numValue}));
    };

    const deadlineHandler = (deadLineItem) => {
        dispatch(selectDeadline({itemId: deadLineItem.id}));
    };

    const customDeadlineSaveHandler = (saveValue) => {
        dispatch(saveDeadlineCustomValue({customValue: saveValue}));
    };

    const findStep = (stepNum) => {
        const stepData = quizState.qizSteps.find((quizItem) => quizItem.stepNum === stepNum);
        return stepData;
    };

    const productSelectHandler = (product) => {
        dispatch(selectProduct({selectItem: product}));
    };

    const validateCurrentStep = () => {
        dispatch(validateStep());
    };

    useEffect(() => {
        const stepData = findStep(quizState.currentStep);
        if (stepData) {
            stepTitle.current.textContent = stepData.stepTitle;
        }
    }, [quizState.currentStep]);
    

    return (
        <React.Fragment>
            <div className="quiz-mainpage-popup-background">
            <div className="quiz-mainpage-popup-wrap">
                <div className="quiz-mainpage-body-row">
                    <div className="quiz-controlpanel-wrap">
                        {quizState.quizMenu.map((quizMenuItem) => {
                            return (
                                <React.Fragment key={quizMenuItem.id}>
                                    <div className={
                                        quizMenuItem.active ? 
                                            "quiz-controlpanel-item quiz-controlpanel-item-active": "quiz-controlpanel-item"
                                        }
                                    >{quizMenuItem.name}</div>
                                </React.Fragment>
                            )
                        })}
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
                            {quizState.currentStep === 2 ? 
                                <QuizStep2 
                                    stepData={findStep(2)}
                                    qntHandler={quantityBlockHandler}
                                    changeQntHandler={changeQuantityHandler}
                                    changeMaxQntHandler={changeMaxQuantityHandler}
                                    deadlineHandler={deadlineHandler}
                                    deadlineSaveHandler={customDeadlineSaveHandler}
                                    validateStep={validateCurrentStep}
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
                                    className={
                                        quizState.qizSteps.find((item) => item.stepValid && item.stepNum === quizState.currentStep) ? 
                                            "next-step-btn" : "next-step-btn btnDisabled" 
                                        }
                                    onClick={() => nextStepHandler(1)}
                                >{quizState.nextBtnText}</span>
                            </div>
                            <div className="step-counter-wrap">
                                <div className="step-counter-value">
                                    <span><span>Шаг:</span> {quizState.currentStep} / </span>
                                    <span>{quizState.maxSteps}</span>
                                </div>
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