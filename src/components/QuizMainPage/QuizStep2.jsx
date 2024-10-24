import React from "react";
import { useRef, useEffect } from "react";
const QuizStep2 = (props) => {
    const stepData = props.stepData;
    const qntValueRef = useRef(null);
    const rangeQntRef = useRef(null);
    const checkboxRef = useRef(null);
    const deadlineInputRef = useRef(null);

    const applyQntHandler = async (value) => {
        await props.changeMaxQntHandler(qntValueRef.current.value)
        .then(() => {
            rangeQntRef.current.value = value;
            qntValueRef.current.value = value;
            checkboxRef.current.click();
        });
    };

    const validateQntInput = () => {
        if (isNaN(Number(qntValueRef.current.value)) || !/^[0-9]+$/.test(Number(qntValueRef.current.value)) || !qntValueRef.current.value.trim()) {
            qntValueRef.current.value = '';
            return;
        }
    };

    useEffect(() => {
        qntValueRef.current.value = rangeQntRef.current.value;
    }, [stepData.quantity.value]);

    useEffect(() => {
        props.validateStep();
    }, [stepData.deadLineItems, stepData.deadLineCustomField]);

    console.log(stepData)

    return (
        <React.Fragment>
            <div className="step-main-wrap">
                <div className="quantity-wrap">
                    <div className="quantity-custom-wrap">
                        <input type="checkbox" id="checkbox-custom-quiz-quantity-value" className="checkbox-custom-hero-form" />
                            <label
                                ref={checkboxRef}
                                htmlFor="checkbox-custom-quiz-quantity-value"
                                onClick={() => props.qntHandler(stepData.quantity.inputActive ? false : true)}
                            ></label>
                            <span>Уточнить</span>
                    </div>
                    <div className="quantity-value-wrap">
                        <label htmlFor="quiz-qnt">Количество от</label>
                        <input
                            ref={qntValueRef}
                            onInput={validateQntInput}
                            disabled={stepData.quantity.inputActive ? false : true} 
                            id="quiz-qnt" 
                            type="text"
                        />
                        <span>шт</span>
                        {stepData.quantity.inputActive ? 
                            <div className="qnt-apply-wrap">
                                <button 
                                    onClick={() => applyQntHandler(qntValueRef.current.value)}
                                    className="qnt-apply-button"
                                >применить</button>
                            </div>
                        : null}
                        
                    </div>
                    <div className="quantity-quiz-wrap">
                        <div className="quantity-quiz-range-wrap">
                            <input
                                ref={rangeQntRef}
                                disabled={stepData.quantity.inputActive  ? true : false} 
                                onMouseMove={() => props.changeQntHandler(rangeQntRef.current.value)}
                                className="quantity-quiz-range"
                                type="range" 
                                min={stepData.quantity.minQnt}
                                max={stepData.quantity.maxQnt}
                                defaultValue={stepData.quantity.defaultValue}
                                step="500" 
                            />
                        </div>
                    </div>
                    <div className="quantity-description-wrap">
                        <p className="quiz-description-text">
                            Чем больше партия, тем более привлекательные условия мы можем предложить нашим клиентам.
                        </p>
                    </div>
                </div>


                <div className="quiz-deadline-wrap">
                    <h3>Сроки изготовления</h3>
                    <div className="quiz-dedaline-description-wrap">
                        <p className="quiz-description-text">От срочности может зависить цена партии</p>
                    </div>
                    <div className="quiz-deadline-radio-wrap">
                        <fieldset>
                            {stepData.deadLineItems.map((deadlineItem) => {
                                return (
                                    <React.Fragment key={deadlineItem.id}>
                                        <div className="quiz-deadline-radio-item">
                                            <input
                                                onClick={() => props.deadlineHandler(
                                                    deadlineItem, 
                                                    deadlineItem.id === Array.from(stepData.deadLineItems.length) ? deadlineInputRef.current.value : null
                                                )}
                                                type="radio" 
                                                id={`${deadlineItem.name}-${deadlineItem.id}`} 
                                                name="deadline" 
                                                value={deadlineItem.name}
                                            />
                                            <label htmlFor={`${deadlineItem.name}-${deadlineItem.id}`}>{deadlineItem.name}</label>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </fieldset>
                        {stepData.deadLineItems.find((item) => item.id === stepData.deadLineItems.length).selected ? 
                            <React.Fragment>
                                <div className="quiz-deadline-custom-wrap">
                                    <div className="quiz-deadline-custom-title-wrap">
                                        <label htmlFor="quiz-deadline-custom-input">Желаемые сроки</label>
                                    </div>
                                    <div className="quiz-deadline-custom-input-wrap">
                                        <textarea 
                                            ref={deadlineInputRef}
                                            className={deadlineInputRef.current && !deadlineInputRef.current.value ? 'input-err' : ''}
                                            onKeyDown={(e) => props.deadlineClearInput(e, deadlineInputRef.current)}
                                            onChange={() => props.deadlineSaveHandler(deadlineInputRef.current.value)}
                                            id="quiz-deadline-custom-input"
                                            placeholder="Описание..."
                                        >
                                        </textarea>
                                    </div>
                                </div>
                            </React.Fragment>
                        : null}
                    </div>
                </div>
            </div>
           
            
        </React.Fragment>
    )
};

export default QuizStep2;