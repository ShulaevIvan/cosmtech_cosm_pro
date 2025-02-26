import React from "react";
import infoIcon from '../../img/service-info-icon.svg';

const TzPriceSegment = (props) => {
    const tzState = props.tzState;
    const deviceWidth = window.innerWidth;

    return (
        <React.Fragment>
            <div className="sticky-sidemenu-price-segment-wrap">
                <div className="sticky-sidemenu-price-segment-row">
                    {tzState.priceSegment.segments.map((segmentItem) => {
                        return (
                            <React.Fragment key={segmentItem.id}>
                                <div 
                                    className={`sticky-sidemenu-price-segment-item ${segmentItem.selected ? 'selected' : null}`}
                                >
                                    {segmentItem.descriptionActive ? 
                                        <div 
                                            className="sticky-sidemenu-price-segment-item-description-wrap"
                                            onMouseLeave={
                                                deviceWidth >= 1024 ? 
                                                    () => props.descriptionHandler(segmentItem.id, segmentItem.name, false) : null
                                            }
                                            onClick={() => props.descriptionHandler(segmentItem.id, segmentItem.name, false)}
                                        >
                                            {segmentItem.description}
                                        </div>
                                    : null}
                                    <div 
                                        className="sticky-sidemenu-price-segment-item-name"
                                        onClick={() => props.selectSegmentHandler(segmentItem.id, segmentItem.name)}
                                    >{segmentItem.name}</div>
                                    {!segmentItem.selected ? 
                                        <div className="sticky-sidemenu-price-segment-item-img-wrap">
                                            {!segmentItem.descriptionActive ? 
                                                <img
                                                    onMouseEnter={
                                                        deviceWidth >= 1024 ? 
                                                            () => props.descriptionHandler(segmentItem.id, segmentItem.name, true) : null
                                                    }
                                                    onClick={() => props.descriptionHandler(segmentItem.id, segmentItem.name, true)}
                                                    src={infoIcon}
                                                    alt={`описание ценовой политики ${segmentItem.name}`} 
                                                />
                                            : null}
                                           
                                        </div> 
                                    : null}
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
};

export default TzPriceSegment;