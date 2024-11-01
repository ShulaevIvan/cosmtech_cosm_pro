import React from "react";
import { useEffect, useRef } from "react";
import sortArrWithParam from "../../functions/sortArrWithParam";
import testImg from '../../img/quiz_checkbox.svg';
import testImg2 from '../../img/quiz_checkbox-active.svg';

const QuizStep3 = (props) => {
    const stepData = props.stepData;
    const packageRef = useRef(null);
    const fileRef = useRef(null);
    const customPackageRef = useRef(null);

    useEffect(() => {
        props.validateStep();
    }, [stepData.package, stepData.customPackage, stepData.customPackage.fieldValid]);


    return (
        <React.Fragment>
            <div className="quiz-package-wrap">
                <div className="quiz-package-items-row">
                    {stepData.package.filter((item) => item.page === 1).map((packageItem) => {
                        return (
                            <React.Fragment key={packageItem.id}>
                                <div className={packageItem.selected ? "quiz-package-item" : "quiz-package-item quiz-products-item-not-select"}>
                                    <div className="quiz-package-item-img-wrap">
                                        <img
                                            onClick={() => props.selectPackageHandler(packageItem.id)}
                                            src={packageItem.image} alt={`${packageItem.name}`} 
                                        />
                                        <div className="quiz-package-checkbox-wrap">
                                            {packageItem.selected ? <img src={testImg2} alt="#"/> : <img src={testImg} alt="#"/>}
                                        </div>
                                    </div>
                                    {packageItem.selected ?
                                        <React.Fragment>
                                            <div className="quiz-package-item-size-wrap">
                                                <select
                                                    ref={packageRef}
                                                    onChange={(e) => props.selectPackageSizeHandler(e.target.value, packageItem)}
                                                >
                                                    {sortArrWithParam(packageItem.sizes, 'selected', 'bool').map((sizeItem) => {
                                                        const sizeName = `${sizeItem.from} ${sizeItem.value} ${sizeItem.to} ${sizeItem.max} ${sizeItem.name}`;
                                                        return (
                                                            <React.Fragment key={sizeItem.id}>
                                                                <option value={sizeName}>
                                                                    {`${sizeName}`}
                                                                </option>
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </React.Fragment>
                                    : null}
                                      <div className="quiz-package-item-title-wrap">
                                            <h4>{packageItem.name}</h4>
                                        </div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>

                <div className="quiz-package-custom-package-wrap">
                    <div className="quantity-custom-wrap">
                        <input
                            checked={stepData.customPackage.active}
                            type="checkbox" 
                            id="quiz-package-custom-package-value" 
                            className="checkbox-custom-hero-form" 
                            onChange={() => props.showCustomPackageHandler(stepData.customPackage.active ? false : true)}
                        />
                        <label
                          
                            htmlFor="quiz-package-custom-package-value"
                        ></label>
                        <span>Указать свой вариант</span>
                    </div>
                    {stepData.customPackage.active ?
                        <React.Fragment>
                            <div className="quiz-package-custom-package-description-wrap">
                                <span>Пример (ссылка) на готовый продукт, описание или загрузите фото упаковки/продукта</span>
                            </div>
                            <div className="quiz-package-custom-package-input">
                                <div className="quiz-package-custom-input-wrap">
                                    <textarea
                                        ref={customPackageRef}
                                        className={stepData.customPackage.fieldValid ? '' : 'input-err'}
                                        onChange={() => props.validateCustomPackageHandler(customPackageRef.current.value)}
                                        onKeyDown={(e) => props.clearCustomPackageText(e, customPackageRef.current)}
                                        placeholder="описание..."
                                    ></textarea>
                                    <label className="input-file">
                                        <input
                                            type="file"  
                                            onChange={(e) => props.loadFileHandler(e, customPackageRef.current.value, fileRef.current)}
                                        />
                                        <span className="quiz-package-custom-package-input-file-btn">Файл/Фото...</span>
                                       
                                    </label>
                                    <span ref={fileRef} className="quiz-package-custom-package-upload-filename"></span>
                                    
                                    
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