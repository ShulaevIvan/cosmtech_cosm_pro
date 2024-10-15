import React from "react";
import { useRef, useEffect } from "react";

const QuizStep5 = (props) => {
    const stepData = props.stepData;
    const deliveryCityRef = useRef(null);
    const inputNameRef = useRef(null);
    const inputPhoneRef = useRef(null);
    const inputMailRef = useRef(null);
    
    useEffect(() => {
        console.log(stepData)
    }, [stepData.deliveryCityForm])

    return (
        <React.Fragment>
            <div className="quiz-advanced-settings-delivery-wrap">
                <div className="quiz-advanced-settings-delivery-fields"></div>
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
                {stepData.deliveryCityForm.active ? 
                    <div className="quiz-advanced-settings-delivery-custom-field-wrap">
                        <div className="quiz-advanced-settings-delivery-custom-field-row">
                            <div className="quiz-advanced-settings-delivery-custom-field-input">
                                <label htmlFor="quiz-order-delivery-city-input">Город Доставки</label>
                                <div>
                                    <input
                                        ref={deliveryCityRef} 
                                        type="text"
                                        id="quiz-order-delivery-city-input" 
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
                    <div className="quiz-result-table-wrap">
                        <div className="quiz-result-value-row">
                            <div className="quiz-result-value-title">
                                Название
                            </div>
                            <div className="quiz-result-value">
                                Тестовый продукт 200 мл
                            </div>
                        </div>
                        <div className="quiz-result-value-row">
                            <div className="quiz-result-value-title">
                                Количество
                            </div>
                            <div className="quiz-result-value">
                                10 000 шт
                            </div>
                        </div>
                        <div className="quiz-result-value-row">
                            <div className="quiz-result-value-title">
                                Цена за единицу
                            </div>
                            <div className="quiz-result-value">
                                68 руб
                            </div>
                        </div>
                        <div className="quiz-result-value-row">
                            <div className="quiz-result-value-title">
                               Вес партии
                            </div>
                            <div className="quiz-result-value">
                                1000 кг
                            </div>
                        </div>
                        <div className="quiz-result-value-row">
                            <div className="quiz-result-value-title">
                               Стоимость доставки
                            </div>
                            <div className="quiz-result-value">
                                25 000 руб
                            </div>
                        </div>
                        <div className="quiz-result-value-row">
                            <div className="quiz-result-value-title">
                                Общая стоимость
                            </div>
                            <div className="quiz-result-value">
                                0
                            </div>
                        </div>
                    </div>
                    <div className="result-get-contacts-wrap">
                        <div className="result-form-get-contacts-title">
                            <h3>Получить точный рассчет и КП по проекту</h3>
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
                            <div className="result-form-get-contacts-send-wrap">
                                <div className="result-form-get-contacts-send-btn">
                                    <button>Отправить запрос</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default QuizStep5;