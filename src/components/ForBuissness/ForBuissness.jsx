import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buissnesHoverShow } from "../../redux/slices/mainPageSlice";

const ForBuissness = () => {
    const dispatch = useDispatch();
    const forBuissnessState = useSelector((state) => state.mainPage.useForBuissness);

    const buissnessItemHandler = (item) => {
        if (!item) {
            dispatch(buissnesHoverShow({ buissnessItemId: item.id, status: false, hide: true }));
            return;
        }
        dispatch(buissnesHoverShow({ buissnessItemId: item.id, status: true, hide: false }));
    };

    return (
        <React.Fragment>
            <section>
                    <div className="use-for-buissness-wrap">
                        <div className="container">
                            <div className="use-for-buissness-title-wrap">
                                <h3>Наши услуги подходят для</h3>
                            </div>
                            <div 
                                className="use-for-buissness-row"
                                onMouseLeave={() => buissnessItemHandler(false)}
                            >
                                {forBuissnessState.buissnessTypes.map((buissnessItem) => {
                                    return (
                                        <React.Fragment key={buissnessItem.id}>
                                            <div 
                                                className="use-for-buissness-item"
                                                onMouseOver={() => buissnessItemHandler(buissnessItem)}
                                            >   
                                                {!buissnessItem.activeHover ? 
                                                    <React.Fragment>
                                                        <div className="user-for-buissness-item-name">
                                                            <h4>{buissnessItem.name}</h4>
                                                        </div>
                                                    </React.Fragment>
                                                : null}
                                           
                                                {buissnessItem.activeHover ? 
                                                    <React.Fragment>
                                                        <div className="use-for-buissness-item-hover">
                                                            <p>{buissnessItem.description}</p>
                                                        </div>
                                                    </React.Fragment>
                                                : null}
                                            
                                                <div className="use-for-buissness-img">
                                                    <img src={buissnessItem.image} alt={buissnessItem.name} />
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
            </section>
        </React.Fragment>
    );
};

export default ForBuissness;