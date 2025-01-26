import React from "react";

const ExcursionToProductionHappyState = (props) => {
    return (
        <React.Fragment>
            <div className="excursion-production-popup-wrap">
                <span
                    className="excursion-production-close-btn"
                    onClick={props.closeHandler}
                ></span>
                <div className="excursion-production-title-wrap">
                    <h2>{props.title}</h2>
                    <p>Ваш номер запроса: <strong>{props.order}</strong></p>
                    <p>{props.description}</p>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ExcursionToProductionHappyState;