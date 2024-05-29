import React from "react";
import goTopIcon from '../../img/gototop.svg'

const GoToTop = (props) => {
    return (
        <React.Fragment>
            <span 
                className="gotop-btn"
                onClick={props.goToTopHandler}
            ><img src={goTopIcon} alt="gototop"/></span>
        </React.Fragment>
    )
};

export default GoToTop;