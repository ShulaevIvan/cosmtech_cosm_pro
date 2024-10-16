import React from "react";

const QuizMainPage = (props) => {
    const stepData = props.stepData;
    const products = stepData.products;

    return (
        <React.Fragment>
            <div className="quiz-products-row">
                {products.filter((item) => item.page === props.stepData.productPages.find((item) => item.selected).page).map((productItem) => {
                    return (
                        <React.Fragment key={productItem.id}>
                            <div 
                                className="quiz-products-item"
                                onClick={() => props.productSelectHandler(productItem)}
                            >
                                <div className="quiz-product-img-wrap">
                                    <img src={productItem.image} alt={productItem.name} />
                                </div>
                                <div className="quiz-product-selected-icon-wrap">
                                    <img src={productItem.selected ? productItem.checkboxIconActive : productItem.checkboxIconInactive} alt="выбор продукта quiz" />
                                </div>
                                <div className="quiz-product-decription-wrap">
                                    <h4>{productItem.name}</h4>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}              
            </div>
            <div className="quiz-package-pages-wrap">
                <div className="quiz-package-pages-items">
                    {stepData.productPages.map((pageItem) => {
                        return (
                            <React.Fragment key={pageItem.id}>
                                <div className="quiz-package-page-item">
                                    <button
                                        onClick={() => props.productPageHandler(pageItem.id)} 
                                        className={pageItem.selected ? "quiz-package-page-item-slide-btn-active" : "quiz-package-page-item-slide-btn"}
                                    ></button>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
};


export default QuizMainPage;