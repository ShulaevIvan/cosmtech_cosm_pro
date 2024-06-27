import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { 
    validateInnerConsultForm, 
    clearInnerConsultInput,
    innerCounsultSendBtn,
    sendInnerConsultThunk
} from "../../redux/slices/innerPageSlice";

const InnerPageConsultForm = () => {
    const dispatch = useDispatch();
    const aboutState = useSelector((state) => state.innerPage.about);
    const formRefs = [
        {name: 'name', ref: useRef(null)},
        {name: 'phone', ref: useRef(null)},
        {name: 'email', ref: useRef(null)},
    ];
    const findInputRef = (fieldName) => {
        return formRefs.find((inputItem) => inputItem.name === fieldName).ref;
    }
    const formInputHandler = (fieldName, fieldRef) => {
        dispatch(validateInnerConsultForm({fieldName: fieldName, fieldValue: fieldRef.current.value}));
    };

    const clearInputHandler = (e, fieldName) => {
        if (e.key === 'Backspace') {
            dispatch(clearInnerConsultInput({fieldName: fieldName}));
            return;
        }
    };

    useEffect(() => {
        dispatch(innerCounsultSendBtn());
    }, [formRefs])

    const sendFormHandler = () => {
        const data = aboutState.innerForm.fields.reduce((itemObj, item) => {
            itemObj[item.fieldName] = item.fieldValue;
            return itemObj;
        }, {});
        dispatch(sendInnerConsultThunk(data));
        console.log(aboutState.innerForm.innerConsultFormHappyState)
    };

    return (
        <React.Fragment>
            <div className="inner-page-consult-form-wrap">
                <div className="inner-page-form-background"></div>
                <div className="inner-page-form-text">
                    <h3>Оставьте заявку для расчёта заказа</h3>
                    <div className="inner-page-form-description">
                        <p>
                            {aboutState.innerForm.innerConsultFormHappyState ? 
                                `${aboutState.innerForm.innerConsultFormHappyStateDescription}` : 'Отправьте запрос и менеджер перезвонит вам в течении 30 мин'}
                        </p>
                    </div>
                </div>
                <div className="inner-page-form-wrap">
                    <div className="inner-page-form">
                        <form>
                            <div className="inner-page-form-row">
                                {aboutState.innerForm.fields.map((formField) => {
                                    return (
                                        <React.Fragment key={formField.id}>
                                            <div className="inner-page-form-item">
                                                <label htmlFor={`inner-page-form-${formField.fieldName}`}>{formField.fieldTitle}</label>
                                                <input
                                                    className={formField.err ? 'input-err' : null} 
                                                    ref={findInputRef(formField.fieldName)}
                                                    id={`inner-page-form-${formField.fieldName}`}
                                                    type={formField.fieldType}
                                                    onChange={() => formInputHandler(formField.fieldName, findInputRef(formField.fieldName))}
                                                    onKeyDown={(e) => clearInputHandler(e, formField.fieldName)}
                                                    placeholder={formField.placeholder}
                                                    autoComplete="off"
                                                    value={formField.fieldValue}
                                                />
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                            <div className="inner-page-form-controls">
                                <div className="inner-page-form-btn-wrap">
                                    <span
                                        className={aboutState.innerForm.sendBtnActive ? "inner-page-from-btn": "inner-page-from-btn btnDisabled"}
                                        onClick={sendFormHandler}
                                    >Отправить</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default InnerPageConsultForm;