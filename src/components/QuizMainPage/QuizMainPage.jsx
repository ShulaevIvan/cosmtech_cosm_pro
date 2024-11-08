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
    saveCalculateResult,
    saveQuizOrderInput,
    saveQuizUserdata,
    saveQuizOrderSize,
    sendQuizOrder,
    sendQuizQuestionOrder,
    selectQuizMenu,
    quizQuestionSaveInputValue,
    quizQuestionSelectCommunication,
    quizTzSaveInput,
    sendQuizTzOrder
} from "../../redux/slices/quizSlice";
import QuizStep1 from './QuizStep1';
import QuizStep2 from './QuizStep2';
import QuizStep3 from "./QuizStep3";
import QuizStep4 from "./QuizStep4";
import QuizStep5 from "./QuizStep5";
import QuizQuestion from "./QuizQuestion";
import QuizSendTz from "./QuizSendTz"
import fileToBase64 from "../../functions/fileToBase64";
import { Link } from "react-router-dom";

const QuizMainPage = (props) => {
    const dispatch = useDispatch();
    const stepTitle = useRef(null);
    const quizWrapRef = useRef(null);
    const quizState = useSelector((state) => state.quiz);
    const quizQuestionState = useSelector((state) => state.quiz.quizQuestion);
    const quizTzState = useSelector((state) => state.quiz.quizTz);
    const popupWrapRef = useRef(null);
    const happyState = quizState.quizHappyState;

    const selectQuizMenuHandler = (quizMenuItem) => {
        dispatch(selectQuizMenu({menuId: quizMenuItem.id}));
    };

    const findActiveMenu = () => {
        const activeMenu = quizState.quizMenu.find((item) => item.active);

        return activeMenu;
    };

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
        if ((!e.target || e.target.fiels) && e.target.files[0].length === 0) return;
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
        const getSize = getResultSizeValue();
        dispatch(saveQuizOrderSize({minWeight: getSize.minValue, maxWeight: getSize.maxValue}));
        dispatch(saveCalculateResult());
        dispatch(saveQuizUserdata());
    };

    const validateQuizOrder = (inputRef, typeValue) => {
        dispatch(saveQuizOrderInput({inputValue: inputRef.value, inputType: typeValue}))
    };

    const sendQuizOrderHandler = async () => {
        return new Promise((resolve, reject) => {
            const getSize = getResultSizeValue();
            resolve(dispatch(saveQuizOrderSize({minWeight: getSize.minValue, maxWeight: getSize.maxValue})));
        })
        .then(() => {
            dispatch(sendQuizOrder(quizState.quizResult.resultOrderForm));
        });
    };

    const clearQuizOrderInputHandler = (e, inputRef, inputType) => {
        if (e.key === 'Backspace') {
            inputRef.value = '';
            dispatch(saveQuizOrderInput({inputValue: '', inputType: inputType, clearInput: true}));
        }
    };

    const checkInputsResultQuizForm = () => {
        const nameValid = quizState.quizResult.resultOrderForm.name.valid;
        const nameInputValue = quizState.quizResult.resultOrderForm.name.value;
        const phoneValid = quizState.quizResult.resultOrderForm.phone.valid;
        const phoneInputValue = quizState.quizResult.resultOrderForm.phone.value;
        const emailValid = quizState.quizResult.resultOrderForm.email.valid;
        const emailInputValue = quizState.quizResult.resultOrderForm.email.value;
        if ((nameValid && nameInputValue) && (phoneValid && phoneInputValue) && (emailValid && emailInputValue)) return true;
        return false;
    };

    const quizQuestionInputHandler = (inputName, inputRef) => {
        dispatch(quizQuestionSaveInputValue({inputName: inputName, inputValue: inputRef.value}));
    };

    const quizQuestionClearInput = (e, inputName, inputRef) => {
        if (e.key === 'Backspace') {
            inputRef.value = '';
            dispatch(quizQuestionSaveInputValue({inputName: inputName, inputValue: inputRef.value}));
            return;
        }
    };

    const selectCommunicationTypeHandler = (selectValue) => {
        dispatch(quizQuestionSelectCommunication({selectName: selectValue}));
    };

    const quizQuestionSendFormHandler = async () => {
        return new Promise((resolve, reject) => {
            const questionState = quizState.quizQuestion;
            const questionName = questionState.quizFormInputs.find((item) => item.inputName === 'name');
            const questionPhone = questionState.quizFormInputs.find((item) => item.inputName === 'phone');
            const questionEmail = questionState.quizFormInputs.find((item) => item.inputName === 'email');
            const questionComment = questionState.quizFormInputs.find((item) => item.inputName === 'comment');
            const questionMethod = questionState.сommunicationMethods.find((item) => item.selected);
            const sendData = {
                name: questionName ? questionName.inputValue : '',
                phone: questionPhone ? questionPhone.inputValue : '',
                email: questionEmail ? questionEmail.inputValue : '',
                comment: questionComment ? questionComment.inputValue : '',
                communicationType : questionMethod.value,
            };
            resolve(sendData);
        })
        .then((data) => {
            dispatch(sendQuizQuestionOrder(data));
        });      
    };

    const quizTzInputHandler = async (fileObj='', inputName, inputRef) => {
        if (inputName === 'file' && !fileObj) return;
        if (inputName === 'file' && fileObj && fileObj.length > 0) {
            await fileToBase64(fileObj[0])
            .then((data) => {
                if (data && data.file) {
                    dispatch(quizTzSaveInput({inputName: inputName, inputValue: data}));
                }
            });
            return;
        }
        dispatch(quizTzSaveInput({inputName: inputName, inputValue: inputRef.value}));
    };

    const quizTzClearInput = (e, inputName, inputRef) => {
        if (e.key === 'Backspace') {
            inputRef.value = '';
            dispatch(quizTzSaveInput({inputName: inputName, inputValue: inputRef.value}));
            return;
        }
    };

    const quizSendTzOrder = async (e) => {
        e.preventDefault();
        return new Promise((resolve, reject) => {
            const formInputs = quizTzState.quizFormInputs;
            const sendData = {
                name: formInputs.find((item) => item.inputName === 'name').inputValue,
                phone: formInputs.find((item) => item.inputName === 'phone').inputValue,
                email: formInputs.find((item) => item.inputName === 'email').inputValue,
                file: formInputs.find((item) => item.inputName === 'file').inputValue,
            };
            resolve(sendData);
        })
        .then((sendData) => {
            console.log(sendData)
            dispatch(sendQuizTzOrder(sendData));
        });
    };

    const findHappyStateStatus = (quizType) => {
        const targetStatus = quizState.quizHappyState.find((item) => item.active && item.quizType === quizType);

        return targetStatus;
    };

    useEffect(() => {
        const stepData = findStep(quizState.currentStep);
        const activeMenu = findActiveMenu();
        if (stepData && activeMenu.id === 1) {
            stepTitle.current.textContent = stepData.stepTitle;
            return;
        }
        stepTitle.current.textContent = activeMenu.name;
    }, [quizState.currentStep, quizState.quizMenu]);

    useEffect(() => {
        quizWrapRef.current.className = "quiz-content-wrap quiz-content-wrap-aimate"
        const animationTimeout = setTimeout(() => {
            quizWrapRef.current.className = "quiz-content-wrap";
            clearTimeout(animationTimeout)
        }, 1000);
        
    }, [quizState.currentStep]);

    useEffect(() => {
        console.log(quizState.quizHappyState)
    }, [quizState.quizHappyState])

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
                                    <div
                                        onClick={() => selectQuizMenuHandler(quizMenuItem)} 
                                        className={
                                            quizMenuItem.active ? 
                                                "quiz-controlpanel-item quiz-controlpanel-item-active": "quiz-controlpanel-item"
                                        }
                                    >
                                        <span className="quiz-controlpanel-item-name">{quizMenuItem.name}</span>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                         <div className="quiz-controlpanel-contacts-wrap">
                            {quizState.quizMenuContacts.map((contactItem) => {
                                return (
                                    <React.Fragment key={contactItem.id}>
                                        <div className={`quiz-controlpanel-contact-${contactItem.name}`}>
                                            <img src={contactItem.icon} alt={contactItem.name} />
                                            <Link to={contactItem.link} target={contactItem.name === 'email' ? '__blank' : ''}>
                                                {contactItem.value}
                                            </Link>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                         </div>
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
                            {quizState.currentStep === 1 && findActiveMenu().id === 1 && findActiveMenu().active ? 
                                <QuizStep1 
                                    stepData={findStep(1)} 
                                    productSelectHandler={productSelectHandler}
                                    productItemSelectHadnler={productItemSelectHandler}
                                    productPageHandler = {productPageSelectHandler}
                                /> 
                            : null}
                            {quizState.currentStep === 2 && findActiveMenu().id === 1 && findActiveMenu().active ? 
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
                            {quizState.currentStep === 3 && findActiveMenu().id === 1 && findActiveMenu().active ? 
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
                                quizState.currentStep === 4 && findActiveMenu().id === 1 && findActiveMenu().active ? 
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
                                quizState.currentStep === 5 && findActiveMenu().id === 1 && findActiveMenu().active ? 
                                    <QuizStep5
                                        stepData={findStep(5)}
                                        quizResult={quizState.quizResult}
                                        test={quizState}
                                        getSizeValue ={getResultSizeValue}
                                        deliveryChangeHandler={deliveryServiceHandler}
                                        deliveryCityHandler={saveDeliveryCityHandler}
                                        deliveryCityClearHandler={clearDeliveryCityHandler}
                                        calculate={calculateResult}
                                        validateQuizOrder={validateQuizOrder}
                                        clearQuizInput={clearQuizOrderInputHandler}
                                        checkFormInputs ={checkInputsResultQuizForm}
                                        sendQuizOrderHandler={sendQuizOrderHandler}
                                        happyState={findHappyStateStatus('calculator')}
                                    />
                                : null
                            }
                            {
                                findActiveMenu().id === 2 && findActiveMenu().active ? 
                                    <QuizQuestion
                                        quizState={quizQuestionState}
                                        quizFormInputHandler={quizQuestionInputHandler}
                                        quizFormClearInputHandler={quizQuestionClearInput}
                                        quizFormSelectHandler={selectCommunicationTypeHandler}
                                        quizFormSendHandler={quizQuestionSendFormHandler}
                                        happyState={findHappyStateStatus('question')}
                                    /> 
                                : null
                            }
                            {
                                findActiveMenu().id === 3 && findActiveMenu().active ?
                                    <QuizSendTz 
                                        quizState={quizTzState}
                                        quizFromInputHandler={quizTzInputHandler}
                                        quizFormClearInputHandler={quizTzClearInput}
                                        quizSendTzHandler={quizSendTzOrder}
                                        happyState={findHappyStateStatus('tz')}
                                    /> 
                                : null
                            }
                        </div>
                        {findActiveMenu().id === 1 && findActiveMenu().active ? 
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
                        : null}
                        

                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
};


export default QuizMainPage;