import React from "react";

const QuizStep2 = () => {
    return (
        <React.Fragment>
            <div className="quantity-wrap">
                <div className="quantity-title-wrap">
                    <h3>Количество</h3>
                </div>
                <div className="quantity-value-wrap">
                    <input type="text" value={0}/>
                </div>
                <div className="quantity-quiz-wrap">
                    <div className="quantity-quiz-range-wrap">
                        <input className="quantity-quiz-range" type="range" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default QuizStep2;