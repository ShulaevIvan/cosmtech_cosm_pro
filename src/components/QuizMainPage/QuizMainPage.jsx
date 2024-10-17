import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    nextStep,
    resetStep,
    validateStep,
    selectProduct,
    selectProductPage,
    disableQuantity, 
    changeQuantity, 
    changeMaxQuantity,
    selectDeadline,
    saveDeadlineCustomValue,
    showCustomPackageField,
    selectPackage,
    selectPackageSize,
    saveCustomPackageField,
    clearCustomPackageField,
    advancedServiceChange,
    advancedBudgetChange,
    customBudgetChange,
    showTechTask,
    saveAdvancedServiceCustomValue,
    changeDelivery,
    saveDeliveryCity,
    saveResultStep
} from "../../redux/slices/quizSlice";
import QuizStep1 from './QuizStep1';
import QuizStep2 from './QuizStep2';
import QuizStep3 from "./QuizStep3";
import QuizStep4 from "./QuizStep4";
import QuizStep5 from "./QuizStep5";

const QuizMainPage = (props) => {
    const dispatch = useDispatch();
    const stepTitle = useRef(null);
    const quizState = useSelector((state) => state.quiz);
    const popupWrapRef = useRef(null);

    const nextStepHandler = async (param) => {
        return new Promise((resolve, reject) => {
            dispatch(nextStep({stepParam: param}));
            if (Math.sign(param) === -1) {
                resolve(dispatch(resetStep({stepNumber: quizState.currentStep})));
                return;
            }
            dispatch(saveResultStep({stepNumber: quizState.currentStep}));
            resolve(nextStep({stepParam: param}));
        })
    };

    const quantityBlockHandler = (param, customValue) => {
        if (customValue) {
            return;
        }
        dispatch(disableQuantity({status: param}));
    };

    const changeQuantityHandler = (numValue) => {
        if (isNaN(numValue) || numValue === '') return;
        dispatch(changeQuantity({qntValue: numValue}));
    };

    const changeMaxQuantityHandler = async (numValue) => {
        if (isNaN(numValue) || numValue === '') return;
        return new Promise((resolve, reject) => {
            resolve(dispatch(changeMaxQuantity({qntValue: numValue})));
        })
    };

    const deadlineHandler = (deadLineItem) => {
        dispatch(selectDeadline({itemId: deadLineItem.id}));
    };

    const customDeadlineSaveHandler = (saveValue) => {
        dispatch(saveDeadlineCustomValue({customValue: saveValue}));
    };

    const productSelectHandler = (product) => {
        dispatch(selectProduct({selectItem: product}));
    };

    const productPageSelectHandler = (productId) => {
        dispatch(selectProductPage({nextPageId: productId}));
    };

    const validateCurrentStep = () => {
        dispatch(validateStep());
    };

    const findStep = (stepNum) => {
        const stepData = quizState.qizSteps.find((quizItem) => quizItem.stepNum === stepNum);
        return stepData;
    };

    const showCustomPackageHandler = (status) => {
        dispatch(showCustomPackageField({status: status}));
    };

    const saveCustomPackageHandler = (text, file) => {
        if (!text) return;
        dispatch(saveCustomPackageField({textData: text, fileData: file}))
    };

    const validateCustomPackageHandler = (text) => {
        dispatch(saveCustomPackageField({textData: text, fileData: ''}))
    };

    const clearCustomTextField = (e, inputElemRef) => {
        if (e.key === 'Backspace') {
            inputElemRef.value = '';
            dispatch(clearCustomPackageField());
        }
    };
    
    const selectPackageHandler = (packageId) => {
        dispatch(selectPackage({packageId: packageId}));
    };

    const selectPackageSizeHandler = (sizeValue, sizeObj) => {
        if (!sizeValue) return;
        dispatch(selectPackageSize({packageId: sizeObj.id, sizeValue: sizeValue}));
    };

    const setDefaultSize = (packageItem) => {
        const targetPackage = packageItem.sizes.find((item) => item.packageId === packageItem.id && item.selected);
        if (targetPackage) {
            return `${targetPackage.from} ${targetPackage.value} ${targetPackage.to} ${targetPackage.max} ${targetPackage.name}`;
        } 
    };

    const advancedServiceHandler = (value, serviceId) => {
        dispatch(advancedServiceChange({status: value, serviceId: serviceId}));
    };

    const budgetServiceHandler = (value, budgetId) => {
        dispatch(advancedBudgetChange({status: value, budgetId: budgetId}));
    };

    const customServiceBudgetHandler = (value) => {
        dispatch(customBudgetChange({value: value}));
    };

    const advancedServiceSaveCommentHandler = (value) => {
        dispatch(saveAdvancedServiceCustomValue({commentValue: value}));
    };

    const deliveryServiceHandler = (value, deliveryId) => {
        dispatch(changeDelivery({status: value, deliveryId: deliveryId}));
    };

    const saveDeliveryCityHandler = (value) => {
        dispatch(saveDeliveryCity({cityValue: value}));
    };

    const techTaskHandler = (value) => {
        dispatch(showTechTask({status: value}));
    };

    useEffect(() => {
        const stepData = findStep(quizState.currentStep);
        if (stepData) {
            stepTitle.current.textContent = stepData.stepTitle;
        }
    }, [quizState.currentStep]);

    useEffect(() => {
        if (quizState.currentStep === 4) {
            console.log(quizState.quizResult);
        } 
        
    }, [quizState.currentStep]);

    return (
        <React.Fragment>
            <div className="quiz-mainpage-popup-background" ref={popupWrapRef}>
            <div
                className="quiz-mainpage-popup-wrap"
            >
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
                                    productPageHandler = {productPageSelectHandler}
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
                            {quizState.currentStep === 3 ? 
                                <QuizStep3 
                                    stepData={findStep(3)}
                                    showCustomPackageHandler={showCustomPackageHandler}
                                    saveCustomPackageHandler={saveCustomPackageHandler}
                                    validateCustomPackageHandler={validateCustomPackageHandler}
                                    clearCustomPackageText={clearCustomTextField}
                                    selectPackageHandler={selectPackageHandler}
                                    selectPackageSizeHandler={selectPackageSizeHandler}
                                    validateStep={validateCurrentStep}
                                    setDefaultSize={setDefaultSize}
                                /> 
                            : null}
                            {
                                quizState.currentStep === 4 ? 
                                    <QuizStep4
                                        stepData={findStep(4)}
                                        serviceChangeHandler = {advancedServiceHandler}
                                        budgetChangeHandler = {budgetServiceHandler}
                                        customBudgetHandler = {customServiceBudgetHandler}
                                        saveCommentHandler = {advancedServiceSaveCommentHandler}
                                        techTaskHandler={techTaskHandler}
                                        validateStep={validateCurrentStep}
                                    />
                                : null
                            }
                            {
                                quizState.currentStep === 5 ? 
                                    <QuizStep5
                                        stepData={findStep(5)}
                                        deliveryChangeHandler = {deliveryServiceHandler}
                                        deliveryCityHandler= {saveDeliveryCityHandler}
                                    />
                                : null
                            }
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
                            
                            <div className={quizState.maxSteps === quizState.currentStep ? "next-step-btn-wrap-hidden" : "next-step-btn-wrap"}>
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