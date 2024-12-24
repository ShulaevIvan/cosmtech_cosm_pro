import React from "react";
import { Link } from "react-router-dom";
import aboutProductionImg from '../../img/aboutProduction.jpg'

const ProductionTypes = (props) => {
    
    return (
        <React.Fragment>
            <div className="container">
                <div className="about-company-production-title-wrap">
                    <h2>Типы производимой продукции</h2>
                </div>
                <div className="about-company-production-row">
                    <div className="about-company-production-goods-row">
                        {props.productionTypes.map((productionItem) => {
                            return (
                                <React.Fragment key={productionItem.id}>
                                    <div className="about-company-production-good-item-row">
                                        <div className="about-company-production-good-item-icon">
                                            <img src={productionItem.img} alt={productionItem.imgAlt} />
                                        </div>
                                        <div className="about-company-production-good-item-text">
                                            {productionItem.name}
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                    <div className="about-company-production-photo">
                        <div className="about-company-production-photo-wrap">
                            <img src={aboutProductionImg} alt={'Косметика на заказ от производителя Космотех'} />
                        </div>
                        <div className="about-company-production-consult-row">
                            <Link 
                                onClick={props.popupHandler}
                                className="about-company-production-consult-btn"
                            >Узнать больше</Link>
                        </div>
                    </div>
                   
                </div>
            </div>
        </React.Fragment>
    )
};

export default ProductionTypes;