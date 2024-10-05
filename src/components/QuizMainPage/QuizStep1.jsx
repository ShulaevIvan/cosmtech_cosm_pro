import React from "react";

const QuizMainPage = (props) => {
    const products = props.stepData.products;

    return (
        <React.Fragment>
            <div className="quiz-products-row">
                {products.map((productItem) => {
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
        </React.Fragment>
    )
};


export default QuizMainPage;