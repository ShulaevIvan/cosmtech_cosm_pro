import React from "react";
// import demoImg from '../../img/180x300.png';
import demoImg from '../../img/230x300.png';
import quizCheckbox from '../../img/quiz_checkbox.svg';
import quizCheckboxActive from '../../img/quiz_checkbox-active.svg';

const QuizMainPage = (props) => {
    return (
        <React.Fragment>
            <div className="quiz-mainpage-popup-wrap">
                <div className="quiz-mainpage-body-row">
                    <div className="quiz-controlpanel-wrap">
                        <div className="quiz-controlpanel-item quiz-controlpanel-item-active">1</div>
                        <div className="quiz-controlpanel-item">2</div>
                        <div className="quiz-controlpanel-item">3</div>
                        <div className="quiz-controlpanel-item">4</div>
                    </div>
                        <div className="quiz-content-wrap">
                        <div className="quiz-mainpage-title-row">
                            <div className="quiz-mainpage-title-wrap">
                                <h2>Test stage question asd asd asd asd asd ?</h2>
                            </div>
                            <div className="quiz-mainpage-close-btn-wrap">
                                <span 
                                    className="close-popup-btn"
                                    onClick={props.closeHandler}
                                ></span>
                            </div>
                        </div>
                        <div className="quiz-mainpage-content-wrap">
                            <div className="quiz-products-row">
                                <div className="quiz-products-item">
                                    <div className="quiz-product-img-wrap">
                                        <img src={demoImg} alt="" />
                                    </div>
                                    <div className="quiz-product-selected-icon-wrap">
                                        <img src={quizCheckbox} alt="" />
                                    </div>
                                    <div className="quiz-product-decription-wrap">
                                        <h4>product description</h4>
                                    </div>
                                </div>
                                <div className="quiz-products-item">
                                    <div className="quiz-product-img-wrap">
                                        <img src={demoImg} alt="" />
                                    </div>
                                    <div className="quiz-product-selected-icon-wrap">
                                        <img src={quizCheckbox} alt="" />
                                    </div>
                                    <div className="quiz-product-decription-wrap">
                                        <h4>product description</h4>
                                    </div>
                                </div>
                                <div className="quiz-products-item">
                                    <div className="quiz-product-img-wrap">
                                        <img src={demoImg} alt="" />
                                    </div>
                                    <div className="quiz-product-selected-icon-wrap">
                                        <img src={quizCheckbox} alt="" />
                                    </div>
                                    <div className="quiz-product-decription-wrap">
                                        <h4>product description</h4>
                                    </div>
                                </div>
                                <div className="quiz-products-item">
                                    <div className="quiz-product-img-wrap">
                                        <img src={demoImg} alt="" />
                                    </div>
                                    <div className="quiz-product-selected-icon-wrap">
                                        <img src={quizCheckbox} alt="" />
                                    </div>
                                    <div className="quiz-product-decription-wrap">
                                        <h4>product description</h4>
                                    </div>
                                </div>
                                <div className="quiz-products-item">
                                    <div className="quiz-product-img-wrap">
                                        <img src={demoImg} alt="" />
                                    </div>
                                    <div className="quiz-product-selected-icon-wrap">
                                        <img src={quizCheckboxActive} alt="" />
                                    </div>
                                    <div className="quiz-product-decription-wrap">
                                        <h4>product description</h4>
                                    </div>
                                </div>
                                <div className="quiz-products-item">
                                    <div className="quiz-product-img-wrap">
                                        <img src={demoImg} alt="" />
                                    </div>
                                    <div className="quiz-product-selected-icon-wrap quiz-product-selected-icon-wrap-active">
                                        <img src={quizCheckbox} alt="" />
                                    </div>
                                    <div className="quiz-product-decription-wrap">
                                        <h4>product description</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="next-step-wrap">
                            <div className="next-step-btn-wrap">
                                <span className="next-step-btn">Next step</span>
                            </div>
                            <div className="step-counter-wrap">
                                <div className="step-counter-value">
                                    <span><span>Step:</span> 0 / </span>
                                    <span>3</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};


export default QuizMainPage;