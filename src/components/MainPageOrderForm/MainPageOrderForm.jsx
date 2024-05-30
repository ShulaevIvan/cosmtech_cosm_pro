import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderFormAdditionalFields, validateOrderForm } from "../../redux/slices/mainPageSlice";


const MainPageOrderForm = (props) => {
    const dispatch = useDispatch();
    const orderFormState = useSelector((state) => state.mainPage.orderForm);
    const baseFields = useSelector((state) => state.mainPage.orderForm.baseFields);
    const nameInputRef = useRef(null);
    const phoneInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const commentInputRef = useRef(null);

    const additionalFieldsHandler = (status) => {
        dispatch(orderFormAdditionalFields({status: status}));
    };

    return (
        <React.Fragment>
            <div className="hero-order-form-popup-wrap">
                <div className="hero-order-form-popup-close-wrap">
                    <span 
                        className="close-popup-btn"
                        onClick={() => props.orderFormHandler(false)}
                    ></span>
                </div>
                <div className="hero-order-form-wrap">
                    <form className="hero-order-form">
                        <div className="hero-order-form-mode-wrap">
                            <div className="form-mode-checkbox">
                                <input type="checkbox" id="checkbox-custom-hero-form" class="checkbox-custom-hero-form" />
                                <label 
                                    htmlFor="checkbox-custom-hero-form"
                                    onClick={() => additionalFieldsHandler({status: true})}
                                ></label>
                                <span>Уточнить</span>
                            </div>
                        </div>
                        {orderFormState.additionalFields.fieldsActive ? 
                            <div className="hero-order-additional-fields-wrap">
                                {orderFormState.additionalFields.fieldsTypes.map((fieldBlock) => {
                                    return (
                                        <React.Fragment key={Math.random()}>
                                             <div className="hero-order-form-options-wrap">
                                                <div class="hero-order-form-options-title">{fieldBlock.name}</div>
                                                    <select className="hero">
                                                        <option selected>Выберите</option>
                                                        {fieldBlock.options.map((optionItem) => {
                                                            return (
                                                                <React.Fragment key={Math.random()}>
                                                                    <option value="t1">{optionItem.name}</option>
                                                                </React.Fragment>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>

                        : null}

                        <div className="hero-order-main-fields-title-wrap">
                            <label>Имя</label>
                        </div>
                        <div className="hero-order-main-fields-input-wrap">
                            <input type="text" />
                        </div>
                        <div className="hero-order-main-fields-title-wrap">
                            <label>Телефон</label>
                        </div>
                        <div className="hero-order-main-fields-input-wrap">
                            <input type="tel" />
                        </div>
                        <div className="hero-order-main-fields-title-wrap">
                            <label>Email</label>
                        </div>
                        <div className="hero-order-main-fields-input-wrap">
                            <input type="email" />
                        </div>
                        <div className="hero-order-main-fields-title-wrap">
                            <label>Комментарий</label>
                        </div>
                        <div className="hero-order-main-fields-input-wrap">
                            <textarea></textarea>
                        </div>

                        <div className="hero-order-main-fields-checkbox-wrap">
                            <div className="form-mode-checkbox">
                                <input type="checkbox" id="checkbox-custom-hero-form-policy" class="checkbox-custom-hero-form-policy" />
                                <label for="checkbox-custom-hero-form-policy"></label>
                                <span>согласен с <a href="#">политикой конфидициальности</a></span>
                            </div>
                        </div>
                        <div className="hero-order-main-fields-send-btn-wrap">
                            <span className="hero-order-main-fields-send-btn">Отправить</span>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
};

export default MainPageOrderForm;