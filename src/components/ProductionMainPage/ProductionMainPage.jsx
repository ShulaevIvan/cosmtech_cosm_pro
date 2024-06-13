import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProduction } from "../../redux/slices/mainPageSlice";
import ProductionMainPageHover from "../ProductionMainPageHover/ProductionMainPageHover";

const ProductionMainPage = () => {
    const dispatch = useDispatch();
    const productionState = useSelector((state) => state.mainPage.production);

    const selectProductionHandler = (e, id, status) => {
        const rect = e.target.getBoundingClientRect();
        dispatch(selectProduction({status: status, productionId: id, left: rect.x / 2, right: rect.y}))
    };

    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="how-towork-wrap">
                        <div className="our-facts-title-wrap">
                            <h3 className="main-color-title">Этапы производства</h3>
                        </div>
                        <div className="container-center">
                            <ul className="timeline">
                                {productionState.productionItems.map((productionItem) => {
                                    return (
                                        <React.Fragment key={Math.random()}>
                                            {productionItem.active ? 
                                                <ProductionMainPageHover
                                                    positionLeft={productionState.mousePosLeft}
                                                    positionRight={productionState.mousePosRight}
                                                    description={productionItem.description}
                                                    closeHandler={selectProductionHandler}
                                                /> 
                                            : null}
                                            <li 
                                                className={productionItem.active ? "active" : null}
                                                onClick={(e) => selectProductionHandler(e, productionItem.id, true)}
                                            >{productionItem.name}</li>
                                        </React.Fragment>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default ProductionMainPage;