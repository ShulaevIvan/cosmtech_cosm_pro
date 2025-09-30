import React from "react";
import portfolioDemo from '../../img/contractDesign/portfolio/portfolioDemo.png';
import portfolioDemoJpg from '../../img/contractDesign/portfolio/portfolioDemo.jpg';

import ContractDesignPortfolioPopup from "./ContractDesignPortfolioPopup";
import ContractDesignWorkCase from "./ContractDesignWorkCase";

const ContractDesignPortfolio = (props) => {
    const portfolioState = props.portfolioState;
    const portfolioItems = props.portfolioItems;
    return (
        <React.Fragment>
            {portfolioState.portfolioPopupInfo.active ? <ContractDesignPortfolioPopup /> : null}
            <ContractDesignWorkCase />
            <div className="design-portfolio-row">
                {portfolioItems.map((portfolioItem) => {
                    return (
                        <React.Fragment key={portfolioItem.id}>
                            <div className="design-portfolio-item-wrap">
                                <div className="design-portfolio-item-title-wrap">
                                <h4>{portfolioItem.name}</h4>
                            </div>
                            <img src={portfolioItem.img} alt={portfolioItem.imgAlt} />
                        </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </React.Fragment>
    )
};

export default ContractDesignPortfolio;