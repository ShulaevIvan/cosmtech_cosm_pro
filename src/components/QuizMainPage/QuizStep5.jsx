import React from "react";

const QuizStep5 = (props) => {
    const stepData = props.stepData;
    return (
        <React.Fragment>
            <div className="quiz-advanced-settings-delivery-wrap">
                <div className="quiz-advanced-settings-budget-title">
                    <h3>Доставка продукции</h3>
                </div>
                <fieldset>
                    {stepData.delivery.map((deliveryItem) => {
                        return (
                            <React.Fragment key={deliveryItem.id}>
                                <div className="quiz-advanced-settings-delivery-item">
                                    <input
                                        onChange={() => props.deliveryChangeHandler(true, deliveryItem.id)}
                                        type="radio"
                                        id={`${deliveryItem.name}-${deliveryItem.id}`}
                                        value={deliveryItem.name}
                                        name="advanced-delivery"  
                                    />
                                    <label htmlFor={`${deliveryItem.name}-${deliveryItem.id}`}>{deliveryItem.name}</label>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </fieldset>
                <div className="quiz-advanced-settings-delivery-custom-field-wrap">
                    <div className="quiz-advanced-settings-delivery-custom-field-row">
                        <div className="quiz-advanced-settings-delivery-custom-field-input">
                            <h3>Город Доставки</h3>
                            <input type="text" />
                        </div>
                        <div className="quiz-advanced-settings-delivery-custom-field-btn">
                            <button>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default QuizStep5;