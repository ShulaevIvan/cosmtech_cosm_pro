import React from "react";
import { useEffect, useRef } from "react";
import imgHold from '../../img/quizImages/100x150.png';
import imgHold2 from '../../img/quizImages/175x150.png'
import imgHold3 from '../../img/quizImages/125x100.png'
import imgHold4 from '../../img/quizImages/250x250.png'
import testImg from '../../img/quiz_checkbox.svg';
import testImg2 from '../../img/quiz_checkbox-active.svg';

const QuizStep3 = (props) => {
    const stepData = props.stepData;
    const packageSizeRef = useRef(null);

    useEffect(() => {
        console.log(packageSizeRef.current.value)
    }, [packageSizeRef.current])

    return (
        <React.Fragment>
            <div className="quiz-package-wrap">
                <div className="quiz-package-items-row">
                    {stepData.package.filter((item) => item.page === 1).map((packageItem) => {
                        return (
                            <React.Fragment key={packageItem.id}>
                                <div
                                    onClick={() => props.selectPackageHandler(packageItem.id)}
                                    className="quiz-package-item"
                                >
                                    <div className="quiz-package-item-img-wrap">
                                        <img src={imgHold4} alt="#" />
                                    </div>
                                    <div className="quiz-package-item-title-wrap">
                                        <h4>{packageItem.name}</h4>
                                    </div>
                                    <div className="quiz-package-item-size-wrap">
                                        <select
                                            ref={packageSizeRef} 
                                        >
                                            {packageItem.sizes.map((sizeItem) => {
                                                return (
                                                    <React.Fragment key={sizeItem.id}>
                                                        <option
                                                        >{`${sizeItem.value} ${sizeItem.name}`}</option>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="quiz-package-checkbox-wrap">
                                        {packageItem.selected ? <img src={testImg2} alt="#"/> : <img src={testImg} alt="#"/>}
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                <div className="quiz-package-pages-wrap">
                    <div className="quiz-package-pages-items">
                        {stepData.packagePages.map((pageItem) => {
                            return (
                                <React.Fragment key={pageItem.id}>
                                    <div className="quiz-package-page-item">
                                        <button 
                                            className={pageItem.active ? "quiz-package-page-item-slide-btn-active" : "quiz-package-page-item-slide-btn"}
                                        ></button>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                        
                    </div>
                </div>

                <div className="quiz-package-custom-package-wrap">
                    <div className="quantity-custom-wrap">
                        <input 
                        type="checkbox" id="quiz-package-custom-package-value" className="checkbox-custom-hero-form" />
                        <label
                            onClick={() => props.showCustomPackageHandler(stepData.customPackageActive ? false : true)}
                            htmlFor="quiz-package-custom-package-value"
                        ></label>
                        <span>Указать свой вариант</span>
                    </div>
                    {stepData.customPackageActive ?
                        <React.Fragment>
                            <div className="quiz-package-custom-package-input">
                                <div className="quiz-package-custom-input-wrap">
                                    <textarea></textarea>
                                    <label className="input-file">
                                        <input type="file" />
                                        <span className="quiz-package-custom-package-input-file-btn">Файл...</span>
                                    </label>
                                    <span className="quiz-package-custom-package-btn-wrap">
                                        <button className="quiz-package-custom-package-btn">Сохранить</button>
                                    </span>
                                </div>
                            </div>
                        </React.Fragment>
                    : null}
                </div>
               
            </div>
        </React.Fragment>
    )
};

export default QuizStep3;