import React from "react";
import { useRef, useEffect } from "react";
const QuizStep2 = (props) => {
    const stepData = props.stepData;
    const qntValueRef = useRef(null);
    const rangeQntRef = useRef(null);
    const checkboxRef = useRef(null);
    const deadlineInputRef = useRef(null);

    const applyQntHandler = async (value) => {
        return new Promise((resolve, reject) => {
            resolve(props.changeMaxQntHandler(qntValueRef.current.value));
        })
        .then((data) => {
            rangeQntRef.current.value = qntValueRef.current.value;
            qntValueRef.current.value = value;
            checkboxRef.current.click();
        });
    };

    useEffect(() => {
        qntValueRef.current.value = rangeQntRef.current.value;
    }, [stepData.quantity.value]);

    useEffect(() => {
        props.validateStep();
    }, [stepData.deadLineItems]);

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
                            disabled={stepData.quantity.inputActive ? false : true} 
                            id="quiz-qnt" 
                            type="text"
                        />
                        <span>шт</span>
                        {stepData.quantity.inputActive ? 
                            <div className="qnt-apply-wrap">
                                <button onClick={() => applyQntHandler(qntValueRef.current.value)}>применить</button>
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
                                step="1" 
                            />
                        </div>
                    </div>
                </div>

                <div className="quiz-deadline-wrap">
                    <h3>Сроки изготовления</h3>
                    <div className="quiz-dedaline-description-wrap">
                        <p>От срочности может зависить цена</p>
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
                                                name="deadline" value={deadlineItem.name}
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
                                    <div className="quiz-deadline-custom-input-wrap">
                                        <textarea 
                                            ref={deadlineInputRef}>
                                        </textarea>
                                        <span className="quiz-deadline-custom-btn-wrap">
                                            <button
                                                onClick={() => props.deadlineSaveHandler(deadlineInputRef.current.value)}
                                            >Сохранить</button>
                                        </span>
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