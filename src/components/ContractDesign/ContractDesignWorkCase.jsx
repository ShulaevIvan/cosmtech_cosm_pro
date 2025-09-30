import React from "react";
import demo from '../../img/contractDesign/workcase/demo.png';
import ContractDesignPortfolioPopup from "./ContractDesignPortfolioPopup";

const ContractDesignWorkCase = () => {
    return (
        <React.Fragment>
            {/* <ContractDesignPortfolioPopup /> */}
            <div className="contract-design-portfolio-background-popup-wrap">
                <div className="contract-design-portfolio-workcase-body">
                    <span className="contract-design-portfolio-popup-close-btn"></span>
                    <div className="contract-design-portfolio-workcase-img-wrap">
                        <img src={demo} alt="#" />
                    </div>

                    <div className="contract-design-portfolio-workcase-text-wrap">
                        <p>
                        Мы любим животных 
                        и стараемся поддерживать тех из них, 
                        кому не посчастливилось иметь ласковых хозяев и тёплый кров. 
                        Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». 
                        Благодаря их труду ежегодно сотни питомцев находят свой новый дом.
                        </p>
                    </div>

                    <div className="contract-design-portfolio-workcase-text-wrap">
                        <p>
                        Мы любим животных 
                        и стараемся поддерживать тех из них, 
                        кому не посчастливилось иметь ласковых хозяев и тёплый кров. 
                        Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». 
                        Благодаря их труду ежегодно сотни питомцев находят свой новый дом.
                        </p>
                    </div>

                    <div className="contract-design-portfolio-workcase-text-wrap">
                        <p>
                        Мы любим животных 
                        и стараемся поддерживать тех из них, 
                        кому не посчастливилось иметь ласковых хозяев и тёплый кров. 
                        Один из проверенных способов это сделать — помочь благотворительному фонду «Луч Добра». 
                        Благодаря их труду ежегодно сотни питомцев находят свой новый дом.
                        </p>
                    </div>

                    <div className="contract-design-portfolio-workcase-row">
                        <div className="contract-design-portfolio-workcase-img-item">
                            <img src={demo} alt="#" />
                        </div>
                        <div className="contract-design-portfolio-workcase-img-item">
                            <img src={demo} alt="#" />
                        </div>
                        <div className="contract-design-portfolio-workcase-img-item">
                            <img src={demo} alt="#" />
                        </div>
                        <div className="contract-design-portfolio-workcase-img-item">
                            <img src={demo} alt="#" />
                        </div>
                        <div className="contract-design-portfolio-workcase-img-item">
                            <img src={demo} alt="#" />
                        </div>
                        <div className="contract-design-portfolio-workcase-img-item">
                            <img src={demo} alt="#" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
};


export default ContractDesignWorkCase;