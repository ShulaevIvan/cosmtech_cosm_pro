import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    nextStep,
    resetStep,
    validateStep,
    selectProduct,
    selectInnerProduct,
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
    saveTechTaskCustom,
    saveAdvancedServiceCustomValue,
    changeDelivery,
    clearDeliveryCityInput,
    saveDeliveryCity,
    saveResultStep,
    getDeliveryCity,
    saveCalculateResult
} from "../../redux/slices/quizSlice";
import QuizStep1 from './QuizStep1';
import QuizStep2 from './QuizStep2';
import QuizStep3 from "./QuizStep3";
import QuizStep4 from "./QuizStep4";
import QuizStep5 from "./QuizStep5";
import fileToBase64 from "../../functions/fileToBase64";

const QuizMainPage = (props) => {
    const dispatch = useDispatch();
    const stepTitle = useRef(null);
    const quizWrapRef = useRef(null);
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

    const customDeadlineClearInput = (e, inputRef) => {
        if (e.key === 'Backspace') {
            dispatch(saveDeadlineCustomValue({customValue: ''}));
            inputRef.value = '';
            return;
        }
    };

    const productSelectHandler = (product) => {
        dispatch(selectProduct({selectItem: product}));
    };

    const productItemSelectHandler = (e, mainProductId, productName) => {
        dispatch(selectInnerProduct({mainProductId: mainProductId, productName: productName}));
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

    const clearAdvancedServiceHandler = (e, serviceRef) => {
        if (e.key === 'Backspace') {
            serviceRef.value = '';
            dispatch(saveAdvancedServiceCustomValue({commentValue: ''}));
        }
    };

    const advancedServiceSaveCommentHandler = (value) => {
        dispatch(saveAdvancedServiceCustomValue({commentValue: value}));
    };

    const budgetServiceHandler = (value, budgetId) => {
        dispatch(advancedBudgetChange({status: value, budgetId: budgetId}));
    };

    const customServiceBudgetHandler = (value) => {
        dispatch(customBudgetChange({value: value}));
    };

    const deliveryServiceHandler = (value, deliveryId) => {
        dispatch(changeDelivery({status: value, deliveryId: deliveryId}));
    };

    const saveDeliveryCityHandler = async (value) => {
        if (!value) return;
        dispatch(getDeliveryCity(value));
    };

    const clearDeliveryCityHandler = (e, inputRef) => {
        if (e.key === 'Backspace') {
            dispatch(clearDeliveryCityInput());
            inputRef.value = '';
            return;
        }
        dispatch(saveDeliveryCity({cityValue: inputRef.value}))
        
    };

    const techTaskHandler = (value) => {
        dispatch(showTechTask({status: value}));
    };

    const uploadTechTaskHandler = async (e, filenameRef) => {
        if (e.target && e.target.fiels && e.target.fiels[0].length === 0) return;
        const file = e.target.files[0];
        await fileToBase64(file)
        .then((data) => {
            if (data && data.name) {
                const nameLength = data.name.length;
                const printFilename = nameLength > 10 ? `${data.name.match(/^.{10}/)}... ${data.name.match(/.\w+$/)[0]}` : data.name;
                filenameRef.textContent = printFilename;
                dispatch(saveTechTaskCustom({file: data}));
            }  
        });
    };

    const getResultSizeValue = () => {
        const resultPackageString = quizState.quizResult.package.size;
        const maxQuantity = quizState.quizResult.quantity.value;
        const findNumbers = resultPackageString.match(/(\d+)/gm);
        const result = {
            minValue: quizState.quizResult.package.name === 'custom' ? 0 : (Number(findNumbers[0]) * Number(maxQuantity)) / 1000,
            maxValue: quizState.quizResult.package.name === 'custom' ? 0 : (Number(findNumbers[1]) * Number(maxQuantity)) / 1000
        };
        return result;
    };

    const loadCustomPackageFileFormHandler = async (e, text, filenameRef) => {
        if (!e.target || e.target.fiels && e.target.files[0].length === 0) return;
        const file = e.target.files[0];
        await fileToBase64(file)
        .then((data) => {
            if (data && data.file) {
                const nameLength = data.name.length;
                const printFilename = nameLength > 10 ? `${data.name.match(/^.{10}/)}... ${data.name.match(/.\w+$/)[0]}` : data.name;
                filenameRef.textContent = printFilename;
                dispatch(saveCustomPackageField({textData: text, fileData: data}))
                return;
            }
            dispatch(saveCustomPackageField({textData: '', fileData: ''}));
            filenameRef.textContent = '';
        });
    };

    const calculateResult = () => {
        const conditionsPrice = Number(quizState.quizResult.conditions.price);
        const deadlineModifer = Number(quizState.quizResult.deadLine.ratio);
        const deadLineMaxDays = Number(quizState.quizResult.deadLine.maxDays);
        const packagePricePerItem = Number(quizState.quizResult.package.price);
        const productPricePerItem = Number(quizState.quizResult.product.price);
        const totalQuantity = Number(quizState.quizResult.quantity.value);
        const productItemSum = (packagePricePerItem + productPricePerItem);
        const allProductSum = ((productItemSum * totalQuantity) + conditionsPrice) * deadlineModifer;

        dispatch(saveCalculateResult());
    };

    useEffect(() => {
        const stepData = findStep(quizState.currentStep);
        if (stepData) {
            stepTitle.current.textContent = stepData.stepTitle;
        }
    }, [quizState.currentStep]);

    useEffect(() => {
        quizWrapRef.current.className = "quiz-content-wrap quiz-content-wrap-aimate"
        const animationTimeout = setTimeout(() => {
            quizWrapRef.current.className = "quiz-content-wrap";
            clearTimeout(animationTimeout)
        }, 1000);
        
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
                        <div
                            ref={quizWrapRef} 
                            className="quiz-content-wrap"
                        >
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
                                    productItemSelectHadnler={productItemSelectHandler}
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
                                    deadlineClearInput={customDeadlineClearInput}
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
                                    loadFileHandler={loadCustomPackageFileFormHandler}
                                    validateStep={validateCurrentStep}
                                    setDefaultSize={setDefaultSize}
                                /> 
                            : null}
                            {
                                quizState.currentStep === 4 ? 
                                    <QuizStep4
                                        stepData={findStep(4)}
                                        serviceChangeHandler={advancedServiceHandler}
                                        clearServiceInputHandler ={clearAdvancedServiceHandler}
                                        budgetChangeHandler={budgetServiceHandler}
                                        customBudgetHandler={customServiceBudgetHandler}
                                        saveCommentHandler={advancedServiceSaveCommentHandler}
                                        techTaskHandler={techTaskHandler}
                                        uploadTechTaskHandler={uploadTechTaskHandler}
                                        validateStep={validateCurrentStep}
                                    />
                                : null
                            }
                            {
                                quizState.currentStep === 5 ? 
                                    <QuizStep5
                                        stepData={findStep(5)}
                                        quizResult={quizState.quizResult}
                                        test={quizState}
                                        getSizeValue ={getResultSizeValue}
                                        deliveryChangeHandler={deliveryServiceHandler}
                                        deliveryCityHandler={saveDeliveryCityHandler}
                                        deliveryCityClearHandler={clearDeliveryCityHandler}
                                        calculate={calculateResult}
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