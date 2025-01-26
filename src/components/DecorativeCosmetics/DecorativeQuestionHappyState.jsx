import React from "react";

const DecorativeQuestionHappyState = (props) => {
    return (
        <React.Fragment>
            <div className="decorative-question-happy-state-popup-wrap">
                <span 
                    className="excursion-production-close-btn"
                    onClick={props.closeHandler}
                ></span>
                <div className="decorative-question-happy-state-popup-body">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </React.Fragment>
    )
};

export default DecorativeQuestionHappyState;