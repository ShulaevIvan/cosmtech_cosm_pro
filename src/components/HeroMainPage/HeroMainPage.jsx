import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MainPageOrderForm from "../MainPageOrderForm/MainPageOrderForm";
import { openOrderFrom } from "../../redux/slices/mainPageSlice";

const HeroMainPage = () => {
    const dispatch = useDispatch();
    const calculatorPopup = useSelector((state) => state.mainPage.calculatorForm);
    const orderForm = useSelector((state) => state.mainPage.orderForm);

    const orderFormHandler = (status) => {
        dispatch(openOrderFrom({status: status}));
    };

    return (
        <React.Fragment>
            <section className="hero-section">
               {orderForm.popupOpen ?  <MainPageOrderForm orderFormHandler={orderFormHandler} /> : null}
                <div className="hero-img-wrap">
                    <div className="hero-img-main-title-wrap">
                        <h1>Контрактное Производство косметики в Санкт-Петербурге</h1>
                        <div className="hero-img-main-title-description">
                            <p>
                                Рыбатекст используется дизайнерами, 
                                проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. 
                                Это тестовый контент, который не должен нести 
                                никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.
                            </p>
                        </div>
                        <div className="hero-img-main-title-controls-wrap">
                            <div className="hero-img-action-button-wrap">
                                <span className="hero-img-action-button-main">Кальклулятор</span>
                            </div>
                            <div className="hero-img-action-button-wrap">
                                <span
                                    className="hero-img-action-button-main"
                                    onClick={() => orderFormHandler(true)}
                                >Получить рассчет</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </React.Fragment>
    )
};

export default HeroMainPage;