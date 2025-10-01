import React from "react";
import portfolioDemoJpg from '../../img/contractDesign/portfolio/portfolioBig/demo.jpg';

const ContractDesignPortfolioPopup = (props) => {
    return (
        <React.Fragment>
            <div className="contract-design-portfolio-background-popup-wrap">
                <div className="contract-design-portfolio-popup-body">
                    <span 
                        className="contract-design-portfolio-popup-close-btn"
                        onClick={props.popupHandler}
                    ></span>
                    <span className="contract-design-portfolio-popup-next-btn"></span>
                    <span className="contract-design-portfolio-popup-prev-btn"></span>
                    <div className="contract-design-portfolio-popup-img-wrap">
                        <img src={portfolioDemoJpg} alt="#" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};


export default ContractDesignPortfolioPopup;