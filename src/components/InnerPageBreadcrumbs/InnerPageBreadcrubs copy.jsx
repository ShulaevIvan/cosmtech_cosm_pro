import React from "react";

const InnerPageBreadcrumbs = (props) => {
    console.log(props.breadcrumbs)
    return (
        <React.Fragment>
            <div className="inner-page-bradcrumbs-wrap">
                <ul>
                    <li className="mainpage"><a href="index.html">Контрактное производство</a></li>
                    <li className="current"><a href="#">Контакты</a></li>
                </ul>
            </div>
        </React.Fragment>
    )
};

export default InnerPageBreadcrumbs;