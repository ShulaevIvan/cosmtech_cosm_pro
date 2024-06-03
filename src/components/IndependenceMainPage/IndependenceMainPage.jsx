import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import IndependenceMainPageForm from "../IndependenceMainPageForm/IndependenceMainPageForm";
import independenceIconOne from '../../img/independence_1.svg';
import independenceIconTwo from '../../img/independence_2.svg';
import independenceIconThree from '../../img/independence_3.svg';
import independenceIconFour from '../../img/independence_4.svg';
import independenceIconFive from '../../img/independence_5.svg';
import independenceIconSix from '../../img/independence_6.svg';

const IndependenceMainPage = () => {
    const independenceState = useSelector((state) => state.mainPage.independence);

    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="independence-main-wrap">
                        <div className="independence-main-title-wrap">
                            <h2 className="main-color-title main-color-title">Наши Преимущества</h2>
                        </div>

                        <div className="independence-main-row">
                            {independenceState.independenceItems.map((independenceItem) => {
                                return (
                                    <React.Fragment key={independenceItem.id}>
                                        <div className="independence-main-item">
                                            <div className="independence-main-icon-title-wrap">
                                                <h3>{independenceItem.title}</h3>
                                            </div>
                                            <div className="independence-main-icon-wrap">
                                                <img src={independenceItem.image} alt={independenceItem.title} />
                                            </div>
                                            <div className="independence-description-wrap">
                                                <p>
                                                    Можем производить продукцию линейки от масс маркета до премиума в короткие сроки.
                                                </p>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>

                        <IndependenceMainPageForm formState={independenceState.independenceForm} />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default IndependenceMainPage;