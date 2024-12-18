import React from "react";


const ServiceInfoHover = (props) => {
    let currentPosition = props.position;
    return (
        <React.Fragment>
            <div 
                className={`${props.visible ? "service-item-hover-wrap visible" : "service-item-hover-wrap"}`} 
                style={{'left': `${props.position}%`}}
                onClick={() => props.hoverHandler(props.serviceItemId)}
            >
                <div className="service-item-hover-content-wrap">
                    <div className="service-item-hover-description-wrap">
                        <h3>{props.descriptionTitle}</h3>
                        <ul className="service-item-hover-list">
                            {props.descriptionList.map((listItem) => {
                                return (
                                    <React.Fragment key={listItem.id}>
                                        <li>{listItem.name}</li>
                                    </React.Fragment>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="service-item-hover-min-price-wrap">
                        <span>{props.minPrice === 0 ? 'Договорная' : `цены от ${props.minPrice} рублей`}</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ServiceInfoHover;