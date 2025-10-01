import React from "react";
import demo from '../../img/contractDesign/workcase/demo.png';
import ContractDesignPortfolioPopup from "./ContractDesignPortfolioPopup";

const ContractDesignWorkCase = (props) => {
    const portfolioState = props.portfolioInfo;
    const portfolioData = portfolioState.selectedPortfolio;
    const portfolioContent = portfolioData.content;
    console.log(portfolioContent.paragraphs)
    return (
        <React.Fragment>
            {/* <ContractDesignPortfolioPopup /> */}
            <div className="contract-design-portfolio-background-popup-wrap">
                <div className="contract-design-portfolio-workcase-body">
                    <span 
                        className="contract-design-portfolio-popup-close-btn" 
                        onClick={() => props.popupHandler(null)}
                    ></span>
                    <div className="contract-design-portfolio-workcase-img-wrap">
                        <img src={portfolioData.mainImgBig} alt={portfolioData.mainImgBigAlt} />
                    </div>
                    {portfolioContent.paragraphs.map((item) => {
                        return (
                            <React.Fragment key={Math.random()}>
                                <div className="contract-design-portfolio-workcase-text-wrap">
                                    <p>{item}</p>
                                </div>
                            </React.Fragment>
                        )
                    })}

                    <div className="contract-design-portfolio-workcase-row">
                        {portfolioContent.gallery.map((galItem) => {
                            return (
                                <React.Fragment key={galItem.id}>
                                    <div className="contract-design-portfolio-workcase-img-item">
                                        <img src={demo} alt="#" />
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
};


export default ContractDesignWorkCase;