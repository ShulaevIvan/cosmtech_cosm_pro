import React from "react";

const QuizStep4 = (props) => {
    const stepData = props.stepData;
    console.log(stepData)
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
                </div>
                
                <div className="quiz-advanced-settings-budget-wrap">
                    <div className="quiz-advanced-settings-budget-title">
                        <h3>Ваш бюджет</h3>
                    </div>
                    <fieldset>
                        {stepData.budget.map((budgetItem) => {
                            return (
                                <React.Fragment key={budgetItem.id}>
                                    <div className="quiz-advanced-settings-budget-item-wrap">
                                        <input
                                            type="radio"
                                            name="advanced-service" 
                                            value={budgetItem.name}
                                            id={`${budgetItem.name}-${budgetItem.id}`}
                                        />
                                        <label htmlFor={`${budgetItem.name}-${budgetItem.id}`}>{budgetItem.name}</label>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </fieldset>
                    <div className="quiz-advanced-settings-buget-custom-range-wrap">
                        <div className="quiz-advanced-settings-buget-custom-range-value">0</div>
                            <input
                                className="quiz-advanced-settings-buget-custom-range"
                                type="range"
                                min="25000" 
                                step="5000"
                                max="25000000"
                            />
                        </div>
                    </div>

                    <div className="quiz-advanced-settings-comment-wrap">
                        <div className="quiz-advanced-settings-comment-title">
                            <h3>Дополнительная информация</h3>
                        </div>
                        <div className="quiz-advanced-settings-tz-wrap">
                            <input
                                type="checkbox" id="quiz-advanced-settings-tz-value" className="checkbox-custom-hero-form" />
                            <label
                                htmlFor="quiz-advanced-settings-tz-value"
                            ></label>
                        <span>Есть собственное ТЗ</span>
                    </div>
                        <div className="quiz-advanced-settings-comment-wrap">
                            <textarea></textarea>
                            <span className="quiz-advanced-settings-comment-btn-wrap">
                                <button>Сохранить</button>
                            </span>
                        </div>
                    </div>

            </div>
        </React.Fragment>
    )
};


export default QuizStep4;