import React from "react";


const ServiceInfoHover = (props) => {
    return (
        <React.Fragment>
            <div 
                className={`${props.visible ? "service-item-hover-wrap visible" : "service-item-hover-wrap"}`} 
                style={{'left': `${props.position}%`}}
            >
                <div className="service-item-hover-content-wrap">
                    <div className="service-item-hover-title-wrap">
                        <h3>{props.serviceTitle}</h3>
                    </div>
                    
                    <div className="service-item-hover-description-wrap">
                        <h4>{props.descriptionTitle}</h4>
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
                        <span>{`цены от ${props.minPrice} рублей`}</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default ServiceInfoHover;