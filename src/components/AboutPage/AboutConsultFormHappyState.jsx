import React from "react";

const AboutConsultFormHappyState = (props) => {
    return (
        <React.Fragment>
            <div className="about-production-consult-popup-happy-state-description">
                <h4>Ваш запрос отправлен!</h4>
                <p>{props.description}</p>
            </div>

        </React.Fragment>
    )
};

export default AboutConsultFormHappyState;