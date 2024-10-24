import React from "react";
import { useRef, useEffect } from "react";
import findCity from "../../functions/findCityRange";

const QuizStep5 = (props) => {
    const stepData = props.stepData;
    const quizResult = props.quizResult;
    const deliveryCityRef = useRef(null);
    const inputNameRef = useRef(null);
    const inputPhoneRef = useRef(null);
    const inputMailRef = useRef(null);
    const sizeResult = props.getSizeValue();
    console.log(quizResult)

    const testFunc = (cityValue) => {
        findCity(cityValue);
    };

    useEffect(() => {
    }, [stepData.deliveryCityForm])

    return (
        <React.Fragment>
            <div className="quiz-advanced-settings-delivery-wrap">
                <div className="quiz-advanced-settings-delivery-fields"></div>
                <div className="quiz-advanced-settings-budget-title">
                    <h3>Доставка продукции</h3>
                </div>
                <div className="result-quiz-table-wrap">
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
                                            checked={deliveryItem.selected ? true : false}
                                        />
                                        <label htmlFor={`${deliveryItem.name}-${deliveryItem.id}`}>{deliveryItem.name}</label>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </fieldset>
                </div>
                
                {stepData.deliveryCityForm.active ? 
                    <div className="quiz-advanced-settings-delivery-custom-field-wrap">
                        <div className="quiz-advanced-settings-delivery-custom-field-row">
                            <div className="quiz-advanced-settings-delivery-custom-field-input">
                                <label htmlFor="quiz-order-delivery-city-input">Город доставки</label>
                                <div>
                                    <input
                                        ref={deliveryCityRef} 
                                        type="text"
                                        id="quiz-order-delivery-city-input" 
                                        onChange={() => testFunc(deliveryCityRef.current.value)}
                                    />
                                </div>
                            </div>
                            <div className="quiz-advanced-settings-delivery-custom-field-btn">
                                <button onClick={() => props.deliveryCityHandler(deliveryCityRef.current.value)}>Сохранить</button>
                            </div>
                        </div>
                    </div>
                : null}
                

                <div className="quiz-result-wrap">
                    <div className="quiz-result-title">
                        <h3>Приблизительный рассчет проекта</h3>
                    </div>
                    <div className="result-description">
                        <p className="quiz-description-text">
                            Объем партии должен составлять не менее 50 кг. 
                            <br /> 
                            Наша команда всегда на связи и готова ответить на возникающие вопросы.
                        </p>
                    </div>
                    <div className="quiz-result-table-wrap">
                        <div className="quiz-result-value-row">
                            <div className="quiz-result-value-title">
                                <h4>Тип продукта</h4>
                            </div>
                            <div className="quiz-result-value">
                                {`${quizResult.product.category} ${quizResult.product.name.toLowerCase()}`}
                            </div>
                        </div>
                        <div className="quiz-result-value-row">
                            <div className="quiz-result-value-title">
                                <h4>Количество</h4>
                            </div>
                            <div className="quiz-result-value">
                                {`${quizResult.quantity.value} шт`}
                            </div>
                        </div>
                        <div className="quiz-result-value-row">
                            <div className="quiz-result-value-title">
                                <h4>Приблизительная цена за 1шт</h4>
                            </div>
                            <div className="quiz-result-value">
                                ~ 68 руб
                            </div>
                        </div>
                        <div className="quiz-result-value-row">
                            <div className="quiz-result-value-title">
                               <h4>Приблизительный вес партии</h4>
                            </div>
                            <div className="quiz-result-value">
                                {`~ от ${sizeResult.minValue} кг до ${sizeResult.maxValue} кг`}
                            </div>
                        </div>
                        {stepData.delivery.find((deliveryItem) => deliveryItem.selected && deliveryItem.id === stepData.delivery.length) ?
                            <React.Fragment>
                                <div className="quiz-result-value-row">
                                    <div className="quiz-result-value-title">
                                        <h4>Регион доставки</h4>
                                    </div>
                                    <div className="quiz-result-value">
                                        Санкт-Петербург
                                    </div>
                                </div>
                                <div className="quiz-result-value-row">
                                    <div className="quiz-result-value-title">
                                        <h4>Город</h4>
                                    </div>
                                    <div className="quiz-result-value">
                                        Санкт-Петербург
                                    </div>
                                </div>
                                <div className="quiz-result-value-row">
                                    <div className="quiz-result-value-title">
                                        <h4>Приблизительное Расстояние</h4>
                                    </div>
                                    <div className="quiz-result-value">
                                        ~ 0 км на авто
                                    </div>
                                </div>
                                <div className="quiz-result-value-row">
                                    <div className="quiz-result-value-title">
                                        <h4>Приблизительная стоимость доставки</h4>
                                    </div>
                                    <div className="quiz-result-value">
                                        ~ 25 000 руб
                                    </div>
                                </div>
                            </React.Fragment>
                        : null}
                        <div className="quiz-result-value-row">
                            <div className="quiz-result-value-title">
                                <h4>Приблизительная стоимость проекта</h4>
                            </div>
                            <div className="quiz-result-value">
                                0 руб
                            </div>
                        </div>
                    </div>
                </div>
                <div className="result-get-contacts-wrap">
                    <div className="result-form-get-contacts-title">
                        <h3>Запросить точный расчет или КП</h3>
                    </div>
                   
                    <div className="result-form-get-contacts-wrap">
                        <form>
                            <div className="result-form-get-contacts-row">
                                <div className="result-form-contacts-item">
                                    <label htmlFor="quiz-order-from-input-name">Имя</label>
                                    <div className="result-form-contacts-item-input">
                                        <input
                                            ref={inputNameRef}
                                            type="text"
                                            id="quiz-order-from-input-name"
                                        /> 
                                    </div>
                                </div>
                                <div className="result-form-contacts-item">
                                    <label htmlFor="quiz-order-from-input-phone">Телефон</label>
                                    <div className="result-form-contacts-item-input">
                                        <input
                                            ref={inputPhoneRef} 
                                            type="text"
                                            id="quiz-order-from-input-phone"
                                        /> 
                                    </div>
                                </div>
                                <div className="result-form-contacts-item">
                                    <label htmlFor="quiz-order-from-input-email">Email</label>
                                    <div className="result-form-contacts-item-input">
                                        <input
                                            ref={inputMailRef}  
                                            type="email"
                                            id="quiz-order-from-input-email"
                                        /> 
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="result-form-get-contacts-description">
                            Данные по проекту прикреплены
                        </div>
                        <div className="result-form-get-contacts-send-wrap">
                            <button 
                                className={stepData.delivery.find((deliveryItem) => deliveryItem.selected) ? 
                                    "result-form-get-contacts-send-btn" : "result-form-get-contacts-send-btn btnDisabled"
                                }
                            >Отправить запрос</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default QuizStep5;