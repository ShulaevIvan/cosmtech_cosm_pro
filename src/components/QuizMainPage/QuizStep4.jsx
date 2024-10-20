import React from "react";
import { useRef, useEffect } from "react";

const QuizStep4 = (props) => {
    const stepData = props.stepData;
    const budgetRef = useRef(null);
    const commentRef = useRef(null);

    useEffect(() => {
        props.validateStep();
    }, [stepData.services, stepData.budget, stepData.budgetCustomField, stepData.commentField]);

    return (
        <React.Fragment>
            <div className="quiz-advanced-settings-wrap">
                <div className="quiz-advanced-settings-services-wrap">
                    <div className="quiz-advanced-settings-services-title">
                        <h3>Потребуются ли сопутствующие услуги?</h3>
                    </div>

                    <fieldset>
                        {stepData.services.map((serviceItem) => {
                            return (
                                <React.Fragment key={serviceItem.id}>
                                    <div className="quiz-advanced-settings-service-item-wrap">
                                        <input
                                            onChange={() => props.serviceChangeHandler(true, serviceItem.id)}
                                            type="radio"
                                            name="advanced-service" 
                                            value={serviceItem.name}
                                            id={`${serviceItem.name}-${serviceItem.id}`}
                                        />
                                        <label htmlFor={`${serviceItem.name}-${serviceItem.id}`}>{serviceItem.name}</label>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </fieldset>

                    {stepData.services.find((serviceItem) => serviceItem.id === stepData.services.length).selected ? 
                        <React.Fragment>
                            <div className="quiz-advanced-settings-comment-wrap">
                                <h3>Комментарий</h3>
                                <div className="quiz-advanced-settings-comment-row">
                                    <textarea 
                                        ref={commentRef}
                                        className={commentRef.current && !commentRef.current.value ? 'input-err' : ''}
                                        onKeyDown={(e) => props.clearServiceInputHandler(e, commentRef.current)}
                                        onChange={() => props.saveCommentHandler(commentRef.current.value)}
                                    ></textarea>
                                </div>  
                            </div>
                        </React.Fragment>
                    : null}
                </div>

                <div className="quiz-advanced-settings-budget-wrap">
                    <div className="quiz-advanced-settings-budget-title">
                        <h3>Бюджет на проект</h3>
                    </div>

                    <fieldset>
                        {stepData.budget.map((budgetItem) => {
                            return (
                                <React.Fragment key={budgetItem.id}>
                                    <div className="quiz-advanced-settings-budget-item-wrap">
                                        <input
                                            onChange={() => props.budgetChangeHandler(true, budgetItem.id)}
                                            type="radio"
                                            name="advanced-budget" 
                                            value={budgetItem.name}
                                            id={`${budgetItem.name}-${budgetItem.id}`}
                                        />
                                        <label htmlFor={`${budgetItem.name}-${budgetItem.id}`}>{budgetItem.name}</label>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </fieldset>
                </div>

                {stepData.budget.find((budgetItem) => budgetItem.id === stepData.budget.length).selected ? 
                    <React.Fragment>
                        <div className="quiz-advanced-settings-buget-custom-range-wrap">
                            <div className="quiz-advanced-settings-buget-custom-range-value">
                                {`${stepData.budgetCustomField.value} ${stepData.budgetCustomField.currency}`}
                            </div>
                            <input
                                ref={budgetRef}
                                onMouseMove={() => props.customBudgetHandler(budgetRef.current.value)}
                                className="quiz-advanced-settings-buget-custom-range"
                                type="range"
                                min={stepData.budgetCustomField.min}
                                step={stepData.budgetCustomField.step}
                                max={stepData.budgetCustomField.max}
                            />
                        </div>
                    </React.Fragment>
                : null}


                <div className="quiz-advanced-settings-comment-wrap">
                    <div className="quiz-advanced-settings-tz-wrap">
                        <input
                            type="checkbox" id="quiz-advanced-settings-tz-value" className="checkbox-custom-hero-form" />
                        <label
                            onClick={() => props.techTaskHandler(stepData.techTaskCustom.active ? false : true)}
                            htmlFor="quiz-advanced-settings-tz-value"
                        ></label>
                        <span>имеется ТЗ</span>
                        {stepData.techTaskCustom.active ? 
                            <React.Fragment>
                                <div className="quiz-advanced-settings-tz-btn-wrap">
                                    <label className="input-file">
                                        <input type="file" />
                                        <span className="quiz-advanced-settings-tz-input-file-btn">Файл...</span>
                                    </label>
                                </div>
                            </React.Fragment>
                        : null}
                    </div>
                </div>
            </div>    
        </React.Fragment>
    )
};

export default QuizStep4;