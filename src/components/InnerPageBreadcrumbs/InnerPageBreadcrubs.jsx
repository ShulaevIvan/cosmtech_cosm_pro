import React from "react";
import { Link } from "react-router-dom";

const InnerPageBreadcrumbs = (props) => {
    return (
        <React.Fragment>
            <div className="inner-page-bradcrumbs-wrap" key={Math.random()}>
                <ul>
                    {props.breadcrumbs.map((breadcrumbItem) => {
                        return (
                            <React.Fragment key={breadcrumbItem.id}>
                                <li className={breadcrumbItem.main || !breadcrumbItem.active ? "mainpage" : 'current'}>
                                    <Link to={breadcrumbItem.url}>{breadcrumbItem.name}</Link>
                                </li>
                            </React.Fragment>
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
};

export default InnerPageBreadcrumbs;