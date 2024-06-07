import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import IndependenceMainPageForm from "../IndependenceMainPageForm/IndependenceMainPageForm";


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
                                                    {independenceItem.description}
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