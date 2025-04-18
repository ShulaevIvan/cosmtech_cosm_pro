import React from "react";

const NewsMainFormHappyState = (props) => {
    return (
        <React.Fragment>
            <div className="news-company-form-happy-state-popup-wrap">
                <div className="news-company-form-happy-state-close-btn-wrap">
                    <span 
                        className="news-company-form-happy-state-close-btn"
                        onClick={props.closeHandler}
                    ></span>
                </div>
                <div className="news-company-form-happy-state-body">
                    <h3>{props.title}</h3>
                    <p className="news-company-form-happy-state-description">{props.description}</p>
                </div>
            </div>
        </React.Fragment>
    )
};

export default NewsMainFormHappyState;