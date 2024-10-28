import React from "react";
import { useRef, useEffect } from "react";

const QuizStep5 = (props) => {
    const stepData = props.stepData;
    const quizResult = props.quizResult;
    const deliveryCityRef = useRef(null);
    const deliverySaveBtnRef = useRef(null);
    const inputNameRef = useRef(null);
    const inputPhoneRef = useRef(null);
    const inputMailRef = useRef(null);
    const sizeResult = props.getSizeValue();
    console.log(quizResult)

    useEffect(() => {
        props.calculate();
    }, [stepData.deliveryCityForm]);

    useEffect(() => {
        if (stepData.deliveryCityForm.cityData) {
            deliverySaveBtnRef.current.className = 'btnDisabled';
            return;
        }
    }, [stepData.deliveryCityForm.cityData]);
    
    useEffect(() => {
        if (!deliveryCityRef.current || !deliveryCityRef.current.value) return;
        if (!stepData.deliveryCityForm.inputValid) {
            deliveryCityRef.current.value = '';
        }
        deliveryCityRef.current.value = stepData.deliveryCityForm.value;
    }, [stepData.deliveryCityForm]);

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
                                <div className="quiz-advanced-settings-delivery-custom-active-city">
                                    Выбран: {stepData.deliveryCityForm.cityData ? stepData.deliveryCityForm.cityData.name : null}
                                </div>
                                <div className="quiz-advanced-settings-delivery-custom-input-row">
                                    <input
                                        onKeyDown={(e) => props.deliveryCityClearHandler(e, deliveryCityRef.current)}
                                        ref={deliveryCityRef}
                                        className={stepData.deliveryCityForm.cityData && stepData.deliveryCityForm.cityData.name  ? 'delivery-city-apply' : ''}
                                        type="text"
                                        id="quiz-order-delivery-city-input"
                                    />
                                    
                                </div>
                            </div>
                            <div className="quiz-advanced-settings-delivery-custom-field-btn">
                                <button
                                    ref={deliverySaveBtnRef}
                                    className={stepData.deliveryCityForm.value ? '' : 'btnDisabled'}
                                    onClick={() => props.deliveryCityHandler(deliveryCityRef.current.value)}
                                >Применить</button>
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
                                <h4>Ожидаемое время производства</h4>
                            </div>
                            <div className="quiz-result-value">
                                {`с ${quizResult.calculateResult.dateStart} по ${quizResult.calculateResult.dateEnd}`}
                            </div>
                        </div>
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
                                <h4>Тип упаковки</h4>
                            </div>
                            <div className="quiz-result-value">
                                {`${quizResult.package.name} ${quizResult.package.size} ml`}
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
                                <h4>Приблизительная цена за 1шт: </h4>
                            </div>
                            <div className="quiz-result-value">
                                {`~ ${quizResult.calculateResult.totalProductPricePerItem} руб за 1 шт с упаковкой`}
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
                        {!stepData.delivery.find((deliveryItem) => deliveryItem.selected && deliveryItem.id === stepData.delivery.length) ? 
                            <React.Fragment>
                                <div className="quiz-result-value-row">
                                    <div className="quiz-result-value-title">
                                        <h4>Цена доставки за 1км </h4>
                                    </div>
                                    <div className="quiz-result-value">
                                        {`~ ${stepData.delivery.find((item) => item.selected).price} руб за 1км`}
                                    </div>
                                </div>
                            </React.Fragment>
                        
                        : null}
                        
                        {stepData.delivery.find((deliveryItem) => deliveryItem.selected && deliveryItem.id === stepData.delivery.length) ?
                            <React.Fragment>
                                {stepData.deliveryCityForm.value ? 
                                    <React.Fragment>
                                        <div className="quiz-result-value-row">
                                            <div className="quiz-result-value-title">
                                                <h4>Доставка</h4>
                                            </div>
                                            <div className="quiz-result-value">
                                                {`Санкт-Петербург  => ${stepData.deliveryCityForm.value}`}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                : null}

                                {stepData.deliveryCityForm.cityData.range ? 
                                    <React.Fragment>
                                        <div className="quiz-result-value-row">
                                            <div className="quiz-result-value-title">
                                                <h4>Приблизительное Расстояние</h4>
                                            </div>
                                            <div className="quiz-result-value">
                                                {`~ ${stepData.deliveryCityForm.cityData.range} км`}
                                            </div>
                                        </div>
                                        <div className="quiz-result-value-row">
                                            <div className="quiz-result-value-title">
                                                <h4>Приблизительная стоимость доставки</h4>
                                            </div>
                                            <div className="quiz-result-value">
                                                {`~ ${stepData.deliveryCityForm.totalPrice} руб`}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                : null}
                                
                            </React.Fragment>
                        : null}
                        <div className="quiz-result-value-row">
                            <div className="quiz-result-value-title">
                                <h4>Приблизительная цена за {quizResult.quantity.value} шт: </h4>
                            </div>
                            <div className="quiz-result-value">
                                {`~ ${quizResult.calculateResult.totalSum} руб`}
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
                                    <label htmlFor="quiz-order-from-input-phone">Телефон для связи</label>
                                    <div className="result-form-contacts-item-input">
                                        <input
                                            ref={inputPhoneRef} 
                                            type="text"
                                            id="quiz-order-from-input-phone"
                                        /> 
                                    </div>
                                </div>
                                <div className="result-form-contacts-item">
                                    <label htmlFor="quiz-order-from-input-email">Email для ответа</label>
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