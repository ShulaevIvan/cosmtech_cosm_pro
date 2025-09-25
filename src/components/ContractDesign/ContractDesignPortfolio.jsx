import React from "react";
import portfolioDemo from '../../img/contractDesign/portfolio/portfolioDemo.png';
import portfolioDemoJpg from '../../img/contractDesign/portfolio/portfolioDemo.jpg';

import ContractDesignPortfolioPopup from "./ContractDesignPortfolioPopup";

const ContractDesignPortfolio = () => {
    return (
        <React.Fragment>
            {/* <ContractDesignPortfolioPopup /> */}
            <div className="design-portfolio-row">
                <div className="design-portfolio-item-wrap">
                    <img src={portfolioDemoJpg} alt="#" />
                </div>
                <div className="design-portfolio-item-wrap">
                    <img src={portfolioDemoJpg} alt="#" />
                </div>
                <div className="design-portfolio-item-wrap">
                    <img src={portfolioDemoJpg} alt="#" />
                </div>
                <div className="design-portfolio-item-wrap">
                    <img src={portfolioDemoJpg} alt="#" />
                </div>
                <div className="design-portfolio-item-wrap">
                    <img src={portfolioDemoJpg} alt="#" />
                </div>
                <div className="design-portfolio-item-wrap">
                    <img src={portfolioDemoJpg} alt="#" />
                </div>
                <div className="design-portfolio-item-wrap">
                    <img src={portfolioDemoJpg} alt="#" />
                </div>
                <div className="design-portfolio-item-wrap">
                    <img src={portfolioDemoJpg} alt="#" />
                </div>
            </div>
        </React.Fragment>
    )
};

export default ContractDesignPortfolio;