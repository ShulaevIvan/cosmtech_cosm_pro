import React from "react";
import portfolioDemo from '../../img/contractDesign/portfolio/portfolioDemo.png';
import portfolioDemoJpg from '../../img/contractDesign/portfolio/portfolioDemo.jpg';

import ContractDesignPortfolioPopup from "./ContractDesignPortfolioPopup";
import ContractDesignWorkCase from "./ContractDesignWorkCase";

const ContractDesignPortfolio = (props) => {
    const portfolioState = props.portfolioState;

    return (
        <React.Fragment>
            {/* {portfolioState.portfolioPopupInfo.popupActive ? <ContractDesignPortfolioPopup /> : null} */}
            {portfolioState.portfolioPopupInfo.popupActive ? 
                <ContractDesignWorkCase 
                    popupHandler={props.portfolioInfoPopupHandler}
                    portfolioInfo={portfolioState.portfolioPopupInfo}
                />
            : null}
            <div className="design-portfolio-row">
                {portfolioState.portfolioItems.map((portfolioItem) => {
                    return (
                        <React.Fragment key={portfolioItem.id}>
                            <div 
                                className="design-portfolio-item-wrap"
                                onClick={() => props.portfolioInfoPopupHandler(portfolioItem.id)}
                            >
                                <div className="design-portfolio-item-title-wrap">
                                <h4>{portfolioItem.name}</h4>
                            </div>
                            <img src={portfolioItem.mainImg} alt={portfolioItem.mainImgAlt} />
                        </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </React.Fragment>
    )
};

export default ContractDesignPortfolio;