import React from "react";

const JobFormHappyState = (props) => {
    console.log(props.userData)
    return (
        <React.Fragment>
            <div className="job-form-happy-state-wrap">
                <div className="job-form-happy-state-title-wrap">
                    <h3>{props.userData.title}</h3>
                </div>
                <div className="job-form-happy-state-description">
                    <p>{props.userData.description}</p>
                </div>
                <span 
                    className="job-happy-state-close-btn"
                    onClick={() => props.popupHanlder(false)}
                >Ок</span>
            </div>
        </React.Fragment>
    )
};

export default JobFormHappyState;