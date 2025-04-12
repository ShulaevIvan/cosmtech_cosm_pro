import React from "react";
import { Link } from "react-router-dom";

const LinksBlock = (props) => {
    const links = props.links;
    return (
        <React.Fragment>
            <div className="article-news-link-block-wrap">
                <p className="article-news-link-block-title">Ссылки к новости:</p>
               <div className="article-news-link-block-links-wrap">
                    {links.map((item) => {
                        return (
                            <p key={Math.random()}><strong>{item.name}</strong>: <Link>{item.url}</Link></p>
                        )
                    })}
               </div>
            </div>
        </React.Fragment>
    )
};

export default LinksBlock;