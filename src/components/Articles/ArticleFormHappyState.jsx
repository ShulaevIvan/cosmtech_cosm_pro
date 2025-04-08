import React from "react";

const ArticleFormHappyState = (props) => {
    return (
        <React.Fragment>
            <div className="article-form-happy-state-popup-wrap">
                <div className="article-form-happy-state-body">
                    <span 
                        className="for-clients-detail-popup-close-btn"
                        onClick={props.closeHander}
                    ></span>
                    <div className="article-form-happy-state-message-wrap">
                        <h3>Спасибо за обращение!</h3>
                        <p>С вами свяжутся в ближайшее время!</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};


export default ArticleFormHappyState;