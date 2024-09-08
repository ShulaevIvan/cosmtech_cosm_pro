import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MainPageOrderForm from "../MainPageOrderForm/MainPageOrderForm";
import MainPageOrderFormHappy from "../MainPageOrderForm/MainPageOrderFormHappy";
import { openOrderFrom, quizPopupShow } from "../../redux/slices/mainPageSlice";
import QuizMainPage from "../QuizMainPage/QuizMainPage";

const HeroMainPage = () => {
    const dispatch = useDispatch();
    const calculatorPopup = useSelector((state) => state.mainPage.calculatorForm);
    const quizPopupStatus = useSelector((state) => state.mainPage.calculatorForm.quizOpen);
    const orderForm = useSelector((state) => state.mainPage.orderForm);

    const orderFormHandler = (e, status) => {
        dispatch(openOrderFrom({status: status}));
    };
    
    const quizHandler = () => {
        dispatch(quizPopupShow({status: quizPopupStatus ? false : true}));
    };
    
    return (
        <React.Fragment>
            <section className="hero-section">
               {orderForm.popupOpen ?  <MainPageOrderForm orderFormHandler={orderFormHandler} /> : null}
               {orderForm.happyState ? <MainPageOrderFormHappy /> : null}
               {quizPopupStatus ? <QuizMainPage closeHandler={quizHandler} /> : null}
                <div className="hero-img-wrap">
                    <div className="hero-img-main-title-wrap">
                        <h1>Контрактное производство косметики в Санкт-Петербурге</h1>
                        <div className="hero-img-main-title-description">
                            <p>
                                Косметические технологии — это российская компания-производитель косметической продукции с собственным производством 
                                в Санкт-Петербурге и собственной лабораторией, где работают опытные технологи.  
                            </p>
                        </div>
                        <div className="hero-img-main-title-controls-wrap">
                            <div className="hero-img-action-button-wrap">
                                <span 
                                    className="hero-img-action-button-main"
                                    onClick={quizHandler}
                                >Калькулятор</span>
                            </div>
                            <div className="hero-img-action-button-wrap">
                                <span
                                    className="hero-img-action-button-main"
                                    onClick={(e) => orderFormHandler(e, true)}
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