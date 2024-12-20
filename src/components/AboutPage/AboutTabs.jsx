import React from "react";
import { Link } from "react-router-dom";

const AboutTabs = (props) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="about-page-production-tab-wrap">
                <div className="about-page-production-tab-links-row">
                    {props.tabs.map((tabItem) => {
                        return (
                            <React.Fragment key={tabItem.id}>
                                <div 
                                    className={tabItem.active ? "about-page-production-tab-link-wrap tab-active " : "about-page-production-tab-link-wrap"}
                                    onClick={() => props.tabHandler(tabItem.id)}
                                >
                                    <Link>{tabItem.name}</Link>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
                {props.tabs.find((item) => item.active) ? 
                    <div className="about-page-production-tab-content">
                        {props.tabs.find((item) => item.active).tabHeader}
                    </div>
                : null}
               
                </div>
                
            </div>
        </React.Fragment>
    )
};


export default AboutTabs;