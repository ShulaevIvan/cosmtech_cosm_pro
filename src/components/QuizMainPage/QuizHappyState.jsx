import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { quizComplite } from "../../redux/slices/quizSlice";
const QuizHappyState = (props) => {
    return (
        <React.Fragment>
            <div className="quiz-happy-state-wrap">
                <p>{`${props.title}, ваш запрос`}<span className="quiz-happy-state-order">{`№ "${props.order}"`}</span> принят!</p>
                <p>{`${props.description}`}</p>
                <div className="quiz-happy-state-to-mainpage">
                    <Link onClick={() => props.closeHandler(false)}>На главную</Link>
                </div>
            </div>
        </React.Fragment>
    )
};

export default QuizHappyState;