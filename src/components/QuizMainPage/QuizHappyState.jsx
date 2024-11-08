import React from "react";


const QuizHappyState = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <div className="quiz-happy-state-wrap">
                <h3>{`${props.title}, ваш запрос № "${props.order}" принят! `}</h3>
                <p>{`${props.description}`}</p>
            </div>
        </React.Fragment>
    )
};

export default QuizHappyState;